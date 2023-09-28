let form = document.querySelector("#create");
form.addEventListener("click", (event) => {
  event.preventDefault();
  formData();
});

let dataForm = JSON.parse(localStorage.getItem("formData")) || [];

function formData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let flag = true;
  dataForm.forEach((el) => {
    if (email === null || email === el.email) {
      flag = false;
    }
  });
  if (flag == false) {
    alert("Email Already Registered");
  } else {
    dataForm.push({ name, email, password });
    localStorage.setItem("formData", JSON.stringify(dataForm));
    localStorage.setItem("isLog", true);
    // document.location.href = "./index.html";
  }
}
document.getElementById("create").addEventListener("click", () => {
  location.href = "./index.html";
});

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
  document.querySelector(".menu #login").style.display = "none";
  document.getElementById("signUp").style.display = "none";
  document.getElementById("logout").style.display = "block";
}
