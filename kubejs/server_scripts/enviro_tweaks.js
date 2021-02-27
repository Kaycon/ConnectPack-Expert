onEvent('recipes', event => {

  event.remove({id: 'envirocore:items/ct_diode'})
  event.shaped('envirocore:laser_diode', [
    'LLL',
    'LEL',
    'RRR'
  ], {
    L: 'thermal:lumium_glass',
    E: 'minecraft:redstone_block',
    R: 'mekanism:ingot_refined_glowstone'
  })

  event.remove({id: 'envirocore:blocks/components/laser_core'})
  event.shaped('envirocore:laser_core', [
    'OSO',
    'S S',
    'OSO'
  ], {
    S: 'mekanism:ingot_steel',
    O: 'envirocore:obsidian_plate'
  })
  event.remove({output: 'envirocore:obsidian_plate'})
  event.recipes.thermal.press(Item.of('envirocore:obsidian_plate', 8), ['minecraft:obsidian'])

  event.remove({id: 'envirocore:items/ct_litherite2'})
  event.remove({id: 'envirocore:items/ct_litherite4'})
  event.remove({id: 'envirocore:items/ct_litherite6'})
  event.remove({id: 'envirocore:items/ct_litherite8'})
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {"item": "extendedcrafting:crystaltine_ingot"},
    {"item": "extendedcrafting:crystaltine_ingot"},
    {"item": "cyclic:ender_eye_reuse"},
    {"item": "cyclic:ender_eye_reuse"},
    {"item": "thermal:enderium_ingot"},
    {"item": "thermal:enderium_ingot"}
    ],
    "energy": 500000,
    "result": {
    "item": "envirocore:litherite_crystal",
    "count": 1
    }
  })


  /////////////////////
  // STRUCTURE FRAMES
  /////////////////////

  event.remove({id: 'envirocore:blocks/frames/ct_litherite'})
  event.shaped('envirocore:litherite_frame', [
    ' I ',
    'ASA',
    ' M '
  ], {
    I: 'envirocore:litherite_interconnect',
    A: 'minecraft:lapis_lazuli',
    S: '#envirocore:structure/panels',
    M: 'minecraft:emerald'
  }) 

  event.remove({id: 'envirocore:blocks/frames/ct_erodium'})
  event.shaped('envirocore:erodium_frame', [
    ' I ',
    'ASA',
    ' M '
  ], {
    I: 'envirocore:erodium_interconnect',
    A: 'minecraft:emerald',
    S: 'envirocore:litherite_frame',
    M: 'industrialforegoing:pink_slime_ingot'
  }) 

  event.remove({id: 'envirocore:blocks/frames/ct_kyronite'})
  event.shaped('envirocore:kyronite_frame', [
    ' I ',
    'ASA',
    ' M '
  ], {
    I: 'envirocore:kyronite_interconnect',
    A: 'industrialforegoing:pink_slime_ingot',
    S: 'envirocore:erodium_frame',
    M: 'mysticalagriculture:imperium_ingot'
  }) 

  event.remove({id: 'envirocore:blocks/frames/ct_pladium'})
  event.shaped('envirocore:pladium_frame', [
    ' I ',
    'ASA',
    ' M '
  ], {
    I: 'envirocore:pladium_interconnect',
    A: 'mysticalagriculture:imperium_ingot',
    S: 'envirocore:kyronite_frame',
    M: 'mysticalagriculture:supremium_ingot'
  }) 

  event.remove({id: 'envirocore:blocks/frames/ct_ionite'})
  event.shaped('envirocore:ionite_frame', [
    ' I ',
    'ASA',
    ' M '
  ], {
    I: 'envirocore:ionite_interconnect',
    A: 'mysticalagriculture:supremium_ingot',
    S: 'envirocore:pladium_frame',
    M: 'minecraft:nether_star'
  }) 

  event.remove({id: 'envirocore:blocks/frames/ct_aethium'})
  event.shaped('envirocore:aethium_frame', [
    ' I ',
    'ASA',
    ' M '
  ], {
    I: 'envirocore:aethium_interconnect',
    A: 'minecraft:nether_star',
    S: 'envirocore:ionite_frame',
    M: 'extendedcrafting:the_ultimate_ingot'
  }) 

  event.remove({id: 'envirocore:blocks/frames/ct_nanorite'})
  event.shaped('envirocore:nanorite_frame', [
    ' I ',
    'ASA',
    ' M '
  ], {
    I: 'envirocore:nanorite_interconnect',
    A: 'extendedcrafting:the_ultimate_ingot',
    S: 'envirocore:aethium_frame',
    M: 'mekanism:ultimate_control_circuit'
  })

  event.remove({id: 'envirocore:blocks/frames/ct_xerothium'})
  event.shaped('envirocore:xerothium_frame', [
    'MIM',
    'MSM',
    'MMM'
  ], {
    I: 'envirocore:xerothium_interconnect',
    S: 'envirocore:nanorite_frame',
    M: 'mekanism:ultimate_control_circuit'
  })

  /////////////////////
  // VOID MINER
  /////////////////////

  event.remove({id: 'envirotech:block/void_miner/ct_litherite'})
  event.shaped('envirotech:litherite_void_miner_ccu', [
    'CPC',
    'CEC',
    'TLT'
  ], {
    C: 'envirocore:litherite',
    P: 'minecraft:netherite_pickaxe',
    E: 'envirocore:laser_diode',
    T: '#envirocore:structure/panels',
    L: 'envirocore:laser_core'
  }) 
  
  event.remove({id: 'envirotech:block/void_miner/ct_erodium'})
  event.shaped('envirotech:erodium_void_miner_ccu', [
    'CPC',
    'CVC',
    'CLC'
  ], {
    C: 'envirocore:erodium',
    P: 'mekanismtools:refined_obsidian_pickaxe',
    V: 'envirotech:litherite_void_miner_ccu',
    L: 'envirocore:laser_core'
  }) 
  
  event.remove({id: 'envirotech:block/void_miner/ct_kyronite'})
  event.shaped('envirotech:kyronite_void_miner_ccu', [
    'CPC',
    'CVC',
    'CLC'
  ], {
    C: 'envirocore:kyronite',
    P: 'mysticalagriculture:imperium_pickaxe',
    V: 'envirotech:erodium_void_miner_ccu',
    L: 'envirocore:laser_core'
  }) 
  
  event.remove({id: 'envirotech:block/void_miner/ct_pladium'})
  event.shaped('envirotech:pladium_void_miner_ccu', [
    'CPC',
    'CVC',
    'CLC'
  ], {
    C: 'envirocore:pladium',
    P: 'mysticalagriculture:supremium_pickaxe',
    V: 'envirotech:kyronite_void_miner_ccu',
    L: 'envirocore:laser_core'
  }) 
  
  event.remove({id: 'envirotech:block/void_miner/ct_ionite'})
  event.shaped('envirotech:ionite_void_miner_ccu', [
    'CSC',
    'CVC',
    'CLC'
  ], {
    C: 'envirocore:ionite',
    S: 'minecraft:nether_star',
    V: 'envirotech:pladium_void_miner_ccu',
    L: 'envirocore:laser_core'
  }) 
  
  event.remove({id: 'envirotech:block/void_miner/ct_aethium'})
  event.shaped('envirotech:aethium_void_miner_ccu', [
    'CSC',
    'CVC',
    'CLC'
  ], {
    C: 'envirocore:aethium',
    S: 'mekanism:ultimate_control_circuit',
    V: 'envirotech:ionite_void_miner_ccu',
    L: 'envirocore:laser_core'
  }) 
  
  event.remove({id: 'envirotech:block/void_miner/ct_nanorite'})
  event.shaped('envirotech:nanorite_void_miner_ccu', [
    'CSC',
    'CVC',
    'CLC'
  ], {
    C: 'envirocore:nanorite',
    S: 'industrialforegoing:machine_frame_supreme',
    V: 'envirotech:aethium_void_miner_ccu',
    L: 'envirocore:laser_core'
  })
  
  event.remove({id: 'envirotech:block/void_miner/ct_xerothium'})
  event.shaped('envirotech:xerothium_void_miner_ccu', [
    'CSC',
    'CVC',
    'CLC'
  ], {
    C: 'envirocore:xerothium',
    S: 'mekanism:meka_tool',
    V: 'envirotech:nanorite_void_miner_ccu',
    L: 'envirocore:laser_core'
  })
})