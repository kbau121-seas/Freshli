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

    {
        'title': 'Lemon Chicken Soup',
        'description': 'A comforting and zesty Lemon Chicken Soup made with tender chicken, fresh lemon, and herbs—perfect for chilly evenings or when you need a cozy pick-me-up!',
        'ingredients': ['1 lb Chicken Thighs or Breast', '6 cups Chicken Broth', '1/2 cup Fresh Lemon Juice', '1/2 cup Orzo or Rice', '2 cloves Garlic, minced', '1 Onion, chopped', '2 Carrots, sliced', '2 Celery Stalks, sliced', '1 tsp Salt', '1/2 tsp Black Pepper', '1 tbsp Olive Oil', 'Fresh Dill or Parsley for garnish'],
        'instructions': [
            'Heat olive oil in a large pot over medium heat. Add onion, garlic, carrots, and celery. Cook until softened, about 5-6 minutes.',
            'Add chicken to the pot and pour in the chicken broth. Bring to a boil, then reduce heat and simmer for 20 minutes or until chicken is cooked through.',
            'Remove chicken, shred it using two forks, and return it to the pot.',
            'Stir in orzo or rice and simmer for another 10 minutes, or until tender.',
            'Add lemon juice, salt, and pepper. Stir well and adjust seasoning to taste.',
            'Serve hot, garnished with fresh dill or parsley.',
        ]
    },

    {
        'title': 'Lemon Chicken Pasta',
        'description': 'A creamy, zesty Lemon Chicken Pasta that’s bursting with flavor and ready in under 30 minutes. A perfect weeknight dinner!',
        'ingredients': ['1 lb Pasta (Fettuccine or Penne)', '2 Chicken Breasts, sliced', '2 tbsp Olive Oil', '1/2 cup Fresh Lemon Juice', '1 tbsp Lemon Zest', '3 cloves Garlic, minced', '1 cup Heavy Cream', '1/2 cup Grated Parmesan Cheese', 'Salt and Pepper to taste', 'Fresh Basil or Parsley for garnish'],
        'instructions': [
            'Cook pasta according to package instructions. Reserve 1/2 cup of pasta water and set aside.',
            'Season chicken with salt and pepper. In a large skillet, heat olive oil over medium heat and cook chicken until golden and cooked through, about 5-6 minutes. Remove from pan and set aside.',
            'In the same skillet, add garlic and sauté for 1-2 minutes. Pour in lemon juice and zest, then stir in heavy cream. Simmer for 3-4 minutes.',
            'Add Parmesan cheese and stir until melted and the sauce thickens slightly.',
            'Return chicken to the skillet and toss in the cooked pasta. Add reserved pasta water a little at a time if the sauce is too thick.',
            'Serve warm, topped with fresh basil or parsley and extra Parmesan if desired.',
        ]
    },

    {
        'title': 'Lemon Milk Chicken Rice',
        'description': 'A creamy, tangy Lemon Milk Chicken Rice dish that’s rich in flavor and incredibly comforting. A one-pan meal that’s as easy as it is delicious!',
        'ingredients': ['1.5 lb Chicken Thighs or Breast, cubed', '1 cup Jasmine or Basmati Rice', '2 cups Chicken Broth', '1/2 cup Whole Milk', '1/4 cup Fresh Lemon Juice', '1 tbsp Lemon Zest', '1 small Onion, chopped', '3 cloves Garlic, minced', '1 tbsp Olive Oil', '1 tsp Salt', '1/2 tsp Black Pepper', 'Fresh Parsley or Chives for garnish'],
        'instructions': [
            'Heat olive oil in a large skillet over medium heat. Add chopped onion and garlic, sauté until fragrant and translucent, about 3-4 minutes.',
            'Add the chicken, season with salt and pepper, and cook until lightly browned on all sides.',
            'Stir in rice, chicken broth, milk, lemon juice, and zest. Bring to a boil.',
            'Reduce heat to low, cover, and simmer for 18-20 minutes until rice is tender and liquid is absorbed.',
            'Fluff the rice with a fork and let rest for 5 minutes.',
            'Garnish with chopped parsley or chives and serve warm.',
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