ItemEvents.tooltip(event => {
    // event.add('/iceandfire:(tide|armor)_(?!.*_metal).*/', Text.of('This item has been disabled.').red())


    function shift_tooltip(p_item, p_text) {
        event.addAdvanced(p_item, (item, advanced, text) => {
            if (!event.shift) {
                text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
            } else {
                text.add(1, Text.of(p_text).gray())
            }
        })
    }

    // Domestic Innovation
    shift_tooltip('domesticationinnovation:wayward_lantern', "Teleports pets in unloaded chunks to the nearest Wayward Lantern so you don't lose them if you die!")
    shift_tooltip('minecraft:spyglass', "Can zoom in using C")
})
