function compareProfiles(profiles) {
    const appIDs = profiles.map(profile => profile.games); // create a nested array containing each array of owned appIDs

    const allOwned = appIDs.reduce((value, currentID) => {
        return value.filter(id => currentID.includes(id));
    }); // reduce array to only commonly shared ids
    return allOwned
}

module.exports = {compareProfiles}