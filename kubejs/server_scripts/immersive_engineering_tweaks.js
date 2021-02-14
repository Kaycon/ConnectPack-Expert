onEvent('recipes', event => {

  event.remove({id: 'immersiveengineering:crafting/plate_steel_hammering'})
  event.recipes.thermal.press('immersiveengineering:plate_steel', ['mekanism:ingot_steel'])


  // Remove Immersive Steel Armor
  event.remove({id: 'immersiveengineering:crafting/armor_steel_feet'})
  event.remove({id: 'immersiveengineering:crafting/armor_steel_legs'})
  event.remove({id: 'immersiveengineering:crafting/armor_steel_chest'})
  event.remove({id: 'immersiveengineering:crafting/armor_steel_head'})


  ////////////////////////
  // Engineering Blocks
  ////////////////////////
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


  //////////////////
  //Generators
  //////////////////

  event.remove({id: 'immersiveengineering:crafting/windmill'})
  event.shaped('immersiveengineering:windmill', [
    'WWW',
    'WEW',
    'WWW'
  ], {
    W: 'immersiveengineering:windmill_blade',
    E: 'immersiveengineering:light_engineering'
  }) 

  event.remove({id: 'immersiveengineering:crafting/watermill'})
  event.shaped('immersiveengineering:watermill', [
    ' W ',
    'WEW',
    ' W '
  ], {
    W: 'immersiveengineering:waterwheel_segment',
    E: 'immersiveengineering:light_engineering'
  }) 

  event.remove({id: 'immersiveengineering:crafting/dynamo'})
  event.shaped('immersiveengineering:dynamo', [
    '   ',
    'RCR',
    'SSS'
  ], {
    R: 'minecraft:redstone',
    C: 'immersiveengineering:coil_lv',
    S: 'mekanism:ingot_steel'
  }) 


  //////////////////
  //Capacitors
  //////////////////

  event.remove({id: 'immersiveengineering:crafting/capacitor_lv'})
  event.shaped('immersiveengineering:capacitor_lv', [
    'SSS',
    'BEB',
    'TRT'
  ], {
    S: 'mekanism:ingot_steel',
    B: 'mekanism:ingot_bronze',
    E: 'immersiveengineering:light_engineering',
    T: '#forge:treated_wood',
    R: 'minecraft:redstone'
  }) 

  event.remove({id: 'immersiveengineering:crafting/capacitor_mv'})
  event.shaped('immersiveengineering:capacitor_mv', [
    'SSS',
    'BEB',
    'TRT'
  ], {
    S: 'mekanism:ingot_steel',
    B: 'thermal:electrum_ingot',
    E: 'immersiveengineering:capacitor_lv',
    T: '#forge:treated_wood',
    R: 'minecraft:redstone_block'
  }) 

  event.remove({id: 'immersiveengineering:crafting/capacitor_hv'})
  event.shaped('immersiveengineering:capacitor_hv', [
    'SSS',
    'LEL',
    'TRT'
  ], {
    S: 'mekanism:ingot_steel',
    L: 'thermal:lumium_ingot',
    E: 'immersiveengineering:capacitor_mv',
    T: '#forge:treated_wood',
    R: 'minecraft:redstone_block'
  }) 
})
