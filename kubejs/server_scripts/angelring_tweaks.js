onEvent('recipes', event => {
  
  event.remove({id: 'angelring:itemdiamondring'})
  event.shaped('angelring:itemdiamondring', [
    'DBD',
    'BEB',
    'DBD'
  ], {
    D: 'botania:dragonstone',
    B: 'botania:mana_diamond_block',
    E: 'minecraft:elytra'
  })

  event.remove({id: 'angelring:itemring'})
  event.shaped('angelring:itemring', [
    'JGN',
    'GDG',
    'HGU'
  ], {
    J: 'mekanism:jetpack',
    G: 'minecraft:gold_block',
    N: 'simplyjetpacks:jetpack_vanilla4',
    D: 'angelring:itemdiamondring',
    H: 'simplyjetpacks:jetpack_ie3',
    U: 'simplyjetpacks:jetpack_mek4'
  })
})