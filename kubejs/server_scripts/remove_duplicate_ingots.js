onEvent('recipes', event => {
  
  ///////////
  // COPPER
  ///////////

  // Copper Ingot
  event.replaceOutput({}, 'iceandfire:copper_ingot', 'mekanism:ingot_copper')
  event.replaceOutput({}, 'thermal:copper_ingot', 'mekanism:ingot_copper')
  event.replaceOutput({}, 'create:copper_ingot', 'mekanism:ingot_copper')
  event.replaceOutput({}, 'immersiveengineering:ingot_copper', 'mekanism:ingot_copper')

  // Copper Dust
  event.replaceOutput({}, 'thermal:copper_dust', 'mekanism:dust_copper')
  event.replaceOutput({}, 'immersiveengineering:dust_copper', 'mekanism:dust_copper')

  // Copper Nugget
  event.replaceOutput({}, 'iceandfire:copper_nugget', 'mekanism:nugget_copper')
  event.replaceOutput({}, 'thermal:copper_nugget', 'mekanism:nugget_copper')
  event.replaceOutput({}, 'create:copper_nugget', 'mekanism:nugget_copper')
  event.replaceOutput({}, 'immersiveengineering:nugget_copper', 'mekanism:nugget_copper')

  // Copper Block
  event.replaceOutput({}, 'iceandfire:copper_block', 'mekanism:block_copper')
  event.replaceOutput({}, 'thermal:copper_block', 'mekanism:block_copper')
  event.replaceOutput({}, 'create:copper_block', 'mekanism:block_copper')
  event.replaceOutput({}, 'immersiveengineering:storage_copper', 'mekanism:block_copper')


  ///////////
  // TIN
  ///////////

  // Tin Ingot
  event.replaceOutput({}, 'thermal:tin_ingot', 'mekanism:ingot_tin')

  // Tin Dust
  event.replaceOutput({}, 'thermal:tin_dust', 'mekanism:dust_tin')

  // Tin Nugget
  event.replaceOutput({}, 'thermal:tin_nugget', 'mekanism:nugget_tin')

  // Tin Block
  event.replaceOutput({}, 'thermal:tin_block', 'mekanism:block_tin')


  ///////////
  // LEAD
  ///////////

  // Lead Ingot
  event.replaceOutput({}, 'thermal:lead_ingot', 'mekanism:ingot_lead')
  event.replaceOutput({}, 'immersiveengineering:ingot_lead', 'mekanism:ingot_lead')
  
  // Lead Dust
  event.replaceOutput({}, 'thermal:lead_dust', 'mekanism:dust_lead')
  event.replaceOutput({}, 'immersiveengineering:dust_lead', 'mekanism:dust_lead')

  // Lead Nugget
  event.replaceOutput({}, 'thermal:lead_nugget', 'mekanism:nugget_lead')
  event.replaceOutput({}, 'immersiveengineering:nugget_lead', 'mekanism:nugget_lead')

  // Lead Block
  event.replaceOutput({}, 'thermal:lead_block', 'mekanism:block_lead')
  event.replaceOutput({}, 'immersiveengineering:storage_lead', 'mekanism:block_lead')


  ///////////
  // BRONZE
  ///////////

  // Bronze Ingot
  event.replaceOutput({}, 'thermal:bronze_ingot', 'mekanism:ingot_bronze')

  // Bronze Dust
  event.replaceOutput({}, 'thermal:bronze_dust', 'mekanism:dust_bronze')
  
  // Bronze Nugget
  event.replaceOutput({}, 'thermal:bronze_nugget', 'mekanism:nugget_bronze')
  
  // Bronze Block
  event.replaceOutput({}, 'thermal:bronze_block', 'mekanism:block_bronze')

  ///////////
  // STEEL
  ///////////

  // Steel Ingot
  event.replaceOutput({}, 'immersiveengineering:ingot_steel', 'mekanism:ingot_steel')
  event.remove({id: 'immersiveengineering:blastfurnace/steel'})
  event.remove({id: 'immersiveengineering:blastfurnace/steel_block'})
  event.remove({id: 'immersiveengineering:arcfurnace/steel'})
  event.remove({id: 'immersiveengineering:arcfurnace/dust_steel'})
  event.custom({"type":"immersiveengineering:blast_furnace","result":{"item":"mekanism:ingot_steel"},"input":{"tag":"forge:ingots/iron"},"slag":{"tag":"forge:slag"},"time":1200})
  event.custom({"type":"immersiveengineering:arc_furnace","results":[{"item":"mekanism:ingot_steel"}],"additives":[{"tag":"forge:dusts/coal_coke"}],"input":{"tag":"forge:ingots/iron"},"slag":{"tag":"forge:slag"},"time":400,"energy":204800})
  
  // Steel Dust
  event.replaceOutput({}, 'immersiveengineering:dust_steel', 'mekanism:dust_steel')

  // Steel Nugget
  event.replaceOutput({}, 'immersiveengineering:nugget_steel', 'mekanism:nugget_steel')

  // Steel Block
  event.replaceOutput({}, 'immersiveengineering:storage_steel', 'mekanism:block_steel')
  event.custom({"type":"immersiveengineering:blast_furnace","result":{"item":"mekanism:block_steel"},"input":{"tag":"forge:storage_blocks/iron"},"slag":{"count":9,"base_ingredient":{"tag":"forge:slag"}},"time":10800})
  
  ///////////
  // URANIUM
  ///////////

  // Uranium Ingot
  event.replaceOutput({}, 'immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium')

  // Uranium Dust
  event.replaceOutput({}, 'immersiveengineering:dust_uranium', 'mekanism:dust_uranium')

  // Uranium Nugget
  event.replaceOutput({}, 'immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium')
  
  // Uranium Block
  event.replaceOutput({}, 'immersiveengineering:storage_uranium', 'mekanism:block_uranium')

  ///////////
  // NICKEL
  ///////////

  //Nickel Ingot
  event.replaceOutput({}, 'immersiveengineering:ingot_nickel', 'thermal:nickel_ingot')
  
  //Nickel Dust
  event.replaceOutput({}, 'immersiveengineering:dust_nickel', 'thermal:nickel_dust')

  //Nickel Nugget
  event.replaceOutput({}, 'immersiveengineering:nugget_nickel', 'thermal:nickel_nugget')

  //Nickel Block
  event.replaceOutput({}, 'immersiveengineering:storage_nickel', 'thermal:nickel_block')

  //////////////
  // CONSTANTAN
  //////////////

  //Constantan Ingot
  event.replaceOutput({}, 'immersiveengineering:ingot_constantan', 'thermal:constantan_ingot')
  
  //Constantan Dust
  event.replaceOutput({}, 'immersiveengineering:dust_constantan', 'thermal:constantan_dust')
  
  //Constantan Nugget
  event.replaceOutput({}, 'immersiveengineering:nugget_constantan', 'thermal:constantan_nugget')
  
  //Constantan Block
  event.replaceOutput({}, 'immersiveengineering:storage_constantan', 'thermal:constantan_block')
  
  
  ///////////
  // SILVER
  ///////////

  //Silver Ingot
  event.replaceOutput({}, 'immersiveengineering:ingot_silver', 'thermal:silver_ingot')
  event.replaceOutput({}, 'iceandfire:silver_ingot', 'thermal:silver_ingot')
  
  //Silver Dust
  event.replaceOutput({}, 'immersiveengineering:dust_silver', 'thermal:silver_dust')
  event.replaceOutput({}, 'iceandfire:silver_ingot', 'thermal:silver_ingot')
  
  //Silver Nugget
  event.replaceOutput({}, 'immersiveengineering:nugget_silver', 'thermal:silver_nugget')
  event.replaceOutput({}, 'iceandfire:silver_nugget', 'thermal:silver_nugget')
  
  //Silver Block
  event.replaceOutput({}, 'immersiveengineering:storage_silver', 'thermal:silver_block')
  event.replaceOutput({}, 'iceandfire:silver_block', 'thermal:silver_block')
})