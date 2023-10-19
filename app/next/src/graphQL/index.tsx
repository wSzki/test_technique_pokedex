import { gql } from "@apollo/client"

export const simple = gql`
query samplePokeAPIquery($limit: Int!) {
	gen3_species: pokemon_v2_pokemonspecies(limit: $limit) {
		name
		id
	}
}
`


export const variable_test = gql`
query getPokemonInfo($pokemonName: String!) {


	pokemon: pokemon_v2_pokemon(where: {name: {_eq: $pokemonName}}) {
		id
		base_experience
		height
		weight
		pokemon_v2_pokemonmoves {
			id
			pokemon_v2_move {
				name
			}
		}
		pokemon_v2_pokemontypes {
			pokemon_v2_type {
				name
			}
		}
		pokemon_v2_pokemonsprites {
			sprites
		}
	}
	pokemon_v2_pokemonspeciesflavortext(where: {id: {_eq: 1}}) {
		flavor_text
	}
}
`

export const get_pokemon_by_name = gql`
query MyQuery ($pokemonName: String!) {
	pokemon_v2_pokemonspecies (where: {name: {_eq: $pokemonName}}) {
		name
		pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}) {
			flavor_text
		}
		pokemon_v2_pokemons {
			id
			base_experience
			height
			weight
			pokemon_v2_pokemonmoves {
				id
				pokemon_v2_move {
					name
				}
			}
			pokemon_v2_pokemontypes {
				pokemon_v2_type {
					name
				}
			}
			pokemon_v2_pokemonsprites {
				sprites
			}
		}
	}
}
`
export const get_all_pokemons = gql`
query MyQuery {
	pokemon_v2_pokemonspecies {
		name
		id
	}
}
`

