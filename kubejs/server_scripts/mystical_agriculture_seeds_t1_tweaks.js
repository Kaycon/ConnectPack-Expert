onEvent('recipes', event => {

  
  // -----------------------------------
  // TIER 1 SEEDS
  // -----------------------------------
  //dirt ice inferium stone wood
  event.remove({id:'mysticalagriculture:inferium_seeds'})
  event.remove({id:'mysticalagriculture:seed/infusion/ice'})
  event.remove({id:'mysticalagriculture:seed/infusion/dirt'})
  event.remove({id:'mysticalagriculture:seed/infusion/stone'})
  event.remove({id:'mysticalagriculture:seed/infusion/wood'})

  //dirt
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 0,
    "duration": 100,
    "starlight": 700,
    "pattern": [
      "_____",
      "_ABA_",
      "_BDB_",
      "_ABA_",
      "_____"
    ],
    "key": {
      "A": {
        "item": "mysticalagriculture:inferium_block"
      },
      "B": {
        "item": "minecraft:dirt"
      },
      "D": {
        "type": "astralsorcery:fluid",
        "fluid": [
          {
            "fluid": "astralsorcery:liquid_starlight",
            "amount": 1000
          }
        ]
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:dirt_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:upgrade_altar"
    ]
  })

  //ice
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 0,
    "duration": 100,
    "starlight": 700,
    "pattern": [
      "_____",
      "_ABA_",
      "_BDB_",
      "_ABA_",
      "_____"
    ],
    "key": {
      "A": {
        "item": "mysticalagriculture:inferium_block"
      },
      "B": {
        "item": "minecraft:blue_ice"
      },
      "D": {
        "type": "astralsorcery:fluid",
        "fluid": [
          {
            "fluid": "astralsorcery:liquid_starlight",
            "amount": 1000
          }
        ]
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:ice_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:upgrade_altar"
    ]
  })

  //inferium
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 0,
    "duration": 100,
    "starlight": 700,
    "pattern": [
      "_____",
      "_AAA_",
      "_ADA_",
      "_AAA_",
      "_____"
    ],
    "key": {
      "A": {
        "item": "mysticalagriculture:inferium_block"
      },
      "D": {
        "type": "astralsorcery:fluid",
        "fluid": [
          {
            "fluid": "astralsorcery:liquid_starlight",
            "amount": 1000
          }
        ]
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:inferium_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:upgrade_altar"
    ]
  })

  //stone
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 0,
    "duration": 100,
    "starlight": 700,
    "pattern": [
      "_____",
      "_ABA_",
      "_BDB_",
      "_ABA_",
      "_____"
    ],
    "key": {
      "A": {
        "item": "mysticalagriculture:inferium_block"
      },
      "B": {
        "item": "minecraft:stone"
      },
      "D": {
        "type": "astralsorcery:fluid",
        "fluid": [
          {
            "fluid": "astralsorcery:liquid_starlight",
            "amount": 1000
          }
        ]
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:stone_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:upgrade_altar"
    ]
  })

  //wood
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 0,
    "duration": 100,
    "starlight": 700,
    "pattern": [
      "_____",
      "_ABA_",
      "_BDB_",
      "_ABA_",
      "_____"
    ],
    "key": {
      "A": {
        "item": "mysticalagriculture:inferium_block"
      },
      "B": {
        "item": "immersiveengineering:treated_wood_horizontal"
      },
      "D": {
        "type": "astralsorcery:fluid",
        "fluid": [
          {
            "fluid": "astralsorcery:liquid_starlight",
            "amount": 1000
          }
        ]
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:wood_seeds",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:upgrade_altar"
    ]
  })

})