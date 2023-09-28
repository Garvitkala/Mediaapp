
let url3 = "https://abhorrent-purpose-9996.onrender.com/data";

let tripnameInput = document.getElementById("trip-name");
let tripImageInput = document.getElementById("trip-image");
let triplocationInput = document.getElementById("trip-location");
let tripratingInput = document.getElementById("trip-rating");
let tripPriceInput = document.getElementById("trip-price");
let tripCreateBtn = document.getElementById("add-trip");






tripCreateBtn.addEventListener("click",() => {
  let obj = {
    rating: tripratingInput.value,
    location: triplocationInput.value,
    image: tripImageInput.value,
    price: tripPriceInput.value,
    name: tripnameInput.value
  
  }

fetch(url3, {
  method :"POST",
  headers: {
    "Content-Type": "application/json"
  },
  body:JSON.stringify(obj)
})
.then((res) => {
  return res.json();
})
.then((res) => {
  console.log(res)
})

})
