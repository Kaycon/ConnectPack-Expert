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
    F: 'refinedstorage:machine_casing'
  })

  event.remove({id: 'powah:crafting/energizing_orb'})
  event.shaped('powah:energizing_orb', [
    'GGG',
    'GCG',
    'RRR'
  ], {
    G: 'thermal:enderium_glass',
    R: 'powah:dielectric_rod_horizontal',
    C: 'powah:dielectric_casing'
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


  /////////////////////
  // Energizing Rods
  /////////////////////

  event.remove({id: 'powah:crafting/energizing_rod_basic'})
  event.shaped('powah:energizing_rod_basic', [
    ' Q ',
    'CRC',
    ' Q '
  ], {
    Q: '#forge:storage_blocks/quartz',
    C: 'powah:capacitor_basic',
    R: 'powah:energizing_rod_starter'
  })

  event.remove({id: 'powah:crafting/energizing_rod_hardened'})
  event.shaped('powah:energizing_rod_hardened', [
    ' Q ',
    'CRC',
    ' Q '
  ], {
    Q: '#forge:storage_blocks/quartz',
    C: 'powah:capacitor_hardened',
    R: 'powah:energizing_rod_basic'
  })

  event.remove({id: 'powah:crafting/energizing_rod_blazing'})
  event.shaped('powah:energizing_rod_blazing', [
    ' Q ',
    'CRC',
    ' Q '
  ], {
    Q: '#forge:storage_blocks/quartz',
    C: 'powah:capacitor_blazing',
    R: 'powah:energizing_rod_hardened'
  })

  event.remove({id: 'powah:crafting/energizing_rod_niotic'})
  event.shaped('powah:energizing_rod_niotic', [
    ' Q ',
    'CRC',
    ' Q '
  ], {
    Q: 'minecraft:diamond_block',
    C: 'powah:capacitor_niotic',
    R: 'powah:energizing_rod_blazing'
  })

  event.remove({id: 'powah:crafting/energizing_rod_spirited'})
  event.shaped('powah:energizing_rod_spirited', [
    ' Q ',
    'CRC',
    ' Q '
  ], {
    Q: 'minecraft:phantom_membrane',
    C: 'powah:capacitor_spirited',
    R: 'powah:energizing_rod_niotic'
  })

  event.remove({id: 'powah:crafting/energizing_rod_nitro'})
  event.shaped('powah:energizing_rod_nitro', [
    ' Q ',
    'CRC',
    ' Q '
  ], {
    Q: 'minecraft:nether_star',
    C: 'powah:capacitor_nitro',
    R: 'powah:energizing_rod_spirited'
  })


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
      "item": "thermal:electrum_ingot"
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
      "item": "thermal:electrum_ingot"
    },
    {
      "item": "thermal:electrum_ingot"
    },
    {
      "item": "thermal:electrum_ingot"
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