const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { ApolloServer } = require('apollo-server');
require('dotenv').config();
const database = require('./db/dbConnection');
const Game = require('./db/model/game');

const app = express();

app.use(express.json(), cors());
app.options('*', cors());

// const server = new ApolloServer({
//     typeDefs: fs.readFileSync(
//         path.join(__dirname, 'game.graphql'),
//         'utf8'
//     ),
//     resolvers
// })

// server
//     .listen(process.env.PORT || 5000)
//     .then(({ url }) => console.log(`Server is runnin on ${url}`)
// );

// (async () => {
//     try {
//         const resultadoCreate = await Game.create({
//             title: 'Red Dead Redemption 2',
//             picture: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png',
//             rating: 5,
//             studio: 'Rockstar Games',
//             release_date: '26/10/2018',
//             story: "Developed by the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America's unforgiving heartland. The game's vast and atmospheric world also provides the foundation for a brand new online multiplayer experience. America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang has to rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal fissures threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang that raised him.",
//             genre: 'Ação-Aventura, Mundo Aberto',
//         })
//         console.log(resultadoCreate);
//     } catch (e) {
//         console.log(e);
//     }
// })();

app.listen(process.env.PORT || 5000);
console.log('Server is running');