import Div from "@/components/Div"
import Pixel from "@/components/Pixel"

export default function PixelCircle ({children}:any) {
	return (
		<>
		<Div fill absolute padding_left={3} padding_top={36}>
			<Div center style={{alignItems:"center"}}>
			<Pixel brown w={1} h={4}/>
			<Pixel brown w={1} h={5}/>
			<Pixel brown w={1} h={5}/>
			<Pixel brown w={1} h={5}/>
			<Pixel brown w={1} h={4}/>
			</Div>
		</Div>
		<Div fill absolute padding_left={4} padding_top={35}>
			<Div center style={{alignItems:"center"}}>
			<Pixel dark red w={1} h={4}/>
			<Pixel dark red w={1} h={5}/>
			<Pixel dark red w={1} h={5}/>
			<Pixel dark red w={1} h={5}/>
			<Pixel dark red w={1} h={4}/>
			</Div>
		</Div>
		</>
	)
}
