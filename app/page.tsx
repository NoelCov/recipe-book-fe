export default async function Home() {
    // Pull all the recipes? I mean I don't have many so why not?
    const res = await fetch("http://localhost:8080/api/recipe/");
    const data = await res.json();

    return (
        <main>
            <h1>Hello</h1>
            {
                // Map an object I think is Object.values() or something like that. Then display all recipes with name and maybe description.
                // Think of what else to include here.
            }
        </main>
    );
}
