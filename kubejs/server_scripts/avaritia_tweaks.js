onEvent('recipes', event => {

  //Endest pearl
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "   E   ",
      "  ERE  ",
      " ERRRE ",
      "ERRSRRE",
      " ERRRE ",
      "  ERE  ",
      "   E   "
    ],
    "key": {
      "E": {
        "item": "cyclic:ender_eye_reuse"
      },
      "S": {
        "item": "extendedcrafting:ender_star_block"
      },
      "R": {
        "item": "extendedcrafting:redstone_ingot_block"
      }
    },
    "result": {
      "item": "avaritia:endest_pearl"
    }
  })

  //Infinity Catalyst
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      " SSSSS ",
      "LLCCCLL",
      "PCGGGCP",
      "PCGGGCP",
      "PCGGGCP",
      "WWCCCWW",
      " SSSSS "
    ],
    "key": {
      "S": {
        "item": "bloodmagic:demonslate"
      },
      "L": {
        "item": "botania:rune_greed"
      },
      "C": {
        "item": "astralsorcery:attuned_celestial_crystal"
      },
      "P": {
        "item": "botania:rune_pride"
      },
      "G": {
        "item": "botania:gaia_ingot"
      },
      "W": {
        "item": "botania:rune_wrath"
      }
    },
    "result": {
      "item": "avaritia:infinity_catalyst"
    }
  })

  //Ultimate Stew
  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "ingredients": [
      {
        "item": "minecraft:apple"
      },
      {
        "item": "minecraft:mushroom_stew"
      },
      {
        "item": "minecraft:bread"
      },
      {
        "item": "minecraft:golden_apple"
      },
      {
        "item": "minecraft:enchanted_golden_apple"
      },
      {
        "item": "minecraft:melon_slice"
      },
      {
        "item": "minecraft:kelp"
      },
      {
        "item": "minecraft:carrot"
      },
      {
        "item": "minecraft:potato"
      },
      {
        "item": "minecraft:golden_carrot"
      },
      {
        "item": "minecraft:pumpkin_pie"
      },
      {
        "item": "minecraft:beetroot"
      },
      {
        "item": "quark:root_item"
      },
      {
        "item": "iceandfire:cannoli"
      },
      {
        "item": "thermal:corn"
      },
      {
        "item": "thermal:onion"
      },
      {
        "item": "thermal:radish"
      },
      {
        "item": "thermal:spinach"
      },
      {
        "item": "thermal:bell_pepper"
      },
      {
        "item": "thermal:eggplant"
      },
      {
        "item": "thermal:green_bean"
      },
      {
        "item": "thermal:peanut"
      },
      {
        "item": "thermal:tomato"
      },
      {
        "item": "thermal:frost_melon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:porkchop"
      },
      {
        "item": "minecraft:beef"
      },
      {
        "item": "minecraft:spider_eye"
      },
      {
        "item": "minecraft:rabbit"
      },
      {
        "item": "minecraft:mutton"
      },
      {
        "item": "quark:frog_leg"
      },
      {
        "item": "quark:crab_leg"
      },
      {
        "item": "iceandfire:fire_dragon_flesh"
      },
      {
        "item": "iceandfire:ice_dragon_flesh"
      },
      {
        "item": "iceandfire:lightning_dragon_flesh"
      },
      {
        "item": "aquaculture:fish_fillet_raw"
      },
      {
        "item": "industrialforegoing:meat_bucket"
      },
      {
        "item": "aquaculture:frog_legs_raw"
      },
      {
        "item": "aquaculture:turtle_soup"
      }
    ],
    "result": {
      "item": "avaritia:ultimate_stew"
    }
  })


  event.recipes.thermal.press('avaritia:neutronium_ingot', [Item.of('mekanism:pellet_antimatter', 64)])

  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {"item": "extendedcrafting:the_ultimate_block"},
    {"item": "extendedcrafting:ultimate_singularity"},
    {"item": "avaritia:ultimate_stew"},
    {"item": "avaritia:infinity_catalyst"},
    {"item": "avaritia:endest_pearl"},
    {"item": "avaritia:neutronium_block"},
    ],
    "energy": 100000000,
    "result": {
    "item": "avaritia:infinity_ingot",
    "count": 1
    }
  })


  ///////////////////////
  // INFINITY EQUIPMENT
  ///////////////////////
  
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "IIIIIIIII",
      "IIIIIIIII",
      "II     II",
      "II  M  II",
      "II     II",
      "         ",
      "         ",
      "         ",
      "         "
    ],
    "key": {
      "I": {
        "item": "avaritia:infinity_ingot"
      },
      "M": {
        "item": "mekanism:mekasuit_helmet"
      }
    },
    "result": {
      "item": "avaritia:infinity_armor_helmet"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "         ",
      "II     II",
      "II  M  II",
      "II     II",
      "IIIIIIIII",
      "IIIIIIIII",
      "IIIIIIIII",
      "IIIIIIIII"
    ],
    "key": {
      "I": {
        "item": "avaritia:infinity_ingot"
      },
      "M": {
        "item": "mekanism:mekasuit_bodyarmor"
      }
    },
    "result": {
      "item": "avaritia:infinity_armor_chestplate"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "IIIIIIIII",
      "IIIIIIIII",
      "II     II",
      "II  M  II",
      "II     II",
      "II     II",
      "II     II",
      "         ",
      "         "
    ],
    "key": {
      "I": {
        "item": "avaritia:infinity_ingot"
      },
      "M": {
        "item": "mekanism:mekasuit_pants"
      }
    },
    "result": {
      "item": "avaritia:infinity_armor_leggings"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "         ",
      "         ",
      "         ",
      "         ",
      "II  M  II",
      "II     II",
      "II     II",
      "II     II"
    ],
    "key": {
      "I": {
        "item": "avaritia:infinity_ingot"
      },
      "M": {
        "item": "mekanism:mekasuit_boots"
      }
    },
    "result": {
      "item": "avaritia:infinity_armor_boots"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "       II",
      "      III",
      "     III ",
      " II III  ",
      " IIIII   ",
      "  III    ",
      " IIIII   ",
      "III II   ",
      "II       "
    ],
    "key": {
      "I": {
        "item": "avaritia:infinity_ingot"
      }
    },
    "result": {
      "item": "avaritia:swordofthe_cosmos"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
      "pattern": [
        "  IIII   ",
        "  IIII   ",
        "  IIII   ",
        "   II    ",
        "   II    ",
        "   II    ",
        "   II    ",
        "   II    ",
        "   II    "
    ],
    "key": {
      "I": {
        "item": "avaritia:infinity_ingot"
      }
    },
    "result": {
      "item": "avaritia:planet_eater"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
      "pattern": [
        " IIIIII  ",
        "IIIIIIII ",
        "II II II ",
        "   II    ",
        "   II    ",
        "   II    ",
        "   II    ",
        "   II    ",
        "   II    "
    ],
    "key": {
      "I": {
        "item": "avaritia:infinity_ingot"
      }
    },
    "result": {
      "item": "avaritia:world_breaker"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
      "pattern": [
        " IIII    ",
        "IIIII    ",
        "II II    ",
        "   II    ",
        "   II    ",
        "   II    ",
        "   II    ",
        "   II    ",
        "   II    "
    ],
    "key": {
      "I": {
        "item": "avaritia:infinity_ingot"
      }
    },
    "result": {
      "item": "avaritia:hoeofthe_green_earth"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
      "pattern": [
        " IIII    ",
        "IIIII    ",
        "IIIII    ",
        " IIII    ",
        "   II    ",
        "   II    ",
        "   II    ",
        "   II    ",
        "   II    "
    ],
    "key": {
      "I": {
        "item": "avaritia:infinity_ingot"
      }
    },
    "result": {
      "item": "avaritia:natures_ruin"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
      "pattern": [
        "   II    ",
        "  IIS    ",
        " II S    ",
        "II  S    ",
        "II  S    ",
        "II  S    ",
        " II S    ",
        "  IIS    ",
        "   II    "
    ],
    "key": {
      "I": {
        "item": "avaritia:infinity_ingot"
      },
      "S": {
        "item": "botania:mana_string"
      }
    },
    "result": {
      "item": "avaritia:longbowofthe_heavens"
    }
  })

})