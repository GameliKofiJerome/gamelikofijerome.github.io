document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully!");
});

// Scroll to Top
const scrollToTopButton = document.getElementById("scrollToTop");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

//Animmation triggeron Scroll
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Stops observing after animation runs once
            }
        });
    }, { threshold: 0.8 }); // Trigger when 80% of the element is in view

    elements.forEach(element => observer.observe(element));
});