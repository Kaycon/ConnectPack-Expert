onEvent('recipes', event => {

  //Ultimate Ingot
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {
      "item": "minecraft:netherite_ingot"
    },
    {
      "tag": "forge:ingots/terrasteel"
    },
    {
      "tag": "forge:ingots/refined_obsidian"
    },
    {
      "item": "mysticalagradditions:insanium_ingot"
    },
    {
      "item": "extendedcrafting:enhanced_ender_ingot"
    },
    {
      "item": "extendedcrafting:crystaltine_ingot"
    }
    ],
    "energy": 10000000,
    "result": {
    "item": "extendedcrafting:the_ultimate_ingot",
    "count": 1
    }
  })

  //Enhanced Ender Ingot
  event.remove({id: 'extendedcrafting:enhanced_ender_ingot'})
  event.recipes.thermal.smelter('extendedcrafting:enhanced_ender_ingot', [Item.of('thermal:enderium_ingot', 8), 'extendedcrafting:ender_star'])

  //Black Ingot
  event.remove({id: 'extendedcrafting:black_iron_ingot'})
  event.recipes.thermal.smelter('extendedcrafting:black_iron_ingot', ['mekanism:ingot_steel', 'iceandfire:witherbone'])

  //Redstone Ingot
  event.remove({id: 'extendedcrafting:redstone_ingot'})
  event.recipes.mekanism.metallurgic_infusing('extendedcrafting:redstone_ingot', 'minecraft:iron_ingot', 'mekanism:redstone', 160)

  //Black Iron Slate
  event.remove({id: 'extendedcrafting:black_iron_slate'})
  event.recipes.thermal.press('extendedcrafting:black_iron_slate', ['extendedcrafting:black_iron_ingot'])

  //Crystaltine Ingot
  event.remove({id: 'extendedcrafting:crystaltine_ingot'})
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {"item": "powah:blazing_crystal_block"},
    {"item": "powah:niotic_crystal_block"},
    {"item": "powah:spirited_crystal_block"},
    {"item": "minecraft:lapis_block"},
    {"item": "silentgear:bort_block"},
    {"item": "thermal:lumium_block"}
    ],
    "energy": 2000000,
    "result": {
    "item": "extendedcrafting:crystaltine_ingot",
    "count": 4
    }
  })

  //Ender Star
  event.remove({id: 'extendedcrafting:ender_star'})  
  event.shaped('extendedcrafting:ender_star', [
    ' E ',
    'ESE',
    ' E '
  ], {
    E: 'cyclic:ender_eye_reuse',
    S: 'minecraft:nether_star'
  })

  event.remove({id: 'extendedcrafting:compressor'})  
  event.shaped('extendedcrafting:compressor', [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: 'industrialforegoing:machine_frame_supreme'
    //N: 'avaritia:neutronium_ingot'
  })

})