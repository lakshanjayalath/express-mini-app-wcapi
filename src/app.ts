import express, { response } from "express";
import dotenv from "dotenv";
import axios from "axios";
import { APP_CONFIG } from "./config/app.config";
import { MessageController } from "./controller/message.controller";
import { WebhookController } from "./controller/webhook.controller";
import mongoose from "mongoose";


const app = express();

app.use(express.json());

const messageController = new MessageController();
const webhookController = new WebhookController();

app.post("/send-message", messageController.sendMessage);

app.get("/webhook", webhookController.webhook);
app.post("/webhook", webhookController.webhookMessage);

app.get("/health", (req, res) => {
    res.send('OK');
});

mongoose.connect(APP_CONFIG.MONGO_URI).then(() => {
    console.log("Connected to MONGODB");
    app.listen(8558, () => {
        console.log("Server is running on port 8558");
    });
}).catch((err)=> {
    console.log(err);
})

// app.listen(8558, () => {
//     console.log("Server is running on port 8558");
// });

