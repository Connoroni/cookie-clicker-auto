const sectionLeft = document.getElementById("sectionLeft");

const buttonDiv = document.createElement("div");
const clickButton = document.createElement("button");
const shimmerButton = document.createElement("button");
const clickIcon = document.createElement("img");
const shimmerIcon = document.createElement("img");

buttonDiv.id = "buttonDiv";
buttonDiv.style.position = "absolute";
buttonDiv.style.top = 0;
buttonDiv.style.display = "flex";
buttonDiv.style.justifyContent = "center";
buttonDiv.style.width = "20%";
buttonDiv.style.zIndex = "999";

let isClick = false;
let isShimmer = false;

// clickButton.textContent = "Toggle Autoclick";
clickButton.style.width = "fit-content";
clickButton.style.height = "fit-content";
clickButton.style.padding = "2px";
clickButton.style.borderRadius = "50%";
clickButton.style.margin = "5px";
clickButton.style.borderColor = "transparent";
clickButton.style.borderWidth = "2px";
clickButton.style.background = "rgba(0,0,0,0.4)";
clickButton.style.cursor = "pointer";
clickButton.style.zIndex = "999";
clickButton.addEventListener("click", toggleClick);

clickIcon.src = browser.runtime.getURL("icons/cursor.webp");
clickIcon.style.height = "25px";
clickIcon.style.width = "25px";
clickIcon.alt = "Triple cursor icon";
clickButton.append(clickIcon);

// shimmerButton.textContent = "Toggle Auto Shimmer";
shimmerButton.style.width = "fit-content";
shimmerButton.style.height = "fit-content";
shimmerButton.style.padding = "2px";
shimmerButton.style.borderRadius = "50%";
shimmerButton.style.margin = "5px";
shimmerButton.style.borderColor = "transparent";
shimmerButton.style.borderWidth = "2px";
shimmerButton.style.background = "rgba(0,0,0,0.4)";
shimmerButton.style.cursor = "pointer";
shimmerButton.style.zIndex = "999";
shimmerButton.addEventListener("click", toggleShimmer);

shimmerIcon.src = browser.runtime.getURL("icons/shimmer.webp");
shimmerIcon.style.height = "25px";
shimmerIcon.style.width = "25px";
shimmerIcon.alt = "Golden cookie icon";
shimmerButton.append(shimmerIcon);

sectionLeft.append(buttonDiv);
buttonDiv.append(clickButton, shimmerButton);

let clickInterval;
function toggleClick() {
  if (!isClick) {
    clickInterval = setInterval(() => {
      document.getElementById("bigCookie").click();
    }, 5);
    isClick = true;
    console.log("Auto click on");
    clickButton.style.borderColor = "rgb(220,220,220)";
  } else {
    clearInterval(clickInterval);
    isClick = false;
    console.log("Auto click off");
    clickButton.style.borderColor = "transparent";
  }
}

let shimmerInterval;
function toggleShimmer() {
  if (!isShimmer) {
    shimmerInterval = setInterval(() => {
      let shimmer = document.getElementsByClassName("shimmer")[0];
      if (shimmer) {
        shimmer.click();
      }
    }, 50);
    isShimmer = true;
    console.log("Auto shimmer on");
    shimmerButton.style.borderColor = "rgb(220,220,220)";
  } else {
    clearInterval(shimmerInterval);
    isShimmer = false;
    console.log("Auto shimmer off");
    shimmerButton.style.borderColor = "transparent";
  }
}
