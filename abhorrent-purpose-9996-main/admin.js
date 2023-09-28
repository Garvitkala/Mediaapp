

let url = "https://abhorrent-purpose-9996.onrender.com/data";

const tbody = document.querySelector("tbody");

let files = [];

const cont2 = document.getElementById("cont2");



async function fetching() {
  try {
    const request = await fetch(url);
    const datas = await request.json();
    files = datas.map(function (el) {
      return {
        id: el.id,
        name: el.name,
        location: el.location,
        rating: el.rating,
        price: el.price,
        img: el.imageClip,
      };
    });
    console.log(files);
    disp(files);
  } catch (error) {
    console.log(error);
  }
}
fetching();

function disp(data) {
    tbody.innerHTML=""
  data.forEach((element) => {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    name.innerText = element.name;
    const id = document.createElement("td");
    id.innerText = element.id;
    const location = document.createElement("td");
    location.innerText = element.location;
    const rating = document.createElement("td");
    rating.innerText = element.rating;
    const price = document.createElement("td");
    price.innerText = element.price;

    const del = document.createElement("button");
    del.innerText = "Delete";
    del.addEventListener("click", function () {
      fetch(`${url}/${element.id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((file) => {
          console.log(file);
          let data=fetching()
          disp(data)
        })
        .catch((error) => console.log(error)); // added error handling
   
    });

    const change = document.createElement("button");
    change.innerText = "Update";

    change.addEventListener("click", function () {
      localStorage.setItem("ups", element.id);
      cont2.style.display = "block";
    });

    row.append(id, name, location, rating, price, del, change);

    tbody.append(row);
  });
}



 let lsobj = JSON.parse(localStorage.getItem("ups"));
 let updatetripIdInput = document.getElementById("update-trip-id");
 let updatetripNameInput = document.getElementById("update-trip-name");
let updatetripRating = document.getElementById("update-trip-rating")
 let updatetripimageInput = document.getElementById("update-trip-image");
 let updatetriplocationInput = document.getElementById("update-trip-location");
 let updatetripPriceInput = document.getElementById("update-trip-price");
 let updatetripUpdateBtn = document.getElementById("update-trip");
   fetch(`${url}/${lsobj}`)
  .then((res) => res.json()
  )
  .then((data) => {
    console.log("raj");
    updatetripIdInput.value = data.id;
    updatetripNameInput.value = data.name;
    updatetripRating.value = data.rating ;
    updatetripimageInput.value = data.imageClip;
    updatetriplocationInput.value = data.location;
    updatetripPriceInput.value = data.price;
  });
  updatetripUpdateBtn.addEventListener("click", function () {
       let uptrip ={
       id:updatetripIdInput.value,
       name: updatetripNameInput.value,
       image:updatetripimageInput.value,
       location:updatetriplocationInput.value,
       price:updatetripPriceInput.value,
       rating:updatetripRating.value
     }

     localStorage.setItem("ups", updatetripIdInput.value);

     fetch(`${url}/${uptrip.id}`,{
       method:'PATCH',
       body:JSON.stringify(uptrip),
       headers:{
         'content-type':'application/json'
       }
     })
     .then(res=>res.json())
      .then((data)=>{console.log(data)
        let data2=fetching()
        disp(data2)
     });
     cont2.style.display="none"        

    });

    let hide=document.getElementById("hide")
    let hide2=document.getElementById("hide2")

    hide.addEventListener("click",()=>{
     cont2.style.display="none"     
     window.location.reload();
   
    })

    let cont3=document.getElementById("cont3")
    let addnew=document.getElementById("addNew")
    addnew.addEventListener("click",()=>{
        cont3.style.display="block"

    })

    hide2.addEventListener("click",()=>{
        cont3.style.display="none"     
        window.location.reload();
      
       })



    
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
  let data3=fetching()
  disp(data3)
})
cont3.style.display="none"
tripratingInput.value=""
triplocationInput.value=""
tripImageInput.value=""
tripPriceInput.value=""
tripnameInput.value=""



})


