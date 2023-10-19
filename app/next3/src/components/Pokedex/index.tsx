import PokedexMain from './PokedexMain';

import { gql, useQuery } from '@apollo/client';
//import { getClient } from '@/lib/client';
import { GLOBALS } from '@/settings'

//const query = gql`
//query samplePokeAPIquery {
	//gen3_species: pokemon_v2_pokemonspecies{
		//name
		//id
	//}
//}
//`;
//https://www.apollographql.com/blog/apollo-client/next-js/how-to-use-apollo-client-with-next-js-13/

const styleProps = GLOBALS.WHITELISTED_PROPS

export default function Pokedex ({children}:any) {

	//const { data } = await getClient().query({ query });
	//if (data) console.log(data.gen3_species[0].name);
	return (
		<PokedexMain>
			{children}
		</PokedexMain>
	)
}
