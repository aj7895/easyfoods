const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const Order = require("../models/orderModel.js");
const stripe = require("stripe")(
  "sk_test_51KMZp3ImZKNDHkIfG1Hi2T0qOsvC4bNve6toDnjSaJAeFPdL9UmcXZOGpnHj9KTcGIQIbPdFSKoZs9p4Xeie7iiX00RfENUbh5"
);

// route for placing order
router.post("/placeorder", async (request, response) => {
  const { token, cartItems, currentUser, amount } = request.body;
  try {
    //   step 1 creating customer
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    //   step 2 creating payment
    const payment = await stripe.charges.create(
      {
        amount: amount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    // if there is payment then save the order in db
    if (payment) {
      const newOrder = new Order({
        userId: currentUser._id,
        name: currentUser.name,
        email: currentUser.email,
        orderItems: cartItems,
        shippingAddress: {
          address: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          postalCode: token.card.address_zip,
        },
        orderAmount: amount,
        transactionId: payment.source.id,
        isDelivered: false,
      });
      await newOrder.save();
      response.send("order placed successfully");
    } else {
      return response.status(400).json({ message: "error" });
    }
  } catch (error) {
    console.log(error);
  }
});

// for getting order of particular user
router.post("/getordersbyuserid", async (request, response) => {
  try {
    const userId = request.body.userId;
    const myOrders = await Order.find({ userId: userId });
    response.send(myOrders);
  } catch (error) {
    console.log(error);
  }
});

// for getting order by id
router.post("/getorderbyid", async (request, response) => {
  try {
    const orderId = request.body.orderId;
    const myOrder = await Order.find({ _id: orderId });
    response.send(myOrder);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
