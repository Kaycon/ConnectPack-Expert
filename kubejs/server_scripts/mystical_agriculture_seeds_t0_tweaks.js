onEvent('recipes', event => {

    // -----------------------------------
    // TIER 0 SEEDS / elemental
    // -----------------------------------
    
    //Remove old Infuser recipes
    event.remove({id:'mysticalagriculture:seed/infusion/earth'})
    event.remove({id:'mysticalagriculture:seed/infusion/air'})
    event.remove({id:'mysticalagriculture:seed/infusion/fire'})
    event.remove({id:'mysticalagriculture:seed/infusion/water'})

    //air
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
          "item": "mysticalagriculture:air_agglomeratio"
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
          "item": "mysticalagriculture:air_seeds",
          "count": 1
        }
      ],
      "effects": [
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:upgrade_altar"
      ]
    })

    //fire
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
          "item": "mysticalagriculture:fire_agglomeratio"
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
          "item": "mysticalagriculture:fire_seeds",
          "count": 1
        }
      ],
      "effects": [
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:upgrade_altar"
      ]
    })
    //water
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
          "item": "mysticalagriculture:water_agglomeratio"
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
          "item": "mysticalagriculture:water_seeds",
          "count": 1
        }
      ],
      "effects": [
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:upgrade_altar"
      ]
    })
    //earth
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
          "item": "mysticalagriculture:earth_agglomeratio"
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
          "item": "mysticalagriculture:earth_seeds",
          "count": 1
        }
      ],
      "effects": [
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:upgrade_altar"
      ]
    })  
})