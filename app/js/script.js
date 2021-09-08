const hamburgerBtn = document.querySelector(".hamburger__button");
const header = document.querySelector(".header");
const mobile = document.querySelector(".mobile");

hamburgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hamburger button clicked");
  if (
    header.classList.contains("open") &&
    mobile.classList.contains("expand")
  ) {
    header.classList.remove("open");
    mobile.classList.remove("expand");
  } else {
    header.classList.add("open");
    mobile.classList.add("expand");
  }
});

const tabContent = document.getElementsByClassName("tab__content");
const tabButton = document.getElementsByClassName("credits__tabs__button");
const castButton = document.getElementById("cast__button");
const crewButton = document.getElementById("crew__button");

// Cast tab
castButton.addEventListener("click", function (evt) {
  console.log("cast button clicked");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  for (let i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(" active", "");
  }

  document.getElementById("cast__tab").style.display = "block";
  evt.currentTarget.className += " active";
});

// Crew tab
crewButton.addEventListener("click", function (evt) {
  console.log("crew button clicked");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  for (let i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(" active", "");
  }

  document.getElementById("crew__tab").style.display = "block";
  evt.currentTarget.className += " active";
});

// default open tab
castButton.click();

const year = document.getElementById("year");
const date = new Date();
year.innerText = date.getFullYear();
