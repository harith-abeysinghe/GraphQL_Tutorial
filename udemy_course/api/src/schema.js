import { gql } from "graphql-tag";

const typeDefs = gql`
	type User {
		id: ID
		username: String
	}
	type Pet {
		id: ID!
		createdAt: String!
		name: String!
	}

	type Query {
		pets: [Pet]
	}
`;

export { typeDefs };
