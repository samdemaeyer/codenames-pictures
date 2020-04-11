# Codenames Pictures Online
The online version of Codenames Pictures by [czechgames](https://czechgames.com/en/codenames-pictures/)

### Intro
What are these strange symbols on the map? They code for locations where spies must contact secret agents!
Two rival spymasters know the agent in each location. They deliver coded messages telling their field operatives where to go for clandestine meetings. Operatives must be clever. A decoding mistake could lead to an unpleasant encounter with an enemy agent – or worse, with the assassin!
Both teams race to contact all their agents, but only one team can win.

## Game rules
### The spymasters key card
Each game has one spy master key that shows who can be found in each location.
The spymasters should choose the key card randomly, don't let the field operatives see the key.
The key corresponds to the grid. Blue squares correspond to pictures that Blue Team
must guess (locations with blue agents). Red squares correspond to pictures that Red Team must
guess (locations with red agents). Pale squares have innocent bystanders, and the black square
hides an assassin!

<img src="public/images/docs/spymaster-key-example.png" width="300px">

### Starting team
The lights on the sides of the key card indicate which team starts. The starting team
has 8 pictures to guess. The other team has 7. The starting team will give the first
clue of the game.

### Game play
Spymasters take turns giving one-word clues.
The word relates to one or more pictures on the grid. The field operatives try to guess which pictures their spymaster meant.
When a field operative touches a picture, the spymaster reveals who is in that location. If it is one of their team's agents, the operatives may keep guessing locations related to that one-word clue. Otherwise, it is the other team's turn. The first team to contact all their agents wins the game.

### Taking turns
**Teams take turns**, beginning with the starting team. (The starting team is indicated by the lights on the sides of the key card.)
On your team's turn, the spymaster gives **one clue**, and the field operatives may make **multiple guesses**.

### Giving the clue
If you are the spymaster, your job is to think up a clue that relates to some of the pictures your team is trying to guess.
Your clue consists of **one word** that relates to those pictures **and one number** that tells how many of your pictures relate to that word.

> Example: A good clue for these two pictures might be **_flying: 2_**.

<img src="public/images/cards/card-29.jpg" width="150px" style="display: inline-block">
<img src="public/images/cards/card-4.jpg" width="150px" style="display: inline-block">

You are allowed to give a clue for only one
picture (**_doghnut: 1_**) but it's fun to try for two or more.
Getting four pictures with one clue is a big accomplishment.

### Making contact
When the spymaster gives a clue, his or her field operatives try to figure out what it means.
They can debate it amongst themselves, but the spymaster must keep a straight face and is not allowed to comment. The operatives indicate their official guess when one of them touches one of the pictures on
the table. (Online, verbal confirmation to the spymaster which card)
The spymaster reveals who is in that location by righ clicking on the tile and assigns one of the following states: "Red", "Blue", "Neutral", "Game over".
- If the field operative verbally chooses a picture belonging to his or her team, the spymaster marks the picture with the correct color. The operatives may continue making guesses (but they do not get another clue).
- If the field operative verbally chooses a location
with an innocent bystander, the spymaster marks it with an innocent  ("Neutral") state. **This ends the turn**.
- If the field operative chooses a picture belonging to the other team, the picture is marked by one of the other team's agent colors.
This **ends the turn**. (And it helps the other team)
- If the field operative chooses the location
with the assassin, the picture is marked as assassinated ("Game over"). **This ends the game!**
The team that contacted the assassin loses.

### Ending the Turn
Your team's turn always has **exactly one clue** and **one or more guesses**. If the operatives' first guess is one of their team's pictures, they may make a second guess.
If that's correct, they may make another guess, and so on.

**The turn ends**
- if they guess a picture that's not theirs,
- if they choose to not guess anymore,
- or if they have already made as many

guesses as the number specified by the clue **plus one more**.
For example, if your spymaster says **_flying: 2_**, you can make as many as 3 correct guesses. This doesn't make much sense on your first turn, but later in the game it can be very useful.
For example, you might have received several clues for which you did not get all the pictures. You can guess these pictures instead of or in addition to those related to the current clue.
The "one more guess" rule gives you a chance to catch up.

### Ending the game
**The game ends when one team has all their pictures covered.**
That team wins. It is possible to win on the other team's turn if
they guess your last picture.
The game can end early if a field operative touches the location with the assassin. That operative's team loses.


## Online actions
- **Zoom in:** click on the tile
- **Makring a state:** right click on the tile
- **Remove a marking:** double click on the tile
- **Choosing a spymasters key card:** click on the **_spy master_** button
- **Search for a spymaster key:** click on the **_Click here_** link on the spymaster page, enter the card ID and submit.

## Run locally
### install dependencies
```bash
$ yarn install
```

### Run in development mode
```bash
$ yarn start
```
