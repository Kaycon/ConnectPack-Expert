onEvent('recipes', event => {
  
  event.remove({id: 'angelring:itemdiamondring'})
  event.shaped('angelring:itemdiamondring', [
    'DBD',
    'BEB',
    'DBD'
  ], {
    D: 'botania:dragonstone',
    B: 'botania:mana_diamond_block',
    E: 'minecraft:elytra'
  })

  event.remove({id: 'angelring:itemring'})
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      " GGGGG ",
      "GSAAASG",
      "GNDDDUG",
      "GNDDDUG",
      "GNDDDUG",
      "GRHHHEG",
      " GGGGG "
    ],
    "key": {
      "G": {
        "item": "minecraft:gold_block"
      },
      "N": {
        "item": "simplyjetpacks:jetpack_vanilla4"
      },
      "D": {
        "item": "angelring:itemdiamondring"
      },
      "H": {
        "item": "simplyjetpacks:jetpack_ie3"
      },
      "U": {
        "item": "simplyjetpacks:jetpack_mek4"
      },
      "A": {
        "item": "mekanism:jetpack_armored"
      },
      "S": {
        "item": "bloodmagic:demonslate"
      },
      "R": {
        "item": "botania:rune_lust"
      },
      "E": {
        "item": "botania:rune_gluttony"
      }
    },
    "result": {
      "item": "angelring:itemring"
    }
  })
})