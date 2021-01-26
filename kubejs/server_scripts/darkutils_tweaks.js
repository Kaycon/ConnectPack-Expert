onEvent('recipes', event => {

  event.remove({id: 'darkutils:crafting/rune_damage_player'})
  event.shaped('darkutils:rune_damage_player', [
    ' D ',
    'CPC',
    'BBB'
  ], {
    D: 'minecraft:diamond_sword',
    C: 'minecraft:cactus',
    P: 'minecraft:pufferfish',
    B: 'darkutils:blank_plate'
  }) 
})