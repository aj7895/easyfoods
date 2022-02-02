import React, { useState } from "react";
import { Modal, Rate, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { addProductReview } from "../redux/actions/productActions";

const { TextArea } = Input;
const Review = ({ product }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const submitReview = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      let alreadyReviewed;

      for (let i = 0; i < product.reviews.length; i++) {
        if (product.reviews[i].userid === currentUser._id) {
          alreadyReviewed = true;
        }
      }
      if (alreadyReviewed) {
        message.warn("You cannot submit a review more than once");
      } else {
        const review = {
          rating: rating,
          comment: comment,
        };
        dispatch(addProductReview(review, product._id));
        setTimeout(() => {
          setIsModalVisible(false);
        }, 2000);
      }
    } else {
      window.location = "/login";
    }
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <div
        onClick={showModal}
        className="px-[10px] flex cursor-pointer gap-[5px] text-[12px] text-gray-300"
      >
        <i className="bx bxs-star text-green-400 text-[16px]" />
        <span className="font-semibold">{Math.round(product.rating)}</span>
        <span>Rating</span>
      </div>
      <Modal
        title="Add your review"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="submit" type="primary" onClick={submitReview}>
            Submit your review
          </Button>,
        ]}
      >
        <TextArea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Rate onChange={(value) => setRating(value)} value={rating} />
      </Modal>
    </div>
  );
};

export default Review;
