import connectMongoDB from "@/libs/mongodb";
import Recipe from "@/models/recipes";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description , newIngredient: ingredient, newPicture: picture } = await request.json();
  await connectMongoDB();
  await Recipe.findByIdAndUpdate(id, { title, description, ingredient, picture });
  return NextResponse.json({ message: "Recipe updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const recipe = await Recipe.findOne({ _id: id });
  return NextResponse.json({ recipe }, { status: 200 });
}