'use-client'

import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { RecipeForm } from "@/components/recipe-form/recipe-form";

import { recipeInterface } from "@/lib/recipe";

const EditRecipeButton = ({ recipe }: { recipe: recipeInterface }) => {

    const editRecipe = async () => {
        const res = await fetch(`http://localhost:8080/api/recipe/name/${recipe.name}`, {
            method: 'PUT'
        });
        console.log(res);
        if (res.status == 200) {
            console.log("Recipe updated.");
        } else {
            console.log("Something went wrong");
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Edit recipe</Button>
            </DialogTrigger>
            <DialogContent className="min-w-fit">
                <DialogHeader>
                    <DialogTitle>Edit recipe</DialogTitle>
                    <DialogDescription>
                        Make changes to this recipe. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <RecipeForm onSubmit={editRecipe()} recipe={recipe} />
            </DialogContent>
        </Dialog>

    )
}

export default EditRecipeButton;