onEvent('recipes', event => {

  event.remove({id: 'fluxnetworks:fluxcore'})
  event.shaped('fluxnetworks:flux_core', [
    'FOF',
    'OTO',
    'FOF'
  ], {
    F: 'fluxnetworks:flux_dust',
    O: 'minecraft:obsidian',
    T: 'mekanism:teleportation_core'
  }) 

  event.recipes.thermal.smelter('fluxnetworks:flux_dust', [Item.of('minecraft:redstone', 16), 'mekanism:dust_refined_obsidian', 'thermal:enderium_dust'])

})