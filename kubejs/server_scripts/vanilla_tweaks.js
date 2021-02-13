onEvent('recipes', event => {

  event.remove({id: 'minecraft:blast_furnace'})
  event.shaped('minecraft:blast_furnace', [
    'SSS',
    'SFS',
    'BBB'
  ], {
    S: 'mekanism:ingot_steel',
    F: 'minecraft:furnace',
    B: 'immersiveengineering:blastbrick'
  })

  event.remove({id: 'mekanism:processing/netherite/scrap_to_dust'})
  event.remove({id: 'minecraft:netherite_ingot'})
  event.recipes.thermal.smelter('minecraft:netherite_ingot', [Item.of('silentgear:crimson_steel_ingot', 4), Item.of('minecraft:netherite_scrap', 4), Item.of('thermal:signalum_ingot', 4)])

  event.remove({id: 'minecraft:flint_and_steel'})
  event.shapeless('minecraft:flint_and_steel', ['mekanism:ingot_steel', 'minecraft:flint'])
  event.shapeless('minecraft:chest', ['#forge:chests/wooden'])


  // -----------------------------------
  // NETHERITE ARMOR CRAFTABLE FROM DIAMOND ARMOR
  // -----------------------------------

  event.shapeless('minecraft:netherite_helmet', ['minecraft:diamond_helmet', 'minecraft:netherite_ingot'])
  event.shapeless('minecraft:netherite_chestplate', ['minecraft:diamond_chestplate', 'minecraft:netherite_ingot'])
  event.shapeless('minecraft:netherite_leggings', ['minecraft:diamond_leggings', 'minecraft:netherite_ingot'])
  event.shapeless('minecraft:netherite_boots', ['minecraft:diamond_boots', 'minecraft:netherite_ingot'])


  // ---------------------------------------------------
  // DIAMOND ARMOR FROM ENRICHED DIAMOND AND STEEL ARMOR
  // ----------------------------------------------------

  event.remove({id: 'minecraft:diamond_helmet'})
  event.shaped('minecraft:diamond_helmet', [
    'DDD',
    'DSD',
    '   '
  ], {
    D: 'mekanism:enriched_diamond',
    S: 'mekanismtools:steel_helmet'
  })

  event.remove({id: 'minecraft:diamond_chestplate'})
  event.shaped('minecraft:diamond_chestplate', [
    'DSD',
    'DDD',
    'DDD'
  ], {
    D: 'mekanism:enriched_diamond',
    S: 'mekanismtools:steel_chestplate'
  })

  event.remove({id: 'minecraft:diamond_leggings'})
  event.shaped('minecraft:diamond_leggings', [
    'DDD',
    'DSD',
    'D D'
  ], {
    D: 'mekanism:enriched_diamond',
    S: 'mekanismtools:steel_leggings'
  })

  event.remove({id: 'minecraft:diamond_boots'})
  event.shaped('minecraft:diamond_boots', [
    'DSD',
    'D D',
    '   '
  ], {
    D: 'mekanism:enriched_diamond',
    S: 'mekanismtools:steel_boots'
  })


  // ---------------------------------------------------
  // IRON ARMOR FROM IRON PLATE AND CHAIN ARMOR
  // ----------------------------------------------------

  event.remove({id: 'minecraft:iron_helmet'})
  event.shaped('minecraft:iron_helmet', [
    'III',
    'ICI',
    '   '
  ], {
    I: 'thermal:iron_plate',
    C: 'minecraft:chainmail_helmet'
  })

  event.remove({id: 'minecraft:iron_chestplate'})
  event.shaped('minecraft:iron_chestplate', [
    'ICI',
    'III',
    'III'
  ], {
    I: 'thermal:iron_plate',
    C: 'minecraft:chainmail_chestplate'
  })

  event.remove({id: 'minecraft:iron_leggings'})
  event.shaped('minecraft:iron_leggings', [
    'III',
    'ICI',
    'I I'
  ], {
    I: 'thermal:iron_plate',
    C: 'minecraft:chainmail_leggings'
  })

  event.remove({id: 'minecraft:iron_boots'})
  event.shaped('minecraft:iron_boots', [
    'ICI',
    'I I',
    '   '
  ], {
    I: 'thermal:iron_plate',
    C: 'minecraft:chainmail_boots'
  })

  
  // ---------------------------------------------------
  // CHAINMAIL ARMOR FROM CHAINS AND LEATHER ARMOR
  // ----------------------------------------------------

  event.remove({id: 'iceandfire:chainmail_helmet'})
  event.shaped('minecraft:chainmail_helmet', [
    'CCC',
    'CLC',
    '   '
  ], {
    C: 'minecraft:chain',
    L: 'minecraft:leather_helmet'
  })

  event.remove({id: 'iceandfire:chainmail_chestplate'})
  event.shaped('minecraft:chainmail_chestplate', [
    'CLC',
    'CCC',
    'CCC'
  ], {
    C: 'minecraft:chain',
    L: 'minecraft:leather_chestplate'
  })

  event.remove({id: 'iceandfire:chainmail_leggings'})
  event.shaped('minecraft:chainmail_leggings', [
    'CCC',
    'CLC',
    'C C'
  ], {
    C: 'minecraft:chain',
    L: 'minecraft:leather_leggings'
  })

  event.remove({id: 'iceandfire:chainmail_boots'})
  event.shaped('minecraft:chainmail_boots', [
    'CLC',
    'C C',
    '   '
  ], {
    C: 'minecraft:chain',
    L: 'minecraft:leather_boots'
  })
})