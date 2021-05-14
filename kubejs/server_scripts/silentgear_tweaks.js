onEvent('recipes', event => {

  // Crimson Steel Ingot
  event.remove({id: 'silentgear:crimson_steel_ingot'})
  event.recipes.thermal.smelter('silentgear:crimson_steel_ingot', [Item.of('minecraft:blaze_rod', 2), Item.of('mekanism:ingot_steel', 2), Item.of('silentgear:crimson_iron_ingot', 4)])

  // Crimson Iron Dust
  event.recipes.thermal.pulverizer(Item.of('silentgear:crimson_iron_dust', 2), ['silentgear:crimson_iron_ore'])
  event.recipes.mekanism.enriching(Item.of('silentgear:crimson_iron_dust', 2), ['silentgear:crimson_iron_ore'])

  // Azure Electrum
  event.remove({id: 'silentgear:azure_electrum_ingot'})
  event.recipes.thermal.smelter('silentgear:azure_electrum_ingot', [Item.of('thermal:enderium_ingot', 2), Item.of('thermal:electrum_ingot', 4), Item.of('silentgear:azure_silver_ingot', 4)])
  
  // Azure Silver Dust
  event.recipes.thermal.pulverizer(Item.of('silentgear:azure_silver_dust', 2), ['silentgear:azure_silver_ore'])
  event.recipes.mekanism.enriching(Item.of('silentgear:azure_silver_dust', 2), ['silentgear:azure_silver_ore'])

})