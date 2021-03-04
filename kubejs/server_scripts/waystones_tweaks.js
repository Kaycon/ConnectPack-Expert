onEvent('recipes', event => {

  event.remove({id: 'waystones:warp_stone'})
  event.shaped('waystones:warp_stone', [
    'PEP',
    'WLW',
    'PEP'
  ], {
    P: 'industrialforegoing:pink_slime',
    E: 'thermal:enderium_ingot',
    W: 'minecraft:ghast_tear',
    L: '#elevatorid:elevators'
  })
})