
import {GLOBALS}                    from "@/settings"
import {createApolloClient}         from "@/lib/GraphQLProvider"
import {simple,get_pokemon_by_name} from '@/graphQL'
import ContextHandler               from "./ContextHandler"

// =============================================================================
// ----------------------------------- MAIN ------------------------------------
// =============================================================================
interface PageParams {params: { pokemon: string }}
export default async function Page({ params }: PageParams) {
	const pokemon : Pokemon = await getPokemonByName(params.pokemon)
	return <ContextHandler pokemon={pokemon}/>;
}

// =============================================================================
// ----------------------------------- PATHS -----------------------------------
// =============================================================================
export async function generateStaticParams() {
	const apolloClient = createApolloClient();
	const { data } = await apolloClient.query({
		query: simple,
		variables: { limit: 20000 }
	});
	const pokemons = (data.gen3_species);

	return pokemons.map((pokemon:any) => ({
		pokemon: pokemon.name,
	}))
}

// =============================================================================
// ------------------------------- DATA FETCHING -------------------------------
// =============================================================================
async function getPokemonByName(pokemon_name : string) {

	const apolloClient = createApolloClient();
	
	const { data } = await apolloClient.query({
		query: get_pokemon_by_name,
		variables: { pokemonName : pokemon_name}
	});

	const pokemon       = data.pokemon_v2_pokemonspecies[0];
	const info          = pokemon.pokemon_v2_pokemons[0];
	const types         = info.pokemon_v2_pokemontypes;
	const type_array    = types.map((type:any) => {return type.pokemon_v2_type.name});
	const description   = pokemon.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text
	//const all_sprites = JSON.parse(info.pokemon_v2_pokemonsprites[0].sprites);
	//const sprite      = all_sprites.front_default;
	const result : Pokemon = {
		id          : info.id,
		name        : pokemon.name,
		height      : info.height,
		weight      : info.weight,
		types       : type_array,
		description : description,
		sprite      : GLOBALS.IMAGE_SRC + info.id + ".png"
	}

	return result;
}
