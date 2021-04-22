onEvent('recipes', event => {

  // -----------------------------------
  // TIER 5 SEEDS
  // -----------------------------------

  //Remove old Infuser recipes
  event.remove({id:'mysticalagriculture:seed/infusion/diamond'})
  event.remove({id:'mysticalagriculture:seed/infusion/emerald'})
  event.remove({id:'mysticalagriculture:seed/infusion/netherite'})
  event.remove({id:'mysticalagriculture:seed/infusion/wither_skeleton'})
  event.remove({id:'mysticalagriculture:seed/infusion/enderium'})
  event.remove({id:'mysticalagriculture:seed/infusion/terrasteel'})
  event.remove({id:'mysticalagriculture:seed/infusion/rock_crystal'})
  event.remove({id:'mysticalagriculture:seed/infusion/niotic_crystal'})
  event.remove({id:'mysticalagriculture:seed/infusion/spirited_crystal'})
  event.remove({id:'mysticalagriculture:seed/infusion/uraninite'})
  event.remove({id:'mysticalagriculture:seed/infusion/refined_obsidian'})

  //Diamond
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 4000,
    "pattern": [
      "BAAAB",
      "ADCDA",
      "ACECA",
      "ADCDA",
      "BAAAB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:demonslate"
      },
      "C": {
        "item": "minecraft:diamond_block"
      },
      "D": {
        "item": "mysticalagriculture:supremium_block"
      },
      "E": {
        "item": "botania:rune_lust"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:diamond_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_trait_focus_circle",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Emerald
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 4000,
    "pattern": [
      "BAAAB",
      "ADCDA",
      "ACECA",
      "ADCDA",
      "BAAAB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:demonslate"
      },
      "C": {
        "item": "minecraft:emerald_block"
      },
      "D": {
        "item": "mysticalagriculture:supremium_block"
      },
      "E": {
        "item": "botania:rune_gluttony"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:emerald_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_trait_focus_circle",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Netherite
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 4000,
    "pattern": [
      "BAAAB",
      "ADCDA",
      "ACECA",
      "ADCDA",
      "BAAAB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:demonslate"
      },
      "C": {
        "item": "minecraft:netherite_block"
      },
      "D": {
        "item": "mysticalagriculture:supremium_block"
      },
      "E": {
        "item": "botania:rune_greed"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:netherite_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_trait_focus_circle",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Wither Skeleton
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 4000,
    "pattern": [
      "BAAAB",
      "ADCDA",
      "ACECA",
      "ADCDA",
      "BAAAB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:demonslate"
      },
      "C": {
        "item": "minecraft:wither_skeleton_skull"
      },
      "D": {
        "item": "mysticalagriculture:supremium_block"
      },
      "E": {
        "item": "botania:rune_sloth"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:wither_skeleton_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_trait_focus_circle",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Enderium
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 4000,
    "pattern": [
      "BAAAB",
      "ADCDA",
      "ACECA",
      "ADCDA",
      "BAAAB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:demonslate"
      },
      "C": {
        "item": "thermal:enderium_block"
      },
      "D": {
        "item": "mysticalagriculture:supremium_block"
      },
      "E": {
        "item": "botania:rune_wrath"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:enderium_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_trait_focus_circle",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Terrasteel
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 4000,
    "pattern": [
      "BAAAB",
      "ADCDA",
      "ACECA",
      "ADCDA",
      "BAAAB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:demonslate"
      },
      "C": {
        "item": "botania:terrasteel_block"
      },
      "D": {
        "item": "mysticalagriculture:supremium_block"
      },
      "E": {
        "item": "botania:rune_envy"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:terrasteel_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_trait_focus_circle",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Rock Crystal
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 4000,
    "pattern": [
      "BAAAB",
      "ADCDA",
      "ACECA",
      "ADCDA",
      "BAAAB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:demonslate"
      },
      "C": {
        "item": "astralsorcery:rock_crystal"
      },
      "D": {
        "item": "mysticalagriculture:supremium_block"
      },
      "E": {
        "item": "botania:rune_pride"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:rock_crystal_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_trait_focus_circle",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Niotic Crystal
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 4000,
    "pattern": [
      "BAAAB",
      "ADCDA",
      "ACECA",
      "ADCDA",
      "BAAAB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:demonslate"
      },
      "C": {
        "item": "powah:niotic_crystal_block"
      },
      "D": {
        "item": "mysticalagriculture:supremium_block"
      },
      "E": {
        "item": "botania:rune_lust"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:niotic_crystal_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_trait_focus_circle",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Spirited Crystal
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 4000,
    "pattern": [
      "BAAAB",
      "ADCDA",
      "ACECA",
      "ADCDA",
      "BAAAB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:demonslate"
      },
      "C": {
        "item": "powah:spirited_crystal_block"
      },
      "D": {
        "item": "mysticalagriculture:supremium_block"
      },
      "E": {
        "item": "botania:rune_gluttony"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:spirited_crystal_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_trait_focus_circle",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  //Uraninite
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 4000,
    "pattern": [
      "BAAAB",
      "ADCDA",
      "ACECA",
      "ADCDA",
      "BAAAB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:demonslate"
      },
      "C": {
        "item": "powah:uraninite_block"
      },
      "D": {
        "item": "mysticalagriculture:supremium_block"
      },
      "E": {
        "item": "botania:rune_greed"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:uraninite_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_trait_focus_circle",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  // refined_obsidian
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 4000,
    "pattern": [
      "BAAAB",
      "ADCDA",
      "ACECA",
      "ADCDA",
      "BAAAB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:demonslate"
      },
      "C": {
        "item": "mekanism:block_refined_obsidian"
      },
      "D": {
        "item": "mysticalagriculture:supremium_block"
      },
      "E": {
        "item": "botania:rune_greed"
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
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_trait_focus_circle",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })
})