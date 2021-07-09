class Takeaway {

    constructor() {
        this.menu = [["Chips", 2], ["Beef Burger", 12]];
        this.order = [];
    };

    displayMenu() {
        return this.menu;
    };

    selectDish(dish, quantity) {
        for(let i=0; i<this.menu.length; i++) {
            if(this.menu[i][0] === dish) {
                return this.order.push([dish, quantity]);
            };
        };
    };

    displayOrder() {
        return this.order;
    };
}