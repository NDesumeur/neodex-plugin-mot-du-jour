# Mot du jour (Word of the day)

A word game: find a French word in 6 tries. The first letter is given, the length changes every day (5 to 8 letters), and everyone gets the same word. A free mode lets you play as many words as you like.

*Version française : [README.md](README.md)*

## How to play

- Type a word of the right length on your keyboard, or with the on-screen keyboard, then confirm with **Enter**. **Backspace** deletes a letter.
- The word you type must exist in the dictionary (every form counts: plurals, feminines, conjugations). Otherwise it is refused without costing a try.
- Accents do not count: "ELEVE" stands for "élève".

After each try, every letter gets a colour:

- **green square**: the letter is in the word, at that position;
- **yellow circle**: the letter is in the word, but somewhere else;
- **grey**: it is not in the word (or no longer: a double letter only counts as many times as it appears in the word).

The on-screen keyboard keeps these colours to help you. After 6 missed tries, the word is revealed.

## Modes

- **Word of the day**: one word per day, the same for everyone; the new one arrives at midnight. Your daily game is kept if you close NeoDex.
- **Free · 5, 6, 7 or 8 letters**: random words of the chosen length. **New word** draws another one (giving up a game in progress counts as a loss).

## Sharing

Once the game is over, **Share** copies your colour grid, without the letters, so you can paste it anywhere without giving the word away.

## Statistics

For each mode, separately: games played, percentage of words found, current streak and best streak, and the spread of wins by number of tries. In word of the day, the streak counts the consecutive days you found the word.

## Data and sync

Your daily game, your free game, your streaks and your statistics are stored by NeoDex, backed up and synced between your PCs when sync is on. On first launch, the plugin picks up what you already had in NeoDex.

Words: Lexique 3.83 (lexique.org, CC BY-SA 4.0 licence).

## Install

In NeoDex: **NeoStore → Discover → Mot du jour → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
