const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")( 'sk_test_51JInmpSBPFeayiAwkrq8vdAWE1cyJcXUktfQRhvWV8E8WRZVvfUr7uuTVyeWfAL6f1Gb0SRNYQo0YFDxytc5qZGg00XG3cWzKc' )
// API

// App config
const app = express();
// MIDDLEWARES
app.use(cors({ origin: true}));
app.use(express.json());

// API routes
app.post('/payments/create', async (request,response) =>
{
    const total = request.query.total;
    console.log(' payment request recieved for this amount', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of currency 
        currency: "inr",
        
    });
    // OK created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.API = functions.https.onRequest(app);
// example end point
//http://localhost:5001/clone-4edb9/us-central1/API




