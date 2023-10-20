
import capitalize from "@/lib/capitalize";
import { GLOBALS } from "@/settings";
import Div from "@/components/Div";

export default function PokemonMainScreen({pokemon}:{pokemon:Pokemon}) {
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


	function PokemonID () {
		return (
			<Div center>
				<p style={{padding : GLOBALS.CONSTANT / 20 + GLOBALS.UNIT}}>
					#{pokemon.id}
				</p>
			</Div>
		)
	}


	return (
		<Div column center fill>
			<PokemonName/>
			<PokemonImage/>
			<PokemonID/>
		</Div>
	)
}

