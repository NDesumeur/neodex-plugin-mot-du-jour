# Mot du jour

Un jeu de mots : trouve un mot français en 6 essais. La première lettre est donnée, la longueur change chaque jour (de 5 à 8 lettres), et le même mot est proposé à tout le monde. Une partie libre permet de jouer autant de mots que tu veux.

*English version: [README.en.md](README.en.md)*

## Comment jouer

- Tape un mot de la bonne longueur au clavier, ou avec le clavier à l'écran, puis valide avec **Entrée**. **Retour arrière** efface une lettre.
- Le mot tapé doit exister dans le dictionnaire (toutes les formes comptent : pluriels, féminins, conjugaisons). Sinon il est refusé sans coûter d'essai.
- Les accents ne comptent pas : « ELEVE » vaut « élève ».

Après chaque essai, chaque lettre prend une couleur :

- **carré vert** : la lettre est dans le mot, à cette place ;
- **rond jaune** : la lettre est dans le mot, mais ailleurs ;
- **gris** : elle n'y est pas (ou plus : une lettre double n'est comptée qu'autant de fois qu'elle apparaît dans le mot).

Le clavier à l'écran garde ces couleurs pour t'aider. Au bout de 6 essais ratés, le mot est dévoilé.

## Les modes

- **Mot du jour** : un mot par jour, le même pour tout le monde ; le nouveau arrive à minuit. Ta partie du jour est gardée si tu fermes NeoDex.
- **Libre · 5, 6, 7 ou 8 lettres** : des mots au hasard de la longueur choisie. **Nouveau mot** en tire un autre (abandonner une partie en cours compte comme une défaite).

## Partager

Une fois la partie finie, **Partager** copie ta grille de couleurs, sans les lettres, pour la coller où tu veux sans dévoiler le mot.

## Statistiques

Pour chaque mode, séparément : parties jouées, pourcentage de mots trouvés, série en cours et meilleure série, et la répartition des victoires selon le nombre d'essais. En mot du jour, la série compte les jours de suite où tu as trouvé le mot.

## Données et synchronisation

Ta partie du jour, ta partie libre, tes séries et tes statistiques sont enregistrées par NeoDex, sauvegardées et synchronisées entre tes PC si la synchro est activée. Au premier lancement, le plugin reprend ce que tu avais déjà dans NeoDex.

Mots : Lexique 3.83 (lexique.org, licence CC BY-SA 4.0).

## Installer

Dans NeoDex : **NeoStore → À découvrir → Mot du jour → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
