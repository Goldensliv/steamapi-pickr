const ids = [] //array of steamid64s to get data on

function sendData() {
    ids.push(document.getElementById('id1').value);
    ids.push(document.getElementById('id2').value);
    ids.push(document.getElementById('id3').value);

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
}