import mods.jei.JEI;

// -----------------------------------
// BASIC USEFUL CYCLIC STUFF
// -----------------------------------

craftingTable.removeByName("cyclic:user");

craftingTable.addShaped("user", <item:cyclic:user>, [
    [<item:minecraft:obsidian>, <item:minecraft:repeater>, <item:minecraft:obsidian>],
    [<item:minecraft:dispenser>, <item:mekanism:advanced_control_circuit>, <item:minecraft:dispenser>],
    [<item:minecraft:tripwire_hook>, <item:minecraft:repeater>, <item:minecraft:tripwire_hook>]
]);


craftingTable.removeByName("cyclic:collector");

craftingTable.addShaped("collector", <item:cyclic:collector>, [
    [<item:minecraft:obsidian>, <item:minecraft:hopper>, <item:minecraft:obsidian>],
    [<item:minecraft:dispenser>, <item:mekanism:advanced_control_circuit>, <item:minecraft:dispenser>],
    [<item:minecraft:hopper>, <item:minecraft:barrel>, <item:minecraft:hopper>]
]);


craftingTable.removeByName("cyclic:anvil");

craftingTable.addShaped("cyclic_anvil", <item:cyclic:anvil>, [
    [<item:mekanism:enriched_diamond>, <item:mekanism:enriched_diamond>, <item:mekanism:enriched_diamond>],
    [<item:mekanism:energy_tablet>, <item:mekanism:advanced_control_circuit>, <item:mekanism:energy_tablet>],
    [<item:powah:energized_steel_block>, <item:powah:energized_steel_block>, <item:powah:energized_steel_block>]
]);


// -----------------------------------
// REMOVE DUPLICATES FROM OTHER MODS
// -----------------------------------

craftingTable.removeByName("cyclic:crystal_chestplate");
craftingTable.removeByName("cyclic:crystal_boots");
craftingTable.removeByName("cyclic:crystal_helmet");
craftingTable.removeByName("cyclic:crystal_leggings");
craftingTable.removeByName("cyclic:crystal_sword");
craftingTable.removeByName("cyclic:crystal_pickaxe");
craftingTable.removeByName("cyclic:crystal_axe");
craftingTable.removeByName("cyclic:crystal_hoe");
craftingTable.removeByName("cyclic:crystal_shovel");
craftingTable.removeByName("cyclic:emerald_boots");
craftingTable.removeByName("cyclic:emerald_helmet");
craftingTable.removeByName("cyclic:emerald_chestplate");
craftingTable.removeByName("cyclic:emerald_leggings");
craftingTable.removeByName("cyclic:battery");
craftingTable.removeByName("cyclic:structure");
craftingTable.removeByName("cyclic:placer");
craftingTable.removeByName("cyclic:breaker");
craftingTable.removeByName("cyclic:harvester");
craftingTable.removeByName("cyclic:charm_home");
craftingTable.removeByName("cyclic:charm_world");
craftingTable.removeByName("cyclic:peat_generator");
craftingTable.removeByName("cyclic:emerald_sword");
craftingTable.removeByName("cyclic:emerald_pickaxe");
craftingTable.removeByName("cyclic:emerald_axe");
craftingTable.removeByName("cyclic:emerald_hoe");
craftingTable.removeByName("cyclic:emerald_shovel");

mods.jei.JEI.hideItem(<item:cyclic:crystal_chestplate>);
mods.jei.JEI.hideItem(<item:cyclic:crystal_boots>);
mods.jei.JEI.hideItem(<item:cyclic:crystal_helmet>);
mods.jei.JEI.hideItem(<item:cyclic:crystal_leggings>);
mods.jei.JEI.hideItem(<item:cyclic:crystal_sword>);
mods.jei.JEI.hideItem(<item:cyclic:crystal_pickaxe>);
mods.jei.JEI.hideItem(<item:cyclic:crystal_axe>);
mods.jei.JEI.hideItem(<item:cyclic:crystal_hoe>);
mods.jei.JEI.hideItem(<item:cyclic:crystal_shovel>);
mods.jei.JEI.hideItem(<item:cyclic:emerald_boots>);
mods.jei.JEI.hideItem(<item:cyclic:emerald_helmet>);
mods.jei.JEI.hideItem(<item:cyclic:emerald_chestplate>);
mods.jei.JEI.hideItem(<item:cyclic:emerald_leggings>);
mods.jei.JEI.hideItem(<item:cyclic:battery>);
mods.jei.JEI.hideItem(<item:cyclic:structure>);
mods.jei.JEI.hideItem(<item:cyclic:placer>);
mods.jei.JEI.hideItem(<item:cyclic:breaker>);
mods.jei.JEI.hideItem(<item:cyclic:harvester>);
mods.jei.JEI.hideItem(<item:cyclic:charm_home>);
mods.jei.JEI.hideItem(<item:cyclic:charm_world>);
mods.jei.JEI.hideItem(<item:cyclic:peat_generator>);
mods.jei.JEI.hideItem(<item:cyclic:emerald_sword>);
mods.jei.JEI.hideItem(<item:cyclic:emerald_pickaxe>);
mods.jei.JEI.hideItem(<item:cyclic:emerald_axe>);
mods.jei.JEI.hideItem(<item:cyclic:emerald_hoe>);
mods.jei.JEI.hideItem(<item:cyclic:emerald_shovel>);