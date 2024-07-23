import mongoose from "mongoose";

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        // console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log("Conneced to MongoDB");
    } catch (err) {
        console.log("Error connecting to MongoDB");
    }
};
export default connect;
