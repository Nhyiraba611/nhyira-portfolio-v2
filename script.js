function explorePortfolio() {

  /* Show hidden sections */
  document.getElementById("about").style.display = "block";
  document.getElementById("projects").style.display = "block";
  document.getElementById("contact").style.display = "block";

  document.querySelector("footer").style.display = "block";

  /* Smooth scroll to About section */
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });

}