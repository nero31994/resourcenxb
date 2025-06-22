let allCards = [];

function renderCards(cards) {
  const container = document.getElementById('cardContainer');
  container.innerHTML = "";

  if (cards.length === 0) {
    container.innerHTML = "<p>No results found.</p>";
    return;
  }

  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `
      <div class="logo-container">
        <img src="${card.logo}" alt="${card.name} Logo">
      </div>
      <h3>${card.name}</h3>
      <a href="${card.url}" target="_blank">PLAY</a>
    `;
    container.appendChild(cardElement);
  });

  animateOnScroll();
}

function handleSearchAndFilter() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const activeBtn = document.querySelector('.category-filter button.active');
  const activeCategory = activeBtn ? activeBtn.dataset.category : "All";

  const filtered = allCards.filter(card => {
    const matchCategory = (activeCategory === "All" || card.category === activeCategory);
    const matchSearch = card.name.toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });

  renderCards(filtered);
}

function animateOnScroll() {
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => {
    observer.observe(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  allCards = cardData;
  renderCards(allCards);

  document.getElementById('searchInput').addEventListener('input', handleSearchAndFilter);

  const categoryButtons = document.querySelectorAll('.category-filter button');
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      handleSearchAndFilter();
    });
  });
});
