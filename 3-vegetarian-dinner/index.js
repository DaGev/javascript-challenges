const vegDishList = document.querySelector("#menu");

const vegMenu = menu => {
    const vegetarianDishes = menu.filter(dish => dish.vegetarian);
    vegetarianDishes.forEach(item => {
        let dish = document.createElement('li');
        dish.textContent = item.name;
        vegDishList.appendChild(dish);
    });
}

const dishes = [
    {
        name: "Eggplant Parmesan",
        vegetarian: true
    },
    {
        name: "Spaghetti & Meatballs",
        vegetarian: false
    },
    {
        name: "Borscht",
        vegetarian: true
    },
    {
        name: "Dolmadoes",
        vegetarian: false
    }
]

vegMenu(dishes);