const default_items = [
    {'name': 'Milk',           'count': 24, 'measure': 'oz',  'expiration': '2025-02-02'},
    {'name': 'Lemon',          'count': 3,  'measure': 'cnt', 'expiration': '2025-04-15'},
    {'name': 'Chicken Breast', 'count': 1,  'measure': 'lb',  'expiration': '2025-04-01'}
];

function Item({item, index}) {
    const handleClick = () => {
        sessionStorage.setItem("activeItem", index);
    }

    return (
        <a href="inventory/inventory.html">
            <button className="option" onClick={handleClick}>
                <div>
                    <p className="name">{item['name']} ({item['count']} {item['measure']})</p>
                    <p className="expiration">Exp {item['expiration']}</p>
                </div>

                <img className="angle-right" src="icons/angle.svg"/>
            </button>
        </a>
    )
}

function Inventory() {
    return (
        <div id="inventory-display">
            {inventory.map((item, index) => 
                <Item key={index} item={item} index={index} />
            )}

            <a id="add-new" href="inventory/inventory.html"><button className="image" id="add"><img src="icons/add.svg" /></button></a>
        </div>
    );
}

if (sessionStorage.getItem('inventory') === null) {
    sessionStorage.setItem('inventory', JSON.stringify(default_items))
}
const inventory = JSON.parse(sessionStorage.getItem('inventory'));

const inventory_element = document.getElementById('inventory');
const inventory_root = ReactDOM.createRoot(inventory_element);
inventory_root.render(<Inventory />)