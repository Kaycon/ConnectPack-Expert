onEvent('recipes', event => {

  //Crimson Iron
  event.custom({"type":"botanypots:crop","conditions":[{"type":"forge:mod_loaded","modid":"mysticalcustomization"},{"type":"mysticalagriculture:crop_enabled","crop":"mysticalcustomization:crimson-iron"}],"seed":{"item":"mysticalagriculture:crimson-iron_seeds"},"categories":["tertium"],"growthTicks":3600,"display":{"block":"mysticalagriculture:crimson-iron_crop","properties":{"age":7}},"results":[{"chance":0.75,"output":{"item":"mysticalagriculture:crimson-iron_essence"},"minRolls":1,"maxRolls":1},{"chance":0.05,"output":{"item":"mysticalagriculture:crimson-iron_seeds"},"minRolls":1,"maxRolls":1},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})

  //Shulker Shell
  event.custom({"type":"botanypots:crop","conditions":[{"type":"forge:mod_loaded","modid":"mysticalcustomization"},{"type":"mysticalagriculture:crop_enabled","crop":"mysticalcustomization:shulker"}],"seed":{"item":"mysticalagriculture:shulker_seeds"},"categories":["tertium"],"growthTicks":3600,"display":{"block":"mysticalagriculture:shulker_crop","properties":{"age":7}},"results":[{"chance":0.75,"output":{"item":"mysticalagriculture:shulker_essence"},"minRolls":1,"maxRolls":1},{"chance":0.05,"output":{"item":"mysticalagriculture:shulker_seeds"},"minRolls":1,"maxRolls":1},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]})

})