let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    document.querySelector("header").classList.add("hide");
  } else {
    document.querySelector("header").classList.remove("hide");
  }
  lastScrollTop = currentScroll;
});

document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const headerNav = document.querySelector(".header-container nav ul");
  const menuIcon = document.querySelector(".menu-icon");

  menuToggle.addEventListener("change", function() {
    if (this.checked) {
      headerNav.style.display = "block";
      menuIcon.textContent = "\u2715";
      menuIcon.classList.add("checked");
    } else {
      headerNav.style.display = "none";
      menuIcon.textContent = "\u2630";
      menuIcon.classList.remove("checked");
    }
  });
});

function openTab(evt, tabName) {
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
