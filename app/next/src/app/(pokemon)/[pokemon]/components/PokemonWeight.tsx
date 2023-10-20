import { GLOBALS } from "@/settings"
import Div from "@/components/Div"

export default function PokemonWeight({pokemon}:{pokemon:Pokemon}) {
	return (
		<Div center fill>
			<p style={{
				color: "white",
				fontSize: GLOBALS.CONSTANT + GLOBALS.UNIT,
				padding: GLOBALS.CONSTANT + GLOBALS.UNIT,
				}}  >

				WEIGHT {pokemon.weight??1 /10} kg </p>
		</Div>
	)
}
