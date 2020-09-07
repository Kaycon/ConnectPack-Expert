craftingTable.removeByName("mysticalagriculture:prosperity_ingot");

craftingTable.addShaped("prosperity_ingot", <item:mysticalagriculture:prosperity_ingot>, [
    [<item:minecraft:air>, <item:mysticalagriculture:prosperity_shard>, <item:minecraft:air>],
    [<item:mysticalagriculture:prosperity_shard>, <tag:forge:ingots/steel>, <item:mysticalagriculture:prosperity_shard>],
    [<item:minecraft:air>, <item:mysticalagriculture:prosperity_shard>, <item:minecraft:air>]
]);


craftingTable.removeByName("mysticalagriculture:infusion_altar");
craftingTable.removeByName("mysticalagriculture:infusion_pedestal");
mods.jei.JEI.hideItem(<item:mysticalagriculture:infusion_altar>);
mods.jei.JEI.hideItem(<item:mysticalagriculture:infusion_pedestal>);
