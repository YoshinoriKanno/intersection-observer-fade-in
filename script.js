const items = document.querySelectorAll('.fade');

const options = {
  rootMargin: '0px',
  threshold: 0.5
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

items.forEach(item => {
  observer.observe(item);
});
