onEvent('recipes', event => {

  // -----------------------------------
  // TIER 3 SEEDS
  // -----------------------------------

  //Remove old Infuser recipes
  event.remove({id:'mysticalagriculture:seed/infusion/iron'})
  event.remove({id:'mysticalagriculture:seed/infusion/nether_quartz'})
  event.remove({id:'mysticalagriculture:seed/infusion/glowstone'})
  event.remove({id:'mysticalagriculture:seed/infusion/redstone'})
  event.remove({id:'mysticalagriculture:seed/infusion/obsidian'})
  event.remove({id:'mysticalagriculture:seed/infusion/prismarine'})
  event.remove({id:'mysticalagriculture:seed/infusion/zombie'})
  event.remove({id:'mysticalagriculture:seed/infusion/skeleton'})
  event.remove({id:'mysticalagriculture:seed/infusion/creeper'})
  event.remove({id:'mysticalagriculture:seed/infusion/spider'})
  event.remove({id:'mysticalagriculture:seed/infusion/rabbit'})
  event.remove({id:'mysticalagriculture:seed/infusion/tin'})
  event.remove({id:'mysticalagriculture:seed/infusion/bronze'})
  event.remove({id:'mysticalagriculture:seed/infusion/zinc'})
  event.remove({id:'mysticalagriculture:seed/infusion/brass'})
  event.remove({id:'mysticalagriculture:seed/infusion/silver'})
  event.remove({id:'mysticalagriculture:seed/infusion/lead'})
  event.remove({id:'mysticalagriculture:seed/infusion/graphite'})
  event.remove({id:'mysticalagriculture:seed/infusion/blizz'})
  event.remove({id:'mysticalagriculture:seed/infusion/blitz'})
  event.remove({id:'mysticalagriculture:seed/infusion/basalz'})
  event.remove({id:'mysticalagriculture:seed/infusion/manasteel'})
  event.remove({id:'mysticalagriculture:seed/infusion/ender_biotite'})
  event.remove({id:'mysticalagriculture:seed/infusion/aquamarine'})
  event.remove({id:'mysticalagriculture:seed/infusion/quartz_enriched_iron'})

  //Add recipes for new Essence
  event.shaped(Item.of('silentgear:crimson_iron_ingot', 6), [
    'EEE',
    'E E',
    'EEE'
  ], {
    E: 'mysticalagriculture:crimson-iron_essence'
  })

  //Iron
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "minecraft:iron_block"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:iron_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Nether Quartz
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "minecraft:quartz_block"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_summer"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:nether_quartz_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Glowstone
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "minecraft:glowstone"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_autumn"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:glowstone_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Redstone
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "minecraft:redstone_block"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_winter"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:redstone_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Obsidian
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "minecraft:obsidian"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:obsidian_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Prismarine
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "minecraft:prismarine_bricks"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_summer"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:prismarine_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Zombie
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "minecraft:rotten_flesh"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_autumn"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:zombie_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Skeleton
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "minecraft:bone_block"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_winter"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:skeleton_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Creeper
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "minecraft:tnt"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:creeper_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Spider
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "minecraft:spider_eye"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_summer"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:spider_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Rabbit
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_FEF_",
      "ADGDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "minecraft:rabbit_hide"
      },
      "F": {
        "item": "minecraft:rabbit_foot"
      },
      "G": {
        "item": "minecraft:rabbit"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_autumn"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:rabbit_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Tin
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "mekanism:block_tin"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_winter"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:tin_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Bronze
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "mekanism:block_bronze"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:bronze_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Zinc
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "create:zinc_block"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_summer"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:zinc_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Brass
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "create:brass_block"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_autumn"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:brass_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Silver
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "thermal:silver_block"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_winter"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:silver_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Lead
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "mekanism:block_lead"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:lead_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Blizz
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "thermal:blizz_rod"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_summer"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:blizz_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Blitz
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "thermal:blitz_rod"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_autumn"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:blitz_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Basalz
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "thermal:basalz_rod"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_winter"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:basalz_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Manasteel
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "botania:manasteel_block"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:manasteel_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Ender Biotite
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "quark:biotite_block"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_summer"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:ender_biotite_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Aquamarine
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADADA",
      "_AEA_",
      "ADADA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_autumn"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:aquamarine_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Quartz Enriched Iron
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "refinedstorage:quartz_enriched_iron_block"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_winter"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:quartz_enriched_iron_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Crimson Iron
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 500,
    "pattern": [
      "BA_AB",
      "ADCDA",
      "_CEC_",
      "ADCDA",
      "BA_AB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:infusedslate"
      },
      "C": {
        "item": "silentgear:crimson_iron_block"
      },
      "D": {
        "item": "mysticalagriculture:tertium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:crimson-iron_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })
})