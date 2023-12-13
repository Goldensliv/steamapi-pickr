const ids = [] //array of steamid64s to get data on

fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(ids)
})
.then(response => {
    if (!response.ok) {
        throw new Error('error')
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});