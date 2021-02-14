onEvent('recipes', event => {
  
  event.recipes.thermal.pulverizer('astralsorcery:stardust', ['astralsorcery:starmetal_ingot'])
  event.recipes.thermal.pulverizer(Item.of('astralsorcery:stardust', 2), ['astralsorcery:starmetal_ore'])

  event.remove({id: 'astralsorcery:altar/well'})
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 0,
    "duration": 100,
    "starlight": 200,
    "pattern": [
      "_____",
      "_B_B_",
      "_CDC_",
      "_ALA_",
      "_____"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:aquamarine"
      },
      "B": {
        "item": "astralsorcery:marble_runed"
      },
      "C": {
        "item": "astralsorcery:marble_chiseled"
      },
      "L": {
        "item": "botania:livingrock"
      },
      "D": {
        "type": "astralsorcery:crystal",
        "hasToBeAttuned": false,
        "hasToBeCelestial": false,
        "canBeAttuned": true,
        "canBeCelestialCrystal": true
      }
    },
    "output": [
      {
        "item": "astralsorcery:well",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_discovery_central_beam"
    ]
  })
  
  event.remove({id: 'astralsorcery:altar/illumination_powder'})
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 0,
    "duration": 60,
    "starlight": 400,
    "pattern": [
      "_____",
      "__A__",
      "_MBM_",
      "__A__",
      "_____"
    ],
    "key": {
      "A": {
        "tag": "forge:dusts/glowstone"
      },
      "B": {
        "item": "astralsorcery:aquamarine"
      },
      "M": {
        "item": "botania:mana_powder"
      }
    },
    "output": [
      {
        "item": "astralsorcery:illumination_powder",
        "count": 16
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_discovery_central_beam"
    ]
  })
  
  event.remove({id: 'astralsorcery:altar/glass_lens'})
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 0,
    "duration": 100,
    "starlight": 200,
    "pattern": [
      "_____",
      "__A__",
      "_ABA_",
      "__A__",
      "_____"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:aquamarine"
      },
      "B": {
        "item": "botania:mana_glass_pane"
      }
    },
    "output": [
      {
        "item": "astralsorcery:glass_lens",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_discovery_central_beam"
    ]
  })
  
  event.remove({id: 'astralsorcery:infuser/glass_pane'})
  event.custom({
    "type": "astralsorcery:infuser",
    "fluidInput": "astralsorcery:liquid_starlight",
    "input": {
      "item": "botania:mana_glass_pane"
    },
    "output": {
      "item": "astralsorcery:glass_lens",
      "count": 1
    },
    "consumptionChance": 0.1,
    "duration": 100,
    "consumeMultipleFluids": false,
    "acceptChaliceInput": true,
    "copyNBTToOutputs": false
  })
  
  event.remove({id: 'astralsorcery:altar/mantle'})
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 4800,
    "pattern": [
      "_____",
      "AGBFA",
      "ACDCA",
      "ECHCE",
      "E___E"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "type": "astralsorcery:crystal",
        "hasToBeAttuned": false,
        "hasToBeCelestial": false,
        "canBeAttuned": true,
        "canBeCelestialCrystal": true
      },
      "C": {
        "item": "astralsorcery:illumination_powder"
      },
      "D": {
        "item": "botania:manaweave_chestplate"
      },
      "E": {
        "tag": "astralsorcery:stardust"
      },
      "F": {
        "item": "bloodmagic:soulgemgreater"
      },
      "G": {
        "item": "bloodmagic:masterbloodorb"
      },
      "H": {
        "item": "botania:life_essence"
      }
    },
    "output": [
      {
        "item": "astralsorcery:mantle",
        "count": 1
      }
    ],
    "relay_inputs": [
      {
        "tag": "astralsorcery:starmetal"
      },
      {
        "tag": "astralsorcery:stardust"
      },
      {
        "tag": "forge:feathers"
      },
      {
        "tag": "forge:ender_pearls"
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
  
  event.remove({id: 'astralsorcery:altar/altar_constellation'})
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 1,
    "duration": 200,
    "starlight": 1400,
    "pattern": [
      "A___A",
      "_E_E_",
      "_DFD_",
      "_BCB_",
      "G___G"
    ],
    "key": {
      "A": {
        "tag": "astralsorcery:stardust"
      },
      "B": {
        "item": "botania:elementium_ingot"
      },
      "C": {
        "tag": "astralsorcery:starmetal"
      },
      "D": {
        "item": "bloodmagic:infusedslate"
      },
      "E": {
        "item": "astralsorcery:aquamarine"
      },
      "F": {
        "type": "astralsorcery:crystal",
        "hasToBeAttuned": false,
        "hasToBeCelestial": false,
        "canBeAttuned": true,
        "canBeCelestialCrystal": true
      },
      "G": {
        "item": "astralsorcery:marble_chiseled"
      }
    },
    "recipe_class": "astralsorcery:constellation_upgrade",
    "output": [
      {
        "item": "astralsorcery:altar_constellation",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:upgrade_altar",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })
  
  event.remove({id: 'astralsorcery:altar/altar_radiance'})
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 3200,
    "pattern": [
      "AB_BA",
      "CADAC",
      "_FEF_",
      "CAGAC",
      "AB_BA"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:marble_runed"
      },
      "B": {
        "item": "astralsorcery:black_marble_raw"
      },
      "C": {
        "item": "astralsorcery:resonating_gem"
      },
      "D": {
        "item": "astralsorcery:glass_lens"
      },
      "E": {
        "type": "astralsorcery:crystal",
        "hasToBeAttuned": false,
        "hasToBeCelestial": true,
        "canBeAttuned": true,
        "canBeCelestialCrystal": true
      },
      "F": {
        "item": "bloodmagic:demonslate"
      },
      "G": {
        "item": "botania:life_essence"
      }
    },
    "recipe_class": "astralsorcery:trait_upgrade",
    "output": [
      {
        "item": "astralsorcery:altar_radiance",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:pillar_sparkle",
      "astralsorcery:luminescence_flare",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:upgrade_altar",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })
  
  event.remove({id: 'astralsorcery:altar/infuser'})
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 2,
    "duration": 400,
    "starlight": 1200,
    "pattern": [
      "G___G",
      "ABCBA",
      "_DED_",
      "AFFFA",
      "GD_DG"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:marble_pillar"
      },
      "B": {
        "item": "astralsorcery:aquamarine"
      },
      "C": {
        "tag": "astralsorcery:starmetal"
      },
      "D": {
        "item": "botania:terrasteel_ingot"
      },
      "E": {
        "type": "astralsorcery:fluid",
        "fluid": [
          {
            "fluid": "astralsorcery:liquid_starlight",
            "amount": 1000
          }
        ]
      },
      "F": {
        "item": "astralsorcery:marble_runed"
      },
      "G": {
        "item": "bloodmagic:infusedslate"
      }
    },
    "output": [
      {
        "item": "astralsorcery:infuser",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })
})