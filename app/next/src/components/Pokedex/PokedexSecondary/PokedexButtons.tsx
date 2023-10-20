"use client"

import Div from "@/components/Div"
import Pixel from "@/components/Pixel"
import Link from "next/link"
import { useGlobalContext } from "@/context/GlobalContext";

export default function PokedexButtons ({children}:any) {
	const c:any = useGlobalContext();

	function Button ({src, text, href, onClick}:any) {
		return (
			<>
				<Pixel onClick={()=>{}} red h={8} w={1}/>
				<Div column >
					<Pixel dark red h={8} w={8.5}>
						<Div absolute right>
							<Pixel blue h={8} w={8}>
								{src &&	<img style={{width:"93%", height:"100%"}} src={src}/>}
								<Div fill center>
									{text && <p style={{color:"white"}}>{text}</p>}
								</Div>
							</Pixel>
						</Div>
					</Pixel>
				</Div>
			</>
		)
	}


	return (
		<Div>
			<Link onClick={()=>{window.alert("Not implemented yet")}}style={{display:"flex"}} href="/favourites">
				<Button	src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fpixel-hearts-png-11.png&f=1&nofb=1&ipt=1c51b25fe7595ea98563a76481ef1e1362c7fc6b78320e71de95d5d15c5e34be&ipo=images"}/>
			</Link>
			<div style={{display:"flex"}}onClick={()=>{
				if (c.pagination > 2){
					c.set_pagination(c.pagination - 1)
					c.set_selected((c.offset) * (c.pagination - 1) )
				}
			}}>
				<Button  text="-1"/>
			</div>
			<div style={{display:"flex"}} onClick={()=>{c.set_pagination(10)}} >
				<Button  text="10"/>
			</div>
			<div style={{display:"flex"}}onClick={()=>{
				if (c.pagination < 20) {
					c.set_pagination(c.pagination + 1)}
					c.set_selected((c.offset) * (c.pagination + 1) )
			}}>
				<Button  text="+1"/>
			</div>


		</Div>
	)
}


