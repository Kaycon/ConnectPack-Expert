onEvent('recipes', event => {

  event.remove({id: 'waystones:warp_stone'})
  event.shaped('waystones:warp_stone', [
    'PEP',
    'WLW',
    'PEP'
  ], {
    P: 'industrialforegoing:pink_slime',
    E: 'extendedcrafting:ender_ingot',
    W: 'minecraft:wither_skeleton_skull',
    L: '#elevatorid:elevators'
  })
})