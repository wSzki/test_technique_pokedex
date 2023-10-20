
"use client"
import Link       from "next/link"
import {Suspense} from "react"
import {GLOBALS}  from "@/settings"
import capitalize from "@/lib/capitalize"
import styled     from 'styled-components';

const FrameHomePage = styled.div`
display         : flex;
flex-wrap       : wrap;
justify-content : center;
overflow-y      : scroll;
padding-right   : 15px;
`;

const P10px = styled.p`
font-size     : 10px;
padding-right : 10px;
padding-left  : 10px;
`;

const Img = styled.img`
width           : 100%;
object-fit      : cover;
image-rendering : pixelated;
`;

const Card = styled.div`
background-color  : #ececec;
margin            : 1vw;
width			  : 10vw;
max-width		  : 200px;
min-width		  : 150px;
box-shadow        : rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius     : 10px;
`;

const CardHeader = styled.div`
display         : flex;
flex-direction  : column;
justify-content : center;
align-items     : center;
`;

export default function HomeClient({all_pokemons}:any) {

	const pokemon_list = all_pokemons.map((pokemon:Pokemon) => {
		return (
			<Link href={"/"+pokemon.name} key={pokemon.id}>
				<Card>
					<CardHeader>
						<P10px>#{pokemon.id}             </P10px>
						<P10px>{capitalize(pokemon.name)}</P10px>
					</CardHeader>

					<Img
						loading = "lazy"
						src     = {GLOBALS.IMAGE_SRC+pokemon.id+".png"}
						alt     = ""
					/>
				</Card>
			</Link>
		)
	})

	return (
		<Suspense fallback={<p>Loading ...</p>}>
			<FrameHomePage>
				{pokemon_list}
			</FrameHomePage>
		</Suspense>
	)
}
