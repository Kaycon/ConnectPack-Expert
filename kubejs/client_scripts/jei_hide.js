// priority: 0

onEvent('jei.hide.items', event => {
  // Steel Ingot
  event.hide('immersiveengineering:ingot_steel')

  // Copper Ingots
  event.hide('iceandfire:copper_ingot')
  event.hide('thermal:copper_ingot')
  event.hide('create:copper_ingot')
  event.hide('immersiveengineering:ingot_copper')
})