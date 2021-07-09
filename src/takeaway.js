class Takeaway {

    constructor() {
        this.menu = [["Chips", 2], ["Beef Burger", 12]];
        this.order = [];
        this.totalCost = 0;
    };

    displayMenu() {
        return this.menu;
    };

    selectDish(dish, quantity) {
        for(let i=0; i<this.menu.length; i++) {
            if(this.menu[i][0] === dish) {
                return this.order.push([dish, quantity]);
            } 
        };
        throw new Error ("Dish is not available!");
    };

    displayOrder() {
        return this.order;
    };

    orderTotal() {
        for(let i=0; i<this.order.length; i++) {
            for(let j=0; j<this.menu.length; j++) {
                if(this.order[i][0] === this.menu[j][0]) {
                    this.totalCost += this.menu[j][1] * this.order[i][1];
                };
            };
        };
        
        return this.totalCost;
    };


};