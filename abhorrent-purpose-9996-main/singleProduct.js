let product = document.getElementById("product_wrapper");

let productId = JSON.parse(localStorage.getItem("tourID"));
async function fetchData() {
  try {
    let res = await fetch(
      `https://abhorrent-purpose-9996.onrender.com/data?id=${productId}`
    );
    let data = await res.json();
    console.log(data);

    $(document).ready(function () {
      $(".carousel").carousel();
    });
    console.log(data);
    createProduct(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

function createProduct(data) {
  product.innerHTML = "";

  let cardList = document.createElement("div");
  cardList.classList.add("card-list");
  product.append(cardList);

  data.forEach((item) => {
    let card = cardCreate(item);
    cardList.append(card);
  });
}

function cardCreate(item) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", item.id);

  let content = document.createElement("div");
  content.classList.add("card-content");

  let h1 = document.createElement("h1");
  h1.classList.add("card-title");
  h1.textContent = item.name;

  let btn = document.createElement("button");
  btn.classList.add("card-button");
  btn.textContent = "Book Now";

  btn.addEventListener("click", () => {
    location.href = "./checkout.html";
  });

  content.append(h1, btn);

  let mainDiv = document.createElement("div");
  mainDiv.classList.add("main-div");

  let carousel = document.createElement("div");
  carousel.classList.add("carousel");
  carousel.setAttribute("data-ride", "carousel");

  let carouselInner = document.createElement("div");
  carouselInner.classList.add("carousel-inner");

  item.images.forEach((image, index) => {
    let carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    let img = document.createElement("img");
    img.src = image;
    img.classList.add("d-block", "w-100");
    img.setAttribute("alt", "pik");

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  });

  let prevButton = document.createElement("a");
  prevButton.classList.add("carousel-control-prev");
  prevButton.setAttribute("href", "#" + item.id);
  prevButton.setAttribute("role", "button");
  prevButton.setAttribute("data-slide", "prev");

  let prevIcon = document.createElement("span");
  prevIcon.classList.add("carousel-control-prev-icon");
  prevIcon.setAttribute("aria-hidden", "true");

  let prevText = document.createElement("span");
  prevText.classList.add("sr-only");
  prevText.textContent = "Previous";

  prevButton.appendChild(prevIcon);
  prevButton.appendChild(prevText);

  let nextButton = document.createElement("a");
  nextButton.classList.add("carousel-control-next");
  nextButton.setAttribute("href", "#" + item.id);
  nextButton.setAttribute("role", "button");
  nextButton.setAttribute("data-slide", "next");

  let nextIcon = document.createElement("span");
  nextIcon.classList.add("carousel-control-next-icon");
  nextIcon.setAttribute("aria-hidden", "true");

  let nextText = document.createElement("span");
  nextText.classList.add("sr-only");
  nextText.textContent = "Next";

  nextButton.appendChild(nextIcon);

  nextButton.appendChild(nextText);

  carousel.appendChild(carouselInner);
  carousel.appendChild(prevButton);
  carousel.appendChild(nextButton);

  mainDiv.append(carousel);

  card.append(content, mainDiv);
  return card;
}
