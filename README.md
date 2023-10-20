

## Hello

This repository contains a front-end React webapp - a Pokedex.
With this project, I've taken the opportunity to learn about graphQL and the NextJS `app` router.

I've tried to use styled-components the best way I could, but it appears that it does go along very well with NextJS SSR/SSG.

Initially there was no deadline on this project but I've been asked to send an MVP ASAP, \
so please excuse the non formatted code, lingering `console.logs()`, ununsed files/functions and bugs.


## Live Demo
A running demo can be seen [here](https://wszki-pokedex.vercel.app/).


## Build and run

#### Dependencies
`make`\
`docker`\
`docker-compose`

The deployment of this app has only been tested on Linux NixOS 23.05


#### Building the app
```
git clone https://github.com/wSzki/test_technique_pokedex
cd test_technique_pokedex
make
```
The app is set to run on `port 9999`.

http://localhost:9999

If your port 9999 is not available, you can change it by modifying the `NEXT_PORT`
in `/Makefile` to `NEXT_PORT = YOUR_PORT:9999`

#### Rebuild and run the app
```
make re
```

#### Build and run the app in production mode (`NODE_ENV=production`)
```
make re -e PROD=1
```

#### Shutdown the app
```
make down
```
Remember to explicitly kill the container as it is kept running in the background

#### Removing the containers and the downloaded docker images
```
make clean
```

---

## Assignment

```
Test technique Front-end Bealy
Vous allez de voir réaliser une application React qui répertorie tous les
Pokémon.

Notions à utiliser :
-[✅] React.js
-[✅] Styled-Component
-[✅] PokeAPI (https://pokeapi.co/docs/v2)

Voici les fonctionnalités que votre app doit avoir :
• [✅] Page d’accueil avec tous les Pokémon (au minimum nom + image)
• [✅] Avoir une pagination sur la page d’accueil (afficher 10 Pokémon par page)
• [✅] Quand on clique sur un Pokémon, on doit avoir accès à toute ses informations
• [✅] Une recherche de Pokémon
• [✅] Votre app doit être responsive (minimum desktop + mobile)
```
