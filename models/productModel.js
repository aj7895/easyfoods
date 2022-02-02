const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: String,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
  },
  {
    timeStamps: true,
  }
);

const Product = mongoose.model("products", productSchema);
module.exports = Product;
