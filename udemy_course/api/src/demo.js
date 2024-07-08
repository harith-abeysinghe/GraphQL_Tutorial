import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./schema.js";

// server setup
const server = new ApolloServer({
	//typedefs - definitions of types of data
	typeDefs,
	//resolvers - how to fetch the data

	resolvers,
});

const startServer = async () => {
	const { url } = await startStandaloneServer(server, {
		listen: {
			port: 4000,
		},
	});
	console.log(`🚀 Server ready at ${url}`);
};

export { startServer };
