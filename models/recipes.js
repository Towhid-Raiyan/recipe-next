import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema(
  {
    title: String,
    description: String,
    ingredient: String,
    picture: String,
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;