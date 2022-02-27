import { harvestedCrops } from "../vegetableFarm.js";

describe("Vegetable farm", () => {

    test("Can view all crops", () => {
        expect(harvestedCrops())
            .toMatchObject([
                { id: 1, type: "Carrots", quantity: 164, price: 0.35 },
                { id: 2, type: "Spinach", quantity: 39, price: 0.51 },
                { id: 3, type: "Broccoli", quantity: 54, price: 0.48 },
                { id: 4, type: "Turnips", quantity: 203, price: 0.27 },
                { id: 5, type: "Kale", quantity: 416, price: 0.32 }
            ])
    })

    test("Can view inventory that cost less than $7 per fish", () => {
        expect(harvestedCrops(7))
            .toMatchObject([
                { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
                { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
                { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
                { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 }
            ])
    })

    test("Can view inventory that cost less than $5 per fish", () => {
        expect(mongerInventory(5))
            .toMatchObject([
                { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
                { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
                { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 }
            ])
    })

})
