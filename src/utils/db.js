import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected.")
    } catch(err) {
        throw new Error("Connection failed.")
    }
}

export default connect;