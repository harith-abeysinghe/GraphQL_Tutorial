const resolvers = {
	Query: {
		me() {
			return {
				id: "1",
				username: "user",
				friends: [],
			};
		},
	},
};

export { resolvers };
