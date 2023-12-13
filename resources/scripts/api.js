const key = require('./auth.js'); // used to assign the steamapi key to a variable without including it in the source code 

async function getProfileData(id64) { // gets data about a batch of steam profiles and returns the raw json output. only needs to be called once
        try {
        const nameURL = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${id64}&format=json`;
        console.log('Making Request to:', nameURL);

        const response = await fetch(nameURL);
        const data = await response.json();
        
        return data 

    } catch(error) {
        console.error('Error fetching data from the Steam API:', error)
    }
};

async function getGameData(id) { // gets data about games owned by individual accounts and returns the raw json output. needs to be called X number of times, X being the number of profiles inputted
    try {
        const nameURL = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${key}&steamid=${id}&format=json`;
        console.log('Making Request to:', nameURL)

        const response = await fetch(nameURL);
        const data = await response.json();

        return data

    } catch(error) {
        console.error('Error fetching data from the Steam API:', error)
    }
};

async function createProfiles(id64) { // function that begins organizing the data and arranging for it to be appended to the final profiles array
    let profiles = [] // empty array that will contain the completed list of profiles and their data
    const data = await getProfileData(id64)

    for (let i = 0; i < data.response.players.length; i++) { // create an array of appids for every inputted account to be added to the final profile array with the other objects
        const currentprofile = data.response.players[i];

        const gamedata = await getGameData(currentprofile.steamid)
        const gameids = gamedata.response.games.map(obj => {
            return obj.appid;
        })
        profiles.push({ // append the completed and organized information into the final 'profiles' array
            id:currentprofile.steamid,
            name:currentprofile.personaname,
            pfp:currentprofile.avatarmedium,
            url:currentprofile.profileurl,
            games:gameids
        })
    }
    return profiles
};

module.exports = {createProfiles}