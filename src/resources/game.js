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
                    id: args.id,
                    title: args.title,
                    picture: args.picture,
                    rating: args.rating,
                    studio: args.studio,
                    release_date: args.release_date,
                    story: args.release_date,
                    genre: args.genre,
                });
                return resultCreate;
            } catch(err) {
                console.log(err);
            }
        },

        updateGame: async (_, args) => {
            try {
                const resultUpdate = await Game.update({
                    id: args.id,
                    title: args.title,
                    picture: args.picture,
                    rating: args.rating,
                    studio: args.studio,
                    release_date: args.release_date,
                    story: args.release_date,
                    genre: args.genre
                }, { where: { id: args.id } } );
                return resultUpdate;
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