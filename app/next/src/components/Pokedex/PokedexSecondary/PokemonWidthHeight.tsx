import { useGlobalContext } from "@/context/GlobalContext";
import Div from "@/components/Div";
import Pixel from "@/components/Pixel";

export default function PokemonWidthHeight () {
	const c:any = useGlobalContext();
	return (
		<Pixel red h={6} w={35}>
			<Div>
				<Pixel brown h={5} w={1}/>
				<Pixel green h={6} w={18}>
					{c.weight && c.weight}
				</Pixel>
				<Pixel red h={6} w={3}/>
				<Pixel brown h={5} w={1}/>
				<Pixel green h={6} w={18}>
					{c.height && c.height}
				</Pixel>
			</Div>
		</Pixel>
	)
}
