const url = "https://abhorrent-purpose-9996.onrender.com/data";

var isLog = localStorage.getItem("isLog") ?? false;

var locationFilter = localStorage.getItem("location")
  ? `&location=${localStorage.getItem("location")}`
  : "";
var priceFilter = localStorage.getItem("price")
  ? `&price_lte=${localStorage.getItem("price")}&price_gte=${
      localStorage.getItem("price") - 5000
    }`
  : "";
var ratingFilter = "";

var pricingSort = "";
var ratingSort = "";

var pageNumber = 1;

var urlSTR = "";

function updateStr() {
  urlSTR = `${pageNumber}${locationFilter}${priceFilter}${ratingFilter}${pricingSort}${ratingSort}`;
  console.log(urlSTR);
  localStorage.removeItem("location");
  localStorage.removeItem("price");
  fetchAndRender(urlSTR);
}

updateStr();

let wrapper = document.getElementById("cards-wrapper");
let page = document.getElementById("pagination");

let rate = document.getElementById("rating");
let pricesSort = document.getElementById("pricesSort");

let rateSort = document.getElementById("ratingSort");
let priceSort = document.getElementById("priceSort");

let locationClear = document.getElementById("clearLocation");
locationClear.addEventListener("click", (event) => {
  locationFilter = "";
  document.querySelectorAll("#dropLocation .filterLocation").forEach((i, j) => {
    i.style.color = "white";
    i.style.fontWeight = "";
  });
  updateStr();
});
let asia = document.getElementById("Asia");
asia.addEventListener("click", (event) => {
  locationFilter = `&location=${event.target.id}`;
  document.querySelectorAll("#dropLocation .filterLocation").forEach((i, j) => {
    if (j == 1) {
      i.style.color = "#ffc107";
      i.style.fontWeight = "bolder";
    } else {
      i.style.color = "white";
      i.style.fontWeight = "";
    }
  });
  updateStr();
});
let europe = document.getElementById("Europe");
europe.addEventListener("click", (event) => {
  locationFilter = `&location=${event.target.id}`;
  document.querySelectorAll("#dropLocation .filterLocation").forEach((i, j) => {
    if (j == 2) {
      i.style.color = "#ffc107";
      i.style.fontWeight = "bolder";
    } else {
      i.style.color = "white";
      i.style.fontWeight = "";
    }
  });
  updateStr();
});
let north = document.getElementById("North");
north.addEventListener("click", (event) => {
  locationFilter = `&location=North America`;
  document.querySelectorAll("#dropLocation .filterLocation").forEach((i, j) => {
    if (j == 3) {
      i.style.color = "#ffc107";
      i.style.fontWeight = "bolder";
    } else {
      i.style.color = "white";
      i.style.fontWeight = "";
    }
  });
  updateStr();
});
let south = document.getElementById("South");
south.addEventListener("click", (event) => {
  locationFilter = `&location=South America`;
  document.querySelectorAll("#dropLocation .filterLocation").forEach((i, j) => {
    if (j == 4) {
      i.style.color = "#ffc107";
      i.style.fontWeight = "bolder";
    } else {
      i.style.color = "white";
      i.style.fontWeight = "";
    }
  });
  updateStr();
});
let africa = document.getElementById("Africa");
africa.addEventListener("click", (event) => {
  locationFilter = `&location=${event.target.id}`;
  document.querySelectorAll("#dropLocation .filterLocation").forEach((i, j) => {
    if (j == 5) {
      i.style.color = "#ffc107";
      i.style.fontWeight = "bolder";
    } else {
      i.style.color = "white";
      i.style.fontWeight = "";
    }
  });
  updateStr();
});

let priceClear = document.getElementById("clearPrice");
priceClear.addEventListener("click", (event) => {
  priceFilter = "";
  updateStr();
});


document.querySelectorAll(".priceFilter").forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.id == "clearPrice") {
      priceFilter = "";
      document.querySelectorAll(".filterPrice").forEach((i) => {
        i.style.color = "white";
      });
      updateStr();
    } else if (element.id == "25000") {
      priceFilter = `&price_gte=${event.target.id - 5000}`;
      document.querySelectorAll(".filterPrice").forEach((i) => {
        i.style.color = "white";
      });
      event.target.parentElement.style.color = "#ffc107";
      updateStr();
    } else {
      priceFilter = `&price_gte=${event.target.id - 5000}&price_lte=${
        event.target.id
      }`;
      document.querySelectorAll(".filterPrice").forEach((i) => {
        i.style.color = "white";
      });
      event.target.parentElement.style.color = "#ffc107";
      updateStr();
    }
  });
});

let ratingClear = document.getElementById("clearRating");
ratingClear.addEventListener("click", (event) => {
  ratingFilter = "";
  document.querySelectorAll(".filterRating").forEach((i, j) => {
    i.style.color = "white";
    i.style.fontWeight = "";
  });
  updateStr();
});
let one = document.getElementById("1");
one.addEventListener("click", (event) => {
  ratingFilter = `&rating_gte=${event.target.id - 1}&rating_lte=${
    event.target.id
  }`;
  locationFilter = `&location=${event.target.id}`;
  document.querySelectorAll(".filterRating").forEach((i, j) => {
    if (j == 1) {
      i.style.color = "#ffc107";
      i.style.fontWeight = "bolder";
    } else {
      i.style.color = "white";
      i.style.fontWeight = "";
    }
  });
  updateStr();
});
let two = document.getElementById("2");
two.addEventListener("click", (event) => {
  ratingFilter = `&rating_gte=${event.target.id - 1}&rating_lte=${
    event.target.id
  }`;
  document.querySelectorAll(".filterRating").forEach((i, j) => {
    if (j == 2) {
      i.style.color = "#ffc107";
      i.style.fontWeight = "bolder";
    } else {
      i.style.color = "white";
      i.style.fontWeight = "";
    }
  });
  updateStr();
});
let three = document.getElementById("3");
three.addEventListener("click", (event) => {
  ratingFilter = `&rating_gte=${event.target.id - 1}&rating_lte=${
    event.target.id
  }`;
  document.querySelectorAll(".filterRating").forEach((i, j) => {
    if (j == 3) {
      i.style.color = "#ffc107";
      i.style.fontWeight = "bolder";
    } else {
      i.style.color = "white";
      i.style.fontWeight = "";
    }
  });
  updateStr();
});
let four = document.getElementById("4");
four.addEventListener("click", (event) => {
  ratingFilter = `&rating_gte=${event.target.id - 1}&rating_lte=${
    event.target.id
  }`;
  document.querySelectorAll(".filterRating").forEach((i, j) => {
    if (j == 4) {
      i.style.color = "#ffc107";
      i.style.fontWeight = "bolder";
    } else {
      i.style.color = "white";
      i.style.fontWeight = "";
    }
  });
  updateStr();
});
let full = document.getElementById("5");
full.addEventListener("click", (event) => {
  ratingFilter = `&rating_gte=${event.target.id - 1}&rating_lte=${
    event.target.id
  }`;
  document.querySelectorAll(".filterRating").forEach((i, j) => {
    if (j == 5) {
      i.style.color = "#ffc107";
      i.style.fontWeight = "bolder";
    } else {
      i.style.color = "white";
      i.style.fontWeight = "";
    }
  });
  updateStr();
});

rate.addEventListener("click", (event) => {
  // console.log(event.target.id);
  document.getElementById("ratingSort").style.display = "block";
  document.getElementById("priceSort").style.display = "none";
});

pricesSort.addEventListener("click", (event) => {
  // console.log(event.target.id);
  document.getElementById("ratingSort").style.display = "none";
  document.getElementById("priceSort").style.display = "block";
});

rateSort.addEventListener("change", (event) => {
  ratingSort = `&_sort=rating&_order=${event.target.value}`;
  pricingSort = "";
  updateStr();
});

priceSort.addEventListener("change", (event) => {
  pricingSort = `&_sort=price&_order=${event.target.value}`;
  ratingSort = "";
  updateStr();
});

async function fetchAndRender(str) {
  let link = `${url}?_limit=10&_page=${str}`;
  console.log(link);
  let res = await fetch(`${link}`);
  total = res.headers.get("X-Total-Count");
  totalPages = Math.ceil(total / 10);
  let data = await res.json();

  console.log(data);
  getCardList(data);
  setButtons(totalPages, str);
}

// fetchAndRender(1)

function getCardList(arr) {
  wrapper.innerHTML = "";
  // console.log(wrapper)

  let cardList = document.createElement("div");
  cardList.classList.add("card-list");

  arr.forEach((item, j) => {
    let card = getCard(
      item.id,
      item.name,
      item.rating,
      item.location,
      item.price,
      item.images,
      j
    );
    cardList.append(card);
  });
  wrapper.append(cardList);
}

function getCard(id, name, rating, location, price, images, j) {
  // if(type !== "") {
  //     list = arr.filter((el) => el.type.toUpperCase() == type.toUpperCase())
  // } else {
  //     list = arr.filter((el) => el.id.toUpperCase() == id.toUpperCase())
  // }

  // console.log(list)
  let card = document.createElement("div");
  card.classList.add("cards");
  card.dataset.id = j + 1;

  let bg = document.createElement("div");
  bg.setAttribute("class", "bg");
  let left = document.createElement("div");
  let right = document.createElement("div");
  let cardRating = document.createElement("div");
  let img = document.createElement("img");
  let star = document.createElement("img");
  let starHalf = document.createElement("img");
  let cardName = document.createElement("h2");
  let cardLocation = document.createElement("h4");
  let cardPrice = document.createElement("p");
  let tax = document.createElement("h6");
  let add = document.createElement("button");

  left.setAttribute("class", "left");
  right.setAttribute("class", "right");
  // bg.style.backgroundImage = `url(${images[0]})`;
  // bg.style.backgroundSize = "cover"
  // bg.style.backgroundPosition = "center"
  // bg.style.filter = "brightness(60%)"
  card.style.backgroundImage = `url(${images[0]})`;
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";
  // card.style.filter = "brightness(80%)"
  star.setAttribute("src", "./Images/star.png");
  starHalf.setAttribute("src", "./Images/rating.png");
  let rate = "";
  for (let i = 0; i < rating - 1; i++) {
    cardRating.innerHTML += '<img src="./Images/star.png" alt=""/>';
  }
  if (rating % 1 != 0) {
    cardRating.append(starHalf);
  }

  cardRating.classList.add("rating");
  img.setAttribute("src", "./Images/triple.png");
  cardName.innerText = name;
  cardLocation.innerText = location;
  cardPrice.innerText = `$ ${price}`;
  tax.innerText = "(MRP incl. of all taxes)";
  add.innerText = "Book Now";

  // left.append(name, img2)
  left.append(cardName, cardLocation, cardPrice, tax, add);

  right.append(cardRating, img);
  card.append(left, right);

  add.addEventListener("click", (event) => {
    event.stopPropagation();
    localStorage.setItem("tourID", JSON.stringify(id));
    redirect("./checkout.html");
  });

  card.addEventListener("click", (event) => {
    // console.log(`You've selected ${name}`)
    localStorage.setItem("tourID", JSON.stringify(id));
    redirect("./singleProduct.html");
  });

  return card;
}

function redirect(link) {
  setTimeout(() => {
    window.location.href = link;
  }, 100);
}

function setButtons(pages) {
  page.innerText = null;
  for (let i = 0; i < pages; i++) {
    let button = getButton(i + 1);
    page.append(button);
  }
}

function getButton(number, str) {
  let btn = document.createElement("button");
  btn.classList.add("pagination-button");
  btn.dataset.id = number;
  btn.innerText = number;
  btn.addEventListener("click", () => {
    pageNumber = btn.dataset.id;
    // console.log(pageNumber)
    updateStr();
  });
  return btn;
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
  // console.log(document.getElementById("pricedrop"));
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
// console.log(document.querySelectorAll("#locdrop a"));
document.querySelectorAll("#locdrop a").forEach((element) => {
  element.addEventListener("click", (event) => {
    // event.preventDefault()
    localStorage.setItem("location", element.innerText);
    // console.log("test");
  });
});
document.querySelectorAll("#pricedrop a").forEach((element) => {
  element.addEventListener("click", () => {
    localStorage.setItem("price", element.id);
  });
});

if (isLog == "true") {
  document.getElementById("login").style.display = "none";
  document.getElementById("signUp").style.display = "none";
  document.getElementById("logout").style.display = "block";
}
