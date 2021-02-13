onEvent('recipes', event => {
  
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
      "A_B_A",
      "ACDCA",
      "EC_CE",
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
})