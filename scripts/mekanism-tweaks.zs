// -----------------------------------
// BASE CRAFTING MATERIALS
// -----------------------------------

craftingTable.removeByName("mekanism:teleportation_core");

craftingTable.addShaped("teleportation_core", <item:mekanism:teleportation_core>, [
    [<item:botania:terrasteel_ingot>, <item:mekanism:alloy_atomic>, <item:mysticalagriculture:supremium_ingot>],
    [<item:minecraft:ghast_tear>, <item:waystones:warp_stone>, <item:minecraft:ghast_tear>],
    [<item:minecraft:netherite_ingot>, <item:mekanism:alloy_atomic>, <item:mekanism:ingot_refined_obsidian>]
]);


// -----------------------------------
// CONTROL CIRCUITS
// -----------------------------------

craftingTable.removeByName("mekanism:control_circuit/advanced");

craftingTable.addShaped("advanced_control_circuit", <item:mekanism:advanced_control_circuit>, [
    [<item:industrialforegoing:plastic>, <item:silentgear:crimson_steel_ingot>, <item:industrialforegoing:plastic>],
    [<item:mekanism:alloy_infused>, <item:mekanism:basic_control_circuit>, <item:mekanism:alloy_infused>],
    [<item:industrialforegoing:plastic>, <item:silentgear:crimson_steel_ingot>, <item:industrialforegoing:plastic>]
]);


craftingTable.removeByName("mekanism:control_circuit/elite");

craftingTable.addShaped("elite_control_circuit", <item:mekanism:elite_control_circuit>, [
    [<item:industrialforegoing:plastic>, <item:minecraft:netherite_ingot>, <item:industrialforegoing:plastic>],
    [<item:mekanism:alloy_reinforced>, <item:mekanism:advanced_control_circuit>, <item:mekanism:alloy_reinforced>],
    [<item:industrialforegoing:plastic>, <item:minecraft:netherite_ingot>, <item:industrialforegoing:plastic>]
]);


craftingTable.removeByName("mekanism:control_circuit/ultimate");

craftingTable.addShaped("ultimate_control_circuit", <item:mekanism:ultimate_control_circuit>, [
    [<item:industrialforegoing:plastic>, <item:extendedcrafting:the_ultimate_ingot>, <item:industrialforegoing:plastic>],
    [<item:mekanism:alloy_atomic>, <item:mekanism:elite_control_circuit>, <item:mekanism:alloy_atomic>],
    [<item:industrialforegoing:plastic>, <item:extendedcrafting:the_ultimate_ingot>, <item:industrialforegoing:plastic>]
]);


// -----------------------------------
// PROCESSING MACHIENS
// -----------------------------------

craftingTable.removeByName("mekanism:metallurgic_infuser");

craftingTable.addShaped("metallurgic_infuser", <item:mekanism:metallurgic_infuser>, [
    [<tag:forge:ingots/iron>, <item:minecraft:blast_furnace>, <tag:forge:ingots/iron>],
    [<tag:forge:dusts/redstone>, <tag:forge:ingots/osmium>, <tag:forge:dusts/redstone>],
    [<tag:forge:ingots/iron>, <item:minecraft:blast_furnace>, <tag:forge:ingots/iron>]
]);


craftingTable.removeByName("mekanism:enrichment_chamber");

craftingTable.addShaped("enrichment_chamber", <item:mekanism:enrichment_chamber>, [
    [<item:mekanism:alloy_infused>, <item:mekanism:advanced_control_circuit>, <item:mekanism:alloy_infused>],
    [<item:minecraft:iron_ingot>, <item:mekanism:steel_casing>, <item:minecraft:iron_ingot>],
    [<item:mekanism:alloy_infused>, <item:mekanism:advanced_control_circuit>, <item:mekanism:alloy_infused>]
]);


craftingTable.removeByName("mekanism:crusher");

craftingTable.addShaped("crusher", <item:mekanism:crusher>, [
    [<item:mekanism:alloy_infused>, <item:mekanism:advanced_control_circuit>, <item:mekanism:alloy_infused>],
    [<item:minecraft:obsidian>, <item:mekanism:steel_casing>, <item:minecraft:obsidian>],
    [<item:mekanism:alloy_infused>, <item:mekanism:advanced_control_circuit>, <item:mekanism:alloy_infused>]
]);


craftingTable.removeByName("mekanism:digital_miner");

craftingTable.addShaped("digital_miner", <item:mekanism:digital_miner>, [
    [<item:mekanism:alloy_atomic>, <item:mekanism:elite_control_circuit>, <item:mekanism:alloy_atomic>],
    [<item:mekanism:logistical_sorter>, <item:mekanism:robit>, <item:mekanism:logistical_sorter>],
    [<item:mekanism:teleportation_core>, <item:refinedstorage:machine_casing>, <item:mekanism:teleportation_core>]
]);


// -----------------------------------
// TOOLS AND ARMOR
// -----------------------------------

craftingTable.removeByName("mekanism:jetpack");

craftingTable.addShaped("jetpack", <item:mekanism:jetpack>, [
    [<tag:forge:ingots/steel>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/steel>],
    [<tag:forge:ingots/tin>, <item:mekanism:basic_chemical_tank>, <tag:forge:ingots/tin>],
    [<item:minecraft:air>, <tag:forge:ingots/tin>, <item:minecraft:air>]
]);


craftingTable.removeByName("mekanism:jetpack_armored");

craftingTable.addShaped("jetpack_armored", <item:mekanism:jetpack_armored>, [
    [<tag:forge:dusts/diamond>, <item:minecraft:air>, <tag:forge:dusts/diamond>],
    [<tag:forge:ingots/bronze>, <item:minecraft:netherite_chestplate>, <tag:forge:ingots/bronze>],
    [<item:minecraft:air>, <item:mekanism:jetpack>, <item:minecraft:air>]
]);