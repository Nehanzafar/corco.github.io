const apiKey = process.env.SPOONACULAR_API_KEY;

export default async function fetchRecipeById(recipeId) {
    const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`);
    const data = await response.json();
    return data;
}

export async function fetchRandomRecipes(number) {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${apiKey}`);
    const data = await response.json();
    return data.recipes;
}

export async function searchRecipes(query, number) {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${number}&apiKey=${apiKey}`);
    const data = await response.json();
    return data.results;
}



// ...existing code...
