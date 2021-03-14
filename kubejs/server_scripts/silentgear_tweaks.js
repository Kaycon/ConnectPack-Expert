onEvent('recipes', event => {

  // Crimson Steel Ingot
  event.remove({id: 'silentgear:crimson_steel_ingot'})
  event.recipes.thermal.smelter('silentgear:crimson_steel_ingot', [Item.of('minecraft:blaze_rod', 2), Item.of('mekanism:ingot_steel', 2), Item.of('silentgear:crimson_iron_ingot', 4)])

  // Crimson Iron Dust
  event.recipes.thermal.pulverizer(Item.of('silentgear:crimson_iron_dust', 2), ['silentgear:crimson_iron_ore'])
  event.recipes.mekanism.enriching(Item.of('silentgear:crimson_iron_dust', 2), ['silentgear:crimson_iron_ore'])

})