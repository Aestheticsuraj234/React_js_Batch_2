window.addEventListener("load", async (e) => {

    let Recipes = JSON.parse(localStorage.getItem("recipes"));

    if (Recipes) {
        constructRecipes(Recipes);
    }
    else {
        const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '300499526dmshc44a845ccf0661bp1597d4jsn4c37baefe350',
                'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();

            // save my Data to localStorage
            localStorage.setItem("recipes", JSON.stringify(result));
            constructRecipes(result)

        } catch (error) {
            console.error(error);
        }
    }

})


function constructRecipes(recipes) {

    console.log(recipes)
    const container = document.getElementById('main-container');

    recipes.forEach((recipe) => {

        const card = document.createElement('div');
        card.classList.add('bg-white', 'shadow-lg', 'rounded-lg', 'overflow-hidden', 'recipe-card', "p-4");

        // image
        const image = document.createElement('img');
        image.src = recipe.image;
        image.alt = recipe.title;
        image.classList.add('w-full', 'h-64', 'object-cover', 'recipe-image' ,"rounded-md");

        // title
        const title = document.createElement('h3');
        title.textContent = recipe.title;
        title.classList.add('font-bold', 'text-xl', 'mb-2', 'recipe-title');

        // difficulty
        const difficulty = document.createElement('p');
        difficulty.textContent = `Difficulty: ${recipe.difficulty}`;
        difficulty.classList.add('font-semibold', 'text-lg', 'recipe-difficulty');

        // button
        const button = document.createElement('button');
        button.textContent = 'View Recipe';
        button.classList.add('mt-4', 'bg-yellow-500', 'hover:bg-yellow-400', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'recipe-button');

        button.addEventListener("click" , function(e){
            e.preventDefault();
            window.location.href = `recipe.html?id=${recipe.id}`;
        })


        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(difficulty);
        card.appendChild(button);


        container.appendChild(card);

    })
}