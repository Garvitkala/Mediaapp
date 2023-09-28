
let url = "https://abhorrent-purpose-9996.onrender.com/data";

//  obj = JSON.parse(localStorage.getItem("ups"))||[];
// // show = document.getElementById("disp");


// let updatetripIdInput = document.getElementById("update-trip-id");
// let updatetripNameInput = document.getElementById("update-trip-name");
// let updatetripimageClipInput = document.getElementById("update-trip-image");
// let updatetriplocationInput = document.getElementById("update-trip-location");
// let updatetripPriceInput = document.getElementById("update-trip-price");
// let updatetripUpdateBtn = document.getElementById("update-trip");


// console.log(obj);
// populateEditForms(obj);

// function populateEditForms(obj) {
//   fetch(`${url}/${obj}`)
//   .then((res) => res.json()
//   )
//   .then((data) => {
//     console.log("raj");
//     updatetripIdInput.value = data.id;
//     updatetripNameInput.value = data.name;
//     updatetripimageClipInput.value = data.imageClip;
//     updatetriplocationInput.value = data.location;
//     updatetripPriceInput.value = data.price;
//     show.innerHTML = getCard(data.id, data.name, data.location, data.image, data.price);
//   });
// }



// updatetripUpdateBtn.addEventListener("click", function () {
//   let uptrip ={
//   id:updatetripIdInput.value,
//   name: updatetripNameInput.value,  
//   image:updatetripimageClipInput.value,
//   location:updatetriplocationInput.value,
//   price:updatetripPriceInput.value
// }
// fetch(`${url}/${uptrip.id}`,{
//   method:'PUT',
//   body:JSON.stringify(uptrip),
//   headers:{
//     'content-type':'application/json'
//   }
// })
// .then(res=>res.json())
//  .then((data)=>{console.log(data)
//   show.innerHTML= getCard(data.id,data.name,data.location,data.image,data.price)});
// });




// function getCard(id, name, location,image,price) {
//   let card = `
//       <div class="card" data-id=${id} >
//         <div class="card__img">
//         <img src=${image} alt="err" />
//         </div>
//         <div class="card__body">
//           <h3 class="card__trip card__title">${name}</h3>
//           <div class="card__trip card__description">
//             ${location}
//           </div>
//         <p>${price}</p>
//         </div>
//       </div>
//   `;
//   return card;
  
// }



function render(){

  fetch(url)
  .then((res) => {
   return res.json();
  })
  .then((res) => {
    console.log(res)
    
  
  });
  }
  render();

let updatetripIdInput = document.getElementById("update-trip-id");
 let updatetripNameInput = document.getElementById("update-trip-name");
 let updatetripimageClipInput = document.getElementById("update-trip-image");
 let updatetriplocationInput = document.getElementById("update-trip-location");
 let updatetripPriceInput = document.getElementById("update-trip-price");
let updatetripUpdateBtn = document.getElementById("update-trip");

updatetripUpdateBtn.addEventListener("click", function () {
     let obj ={
     id:updatetripIdInput.value,
     name: updatetripNameInput.value,  
     image:updatetripimageClipInput.value,
     location:updatetriplocationInput.value,
     price:updatetripPriceInput.value
   };
   console.log(obj)

   fetch(`${url}${updatetripIdInput.value}`, {
    method :"PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(obj)
  })
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
    render();
  })
  
  });