//resolvers must be defined for each tyoe of Query
import db from "./db.js";

export const resolvers = {
	Query: {
		games() {
			return db.games;
		},
		reviews() {
			return db.reviews;
		},
		authors() {
			return db.authors;
		},
		review(_, { id }) {
			return db.reviews.find((review) => review.id === id);
		},
		game(_, { id }) {
			return db.games.find((game) => game.id === id);
		},
		author(_, { id }) {
			return db.authors.find((author) => author.id === id);
		},
	},

	Game: {
		reviews(game) {
			return db.reviews.filter((review) => review.game_id === game.id);
		},
	},
	Review: {
		game(review) {
			return db.games.find((game) => game.id === review.game_id);
		},
		author(review) {
			return db.authors.find((author) => author.id === review.author_id);
		},
	},

	Author: {
		reviews(author) {
			return db.reviews.filter((review) => review.author_id === author.id);
		},
	},

	Mutation: {
		deleteGame(_, { id }) {
			const gameIndex = db.games.findIndex((game) => game.id === id);
			if (gameIndex === -1) {
				throw new Error("Game not found");
			}
			const deletedGame = db.games.splice(gameIndex, 1)[0];
			return deletedGame;
		},

		addGame(_, { game }) {
			const newGame = {
				id: String(db.games.length + 1),
				...game,
			};
			db.games.push(newGame);
			return newGame;
		},

		updateGame(_, { id, game }) {
			const gameIndex = db.games.findIndex((game) => game.id === id);
			if (gameIndex === -1) {
				throw new Error("Game not found");
			}
			const updatedGame = { ...db.games[gameIndex], ...game };
			db.games[gameIndex] = updatedGame;
			return updatedGame;
		},
	},
};
