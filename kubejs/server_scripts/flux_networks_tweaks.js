onEvent('recipes', event => {

  event.remove({id: 'fluxnetworks:fluxcore'})
  event.shaped(Item.of('fluxnetworks:flux_core', 16), [
    'FOF',
    'OTO',
    'FOF'
  ], {
    F: 'fluxnetworks:flux_dust',
    O: 'minecraft:obsidian',
    T: 'mekanism:teleportation_core'
  }) 

  event.recipes.thermal.smelter('fluxnetworks:flux_dust', [Item.of('minecraft:redstone', 4), Item.of('mekanism:dust_refined_obsidian', 4), Item.of('thermal:enderium_dust',4)])

})