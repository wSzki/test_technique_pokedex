"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import { useEffect } from "react";
import { GLOBALS } from "@/settings";
import Div from "@/components/Div";


function capitalize (str:string) {   return str[0].toUpperCase() + str.slice(1); }

// =============================================================================
// ---------------------------- MAIN SCREEN CONTENT ----------------------------
// =============================================================================

function PokemonMainScreen({pokemon}:any) {
	const name = capitalize(pokemon.name);

	function PokemonName () {
		return (
			<Div center>
				<p style={{padding : GLOBALS.CONSTANT / 2 + GLOBALS.UNIT}}>
					{name}
				</p>
			</Div>
		)
	}

	function PokemonImage () {
		return (
			<img
				style={{
					objectFit: "cover",
					imageRendering: "pixelated",
					width:"100%",
					height:"100%"
				}}
				src={pokemon.sprite}
				alt=""
			/>
		)
	}


	function PokemonTypes () {
		return (
			<Div center>
				<p style={{padding : GLOBALS.CONSTANT / 20 + GLOBALS.UNIT}}>
					#{pokemon.id}
				</p>
				{/*{pokemon.types.map((type:string) => {*/}
				{/*return (*/}
				{/*<p key={type} style = {{paddingLeft: GLOBALS.CONSTANT / 2 + GLOBALS.UNIT}}>*/}
				{/*{(capitalize(type))}*/}
				{/*</p>*/}
				{/*)*/}
				{/*})}*/}
			</Div>
		)
	}


	return (
		<Div column center fill>
			<PokemonName/>
			<PokemonImage/>
			<PokemonTypes/>
		</Div>
	)
}


// =============================================================================
// ----------------------- MAIN SECONDARY SCREEN CONTENT -----------------------
// =============================================================================

function PokemonInfo ({pokemon}:any) {
	return (
		<Div column center fill>
			<p style={{fontSize:0.9 * GLOBALS.CONSTANT + GLOBALS.UNIT}}  >Height : {pokemon.height}"</p>
			<p style={{fontSize:0.9 * GLOBALS.CONSTANT + GLOBALS.UNIT}}  >Weight : {pokemon.weight} lbs.</p>
		</Div>
	)
}

function PokemonDescription ({pokemon}:any) {
	return (
		<Div column center fill>
			<p style={{
				fontSize: GLOBALS.CONSTANT + GLOBALS.UNIT,
				padding: GLOBALS.CONSTANT + GLOBALS.UNIT,
				}}  >{pokemon.description}</p>
		</Div>
	)
}

function PokemonTypes ({pokemon}:any) {
	return (
		<>
			<Div center fill>
				{pokemon.types.map((type:string) => {
					return (
						<p key={type} style = {{
							fontSize: GLOBALS.CONSTANT + GLOBALS.UNIT,
							padding: GLOBALS.CONSTANT + GLOBALS.UNIT,
							}}>
							{(capitalize(type))}
						</p>
					)
				})}
			</Div>
		</>
	)
}

function PokemonWeight({pokemon}:any) {
	return (
		<Div center fill>
			<p style={{
				color: "white",
				fontSize: GLOBALS.CONSTANT + GLOBALS.UNIT,
				padding: GLOBALS.CONSTANT + GLOBALS.UNIT,
				}}  >

				WEIGHT {pokemon.weight/10} kg </p>
		</Div>
	)
}

function PokemonHeight({pokemon}:any) {
	return (
		<Div column center fill>
			<p style={{
				color: "white",
				fontSize: GLOBALS.CONSTANT + GLOBALS.UNIT,
				padding: GLOBALS.CONSTANT + GLOBALS.UNIT,
				}}  > HEIGHT {pokemon.height * 10} cm</p>
		</Div>
	)
}

// =============================================================================
// ----------------------------------- MAIN ------------------------------------
// =============================================================================

export default function ContextHandler({pokemon}:any) {
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
