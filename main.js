
const div=document.querySelector("div")
fetch("https://api.tvmaze.com/shows").then(data=>data.json())
.then(arr=>{
    for(let i=0;i<arr.length;i++){
    div.innerHTML+=`<div>
    <img class="img-fluid rounded-start" src="${arr[i].image.medium}" alt="">
    <h4 class="card-title"><strong>${arr[i].name}</strong></h4>
    <p class="card-text">IMDB: ${arr[i].rating.average}</p>
    </div>`}})
