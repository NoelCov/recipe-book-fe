"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


//TODO Check if it's okay to call ProfileForm from here or if we should put everything in ProfileForm.
export default function AddRecipe() {
  return (
    <div className="flex flex-col p-24 items-center justify-center scroll">
      <h1 className="text-3xl mb-6">Add recipe</h1>
      {ProfileForm()}
      {/* https://ui.shadcn.com/docs/components/form */}
    </div>
  )
}

// 1. Create a form schema. We will do this using ZOD which is a library to use with TypeScript.
const Macros = z.object({
  protein: z.number(),
  carbs: z.number(),
  fats: z.number()
});

const formSchema = z.object({
  recipeName: z.string(),
  mainIngredient: z.string(),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  timeToCook: z.string(),
  timeToPrepare: z.string(),
  description: z.string(),
  servings: z.number(),
  macros: Macros
})

// 2. Define a form
export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipeName: "",
      mainIngredient: "",
      ingredients: [],
      instructions: [],
      timeToCook: "",
      timeToPrepare: "",
      description: "",
      servings: 0,
      macros: {}
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    for (let key in Object.keys(values)) {
      console.log()
    }
    // Send it to backend.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/3 space-y-4">
        <FormField
          control={form.control}
          name="recipeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recipe name</FormLabel>
              <FormControl>
                <Input placeholder="Pan seared tilapia" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is the recipe name.
              </FormDescription>
              <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mainIngredient"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Main ingredient</FormLabel>
              <FormControl>
                <Input placeholder="Tilapia" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ingredients</FormLabel>
              <FormControl>
                <Textarea placeholder="1. Tilapia 2. Olive oil 3. Lemon 4. Paprika 5. Salt" rows={5} {...field} />
              </FormControl>
              <FormDescription>
                Add ingredients in format like shown in placeholder.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions</FormLabel>
              <FormControl>
                <Textarea placeholder="1. Defrost fish. 2. Season fish with paprika, salt, black pepper, chili powder. 3. Cook for 4 minutes per side at medium-high heat." rows={5} {...field} />
              </FormControl>
              <FormDescription>
                Add instructions in format like shown in placeholder.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timeToCook"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cooking time</FormLabel>
              <FormControl>
                <Input placeholder="35 minutes" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timeToPrepare"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preparation time</FormLabel>
              <FormControl>
                <Input placeholder="10 minutes" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="This dish is high in protein, super easy to make and tasty" rows={3} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="servings"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Servings</FormLabel>
              <FormControl>
                <Input placeholder="4 servings" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4">Submit</Button>
      </form>
    </Form>
  )
}
//TODO Finish form and test sending it to backend!