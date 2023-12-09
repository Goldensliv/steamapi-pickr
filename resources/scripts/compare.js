const api = require('./api.js');
let allOwned = [] // array of games owned by all parties

function compareProfiles(profiles) {
    const appIDs = profiles.map(profile => profile.games); // create a nested array containing each array of owned appIDs

    const allOwned = appIDs.reduce((value, currentID) => {
        return value.filter(id => currentID.includes(id));
    }); // reduce array to only commonly shared ids
    console.debug(allOwned)
}

api.createProfiles().then(profiles => {
    compareProfiles(profiles)
})