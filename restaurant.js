const { mongerInventory } = require("./fishMonger.js")



const fishMenu = (price) => {
    const todaysIngredients = mongerInventory(price)
    let html = `<h1>Menu</h1>
<article class="menu">
`

    for (const item of todaysIngredients) {
        html += `<h2>${item.species}</h2>
    <section class="menu__item">${item.species} Soup</section>
    <section class="menu__item">${item.species} Sandwich</section>
    <section class="menu__item">Grilled ${item.species}</section>
`
    }

    html += "</article>"
    return html
}

module.exports = { fishMenu }