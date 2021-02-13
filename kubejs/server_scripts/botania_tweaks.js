onEvent('recipes', event => {

  //Manasteel Block
  event.remove({id:'botania:mana_infusion/manasteel'})
  event.custom({
    type: 'botania:mana_infusion',
    input: {
      tag: 'forge:ingots/steel'
    },
    output: {
      item: 'botania:manasteel_ingot'
    },
    mana: 3000
  })

  //Manasteel Block
  event.remove({id:'botania:mana_infusion/manasteel_block'})
  event.custom({
    type: 'botania:mana_infusion',
    input: {
      item: 'mekanism:block_steel'
    },
    output: {
      item: 'botania:manasteel_block'
    },
    mana: 27000
  })

  //Runic Altar
  event.remove({id: 'botania:runic_altar'})
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 1,
    "duration": 200,
    "starlight": 600,
    "pattern": [
      "B___B",
      "_LLL_",
      "_LDL_",
      "_PSU_",
      "B___B"
    ],
    "key": {
      "B": {
        "item": "bloodmagic:blankrune"
      },
      "L": {
        "item": "botania:livingrock"
      },
      "D": {
        "item": "botania:mana_diamond"
      },
      "P": {
        "item": "botania:mana_pearl"
      },
      "S": {
        "item": "botania:manasteel_ingot"
      },
      "U": {
        "item": "botania:mana_powder"
      }
    },
    "recipe_class": "astralsorcery:crystal_count",
    "output": [
      {
        "item": "botania:runic_altar",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })
})