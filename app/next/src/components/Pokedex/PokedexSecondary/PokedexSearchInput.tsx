
import {useRouter}        from 'next/navigation'
import {useGlobalContext} from "@/context/GlobalContext";
import Div                from "@/components/Div";
import Pixel              from "@/components/Pixel";

export default function PokedexSearchInput () {
	const c:any = useGlobalContext();
	const router = useRouter();
	return (
		<Div column>
			<Div>
				<Pixel brown h={4} w={1}/>
				<Pixel className={'broken-screen'} green h={4} w={35}>
					<div style={{color:"white", display:"flex", width:"100%", height:"100%"}}>
						<input
							onFocusCapture = {()=>router.push("/list")}
							onChange       = {(e)=>c.set_search(e.target.value)}
							placeholder    = 'Search'
							style          = {{width:"100%"}}
						/>
					</div>
				</Pixel>
			</Div>
		</Div>
	)
}
