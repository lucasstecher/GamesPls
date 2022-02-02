const Game = require('../db/model/game');

const resolvers = {
    Query: {
        game: async (parent, { id }) => {
            try {
                const game = await Game.findByPk(id);
                return game;
            } catch (err) {
                console.log(err);
            }
        },

        games: async () => {
            try {
                const games = await Game.findAll();
                return games
            } catch (err) {
                console.log(err);
            }
        }
    },

    Mutation: {
            createGame: async (_, args) => {
            try {
                const resultCreate = await Game.create({
                    title: args.title,
                    picture: args.picture,
                    rating: args.rating,
                    studio: args.studio,
                    release_date: args.release_date,
                    story: args.story,
                    genre: args.genre,
                });
                return resultCreate;
            } catch(err) {
                console.log(err);
            }
        },

        updateGame: async (_, args) => {
            try {
                const gameToUptade = await Game.findByPk(args.id);
                gameToUptade.set({
                    ...args
                });
                return await gameToUptade.save();
            } catch(err) {
                console.log(err);
            }
        },

        deleteGame: async (_, { id }) =>{
            try {
                const resultDelete = await Game.destroy({
                    where: { id: id }
                });
                return resultDelete;
            } catch(err) {
                console.log(err);
            }
        }
    }
};

module.exports = resolvers