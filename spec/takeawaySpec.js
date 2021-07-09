describe("Takeaway", () => {
    let takeaway;

    beforeEach(() => {
        takeaway = new Takeaway();
    });

    it("shows a list of dishes with prices", () => {
        expect(takeaway.displayMenu()).toEqual([["Chips", 2], 
        ["Beef Burger", 12]]);
    });

    it("selects a number of available dishes", () => {
        takeaway.selectDish("Chips", 3);
        takeaway.selectDish("Beef Burger", 12);
        expect(takeaway.displayOrder()).toEqual([["Chips", 3], ["Beef Burger", 12]]);
        expect(() => { takeaway.selectDish("Bangers and Mash", 2); }).toThrow(new Error ("Dish is not available!"));
    });

    it("checks the order total", () => {
        takeaway.selectDish("Chips", 2);
        takeaway.selectDish("Beef Burger", 2);
        expect(takeaway.orderTotal()).toEqual(28);
    });
    
});