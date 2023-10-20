import { useGlobalContext } from "@/context/GlobalContext";
import Div from "@/components/Div";
import Pixel from "@/components/Pixel";

export default function PokemonTypes () {
	const c:any = useGlobalContext();

	return (
		<Pixel red h={6} w={35}>
			<Div>
				<Pixel dark red h={6} w={1}/>
				<Pixel yellow   h={6} w={24}>
					{c.types && c.types}
				</Pixel>
			</Div>
		</Pixel>
	)
}
