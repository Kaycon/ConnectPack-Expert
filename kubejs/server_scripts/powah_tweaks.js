onEvent('recipes', event => {

  event.remove({id: 'powah:crafting/capacitor_basic'})
  event.shaped('powah:capacitor_basic', [
    ' SD',
    'SRS',
    'DS '
  ], {
    S: 'mekanism:ingot_steel',
    D: 'powah:dielectric_paste',
    R: 'minecraft:redstone_block'
  })

  event.remove({id: 'powah:crafting/dielectric_casing'})
  event.shaped('powah:dielectric_casing', [
    'CHC',
    'DFD',
    'CHC'
  ], {
    C: 'mekanism:ingot_copper',
    H: 'powah:dielectric_rod_horizontal',
    D: 'powah:dielectric_rod',
    F: 'thermal:machine_frame'
  })

  event.remove({id: 'powah:crafting/energy_cell_basic'})
  event.remove({id: 'powah:crafting/energy_cell_basic_2'})
  event.shaped('powah:energy_cell_basic', [
    'SCS',
    'EDE',
    'SCS'
  ], {
    S: 'mekanism:ingot_steel',
    C: 'powah:capacitor_basic',
    E: 'powah:energy_cell_starter',
    D: 'powah:dielectric_casing'
  })

  event.shapeless('powah:uraninite', 'mekanism:ingot_uranium')

  //Blazing crystal
  event.remove({id: 'powah:energizing/blazing_crystal'})
  event.remove({id: 'powah:energizing/blazing_crystal_2'})
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {"item": "silentgear:crimson_steel_ingot"}
    ],
    "energy": 90000,
    "result": {
    "item": "powah:crystal_blazing",
    "count": 1
    }
  })
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {"item": "silentgear:crimson_steel_ingot"},
    {"item": "silentgear:crimson_steel_ingot"},
    {"item": "silentgear:crimson_steel_ingot"},
    {"item": "silentgear:crimson_steel_ingot"},
    {"item": "silentgear:crimson_steel_ingot"},
    {"item": "silentgear:crimson_steel_ingot"}
    ],
    "energy": 540000,
    "result": {
    "item": "powah:crystal_blazing",
    "count": 6
    }
  })

  //Dry Ice
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {"item": "minecraft:blue_ice"},
    {"item": "minecraft:blue_ice"},
    {"item": "minecraft:blue_ice"},
    {"item": "minecraft:blue_ice"},
    {"item": "minecraft:blue_ice"},
    {"item": "minecraft:blue_ice"}
    ],
    "energy": 30000,
    "result": {
    "item": "powah:dry_ice",
    "count": 3
    }
  })

  //Ender Core
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {"item": "minecraft:ender_eye"},
    {"item": "minecraft:ender_eye"},
    {"item": "powah:dielectric_casing"},
    {"item": "powah:dielectric_casing"},
    {"item": "powah:capacitor_basic_tiny"},
    {"item": "powah:capacitor_basic_tiny"}
    ],
    "energy": 100000,
    "result": {
    "item": "powah:ender_core",
    "count": 2
    }
  })

  //Energized Steel
  event.remove({id: 'powah:energizing/energized_steel'})
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {
      "tag": "forge:ingots/steel"
    },
    {
      "tag": "forge:ingots/gold"
    }
    ],
    "energy": 10000,
    "result": {
    "item": "powah:steel_energized",
    "count": 2
    }
  })
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {
      "tag": "forge:ingots/steel"
    },
    {
      "tag": "forge:ingots/steel"
    },
    {
      "tag": "forge:ingots/steel"
    },
    {
      "tag": "forge:ingots/gold"
    },
    {
      "tag": "forge:ingots/gold"
    },
    {
      "tag": "forge:ingots/gold"
    }
    ],
    "energy": 30000,
    "result": {
    "item": "powah:steel_energized",
    "count": 6
    }
  })

  //Niotic Crystal
  event.remove({id: 'powah:energizing/niotic_crystal'})
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {"tag": "forge:ingots/refined_obsidian"}
    ],
    "energy": 300000,
    "result": {
    "item": "powah:crystal_niotic",
    "count": 1
    }
  })
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {"tag": "forge:ingots/refined_obsidian"},
    {"tag": "forge:ingots/refined_obsidian"},
    {"tag": "forge:ingots/refined_obsidian"},
    {"tag": "forge:ingots/refined_obsidian"},
    {"tag": "forge:ingots/refined_obsidian"},
    {"tag": "forge:ingots/refined_obsidian"}
    ],
    "energy": 1800000,
    "result": {
    "item": "powah:crystal_niotic",
    "count": 6
    }
  })

  //Nitro Crystal
  event.remove({id: 'powah:energizing/nitro_crystal'})
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {"item": "extendedcrafting:the_ultimate_ingot"},
    {"tag": "forge:storage_blocks/redstone"},
    {"item": "powah:blazing_crystal_block"}
    ],
    "energy": 20000000,
    "result": {
    "item": "powah:crystal_nitro",
    "count": 16
    }
  })
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {"item": "extendedcrafting:the_ultimate_ingot"},
    {"item": "extendedcrafting:the_ultimate_ingot"},
    {"tag": "forge:storage_blocks/redstone"},
    {"tag": "forge:storage_blocks/redstone"},
    {"item": "powah:blazing_crystal_block"},
    {"item": "powah:blazing_crystal_block"}
    ],
    "energy": 40000000,
    "result": {
    "item": "powah:crystal_nitro",
    "count": 32
    }
  })

  //Spirited Crystal
  event.remove({id: 'powah:energizing/spirited_crystal'})
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {"item": "minecraft:netherite_ingot"},
    {"tag": "forge:gems/emerald"}
    ],
    "energy": 2000000,
    "result": {
    "item": "powah:crystal_spirited",
    "count": 2
    }
  })
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {"item": "minecraft:netherite_ingot"},
    {"item": "minecraft:netherite_ingot"},
    {"item": "minecraft:netherite_ingot"},
    {"tag": "forge:gems/emerald"},
    {"tag": "forge:gems/emerald"},
    {"tag": "forge:gems/emerald"}
    ],
    "energy": 6000000,
    "result": {
    "item": "powah:crystal_spirited",
    "count": 6
    }
  })

})