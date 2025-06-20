const cardsData = [
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",
    url: "go:1"
  },
  {
    name: "Disney+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Disney%2B_logo.svg",
    url: "https://www.disneyplus.com"
  },
  {
    name: "HBO Max",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/HBO_Max_Logo.svg",
    url: "https://www.hbomax.com"
  },
  {
    name: "Prime Video",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
    url: "https://www.primevideo.com"
  },
  {
    name: "YouTube",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
    url: "https://www.youtube.com"
  }
];

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
      <img src="${card.logo}" alt="${card.name} Logo" />
      <h3>${card.name}</h3>
      <a href="${card.url}" target="_blank">Visit</a>
    `;
    container.appendChild(cardElement);
  });
}

function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = cardsData.filter(card =>
    card.name.toLowerCase().includes(query)
  );
  renderCards(filtered);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderCards(cardsData);
  document.getElementById("searchInput").addEventListener("input", handleSearch);
});
