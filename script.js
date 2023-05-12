/*pseudo code: 
Wait for the DOM to load
Get all the game cards and store their count and score
Set up event listeners for all game cards and the start button
Define a function to handle clicks on game cards
If a game card is clicked:
a. If it is not the front of the card, return
b. If neither card 1 nor card2 have been set, set card1 to the clicked card and add 'flipped'
class to it
c. If card1 has been set, but not card2, set card2, to the clicked card, add "flipped" class to it, and increment the score.
d. If both card1 and card2 have been set, check if their images match. If they do, remove the 
event listeners and set card1 and card2 to null. If they don't flip them back over after a delay
e. If all cards have been flipped, end the game
Define a function to start the game:
Set the score to 0 and add playing  class to the start element
Generate pairs of indices for the card images and shuffle them
Set the image sources for each card based on the shuffled pairs
Define a function to shuffle an array
Define a function to set the score
Define a function to end the game:
Display the final score and check if it is a new best score
If it is, update the local storage with the new best score and display a message
Add the "game-over" class to the end element
 */

