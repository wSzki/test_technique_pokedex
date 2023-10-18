
import Div from "@/components/Div"
import Pixel from "@/components/Pixel"

export default function PokedexMainControl ({children}:any) {
	return (
		<Div fill absolute padding_left={32} padding_top={57}>

			<Div absolute column fill>
				<Div padding_left={3} padding_top={1} >
					<Pixel brown w={2} h={3}/>
					<Pixel brown w={2} h={3}/>
				</Div>
				<Div>
					<Pixel brown w={3} h={3}/>
					<Pixel brown w={3} h={3}/>
					<Pixel brown w={3} h={3}/>
				</Div>
				<Div>
					<Pixel red   w={3} h={3}/>
					<Pixel brown w={2} h={3}/>
					<Pixel brown w={1} h={3}/>
				</Div>
			</Div>

			<Div absolute column fill>
				<Div padding_left={4}><Pixel dark red  w={3} h={3}/></Div>
				<Div padding_left={1}>
					<Pixel dark red w={3} h={3}/>
					<Pixel dark red w={3} h={3}/>
					<Pixel dark red w={3} h={3}/>
				</Div>
				<Div padding_left={4}><Pixel dark red  w={3} h={3}/></Div>
			</Div>
		</Div>

	)
}
