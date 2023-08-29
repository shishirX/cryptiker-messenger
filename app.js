//Library imports
import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt from "jsonwebtoken";

//modules imports
import authRouter from "./routes/authenticationRoute.js";
import connectDB from "./db/connect.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";

//dotenv config
dotenv.config();
//express app
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/v1", authRouter);

//test only
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, "jwtSecret", (err, user) => {
            if (err) return res.status(403).json("Token is not valid");
            req.user = user;
            next();
        });
    } else {
        res.status(401).json("You are not authenticated");
    }
};

app.get("/protected", verifyToken, (req, res) => {
    if (req.user) {
        return res.status(200).json(req.user);
    }
    res.status(500).json("No user was found");
});
app.post("/test", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.send("Provide credentials");
    const token = await jwt.sign({ username }, "jwtSecret", {
        expiresIn: "1m",
    });
    res.status(200).json({ username, token });
});
//test ends here

app.use(errorHandlerMiddleware);

const port = process.env.PORT ?? 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Listening to port ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();
