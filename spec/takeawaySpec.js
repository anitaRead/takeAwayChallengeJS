describe("Takeaway", () => {
    let takeaway;

    beforeEach(() => {
        takeaway = new Takeaway();
    });

    it("shows a list of dishes with prices", () => {
        expect(takeaway.displayMenu()).toEqual([["Chips", "£2.00"], ["Beef Burger", "£12.00"]]);
    });
});