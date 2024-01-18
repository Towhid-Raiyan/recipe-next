
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
            {recipes.map((item) => (
                <div key={item._id}>
                    <div className="card bg-base-100 shadow-xl my-10 p-2 dark:bg-slate-400">
                        <figure className="avatar">
                            <div className="w-2/5 rounded-full mx-auto">
                                <img src={item.picture} alt="food" />
                            </div>
                        </figure>
                        <div className="card-body items-center">
                            <h2 className="card-title text-3xl font-bold">{item.title}</h2>
                            <p className=" text-gray-600 py-3">
                                <span className="font-semibold">Recipe Description:</span> {item.description}
                            </p>
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold">Recipe Ingredients:</span> {item.ingredient}
                            </p>

                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}