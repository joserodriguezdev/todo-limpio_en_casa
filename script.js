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
  function scrollToSection(className) {
    const section = document.querySelector(`.${className}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    const sections = [
      { id: "carousel", button: null },
      { id: "litro", button: null },
      { id: "litros", button: null },
      { id: "videos", button: null },
    ];
  
    // Asociar botones
    sections.forEach(section => {
      section.button = document.querySelector(
        `.navbar button[onclick*="${section.id}"]`
      );
    });
  
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY + window.innerHeight / 2;
  
      sections.forEach(section => {
        const el = document.querySelector(`.${section.id}`);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
  
          if (scrollPos >= top && scrollPos <= bottom) {
            sections.forEach(s => s.button.classList.remove("active"));
            section.button.classList.add("active");
          }
        }
      });
    });
  });
  