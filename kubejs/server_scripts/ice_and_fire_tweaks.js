onEvent('recipes', event => {

  // ---------------------------------------------------
  // CHAINMAIL ARMOR FROM CHAINS AND LEATHER ARMOR
  // ----------------------------------------------------
  var dragonsteel = [
    'fire',
    'ice',
    'lightning'
  ]
  for (i = 0; i < dragonsteel.length; i++) {
    event.remove({id: 'iceandfire:dragonsteel_' +  dragonsteel[i] + '_helmet'})
    event.shaped('iceandfire:dragonsteel_' +  dragonsteel[i] + '_helmet', [
      'DDD',
      'DRD',
      '   '
    ], {
      D: 'iceandfire:dragonsteel_' +  dragonsteel[i] + '_ingot',
      R: 'mekanismtools:refined_obsidian_helmet'
    })

    event.remove({id: 'iceandfire:dragonsteel_' +  dragonsteel[i] + '_chestplate'})
    event.shaped('iceandfire:dragonsteel_' +  dragonsteel[i] + '_chestplate', [
      'DRD',
      'DDD',
      'DDD'
    ], {
      D: 'iceandfire:dragonsteel_' +  dragonsteel[i] + '_ingot',
      R: 'mekanismtools:refined_obsidian_chestplate'
    })

    event.remove({id: 'iceandfire:dragonsteel_' +  dragonsteel[i] + '_leggings'})
    event.shaped('iceandfire:dragonsteel_' +  dragonsteel[i] + '_leggings', [
      'DDD',
      'DRD',
      'D D'
    ], {
      D: 'iceandfire:dragonsteel_' +  dragonsteel[i] + '_ingot',
      R: 'mekanismtools:refined_obsidian_leggings'
    })

    event.remove({id: 'iceandfire:dragonsteel_' +  dragonsteel[i] + '_boots'})
    event.shaped('iceandfire:dragonsteel_' +  dragonsteel[i] + '_boots', [
      'DRD',
      'D D',
      '   '
    ], {
      D: 'iceandfire:dragonsteel_' +  dragonsteel[i] + '_ingot',
      R: 'mekanismtools:refined_obsidian_boots'
    })
  }
})