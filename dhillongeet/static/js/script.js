prompt("hi");
var accordions = document.getElementsByClassName("accordion");


for (var i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", = function() {
    this.classList.toggle('active');

    var content = this.nextElementSibling;
    if (content.style.display ==="block") {
      // accordion is currently open, so close it
      panel.style.display="none";

    } else {
      // accordion is currently closed, so open it
      content.style.display="block";
    }
  });
}
