import Div from "@/components/Div"
import Pixel from "@/components/Pixel"

export default function PixelCircle ({x, y}:any) {
	return (
		<>
			<Div fill absolute padding_left={x - 0.5} padding_top={y + 0.5}>
				<Div center >
					<Pixel brown w={1} h={4}/>
					<Pixel brown w={1} h={5}/>
					<Pixel brown w={1} h={5}/>
					<Pixel brown w={1} h={5}/>
					<Pixel brown w={1} h={4}/>
				</Div>
			</Div>
			<Div fill absolute padding_left={x} padding_top={y}>
				<Div center >
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
