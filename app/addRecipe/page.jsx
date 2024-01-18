"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [picture, setPicture] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !ingredient || !picture) {
      alert("Title, description, ingredient and picture are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/recipes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, ingredient, picture }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a recipe");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Recipe Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Recipe Description"
      />
      <input
        onChange={(e) => setIngredient(e.target.value)}
        value={ingredient}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Recipe Ingredients"
      />
      <input
        onChange={(e) => setPicture(e.target.value)}
        value={picture}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Recipe Picture URL"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Recipe
      </button>
    </form>
  );
}