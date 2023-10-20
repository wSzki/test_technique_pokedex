"use client"
import Div                       from '@/components/Div'
import Pixel                     from '@/components/Pixel'
import Link from 'next/link';

import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import PokedexButtons from './components/PokedexButtons';

import { useGlobalContext } from "@/context/GlobalContext";
import { GLOBALS } from '@/settings'
import { useRouter } from 'next/navigation'
import styled from 'styled-components';

const styleProps= GLOBALS.WHITELISTED_PROPS


function Edge ({bottom}:any) {

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
		<Pixel invisible h={14} w={45}>
			<Div fill align_bottom={bottom}  >
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
				<Pixel className={'broken-screen'} green h={11} w={35}>
					<div style={{color:"white"}}>
						{c.description && c.description}
					</div>
				</Pixel>
			</Div>
		</Div>
	)
}

function PokedexSearchInput ({children}:any) {
	const c:any = useGlobalContext();
	const router = useRouter();
	return (
		<Div column>
			<Div>
				<Pixel brown h={4} w={1}/>
				<Pixel className={'broken-screen'} green h={4} w={35}>
					<div style={{color:"white", display:"flex", width:"100%", height:"100%"}}>
						<input onFocusCapture={()=>router.push("/list")} onChange={(e)=>c.set_search(e.target.value)} placeholder='Search' style={{width:"100%"}}/>
					</div>
				</Pixel>
			</Div>
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

function PokemonTypes () {
	const c:any = useGlobalContext();

	return (
		<Pixel red h={6} w={35}>
			<Div>
				<Pixel dark red h={6} w={1}/>
				<Pixel yellow  h={6} w={24}>
					{c.types && c.types}
				</Pixel>
			</Div>
		</Pixel>
	)
}

const MediaQueryWrapperTop = styled.div`
display: flex;
@media (max-width: 868px) {
	display: none;
}
`;

const MediaQueryWrapperBottom = styled.div`
display: none;
@media (max-width: 868px) {
	display: flex;
}
`;


export default function PokedexMain ({children}:any) {
	return (
		<StyleSheetManager shouldForwardProp={propertyName => isPropValid(propertyName) && !styleProps.includes(propertyName)}>
			<Div column>
				<MediaQueryWrapperTop><Edge bottom={true}/></MediaQueryWrapperTop>

				<Pixel red h={60} w={45}>
					<Div column center>
						<Pixel red h={3} w={35}/>
						<PokedexSearchInput/>

						<Pixel red h={2} w={35}/>
						<PokedexDescriptionScreen/>

						<Pixel red h={3} w={35}/>
						<PokedexButtons/>

						<Pixel red h={6} w={35}/>
						<PokemonTypes/>

						<Pixel red h={6} w={35}/>
						<PokemonWidthHeight/>

					</Div>

				</Pixel>

				<MediaQueryWrapperBottom><Edge /></MediaQueryWrapperBottom>





			</Div>
			<MediaQueryWrapperTop>
				<Div column>
				<Pixel invisible h={14} w={1}/>
				<Pixel h={1} w={1}/>
				<Pixel dark red h={33} w={1}/>
				<Pixel invisible h={1} w={1}/>
				<Pixel dark red h={13} w={1}/>
				<Pixel invisible h={1} w={1}/>
				<Pixel dark red h={7} w={1}/>
			</Div>
		</MediaQueryWrapperTop>
		</StyleSheetManager>
	)
}
