import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
    res.send("login");
};
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await UserModel.create({ name, email, password });
    await jwt.sign(
        { userID: user._id },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h",
        },
        (err, token) => {
            if (err) throw err;
            res.status(201)
                .cookie("token", token, {
                    httpOnly: true,
                    maxAge: 3600000,
                })
                .json({ id: user._id, email: user.email, name: user.name });
        }
    );
};
