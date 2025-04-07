const sample_recipes = [
    'Lemon Poached Chicken',
    'Lemon Chicken Stir-Fry',
    'Lemon Chicken Soup',
    'Lemon Chicken Pasta',
    'Lemon Milk Chicken Rice',
];

function Recipe({index}) {
    const handleClick = () => {
        sessionStorage.setItem("activeRecipe", index);
    }

    return (
        <a href="../recipe/recipe.html">
            <button className="option" onClick={handleClick}>
                <div>
                    <p className="name">{sample_recipes[index]}</p>
                </div>

                <img className="angle-right" src="../icons/angle.svg"/>
            </button>
        </a>
    )
}

function Recipes() {
    return (
        <div id="recipes-display">
            {sample_recipes.map((recipe, index) => 
                <Recipe key={index} index={index} />
            )}
        </div>
    );
}

const recipes_element = document.getElementById('recipes');
const recipes_root = ReactDOM.createRoot(recipes_element);
recipes_root.render(<Recipes />)