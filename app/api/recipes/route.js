// import connectMongoDB from "@/libs/mongodb";
import connectMongoDB from "@/libs/mongodb";
import Recipe from "@/models/recipes";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, ingredient, picture } = await request.json();
  await connectMongoDB();
  await Recipe.create({ title, description, ingredient, picture });
  return NextResponse.json({ message: "Recipe Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const recipes = await Recipe.find();
  return NextResponse.json({ recipes });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Recipe.findByIdAndDelete(id);
  return NextResponse.json({ message: "Recipe deleted" }, { status: 200 });
}