'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog";

const DeleteRecipeButton = ({ recipeName }: { recipeName: string }) => {
    const deleteRecipe = async () => {
        const res = await fetch(`http://localhost:8080/api/recipe/name/${recipeName}`, {
            method: 'DELETE'
        });
        console.log(res);
        if (res.status == 200) {
            console.log("Deleted");
        } else {
            "Something went wrong";
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Delete recipe</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete recipe</DialogTitle>
                    <DialogDescription>You are about to delete a recipe</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="destructive" onClick={deleteRecipe} type="submit">Delete</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}

export default DeleteRecipeButton;