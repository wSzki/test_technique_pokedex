
import Div from "@/components/Div"
import Pixel from "@/components/Pixel"

export default function PokedexMainCorners ({children}:any) {

	function BottomLeft () {
		return (
			<Div absolute bottom left align_bottom>
				<Div column>
					<Pixel red dark h={2}/>
					<Pixel yellow/>
				</Div>
				<Pixel red dark h={4}/>
				<Pixel red dark h={2}/>
				<Pixel red dark h={1}/>
				<Pixel red dark h={1}/>
			</Div>
		)
	}

	function TopLeft() {
		return (
			<Div absolute top left>
				<Div column>
					<Pixel yellow/>
					<Pixel red dark/>
				</Div>
				<Pixel h={1}/>
				<Pixel red dark h={1}/>
			</Div>
		)
	}

	function TopRight ({children}:any) {
		return (
			<Div absolute top right>
				<Pixel/>
			</Div>
		)
	}

	function BottomRight ({children}:any) {
		return (
			<Div absolute bottom right>
				<Div column>
					<Pixel red/>
					<Pixel red dark/>
				</Div>
				<Pixel red dark/>
			</Div>
		)
	}

	return (
		<Div fill absolute>
			<BottomLeft/>
			<TopLeft/>
			<TopRight/>
			<BottomRight/>
		</Div>
	)
}

