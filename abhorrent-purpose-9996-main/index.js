let best = document.getElementById("best-wrapper");
var isLog = localStorage.getItem("isLog") ?? false;

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var sweeper = new Swiper(".mySweeper", {
  slidesPerView: 1.5,
  spaceBetween: 25,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const url = "https://abhorrent-purpose-9996.onrender.com/data";
async function recieve() {
  let res = await fetch(url);
  let data = await res.json();

  console.log(data);
  disData(data);
}

recieve();

function disData(arr) {
  arr.forEach((element) => {
    let child = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("h3");
    let desc = document.createElement("p");
    let price = document.createElement("p");

    child.setAttribute("class", "swiper-slide");
    child.style.backgroundColor = "white";
    img.setAttribute("src", element.imageClip);
    name.innerText = element.name;
    name.style.fontSize = "2vw";
    desc.innerText = element.location;
    desc.style.fontSize = "2vw";
    price.innerText = `$ ${element.price}`;
    price.style.fontSize = `2vw`;

    child.append(img, name, desc, price);
    best.append(child);

    child.addEventListener("click", () => {
      localStorage.setItem("tourID", JSON.stringify(element.id));
      redirect("./singleProduct.html");
    });
  });

  function redirect(link) {
    setTimeout(() => {
      window.location.href = link;
    }, 100);
  }

  let home = document.querySelector("#links > a:nth-child(1)");
  let destination = document.querySelector("#links > a:nth-child(2)");
  let feedback = document.querySelector("#links > a:nth-child(3)");
  let pricing = document.querySelector("#links > a:nth-child(4)");
  let menu = document.getElementById("menu");

  home.addEventListener("mouseover", () => {
    document.querySelector("#locdrop").style.display = "none";
    document.querySelector("#pricedrop").style.display = "none";
    document.getElementById("menudrop").style.display = "none";
  });
  destination.addEventListener("mouseover", () => {
    document.querySelector("#locdrop").style.display = "block";
    document.querySelector("#pricedrop").style.display = "none";
    document.getElementById("menudrop").style.display = "none";
    // console.log(document.getElementById("locdrop"));
  });
  feedback.addEventListener("mouseover", () => {
    document.querySelector("#locdrop").style.display = "none";
    document.querySelector("#pricedrop").style.display = "none";
    document.getElementById("menudrop").style.display = "none";
  });
  pricing.addEventListener("mouseover", () => {
    document.querySelector("#locdrop").style.display = "none";
    document.querySelector("#pricedrop").style.display = "block";
    document.getElementById("menudrop").style.display = "none";
    console.log(document.getElementById("pricedrop"));
  });
  menu.addEventListener("click", () => {
    document.querySelector("#menudrop").style.display = "block";
    document.querySelector("#locdrop").style.display = "none";
    document.querySelector("#pricedrop").style.display = "none";
  });
  document.querySelector("main").addEventListener("mouseover", () => {
    document.querySelector("#locdrop").style.display = "none";
    document.querySelector("#pricedrop").style.display = "none";
  });
  console.log(document.querySelectorAll("#locdrop a"));
  document.querySelectorAll("#locdrop a").forEach((element) => {
    element.addEventListener("click", (event) => {
      // event.preventDefault()
      localStorage.setItem("location", element.innerText);
      console.log("test");
    });
  });
  document.querySelectorAll("#pricedrop a").forEach((element) => {
    element.addEventListener("click", () => {
      localStorage.setItem("price", element.id);
    });
  });

  if (isLog == true) {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
    document.getElementById("logout").style.display = "block";
  }
}
