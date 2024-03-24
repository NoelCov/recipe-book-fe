"use client"

import { Button } from "@/components/ui/button"
import Input from "../../components/input/input";
import { FormEvent } from "react";
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function AddRecipe() {

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
    console.log(object);

    const res = await fetch("http://localhost:8080/api/recipe/", {
      method: 'POST', body: JSON.stringify(object)
    });
    console.log(res);
    if (!res.ok) {
      throw new Error("Failed to fetch data.");
    }
    return res.json();
  }

  return (
    <div className="flex flex-col p-24 items-center h-screen justify-center">
      <h1 className="text-3xl mb-10">Add recipe</h1>
      <form className="flex flex-col items-center" onSubmit={onSubmit}>
        <div className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-x-20 w-[950px]">
          <Input placeholder="Rosted chicken" name="name" label="Recipe name" />
          <Input label="Main ingredient" placeholder="Chicken" name="mainIngredient" />
          <div className="flex flex-col gap-2 mb-6">
            <Label htmlFor="ingredients">Ingredients</Label>
            <Textarea rows={4} placeholder="1 onion, 1/2 tbsp of paprika..." name="ingredients" />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea rows={4} placeholder="Start by warming up..." name="instructions" />
          </div>
          <Input label="Servings" placeholder="2" name="servings" s />
          <Input label="Time to prepare" placeholder="20 minutes" name="timeToPrepare" />
          <Input label="Description" placeholder="Easy to make chicken recipe" name="description" />
          <Input label="Time to cook" placeholder="10 minutes" name="timeToCook" />
          <Input label="Equipment needed" placeholder="Pan" name="equipmentNeeded" />
        </div>
        <div className="w-full">
          <p className="pb-2">Macros (in grams)</p>
          <div className="flex gap-10">
            <Input label="Protein" placeholder="40" name="protein" />
            <Input label="Carbs" placeholder="20" name="carbs" />
            <Input label="Fats" placeholder="20" name="fats" />
          </div>
        </div>
        <Button type="submit" className="w-[180px] mr-auto mt-4">Submit</Button>
      </form>
    </div >
  )
}
