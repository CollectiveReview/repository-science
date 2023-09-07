/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const WebSocket = require('ws');

exports.websocket = functions.https.onRequest((request, response) => {
    // Initialize a WebSocket server within this function
    const wss = new WebSocket.Server({ noServer: true });

    wss.on('connection', (ws) => {
        console.log('WebSocket client connected');

        // Handle WebSocket events here
        ws.on('message', (message) => {
            console.log('Received message:', message);
            // Handle the WebSocket message
        });

        ws.on('close', () => {
            console.log('WebSocket client disconnected');
            // Handle WebSocket client disconnection
        });
    });

    // Upgrade the incoming HTTP request to WebSocket
    request.on('upgrade', (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, (ws) => {
            wss.emit('connection', ws, request);
        });
    });
});


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
