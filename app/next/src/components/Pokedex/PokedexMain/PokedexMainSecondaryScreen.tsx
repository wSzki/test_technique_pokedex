import Div from "@/components/Div"
import Pixel from "@/components/Pixel"
import { useGlobalContext } from "@/context/GlobalContext";

export default function PokedexMainSecondayScreen ({children}:any) {

	const c:any = useGlobalContext();

	return (
		<Div fill column absolute padding_left={9} padding_top={61}>
			<Pixel blue w={18} h={8}>
				{c.main_info_content && c.main_info_content}
			</Pixel>
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
