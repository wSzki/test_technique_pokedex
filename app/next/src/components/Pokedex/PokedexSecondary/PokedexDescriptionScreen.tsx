import { useGlobalContext } from "@/context/GlobalContext";
import Div from "@/components/Div";
import Pixel from "@/components/Pixel";

export default function PokedexDescriptionScreen () {
	const c:any = useGlobalContext();
	return (
		<Div column>
			<Div>
				<Pixel red h={1} w={1}/>
				<Pixel dark red h={1} w={33}/>
				<Pixel red h={1} w={1}/>
			</Div>
			<Div>
				<Pixel brown h={11} w={1}/>
				<Pixel className={'broken-screen'} green h={11} w={35}>
					<div style={{color:"white"}}>
						{c.description && c.description}
					</div>
				</Pixel>
			</Div>
		</Div>
	)
}

