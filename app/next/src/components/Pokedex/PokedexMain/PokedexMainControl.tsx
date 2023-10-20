"use client"
import Div from "@/components/Div"
import Pixel from "@/components/Pixel"
import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation';
import { useGlobalContext } from "@/context/GlobalContext"




function Main ({children}:any) {
	const router = useRouter()
	const c:any = useGlobalContext();
	return (
		<>
			<Div absolute column fill>
				<Div padding_left={4}><Pixel onClick={()=>router.push("/blastoise")} dark red  w={3} h={3}/></Div>
				<Div padding_left={1}>
					<Pixel dark onClick={()=>router.push("/pikachu")} red w={3} h={3}/>
					<Pixel dark red w={3} h={3}/>
					<Pixel dark onClick={()=>router.push("/mew")} red w={3} h={3}/>
				</Div>
				<Div padding_left={4}><Pixel onClick={()=>router.push("/jigglypuff")} dark red  w={3} h={3}/></Div>
			</Div>
		</>
	)
}

function List ({children}:any) {
	const c:any = useGlobalContext();
	const router = usePathname()
	return (
		<>
			<Div absolute column fill>

				<Div padding_left={4}>
					<Pixel onClick={()=>{
						if (c.offset > 0) {
							c.set_selected((c.offset - 1) * c.pagination )
							c.set_offset(c.offset - 1)
						}
					}}	dark red  w={3} h={3}/>
				</Div>

				<Div padding_left={1}>
					<Pixel dark onClick={()=>{
						if (c.selected > 0 + c.offset * c.pagination && c.selected < c.pagination  + (c.offset * c.pagination))
							c.set_selected(c.selected-1)}
						} red w={3} h={3}/>


					<Pixel dark red w={3} h={3}/>

					<Pixel dark onClick={()=>{
						if (c.selected >= 0 + c.offset * c.pagination && c.selected < c.pagination - 1  + c.offset * c.pagination ){
							c.set_selected(c.selected+1)
						}
					}} red w={3} h={3}/>
				</Div>

				<Div padding_left={4}>
					<Pixel onClick={()=>{
						if (c.offset * c.pagination <= 1010 - c.pagination - 1){
							c.set_selected((c.offset + 1) * c.pagination )
							c.set_offset(c.offset + 1)
						}
					}} dark red  w={3} h={3}/>
				</Div>
			</Div>
		</>
	)
}





export default function PokedexMainControl ({children}:any) {
	const path = usePathname()
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
			{path !== "/list" && <Main/>}
			{path === "/list" && <List/>}

		</Div>
	)
}
