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
const crud = document.getElementsByClassName("client_crud");

function scroll(e) {

  if (panels) {    
    panels = false;    
    $(e.target.nextSibling.nextSibling).toggle("slow");
    
  } else {
    panels = true;
    $(e.target.nextSibling.nextSibling).toggle("slow");
  }
 
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", scroll, false);
}

// PROMPT CONFIRMATION

let prompt = true;

function prompt_close() {
  if (prompt) {
    prompt = false;
    $('#prompt_container').css('transition', '250ms all'); 
    $('#prompt_container').css('opacity', '0');
    $('#prompt_container').css('visibility', 'hidden');
    $('#prompt_container').css('pointer-events', 'none');
  }
}

function prompt_toggle() {
  prompt = true;
    $('#prompt_container').css('transition', '250ms all'); 
    $('#prompt_container').css('opacity', '1');
    $('#prompt_container').css('visibility', 'visible');
    $('#prompt_container').css('pointer-events', 'initial');
    $('#prompt_container').css('display', 'initial');
}