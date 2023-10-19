

import { createApolloClient} from "@/lib/GraphQLProvider";
import { gql } from "@apollo/client";



export default function PokemonPage ({pokemon}:any) {
	return (
		<>
			{JSON.stringify(pokemon)}

		</>
	)
}


const query = gql`
query samplePokeAPIquery {
	gen3_species: pokemon_v2_pokemonspecies{
		name
		id
	}
}
`




export async function getStaticPaths() {
	const apolloClient = createApolloClient();
	const { data } = await apolloClient.query({ query: query });

	const pokemon_list = data.gen3_species

	const paths = pokemon_list.map((pokemon:any) => ({ params: { pokemon: pokemon.name } }));

	return {
		paths,
		fallback: 'blocking'  // or false, if you don't want to handle fallback
	};
}





export async function getStaticProps({ params }:any) {
	console.log(params.pokemon);
	const apolloClient = createApolloClient();
	const { data } = await apolloClient.query({ query: query });

	console.log(params.pokemon);
	const pokemon_list = data.gen3_species
	//const apolloClient = createApolloClient();
	//const { data } = await apolloClient.query({
	//query: GET_USER,
	//variables: { id: params.id }
	//});

	return {
		props: {
			pokemon: params.pokemon
		}
	};
}

