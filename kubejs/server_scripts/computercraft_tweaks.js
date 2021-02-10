onEvent('recipes', event => {
  
  event.remove({id: 'computercraft:computer_normal'})
  event.shaped('computercraft:computer_normal', [
    'IAI',
    'IAI',
    'CGC'
  ], {
    I: 'refinedstorage:improved_processor',
    A: 'mekanism:advanced_control_circuit',
    C: 'refinedstorage:machine_casing',
    G: '#forge:glass_panes'
  })  
  
  event.remove({id: 'computercraft:computer_advanced'})
  event.remove({id: 'computercraft:computer_advanced_upgrade'})
  event.shaped('computercraft:computer_advanced', [
    'AEA',
    'AEA',
    'CNC'
  ], {
    A: 'refinedstorage:advanced_processor',
    E: 'mekanism:elite_control_circuit',
    C: 'refinedstorage:machine_casing',
    N: 'computercraft:computer_normal'
  }) 
  
  event.remove({id: 'computercraft:pocket_computer_normal'})
  event.shaped('computercraft:pocket_computer_normal', [
    'IAI',
    'IGI',
    'CGC'
  ], {
    I: 'refinedstorage:improved_processor',
    A: 'mekanism:advanced_control_circuit',
    G: 'minecraft:golden_apple',
    C: 'refinedstorage:machine_casing',
    G: '#forge:glass_panes'
  })
  
  event.remove({id: 'computercraft:pocket_computer_advanced'})
  event.remove({id: 'computercraft:pocket_computer_advanced_upgrade'})
  event.shaped('computercraft:pocket_computer_advanced', [
    'AEA',
    'APA',
    'C C'
  ], {
    A: 'refinedstorage:advanced_processor',
    E: 'mekanism:elite_control_circuit',
    P: 'computercraft:pocket_computer_normal',
    C: 'refinedstorage:machine_casing'
  })
  
  event.remove({id: 'computercraft:turtle_normal'})
  event.shaped('computercraft:turtle_normal', [
    'AEA',
    'LRL',
    'CNC'
  ], {
    A: 'mekanism:alloy_atomic',
    E: 'mekanism:elite_control_circuit',
    L: 'mekanism:logistical_sorter',
    R: 'mekanism:robit',
    C: 'refinedstorage:machine_casing',
    N: 'computercraft:computer_normal'
  })
  
  event.remove({id: 'computercraft:turtle_advanced'})
  event.remove({id: 'computercraft:turtle_advanced_upgrade'})
  event.shaped('computercraft:turtle_advanced', [
    'AEA',
    'LRL',
    'CNC'
  ], {
    A: 'mekanism:alloy_atomic',
    E: 'mekanism:elite_control_circuit',
    L: 'mekanism:logistical_sorter',
    R: 'mekanism:robit',
    C: 'refinedstorage:machine_casing',
    N: 'computercraft:computer_advanced'
  })
  
  event.shapeless('computercraft:turtle_advanced', ['computercraft:computer_advanced', 'computercraft:turtle_normal'])
  
})