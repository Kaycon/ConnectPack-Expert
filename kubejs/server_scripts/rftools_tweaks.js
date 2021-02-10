onEvent('recipes', event => {
  
  event.remove({id: 'rftoolsbase:machine_frame'})
  event.shaped('rftoolsbase:machine_frame', [
    'CBC',
    'GFG',
    'CBC'
  ], {
    C: 'extendedcrafting:crystaltine_ingot',
    B: 'minecraft:blue_dye',
    G: 'minecraft:gold_ingot',
    F: 'industrialforegoing:machine_frame_advanced'
  })
  
  event.remove({id: 'rftoolsdim:dimension_builder'})
  event.shaped('rftoolsdim:dimension_builder', [
    'EFE',
    'FSF',
    'EFE'
  ], {
    E: 'avaritia:endest_pearl',
    F: 'rftoolsbase:machine_frame',
    S: 'industrialforegoing:machine_frame_supreme'
  })
  
  event.remove({id: 'rftoolsbuilder:shape_card_quarry'})
  event.shaped('rftoolsbuilder:shape_card_quarry', [
    'RAR',
    'SHP',
    'RDR'
  ], {
    R: 'extendedcrafting:redstone_ingot',
    A: 'mysticalagriculture:supremium_axe',
    S: 'mysticalagriculture:supremium_shovel',
    H: 'rftoolsbuilder:shape_card_def',
    P: 'mysticalagriculture:supremium_pickaxe',
    D: 'mekanism:digital_miner'
  })
  
  event.remove({id: 'rftoolsbuilder:shape_card_quarry_fortune'})
  event.shaped('rftoolsbuilder:shape_card_quarry_fortune', [
    'DFD',
    'MHM',
    'DGD'
  ], {
    D: 'rftoolsbase:dimensionalshard',
    F: 'refinedstorage:fortune_3_upgrade',
    M: 'botania:mana_diamond_block',
    H: 'rftoolsbuilder:shape_card_quarry',
    G: 'minecraft:ghast_tear'
  })
  
  event.remove({id: 'rftoolsbuilder:shape_card_quarry_silk'})
  event.shaped('rftoolsbuilder:shape_card_quarry_silk', [
    'DSD',
    'MHM',
    'DND'
  ], {
    D: 'rftoolsbase:dimensionalshard',
    S: 'refinedstorage:silk_touch_upgrade',
    M: 'botania:mana_diamond_block',
    H: 'rftoolsbuilder:shape_card_quarry',
    N: 'minecraft:nether_star'
  })
})