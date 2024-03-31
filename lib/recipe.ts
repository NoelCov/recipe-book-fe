export interface recipeInterface {
    name: string,
    mainIngredient: string,
    ingredients: string,
    timeToCook: string,
    timeToPrepare: string,
    description: string,
    servings: number
    equipmentNeeded: string,
    macros: macros,
    instructions: string
}

interface macros {
    calories: number,
    fats: number,
    protein: number,
    carbs: number
}
