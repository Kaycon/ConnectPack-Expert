onEvent('recipes', event => {

  // Remove Crafting Table Bronze recipe
  event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
  
  // Remove Crafting Table Bronze Dust recipe
  event.remove({id: 'thermal:bronze_dust_4'})

  // Remove Crafting Table Enderium Dust recipe
  event.remove({id: 'thermal:enderium_dust_2'})

  // Remove Crafting Table Lumium Dust recipe
  event.remove({id: 'thermal:lumium_dust_4'})

  // Remove Crafting Table Signalum Dust recipe
  event.remove({id: 'thermal:signalum_dust_4'})

  // Remove Crafting Table Invar Dust recipe
  event.remove({id: 'thermal:invar_dust_3'})

  // Remove Crafting Table Constantan Dust recipe
  event.remove({id: 'thermal:constantan_dust_2'})
  event.remove({id: 'immersiveengineering:crafting/constantan_mix'})

  // Remove Crafting Table Electrum Dust recipe
  event.remove({id: 'thermal:electrum_dust_2'})
  
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
    'RGR'
  ], {
    I: 'thermal:invar_ingot',
    G: '#forge:glass',
    S: 'mekanism:steel_casing',
    R: 'mekanism:alloy_infused'
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
    'CPC',
    'BFB',
    'RPR'
  ], {
    C: 'mekanism:basic_control_circuit',
    P: 'minecraft:piston',
    B: 'mekanism:ingot_bronze',
    F: 'thermal:machine_frame',
    R: 'thermal:rf_coil'
  })
  
  event.remove({id: 'thermal:machine_smelter'})
  event.shaped('thermal:machine_smelter', [
    'CPC',
    'SFS',
    'GRG'
  ], {
    C: 'mekanism:basic_control_circuit',
    P: 'minecraft:blast_furnace',
    S: '#forge:sand',
    F: 'thermal:machine_frame',
    R: 'thermal:rf_coil',
    G: 'thermal:invar_gear'
  })
  
  event.remove({id: 'thermal:machine_pulverizer'})
  event.shaped('thermal:machine_pulverizer', [
    'AXA',
    'YFY',
    'GCG'
  ], {
    A: 'mekanism:advanced_control_circuit',
    X: 'minecraft:piston',
    Y: 'minecraft:flint',
    F: 'thermal:machine_frame',
    C: 'thermal:rf_coil',
    G: 'thermal:copper_gear'
  })
  
  event.remove({id: 'thermal:machine_insolator'})
  event.shaped('thermal:machine_insolator', [
    'AXA',
    'YFY',
    'GCG'
  ], {
    A: 'mekanism:advanced_control_circuit',
    X: 'minecraft:dirt',
    Y: '#forge:glass',
    F: 'thermal:machine_frame',
    C: 'thermal:rf_coil',
    G: 'thermal:lumium_gear'
  })
  
  event.remove({id: 'thermal:machine_centrifuge'})
  event.shaped('thermal:machine_centrifuge', [
    'AXA',
    'YFY',
    'GCG'
  ], {
    A: 'mekanism:advanced_control_circuit',
    X: 'minecraft:compass',
    Y: 'mekanism:ingot_tin',
    F: 'thermal:machine_frame',
    C: 'thermal:rf_coil',
    G: 'thermal:constantan_gear'
  })
  
  event.remove({id: 'thermal:machine_crucible'})
  event.shaped('thermal:machine_crucible', [
    'AXA',
    'YFY',
    'GCG'
  ], {
    A: 'mekanism:advanced_control_circuit',
    X: '#forge:glass',
    Y: 'minecraft:nether_bricks',
    F: 'thermal:machine_frame',
    C: 'thermal:rf_coil',
    G: 'thermal:invar_gear'
  })

  event.remove({id: 'thermal:machine_chiller'})
  event.shaped('thermal:machine_chiller', [
    'AXA',
    'YFY',
    'GCG'
  ], {
    A: 'mekanism:advanced_control_circuit',
    X: '#forge:glass',
    Y: 'minecraft:packed_ice',
    F: 'thermal:machine_frame',
    C: 'thermal:rf_coil',
    G: 'thermal:invar_gear'
  })

  event.remove({id: 'thermal:machine_refinery'})
  event.shaped('thermal:machine_refinery', [
    'AXA',
    'YFY',
    'GCG'
  ], {
    A: 'mekanism:advanced_control_circuit',
    X: '#forge:glass',
    Y: 'mekanism:ingot_copper',
    F: 'thermal:machine_frame',
    C: 'thermal:rf_coil',
    G: 'thermal:invar_gear'
  })

  event.remove({id: 'thermal:machine_pyrolyzer'})
  event.shaped('thermal:machine_pyrolyzer', [
    'AXA',
    'YFY',
    'GCG'
  ], {
    A: 'mekanism:advanced_control_circuit',
    X: 'minecraft:blaze_rod',
    Y: 'minecraft:nether_bricks',
    F: 'thermal:machine_frame',
    C: 'thermal:rf_coil',
    G: 'thermal:constantan_gear'
  })

  event.remove({id: 'thermal:machine_bottler'})
  event.shaped('thermal:machine_bottler', [
    'AXA',
    'YFY',
    'GCG'
  ], {
    A: 'mekanism:advanced_control_circuit',
    X: 'minecraft:bucket',
    Y: '#forge:glass',
    F: 'thermal:machine_frame',
    C: 'thermal:rf_coil',
    G: 'thermal:constantan_gear'
  })

  event.remove({id: 'thermal:machine_brewer'})
  event.shaped('thermal:machine_brewer', [
    'AXA',
    'YFY',
    'GCG'
  ], {
    A: 'mekanism:advanced_control_circuit',
    X: 'minecraft:brewing_stand',
    Y: '#forge:glass',
    F: 'thermal:machine_frame',
    C: 'thermal:rf_coil',
    G: 'thermal:constantan_gear'
  })

  event.remove({id: 'thermal:machine_crafter'})
  event.shaped('thermal:machine_crafter', [
    'AXA',
    'YFY',
    'GCG'
  ], {
    A: 'mekanism:advanced_control_circuit',
    X: 'minecraft:crafting_table',
    Y: 'mekanism:ingot_tin',
    F: 'thermal:machine_frame',
    C: 'thermal:rf_coil',
    G: 'thermal:constantan_gear'
  })

  event.remove({id: 'thermal:machine_sawmill'})
  event.shaped('thermal:machine_sawmill', [
    'AXA',
    'YFY',
    'GCG'
  ], {
    A: 'mekanism:basic_control_circuit',
    X: 'thermal:saw_blade',
    Y: '#forge:stone',
    F: 'thermal:machine_frame',
    C: 'thermal:rf_coil',
    G: 'thermal:copper_gear'
  })

  event.remove({id: 'thermal:machine_furnace'})
  event.shaped('thermal:machine_furnace', [
    'AXA',
    'YFY',
    'GCG'
  ], {
    A: 'mekanism:basic_control_circuit',
    X: 'minecraft:redstone',
    Y: 'minecraft:bricks',
    F: 'thermal:machine_frame',
    C: 'thermal:rf_coil',
    G: 'thermal:copper_gear'
  })


  ///////////////////////////////////////////
  // DYNAMOS
  ///////////////////////////////////////////

  event.remove({id: 'thermal:dynamo_stirling'})
  event.shaped('thermal:dynamo_stirling', [
    'BCB',
    'IFI',
    'GRG'
  ], {
    B: 'mekanism:basic_control_circuit',
    C: 'thermal:rf_coil',
    I: 'mekanism:ingot_steel',
    F: 'thermal:machine_frame',
    G: 'thermal:iron_gear',
    R: 'minecraft:redstone'
  })

  event.remove({id: 'thermal:dynamo_compression'})
  event.shaped('thermal:dynamo_compression', [
    'BCB',
    'IFI',
    'GRG'
  ], {
    B: 'mekanism:basic_control_circuit',
    C: 'thermal:rf_coil',
    I: 'mekanism:ingot_bronze',
    F: 'thermal:machine_frame',
    G: 'thermal:gold_gear',
    R: 'minecraft:redstone'
  })

  event.remove({id: 'thermal:dynamo_magmatic'})
  event.shaped('thermal:dynamo_magmatic', [
    'BCB',
    'IFI',
    'GRG'
  ], {
    B: 'mekanism:basic_control_circuit',
    C: 'thermal:rf_coil',
    I: 'thermal:invar_ingot',
    F: 'thermal:machine_frame',
    G: 'thermal:constantan_gear',
    R: 'minecraft:redstone'
  })

  event.remove({id: 'thermal:dynamo_numismatic'})
  event.shaped('thermal:dynamo_numismatic', [
    'BCB',
    'IFI',
    'GRG'
  ], {
    B: 'mekanism:basic_control_circuit',
    C: 'thermal:rf_coil',
    I: 'thermal:signalum_ingot',
    F: 'thermal:machine_frame',
    G: 'thermal:tin_gear',
    R: 'minecraft:redstone'
  })

  event.remove({id: 'thermal:dynamo_lapidary'})
  event.shaped('thermal:dynamo_lapidary', [
    'BCB',
    'IFI',
    'GRG'
  ], {
    B: 'mekanism:basic_control_circuit',
    C: 'thermal:rf_coil',
    I: 'thermal:lumium_ingot',
    F: 'thermal:machine_frame',
    G: 'thermal:lapis_gear',
    R: 'minecraft:redstone'
  })
})