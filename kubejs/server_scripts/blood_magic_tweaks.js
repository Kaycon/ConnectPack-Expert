onEvent('recipes', event => {
  
  event.remove({id: 'bloodmagic:blood_rune_blank'})
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "asa",
      "aoa",
      "aaa"
    ],
    "key": {
      "a": {
        "item": "botania:livingrock"
      },
      "s": {
        "item": "bloodmagic:blankslate"
      },
      "o": {
        "type": "bloodmagic:bloodorb",
        "orb_tier": 1
      }
    },
    "result": {
      "item": "bloodmagic:blankrune"
    }
  })

  event.remove({id: 'bloodmagic:altar/slate'})
  event.custom({
  "type": "bloodmagic:altar",
  "input": {
    "item": "botania:livingrock"
  },
  "output": {
    "item": "bloodmagic:blankslate"
  },
  "upgradeLevel": 0,
  "altarSyphon": 1000,
  "consumptionRate": 5,
  "drainRate": 5
})

  event.remove({id: 'bloodmagic:alchemy_table'})
  event.shaped('bloodmagic:alchemytable', [
    'BBB',
    'LCL',
    'GSG'
  ], {
    B: 'bloodmagic:blankrune',
    L: 'botania:livingwood',
    C: 'botania:alchemy_catalyst',
    G: 'minecraft:gold_ingot',
    S: 'bloodmagic:blankslate'
  }) 


  event.remove({id: 'bloodmagic:blood_altar'})
  event.custom({
    "type": "astralsorcery:altar",
    "altar_type": 1,
    "duration": 200,
    "starlight": 600,
    "pattern": [
      "R___R",
      "_LLL_",
      "_LTL_",
      "_GGG_",
      "R___R"
    ],
    "key": {
      "R": {
        "item": "minecraft:redstone"
      },
      "L": {
        "item": "botania:livingrock"
      },
      "T": {
        "item": "mekanism:basic_fluid_tank"
      },
      "G": {
        "item": "minecraft:gold_ingot"
      }
    },
    "recipe_class": "astralsorcery:crystal_count",
    "output": [
      {
        "item": "bloodmagic:altar",
        "count": 1
      }
    ],
    "effects": [
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  event.remove({id: 'bloodmagic:blood_rune_speed'})
  event.shaped('bloodmagic:speedrune', [
    'BSB',
    'SRS',
    'BSB'
  ], {
    B: 'bloodmagic:blankrune',
    S: 'bloodmagic:blankslate',
    R: 'botania:rune_greed'
  }) 

  event.remove({id: 'bloodmagic:blood_rune_sacrifice'})
  event.shaped('bloodmagic:sacrificerune', [
    'BSB',
    'SRS',
    'BSB'
  ], {
    B: 'bloodmagic:blankrune',
    S: 'bloodmagic:reinforcedslate',
    R: 'botania:rune_wrath'
  }) 

  event.remove({id: 'bloodmagic:blood_rune_self_sacrifice'})
  event.shaped('bloodmagic:selfsacrificerune', [
    'BSB',
    'SRS',
    'BSB'
  ], {
    B: 'bloodmagic:blankrune',
    S: 'bloodmagic:reinforcedslate',
    R: 'botania:rune_lust'
  }) 

  event.remove({id: 'bloodmagic:blood_rune_displacement'})
  event.shaped('bloodmagic:dislocationrune', [
    'BSB',
    'SRS',
    'BSB'
  ], {
    B: 'bloodmagic:blankrune',
    S: 'bloodmagic:infusedslate',
    R: 'botania:rune_sloth'
  }) 

  event.remove({id: 'bloodmagic:blood_rune_capacity'})
  event.shaped('bloodmagic:altarcapacityrune', [
    'BSB',
    'SRS',
    'BSB'
  ], {
    B: 'bloodmagic:blankrune',
    S: 'bloodmagic:infusedslate',
    R: 'botania:rune_gluttony'
  }) 

  event.remove({id: 'bloodmagic:blood_rune_aug_capacity'})
  event.shaped('bloodmagic:bettercapacityrune', [
    'BSB',
    'SRS',
    'BSB'
  ], {
    B: 'bloodmagic:blankrune',
    S: 'bloodmagic:demonslate',
    R: 'botania:rune_gluttony'
  }) 

  event.remove({id: 'bloodmagic:blood_rune_acceleration'})
  event.shaped('bloodmagic:accelerationrune', [
    'BSB',
    'SRS',
    'BSB'
  ], {
    B: 'bloodmagic:speedrune',
    S: 'bloodmagic:demonslate',
    R: 'botania:rune_pride'
  }) 

  event.remove({id: 'bloodmagic:blood_rune_charging'})
  event.shaped('bloodmagic:chargingrune', [
    'BSB',
    'SRS',
    'BSB'
  ], {
    B: 'bloodmagic:blankrune',
    S: 'bloodmagic:demonslate',
    R: 'botania:rune_wrath'
  }) 

  event.remove({id: 'bloodmagic:altar/apprenticebloodorb'})
  event.custom({
    "type": "bloodmagic:altar",
    "input": {
      "item": "botania:manasteel_ingot"
    },
    "output": {
      "item": "bloodmagic:apprenticebloodorb"
    },
    "upgradeLevel": 1,
    "altarSyphon": 5000,
    "consumptionRate": 5,
    "drainRate": 5
  })

  event.remove({id: 'bloodmagic:altar/magicianbloodorb'})
  event.custom({
    "type": "bloodmagic:altar",
    "input": {
      "item": "minecraft:netherite_ingot"
    },
    "output": {
      "item": "bloodmagic:magicianbloodorb"
    },
    "upgradeLevel": 2,
    "altarSyphon": 25000,
    "consumptionRate": 20,
    "drainRate": 20
  })



})