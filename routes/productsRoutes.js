const express = require("express");
const router = express.Router();
const Product = require("../models/productModel.js");

// getting all products
router.get("/getallproducts", async (request, response) => {
  try {
    const products = await Product.find();
    response.send(products);
  } catch (error) {
    return response.status(400).json(error);
  }
});

// for posting/getting product id
router.post("/getproductbyid", async (request, response) => {
  try {
    const product = await Product.find({ _id: request.body.productid });
    response.send(product[0]);
  } catch (error) {
    console.log(error);
    return response.status(400).json(error);
  }
});

// for putting review of product
router.post("/addreview", async (request, response) => {
  try {
    const { review, productId, currentUser } = request.body;
    const product = await Product.findById({ _id: productId });
    const myReview = {
      name: currentUser.name,
      userid: currentUser._id,
      rating: review.rating,
      comments: review.comment,
    };
    product.reviews.push(myReview);
    let rating =
      product.reviews.reduce((acc, x) => acc + x.rating, 0) /
      product.reviews.length;
    product.rating = rating;
    product.save();
    response.send("review submitted successfully");
  } catch (error) {
    console.log(error);
  }
});

// Deleting product
router.post("/deleteproduct", async (request, response) => {
  try {
    await Product.findByIdAndRemove(request.body.productid);
    response.send("user deleted successfully");
  } catch (error) {
    console.log(error);
    return response.status(400).json(error);
  }
});

// Inserting product
router.post("/addproduct", async (request, response) => {
  try {
    const newProduct = new Product(request.body);
    await newProduct.save();
    response.send("Product inserted successfully");
  } catch (error) {
    console.log(error);
    return response.status(400).json(error);
  }
});

// updating product
router.post("/updateproduct", async (request, response) => {
  try {
    const { productid, product } = request.body;
    await Product.findByIdAndUpdate(productid, {
      name: product.name,
      image: product.image,
      category: product.category,
      desc: product.desc,
      price: product.price,
      discount: product.discount,
      countInStock: product.countInStock,
    });
    response.send("Product updated successfully");
  } catch (error) {
    console.log(error);
    return response.status(400).json(error);
  }
});

module.exports = router;
