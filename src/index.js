const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json(), cors());
app.options('*', cors());

const db = {
    id: 1,
    title: "Dark Souls",
    picture: "https://upload.wikimedia.org/wikipedia/pt/7/7c/Dark_Souls_1_capa.png",
    rating: 5,
    studio: "FromSoftware",
    release_date: "22-sep-2011",
    story: "A spiritual successor to FromSoftware's Demon's Souls, the game is the second installment in the Souls series. Dark Souls takes place in the kingdom of Lordran, where players assume the role of a cursed undead character who begins a pilgrimage to discover the fate of their kind.",
    genre: "souls-like"
}

app.get('/', (req, res) => {
    return res.send('Welcome to GamePls API!');
})

app.get('/dark-souls', (req, res) => {
    return res.json(db);
})

app.listen(process.env.PORT || 5000);
console.log('Server Running');