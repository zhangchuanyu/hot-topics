var wrapper = document.querySelector(".container");
var tabs = document.querySelectorAll("header nav a");

let url = 'partials/home.html';


function ClickEvent(event) {

  event.preventDefault();

  let press = event.target.href;

  loadContent(press);

};
function loadContent(url) {
    fetch(url)
      .then(function (rsp) {
        return rsp.text();
      })
      .then(function (data) {
       
        wrapper.innerHTML = data;
      });
};


for (let i = 0; i < tabs.length; i++) {

  tabs[i].addEventListener("click", ClickEvent);

}
  loadContent(url);