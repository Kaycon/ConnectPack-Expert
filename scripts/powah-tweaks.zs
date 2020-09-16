craftingTable.removeByName("powah:crafting/capacitor_basic");

craftingTable.addShaped("capacitor_basic", <item:powah:capacitor_basic>, [
    [<item:minecraft:air>, <tag:forge:ingots/steel>, <item:powah:dielectric_paste>],
    [<tag:forge:ingots/steel>, <item:minecraft:redstone_block>, <tag:forge:ingots/steel>],
    [<item:powah:dielectric_paste>, <tag:forge:ingots/steel>, <item:minecraft:air>]
]);

craftingTable.removeByName("powah:crafting/dielectric_casing");

craftingTable.addShaped("dielectric_casing", <item:powah:dielectric_casing>, [
    [<tag:forge:ingots/copper>, <item:powah:dielectric_rod_horizontal>, <tag:forge:ingots/copper>],
    [<item:powah:dielectric_rod>, <item:mekanism:steel_casing>, <item:powah:dielectric_rod>],
    [<tag:forge:ingots/copper>, <item:powah:dielectric_rod_horizontal>, <tag:forge:ingots/copper>]
]);

craftingTable.removeByName("powah:crafting/energy_cell_basic");
craftingTable.removeByName("powah:crafting/energy_cell_basic_2");

craftingTable.addShaped("energy_cell_basic", <item:powah:energy_cell_basic>, [
    [<tag:forge:ingots/steel>, <item:powah:capacitor_basic>, <tag:forge:ingots/steel>],
    [<item:powah:energy_cell_starter>, <item:powah:dielectric_casing>, <item:powah:energy_cell_starter>],
    [<tag:forge:ingots/steel>, <item:powah:capacitor_basic>, <tag:forge:ingots/steel>]
]);


craftingTable.addShapeless("uraninite_from_uranium", <item:powah:uraninite>, [<item:mekanism:ingot_uranium>]);