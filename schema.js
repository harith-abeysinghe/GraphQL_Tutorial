export const typeDefs = `#graphql

    type Game {
        id: ID!,  #having the ! means is that the data field can't be null
        title: String!,
        platform: [String!]!, 
    }

    type Review{
        id: ID!,
        content: String!
        rating: Int!
    }

    type Author{
        id: ID!,
        name: String!
        verified: Boolean!
    }

    #must have a Query type
    type Query {
        #these are the entry points for the graph
        games: [Game]
        reviews: [Review]
        authors: [Author]
    }

`;
