onEvent('recipes', event => {

  // -----------------------------------
  // TIER 4 SEEDS
  // -----------------------------------

  //Remove old Infuser recipes
  event.remove({id:'mysticalagriculture:seed/infusion/gold'})
  event.remove({id:'mysticalagriculture:seed/infusion/lapis_lazuli'})
  event.remove({id:'mysticalagriculture:seed/infusion/end'})
  event.remove({id:'mysticalagriculture:seed/infusion/experience'})
  event.remove({id:'mysticalagriculture:seed/infusion/blaze'})
  event.remove({id:'mysticalagriculture:seed/infusion/ghast'})
  event.remove({id:'mysticalagriculture:seed/infusion/enderman'})
  event.remove({id:'mysticalagriculture:seed/infusion/steel'})
  event.remove({id:'mysticalagriculture:seed/infusion/nickel'})
  event.remove({id:'mysticalagriculture:seed/infusion/constantan'})
  event.remove({id:'mysticalagriculture:seed/infusion/electrum'})
  event.remove({id:'mysticalagriculture:seed/infusion/invar'})
  event.remove({id:'mysticalagriculture:seed/infusion/mithril'}) // wird nicht removed
  event.remove({id:'mysticalagriculture:seed/infusion/tungsten'}) // wird nicht removed
  event.remove({id:'mysticalagriculture:seed/infusion/titanium'}) // wird nicht removed
  event.remove({id:'mysticalagriculture:seed/infusion/uranium'})
  event.remove({id:'mysticalagriculture:seed/infusion/chrome'}) // wird nicht removed
  event.remove({id:'mysticalagriculture:seed/infusion/signalum'})
  event.remove({id:'mysticalagriculture:seed/infusion/lumium'})
  event.remove({id:'mysticalagriculture:seed/infusion/hop_graphite'})
  event.remove({id:'mysticalagriculture:seed/infusion/elementium'})
  event.remove({id:'mysticalagriculture:seed/infusion/osmium'})
  event.remove({id:'mysticalagriculture:seed/infusion/refined_glowstone'})
  event.remove({id:'mysticalagriculture:seed/infusion/refined_obsidian'})
  event.remove({id:'mysticalagriculture:seed/infusion/starmetal'})
  event.remove({id:'mysticalagriculture:seed/infusion/energized_steel'})
  event.remove({id:'mysticalagriculture:seed/infusion/blazing_crystal'})
  event.remove({id:'mysticalagriculture:seed/infusion/shulker'})

  //Add recipes for new Essence
  event.shaped('minecraft:shulker_shell', [
    '   ',
    'E E',
    'EEE'
  ], {
    E: 'mysticalagriculture:shulker_essence'
  })

  //gold
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
        "item": "minecraft:gold_block"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:gold_seeds",
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

  // Lapis Lazuli
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
        "item": "minecraft:lapis_block"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_summer"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:lapis_lazuli_seeds",
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

  // End
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
        "item": "mysticalagriculture:end_agglomeratio"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_autumn"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:end_seeds",
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

  // experience
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
        "item": "mysticalagriculture:experience_capsule"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_winter"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:experience_seeds",
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

  // blaze
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
        "item": "botania:blaze_block"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:blaze_seeds",
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

  // ghast
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
        "item": "minecraft:end_crystal"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_summer"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:ghast_seeds",
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

  // enderman
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
        "item": "cyclic:ender_eye_reuse"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_autumn"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:enderman_seeds",
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

  // steel
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
        "item": "mekanism:block_steel"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_winter"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:steel_seeds",
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

  // nickel
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
        "item": "thermal:nickel_block"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:nickel_seeds",
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

  // constantan
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
        "item": "thermal:constantan_block"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_summer"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:constantan_seeds",
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

  // electrum
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
        "item": "thermal:electrum_block"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_summer"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:electrum_seeds",
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

  // invar
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
        "item": "thermal:invar_block"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_winter"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:invar_seeds",
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

  // uranium
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
        "item": "mekanism:block_uranium"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_autumn"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:uranium_seeds",
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

  // signalum
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
        "item": "thermal:signalum_block"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_winter"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:signalum_seeds",
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

  // lumium
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
        "item": "thermal:lumium_block"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:lumium_seeds",
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

  // hop_graphite
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
        "item": "immersiveengineering:ingot_hop_graphite"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_summer"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:hop_graphite_seeds",
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

  // elementium
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
        "item": "botania:elementium_block"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_autumn"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:elementium_seeds",
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

  // osmium
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
        "item": "mekanism:block_osmium"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_winter"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:osmium_seeds",
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

  // refined_glowstone
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
        "item": "mekanism:block_refined_glowstone"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:refined_glowstone_seeds",
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

  // refined_obsidian
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
        "item": "mekanism:block_refined_obsidian"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_summer"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:refined_obsidian_seeds",
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

  // starmetal
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
        "item": "astralsorcery:starmetal"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_summer"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:starmetal_seeds",
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

  // energized_steel
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
        "item": "powah:energized_steel_block"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_winter"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:energized_steel_seeds",
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

  // blazing_crystal
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
        "item": "powah:blazing_crystal_block"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:blazing_crystal_seeds",
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
  
  // shulker
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
        "item": "minecraft:shulker_shell"
      },
      "D": {
        "item": "mysticalagriculture:imperium_block"
      },
      "E": {
        "item": "botania:rune_spring"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:shulker_seeds",
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
