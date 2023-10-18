
import Div from "@/components/Div"
import Pixel from "@/components/Pixel"

function PokedexMainScreenCorners ({children}:any) {
	function BottomLeft () {


		let len = 6;
		let array : any = [];
		while (len-- > 1)
			array.push(
				<Div key={len} column>
					<Pixel red dark/>
					<Pixel red h={len}/>
				</Div>
			)

			return (
				<Div absolute bottom left align_bottom>
					{array}
					<Div column>
						<Pixel />
					</Div>
				</Div>
			)
	}

	function TopLeft() {
		return (
			<Div absolute top left>
				<Pixel red dark/>
			</Div>
		)
	}

	function TopRight ({children}:any) {
		return (
			<Div absolute top right>
				<Pixel red/>
			</Div>
		)
	}

	function BottomRight ({children}:any) {
		return (
			<Div absolute bottom right>
				<Div column>
					<Pixel />
					<Pixel red/>
				</Div>
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

export default function PokedexMainScreen ({children}:any) {
	return (
		<Div fill absolute padding_left={4} padding_top={15}>
			<Div fill>
				<Pixel  yellow w={38}    h={35}>
					<PokedexMainScreenCorners/>
				</Pixel>
			</Div>
		</Div>
	)
}
