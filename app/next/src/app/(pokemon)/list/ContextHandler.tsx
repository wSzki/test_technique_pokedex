"use client";

import {useEffect}        from "react";

import {useGlobalContext} from "@/context/GlobalContext";
import {GLOBALS}          from "@/settings";
import Div                from "@/components/Div";

import PokemonMainScreen  from "./components/PokemonMainScreen";
import PokemonDescription from "./components/PokemonDescription";
import PokemonTypes       from "./components/PokemonTypes";
import PokemonWeight      from "./components/PokemonWeight";
import PokemonHeight      from "./components/PokemonHeight";


function PokemonInfo ({str}:any) {
	const c:any = useGlobalContext();

	return (
		<Div column center fill>
			<p style={{fontSize:1.5 * GLOBALS.CONSTANT + GLOBALS.UNIT}}  > {str} </p>
		</Div>
	)
}

export default function ContextHandler({pokemons}: {pokemons:Pokemon[]}) {

	const c:any = useGlobalContext();




	useEffect(() => {
		c.set_main_screen_content (<PokemonMainScreen pokemons={pokemons} show={5}/>)
		c.set_main_info_content   (<PokemonInfo       str={"#" + c.current_pokemon_id}/>)
		c.set_description         (<PokemonInfo       str={"NAME : " + c.current_pokemon_name.toUpperCase()}/>)
		c.set_types               (<PokemonInfo       str={"---"}/>)
		c.set_weight              (<PokemonInfo       str={"---"}/>)
		c.set_height              (<PokemonInfo       str={"---"}/>)
	}, [pokemons, c.current_pokemon_id, c.current_pokemon_name]);

	return <></>
}

