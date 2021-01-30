onEvent('recipes', event => {

event.remove({id: 'cyclic:user'})
event.shaped('cyclic:user', [
  'ORO',
  'DAD',
  'TRT'
], {
  O: 'minecraft:obsidian',
  R: 'minecraft:repeater',
  D: 'minecraft:dispenser',
  A: 'mekanism:advanced_control_circuit',
  T: 'minecraft:tripwire_hook',
  R: 'minecraft:repeater'
}) 

event.remove({id: 'cyclic:collector'})
event.shaped('cyclic:collector', [
  'OHO',
  'DAD',
  'HBH'
], {
  O: 'minecraft:obsidian',
  H: 'minecraft:hopper',
  D: 'minecraft:dispenser',
  A: 'mekanism:advanced_control_circuit',
  B: 'minecraft:barrel'
}) 

event.remove({id: 'cyclic:collector_fluid'})
event.shaped('cyclic:collector_fluid', [
  'LHL',
  'DAD',
  'HBH'
], {
  L: 'minecraft:lapis_block',
  H: 'minecraft:hopper',
  D: 'minecraft:dispenser',
  A: 'mekanism:advanced_control_circuit',
  B: 'minecraft:bucket'
}) 

event.remove({id: 'cyclic:anvil'})
event.shaped('cyclic:anvil', [
  'DDD',
  'EAE',
  'SSS'
], {
  D: 'mekanism:enriched_diamond',
  E: 'mekanism:energy_tablet',
  A: 'mekanism:advanced_control_circuit',
  S: 'powah:energized_steel_block'
}) 


// -----------------------------------
// REMOVE DUPLICATES FROM OTHER MODS
// -----------------------------------

event.remove({id: 'cyclic:anvil_magma'})
event.remove({id: 'cyclic:crystal_chestplate'})
event.remove({id: 'cyclic:crystal_boots'})
event.remove({id: 'cyclic:crystal_helmet'})
event.remove({id: 'cyclic:crystal_leggings'})
event.remove({id: 'cyclic:crystal_sword'})
event.remove({id: 'cyclic:crystal_pickaxe'})
event.remove({id: 'cyclic:crystal_axe'})
event.remove({id: 'cyclic:crystal_hoe'})
event.remove({id: 'cyclic:crystal_shovel'})
event.remove({id: 'cyclic:emerald_boots'})
event.remove({id: 'cyclic:emerald_helmet'})
event.remove({id: 'cyclic:emerald_chestplate'})
event.remove({id: 'cyclic:emerald_leggings'})
event.remove({id: 'cyclic:battery'})
event.remove({id: 'cyclic:structure'})
event.remove({id: 'cyclic:placer'})
event.remove({id: 'cyclic:breaker'})
event.remove({id: 'cyclic:harvester'})
event.remove({id: 'cyclic:charm_home'})
event.remove({id: 'cyclic:charm_world'})
event.remove({id: 'cyclic:peat_generator'})
event.remove({id: 'cyclic:emerald_sword'})
event.remove({id: 'cyclic:emerald_pickaxe'})
event.remove({id: 'cyclic:emerald_axe'})
event.remove({id: 'cyclic:emerald_hoe'})
event.remove({id: 'cyclic:emerald_shovel'})
event.remove({id: 'cyclic:heart'})
event.remove({id: 'cyclic:heart_empty'})

})