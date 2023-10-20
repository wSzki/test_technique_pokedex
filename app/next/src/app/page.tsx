
import {createApolloClient} from "@/lib/GraphQLProvider"
import {get_all_pokemons}   from '@/graphQL'
import HomeClient           from "./client.page"


export default async function Home() {
	const all_pokemons : Pokemon[] = await getAllPokemons()
	return <HomeClient all_pokemons={all_pokemons}/>
}

async function getAllPokemons() {
	const apolloClient = createApolloClient();
	const { data } = await apolloClient.query({
		query: get_all_pokemons,
	});

	const pokemon = data.pokemon_v2_pokemonspecies;
	const all_pokemons : Pokemon[] = pokemon.map((pokemon:any) => {
		const pokemon_obj : Pokemon = {
			id          : pokemon.id,
			name        : pokemon.name,
		}
		return pokemon_obj;
	})

	const  all_pokemons_sorted = all_pokemons.sort((a, b) => a.id - b.id);
	return all_pokemons_sorted;
}
