

import {GLOBALS}                    from "@/settings"
import {createApolloClient}         from "@/lib/GraphQLProvider"
import {simple,get_all_pokemon_with_info, get_all_pokemons} from '@/graphQL'
import ContextHandler               from "./ContextHandler"

// =============================================================================
// ----------------------------------- MAIN ------------------------------------
// =============================================================================
export default async function Page() {
	const pokemons : Pokemon[] = await getAllPokemons()
	return <ContextHandler pokemons={pokemons}/>;
}

// =============================================================================
// ------------------------------- DATA FETCHING -------------------------------
// =============================================================================
async function getAllPokemons() {

	const apolloClient = createApolloClient();

	const { data } = await apolloClient.query({
		query: get_all_pokemons,
	});

	const pokemons       = data.pokemon_v2_pokemonspecies;
	const pokemon_array : Pokemon[] = pokemons.map((pokemon:any) => {
		const result : Pokemon = {
			id          : pokemon.id,
			name        : pokemon.name,
		    sprite      : GLOBALS.IMAGE_SRC + pokemon.id + ".png"
		}
		return result
	})
	const all_pokemons_sorted = pokemon_array.sort((a, b) => a.id - b.id);

	return all_pokemons_sorted;

}

