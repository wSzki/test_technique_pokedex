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


function PokemonInfo ({pokemon}:{pokemon:Pokemon}) {
	return (
		<Div column center fill>
			<p style={{fontSize:0.9 * GLOBALS.CONSTANT + GLOBALS.UNIT}}  >Height : {pokemon.height}"</p>
			<p style={{fontSize:0.9 * GLOBALS.CONSTANT + GLOBALS.UNIT}}  >Weight : {pokemon.weight} lbs.</p>
		</Div>
	)
}

export default function ContextHandler({pokemon}: {pokemon:Pokemon}) {
	const c:any = useGlobalContext();
	useEffect(() => {
		c.set_main_screen_content (<PokemonMainScreen  pokemon={pokemon}/>)
		c.set_main_info_content   (<PokemonInfo        pokemon={pokemon}/>)
		c.set_description         (<PokemonDescription pokemon={pokemon}/>)
		c.set_types               (<PokemonTypes       pokemon={pokemon}/>)
		c.set_weight              (<PokemonWeight      pokemon={pokemon}/>)
		c.set_height              (<PokemonHeight      pokemon={pokemon}/>)
	}, [pokemon]);

	return <></>
}
