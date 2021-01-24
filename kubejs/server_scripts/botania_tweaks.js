onEvent('recipes', event => {

  //Manasteel Block
  event.remove({id:'botania:mana_infusion/manasteel'})
  event.custom({
    type: 'botania:mana_infusion',
    input: {
      tag: 'forge:ingots/steel'
    },
    output: {
      item: 'botania:manasteel_ingot'
    },
    mana: 3000
  })

  //Manasteel Block
  event.remove({id:'botania:mana_infusion/manasteel_block'})
  event.custom({
    type: 'botania:mana_infusion',
    input: {
      item: 'mekanism:block_steel'
    },
    output: {
      item: 'botania:manasteel_block'
    },
    mana: 27000
  })

})