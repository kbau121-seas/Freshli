const default_filters = {'cusine': null, 'prep': null, 'bandwidth': null, 'vegetarian': false, 'vegan': false, 'kosher': false, 'halal': false, 'keto': false};
const diets = ['Vegetarian', 'Vegan', 'Kosher', 'Halal', 'Keto']

if (sessionStorage.getItem('inventory') === null) {
    sessionStorage.setItem('inventory', JSON.stringify([]));
}
let inventory = JSON.parse(sessionStorage.getItem('inventory'));

// TODO change this to a state variable
let filters = sessionStorage.getItem('filters');
if (filters === null) {
    filters = default_filters;
}
else {
    filters = JSON.parse(filters);
}

function setCuisine(value)
{
    filters['cuisine'] = value;
}

function setPrep(value)
{
    filters['prep'] = value;
}

function setBandwidth(value)
{
    filters['bandwidth'] = value;
}

function flipDiet(diet)
{
    filters[diet] = !filters[diet];

    let image = document.getElementById(diet);
    if (image !== null)
    {
        if (filters[diet])
        {
            image.src = '../icons/checkbox-true.svg';
        }
        else
        {
            image.src = '../icons/checkbox-false.svg';
        }
    }
}

function Diet({name, diet})
{
    let src = '../icons/checkbox-false.svg';
    if (filters[diet])
    {
        src = '../icons/checkbox-true.svg';
    }

    return (
        <button className="diet" onClick={() => {flipDiet(diet)}}>
            <img className="checkbox" id={diet} src={src}/>
            <p className="diet-label">{name}</p>
        </button>
    );
}

function Filters() {
    return (
        <div id="filters-display">
            <div className="input" id="cuisine">
                <p>Cuisine</p>
                <input type="text" defaultValue={filters['cuisine']} onChange={(e) => {setCuisine(e.target.value);}}></input>
            </div>
            
            <div className="input" id="prep">
                <p>Max Prep Time</p>
                <input type="number" min="0" defaultValue={filters['prep']} onChange={(e) => {setPrep(e.target.value)}}></input>
            </div>

            <div className="input" id="bandwidth">
                <p>Bandwidth</p>
                <input type="text" defaultValue={filters['bandwidth']} onChange={(e) => {setBandwidth(e.target.value)}}/>
            </div>

            <div id="diets">
                <Diet name="Vegetarian" diet='vegetarian' />
                <Diet name="Vegan" diet='vegan' />
                <Diet name="Kosher" diet='kosher' />
                <Diet name="Halal" diet='halal' />
                <Diet name="Keto" diet='keto' />
            </div>
        </div>
    );
}

const filters_element = document.getElementById('filters');
const filters_root = ReactDOM.createRoot(filters_element);
filters_root.render(<Filters />);

function saveFilters() {
    sessionStorage.setItem('filters', JSON.stringify(filters));
}

function Actions()
{
    return (
        <div id="actions-display">
            <a href="../index.html"><button className="action" id="save" onClick={saveFilters}>Save</button></a>
        </div>
    );
}

const actions_element = document.getElementById('actions');
const actions_root = ReactDOM.createRoot(actions_element);
actions_root.render(<Actions />)
