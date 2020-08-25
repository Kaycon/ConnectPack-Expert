// -----------------------------------
// BASE CRAFTING MATERIALS
// -----------------------------------

craftingTable.removeByName("refinedstorage:quartz_enriched_iron");

craftingTable.addShaped("quartz_enriched_iron", <item:refinedstorage:quartz_enriched_iron>, [
    [<item:mekanism:ingot_steel>, <item:mekanism:ingot_steel>, <item:minecraft:air>],
    [<item:mekanism:ingot_steel>, <item:minecraft:quartz>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);


craftingTable.removeByName("refinedstorage:processor_binding");

craftingTable.addShaped("processor_binding", <item:refinedstorage:processor_binding> * 8,[
    [<tag:forge:string>, <tag:forge:slimeballs>, <tag:forge:string>],
    [<tag:forge:string>, <item:minecraft:ghast_tear>, <tag:forge:string>],
    [<tag:forge:string>, <tag:forge:slimeballs>, <tag:forge:string>]
]);


craftingTable.removeByName("refinedstorage:machine_casing");

craftingTable.addShaped("machine_casing", <item:refinedstorage:machine_casing>,[
    [<item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:quartz_enriched_iron>],
    [<item:refinedstorage:quartz_enriched_iron>, <item:mekanism:steel_casing>, <item:refinedstorage:quartz_enriched_iron>],
    [<item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:quartz_enriched_iron>]
]);


// -----------------------------------
// GRIDS, CONTROLLER, CRAFTER, DRIVE
// -----------------------------------

craftingTable.removeByName("refinedstorage:controller");

craftingTable.addShaped("controller", <item:refinedstorage:controller>, [
    [<item:botania:terrasteel_ingot>, <item:refinedstorage:advanced_processor>, <item:mekanism:ingot_refined_obsidian>],
    [<item:storagenetwork:master>, <item:mekanism:elite_control_circuit>, <item:refinedstorage:machine_casing>],
    [<item:botania:elementium_block>, <item:mysticalagriculture:imperium_ingot_block>, <item:mekanism:block_refined_glowstone>]
]);


craftingTable.removeByName("refinedstorage:crafter");

craftingTable.addShaped("crafter", <item:refinedstorage:crafter>,[
    [<item:refinedstorage:construction_core>, <item:mekanism:robit>, <item:refinedstorage:destruction_core>],
    [<item:refinedstorage:advanced_processor>, <item:refinedstorage:machine_casing>, <item:refinedstorage:advanced_processor>],
    [<item:refinedstorage:destruction_core>, <item:mekanism:robit>, <item:refinedstorage:construction_core>]
]);


craftingTable.removeByName("refinedstorage:disk_drive");

craftingTable.addShaped("disk_drive", <item:refinedstorage:disk_drive>,[
    [<item:ironchest:obsidian_chest>, <item:refinedstorage:advanced_processor>, <item:ironchest:obsidian_chest>],
    [<item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:machine_casing>, <item:refinedstorage:quartz_enriched_iron>],
    [<item:refinedstorage:quartz_enriched_iron>, <item:mekanism:elite_control_circuit>, <item:refinedstorage:quartz_enriched_iron>]
]);


craftingTable.removeByName("refinedstorage:grid");

craftingTable.addShaped("grid", <item:refinedstorage:grid>,[
    [<item:refinedstorage:improved_processor>, <item:refinedstorage:construction_core>, <tag:forge:glass>],
    [<item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:machine_casing>, <item:storagenetwork:inventory>],
    [<item:refinedstorage:improved_processor>, <item:refinedstorage:destruction_core>, <tag:forge:glass>]
]);


craftingTable.removeByName("refinedstorage:crafting_grid");

craftingTable.addShaped("crafting_grid", <item:refinedstorage:crafting_grid>,[
    [<item:refinedstorage:grid>, <item:refinedstorage:advanced_processor>, <item:minecraft:air>],
    [<item:refinedstorage:crafter>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);


craftingTable.removeByName("refinedstorage:pattern_grid");

craftingTable.addShaped("pattern_grid", <item:refinedstorage:pattern_grid>,[
    [<item:refinedstorage:crafting_grid>, <item:refinedstorage:advanced_processor>, <item:minecraft:air>],
    [<item:refinedstorage:pattern>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);


// -----------------------------------
// STORAGE PARTS
// -----------------------------------

craftingTable.removeByName("refinedstorage:4k_storage_part");

craftingTable.addShaped("4k_storage_part", <item:refinedstorage:4k_storage_part>, [
    [<item:refinedstorage:basic_processor>, <item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:basic_processor>],
    [<item:refinedstorage:1k_storage_part>, <item:mekanism:alloy_infused>, <item:refinedstorage:1k_storage_part>],
    [<item:refinedstorage:basic_processor>, <item:refinedstorage:1k_storage_part>, <item:refinedstorage:basic_processor>]
]);


craftingTable.removeByName("refinedstorage:16k_storage_part");

craftingTable.addShaped("16k_storage_part", <item:refinedstorage:16k_storage_part>, [
    [<item:refinedstorage:improved_processor>, <item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:improved_processor>],
    [<item:refinedstorage:4k_storage_part>, <item:mekanism:alloy_reinforced>, <item:refinedstorage:4k_storage_part>],
    [<item:refinedstorage:improved_processor>, <item:refinedstorage:4k_storage_part>, <item:refinedstorage:improved_processor>]
]);


craftingTable.removeByName("refinedstorage:64k_storage_part");

craftingTable.addShaped("64k_storage_part", <item:refinedstorage:64k_storage_part>, [
    [<item:refinedstorage:advanced_processor>, <item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:advanced_processor>],
    [<item:refinedstorage:16k_storage_part>, <item:mekanism:alloy_atomic>, <item:refinedstorage:16k_storage_part>],
    [<item:refinedstorage:advanced_processor>, <item:refinedstorage:16k_storage_part>, <item:refinedstorage:advanced_processor>]
]);


craftingTable.removeByName("extradisks:part/256k_storage_part");

craftingTable.addShaped("256k_storage_part", <item:extradisks:256k_storage_part>, [
    [<item:refinedstorage:advanced_processor>, <item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:advanced_processor>],
    [<item:refinedstorage:64k_storage_part>, <item:botania:elementium_block>, <item:refinedstorage:64k_storage_part>],
    [<item:refinedstorage:advanced_processor>, <item:refinedstorage:64k_storage_part>, <item:refinedstorage:advanced_processor>]
]);


craftingTable.removeByName("extradisks:part/1024k_storage_part");

craftingTable.addShaped("1024k_storage_part", <item:extradisks:1024k_storage_part>, [
    [<item:refinedstorage:advanced_processor>, <item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:advanced_processor>],
    [<item:extradisks:256k_storage_part>, <item:minecraft:netherite_block>, <item:extradisks:256k_storage_part>],
    [<item:refinedstorage:advanced_processor>, <item:extradisks:256k_storage_part>, <item:refinedstorage:advanced_processor>]
]);


craftingTable.removeByName("extradisks:part/4096k_storage_part");

craftingTable.addShaped("4096k_storage_part", <item:extradisks:4096k_storage_part>, [
    [<item:refinedstorage:advanced_processor>, <item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:advanced_processor>],
    [<item:extradisks:1024k_storage_part>, <item:minecraft:nether_star>, <item:extradisks:1024k_storage_part>],
    [<item:refinedstorage:advanced_processor>, <item:extradisks:1024k_storage_part>, <item:refinedstorage:advanced_processor>]
]);

craftingTable.removeByName("extradisks:part/16384k_storage_part");

craftingTable.addShaped("16384k_storage_part", <item:extradisks:16384k_storage_part>, [
    [<item:refinedstorage:advanced_processor>, <item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:advanced_processor>],
    [<item:extradisks:4096k_storage_part>, <item:extendedcrafting:ender_star>, <item:extradisks:4096k_storage_part>],
    [<item:refinedstorage:advanced_processor>, <item:extradisks:4096k_storage_part>, <item:refinedstorage:advanced_processor>]
]);

craftingTable.removeByName("extradisks:part/65536k_storage_part");

craftingTable.addShaped("65536k_storage_part", <item:extradisks:65536k_storage_part>, [
    [<item:refinedstorage:advanced_processor>, <item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:advanced_processor>],
    [<item:extradisks:16384k_storage_part>, <item:extendedcrafting:enhanced_ender_ingot_block>, <item:extradisks:16384k_storage_part>],
    [<item:refinedstorage:advanced_processor>, <item:extradisks:16384k_storage_part>, <item:refinedstorage:advanced_processor>]
]);


craftingTable.removeByName("extradisks:part/262144k_storage_part");

craftingTable.addShaped("262144k_storage_part", <item:extradisks:262144k_storage_part>, [
    [<item:refinedstorage:advanced_processor>, <item:extendedcrafting:nether_star_block>, <item:refinedstorage:advanced_processor>],
    [<item:extradisks:65536k_storage_part>, <item:extendedcrafting:the_ultimate_block>, <item:extradisks:65536k_storage_part>],
    [<item:refinedstorage:advanced_processor>, <item:extradisks:65536k_storage_part>, <item:refinedstorage:advanced_processor>]
]);


craftingTable.removeByName("extradisks:part/1048576k_storage_part");

craftingTable.addShaped("1048576k_storage_part", <item:extradisks:1048576k_storage_part>, [
    [<item:extendedcrafting:nether_star_block>, <item:extendedcrafting:ender_star_block>, <item:extendedcrafting:nether_star_block>],
    [<item:extradisks:262144k_storage_part>, <item:extendedcrafting:the_ultimate_block>, <item:extradisks:262144k_storage_part>],
    [<item:extendedcrafting:nether_star_block>, <item:extradisks:262144k_storage_part>, <item:extendedcrafting:nether_star_block>]
]);


craftingTable.removeByName("extradisks:part/infinite_storage_part");

craftingTable.addShaped("infinite_storage_part", <item:extradisks:infinite_storage_part>, [
    [<item:extradisks:1048576k_storage_part>, <item:extradisks:1048576k_storage_part>, <item:extradisks:1048576k_storage_part>],
    [<item:extradisks:1048576k_storage_part>, <item:extendedcrafting:ultimate_singularity>, <item:extradisks:1048576k_storage_part>],
    [<item:extradisks:1048576k_storage_part>, <item:extradisks:1048576k_storage_part>, <item:extradisks:1048576k_storage_part>]
]);



