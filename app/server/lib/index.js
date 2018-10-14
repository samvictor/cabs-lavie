"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.yes = functions.https.onRequest((request, response) => {
    response.send("Hello from Firesssbase!");
});
//# sourceMappingURL=index.js.map