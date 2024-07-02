export const typeDefs = `#graphql

    type Game {
        id: ID!,  #having the ! means is that the data field can't be null
        title: String!,
        platform: [String!]!, 
        reviews: [Review!]

    }

    type Review{
        id: ID!,
        content: String!
        rating: Int!
        game: Game!
        author: Author!
    }

    type Author{
        id: ID!,
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    #must have a Query type
    type Query {
        #these are the entry points for the graph
        games: [Game]
        reviews: [Review]
        authors: [Author]

        review(id: ID!): Review
        game(id: ID!): Game
        author(id: ID!): Author
    }

`;
