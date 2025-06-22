let allCards = [];
let selectedCategory = "All";

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

function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();

  const filtered = allCards.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(query);
    const matchesCategory = selectedCategory === "All" || card.category === selectedCategory;
    return matchesSearch && matchesCategory;
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

  // Search input listener
  document.getElementById('searchInput').addEventListener('input', handleSearch);

  // Category button listeners
  document.querySelectorAll('.category-filter button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.category-filter button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      selectedCategory = button.dataset.category;
      handleSearch();
    });
  });
});
