const default_item = {'name': '', 'count': 0,  'measure': 'cnt',  'expiration': ''};

if (sessionStorage.getItem('inventory') === null) {
    sessionStorage.setItem('inventory', JSON.stringify([]));
}
let inventory = JSON.parse(sessionStorage.getItem('inventory'));

const active_idx = sessionStorage.getItem('activeItem');
// TODO change this to a state variable
let active_item;
if (active_idx === null) {
    active_item = default_item;
}
else
{
    active_item = inventory[active_idx];
}

function setName(value)
{
    active_item['name'] = value;
}

function setCount(value)
{
    active_item['count'] = value;
}

function setMeasure(value)
{
    active_item['measure'] = value;
}

function setExpiration(value)
{
    active_item['expiration'] = value;
}

function Settings() {
    return (
        <div id="settings-display">
            <div className="input" id="name">
                <p>Name</p>
                <input type="text" defaultValue={active_item['name']} onChange={(e) => {setName(e.target.value);}}></input>
            </div>
            
            <div className="input" id="quantity">
                <p>Quantity</p>
                <input type="number" min="0" defaultValue={active_item['count']} onChange={(e) => {setCount(e.target.value)}}></input>
            </div>

            <div className="input" id="unit">
                <p>Units</p>
                <datalist id="unit-list">
                    <option>lb</option>
                    <option>cnt</option>
                    <option>oz</option>
                </datalist>
                <input list="unit-list" type="search" defaultValue={active_item['measure']} onChange={(e) => {setMeasure(e.target.value)}}/>
            </div>

            <div className="input" id="expiration">
                <p>Expiration Date</p>
                <input type="date" defaultValue={active_item['expiration']} onChange={(e) => {setExpiration(e.target.value)}}></input>
            </div>
        </div>
    );
}

const settings_element = document.getElementById('settings');
const settings_root = ReactDOM.createRoot(settings_element);
settings_root.render(<Settings />);

function addItem() {
    if (active_idx === null)
    {
        inventory.push(active_item);
    }
    else
    {
        inventory[active_idx] = active_item;
    }

    sessionStorage.removeItem('activeItem');
    sessionStorage.setItem('inventory', JSON.stringify(inventory));
}

function deleteItem() {
    if (active_idx !== null)
    {
        inventory.splice(active_idx, 1);
        sessionStorage.removeItem('activeItem');
        sessionStorage.setItem('inventory', JSON.stringify(inventory));
    }
}

function Actions()
{
    return (
        <div id="actions-display">
            <a href="/index.html"><button className="action" id="add" onClick={addItem}>Add</button></a>
            <a href="/index.html"><button className="action" id="delete" onClick={deleteItem}>Delete</button></a>
        </div>
    );
}

const actions_element = document.getElementById('actions');
const actions_root = ReactDOM.createRoot(actions_element);
actions_root.render(<Actions />)