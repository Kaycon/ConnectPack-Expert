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

event.remove("cyclic:anvil_magma");
event.remove("cyclic:crystal_chestplate");
event.remove("cyclic:crystal_boots");
event.remove("cyclic:crystal_helmet");
event.remove("cyclic:crystal_leggings");
event.remove("cyclic:crystal_sword");
event.remove("cyclic:crystal_pickaxe");
event.remove("cyclic:crystal_axe");
event.remove("cyclic:crystal_hoe");
event.remove("cyclic:crystal_shovel");
event.remove("cyclic:emerald_boots");
event.remove("cyclic:emerald_helmet");
event.remove("cyclic:emerald_chestplate");
event.remove("cyclic:emerald_leggings");
event.remove("cyclic:battery");
event.remove("cyclic:structure");
event.remove("cyclic:placer");
event.remove("cyclic:breaker");
event.remove("cyclic:harvester");
event.remove("cyclic:charm_home");
event.remove("cyclic:charm_world");
event.remove("cyclic:peat_generator");
event.remove("cyclic:emerald_sword");
event.remove("cyclic:emerald_pickaxe");
event.remove("cyclic:emerald_axe");
event.remove("cyclic:emerald_hoe");
event.remove("cyclic:emerald_shovel");

})