import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

const getRecipes = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/recipes", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch recipes");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading recipes: ", error);
    }
};

export default async function RecipeList() {
    const { recipes } = await getRecipes();

    return (
        <>
            {recipes.map((r) => (
                <div
                    key={r._id}
                    className="p-4 border border-slate-300 my-3 flex justify-between gap-5"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-[50px] h-[50px] rounded-full mx-auto">
                            <img src={r.picture} alt="food" />
                        </div>
                        <h2 className="font-bold text-2xl">{r.title}</h2>
                    </div>

                    <div className="flex gap-5 items-center">
                        <Link href={`/recipeDescription/${r._id}`}>
                            <h3 className="bg-green-600 hover:bg-green-700 p-2 rounded-md text-white">Description</h3>
                        </Link>
                        <RemoveBtn id={r._id} className='mr-4' />
                        <Link href={`/editRecipe/${r._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}