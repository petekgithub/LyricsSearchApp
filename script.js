const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');


const apiURL = 'https://api.lyrics.ovh';

// Search by song or artist
async function searchSongs(term) {
    // fetch the get something returns the first promise which is gonna be the formated data -json
    // the second promise will give us the actual data
    //  fetch(`${apiURL}/suggest/${term}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data));

        //fetch is asyncronus, await the response from the fetch call
        const res = await fetch(`${apiURL}/suggest/${term}`);
        const data = await res.json();

        showData(data);

}

// Show song and artist in DOM
function showData(data) {


    
}




// Event Listeners
form.addEventListener('submit', e => {
    e.preventDefault();

    const searchTerm = search.value.trim();

    if(!searchTerm){
        alert('Please type in a search term');
    } else {
        searchSongs(searchTerm);
    }
    
});