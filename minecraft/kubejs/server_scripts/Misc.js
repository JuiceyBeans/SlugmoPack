ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:chest'),
    [
      'WWW',
      'W W',
      'WWW'
    ],
    {
      W: '#minecraft:planks'
    }
  )
  
  event.shaped(
    Item.of('minecraft:chest', 8),
    [
      'WWW',
      'W W',
      'WWW'
    ],
    {
      W: '#minecraft:logs'
    }
  )

  event.shaped(
    'irons_spellbooks:firefly_jar',
    [
      ' E ',
      'G G',
      ' G '
    ],
    {
      E: 'irons_spellbooks:arcane_essence',
      G: '#forge:glass'
    }
  )

  event.shaped(
    'minecraft:compass',
    [
      ' C ',
      'CRC',
      ' C '
    ],
    {
      C: 'minecraft:copper_ingot',
      R: 'minecraft:redstone'
    }
  )
})
