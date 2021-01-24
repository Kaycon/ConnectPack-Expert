
console.info('KubeJS: Removing duplicate ores from worldgen')

onEvent('worldgen.remove', event => {
  event.removeOres(ores => {
    ores.blocks = [ 'thermal:tin_ore', 'thermal:lead_ore', 'thermal:nickel_ore', 'thermal:copper_ore', 'thermal:silver_ore', 'iceandfire:copper_ore', 'iceandfire:silver_ore', 'create:copper_ore']
  })
})