'use client'

import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import Link from "next/link"

import { recipeInterface } from "@/lib/recipe";

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

    //TODO Change this to a regular dialog so that you have to click a confirm button before deleting and make it read or something.
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button onClick={() => deleteRecipe()}>Delete recipe</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Recipe was deleted</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction><Link href="/">Go home</Link></AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteRecipeButton;