onEvent('recipes', event => {

  // Remove Mekanism Steel recipe
  event.remove({id: 'mekanism:processing/steel/enriched_iron_to_dust'})

  // Remove Mekanism Bronze recipe
  event.remove({id: 'mekanism:processing/bronze/dust/from_infusing'})
  event.remove({id: 'mekanism:processing/bronze/ingot/from_infusing'})


  // -----------------------------------
  // BASE CRAFTING MATERIALS
  // -----------------------------------

  event.remove({id: 'mekanism:processing/refined_obsidian/ingot/from_dust'})
  event.remove({id: 'jaopca:thermal_expansion.dust_to_material.refined_obsidian'})
  event.recipes.thermal.smelter('mekanism:ingot_refined_obsidian', ['mekanism:ingot_refined_glowstone', 'mekanism:dust_refined_obsidian', 'industrialforegoing:pink_slime_ingot'])

  event.remove({id: 'mekanism:metallurgic_infusing/alloy/infused'})
  event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_infused', 'mekanism:ingot_steel', 'mekanism:redstone', 10)
  
  event.remove({id: 'mekanism:teleportation_core'})
  event.shaped('mekanism:teleportation_core', [
    'EAE',
    'GWG',
    'NAN'
  ], {
    E: 'thermal:enderium_ingot',
    A: 'mekanism:alloy_atomic',
    G: 'minecraft:ghast_tear',
    W: 'waystones:warp_stone',
    N: 'minecraft:netherite_ingot'
  })


  // -----------------------------------
  // CONTROL CIRCUITS
  // -----------------------------------

  event.remove({id: 'mekanism:control_circuit/advanced'})
  event.shaped('mekanism:advanced_control_circuit', [
    'PCP',
    'ABA',
    'PCP'
  ], {
    P: 'industrialforegoing:plastic',
    C: 'silentgear:crimson_steel_ingot',
    A: 'mekanism:alloy_infused',
    B: 'mekanism:basic_control_circuit'
  })

  event.remove({id: 'mekanism:control_circuit/elite'})
  event.shaped('mekanism:elite_control_circuit', [
    'PNP',
    'RAR',
    'PNP'
  ], {
    P: 'industrialforegoing:plastic',
    N: 'minecraft:netherite_ingot',
    A: 'mekanism:advanced_control_circuit',
    R: 'mekanism:alloy_reinforced'
  })

  event.remove({id: 'mekanism:control_circuit/ultimate'})
  event.shaped('mekanism:ultimate_control_circuit', [
    'PUP',
    'AEA',
    'PUP'
  ], {
    P: 'industrialforegoing:plastic',
    U: 'extendedcrafting:the_ultimate_ingot',
    A: 'mekanism:alloy_atomic',
    E: 'mekanism:elite_control_circuit'
  })


  // -----------------------------------
  // UPGRADES
  // -----------------------------------

  event.remove({id: 'mekanism:upgrade/speed'})
  event.shaped('mekanism:upgrade_speed', [
    'PGP',
    'ASA',
    'PGP'
  ], {
    P: 'industrialforegoing:plastic',
    G: 'minecraft:glowstone',
    A: 'mekanism:alloy_atomic',
    S: 'minecraft:sugar'
  })

  event.remove({id: 'mekanism:upgrade/energy'})
  event.shaped('mekanism:upgrade_energy', [
    'PGP',
    'ARA',
    'PGP'
  ], {
    P: 'industrialforegoing:plastic',
    G: 'minecraft:glowstone',
    A: 'mekanism:alloy_atomic',
    R: 'minecraft:redstone'
  })


  // -----------------------------------
  // PROCESSING MACHINES
  // -----------------------------------

  event.remove({id: 'mekanism:metallurgic_infuser'})
  event.shaped('mekanism:metallurgic_infuser', [
    'RBR',
    'GCG',
    'RBR'
  ], {
    G: 'thermal:iron_gear',
    B: 'minecraft:blast_furnace',
    R: 'minecraft:redstone',
    C: 'mekanism:steel_casing'
  })

  event.remove({id: 'mekanism:enrichment_chamber'})
  event.shaped('mekanism:enrichment_chamber', [
    'IAI',
    'GCG',
    'IAI'
  ], {
    I: 'mekanism:alloy_infused',
    A: 'mekanism:advanced_control_circuit',
    G: 'thermal:lapis_gear',
    C: 'mekanism:steel_casing'
  })

  event.remove({id: 'mekanism:crusher'})
  event.shaped('mekanism:crusher', [
    'IAI',
    'GCG',
    'OAO'
  ], {
    I: 'mekanism:alloy_infused',
    A: 'mekanism:advanced_control_circuit',
    O: 'minecraft:obsidian',
    C: 'mekanism:steel_casing',
    G: 'thermal:diamond_gear',
  })

  event.remove({id: 'mekanism:digital_miner'})
  event.shaped('mekanism:digital_miner', [
    'AEA',
    'LRL',
    'TFT'
  ], {
    A: 'mekanism:alloy_atomic',
    E: 'mekanism:elite_control_circuit',
    L: 'mekanism:logistical_sorter',
    R: 'mekanism:robit',
    T: 'mekanism:teleportation_core',
    F: 'industrialforegoing:machine_frame_advanced'
  })

  event.remove({id: 'mekanism:quantum_entangloporter'})
  event.shaped('mekanism:quantum_entangloporter', [
    'AEA',
    'TFT',
    'AEA'
  ], {
    A: 'mekanism:alloy_atomic',
    E: 'mekanism:elite_control_circuit',
    T: 'mekanism:teleportation_core',
    F: 'industrialforegoing:machine_frame_advanced'
  })


  // -----------------------------------
  // TOOLS AND ARMOR
  // -----------------------------------

  event.remove({id: 'mekanism:jetpack'})
  event.shaped('mekanism:jetpack', [
    'SAS',
    'TCT',
    ' T '
  ], {
    S: 'mekanism:ingot_steel',
    A: 'mekanism:advanced_control_circuit',
    T: 'mekanism:ingot_tin',
    C: 'mekanism:basic_chemical_tank'
  })

  event.remove({id: 'mekanism:jetpack_armored'})
  event.shaped('mekanism:jetpack_armored', [
    'D D',
    'BNB',
    ' J '
  ], {
    D: '#forge:dusts/diamond',
    B: 'mekanism:ingot_bronze',
    N: 'minecraft:netherite_chestplate',
    J: 'mekanism:jetpack'
  })

  event.remove({id: 'mekanismtools:refined_obsidian/armor/helmet'})
  event.shaped('mekanismtools:refined_obsidian_helmet', [
    'RRR',
    'RNR',
    '   '
  ], {
    R: 'mekanism:ingot_refined_obsidian',
    N: 'minecraft:netherite_helmet'
  })

  event.remove({id: 'mekanismtools:refined_obsidian/armor/chestplate'})
  event.shaped('mekanismtools:refined_obsidian_chestplate', [
    'RNR',
    'RRR',
    'RRR'
  ], {
    R: 'mekanism:ingot_refined_obsidian',
    N: 'minecraft:netherite_chestplate'
  })

  event.remove({id: 'mekanismtools:refined_obsidian/armor/leggings'})
  event.shaped('mekanismtools:refined_obsidian_leggings', [
    'RRR',
    'RNR',
    'R R'
  ], {
    R: 'mekanism:ingot_refined_obsidian',
    N: 'minecraft:netherite_leggings'
  })

  event.remove({id: 'mekanismtools:refined_obsidian/armor/boots'})
  event.shaped('mekanismtools:refined_obsidian_boots', [
    'RNR',
    'R R',
    '   '
  ], {
    R: 'mekanism:ingot_refined_obsidian',
    N: 'minecraft:netherite_boots'
  })

  event.remove({id: 'mekanism:mekasuit_helmet'})
  event.shaped('mekanism:mekasuit_helmet', [
    'HUH',
    'HRH',
    'PSP'
  ], {
    H: 'mekanism:hdpe_sheet',
    U: 'mekanism:ultimate_control_circuit',
    R: 'mekanismtools:refined_obsidian_helmet',
    P: 'mekanism:pellet_polonium',
    S: 'industrialforegoing:machine_frame_supreme'
  })

  event.remove({id: 'mekanism:mekasuit_bodyarmor'})
  event.shaped('mekanism:mekasuit_bodyarmor', [
    'HUH',
    'HRH',
    'PSP'
  ], {
    H: 'mekanism:hdpe_sheet',
    U: 'mekanism:ultimate_control_circuit',
    R: 'mekanismtools:refined_obsidian_chestplate',
    P: 'mekanism:pellet_polonium',
    S: 'industrialforegoing:machine_frame_supreme'
  })

  event.remove({id: 'mekanism:mekasuit_pants'})
  event.shaped('mekanism:mekasuit_pants', [
    'HUH',
    'HRH',
    'PSP'
  ], {
    H: 'mekanism:hdpe_sheet',
    U: 'mekanism:ultimate_control_circuit',
    R: 'mekanismtools:refined_obsidian_leggings',
    P: 'mekanism:pellet_polonium',
    S: 'industrialforegoing:machine_frame_supreme'
  })

  event.remove({id: 'mekanism:mekasuit_boots'})
  event.shaped('mekanism:mekasuit_boots', [
    'HUH',
    'HRH',
    'PSP'
  ], {
    H: 'mekanism:hdpe_sheet',
    U: 'mekanism:ultimate_control_circuit',
    R: 'mekanismtools:refined_obsidian_boots',
    P: 'mekanism:pellet_polonium',
    S: 'industrialforegoing:machine_frame_supreme'
  })

  event.remove({id: 'mekanism:meka_tool'})
  event.shaped('mekanism:meka_tool', [
    'UCU',
    'HAH',
    'PSP'
  ], {
    U: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:configurator',
    H: 'mekanism:hdpe_sheet',
    A: 'mekanism:atomic_disassembler',
    P: 'mekanism:pellet_polonium',
    S: 'industrialforegoing:machine_frame_supreme'
  })


  // -----------------------------------
  // FUSION REACTOR
  // -----------------------------------

  event.remove({id: 'mekanismgenerators:reactor/controller'})
  event.shaped('mekanismgenerators:fusion_reactor_controller', [
    'FFF',
    'FSF',
    'FFF'
  ], {
    F: 'mekanismgenerators:fusion_reactor_frame',
    S: 'industrialforegoing:machine_frame_supreme'
  })

})