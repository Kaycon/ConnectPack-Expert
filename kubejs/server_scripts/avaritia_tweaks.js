onEvent('recipes', event => {

  //Endest pearl
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "   E   ",
      "  ERE  ",
      " ERRRE ",
      "ERRSRRE",
      " ERRRE ",
      "  ERE  ",
      "   E   "
    ],
    "key": {
      "E": {
        "item": "cyclic:ender_eye_reuse"
      },
      "S": {
        "item": "extendedcrafting:ender_star_block"
      },
      "R": {
        "item": "extendedcrafting:redstone_ingot_block"
      }
    },
    "result": {
      "item": "avaritia:endest_pearl"
    }
  })
})