import Div from "@/components/Div"
import { GLOBALS } from "@/settings"

export default function PokemonHeight({pokemon}:{pokemon:Pokemon}) {
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
