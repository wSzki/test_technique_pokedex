import { GLOBALS } from "@/settings"
import Div from "@/components/Div"

export default function PokemonDescription ({pokemon}:{pokemon:Pokemon}) {
	return (
		<Div column center fill>
			<p style={{
				fontSize: GLOBALS.CONSTANT + GLOBALS.UNIT,
				padding: GLOBALS.CONSTANT + GLOBALS.UNIT,
				}}  >{pokemon.description}</p>
		</Div>
	)
}

