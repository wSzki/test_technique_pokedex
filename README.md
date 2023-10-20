

## Hello

This repository contains a front-end React webapp - a Pokedex.

With this project, I've taken the opportunity to learn about graphQL and the NextJS `app` router.

I've tried to use styled-components the best way I could, but it appears that it does not work very well with `NextJS SSR/SSG` - perhaps I've missed something.

The layout is an experiment around building a structure with a single `<Pixel/>` component, but in indsight I probably should have sticked to `flex`

Initially there was no deadline on this project but I've been asked to send an MVP ASAP, \
so please excuse the non formatted code, lingering `console.logs()`, ununsed files/functions and bugs.

I tried to use a little dependencies as possible.

This app buildd in `production` mode by default.\
Use `make re -e PROD=0` to launch in dev mode, or edit the Makefile

## Live Demo
A running demo can be seen [here](https://test-technique-pokedex.vercel.app/).

![poke](https://github.com/wSzki/test_technique_pokedex/assets/59784520/88c02028-42c4-4c4b-828a-ac7c50c95343)


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

#### Build and run the app in dev mode (`NODE_ENV=dev`)
```
make re -e PROD=0
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
```
```
Voici les fonctionnalités que votre app doit avoir :
• [✅] Page d’accueil avec tous les Pokémon (au minimum nom + image)
```


https://github.com/wSzki/test_technique_pokedex/assets/59784520/609e06d4-f0a9-477b-90ff-e7839416a2ff



```
• [✅] Avoir une pagination sur la page d’accueil (afficher 10 Pokémon par page)
```


https://github.com/wSzki/test_technique_pokedex/assets/59784520/05bbe57b-fcc4-4825-a73b-310b5bfea0c6




```
• [✅] Quand on clique sur un Pokémon, on doit avoir accès à toute ses informations
```



https://github.com/wSzki/test_technique_pokedex/assets/59784520/ea16576f-f96b-4268-855a-9ac2eaadc24d



```
• [✅] Une recherche de Pokémon
```



https://github.com/wSzki/test_technique_pokedex/assets/59784520/5a50b9e6-02f6-4249-bfba-5683ded8ea00



```
• [✅] Votre app doit être responsive (minimum desktop + mobile)
```



https://github.com/wSzki/test_technique_pokedex/assets/59784520/c3209fe4-7f0c-418c-a0b1-d9df419ac401

# Sources 

## PokeAPI GraphQL
https://pokeapi.co/docs/graphql

## PokeAPI Spites
https://github.com/PokeAPI/sprites

## Pixelated Image thru https://www.pixelicious.xyz/
![pixelpokedex](https://github.com/wSzki/test_technique_pokedex/assets/59784520/eaa1c5c2-ab95-4991-8beb-400a491a1575)

## Original Image
[source](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd31xsmoz1lk3y3.cloudfront.net%2Fbig%2F1250871.jpg%3Fv%3D1569751436&f=1&nofb=1&ipt=6398d99cde890a9d75d302fd0529f78b89a7ca3df1a3e25e85c72c653ceffe73&ipo=images)

## Background image
[source](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp8797773.png&f=1&nofb=1&ipt=e2bf4d60e57ff070bb4402b3a66ed517e848c7ba3a2ef3e512acd8e705cd7110&ipo=images)
