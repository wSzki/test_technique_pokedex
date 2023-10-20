
"use client";
import {useGlobalContext} from "@/context/GlobalContext";
import { GLOBALS } from "@/settings";
import Div from "@/components/Div";


function PokemonImage ({pokemons, id}:any) {
	const c:any = useGlobalContext();
	if (c.selected >= pokemons.length)
		return <></>
	if (!pokemons[id])
		return <></>
	if (c.selected === id) {
			c.set_current_pokemon_id(pokemons[id].id)
			c.set_current_pokemon_name(pokemons[id].name)
	}

	return (
		<img
			style={{
				backgroundColor: c.selected === id ? "#fabd2f" : "transparent",
				borderRadius:"10px",
				objectFit: "cover",
				imageRendering: "pixelated",
				width: 7 * GLOBALS.CONSTANT + GLOBALS.UNIT,
				height: 7 * GLOBALS.CONSTANT + GLOBALS.UNIT,
			}}
			src={pokemons[id].sprite}
			alt=""
		/>
	)
}


export default function PokemonMainScreen({pokemons, show}:any, ) {

	const c:any = useGlobalContext();
	const offset = c.offset * c.pagination


	let array:any = [];
	for (let i = 0 + offset; i < c.pagination + offset; i++) {
		array.push(
			<Div column center >
				<PokemonImage pokemons={pokemons} id={i}/>
			</Div>
		)
	}


	return (
		<div style={{
			display:"flex",
			flexWrap:"wrap",
			width:"100%",
			height:"100%",
			justifyContent:"center",
			}}>
			{array}
		</div>
	)
}

