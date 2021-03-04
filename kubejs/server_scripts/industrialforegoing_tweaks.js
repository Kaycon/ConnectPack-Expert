onEvent('recipes', event => {

// -----------------------------------
// BASE CRAFTING MATERIALS
// -----------------------------------

event.remove({id:'industrialforegoing:dissolution_chamber/pink_slime_ingot'})
event.custom({
  "input": [
    {
      "tag": "forge:ingots/steel"
    },
    {
      "tag": "forge:ingots/steel"
    },
    {
      "tag": "forge:ingots/steel"
    },
    {
      "tag": "forge:ingots/gold"
    },
    {
      "tag": "forge:ingots/gold"
    },
    {
      "tag": "forge:ingots/gold"
    },
    {
      "item": "minecraft:shulker_shell"
    },
    {
      "item": "minecraft:shulker_shell"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:1000}",
  "processingTime": 300,
  "output": {
    "item": "industrialforegoing:pink_slime_ingot",
    "count": 2
  },
  "type": "industrialforegoing:dissolution_chamber"
})


// -----------------------------------
// MACHINE FRAMES
// -----------------------------------

event.remove({id: 'industrialforegoing:machine_frame_pity'})
event.shaped('industrialforegoing:machine_frame_pity', [
  'LCL',
  'EFE',
  'LCL'
], {
  L: '#minecraft:logs',
  F: 'thermal:machine_frame',
  C: 'thermal:bronze_gear',
  E: 'thermal:electrum_gear'
})

event.remove({id:'industrialforegoing:dissolution_chamber/simple_machine_frame'})
event.custom({
  "input": [
    {
      "tag": "forge:plastic"
    },
    {
      "tag": "industrialforegoing:machine_frame/pity"
    },
    {
      "tag": "forge:plastic"
    },
    {
      "item": "thermal:lumium_gear"
    },
    {
      "item": "thermal:lumium_gear"
    },
    {
      "item": "thermal:enderium_plate"
    },
    {
      "tag": "forge:gears/gold"
    },
    {
      "item": "thermal:enderium_plate"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 300,
  "output": {
    "item": "industrialforegoing:machine_frame_simple",
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/advanced_machine_frame'})
event.custom({
  "input": [
    {
      "tag": "forge:plastic"
    },
    {
      "item": "refinedstorage:machine_casing"
    },
    {
      "tag": "forge:plastic"
    },
    {
      "item": "minecraft:netherite_ingot"
    },
    {
      "item": "minecraft:netherite_ingot"
    },
    {
      "item": "industrialforegoing:pink_slime_ingot"
    },
    {
      "tag": "forge:gears/diamond"
    },
    {
      "item": "industrialforegoing:pink_slime_ingot"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:500}",
  "processingTime": 300,
  "output": {
    "item": "industrialforegoing:machine_frame_advanced",
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/supreme_machine_frame'})
event.custom({
  "input": [
    {
      "item": "mekanism:ultimate_control_circuit"
    },
    {
      "item": "extradisks:advanced_machine_casing"
    },
    {
      "item": "mekanism:ultimate_control_circuit"
    },
    {
      "item": "mekanism:pellet_antimatter"
    },
    {
      "item": "mekanism:pellet_antimatter"
    },
    {
      "item": "mekanism:ultimate_control_circuit"
    },
    {
      "item": "mekanism:ultimate_induction_cell"
    },
    {
      "item": "mekanism:ultimate_control_circuit"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:8000}",
  "processingTime": 3000,
  "output": {
    "item": "industrialforegoing:machine_frame_supreme",
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})


// -----------------------------------
// ADDONS
// -----------------------------------

event.remove({id:'industrialforegoing:dissolution_chamber/range_addon0'})
event.custom({
  "input": [
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:cobblestone"
    },
    {
      "item": "minecraft:cobblestone"
    },
    {
      "item": "minecraft:cobblestone"
    },
    {
      "item": "minecraft:cobblestone"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:range_addon0",
    "count": 1,
    "nbt": "{TitaniumAugment:{Range:0.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/range_addon1'})
event.custom({
  "input": [
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:lapis_lazuli"
    },
    {
      "item": "minecraft:lapis_lazuli"
    },
    {
      "item": "minecraft:lapis_lazuli"
    },
    {
      "item": "minecraft:lapis_lazuli"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:range_addon1",
    "count": 1,
    "nbt": "{TitaniumAugment:{Range:1.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/range_addon2'})
event.custom({
  "input": [
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:iron_ingot"
    },
    {
      "item": "minecraft:iron_ingot"
    },
    {
      "item": "minecraft:iron_ingot"
    },
    {
      "item": "minecraft:iron_ingot"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:range_addon2",
    "count": 1,
    "nbt": "{TitaniumAugment:{Range:2.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/range_addon3'})
event.custom({
  "input": [
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "mekanism:ingot_steel"
    },
    {
      "item": "mekanism:ingot_steel"
    },
    {
      "item": "mekanism:ingot_steel"
    },
    {
      "item": "mekanism:ingot_steel"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:range_addon3",
    "count": 1,
    "nbt": "{TitaniumAugment:{Range:3.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/range_addon4'})
event.custom({
  "input": [
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:blaze_rod"
    },
    {
      "item": "minecraft:blaze_rod"
    },
    {
      "item": "minecraft:blaze_rod"
    },
    {
      "item": "minecraft:blaze_rod"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:range_addon4",
    "count": 1,
    "nbt": "{TitaniumAugment:{Range:4.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/range_addon5'})
event.custom({
  "input": [
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "powah:steel_energized"
    },
    {
      "item": "powah:steel_energized"
    },
    {
      "item": "powah:steel_energized"
    },
    {
      "item": "powah:steel_energized"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:range_addon5",
    "count": 1,
    "nbt": "{TitaniumAugment:{Range:5.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/range_addon6'})
event.custom({
  "input": [
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "silentgear:crimson_steel_ingot"
    },
    {
      "item": "silentgear:crimson_steel_ingot"
    },
    {
      "item": "silentgear:crimson_steel_ingot"
    },
    {
      "item": "silentgear:crimson_steel_ingot"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:range_addon6",
    "count": 1,
    "nbt": "{TitaniumAugment:{Range:6.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/range_addon7'})
event.custom({
  "input": [
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "industrialforegoing:pink_slime_ingot"
    },
    {
      "item": "industrialforegoing:pink_slime_ingot"
    },
    {
      "item": "industrialforegoing:pink_slime_ingot"
    },
    {
      "item": "industrialforegoing:pink_slime_ingot"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:range_addon7",
    "count": 1,
    "nbt": "{TitaniumAugment:{Range:7.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/range_addon8'})
event.custom({
  "input": [
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "mekanism:ingot_refined_obsidian"
    },
    {
      "item": "mekanism:ingot_refined_obsidian"
    },
    {
      "item": "mekanism:ingot_refined_obsidian"
    },
    {
      "item": "mekanism:ingot_refined_obsidian"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:range_addon8",
    "count": 1,
    "nbt": "{TitaniumAugment:{Range:8.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/range_addon9'})
event.custom({
  "input": [
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "powah:crystal_spirited"
    },
    {
      "item": "powah:crystal_spirited"
    },
    {
      "item": "powah:crystal_spirited"
    },
    {
      "item": "powah:crystal_spirited"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:range_addon9",
    "count": 1,
    "nbt": "{TitaniumAugment:{Range:9.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/range_addon10'})
event.custom({
  "input": [
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "extendedcrafting:crystaltine_ingot"
    },
    {
      "item": "extendedcrafting:crystaltine_ingot"
    },
    {
      "item": "extendedcrafting:crystaltine_ingot"
    },
    {
      "item": "extendedcrafting:crystaltine_ingot"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:range_addon10",
    "count": 1,
    "nbt": "{TitaniumAugment:{Range:10.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/range_addon11'})
event.custom({
  "input": [
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    {
      "item": "extendedcrafting:the_ultimate_ingot"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:range_addon11",
    "count": 1,
    "nbt": "{TitaniumAugment:{Range:11.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/efficiency_addon_1'})
event.custom({
  "input": [
    {
      "item": "mekanism:upgrade_energy"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "tag": "forge:gears/electrum"
    },
    {
      "tag": "forge:gears/electrum"
    },
    {
      "item": "minecraft:blaze_rod"
    },
    {
      "item": "minecraft:blaze_rod"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:efficiency_addon_1",
    "count": 1,
    "nbt": "{TitaniumAugment:{Efficiency:0.9f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/efficiency_addon_2'})
event.custom({
  "input": [
    {
      "item": "industrialforegoing:efficiency_addon_1"
    },
    {
      "item": "industrialforegoing:efficiency_addon_1"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "tag": "forge:gears/diamond"
    },
    {
      "tag": "forge:gears/diamond"
    },
    {
      "item": "minecraft:blaze_rod"
    },
    {
      "item": "minecraft:blaze_rod"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:1000}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:efficiency_addon_2",
    "count": 1,
    "nbt": "{TitaniumAugment:{Efficiency:0.8f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/speed_addon_1'})
event.custom({
  "input": [
    {
      "item": "mekanism:upgrade_speed"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "tag": "forge:gears/electrum"
    },
    {
      "tag": "forge:gears/electrum"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "minecraft:sugar"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:speed_addon_1",
    "count": 1,
    "nbt": "{TitaniumAugment:{Speed:2.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})

event.remove({id:'industrialforegoing:dissolution_chamber/speed_addon_2'})
event.custom({
  "input": [
    {
      "item": "industrialforegoing:speed_addon_1"
    },
    {
      "item": "industrialforegoing:speed_addon_1"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "item": "minecraft:glass_pane"
    },
    {
      "tag": "forge:gears/diamond"
    },
    {
      "tag": "forge:gears/diamond"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "minecraft:sugar"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:1000}",
  "processingTime": 200,
  "output": {
    "item": "industrialforegoing:speed_addon_2",
    "count": 1,
    "nbt": "{TitaniumAugment:{Speed:3.0f}}"
  },
  "type": "industrialforegoing:dissolution_chamber"
})


// -----------------------------------
// PITY PROCESSING MACHINES
// -----------------------------------

event.remove({id: 'industrialforegoing:fluid_extractor'})
event.shaped('industrialforegoing:fluid_extractor', [
  'TBT',
  'OFO',
  'CAC'
], {
  T: 'mekanism:ingot_tin',
  B: 'mekanism:basic_control_circuit',
  O: '#forge:cobblestone',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  A: 'minecraft:iron_axe'
})

event.remove({id: 'industrialforegoing:latex_processing_unit'})
event.shaped('industrialforegoing:latex_processing_unit', [
  'TBT',
  'WFL',
  'CEC'
], {
  T: 'mekanism:ingot_tin',
  B: 'mekanism:basic_control_circuit',
  W: 'minecraft:water_bucket',
  L: 'industrialforegoing:latex_bucket',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  E: 'mekanism:energized_smelter'
})

event.remove({id: 'industrialforegoing:animal_rancher'})
event.shaped('industrialforegoing:animal_rancher', [
  'TAT',
  'SFS',
  'CBC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  S: 'minecraft:shears',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  B: 'minecraft:bucket'
})

event.remove({id: 'industrialforegoing:plant_gatherer'})
event.shaped('industrialforegoing:plant_gatherer', [
  'TAT',
  'IFI',
  'CHC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  I: 'minecraft:iron_axe',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  H: 'minecraft:iron_hoe'
})

event.remove({id: 'industrialforegoing:plant_sower'})
event.shaped('industrialforegoing:plant_sower', [
  'TAT',
  'PFP',
  'CHC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  P: 'minecraft:piston',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  H: '#botanypots:hopper_botany_pots'
})

event.remove({id: 'industrialforegoing:animal_feeder'})
event.shaped('industrialforegoing:animal_feeder', [
  'TAT',
  'RFR',
  'COC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  R: 'minecraft:golden_carrot',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  O: 'minecraft:golden_apple'
})


event.remove({id: 'industrialforegoing:mob_slaughter_factory'})
event.shaped('industrialforegoing:mob_slaughter_factory', [
  'TAT',
  'SFS',
  'CXC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  S: 'minecraft:iron_sword',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  X: 'minecraft:iron_axe'
})

event.remove({id: 'industrialforegoing:sewer'})
event.shaped('industrialforegoing:sewer', [
  'TAT',
  'BFB',
  'CUC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  B: 'minecraft:brick',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  U: 'minecraft:bucket'
})


event.remove({id: 'industrialforegoing:sewage_composter'})
event.shaped('industrialforegoing:sewage_composter', [
  'TAT',
  'PFP',
  'CEC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  P: 'minecraft:piston',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  E: 'mekanism:energized_smelter'
})


event.remove({id: 'industrialforegoing:animal_baby_separator'})
event.shaped('industrialforegoing:animal_baby_separator', [
  'TAT',
  'WFW',
  'CGC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  W: 'minecraft:wheat',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  G: 'minecraft:golden_carrot'
})

event.remove({id: 'industrialforegoing:dissolution_chamber'})
event.shaped('industrialforegoing:dissolution_chamber', [
  'TAT',
  'HFH',
  'CBC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  H: '#forge:chests',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  B: 'minecraft:bucket'
})

event.remove({id: 'industrialforegoing:block_breaker'})
event.shaped('industrialforegoing:block_breaker', [
  'TAT',
  'PFA',
  'CSC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  P: 'minecraft:iron_pickaxe',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  A: 'minecraft:iron_axe',
  S: 'minecraft:iron_shovel'
})

event.remove({id: 'industrialforegoing:fluid_placer'})
event.shaped('industrialforegoing:fluid_placer', [
  'TAT',
  'WFW',
  'CWC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  W: 'minecraft:water_bucket',
  C: 'thermal:constantan_gear',
  F: 'industrialforegoing:machine_frame_pity'
})

event.remove({id: 'industrialforegoing:block_placer'})
event.shaped('industrialforegoing:block_placer', [
  'TAT',
  'DFD',
  'CDC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  D: 'minecraft:dispenser',
  C: 'thermal:constantan_gear',
  F: 'industrialforegoing:machine_frame_pity'
})

event.remove({id: 'industrialforegoing:resourceful_furnace'})
event.shaped('industrialforegoing:resourceful_furnace', [
  'TAT',
  'UFB',
  'CIC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  U: 'minecraft:furnace',
  F: 'industrialforegoing:machine_frame_pity',
  B: 'minecraft:bucket',
  C: 'thermal:constantan_gear',
  I: 'thermal:iron_gear'
})


event.remove({id: 'industrialforegoing:fluid_collector'})
event.shaped('industrialforegoing:fluid_collector', [
  'TAT',
  'BFB',
  'CBC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  B: 'minecraft:bucket'
})


event.remove({id: 'industrialforegoing:spores_recreator'})
event.shaped('industrialforegoing:spores_recreator', [
  'TAT',
  'MFM',
  'CMC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  M: '#forge:mushrooms',
  C: 'thermal:constantan_gear',
  F: 'industrialforegoing:machine_frame_pity'
})

event.remove({id: 'industrialforegoing:sludge_refiner'})
event.shaped('industrialforegoing:sludge_refiner', [
  'TAT',
  'BFU',
  'COC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  B: 'minecraft:bucket',
  F: 'industrialforegoing:machine_frame_pity',
  U: 'minecraft:furnace',
  C: 'thermal:constantan_gear',
  O: 'thermal:gold_gear'
})

event.remove({id: 'industrialforegoing:water_condensator'})
event.shaped('industrialforegoing:water_condensator', [
  'TAT',
  'PFP',
  'CWC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  P: 'minecraft:piston',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear',
  W: 'minecraft:water_bucket'
})

event.remove({id: 'industrialforegoing:dye_mixer'})
event.shaped('industrialforegoing:dye_mixer', [
  'TAT',
  'DFD',
  'CDC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  D: '#forge:dyes',
  F: 'industrialforegoing:machine_frame_pity',
  C: 'thermal:constantan_gear'
})


// -----------------------------------
// SIMPLE PROCESSING MACHINES
// -----------------------------------

event.remove({id: 'industrialforegoing:plant_fertilizer'})
event.shaped('industrialforegoing:plant_fertilizer', [
  'TAT',
  'LFL',
  'CGC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  L: 'minecraft:leather',
  F: 'industrialforegoing:machine_frame_simple',
  C: 'thermal:constantan_gear',
  G: 'minecraft:glass_bottle'
})


event.remove({id: 'industrialforegoing:mob_detector'})
event.shaped('industrialforegoing:mob_detector', [
  'TAT',
  'RFM',
  'COC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  R: 'minecraft:repeater',
  M: 'minecraft:comparator',
  F: 'industrialforegoing:machine_frame_simple',
  C: 'thermal:constantan_gear',
  O: 'minecraft:observer'
})

event.remove({id: 'industrialforegoing:marine_fisher'})
event.shaped('industrialforegoing:marine_fisher', [
  'TAT',
  'BFB',
  'CRC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  B: 'minecraft:bucket',
  F: 'industrialforegoing:machine_frame_simple',
  C: 'thermal:constantan_gear',
  R: 'minecraft:fishing_rod'
})

event.remove({id: 'industrialforegoing:stasis_chamber'})
event.shaped('industrialforegoing:stasis_chamber', [
  'TAT',
  'SFS',
  'CGC'
], {
  T: 'mekanism:ingot_tin',
  A: 'mekanism:advanced_control_circuit',
  S: 'minecraft:soul_sand',
  F: 'industrialforegoing:machine_frame_simple',
  C: 'thermal:constantan_gear',
  G: 'minecraft:ghast_tear'
})


// -----------------------------------
// ADVANCED PROCESSING MACHINES
// -----------------------------------

event.remove({id: 'industrialforegoing:mob_crusher'})
event.shaped('industrialforegoing:mob_crusher', [
  'TET',
  'RFR',
  'CNC'
], {
  T: 'mekanism:ingot_tin',
  E: 'mekanism:elite_control_circuit',
  R: 'darkutils:rune_damage_player',
  F: 'industrialforegoing:machine_frame_advanced',
  C: 'thermal:constantan_gear',
  N: 'minecraft:netherite_sword'
})

event.remove({id: 'industrialforegoing:enchantment_factory'})
event.shaped('industrialforegoing:enchantment_factory', [
  'TET',
  'BFB',
  'CDC'
], {
  T: 'mekanism:ingot_tin',
  E: 'mekanism:elite_control_circuit',
  B: 'minecraft:book',
  F: 'industrialforegoing:machine_frame_advanced',
  C: 'thermal:constantan_gear',
  D: 'thermal:diamond_gear'
})

event.remove({id: 'industrialforegoing:enchantment_sorter'})
event.shaped('industrialforegoing:enchantment_sorter', [
  'TET',
  'BFB',
  'CPC'
], {
  T: 'mekanism:ingot_tin',
  E: 'mekanism:elite_control_circuit',
  B: 'minecraft:book',
  F: 'industrialforegoing:machine_frame_advanced',
  C: 'thermal:constantan_gear',
  P: 'minecraft:ender_pearl'
})

event.remove({id: 'industrialforegoing:enchantment_applicator'})
event.shaped('industrialforegoing:enchantment_applicator', [
  'TET',
  'AFA',
  'CAC'
], {
  T: 'mekanism:ingot_tin',
  E: 'mekanism:elite_control_circuit',
  A: 'minecraft:anvil',
  F: 'industrialforegoing:machine_frame_advanced',
  C: 'thermal:constantan_gear'
})

event.remove({id: 'industrialforegoing:enchantment_extractor'})
event.shaped('industrialforegoing:enchantment_extractor', [
  'TET',
  'DFD',
  'CBC'
], {
  T: 'mekanism:ingot_tin',
  E: 'mekanism:elite_control_circuit',
  D: 'minecraft:diamond',
  F: 'industrialforegoing:machine_frame_advanced',
  B: 'minecraft:book',
  C: 'thermal:constantan_gear'
})

event.remove({id: 'industrialforegoing:material_stonework_factory'})
event.shaped('industrialforegoing:material_stonework_factory', [
  'TET',
  'RFU',
  'CPC'
], {
  T: 'mekanism:ingot_tin',
  E: 'mekanism:elite_control_circuit',
  R: 'minecraft:crafting_table',
  U: 'minecraft:furnace',
  F: 'industrialforegoing:machine_frame_advanced',
  P: 'industrialforegoing:pink_slime',
  C: 'thermal:constantan_gear'
})

event.remove({id: 'industrialforegoing:potion_brewer'})
event.shaped('industrialforegoing:potion_brewer', [
  'TET',
  'RFR',
  'CBC'
], {
  T: 'mekanism:ingot_tin',
  E: 'mekanism:elite_control_circuit',
  R: 'minecraft:repeater',
  F: 'industrialforegoing:machine_frame_advanced',
  B: 'minecraft:brewing_stand',
  C: 'thermal:constantan_gear'
})


// -----------------------------------
// LASER DRILL
// -----------------------------------

event.remove({id: 'industrialforegoing:ore_laser_base'})
event.shaped('industrialforegoing:ore_laser_base', [
  'TET',
  'NFN',
  'DLD'
], {
  T: 'mekanism:ingot_tin',
  E: 'mekanism:elite_control_circuit',
  N: 'minecraft:netherite_pickaxe',
  F: 'industrialforegoing:machine_frame_advanced',
  L: 'mekanism:logistical_sorter',
  D: 'thermal:diamond_gear'
})


event.remove({id: 'industrialforegoing:laser_drill'})
event.shaped('industrialforegoing:laser_drill', [
  'TET',
  'LFL',
  'DPD'
], {
  T: 'mekanism:ingot_tin',
  E: 'mekanism:elite_control_circuit',
  L: 'envirocore:laser_diode',
  F: 'industrialforegoing:machine_frame_advanced',
  P: 'mekanism:teleportation_core',
  D: 'thermal:diamond_gear'
})


event.remove({id: 'industrialforegoing:fluid_laser_base'})
event.shaped('industrialforegoing:fluid_laser_base', [
  'TET',
  'NFN',
  'DLD'
], {
  T: 'mekanism:ingot_tin',
  E: 'mekanism:elite_control_circuit',
  N: 'minecraft:netherite_pickaxe',
  F: 'industrialforegoing:machine_frame_advanced',
  L: 'minecraft:bucket',
  D: 'thermal:diamond_gear'
})

})