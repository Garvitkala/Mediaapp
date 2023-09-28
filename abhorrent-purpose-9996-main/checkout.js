const idTour = localStorage.getItem("tourID");
var isLog = localStorage.getItem("isLog") ?? false;

const url = `https://abhorrent-purpose-9996.onrender.com/data`;

const progress = document.getElementById("progress");
const stepCircles = document.querySelectorAll(".circle");
let currentActive = 1;

var log = localStorage.getItem("isLog") ?? "";
var userData = JSON.parse(localStorage.getItem("userData")) ?? [];

var grand = 0;

function update(currentActive) {
  stepCircles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + "%";
}

async function fetchAndRender(link, id) {
  let res = await fetch(`${link}?id=${id}`);
  let data = await res.json();
  // console.log(data)
  dis(data);
}

// async function getData(id) {
//     let res = await fetch(`https://abhorrent-purpose-9996.onrender.com/users?id=${id}`);
//     let data = await res.json();
//     // console.log(data)
//     console.log(data)
// }

fetchAndRender(url, idTour);

function dis(arr) {
  let quantity = 0;

  document.querySelector("#bag").innerHTML = "";

  arr.forEach((element) => {
    let selected = document.createElement("h2");
    let travelDets = document.createElement("div");
    let img = document.createElement("img");
    let price = document.createElement("p");
    let startSpan = document.createElement("span");
    let startLabel = document.createElement("label");
    let endSpan = document.createElement("span");
    let endLabel = document.createElement("label");
    let start = document.createElement("input");
    let end = document.createElement("input");
    let memberSpan = document.createElement("span");
    let members = document.createElement("label");
    let amount = document.createElement("input");
    let total = document.createElement("p");
    let del = document.createElement("button");

    selected.innerText = `You've selected ${element.name}.`;
    img.setAttribute("src", element.images[0]);
    travelDets.setAttribute("id", "travelDets");
    // name.innerText = element.name;
    // location.innerText = element.location;
    price.innerText = `$ ${element.price}`;
    startLabel.setAttribute("for", "start");
    start.setAttribute("class", "date");
    start.setAttribute("type", "date");
    endLabel.setAttribute("for", "end");
    end.setAttribute("class", "date");
    end.setAttribute("type", "date");
    memberSpan.setAttribute("id", "memSpan");
    members.setAttribute("id", "memLabel");
    amount.setAttribute("min", 1);
    amount.setAttribute("value", 1);
    amount.setAttribute("type", "number");

    startLabel.innerText = "Start";
    startSpan.append(startLabel, start);
    endLabel.innerText = "End";
    endSpan.append(endLabel, end);
    members.innerText = "Members";
    memberSpan.append(members, amount);

    let tot = start.value && end.value ? amount.value * element.price : 0;
    total.innerText = `$${tot}`;
    del.innerText = "X";

    travelDets.append(price, startSpan, endSpan, memberSpan, total, del);

    document.querySelector("#bag").append(selected, img, travelDets);

    del.addEventListener("click", (event) => {
      arr = arr.filter((i) => i.id != element.id);
      dis(arr);
    });

    let d1;
    let d2;
    let days;

    amount.addEventListener("change", () => {
      total.innerText = days * amount.value * element.price;
      grand = total.innerText;
      // console.log(grand)
    });

    end.addEventListener("change", () => {
      d1 = new Date(start.value);
      d2 = new Date(end.value);
      days = Math.ceil(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));
      total.innerText = days * amount.value * element.price;
      grand = total.innerText;
      // console.log(grand)
    });
  });

  // console.log(grand)

  if (grand > 2000) {
    document.querySelector("#bag > h3").style.display = "block";
    // grand*=0.95;
  }

  // document.querySelector("#grand > h2").innerText = `GRAND TOTAL : $ ${Math.floor(grand)}`;

  // document.querySelector("main > h2").innerText = `MY BAG(${quantity})`;

  document.getElementById("actual").innerText = `$ ${Math.floor(grand)}`;
  document.getElementById("total-amount").innerText = `$ ${Math.floor(
    grand * 0.95
  )}`;
}

document.querySelector("main > button").addEventListener("click", (event) => {
  // console.log(grand)
  let totalpay = 0;
  if (currentActive == 1 && grand == 0) {
    Swal.fire("Please select dates");
  } else if (currentActive == 1) {
    update(++currentActive);
    event.target.innerText = "PROCEED TO CHECKOUT";
    document.getElementById("bag").style.display = "none";
    document.getElementById("address").style.display = "flex";
    // document.getElementById("grand").style.display = "none";
  } else if (
    currentActive == 2 &&
    document.getElementById("addressInp").value == ""
  ) {
    Swal.fire("Please enter address");
  } else if (currentActive == 2) {
    update(++currentActive);
    event.target.innerText = "PROCEED TO PAYMENT";
    document.getElementById("address").style.display = "none";
    document.getElementById("checkout").style.display = "block";
    document.getElementById("actual").innerText = `$ ${Math.floor(grand)}`;
    let discount = grand > 10000 ? Math.floor(grand * 0.05) : 0;
    document.querySelector("#discount").innerText = `$${discount}`;
    grand = grand - discount;
    document.querySelector("#toPay").innerText = `$${grand}`;

    // console.log(grand)
    event.target;
  } else if (currentActive == 3) {
    event.target.style.display = "none";
    document.querySelector("#toPay").innerText = `${
      grand - document.getElementById("discount").innerText
    }`;
    document.getElementById("checkout").style.display = "none";
    document.getElementById("payment").style.display = "block";
    document.getElementById("total-amount").innerText = `${grand}`;
  }

  // if(currentActive==2) {
  //     event.target.innerText="PROCEED TO CHECKOUT"
  //     document.getElementById("address").style.display="flex";
  //     // document.getElementById("grand").style.display = "none";
  //     document.getElementById("bag").style.display = "none";
  //     // document.querySelector('main>h2').style.display = "none";
  //     if(document.getElementById("Address").value) {

  //     }
  // } else if(currentActive==3) {
  //     event.target.innerText="PROCEED TO PAYMENT";
  //     document.getElementById("address").style.display="none";
  //     document.getElementById("checkout").style.display = "block";
  //     event.target
  // } else if(currentActive==4) {
  //     event.target.style.display="none";
  //     document.getElementById("checkout").style.display="none";
  //     document.getElementById("payment").style.display = "block";
  // }
});

var activePay = "credit";

document.getElementById("pay").addEventListener("click", () => {
  // console.log(activePay)
  if (activePay == "credit") {
    if (
      document.querySelector("#credit > input").value.split("").length == 16
    ) {
      // console.log(document.querySelector("#credit > input").value)
      Swal.fire(`Booking succesfully done!`);
      redirect();
    } else {
      Swal.fire(`Please enter valid credit card number.`);
    }
  } else if (activePay == "upi") {
    let upiId = document.querySelector("#upiPay > input").value;
    let check = upiId.split("");

    if (check.includes("@")) {
      Swal.fire(`Booking succesfully done!`);
      redirect();
    } else {
      Swal.fire(`Please enter valid UPI id.`);
    }
  } else {
    let accNumber = document.querySelector("#netbanking > input").value;
    let check = accNumber.split("");
    // console.log(check)

    if (check.length == 16) {
      Swal.fire(`Booking succesfully done!`);
      redirect();
    } else {
      Swal.fire(`Please enter account number.`);
    }
  }
});

let creditCard = document.getElementById("creditCard");
let upi = document.getElementById("upi");
let banking = document.getElementById("banking");

let credit = document.getElementById("credit");
let upiPay = document.getElementById("upiPay");
let netbanking = document.getElementById("netbanking");

creditCard.addEventListener("click", () => {
  creditCard.style.filter = "brightness(100%)";
  upi.style.filter = "brightness(80%)";
  banking.style.filter = "brightness(80%)";
  credit.style.display = "flex";
  upiPay.style.display = "none";
  netbanking.style.display = "none";

  activePay = "credit";
});

upi.addEventListener("click", () => {
  creditCard.style.filter = "brightness(80%)";
  upi.style.filter = "brightness(100%)";
  banking.style.filter = "brightness(80%)";
  credit.style.display = "none";
  upiPay.style.display = "block";
  netbanking.style.display = "none";

  activePay = "upi";
});

banking.addEventListener("click", () => {
  creditCard.style.filter = "brightness(80%)";
  upi.style.filter = "brightness(80%)";
  banking.style.filter = "brightness(100%)";
  credit.style.display = "none";
  upiPay.style.display = "none";
  netbanking.style.display = "flex";

  activePay = "banking";
});

function redirect() {
  setTimeout(() => {
    document.location.href = "./index.html";
  }, 5000);
  localStorage.setItem("user", JSON.stringify(num.value));
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

if (isLog == "true") {
  document.getElementById("login").style.display = "none";
  document.getElementById("signUp").style.display = "none";
  document.getElementById("logout").style.display = "block";
  document.querySelectorAll("#address > input").forEach((el,j) => {
    let data = JSON.parse(localStorage.getItem("formData"))
    if(j == 4) {
      // el.value = data[0].mobile;
    } else if(j == 5) {
      el.value = data[0].email;
    } else if(j == 6) {
      el.value = data[0].name;
    } else {
      
    }
  })
}
