import { gql } from "graphql-tag";

const typeDefs = gql`
	type User {
		id: ID
		username: String
		friends: [User]
	}

	type Query {
		me: User
	}
`;

export { typeDefs };
