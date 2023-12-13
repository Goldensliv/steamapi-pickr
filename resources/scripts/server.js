// local api setup
const express = require('../../node_modules/express/index')
const app = express();
app.use(express.json());
// import helper functions
const api = require('./api.js')
const compare = require('./compare.js')

// recieve and handle post request
app.post('/', async (req, res) => {
    const id64 = await req.body
    console.debug(id64)
    profiles =  await api.createProfiles(id64)
    console.debug(profiles)
    allOwned = await compare.compareProfiles(profiles)

    res.send({
        commonapps: allOwned, //send the profile data and common appids back to the client
        profiles: profiles
    })
})

app.listen(3000);
console.log('Listening on port 3000');