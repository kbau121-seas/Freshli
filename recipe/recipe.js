const sample_recipes = [
    {
        'title': 'Lemon Poached Chicken',
        'description': 'Tender chicken gently poached in a zesty lemon-infused broth, offering a bright and light flavor in every bite.',
        'ingredients': ['1.5 lb Chicken Breast', '1 Cup Chicken Stock', '1 Lemon', 'Salt', 'Pepper'],
        'instructions': [
            'Season the chicken generously with salt and pepper.',
            'Cut the lemon in half, saving one half for juicing. Continue to slice the other half into thin slices for garnish.',
            'In a pan, bring the chicken stock to a boil and then reduce heat to a simmer.',
            'Add the chicken to the pan and cook at a low simmer for 15 to 20 minutes, turning halfway.',
            'Remove the chicken and let it rest.',
            'Add lemon slices and serve.'
        ]
    },
    {
        'title': 'Lemon Chicken Stir-Fry',
        'description': 'A health and easy Lemon Chicken Stir Fry that takes less than 30 minutes to make and tastes great!',
        'ingredients': ['1.5 lb Chicken Breast', '1/4 Cup Chicken Soy Sauce', '3 tbsp Lemon Juice', '1 tsp Salt', '1/4 tsp Pepper', '4 minced garlic cloves'],
        'instructions': [
            'Whisk together all the ingredients for the sauce, set aside.',
            'Toss the chicken with the salt and pepper until fully coated, set aside.',
            'Heat a pan over medium high heat. Add two tablespoons of oil. Add the chicken and cook for 3-4 minutes per side.',
            'Pour in the sauce and cook for 2-3 minutes until fully coated and the sauce has thickened.',
            'Garnish with sesame seeds and serve over rice.',
        ]
    },
];

const activeRecipe = sessionStorage.getItem('activeRecipe');

function Title()
{
    return (
        <h1 id="header">{sample_recipes[activeRecipe].title}</h1>
    );
}

function Description()
{
    return (
        <div>
            <h3>Description</h3>
            <p id="description">{sample_recipes[activeRecipe].description}</p>
        </div>
    );
}

function Ingredients()
{
    return (
        <div>
            <h3>Ingredients</h3>
            <ul>
                {sample_recipes[activeRecipe].ingredients.map((value, index) =>
                    <li key={index}>{value}</li>
                )}
            </ul>
        </div>
    );
}

function Instructions()
{
    return (
        <div>
            <h3>Instructions</h3>
            <ol>
                {sample_recipes[activeRecipe].instructions.map((value, index) =>
                    <li key={index}>{value}</li>
                )}
            </ol>
        </div>
    );
}

function Recipe() {
    return (
        <div className="recipe-display">
            <Description />
            <Ingredients />
            <Instructions />
        </div>
    );
}

if (activeRecipe !== null && sample_recipes[activeRecipe] !== undefined)
{
    const recipe_element = document.getElementById('recipe');
    const recipe_root = ReactDOM.createRoot(recipe_element);
    recipe_root.render(<Recipe />)

    const title_element = document.getElementById('title');
    const title_root = ReactDOM.createRoot(title_element);
    title_root.render(<Title />)
}