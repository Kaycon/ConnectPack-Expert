craftingTable.removeByName("minecraft:blast_furnace");

craftingTable.addShaped("blast_furnace", <item:minecraft:blast_furnace>, [
    [<tag:forge:storage_blocks/iron>, <tag:forge:storage_blocks/iron>, <tag:forge:storage_blocks/iron>],
    [<tag:forge:storage_blocks/iron>, <item:minecraft:furnace>, <tag:forge:storage_blocks/iron>],
    [<tag:forge:storage_blocks/iron>, <tag:forge:storage_blocks/iron>, <tag:forge:storage_blocks/iron>]
]);


craftingTable.removeByName("minecraft:netherite_ingot");

craftingTable.addShaped("blast_furnace", <item:minecraft:netherite_ingot>, [
    [<item:botania:elementium_ingot>, <item:silentgear:crimson_steel_ingot>, <item:botania:elementium_ingot>],
    [<item:silentgear:crimson_steel_ingot>, <item:minecraft:netherite_scrap>, <item:silentgear:crimson_steel_ingot>],
    [<item:botania:elementium_ingot>, <item:silentgear:crimson_steel_ingot>, <item:botania:elementium_ingot>]
]);


// -----------------------------------
// NETHERITE ARMOR CRAFTABLE FROM DIAMOND ARMOR
// -----------------------------------

craftingTable.addShaped("netherite_helmet_connectpack", <item:minecraft:netherite_helmet>, [
    [<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:diamond_helmet>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

craftingTable.addShaped("netherite_chestplate_connectpack", <item:minecraft:netherite_chestplate>, [
    [<item:minecraft:netherite_ingot>, <item:minecraft:diamond_chestplate>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>]
]);

craftingTable.addShaped("netherite_leggings_connectpack", <item:minecraft:netherite_leggings>, [
    [<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:diamond_leggings>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:air>, <item:minecraft:netherite_ingot>]
]);

craftingTable.addShaped("netherite_boots_connectpack", <item:minecraft:netherite_boots>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:diamond_boots>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:air>, <item:minecraft:netherite_ingot>]
]);