import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Input from "@/components/input/input";

interface props {
  onSubmit: any
}

export const RecipeForm = ({ onSubmit }: props) => {
  return (
    <form className="flex flex-col items-center" onSubmit={onSubmit}>
      <div className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-x-20 w-[950px]">
        <Input placeholder="Rosted chicken" name="name" label="Recipe name" initialValue="" />
        <Input label="Main ingredient" placeholder="Chicken" name="mainIngredient" initialValue="" />
        <div className="flex flex-col gap-2 mb-6">
          <Label htmlFor="ingredients">Ingredients</Label>
          <Textarea rows={4} placeholder="1 onion, 1/2 tbsp of paprika..." name="ingredients" />
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <Label htmlFor="instructions">Instructions</Label>
          <Textarea rows={4} placeholder="Start by warming up..." name="instructions" />
        </div>
        <Input label="Servings" placeholder="2" name="servings" initialValue="" />
        <Input label="Time to prepare" placeholder="20 minutes" name="timeToPrepare" initialValue="" />
        <Input label="Description" placeholder="Easy to make chicken recipe" name="description" initialValue="" />
        <Input label="Time to cook" placeholder="10 minutes" name="timeToCook" initialValue="" />
        <Input label="Equipment needed" placeholder="Pan" name="equipmentNeeded" initialValue="" />
      </div>
      <div className="w-full">
        <p className="pb-2">Macros (in grams)</p>
        <div className="flex gap-10">
          <Input label="Protein" placeholder="40" name="protein" initialValue="" />
          <Input label="Carbs" placeholder="20" name="carbs" initialValue="" />
          <Input label="Fats" placeholder="20" name="fats" initialValue="" />
        </div>
      </div>
      <Button type="submit" className="w-[180px] mr-auto mt-4">Submit</Button>
    </form>
  )
}