// defining the server port
const port = 5000

// initializing installed dependencies
const express = require('express')
require('dotenv').config()
const axios = require('axios')
const app = express()
const cors = require('cors')
app.use(cors())

// listening for port 5000
app.listen(5000, ()=> console.log(`Server is running on ${port}` ))

// API request
app.get('/', (req,res)=>{    
    const options = {
        method: 'GET',
        url: `https://api.pokemontcg.io/v2/cards?set.id:swsh7?pageSize=150?select=id,name,images,tcgplayer?`,
        headers: {
            'X-RapidAPI-Key':process.env.VITE_SOME_KEY,
            // 'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        },

   };


   
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});
