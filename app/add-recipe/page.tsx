'use client'

import { FormEvent } from "react";
import { RecipeForm } from "@/components/recipe-form/recipe-form";
import { useRouter } from 'next/navigation'


export default function AddRecipe() {
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const object = {};
    const macros = {};
    const formData = new FormData(event.currentTarget);
    for (const [key, value] of formData.entries()) {
      if (key == "protein" || key == "carbs" || key == "fats") {
        macros[key] = value
      } else {
        object[key] = value;
      }
    }
    object["macros"] = macros;

    const res = await fetch("http://localhost:8080/api/recipe/", {
      method: 'POST', body: JSON.stringify(object), headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data.");
    }

    router.push("/");
  }

  return (
    <div className="flex flex-col p-24 items-center h-screen justify-center">
      <h1 className="text-3xl mb-10">Add recipe</h1>
      <RecipeForm onSubmit={onSubmit} recipe={null} />
    </div >
  )
}
