let Form = document.querySelector("#Lbtn");
let LSEmail = document.getElementById("Lemail");
let LSPass = document.getElementById("Lpassword");

let dataForm = JSON.parse(localStorage.getItem("formData")) || [];

Form.addEventListener("click", loginData);

function loginData(e) {
  e.preventDefault();

  let flag = false;
  for (let i = 0; i < dataForm.length; i++) {
    if (
      LSEmail.value === dataForm[i].email &&
      LSPass.value === dataForm[i].password
    ) {
      flag = true;
      break;
    }
  }
  if (flag) {
    localStorage.setItem("isLog", true);
    location.href = "./index.html";
  } else if (LSEmail.value === "admin" && LSPass.value === "admin") {
    location.href = "./admin.html";
  } else {
    alert("Email And Password are different");
  }
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
  document.querySelector(".menu #login").style.display = "none";
  document.getElementById("signUp").style.display = "none";
  document.getElementById("logout").style.display = "block";
}
