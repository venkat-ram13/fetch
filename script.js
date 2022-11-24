let countryName = document.getElementById("country");
let city = document.getElementById("cityname");
let searchBtn = document.getElementById("searchbtn");

searchBtn.addEventListener("click",()=>{
  let country = countryName.value;


let url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;

let result = document.getElementById("result");

fetch(url)
 .then((response)=>response.json())
 .then((data)=>{

    
  let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=9a55004f78aea24700bee7a721a23f15`;
  fetch(url1)
  .then((response)=>response.json())
  .then((data1)=>{
 
  
   

     result.innerHTML =    `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                             <p><b>Country Flag:</b><img src="${data[0].flags.svg}" class="flag-img"></p><br>
                            <p><b>Country Name:</b>  <span>${data[0].name.common}</span></p><br>
                            <p><b>Capital:</b><span>${data[0].capital[0]}</span></p><br>
                            <p><b>Region:</b>  <span>${data[0].region}</span></p><br>
                            <p><b>Country Code:</b>  <span>${data[0].cca3}</span></p><br>
                            <p><b>Latlng:</b>  <span>${data[0].latlng} </span></p><br>

                            <p><b>Temperature:</b><span>${data1.main.temp} F </span><br>
                            <p><b>Humidity:</b><span>${data1.main.humidity} </span><br>
                            <p><b>Pressure:</b><span>${data1.main.pressure} </span><br>
                            <p><b>Wind:</b><span>${data1.wind.speed}m/s</span>
                            
                     </div>`
                     
                  })

        
                }).catch(() => {
                  if (country.length == 0) {
                    result.innerHTML = `<h3>The input field cannot be empty</h3>`;
                  } else {
                    result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
                  }
        
                  });
  }); 

