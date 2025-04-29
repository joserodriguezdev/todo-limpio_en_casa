document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".carousel .card");
  
    let index = 0;
  
    function slideCarousel() {
      index = (index + 1) % cards.length;
      const offset = cards[index].offsetLeft - (track.offsetWidth - cards[index].offsetWidth) / 2;
      track.scrollTo({ left: offset, behavior: "smooth" });
    }
  
    setInterval(slideCarousel, 4000);
  });
  