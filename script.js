function Scroll(toClass) {
    var element = document.querySelector(toClass);
    element.scrollIntoView();
}

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

function chBackcolor(color) {
    document.body.style.background = color;
 }

 