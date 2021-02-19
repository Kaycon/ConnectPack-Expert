onEvent('recipes', event => {

  // -----------------------------------
  // TIER 6 SEEDS
  // -----------------------------------

  //Remove old Infuser recipes
  event.remove({id:'mysticalagriculture:nether_star_seeds_infusion'})
  event.remove({id:'mysticalagriculture:dragon_egg_seeds_infusion'})
  event.remove({id:'mysticalagriculture:nitro_crystal_seeds_infusion'})

  //Nether Star
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
        "item": "extendedcrafting:nether_star_block"
      },
      "D": {
        "item": "mysticalagradditions:insanium_block"
      },
      "E": {
        "item": "botania:rune_lust"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:nether_star_seeds",
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

  //Dragon Egg
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
        "item": "mysticalagradditions:dragon_egg_crux"
      },
      "D": {
        "item": "mysticalagradditions:insanium_block"
      },
      "E": {
        "item": "botania:rune_gluttony"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:dragon_egg_seeds",
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

  //Nitro Crystal
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
        "item": "powah:nitro_crystal_block"
      },
      "D": {
        "item": "mysticalagradditions:insanium_block"
      },
      "E": {
        "item": "botania:rune_greed"
      }
    },
    "output": [
      {
        "item": "mysticalagriculture:nitro_crystal_seeds",
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