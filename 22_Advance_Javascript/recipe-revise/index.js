window.addEventListener("load",async()=>{
    const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString)
    const ID = urlParams.get('id')


    const url = `https://the-vegan-recipes-db.p.rapidapi.com/${ID}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b46016e0demshebd5dfe2f6e766dp12814bjsn869e6d9a54bb',
		'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	populateRecipeDetails(result)
} catch (error) {
	console.error(error);
}
})



function populateRecipeDetails(recipeData)
{
    const container = document.getElementById('recipe-container');

            // Create elements for recipe details
            const title = document.createElement('h1');
            title.textContent = recipeData.title;
            title.classList.add('text-xl', 'font-bold', 'mb-4');

            const difficulty = document.createElement('p');
            difficulty.textContent = `Difficulty: ${recipeData.difficulty}`;
            difficulty.classList.add('text-gray-700', 'mb-2');

            const portion = document.createElement('p');
            portion.textContent = `Portion: ${recipeData.portion}`;
            portion.classList.add('text-gray-700', 'mb-2');

            const time = document.createElement('p');
            time.textContent = `Time: ${recipeData.time}`;
            time.classList.add('text-gray-700', 'mb-2');

            const description = document.createElement('p');
            description.textContent = recipeData.description;
            description.classList.add('text-gray-800', 'mb-4');

            const ingredientsTitle = document.createElement('h2');
            ingredientsTitle.textContent = 'Ingredients';
            ingredientsTitle.classList.add('text-lg', 'font-semibold', 'mb-2');

            const ingredientsList = document.createElement('ul');
            recipeData.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.textContent = ingredient;
                listItem.classList.add('text-gray-700', 'mb-1');
                ingredientsList.appendChild(listItem);
            });

            const methodTitle = document.createElement('h2');
            methodTitle.textContent = 'Method';
            methodTitle.classList.add('text-lg', 'font-semibold', 'mb-2');

            const methodList = document.createElement('ol');
            recipeData.method.forEach((step, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${Object.keys(step)[0]}: ${Object.values(step)[0]}`;
                listItem.classList.add('text-gray-700', 'mb-1');
                methodList.appendChild(listItem);
            });

            const image = document.createElement('img');
            image.src = recipeData.image;
            image.alt = recipeData.title;
            image.classList.add('w-full', 'rounded');

            // Append elements to container
            container.appendChild(title);
            container.appendChild(difficulty);
            container.appendChild(portion);
            container.appendChild(time);
            container.appendChild(description);
            container.appendChild(ingredientsTitle);
            container.appendChild(ingredientsList);
            container.appendChild(methodTitle);
            container.appendChild(methodList);
            container.appendChild(image);

}