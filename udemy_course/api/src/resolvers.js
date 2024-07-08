const resolvers = {
	Query: {
		pets() {
			return db.pets;
		},
	},
};

export { resolvers };
