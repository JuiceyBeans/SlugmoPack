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

let remove = (removed) => {
    ServerEvents.recipes(event => {
        event.remove({ output: removed })
    })
}

const recipe_removal_items = [
    'minecraft:compass',
    'irons_spellbooks:firefly_jar'
]

recipe_removal_items.forEach(item => remove(item))