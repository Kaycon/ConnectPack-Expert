craftingTable.removeByName("storagenetwork:master");

craftingTable.addShaped("master", <item:storagenetwork:master>, [
    [<item:minecraft:quartz_block>, <item:storagenetwork:kabel>, <item:minecraft:quartz_block>],
    [<item:storagenetwork:kabel>, <item:mekanism:advanced_control_circuit>, <item:storagenetwork:kabel>],
    [<item:minecraft:quartz_block>, <item:storagenetwork:kabel>, <item:minecraft:quartz_block>]
]);

craftingTable.removeByName("storagenetwork:kabel");
craftingTable.addShaped("kabel", <item:storagenetwork:kabel> * 4, [
    [<tag:minecraft:wool>, <tag:minecraft:wool>, <tag:minecraft:wool>],
    [<tag:forge:ingots/steel>, <item:minecraft:redstone>, <tag:forge:ingots/steel>],
    [<tag:minecraft:wool>, <tag:minecraft:wool>, <tag:minecraft:wool>]
]);