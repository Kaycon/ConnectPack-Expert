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
