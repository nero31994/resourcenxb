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
      <img src="${card.logo}" alt="${card.name} Logo">
      <h3>${card.name}</h3>
      <a href="${card.url}" target="_blank">Visit</a>
    `;
    container.appendChild(cardElement);
  });
}

function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = allCards.filter(card => card.name.toLowerCase().includes(query));
  renderCards(filtered);
}

// Fetch and render initial cards
fetch('cards.json')
  .then(res => res.json())
  .then(data => {
    allCards = data;
    renderCards(allCards);
  })
  .catch(err => {
    console.error("Failed to load cards.json:", err);
  });

// Add event listener to search input
document.getElementById('searchInput').addEventListener('input', handleSearch); 
