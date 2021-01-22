onEvent('recipes', event => {
  
  // Remove all copper ingots except for Mekanism
  event.remove({id: 'iceandfire:furnace/copper_ingot_blasting'})
  event.remove({id: 'iceandfire:furnace/copper_ingot'})

  event.remove({id: 'thermal:smelting/copper_ingot_from_ore_blasting'})
  event.remove({id: 'thermal:smelting/copper_ingot_from_ore_smelting'})

  event.remove({id: 'create:blasting/copper_ingot_from_ore'})
  event.remove({id: 'create:smelting/copper_ingot_from_ore'})
  event.remove({id: 'create:blasting/copper_ingot_from_crushed'})
  event.remove({id: 'create:smelting/copper_ingot_from_crushed'})
  event.smelting('mekanism:ingot_copper', 'create:crushed_copper_ore')
  event.blasting('mekanism:ingot_copper', 'create:crushed_copper_ore')

  event.remove({id: 'immersiveengineering:crafting/ingot_copper_from_blasting'})
  event.remove({id: 'immersiveengineering:crafting/ingot_copper'})
})