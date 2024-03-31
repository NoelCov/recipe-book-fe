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

    // <Dialog>
    //   <DialogTrigger asChild>
    //     <Button variant="outline">Edit Profile</Button>
    //   </DialogTrigger>
    //   <DialogContent className="sm:max-w-[425px]">
    //     <DialogHeader>
    //       <DialogTitle>Edit profile</DialogTitle>
    //       <DialogDescription>
    //         Make changes to your profile here. Click save when you're done.
    //       </DialogDescription>
    //     </DialogHeader>
    //     <div className="grid gap-4 py-4">
    //       <div className="grid grid-cols-4 items-center gap-4">
    //         <Label htmlFor="name" className="text-right">
    //           Name
    //         </Label>
    //         <Input
    //           id="name"
    //           defaultValue="Pedro Duarte"
    //           className="col-span-3"
    //         />
    //       </div>
    //       <div className="grid grid-cols-4 items-center gap-4">
    //         <Label htmlFor="username" className="text-right">
    //           Username
    //         </Label>
    //         <Input
    //           id="username"
    //           defaultValue="@peduarte"
    //           className="col-span-3"
    //         />
    //       </div>
    //     </div>
    //     <DialogFooter>
    //       <Button type="submit">Save changes</Button>
    //     </DialogFooter>
    //   </DialogContent>
    // </Dialog>
}

export default EditRecipeButton;