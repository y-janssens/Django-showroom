let alertWrapper = document.querySelector(".alert");
let alertClose = document.querySelector(".alert__close");

if (alertWrapper) {
  alertClose.addEventListener(
    "click",
    () => (alertWrapper.style.display = "none")
  );
}

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
