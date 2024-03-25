// More about Dynamic routes: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface recipe {
    name: string,
    mainIngredient: string,
    ingredients: string,
    timeToCook: string,
    timeToPrepare: string,
    description: string,
    servings: number
    equipmentNeeded: string,
    macros: macros,
    instructions: string
}

interface macros {
    calories: number,
    fats: number,
    protein: number,
    carbs: number
}

const fetchData = async (recipe: string) => {
    const url: string = `http://localhost:8080/api/recipe/name/${recipe}`;
    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error("Failed to fetch recipe");
    }

    return res.json();
}

export default async function Home({ params }: { params: { slug: string } }) {
    console.log(params);
    const recipe: recipe = await fetchData(params.slug);

    console.log(recipe);

    return (
        <div className="flex flex-col justify-center h-screen items-center w-1/2 xl:w-[800px] mx-auto">
            <div className="p-10 border shadow-md rounded-[0.5rem] bg-background">
                <div className="flex flex-col gap-2 mb-8">
                    <h1 className="text-2xl font-bold">{recipe.name.toUpperCase()}</h1>
                    <p className="font-semibold">Description: {recipe.description}</p>
                </div>
                <Separator className="my-4" />
                <div className="flex flex-col gap-2">
                    <p>Time to cook: {recipe.timeToCook}</p>
                    <p>Time to prepare: {recipe.timeToPrepare}</p>
                    <p>Yields: {recipe.servings} servings</p>
                    <p>Ingredients: {recipe.ingredients}</p>
                    <p>Equipment needed: {recipe.equipmentNeeded}</p>
                </div>
                <Separator className="my-4" />
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-lg">Macros</p>
                    <div className="flex gap-12">
                        <p>Calories: {recipe.macros.calories}</p>
                        <p>Protein: {recipe.macros.protein}</p>
                        <p>Fat: {recipe.macros.fats}</p>
                        <p>Carbs: {recipe.macros.carbs}</p>
                    </div>
                </div>
                <Separator className="my-4" />
                <div className="flex flex-col gap-2">
                    {recipe.instructions}
                    {/* {recipe.instructions.map((step: string, key: number) => {
                        return (<p key={key}>{step[0].toUpperCase() + step.substring(1)}</p>)
                    })} */}
                </div>
                <Separator className="my-4" />
                <div className="flex gap-6">
                    {/* TODO Add this functionality to edit recipe and delete recipe. */}
                    <Button>Edit recipe</Button>
                    <Button>Delete recipe</Button>
                </div>

            </div>

        </div>
    )
}