"use client"
import Div                       from '@/components/Div'
import Pixel                     from '@/components/Pixel'
import Link from 'next/link';

import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import { useGlobalContext } from "@/context/GlobalContext";
import { GLOBALS } from '@/settings'
const styleProps= GLOBALS.WHITELISTED_PROPS


function Edge ({children}:any) {

	let arr:any = [];
	for (let i = 0; i < 14; i++) {
		arr.push(<Pixel key={i} red brown h={10} w={1}/>
				)
	}

	for (let i = 19; i ; i--) {
		arr.push(<Pixel key={-i} red brown h={(i / 2)}  w={1}/>
				)
	}


	return (
		<Pixel yellow h={14} w={45}>
			<Div fill align_bottom  >
				{arr}
			</Div>

		</Pixel>

	)
}

function PokedexDescriptionScreen ({children}:any) {
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
				<Pixel green h={11} w={35}>
					<div style={{color:"white"}}>
						{Object.keys(c.description).length && c.description}
					</div>
				</Pixel>
			</Div>
		</Div>
	)
}

function PokedexButtons ({children}:any) {

	function Button ({src, text, href}:any) {
		return (
			<>
				<Pixel red h={8} w={1}/>
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
			<Link style={{display:"flex"}} href="/favourites">
				<Button	src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fpixel-hearts-png-11.png&f=1&nofb=1&ipt=1c51b25fe7595ea98563a76481ef1e1362c7fc6b78320e71de95d5d15c5e34be&ipo=images"}/>
			</Link>
			<Button text="-1"/>
			<Button text="10"/>
			<Button text="+1"/>


		</Div>
	)
}

function PokemonWidthHeight () {
	const c:any = useGlobalContext();
	return (
		<Pixel red h={6} w={35}>
			<Div>
				<Pixel brown h={5} w={1}/>
				<Pixel green h={6} w={18}>
					{Object.keys(c.weight).length && c.weight}
				</Pixel>
				<Pixel red h={6} w={3}/>
				<Pixel brown h={5} w={1}/>
				<Pixel green h={6} w={18}>
					{Object.keys(c.height).length && c.height}
				</Pixel>
			</Div>
		</Pixel>
	)
}

function PokemonTypes () {
	const c:any = useGlobalContext();

	return (
		<Pixel red h={6} w={35}>
			<Div>
				<Pixel dark red h={6} w={1}/>
				<Pixel yellow  h={6} w={24}>
					{Object.keys(c.types).length && c.types}
				</Pixel>
			</Div>
		</Pixel>
	)
}


export default function PokedexMain ({children}:any) {
	return (
		<StyleSheetManager shouldForwardProp={propertyName => isPropValid(propertyName) && !styleProps.includes(propertyName)}>
			<Div column>
				<Edge/>

				<Pixel red h={60} w={45}>
					<Div column center>

						<Pixel red h={8} w={35}/>
						<PokedexDescriptionScreen/>

						<Pixel red h={3} w={35}/>
						<PokedexButtons/>

						<Pixel red h={6} w={35}/>
						<PokemonTypes/>

						<Pixel red h={6} w={35}/>
						<PokemonWidthHeight/>

					</Div>

				</Pixel>






			</Div>

			<Div column>
				<Pixel yellow h={14} w={1}/>
				<Pixel h={1} w={1}/>
				<Pixel dark red h={33} w={1}/>
				<Pixel red h={1} w={1}/>
				<Pixel dark red h={13} w={1}/>
				<Pixel red h={1} w={1}/>
				<Pixel dark red h={7} w={1}/>
			</Div>
		</StyleSheetManager>
	)
}
