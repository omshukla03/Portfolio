
window.addEventListener("scroll", function () {
  const header = document.querySelector("header.navbar");
  header.classList.toggle("scrolled", window.scrollY > 10);
});


  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const showMoreBtn = document.getElementById('show-more-btn');
  const showMoreContainer = document.getElementById('show-more-container');

  const MAX_VISIBLE = 6;
  let currentFilter = 'all';
  let expanded = false;

  function updateVisibility() {
    let visibleCount = 0;
    portfolioItems.forEach(item => {
      const category = item.getAttribute('data-category');
      const match = (currentFilter === 'all' || category === currentFilter);

      if (match) {
        visibleCount++;
        if (!expanded && visibleCount > MAX_VISIBLE) {
          item.style.display = 'none';
        } else {
          item.style.display = 'block';
        }
      } else {
        item.style.display = 'none';
      }
    });

    if (!expanded && visibleCount > MAX_VISIBLE) {
      showMoreContainer.style.display = 'block';
    } else {
      showMoreContainer.style.display = 'none';
    }
  }

filterBtns.forEach(btn => {
btn.addEventListener('click', () => {
filterBtns.forEach(b => b.classList.remove('active-tab'));
btn.classList.add('active-tab');
currentFilter = btn.getAttribute('data-filter');
expanded = false;
updateVisibility();
});
});


  showMoreBtn?.addEventListener('click', () => {
    expanded = true;
    updateVisibility();
  });

   document.addEventListener("DOMContentLoaded", function () {
    const fillBars = document.querySelectorAll(".fill-bar");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.dataset.width;
          bar.style.width = width;
          observer.unobserve(bar); // Stop observing once animated
        }
      });
    }, { threshold: 0.1 });

    fillBars.forEach(bar => {
      observer.observe(bar);
    });
  });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

  updateVisibility();





