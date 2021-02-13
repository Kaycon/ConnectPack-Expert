onEvent('recipes', event => {

  // Remove Crafting Table Bronze recipe
  event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
  
  // Remove Crafting Table Bronze Dust recipe
  event.remove({id: 'thermal:bronze_dust_4'})

  
  ////////////////////////////////////////////////////////
  // Remove Crafting Table and Metal Press Gears Recipes
  ////////////////////////////////////////////////////////

  var thermal_gears = [
    'iron',
    'gold',
    'lapis',
    'diamond',
    'emerald',
    'quartz',
    'copper',
    'tin',
    'lead',
    'silver',
    'nickel',
    'bronze',
    'electrum',
    'invar',
    'constantan',
    'signalum',
    'lumium',
    'enderium'

  ]
  for (i = 0; i < thermal_gears.length; i++) {
    event.remove({id: 'thermal:parts/'+thermal_gears[i]+'_gear'})
    event.remove({id: 'immersiveengineering:metalpress/gear_'+thermal_gears[i]})
  } 


  ////////////////////////////////////////////////////////
  // Remove Crafting Table Alloy Recipes
  ////////////////////////////////////////////////////////

  var thermal_alloys = [
    'electrum_ingot_2',
    'invar_ingot_3',
    'constantan_ingot_2',
    'signalum_ingot_4',
    'lumium_ingot_4',
    'enderium_ingot_2'
  ]
  for (i = 0; i < thermal_alloys.length; i++) {
    event.remove({id: 'thermal:fire_charge/'+thermal_alloys[i]})
  } 


  ////////////////////////////////////////////////////////
  // Remove Crafting Table Glass Recipes
  ////////////////////////////////////////////////////////

  event.remove({id: 'thermal:fire_charge/obsidian_glass_2'})
  event.remove({id: 'thermal:fire_charge/signalum_glass_2'})
  event.remove({id: 'thermal:fire_charge/lumium_glass_2'})
  event.remove({id: 'thermal:fire_charge/enderium_glass_2'})


  // Gearworking Die
  event.remove({id: 'thermal:press_gear_die'})
  event.shaped('thermal:press_gear_die', [
    'DID',
    'IDI',
    'DID'
  ], {
    I: 'thermal:invar_plate',
    D: 'minecraft:diamond'
  })

  // Add Vanilla materials gears to press
  event.recipes.thermal.press('thermal:lapis_gear', [item.of('minecraft:lapis_lazuli', 4), 'thermal:press_gear_die'])
  event.recipes.thermal.press('thermal:diamond_gear', [item.of('minecraft:diamond', 4), 'thermal:press_gear_die'])
  event.recipes.thermal.press('thermal:emerald_gear', [item.of('minecraft:emerald', 4), 'thermal:press_gear_die'])
  event.recipes.thermal.press('thermal:quartz_gear', [item.of('minecraft:quartz', 4), 'thermal:press_gear_die'])

  ///////////////////////////////////////////
  // Thermal Crafting Parts
  ///////////////////////////////////////////

  event.remove({id: 'thermal:machine_frame'})
  event.shaped('thermal:machine_frame', [
    'IGI',
    'GSG',
    'IGI'
  ], {
    I: 'thermal:invar_ingot',
    G: '#forge:glass',
    S: 'mekanism:steel_casing'
  })

  event.remove({id: 'thermal:redstone_servo'})
  event.shaped('thermal:redstone_servo', [
    'RSR',
    ' S ',
    'RSR'
  ], {
    S: 'mekanism:ingot_steel',
    R: 'minecraft:redstone'
  })

  event.remove({id: 'thermal:rf_coil'})
  event.recipes.mekanism.metallurgic_infusing('thermal:rf_coil', 'minecraft:gold_ingot', 'mekanism:redstone', 20)

  ///////////////////////////////////////////
  // Thermal Machines
  ///////////////////////////////////////////
  
  event.remove({id: 'thermal:machine_press'})
  event.shaped('thermal:machine_press', [
    ' P ',
    'BFB',
    'RPR'
  ], {
    P: 'minecraft:piston',
    B: 'mekanism:ingot_bronze',
    F: 'thermal:machine_frame',
    R: 'thermal:rf_coil',
    P: 'minecraft:piston'
  })


  ///////////////////////////////////////////
  // DYNAMOS
  ///////////////////////////////////////////

  event.remove({id: 'thermal:dynamo_stirling'})
  event.shaped('thermal:dynamo_stirling', [
    ' C ',
    'IFI',
    'GRG'
  ], {
    C: 'thermal:rf_coil',
    I: 'mekanism:ingot_steel',
    F: 'thermal:machine_frame',
    G: 'thermal:iron_gear',
    R: 'minecraft:redstone'
  })

  event.remove({id: 'thermal:dynamo_compression'})
  event.shaped('thermal:dynamo_compression', [
    ' C ',
    'IFI',
    'GRG'
  ], {
    C: 'thermal:rf_coil',
    I: 'mekanism:ingot_bronze',
    F: 'thermal:machine_frame',
    G: 'thermal:gold_gear',
    R: 'minecraft:redstone'
  })

  event.remove({id: 'thermal:dynamo_magmatic'})
  event.shaped('thermal:dynamo_magmatic', [
    ' C ',
    'IFI',
    'GRG'
  ], {
    C: 'thermal:rf_coil',
    I: 'thermal:invar_ingot',
    F: 'thermal:machine_frame',
    G: 'thermal:constantan_gear',
    R: 'minecraft:redstone'
  })

  event.remove({id: 'thermal:dynamo_numismatic'})
  event.shaped('thermal:dynamo_numismatic', [
    ' C ',
    'IFI',
    'GRG'
  ], {
    C: 'thermal:rf_coil',
    I: 'thermal:signalum_ingot',
    F: 'thermal:machine_frame',
    G: 'thermal:tin_gear',
    R: 'minecraft:redstone'
  })

  event.remove({id: 'thermal:dynamo_lapidary'})
  event.shaped('thermal:dynamo_lapidary', [
    ' C ',
    'IFI',
    'GRG'
  ], {
    C: 'thermal:rf_coil',
    I: 'thermal:lumium_ingot',
    F: 'thermal:machine_frame',
    G: 'thermal:lapis_gear',
    R: 'minecraft:redstone'
  })
})