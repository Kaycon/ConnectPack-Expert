// Listen to player login event
events.listen('player.logged_in', function (event) {
  // Check if player doesn't have "starting_items" gamestage yet
  if (!event.hasGameStage('starting_items')) {
    // Add the gamestage
    event.addGameStage('starting_items')
    // Give Quest Book
    event.player.give('ftbquests:book')
  }
})