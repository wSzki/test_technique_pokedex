
'use client';

import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://beta.pokeapi.co/graphql/v1beta', // The GraphQL endpoint of the PokeAPI
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
