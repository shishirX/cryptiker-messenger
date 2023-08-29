import mongoose from "mongoose";

const connectDB = async (uri) => {
    mongoose.connect(uri).then(() => {
        console.log(`connected to mongodb atlas`);
    });
};

export default connectDB;
