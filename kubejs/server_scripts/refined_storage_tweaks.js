onEvent('recipes', event => {
  
// -----------------------------------
// BASE CRAFTING MATERIALS
// -----------------------------------
  
event.remove({id: 'refinedstorage:quartz_enriched_iron'})
event.remove({id: 'thermal:machine/plugins/refinedstorage/smelter_refinedstorage_alloy_quartz_enriched_iron'})

event.recipes.thermal.smelter('refinedstorage:quartz_enriched_iron', [Item.of('mekanism:ingot_steel', 8), Item.of('minecraft:quartz', 4)])

event.remove({id: 'refinedstorage:machine_casing'})
event.shaped('refinedstorage:machine_casing', [
  'QQQ',
  'QFQ',
  'QQQ'
], {
  F: 'industrialforegoing:machine_frame_simple',
  Q: 'refinedstorage:quartz_enriched_iron',
})


event.remove({id: 'extradisks:advanced_machine_casing'})
event.shaped('extradisks:advanced_machine_casing', [
  'ACA',
  'IFI',
  'ADA'
], {
  A: 'refinedstorage:advanced_processor',
  C: 'refinedstorage:construction_core',
  I: 'refinedstorage:improved_processor',
  F: 'industrialforegoing:machine_frame_advanced',
  D: 'refinedstorage:destruction_core'
})

// -----------------------------------
// GRIDS, CONTROLLER, CRAFTER, DRIVE, CABLE
// -----------------------------------

event.remove({id: 'refinedstorage:controller'})
event.shaped('refinedstorage:controller', [
  'ELR',
  'TMT',
  'CAC'
], {
  E: 'botania:terrasteel_ingot',
  L: 'mekanism:elite_control_circuit',
  R: 'mekanism:ingot_refined_obsidian',
  T: 'mekanism:teleportation_core',
  M: 'extradisks:advanced_machine_casing',
  C: 'extendedcrafting:crystaltine_catalyst',
  A: 'refinedstorage:advanced_processor'
})

event.remove({id: 'refinedstorage:crafter'})
event.shaped('refinedstorage:crafter', [
  'CRD',
  'AMA',
  'DRC'
], {
  C: 'refinedstorage:construction_core',
  R: 'mekanism:robit',
  D: 'refinedstorage:destruction_core',
  A: 'refinedstorage:advanced_processor',
  M: 'refinedstorage:machine_casing'
})

event.remove({id: 'refinedstorage:disk_drive'})
event.shaped('refinedstorage:disk_drive', [
  'OEO',
  'QMQ',
  'QAQ'
], {
  O: 'ironchest:obsidian_chest',
  E: 'mekanism:elite_control_circuit',
  Q: 'refinedstorage:quartz_enriched_iron',
  M: 'refinedstorage:machine_casing',
  A: 'refinedstorage:advanced_processor'
})

event.remove({id: 'refinedstorage:grid'})
event.shaped('refinedstorage:grid', [
  'ICG',
  'QMG',
  'IDG'
], {
  I: 'refinedstorage:improved_processor',
  C: 'refinedstorage:construction_core',
  Q: 'refinedstorage:quartz_enriched_iron',
  M: 'refinedstorage:machine_casing',
  D: 'refinedstorage:destruction_core',
  G: '#forge:glass'
})

event.remove({id: 'refinedstorage:crafting_grid/crafting_grid'})
event.remove({id: 'refinedstorage:crafting_grid'})
event.shaped('refinedstorage:crafting_grid', [
  'GA ',
  'C  ',
  '   '
], {
  G: 'refinedstorage:grid',
  A: 'refinedstorage:advanced_processor',
  C: 'refinedstorage:crafter'
})

event.remove({id: 'refinedstorage:pattern_grid'})
event.remove({id: 'refinedstorage:pattern_grid/pattern_grid'})
event.shaped('refinedstorage:pattern_grid', [
  'GA ',
  'P  ',
  '   '
], {
  G: 'refinedstorage:grid',
  A: 'refinedstorage:advanced_processor',
  P: 'refinedstorage:pattern'
})

event.remove({id: 'refinedstorage:cable'})
event.shaped(Item.of('refinedstorage:cable', 8), [
  'QQQ',
  'GCG',
  'QQQ'
], {
  Q: 'refinedstorage:quartz_enriched_iron',
  G: '#forge:glass',
  C: 'mekanism:advanced_universal_cable'
})


// -----------------------------------
// STORAGE PARTS
// -----------------------------------

event.remove({id: 'refinedstorage:4k_storage_part'})
event.shaped('refinedstorage:4k_storage_part', [
  'PQP',
  'SAS',
  'PSP'
], {
  P: 'refinedstorage:basic_processor',
  Q: 'refinedstorage:quartz_enriched_iron',
  S: 'refinedstorage:1k_storage_part',
  A: 'mekanism:alloy_infused'
})

event.remove({id: 'refinedstorage:16k_storage_part'})
event.shaped('refinedstorage:16k_storage_part', [
  'PQP',
  'SAS',
  'PSP'
], {
  P: 'refinedstorage:improved_processor',
  Q: 'refinedstorage:quartz_enriched_iron',
  S: 'refinedstorage:4k_storage_part',
  A: 'mekanism:alloy_reinforced'
})

event.remove({id: 'refinedstorage:64k_storage_part'})
event.shaped('refinedstorage:64k_storage_part', [
  'PQP',
  'SAS',
  'PSP'
], {
  P: 'refinedstorage:advanced_processor',
  Q: 'refinedstorage:quartz_enriched_iron',
  S: 'refinedstorage:16k_storage_part',
  A: 'mekanism:alloy_atomic'
})

event.remove({id: 'extradisks:part/256k_storage_part'})
event.shaped('extradisks:256k_storage_part', [
  'PQP',
  'SAS',
  'PSP'
], {
  P: 'refinedstorage:advanced_processor',
  Q: 'refinedstorage:quartz_enriched_iron_block',
  S: 'refinedstorage:64k_storage_part',
  A: 'thermal:enderium_block'
})

event.remove({id: 'extradisks:part/1024k_storage_part'})
event.shaped('extradisks:1024k_storage_part', [
  'PQP',
  'SAS',
  'PSP'
], {
  P: 'refinedstorage:advanced_processor',
  Q: 'refinedstorage:quartz_enriched_iron_block',
  S: 'extradisks:256k_storage_part',
  A: 'mekanism:block_refined_obsidian'
})

event.remove({id: 'extradisks:part/4096k_storage_part'})
event.shaped('extradisks:4096k_storage_part', [
  'PQP',
  'SAS',
  'PSP'
], {
  P: 'refinedstorage:advanced_processor',
  Q: 'refinedstorage:quartz_enriched_iron_block',
  S: 'extradisks:1024k_storage_part',
  A: 'minecraft:netherite_block'
})

event.remove({id: 'extradisks:part/16384k_storage_part'})
event.shaped('extradisks:16384k_storage_part', [
  'PQP',
  'SAS',
  'PSP'
], {
  P: 'refinedstorage:advanced_processor',
  Q: 'refinedstorage:quartz_enriched_iron_block',
  S: 'extradisks:4096k_storage_part',
  A: 'extendedcrafting:ender_star'
})

event.remove({id: 'extradisks:part/65536k_storage_part'})
event.shaped('extradisks:65536k_storage_part', [
  'PQP',
  'SAS',
  'PSP'
], {
  P: 'refinedstorage:advanced_processor',
  Q: 'refinedstorage:quartz_enriched_iron_block',
  S: 'extradisks:16384k_storage_part',
  A: 'extendedcrafting:enhanced_ender_ingot_block'
})

event.remove({id: 'extradisks:part/262144k_storage_part'})
event.shaped('extradisks:262144k_storage_part', [
  'PEP',
  'SAS',
  'PSP'
], {
  P: 'refinedstorage:advanced_processor',
  E: 'extendedcrafting:ender_star_block',
  S: 'extradisks:65536k_storage_part',
  A: 'extendedcrafting:the_ultimate_block'
})

event.remove({id: 'extradisks:part/1048576k_storage_part'})
event.shaped('extradisks:1048576k_storage_part', [
  'EEE',
  'SAS',
  'ISI'
], {
  E: 'extendedcrafting:ender_star_block',
  S: 'extradisks:262144k_storage_part',
  A: 'extendedcrafting:the_ultimate_block',
  I: 'mysticalagradditions:insanium_ingot_block'
})

event.remove({id: 'extradisks:part/infinite_storage_part'})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    " FFFFF ",
    "FFSSSFF",
    "FSSSSSF",
    "FSSUSSF",
    "FSSSSSF",
    "FFSSSFF",
    " FFFFF "
  ],
  "key": {
    "U": {
      "item": "extendedcrafting:ultimate_singularity"
    },
    "S": {
      "item": "extradisks:1048576k_storage_part"
    },
    "F": {
      "item": "industrialforegoing:machine_frame_supreme"
    }
  },
  "result": {
    "item": "extradisks:infinite_storage_part"
  }
})

})