onEvent('recipes', event => {

  // Create Mekanism Steel with Immersive Engineering Blast Furnace
  event.remove({id: 'immersiveengineering:blastfurnace/steel'})
  event.recipes.immersiveengineering.blast_furnace('mekanism:ingot_steel', 'minecraft:iron_ingot', 'immersiveengineering:slag')

  // Create Mekanism Steel with Immersive Engineering Arc Furnace
  event.remove({id: 'immersiveengineering:arcfurnace/steel'})
  event.remove({id: 'immersiveengineering:arcfurnace/dust_steel'})
  event.recipes.immersiveengineering.arc_furnace('mekanism:ingot_steel', 'minecraft:iron_ingot', 'immersiveengineering:dust_coke', 'immersiveengineering:slag')
})
