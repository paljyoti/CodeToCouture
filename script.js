const tabs = document.querySelectorAll('.tab');
const testimonials = document.querySelectorAll('.testimonial');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('active')) return;

    tabs.forEach(t => t.classList.remove('active'));
    testimonials.forEach(content => {
      content.classList.remove('active');
    });

    tab.classList.add('active');

    const selected = document.getElementById(tab.dataset.tab);

    setTimeout(() => {
      selected.classList.add('active');
    }, 100);
  });
});
