// -----------------------------------
// BASE CRAFTING MATERIALS
// -----------------------------------

craftingTable.removeByName("industrialforegoing:machine_frame_pity");

craftingTable.addShaped("industrialforegoing", <item:industrialforegoing:machine_frame_pity>, [
    [<tag:minecraft:logs>, <tag:forge:stone>, <tag:minecraft:logs>],
    [<tag:forge:stone>, <item:mekanism:steel_casing>, <tag:forge:stone>],
    [<tag:minecraft:logs>, <tag:forge:stone>, <tag:minecraft:logs>]
]);


// -----------------------------------
// PITY PROCESSING MACHIENS
// -----------------------------------

craftingTable.removeByName("industrialforegoing:fluid_extractor");

craftingTable.addShaped("fluid_extractor", <item:industrialforegoing:fluid_extractor>, [
    [<tag:forge:ingots/tin>, <item:mekanism:basic_control_circuit>, <tag:forge:ingots/tin>],
    [<tag:forge:cobblestone>, <item:industrialforegoing:machine_frame_pity>, <tag:forge:cobblestone>],
    [<tag:forge:ingots/tin>, <item:minecraft:iron_axe>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:latex_processing_unit");

craftingTable.addShaped("latex_processing_unit", <item:industrialforegoing:latex_processing_unit>, [
    [<tag:forge:ingots/tin>, <item:mekanism:basic_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:water_bucket>, <item:industrialforegoing:machine_frame_pity>, <item:industrialforegoing:latex_bucket>],
    [<tag:forge:ingots/tin>, <item:mekanism:energized_smelter>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:animal_rancher");

craftingTable.addShaped("animal_rancher", <item:industrialforegoing:animal_rancher>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:shears>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:shears>],
    [<tag:forge:ingots/tin>, <item:minecraft:bucket>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:plant_gatherer");

craftingTable.addShaped("plant_gatherer", <item:industrialforegoing:plant_gatherer>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:iron_axe>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:iron_axe>],
    [<tag:forge:ingots/tin>, <item:minecraft:iron_hoe>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:plant_sower");

craftingTable.addShaped("plant_sower", <item:industrialforegoing:plant_sower>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:piston>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:piston>],
    [<tag:forge:ingots/tin>, <tag:botanypots:hopper_botany_pots>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:animal_feeder");

craftingTable.addShaped("animal_feeder", <item:industrialforegoing:animal_feeder>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:golden_carrot>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:golden_carrot>],
    [<tag:forge:ingots/tin>, <item:minecraft:golden_apple>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:mob_slaughter_factory");

craftingTable.addShaped("mob_slaughter_factory", <item:industrialforegoing:mob_slaughter_factory>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:iron_sword>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:iron_sword>],
    [<tag:forge:ingots/tin>, <item:minecraft:iron_axe>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:sewer");

craftingTable.addShaped("sewer", <item:industrialforegoing:sewer>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:brick>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:brick>],
    [<tag:forge:ingots/tin>, <item:minecraft:bucket>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:sewage_composter");

craftingTable.addShaped("sewage_composter", <item:industrialforegoing:sewage_composter>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:piston>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:piston>],
    [<tag:forge:ingots/tin>, <item:mekanism:energized_smelter>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:animal_baby_separator");

craftingTable.addShaped("animal_baby_separator", <item:industrialforegoing:animal_baby_separator>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:wheat>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:wheat>],
    [<tag:forge:ingots/tin>, <item:minecraft:golden_carrot>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:dissolution_chamber");

craftingTable.addShaped("dissolution_chamber", <item:industrialforegoing:dissolution_chamber>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<tag:forge:chests>, <item:industrialforegoing:machine_frame_pity>, <tag:forge:chests>],
    [<tag:forge:ingots/tin>, <item:minecraft:bucket>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:block_breaker");

craftingTable.addShaped("block_breaker", <item:industrialforegoing:block_breaker>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:iron_pickaxe>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:iron_axe>],
    [<tag:forge:ingots/tin>, <item:minecraft:iron_shovel>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:fluid_placer");

craftingTable.addShaped("fluid_placer", <item:industrialforegoing:fluid_placer>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:water_bucket>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:water_bucket>],
    [<tag:forge:ingots/tin>, <item:minecraft:water_bucket>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:block_placer");

craftingTable.addShaped("block_placer", <item:industrialforegoing:block_placer>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:dispenser>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:dispenser>],
    [<tag:forge:ingots/tin>, <item:minecraft:dispenser>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:resourceful_furnace");

craftingTable.addShaped("resourceful_furnace", <item:industrialforegoing:resourceful_furnace>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:furnace>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:furnace>],
    [<tag:forge:ingots/tin>, <item:minecraft:bucket>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:fluid_collector");

craftingTable.addShaped("fluid_collector", <item:industrialforegoing:fluid_collector>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:bucket>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:bucket>],
    [<tag:forge:ingots/tin>, <item:minecraft:bucket>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:spores_recreator");

craftingTable.addShaped("spores_recreator", <item:industrialforegoing:spores_recreator>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<tag:forge:mushrooms>, <item:industrialforegoing:machine_frame_pity>, <tag:forge:mushrooms>],
    [<tag:forge:ingots/tin>, <tag:forge:mushrooms>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:sludge_refiner");

craftingTable.addShaped("sludge_refiner", <item:industrialforegoing:sludge_refiner>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:furnace>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:furnace>],
    [<tag:forge:ingots/tin>, <item:minecraft:bucket>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:water_condensator");

craftingTable.addShaped("water_condensator", <item:industrialforegoing:water_condensator>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:piston>, <item:industrialforegoing:machine_frame_pity>, <item:minecraft:piston>],
    [<tag:forge:ingots/tin>, <item:minecraft:water_bucket>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:sludge_refiner");

craftingTable.addShaped("sludge_refiner", <item:industrialforegoing:sludge_refiner>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<tag:forge:dyes>, <item:industrialforegoing:machine_frame_pity>, <tag:forge:dyes>],
    [<tag:forge:ingots/tin>, <tag:forge:dyes>, <tag:forge:ingots/tin>]
]);


// -----------------------------------
// SIMPLE PROCESSING MACHIENS
// -----------------------------------

craftingTable.removeByName("industrialforegoing:plant_fertilizer");

craftingTable.addShaped("plant_fertilizer", <item:industrialforegoing:plant_fertilizer>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:leather>, <item:industrialforegoing:machine_frame_simple>, <item:minecraft:leather>],
    [<tag:forge:ingots/tin>, <item:minecraft:glass_bottle>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:mob_detector");

craftingTable.addShaped("mob_detector", <item:industrialforegoing:mob_detector>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:repeater>, <item:industrialforegoing:machine_frame_simple>, <item:minecraft:comparator>],
    [<tag:forge:ingots/tin>, <item:minecraft:observer>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:marine_fisher");

craftingTable.addShaped("marine_fisher", <item:industrialforegoing:marine_fisher>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:bucket>, <item:industrialforegoing:machine_frame_simple>, <item:minecraft:bucket>],
    [<tag:forge:ingots/tin>, <item:minecraft:fishing_rod>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:stasis_chamber");

craftingTable.addShaped("stasis_chamber", <item:industrialforegoing:stasis_chamber>, [
    [<tag:forge:ingots/tin>, <item:mekanism:advanced_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:soul_sand>, <item:industrialforegoing:machine_frame_simple>, <item:minecraft:soul_sand>],
    [<tag:forge:ingots/tin>, <item:minecraft:ghast_tear>, <tag:forge:ingots/tin>]
]);

// -----------------------------------
// ADVANCED PROCESSING MACHIENS
// -----------------------------------

craftingTable.removeByName("industrialforegoing:mob_crusher");

craftingTable.addShaped("mob_crusher", <item:industrialforegoing:mob_crusher>, [
    [<tag:forge:ingots/tin>, <item:mekanism:elite_control_circuit>, <tag:forge:ingots/tin>],
    [<item:darkutils:rune_damage_player>, <item:industrialforegoing:machine_frame_advanced>, <item:darkutils:rune_damage_player>],
    [<tag:forge:ingots/tin>, <item:minecraft:netherite_sword>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:enchantment_factory");

craftingTable.addShaped("enchantment_factory", <item:industrialforegoing:enchantment_factory>, [
    [<tag:forge:ingots/tin>, <item:mekanism:elite_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:diamond>, <item:industrialforegoing:machine_frame_advanced>, <item:minecraft:diamond>],
    [<tag:forge:ingots/tin>, <item:minecraft:book>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:enchantment_sorter");

craftingTable.addShaped("enchantment_sorter", <item:industrialforegoing:enchantment_sorter>, [
    [<tag:forge:ingots/tin>, <item:mekanism:elite_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:book>, <item:industrialforegoing:machine_frame_advanced>, <item:minecraft:enchanted_book>],
    [<tag:forge:ingots/tin>, <item:minecraft:ender_pearl>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:enchantment_applicator");

craftingTable.addShaped("enchantment_applicator", <item:industrialforegoing:enchantment_applicator>, [
    [<tag:forge:ingots/tin>, <item:mekanism:elite_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:anvil>, <item:industrialforegoing:machine_frame_advanced>, <item:minecraft:anvil>],
    [<tag:forge:ingots/tin>, <item:minecraft:anvil>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:enchantment_extractor");

craftingTable.addShaped("enchantment_extractor", <item:industrialforegoing:enchantment_extractor>, [
    [<tag:forge:ingots/tin>, <item:mekanism:elite_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:diamond>, <item:industrialforegoing:machine_frame_advanced>, <item:minecraft:diamond>],
    [<tag:forge:ingots/tin>, <item:minecraft:book>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:material_stonework_factory");

craftingTable.addShaped("material_stonework_factory", <item:industrialforegoing:material_stonework_factory>, [
    [<tag:forge:ingots/tin>, <item:mekanism:elite_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:crafting_table>, <item:industrialforegoing:machine_frame_advanced>, <item:minecraft:furnace>],
    [<tag:forge:ingots/tin>, <item:industrialforegoing:pink_slime>, <tag:forge:ingots/tin>]
]);


craftingTable.removeByName("industrialforegoing:potion_brewer");

craftingTable.addShaped("potion_brewer", <item:industrialforegoing:potion_brewer>, [
    [<tag:forge:ingots/tin>, <item:mekanism:elite_control_circuit>, <tag:forge:ingots/tin>],
    [<item:minecraft:repeater>, <item:industrialforegoing:machine_frame_advanced>, <item:minecraft:repeater>],
    [<tag:forge:ingots/tin>, <item:minecraft:brewing_stand>, <tag:forge:ingots/tin>]
]);

// -----------------------------------
// INFOS
// -----------------------------------
mods.jei.JEI.addInfo(<item:industrialforegoing:tinydryrubber>, ["Is crafted inside the Latex Processing Unit. The Latex Processing Unit needs liquid latex which is created in the Fluid Extractor by placing a Log in front of it."]);


// -----------------------------------
// GENERATORS
// -----------------------------------

craftingTable.removeByName("industrialforegoing:pitiful_generator");
mods.jei.JEI.hideItem(<item:industrialforegoing:pitiful_generator>);
craftingTable.removeByName("industrialforegoing:biofuel_generator");
mods.jei.JEI.hideItem(<item:industrialforegoing:biofuel_generator>);
craftingTable.removeByName("industrialforegoing:bioreactor");
mods.jei.JEI.hideItem(<item:industrialforegoing:bioreactor>);