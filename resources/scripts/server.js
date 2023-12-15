// local api setup
const express = require('../../node_modules/express/index')
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// import helper functions
const api = require('./api.js')
const compare = require('./compare.js')

// recieve and handle post request
app.post('/', async (req, res) => {
    const id64 = await req.body
    profiles =  await api.createProfiles(id64)
    allOwned = await compare.compareProfiles(profiles)

    res.send({
        commonapps: allOwned, //send the profile data and common appids back to the client
        profiles: profiles
    })
})

app.listen(3000);
console.log('Listening on port 3000');