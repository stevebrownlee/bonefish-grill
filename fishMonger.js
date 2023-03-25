const { boatInventory } = require("./fishingBoat.js")


const mongerInventory = (chefPrice) => {
    const allFish = boatInventory()
    const inventory = []

    for (const fish of allFish) {
        if (fish.amount >= 10 && fish.price <= 7.50) {
            fish.amount = 10
            inventory.push(fish)
        }
    }

    const receipt = []
    for (const fish of inventory) {
        if (fish.price <= chefPrice) {
            fish.amount = fish.amount / 2
            receipt.push(fish)
        }
    }

    return receipt
}

module.exports = { mongerInventory }