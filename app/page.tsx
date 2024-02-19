'use-client';

import { useEffect, useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { RecipeCard } from "@/components/demo-recipe-card/demo-recipe-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fetchData = async () => {
    // More about data fetching https://nextjs.org/docs/app/building-your-application/caching#on-demand-revalidation
    const res = await fetch("http://localhost:8080/api/recipe/", { cache: 'no-store' });
    console.log(res);
    if (!res.ok) {
        throw new Error("Failed to fetch data.");
    }
    return res.json();
}

export default async function Home() {
    // Pull all the recipes? I mean I don't have many so why not?
    const data = await fetchData();
    console.log(data)

    return (
        <div className="h-screen flex items-center justify-center flex-col gap-8">
            <h1 className="text-3xl">All recipes</h1>
            <Link href="/add-recipe"><Button>Add recipe</Button></Link>
            {
                data.map((obj, key: number) => {
                    return (
                        <RecipeCard key={key} obj={obj} />
                    )
                })
            }
        </div>
    );
}
