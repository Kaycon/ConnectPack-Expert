onEvent('recipes', event => {
  
  event.remove({id: 'mysticalagriculture:infusion_altar'})
  event.remove({id: 'mysticalagriculture:infusion_pedestal'})
  event.remove({id: 'mysticalagriculture:master_infusion_crystal'})

  event.remove({id: 'mysticalagriculture:prosperity_ingot'})
  event.shaped('mysticalagriculture:prosperity_ingot', [
    ' P ',
    'PSP',
    ' P '
  ], {
    P: 'mysticalagriculture:prosperity_shard',
    S: 'mekanism:ingot_steel'
  })

  event.remove({id: 'mysticalagriculture:prosperity_gemstone'})
  event.shaped('mysticalagriculture:prosperity_gemstone', [
    ' P ',
    'PDP',
    ' P '
  ], {
    P: 'mysticalagriculture:prosperity_shard',
    D: 'botania:mana_diamond'
  })

  //Nether Star
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 4000,
    "pattern": [
      "BAFAB",
      "ADCDA",
      "FCECF",
      "ADCDA",
      "BAFAB"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:resonating_gem"
      },
      "B": {
        "item": "bloodmagic:demonslate"
      },
      "C": {
        "item": "botania:rune_greed"
      },
      "D": {
        "item": "mysticalagriculture:supremium_gemstone_block"
      },
      "E": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "F": {
        "item": "minecraft:nether_star"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:master_infusion_crystal",
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