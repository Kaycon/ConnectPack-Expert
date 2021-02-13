onEvent('recipes', event => {

  event.remove({id: 'immersiveengineering:crafting/plate_steel_hammering'})
  event.recipes.thermal.press('immersiveengineering:plate_steel', ['mekanism:ingot_steel'])


  // Remove Immersive Steel Armor
  event.remove({id: 'immersiveengineering:crafting/armor_steel_feet'})
  event.remove({id: 'immersiveengineering:crafting/armor_steel_legs'})
  event.remove({id: 'immersiveengineering:crafting/armor_steel_chest'})
  event.remove({id: 'immersiveengineering:crafting/armor_steel_head'})


  // Engineering Blocks
  event.remove({id: 'immersiveengineering:crafting/light_engineering'})
  event.shaped('immersiveengineering:light_engineering', [
    'SCS',
    'CFC',
    'SCS'
  ], {
    S: 'immersiveengineering:sheetmetal_steel',
    C: 'immersiveengineering:component_steel',
    F: 'thermal:machine_frame'
  }) 

  // Engineering Blocks
  event.remove({id: 'immersiveengineering:crafting/heavy_engineering'})
  event.shaped('immersiveengineering:heavy_engineering', [
    'SCS',
    'CFC',
    'SCS'
  ], {
    S: 'thermal:enderium_block',
    C: 'mekanism:ingot_refined_obsidian',
    F: 'immersiveengineering:light_engineering'
  }) 

  // Engineering Blocks
  event.remove({id: 'immersiveengineering:crafting/rs_engineering'})
  event.shaped('immersiveengineering:rs_engineering', [
    'SCS',
    'CFC',
    'SCS'
  ], {
    S: 'minecraft:redstone_block',
    C: 'thermal:constantan_ingot',
    F: 'immersiveengineering:light_engineering'
  }) 
})
