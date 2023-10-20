
import {createApolloClient}         from "@/lib/GraphQLProvider"
import {get_all_pokemons} from '@/graphQL'
import { GLOBALS } from "@/settings"
import capitalize from "@/lib/capitalize"
import Link from "next/link"
import { Suspense } from "react"

export default async function Home() {
	const all_pokemons : Pokemon[] = await getAllPokemons()

	const pokemon_list = all_pokemons.map((pokemon:Pokemon) => {
		return (
			<Link href={"/"+pokemon.name} key={pokemon.id}>
				<div style={{backgroundColor:"#ececec", margin:"1vw", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius:"10px"}} >
					<div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
						<p style={{fontSize:"10px"}}>#{pokemon.id} </p>
						<p style={{fontSize:"10px", padding:"10px"}}>{capitalize(pokemon.name)}</p>
					</div>
					<img style={{width:"100%",objectFit:"cover",imageRendering: "pixelated"}} loading="lazy" src={GLOBALS.IMAGE_SRC+pokemon.id+".png"} alt="" />
				</div>
			</Link>
		)
	})


	return (
		<Suspense fallback={<p>Loading ...</p>}>

			<div style={{
				display:"flex",
				flexWrap:"wrap",
				justifyItems:"center",
				justifyContent:"center",
				overflowY:"scroll",
				paddingRight:"15px"
			}}>{pokemon_list}</div>
		</Suspense>
	)
}

async function getAllPokemons() {
	const apolloClient = createApolloClient();
	const { data } = await apolloClient.query({
		query: get_all_pokemons,
	});
	console.log(data);

	const pokemon       = data.pokemon_v2_pokemonspecies;

	const all_pokemons : Pokemon[] = pokemon.map((pokemon:any) => {
		const pokemon_obj : Pokemon = {
			id          : pokemon.id,
			name        : pokemon.name,
		}
		return pokemon_obj;
	})

	const all_pokemons_sorted = all_pokemons.sort((a, b) => a.id - b.id);

	return all_pokemons_sorted;
}
