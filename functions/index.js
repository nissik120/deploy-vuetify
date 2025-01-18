/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const {onCustomEventPublished} = require('firebase-functions/v2/eventarc');

// other stuff in your firebase functions

// eventarc events (for Stripe payments extension)
exports.onCheckoutSessionCompleted = onCustomEventPublished(
  'com.stripe.v1.checkout.session.completed', 
  (event) => {
    // handle event
    // get the same JSON ojbect you see in the Stripe dashboard
    const eventData = event.data;

    // for example, check if the payment was a one time payment:
    if (eventData.mode === 'payment') {
      // one time payment was succesful, handle it...
    }
});