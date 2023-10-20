import Pixel from "@/components/Pixel";
import Div from "@/components/Div";

export default function PokedexEdge ({bottom}:any) {

	let arr:any = [];
	for (let i = 0; i < 14; i++) {
		arr.push(<Pixel key={i} red brown h={10} w={1}/>)
	}

	for (let i = 19; i ; i--) {
		arr.push(<Pixel key={-i} red brown h={(i / 2)}  w={1}/>)
	}


	return (
		<Pixel invisible h={14} w={45}>
			<Div fill align_bottom={bottom}  >
				{arr}
			</Div>

		</Pixel>

	)
}
