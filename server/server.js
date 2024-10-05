const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const messageRoute = require("./MessageRoute");
const cors = require('cors');


const PORT = process.env.PORT || 4004;
// console.log("PORT : ", PORT);

app.use(express.json());

const allowedOrigins = [
    "http://localhost:3000", // For local development
    // For Render deployment
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

app.use("/api", messageRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

