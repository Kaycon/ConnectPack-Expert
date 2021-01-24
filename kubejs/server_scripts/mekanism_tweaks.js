onEvent('recipes', event => {

  // Remove Mekanism Steel recipe
  event.remove({id: 'mekanism:processing/steel/enriched_iron_to_dust'})

  // Remove Mekanism Bronze recipe
  event.remove({id: 'mekanism:processing/bronze/dust/from_infusing'})
  event.remove({id: 'mekanism:processing/bronze/ingot/from_infusing'})

})