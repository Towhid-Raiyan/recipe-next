"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditRecipeForm({ id, title, description, ingredient, picture }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newIngredient, setNewIngredient] = useState(ingredient);
  const [newPicture, setNewPicture] = useState(picture);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/recipes/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription , newIngredient, newPicture }),
      });

      if (!res.ok) {
        throw new Error("Failed to update recipe");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Recipe Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Recipe Description"
      />

      <input
        onChange={(e) => setNewIngredient(e.target.value)}
        value={newIngredient}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Recipe Ingredient"
      />

      <input
        onChange={(e) => setNewPicture(e.target.value)}
        value={newPicture}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Recipe Picture URL"
      />

      <button className="bg-green-600 hover:bg-green-700 rounded-md font-bold text-white py-3 px-6 w-fit">
        Update Recipe
      </button>
    </form>
  );
}