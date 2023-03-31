const div = document.querySelector("div")

// fetch("https://api.tvmaze.com/shows").then(data => data.json())
//     .then(arr => {
//         for (let i = 0; i < arr.length; i++) {
//             div.innerHTML += `<div>
//     <img class="img-fluid rounded-start" src="${arr[i].image.medium}" alt="">
//     <h4 class="card-title"><strong>${arr[i].name}</strong></h4>
//     <p class="card-text">IMDB: ${arr[i].rating.average}</p>
//     </div>`}
//     })

let row = document.querySelector('.row')
let input=document.getElementsByClassName("cus-input")[0]
let btn=document.getElementsByClassName("cus-btn")[0]

btn.onclick=function(){
  $.ajax({
    method:"GET",
    url:"https://api.tvmaze.com/search/shows?q="+input.value
  }).done((data)=>{
    row.innerHTML=""
    data.forEach(arr =>{
      row.innerHTML+=`<div class="col-4 py-3"  >
      <div class="card" style="width: 18rem;">
        <img src="${arr.show.image?.medium}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title"><strong>${arr.show.name}</strong></h5>
          <p class="card-text"><strong>Language</strong>:${arr.show.language}</p>
          <p class="card-text"><strong>Genres</strong>:${arr.show.genres}</p>
          <p class="card-text"><strong>IMDb</strong>:${arr.rating.average}</p>
          <a href="details.html?id=${arr.show.id}" class="btn btn-primary">Start waching</a>
        </div>
      </div>
    </div>`
  })
  
})
}




$.ajax({
  method: "GET",
  url: "https://api.tvmaze.com/show"
}).done((data) => {
  data.forEach(arr => {
    row.innerHTML += `<div class="col-4 py-3"  >
              <div class="card" style="width: 18rem;">
                <img src="${arr.image.medium}" class="card-img-top" alt="">
                <div class="card-body">
                  <h4 class="card-title"><strong>${arr.name}</strong></h4>
                  <p class="card-text"><strong>Language</strong>:${arr.language}</p>
                  <p class="card-text"><strong>Genres</strong>:${arr.genres}</p>
                  <p class="card-text"><strong>IMDb</strong>:${arr.rating.average}</p>
                  <a href="details.html?id=${arr.id}" class="btn btn-primary">Start waching</a>
                  </div></div></div>` })
})

