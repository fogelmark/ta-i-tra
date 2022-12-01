let mybutton = document.querySelector('#arrow')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}