onEvent('recipes', event => {

  event.remove({id: 'immersiveengineering:crafting/plate_steel_hammering'})
  event.recipes.thermal.press('immersiveengineering:plate_steel', ['mekanism:ingot_steel'])

  // Remove Immersive Steel Armor
  event.remove({id: 'immersiveengineering:crafting/armor_steel_feet'})
  event.remove({id: 'immersiveengineering:crafting/armor_steel_legs'})
  event.remove({id: 'immersiveengineering:crafting/armor_steel_chest'})
  event.remove({id: 'immersiveengineering:crafting/armor_steel_head'})

  // Create Mekanism Steel with Immersive Engineering Blast Furnace
  //event.remove({id: 'immersiveengineering:blastfurnace/steel'})
  //event.recipes.immersiveengineering.blast_furnace('mekanism:ingot_steel', 'minecraft:iron_ingot', 'immersiveengineering:slag')

  // Create Mekanism Steel with Immersive Engineering Arc Furnace
  //event.remove({id: 'immersiveengineering:arcfurnace/steel'})
  //event.remove({id: 'immersiveengineering:arcfurnace/dust_steel'})
  //event.recipes.immersiveengineering.arc_furnace('mekanism:ingot_steel', 'minecraft:iron_ingot', 'immersiveengineering:dust_coke', 'immersiveengineering:slag')
})
