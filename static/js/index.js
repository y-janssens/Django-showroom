// ALERTS

let alertWrapper = document.querySelector(".alert");
let alertClose = document.querySelector(".alert__close");

if (alertWrapper) {
  alertClose.addEventListener(
    "click",
    () => (alertWrapper.style.display = "none")
  );
}

// SEARCHBAR FIX
let searchForm = document.getElementById("search_form");
let pageLinks = document.getElementsByClassName("pages");

if (searchForm) {
  for (let i = 0; pageLinks.length > i; i++) {
    pageLinks[i].addEventListener("click", function (e) {
      e.preventDefault();
      let page = this.dataset.page;
      searchForm.innerHTML += `<input value=${page} name="page" hidden/>`;
      searchForm.submit();
    });
  }
}

// CLIENT FILE TOGGLE

let panels = true;
const buttons = document.getElementsByClassName("client_line");

function hide(e) {
  if (panels) {
    panels = false;
    $(e.target.nextSibling.nextSibling).toggle("slow");
  } else {
    panels = true;
    $(e.target.nextSibling.nextSibling).toggle("slow");
  }
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", hide, false);
}
