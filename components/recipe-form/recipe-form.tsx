'use client';

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Input from "@/components/input/input";

import { recipeInterface } from "@/lib/recipe";
import { useState } from "react";

interface props {
  recipe: recipeInterface | null,
  onSubmit: any
}

export const RecipeForm = ({ onSubmit, recipe }: props) => {
  const [instructions, setInstructions] = useState(recipe != null ? recipe.instructions : "");
  const [ingredients, setIngredients] = useState(recipe != null ? recipe.ingredients : "");

  return (
    <form className="flex flex-col items-center" onSubmit={onSubmit}>
      <div className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-x-20 w-[950px]">
        <Input placeholder="Rosted chicken" name="name" label="Recipe name" initialValue={recipe != null ? recipe.name : ""} />
        <Input label="Main ingredient" placeholder="Chicken" name="mainIngredient" initialValue={recipe != null ? recipe.mainIngredient : ""} />
        <div className="flex flex-col gap-2 mb-6">
          <Label htmlFor="ingredients">Ingredients</Label>
          <Textarea rows={4} placeholder="1 onion, 1/2 tbsp of paprika..." name="ingredients" value={ingredients} onChange={(event) => setIngredients(event.target.value)} />
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <Label htmlFor="instructions">Instructions</Label>
          <Textarea rows={4} placeholder="Start by warming up..." name="instructions" value={instructions} onChange={(event) => setInstructions(event.target.value)} />
        </div>
        <Input label="Servings" placeholder="2" name="servings" initialValue="" />
        <Input label="Time to prepare" placeholder="20 minutes" name="timeToPrepare" initialValue={recipe != null ? recipe.timeToPrepare : ""} />
        <Input label="Description" placeholder="Easy to make chicken recipe" name="description" initialValue={recipe != null ? recipe.description : ""} />
        <Input label="Time to cook" placeholder="10 minutes" name="timeToCook" initialValue={recipe != null ? recipe.timeToCook : ""} />
        <Input label="Equipment needed" placeholder="Pan" name="equipmentNeeded" initialValue={recipe != null ? recipe.equipmentNeeded : ""} />
      </div>
      <div className="w-full">
        <p className="pb-2">Macros (in grams)</p>
        <div className="flex gap-10">
          <Input label="Protein" placeholder="40" name="protein" initialValue={recipe != null ? recipe.macros?.protein.toString() : ""} />
          <Input label="Carbs" placeholder="20" name="carbs" initialValue={recipe != null ? recipe.macros?.carbs.toString() : ""} />
          <Input label="Fats" placeholder="20" name="fats" initialValue={recipe != null ? recipe.macros?.fats.toString() : ""} />
        </div>
      </div>
      <Button type="submit" className="w-[180px] mr-auto mt-4">Submit</Button>
    </form>
  )
}