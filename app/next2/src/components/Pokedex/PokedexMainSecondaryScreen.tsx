import Div from "@/components/Div"
import Pixel from "@/components/Pixel"

export default function PokedexMainSecondayScreen ({children}:any) {
	return (
		<Div fill column absolute padding_left={9} padding_top={61}>
			<Pixel blue w={18} h={8}/>
			<Div>

				<Pixel dark red    w={1}  h={1}/>
				<Pixel dark blue   w={1}  h={1}/>
				<Pixel dark yellow w={1}  h={1}/>
				<Pixel dark blue   w={1}  h={1}/>
				<Pixel dark yellow w={13} h={1}/>
			</Div>
		</Div>
	)
}
