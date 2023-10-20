"use client";

import {useEffect}        from "react";

import {useGlobalContext} from "@/context/GlobalContext";
import {GLOBALS}          from "@/settings";
import Div                from "@/components/Div";

import PokemonMainScreen  from "./components/PokemonMainScreen";

function PokemonInfo ({str}:any) {
	return (
		<Div column center fill>
			<p style={{fontSize:1.5 * GLOBALS.CONSTANT + GLOBALS.UNIT}}>
				{str}
			</p>
		</Div>
	)
}

export default function ContextHandler({pokemons}: {pokemons:Pokemon[]}) {

	const c:any = useGlobalContext();

	useEffect(() => {
		let filtered_pokemons = pokemons;
		if (c.search.length) {
			c.set_selected(0);
			filtered_pokemons = pokemons.filter((pokemon) =>{
				return pokemon.name.toLowerCase().includes(c.search.toLowerCase())
			});
		}
		c.set_main_screen_content (<PokemonMainScreen pokemons={filtered_pokemons} show={5}/>)
		c.set_main_info_content   (<PokemonInfo       str={"#"       + c.current_pokemon_id}/>)
		c.set_description         (<PokemonInfo       str={"NAME : " + c.current_pokemon_name.toUpperCase()}/>)
		c.set_types               (<PokemonInfo       str={"---"}/>)
		c.set_weight              (<PokemonInfo       str={"---"}/>)
		c.set_height              (<PokemonInfo       str={"---"}/>)
	}, [
		pokemons,
		c.current_pokemon_id,
		c.current_pokemon_name,
		c.search,
		c.pagination,
		c.offset
	]);

	return <></>
}

