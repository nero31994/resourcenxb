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

  animateOnScroll(); // Trigger scroll animation observer
}

function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = allCards.filter(card =>
    card.name.toLowerCase().includes(query)
  );
  renderCards(filtered);
}

function animateOnScroll() {
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => {
    observer.observe(card);
  });
}

// Load from embedded JSON
document.addEventListener('DOMContentLoaded', () => {
  allCards = cardData;
  renderCards(allCards);
  document.getElementById('searchInput').addEventListener('input', handleSearch);
});
