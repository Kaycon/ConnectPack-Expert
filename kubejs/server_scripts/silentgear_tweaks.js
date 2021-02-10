onEvent('recipes', event => {
  event.remove({id: 'silentgear:crimson_steel_ingot'})
  event.recipes.thermal.smelter('silentgear:crimson_steel_ingot', [Item.of('minecraft:blaze_rod', 2), Item.of('mekanism:ingot_steel', 2), Item.of('silentgear:crimson_iron_ingot', 4)])
})