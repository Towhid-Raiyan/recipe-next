import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI);
    await mongoose.connect(`mongodb+srv://recipe-next:d6z312rbko081D9F@cluster0.cq8nopc.mongodb.net/recipe_db`);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;