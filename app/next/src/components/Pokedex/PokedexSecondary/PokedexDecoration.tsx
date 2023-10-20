import Div from "@/components/Div"
import Pixel from "@/components/Pixel"

export default function PokedexDecoration () {
	return (
		<Div column>
			<Pixel invisible h={14} w={1}/>
			<Pixel           h={1}  w={1}/>
			<Pixel dark red  h={33} w={1}/>
			<Pixel invisible h={1}  w={1}/>
			<Pixel dark red  h={13} w={1}/>
			<Pixel invisible h={1}  w={1}/>
			<Pixel dark red  h={7}  w={1}/>
		</Div>
	)
}
