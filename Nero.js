// nero-cards.js

const CARDS = [
  // Your full card list here (same as before)
];

// --- SETTINGS ---
const perPage = 20;
let currentIndex = 0;
let filteredCards = CARDS;
let selectedCardIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// --- DOM ELEMENTS ---
const grid = document.getElementById('grid');
const loader = document.getElementById('loader');
const searchInput = document.getElementById('search');
const categoryContainer = document.getElementById('categories');
const topButton = document.getElementById('goTop');

// --- UTILITY FUNCTIONS ---
function createCardElement(item, index) {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = item.href;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.setAttribute('aria-label', item.title);
  a.dataset.index = index;

  const media = document.createElement('div');
  media.className = 'media';

  const img = document.createElement('img');
  img.loading = 'lazy';
  img.decoding = 'async';
  img.alt = item.title || '';
  img.src = item.image;
  media.appendChild(img);

  if (item.badge) {
    const b = document.createElement('span');
    b.className = 'badge';
    b.textContent = item.badge;
    media.appendChild(b);
  }

  // Favorite star
  const fav = document.createElement('span');
  fav.className = favorites.includes(item.title) ? 'fav active' : 'fav';
  fav.textContent = '★';
  fav.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(item.title, fav);
  });
  media.appendChild(fav);

  const meta = document.createElement('div');
  meta.className = 'meta';

  const h = document.createElement('p');
  h.className = 'title';
  h.textContent = item.title || '';

  const d = document.createElement('p');
  d.className = 'desc';
  d.textContent = item.desc || '';

  meta.appendChild(h);
  meta.appendChild(d);
  a.appendChild(media);
  a.appendChild(meta);

  return a;
}

function toggleFavorite(title, element) {
  if (favorites.includes(title)) {
    favorites = favorites.filter(f => f !== title);
    element.classList.remove('active');
  } else {
    favorites.push(title);
    element.classList.add('active');
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// --- RENDER FUNCTION ---
function renderChunk(list) {
  const frag = document.createDocumentFragment();
  const slice = list.slice(currentIndex, currentIndex + perPage);
  slice.forEach((item, idx) => {
    frag.appendChild(createCardElement(item, currentIndex + idx));
  });
  grid.appendChild(frag);
  currentIndex += perPage;
}

// --- SEARCH ---
function handleSearch() {
  const query = searchInput.value.toLowerCase();
  filteredCards = CARDS.filter(c => c.title.toLowerCase().includes(query) || c.desc.toLowerCase().includes(query));
  currentIndex = 0;
  grid.innerHTML = '';
  renderChunk(filteredCards);
}

// --- CATEGORY FILTER ---
function createCategoryTabs() {
  const categories = [...new Set(CARDS.map(c => c.desc))];
  categories.unshift('All');
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      filteredCards = cat === 'All' ? CARDS : CARDS.filter(c => c.desc === cat);
      currentIndex = 0;
      grid.innerHTML = '';
      renderChunk(filteredCards);
    });
    categoryContainer.appendChild(btn);
  });
}

// --- SCROLL / INFINITE LOAD ---
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    if (currentIndex < filteredCards.length) {
      loader.style.display = 'block';
      setTimeout(() => {
        renderChunk(filteredCards);
        loader.style.display = 'none';
      }, 300);
    }
  }
  // Show/hide goTop button
  topButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// --- GO TO TOP ---
topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// --- KEYBOARD NAVIGATION ---
window.addEventListener('keydown', e => {
  const cards = Array.from(document.querySelectorAll('.card'));
  if (!cards.length) return;

  // Remove highlight
  cards[selectedCardIndex]?.classList.remove('selected');

  if (e.key === 'ArrowRight') selectedCardIndex = Math.min(selectedCardIndex + 1, cards.length - 1);
  if (e.key === 'ArrowLeft') selectedCardIndex = Math.max(selectedCardIndex - 1, 0);
  if (e.key === 'ArrowDown') selectedCardIndex = Math.min(selectedCardIndex + 5, cards.length - 1);
  if (e.key === 'ArrowUp') selectedCardIndex = Math.max(selectedCardIndex - 5, 0);
  if (e.key === 'Enter') cards[selectedCardIndex]?.click();

  // Highlight selected
  cards[selectedCardIndex]?.classList.add('selected');
});

// --- INIT ---
searchInput.addEventListener('input', handleSearch);
createCategoryTabs();
renderChunk(CARDS);
