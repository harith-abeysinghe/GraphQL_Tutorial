const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const gql = require("graphql-tag");

//ApolloServer: Used to create an Apollo Server instance.
//startStandaloneServer: Function to start the Apollo Server instance standalone.
//gql: Tag function from graphql-tag used to define GraphQL schema.

const typeDefs = gql`
	type User {
		id: ID! #! means required
		username: String
		friends: [User]! # collection of users
	}

	type Query {
		me: User!
	}
`;

// Defining the resolvers to handle the queries defined in the schema
// Resolvers provide the logic for fetching the data for each query or field
const resolvers = {
	Query: {
		// Resolver for the 'me' query
		// This function returns a hardcoded User object
		me() {
			return {
				id: 1,
				username: "Harith Abeysinghe",
				friends: [],
			};
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

// Starting the server and listening on the default port (4000)
startStandaloneServer(server).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
