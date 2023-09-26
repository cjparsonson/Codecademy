const menu = {
    _meal: [],
    _price: [],
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal.push(mealToCheck);
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price.push(priceToCheck);
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        const randomIndex = Math.floor(Math.random() * 3);
        return `Today's Special is ${this._meal[randomIndex]} for $${this._price[randomIndex]}!`;
      } else {
        return 'Meal or Price was not set correctly!';
      }
    }
  };

  menu.meal = 'Fajitas';
  menu.price = 3.50;
  menu.meal = 'Burger';
  menu.price = 4;
  menu.meal = 'Asado';
  menu.price = 6;
  console.log(menu.todaysSpecial);
