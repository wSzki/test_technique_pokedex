

import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	HttpLink,
} from '@apollo/client';


export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
	uri: 'https://beta.pokeapi.co/graphql/v1beta', // The GraphQL endpoint of the PokeAPI
    }),
    cache: new InMemoryCache(),
  });
};
export const client = new ApolloClient({
	cache: new InMemoryCache(),
});

interface IGraphQlProviderProps {
	children: React.ReactNode;
}

const GraphQLProvider: React.FC<IGraphQlProviderProps> = ({
	children,
}) => {
	return (
		<ApolloProvider client={client}>
			{children}
		</ApolloProvider>
	);
};

export default GraphQLProvider;
