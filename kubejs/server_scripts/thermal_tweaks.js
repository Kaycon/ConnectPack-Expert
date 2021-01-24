onEvent('recipes', event => {

  // Remove Crafting Table Bronze recipe
  event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
  
  // Remove Crafting Table Bronze Dust recipe
  event.remove({id: 'thermal:bronze_dust_4'})
})