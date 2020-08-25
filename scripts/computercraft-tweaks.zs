craftingTable.removeByName("computercraft:computer_normal");

craftingTable.addShaped("computer_normal", <item:computercraft:computer_normal>, [
    [<item:refinedstorage:improved_processor>, <item:mekanism:advanced_control_circuit>, <item:refinedstorage:improved_processor>],
    [<item:refinedstorage:improved_processor>, <item:mekanism:advanced_control_circuit>, <item:refinedstorage:improved_processor>],
    [<item:refinedstorage:machine_casing>, <tag:forge:glass_panes>, <item:refinedstorage:machine_casing>]
]);


craftingTable.removeByName("computercraft:computer_advanced");
craftingTable.removeByName("computercraft:computer_advanced_upgrade");

craftingTable.addShaped("computer_advanced", <item:computercraft:computer_advanced>, [
    [<item:refinedstorage:advanced_processor>, <item:mekanism:elite_control_circuit>, <item:refinedstorage:advanced_processor>],
    [<item:refinedstorage:advanced_processor>, <item:mekanism:elite_control_circuit>, <item:refinedstorage:advanced_processor>],
    [<item:refinedstorage:machine_casing>, <item:computercraft:computer_normal>, <item:refinedstorage:machine_casing>]
]);


craftingTable.removeByName("computercraft:pocket_computer_normal");

craftingTable.addShaped("pocket_computer_normal", <item:computercraft:pocket_computer_normal>, [
    [<item:refinedstorage:improved_processor>, <item:mekanism:advanced_control_circuit>, <item:refinedstorage:improved_processor>],
    [<item:refinedstorage:improved_processor>, <item:minecraft:golden_apple>, <item:refinedstorage:improved_processor>],
    [<item:refinedstorage:machine_casing>, <tag:forge:glass_panes>, <item:refinedstorage:machine_casing>]
]);


craftingTable.removeByName("computercraft:pocket_computer_advanced");
craftingTable.removeByName("computercraft:pocket_computer_advanced_upgrade");

craftingTable.addShaped("pocket_computer_advanced", <item:computercraft:pocket_computer_advanced>, [
    [<item:refinedstorage:advanced_processor>, <item:mekanism:elite_control_circuit>, <item:refinedstorage:advanced_processor>],
    [<item:refinedstorage:advanced_processor>, <item:computercraft:pocket_computer_normal>, <item:refinedstorage:advanced_processor>],
    [<item:refinedstorage:machine_casing>, <item:minecraft:air>, <item:refinedstorage:machine_casing>]
]);


craftingTable.removeByName("computercraft:turtle_normal");

craftingTable.addShaped("turtle_normal", <item:computercraft:turtle_normal>, [
    [<item:mekanism:alloy_atomic>, <item:mekanism:elite_control_circuit>, <item:mekanism:alloy_atomic>],
    [<item:mekanism:logistical_sorter>, <item:mekanism:robit>, <item:mekanism:logistical_sorter>],
    [<item:refinedstorage:machine_casing>, <item:computercraft:computer_normal>, <item:refinedstorage:machine_casing>]
]);


craftingTable.removeByName("computercraft:turtle_advanced");
craftingTable.removeByName("computercraft:turtle_advanced_upgrade");

craftingTable.addShaped("turtle_advanced", <item:computercraft:turtle_advanced>, [
    [<item:mekanism:alloy_atomic>, <item:mekanism:elite_control_circuit>, <item:mekanism:alloy_atomic>],
    [<item:mekanism:logistical_sorter>, <item:mekanism:robit>, <item:mekanism:logistical_sorter>],
    [<item:refinedstorage:machine_casing>, <item:computercraft:computer_advanced>, <item:refinedstorage:machine_casing>]
]);

craftingTable.addShapeless("turtle_advanced_upgrade", <item:computercraft:turtle_advanced>, [<item:computercraft:computer_advanced>, <item:computercraft:turtle_normal>]);
