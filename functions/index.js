const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQAjmDsvU6SZH0lVUD6qBnekI90VBuNyynX9vv8ZnhRlvwBGSQLrXX797KCkSgcZ3U6e1Q1xbGwgbByZKshJttN00B99vCrmQ"
);

//API

// - App connfig
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //ok
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);
