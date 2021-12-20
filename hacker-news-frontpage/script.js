//Get the button
const btn = document.querySelector("#btn");

// When the user scrolls down 20px from the top of the document, show the button

document.addEventListener("scroll", showBtn);

function showBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  } 
}

// When the user clicks on the button, scroll to the top of the document

btn.addEventListener("click", clickTop);

function clickTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}