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

  // Machine Frame
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

  ///////////////////////////////////////////
  // Thermal Machines
  ///////////////////////////////////////////
  
  // Machine Frame
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
})