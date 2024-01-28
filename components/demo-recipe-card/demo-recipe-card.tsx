import React from 'react'


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"


interface recipeDemo {
  name: String,
  description: String
}

export const RecipeCard = ({obj} : recipeDemo) => {
    return (
      <Card className="w-[500px]">
          <CardHeader>
              <CardTitle>{obj.name.toUpperCase()}</CardTitle>
              <CardDescription>Description: {obj.description[0].toUpperCase() + obj.description.substring(1)}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>View full recipe</Button>
        </CardFooter>
      </Card>
      )  
}
