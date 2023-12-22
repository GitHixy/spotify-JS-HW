const architectsURL = " https://striveschool-api.herokuapp.com/api/deezer/search?q=architects"
const whileSheSleepsURL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=whileshesleeps"
const bringMeTheHorizonURL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=bringmethehorizon"


fetch(architectsURL)
.then((res) => res.json())
.then((data) => {
    console.log (data)

    const shuffledAlbums = shuffleArray(data.data);
    const addedAlbumIDs = {};

    for (let i = 0; i < shuffledAlbums.length; i++) {
     
        const albums = shuffledAlbums[i].album;
        const artist = shuffledAlbums[i].artist;

        if (!addedAlbumIDs[albums.id]) {
        console.log(albums);
        const section = document.querySelector("#architectsSection");
        section.innerHTML += `
        <div class="card bg-dark">
        <img src="${albums.cover_medium}" class="card-img-top w-100" alt="">
        <div class="card-body">
        <h5 >${albums.title}</h5>
        <h6 class="mt-5">${artist.name}</h6>
        </div>
        </div>
        `;
        addedAlbumIDs[albums.id] = true;
    }
    if (Object.keys(addedAlbumIDs).length >= 4) {
        break;
      }
    }
})

fetch(whileSheSleepsURL)
.then((res) => res.json())
.then((data) => {
    console.log (data)

    const shuffledAlbums = shuffleArray(data.data);
    const addedAlbumIDs = {};

    for (let i = 0; i < shuffledAlbums.length; i++) {
     
        const albums = shuffledAlbums[i].album;
        const artist = shuffledAlbums[i].artist;

        if (!addedAlbumIDs[albums.id]) {
        console.log(albums);
        const section = document.querySelector("#whileshesleepsSection");
        section.innerHTML += `
        <div class="card bg-dark">
        <img src="${albums.cover_medium}" class="card-img-top w-100" alt="">
        <div class="card-body">
        <h5 >${albums.title}</h5>
        <h6 class="mt-5">${artist.name}</h6>
        </div>
        </div>
        `;
        addedAlbumIDs[albums.id] = true;
    }
    if (Object.keys(addedAlbumIDs).length >= 4) {
        break;
      }
    }
})


fetch(bringMeTheHorizonURL)
.then((res) => res.json())
.then((data) => {
    console.log (data)

    const shuffledAlbums = shuffleArray(data.data);
    const addedAlbumIDs = {};

    for (let i = 0; i < shuffledAlbums.length; i++) {
     
        const albums = shuffledAlbums[i].album;
        const artist = shuffledAlbums[i].artist;

        if (!addedAlbumIDs[albums.id]) {
        console.log(albums);
        const section = document.querySelector("#bringmethehorizonSection");
        section.innerHTML += `
        <div class="card bg-dark">
        <img src="${albums.cover_medium}" class="card-img-top w-100" alt="">
        <div class="card-body">
        <h5 >${albums.title}</h5>
        <h6 class="mt-5">${artist.name}</h6>
        </div>
        </div>
        `;
        addedAlbumIDs[albums.id] = true;
    }
    if (Object.keys(addedAlbumIDs).length >= 4) {
        break;
      }
    }
})

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}