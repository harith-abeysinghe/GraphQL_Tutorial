import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// type definitions
import { typeDefs } from "./schema.js";

import { resolvers } from "./resolvers.js";

// server setup
const server = new ApolloServer({
	//typedefs - definitions of types of data
	typeDefs,
	//resolvers - how to fetch the data

	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: {
		port: 4000,
	},
});

console.log(`🚀 Server ready at ${url}`);
