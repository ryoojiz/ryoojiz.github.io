window.onscroll = function() {myFunction()};
nav = document.getElementById("navbar")
btn = document.getElementById("loginbtn")
function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   btn.classList.add("mcbtn");
   nav.classList.add("scrolled");
  } else {
    btn.classList.remove("mcbtn");
    nav.classList.remove("scrolled");
  }
}