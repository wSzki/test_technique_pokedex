import { GLOBALS } from "@/settings"
import Div from "@/components/Div"
import capitalize from "@/lib/capitalize"

export default function PokemonTypes ({pokemon}:{pokemon:Pokemon}) {
	if (pokemon.types.length === 0) return (<></>)
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

