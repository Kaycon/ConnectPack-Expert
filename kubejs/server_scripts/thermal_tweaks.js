onEvent('recipes', event => {

  // Remove Crafting Table Bronze recipe
  event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
  
  // Remove Crafting Table Bronze Dust recipe
  event.remove({id: 'thermal:bronze_dust_4'})

  
  ///////////////////////////////////////////
  // Remove Crafting Table Gears Recipes
  ///////////////////////////////////////////

  var thermal_gears = [
    'iron_gear',
    'gold_gear',
    'lapis_gear',
    'diamond_gear',
    'emerald_gear',
    'quartz_gear',
    'copper_gear',
    'tin_gear',
    'lead_gear',
    'silver_gear',
    'nickel_gear',
    'bronze_gear',
    'electrum_gear',
    'invar_gear',
    'constantan_gear',
    'signalum_gear',
    'lumium_gear',
    'enderium_gear'

  ]
  for (i = 0; i < thermal_gears.length; i++) {
    event.remove({id: 'thermal:parts/'+thermal_gears[i]})
  } 

  event.recipes.thermal.press('thermal:lapis_gear', [item.of('minecraft:lapis_lazuli', 4), 'thermal:press_gear_die'])
  event.recipes.thermal.press('thermal:diamond_gear', [item.of('minecraft:diamond', 4), 'thermal:press_gear_die'])
  event.recipes.thermal.press('thermal:emerald_gear', [item.of('minecraft:emerald', 4), 'thermal:press_gear_die'])
  event.recipes.thermal.press('thermal:quartz_gear', [item.of('minecraft:quartz', 4), 'thermal:press_gear_die'])


  

})