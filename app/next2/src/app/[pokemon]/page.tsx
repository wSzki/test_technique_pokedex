
import { createApolloClient } from "@/lib/GraphQLProvider"
import {simple, variable_test, get_pokemon_by_name} from '@/graphQL/simple'
import ContextHandler from "./ContextHandler"

export default async function Page({ params }: { params: { pokemon: string } }) {
	const pokemon = await getPokemonByName(params.pokemon)

	const types = pokemon.types.map((type:any) => {
		return <p>{type}</p>
	})

	return (
		<div>
			<ContextHandler pokemon={pokemon}/>
			{/*<p>{pokemon.name}</p>*/}
			{/*<p>{pokemon.weight}</p>*/}
			{/*<p>{pokemon.height}</p>*/}
			{/*<p>{pokemon.description}</p>*/}
			{/*<div>{types}</div>*/}
			{/*<img src={pokemon.sprite} alt="" />*/}
		</div>
	)
}

export async function generateStaticParams() {
	const apolloClient = createApolloClient();
	const { data } = await apolloClient.query({
		query: simple,
		variables: { limit: 9999999 }
	});
	const pokemons = (data.gen3_species);

	return pokemons.map((pokemon:any) => ({
		pokemon: pokemon.name,
	}))
}

async function getPokemonByName(pokemon_name : string) {
	const apolloClient = createApolloClient();
	const { data } = await apolloClient.query({
		query: get_pokemon_by_name,
		variables: { pokemonName : pokemon_name}
	});
	const pokemon     = data.pokemon_v2_pokemonspecies[0];
	const info        = pokemon.pokemon_v2_pokemons[0];
	const types       = info.pokemon_v2_pokemontypes;
	const all_sprites = JSON.parse(info.pokemon_v2_pokemonsprites[0].sprites);
	const sprite      = all_sprites.front_default;
	const type_array  = types.map((type:any) => {return type.pokemon_v2_type.name});
	const description = pokemon.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text
	const result      = {
		id    : info.id,
		name : pokemon.name,
		height : info.height,
		weight : info.weight,
		types : type_array,
		description : description,
		sprite : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+info.id+".png"
	}

	return result;
}
