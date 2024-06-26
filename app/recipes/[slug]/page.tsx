// More about Dynamic routes: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import DeleteRecipeButton from "@/components/delete-recipe-button/delete-recipe-button"
import EditRecipeButton from "@/components/edit-recipe-button/edit-recipe-button";

import { recipeInterface } from "@/lib/recipe";

const fetchData = async (recipe: string) => {
    const url: string = `http://localhost:8080/api/recipe/name/${recipe}`;
    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error("Failed to fetch recipe");
    }

    return res.json();
}

export default async function Home({ params }: { params: { slug: string } }) {
    const recipe: recipeInterface = await fetchData(params.slug);

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
                    <p className="font-semibold text-lg">Instructions</p>
                    {recipe.instructions}
                    {/* {recipe.instructions.map((step: string, key: number) => {
                        return (<p key={key}>{step[0].toUpperCase() + step.substring(1)}</p>)
                    })} */}
                </div>
                <Separator className="my-4" />
                <div className="flex gap-6">
                    <EditRecipeButton recipe={recipe}>Edit recipe</EditRecipeButton>
                    <DeleteRecipeButton recipeName={recipe.name} />
                </div>
            </div>
        </div>
    )
}