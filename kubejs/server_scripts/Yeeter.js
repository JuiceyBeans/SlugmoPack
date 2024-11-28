// Remove and hide items
let yeet = (yeeted) => {
    ServerEvents.recipes(event => {
        event.remove({ output: yeeted })
    })
    ServerEvents.tags('item', event => {
        event.removeAllTagsFrom(yeeted)
        event.add('c:hidden_from_recipe_viewers', yeeted)
    })
}

const items = [
    'minecraft:compass',
    'irons_spellbooks:firefly_jar'
]

items.forEach(item => yeet(item))