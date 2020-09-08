craftingTable.removeByName("minecraft:blast_furnace");

craftingTable.addShaped("blast_furnace", <item:minecraft:blast_furnace>, [
    [<item:minecraft:iron_block>, <item:minecraft:iron_block>, <item:minecraft:iron_block>],
    [<item:minecraft:iron_block>, <item:minecraft:furnace>, <item:minecraft:iron_block>],
    [<item:minecraft:iron_block>, <item:minecraft:iron_block>, <item:minecraft:iron_block>]
]);

craftingTable.removeByName("minecraft:netherite_ingot");

craftingTable.addShaped("netherite_ingot", <item:minecraft:netherite_ingot>, [
    [<item:botania:elementium_ingot>, <item:silentgear:crimson_steel_ingot>, <item:botania:elementium_ingot>],
    [<item:silentgear:crimson_steel_ingot>, <item:minecraft:netherite_scrap>, <item:silentgear:crimson_steel_ingot>],
    [<item:botania:elementium_ingot>, <item:silentgear:crimson_steel_ingot>, <item:botania:elementium_ingot>]
]);


craftingTable.removeByName("minecraft:flint_and_steel");
craftingTable.addShapeless("flint_and_steel", <item:minecraft:flint_and_steel>, [<item:mekanism:ingot_steel>, <item:minecraft:flint>]);


// -----------------------------------
// NETHERITE ARMOR CRAFTABLE FROM DIAMOND ARMOR
// -----------------------------------

craftingTable.addShapeless("netherite_helmet_connectpack", <item:minecraft:netherite_helmet>, [<item:minecraft:diamond_helmet>, <item:minecraft:netherite_ingot>]);
craftingTable.addShapeless("netherite_chestplate_connectpack", <item:minecraft:netherite_chestplate>, [<item:minecraft:diamond_chestplate>, <item:minecraft:netherite_ingot>]);
craftingTable.addShapeless("netherite_leggings_connectpack", <item:minecraft:netherite_leggings>, [<item:minecraft:diamond_leggings>, <item:minecraft:netherite_ingot>]);
craftingTable.addShapeless("netherite_boots_connectpack", <item:minecraft:netherite_boots>, [<item:minecraft:diamond_boots>, <item:minecraft:netherite_ingot>]);


// -----------------------------------
// DIAMOND ARMOR FROM ENRICHED DIAMOND
// -----------------------------------

craftingTable.removeByName("minecraft:diamond_helmet");

craftingTable.addShaped("diamond_helmet_connectpack", <item:minecraft:diamond_helmet>, [
    [<item:mekanism:enriched_diamond>, <item:mekanism:enriched_diamond>, <item:mekanism:enriched_diamond>],
    [<item:mekanism:enriched_diamond>, <item:minecraft:air>, <item:mekanism:enriched_diamond>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);


craftingTable.removeByName("minecraft:diamond_chestplate");

craftingTable.addShaped("diamond_chestplate_connectpack", <item:minecraft:diamond_chestplate>, [
    [<item:mekanism:enriched_diamond>, <item:minecraft:air>, <item:mekanism:enriched_diamond>],
    [<item:mekanism:enriched_diamond>, <item:mekanism:enriched_diamond>, <item:mekanism:enriched_diamond>],
    [<item:mekanism:enriched_diamond>, <item:mekanism:enriched_diamond>, <item:mekanism:enriched_diamond>]
]);


craftingTable.removeByName("minecraft:diamond_leggings");

craftingTable.addShaped("diamond_leggings_connectpack", <item:minecraft:diamond_leggings>, [
    [<item:mekanism:enriched_diamond>, <item:mekanism:enriched_diamond>, <item:mekanism:enriched_diamond>],
    [<item:mekanism:enriched_diamond>, <item:minecraft:air>, <item:mekanism:enriched_diamond>],
    [<item:mekanism:enriched_diamond>, <item:minecraft:air>, <item:mekanism:enriched_diamond>]
]);


craftingTable.removeByName("minecraft:diamond_boots");

craftingTable.addShaped("diamond_boots_connectpack", <item:minecraft:diamond_boots>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:mekanism:enriched_diamond>, <item:minecraft:air>, <item:mekanism:enriched_diamond>],
    [<item:mekanism:enriched_diamond>, <item:minecraft:air>, <item:mekanism:enriched_diamond>]
]);
