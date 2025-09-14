/**
 * NxB IPTV — Channels (no player)
 * - Left sidebar: search + favorites + channel list
 * - Right content: selected channel preview + open buttons
 * - Keyboard/remote: ArrowUp / ArrowDown to move, Enter to open focused channel, F to toggle favorite
 *
 * Edit CHANNELS array to add your own channels (name, url, logo)
 */

const CHANNELS = [
  { key: 'ch1', name: 'PBA Rush HD', url: 'https://example.com/pba', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/PBARush.png' },
  { key: 'ch2', name: 'GMA 7', url: 'https://example.com/gma', logo: 'https://upload.wikimedia.org/wikipedia/en/6/64/GMA_Network_Logo_2018.svg' },
  { key: 'ch3', name: 'Kapamilya Channel', url: 'https://example.com/kapamilya', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Kapamilya_Channel_logo.svg' },
  { key: 'ch4', name: 'Sports 24/7', url: 'https://example.com/sports', logo: 'https://via.placeholder.com/320x180.png?text=Sports' },
  { key: 'ch5', name: 'Movie Channel', url: 'https://example.com/movie', logo: 'https://via.placeholder.com/320x180.png?text=Movies' }
];

const storageKey = 'nxb_iptv_favs_v1';
let favorites = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]'));
let showFavs = false;

// DOM refs
const channelsEl = document.getElementById('channels');
const searchEl = document.getElementById('search');
const favToggle = document.getElementById('favToggle');
const previewLogo = document.getElementById('previewLogo');
const previewTitle = document.getElementById('previewTitle');
const previewUrl = document.getElementById('previewUrl');
const openBtn = document.getElementById('openBtn');
const openNewBtn = document.getElementById('openNewBtn');

let visibleList = []; // array of indices (in CHANNELS) currently visible
let focusedIndex = 0;  // index into visibleList

// render channels list based on search + favorites filter
function renderChannels() {
  const q = (searchEl.value || '').trim().toLowerCase();
  channelsEl.innerHTML = '';
  visibleList = [];

  CHANNELS.forEach((ch, idx) => {
    if (showFavs && !favorites.has(ch.key)) return;
    if (q && !(ch.name.toLowerCase().includes(q) || ch.url.toLowerCase().includes(q))) return;

    visibleList.push(idx);

    const item = document.createElement('div');
    item.className = 'channel-item';
    item.dataset.index = idx;

    // anchor: whole left part opens the channel
    const a = document.createElement('a');
    a.className = 'channel';
    a.href = ch.url;
    a.tabIndex = 0;
    a.setAttribute('role','link');
    a.setAttribute('aria-label', `Open ${ch.name}`);
    a.innerHTML = `
      <div class="ch-logo">${ch.logo ? `<img src="${ch.logo}" alt="${ch.name} logo" loading="lazy">` : ch.name[0]}</div>
      <div class="ch-meta">
        <div class="ch-name">${ch.name}</div>
        <div class="ch-url">${ch.url}</div>
      </div>
    `;

    // when anchor gets focus, update focusedIndex and preview
    a.addEventListener('focus', () => {
      focusedIndex = visibleList.indexOf(idx);
      updateFocusStyles();
      renderPreview(idx);
    });

    // clicking anchor opens the link (default). Also update preview before leaving.
    a.addEventListener('click', (e) => {
      // keep default behavior (navigate). update preview first.
      renderPreview(idx);
    });

    // favorite toggle (outside the anchor)
    const favBtn = document.createElement('button');
    favBtn.className = 'fav-btn';
    favBtn.title = 'Toggle favorite';
    favBtn.innerText = favorites.has(ch.key) ? '★' : '☆';
    if (favorites.has(ch.key)) favBtn.classList.add('active');

    favBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      toggleFavorite(ch.key);
      favBtn.innerText = favorites.has(ch.key) ? '★' : '☆';
      favBtn.classList.toggle('active', favorites.has(ch.key));
    });

    item.appendChild(a);
    item.appendChild(favBtn);
    channelsEl.appendChild(item);
  });

  // after render, ensure there's a focused element
  if (visibleList.length === 0) {
    focusedIndex = -1;
    renderPreview(null);
    return;
  }
  if (focusedIndex < 0 || focusedIndex >= visibleList.length) focusedIndex = 0;

  // focus the currently focused anchor if possible
  requestAnimationFrame(() => {
    const container = channelsEl.querySelectorAll('.channel')[focusedIndex];
    container?.focus();
    updateFocusStyles();
    const idx = visibleList[focusedIndex];
    if (typeof idx === 'number') renderPreview(idx);
  });
}

// update class names for focused item (visual)
function updateFocusStyles(){
  const items = channelsEl.querySelectorAll('.channel-item');
  items.forEach((it, i) => {
    it.classList.toggle('focused', i === focusedIndex);
  });
}

// render right preview (selected preview)
function renderPreview(idx){
  if (idx === null || typeof idx === 'undefined'){
    previewLogo.src = '';
    previewLogo.alt = '';
    previewTitle.textContent = 'No channel selected';
    previewUrl.textContent = '—';
    openBtn.disabled = true;
    openNewBtn.disabled = true;
    return;
  }
  const ch = CHANNELS[idx];
  previewLogo.src = ch.logo || '';
  previewLogo.alt = ch.name + ' logo';
  previewTitle.textContent = ch.name;
  previewUrl.textContent = ch.url;
  openBtn.disabled = false;
  openNewBtn.disabled = false;

  // store currently previewed index for open actions
  previewBox.dataset.current = idx;
}

// toggle favorite and persist
function toggleFavorite(key){
  if (favorites.has(key)) favorites.delete(key);
  else favorites.add(key);
  localStorage.setItem(storageKey, JSON.stringify(Array.from(favorites)));
  renderChannels();
}

// open channel for the currently focused/previewed entry
function openCurrent(newTab = false){
  if (focusedIndex < 0 || focusedIndex >= visibleList.length) return;
  const idx = visibleList[focusedIndex];
  if (typeof idx !== 'number') return;
  const url = CHANNELS[idx].url;
  if (newTab) window.open(url, '_blank', 'noopener');
  else window.location.href = url;
}

// keyboard / remote handling
window.addEventListener('keydown', (e) => {
  const tag = document.activeElement?.tagName?.toLowerCase();
  // don't override typing in search
  if (tag === 'input' || tag === 'textarea') {
    // allow escape to blur search
    if (e.key === 'Escape') searchEl.blur();
    return;
  }

  if (visibleList.length === 0) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    focusedIndex = Math.min(visibleList.length - 1, focusedIndex + 1);
    focusCurrent();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    focusedIndex = Math.max(0, focusedIndex - 1);
    focusCurrent();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    openCurrent(false);
  } else if (e.key.toLowerCase() === 'f') {
    e.preventDefault();
    // toggle favorite for currently focused item
    const idx = visibleList[focusedIndex];
    if (typeof idx === 'number') toggleFavorite(CHANNELS[idx].key);
  }
});

function focusCurrent(){
  const anchors = channelsEl.querySelectorAll('.channel');
  const a = anchors[focusedIndex];
  if (a) {
    a.focus();
    updateFocusStyles();
    const idx = visibleList[focusedIndex];
    if (typeof idx === 'number') renderPreview(idx);
  }
}

// search / favorites UI wiring
searchEl.addEventListener('input', () => {
  focusedIndex = 0;
  renderChannels();
});

favToggle.addEventListener('click', () => {
  showFavs = !showFavs;
  favToggle.classList.toggle('active', showFavs);
  favToggle.style.opacity = showFavs ? '1' : '0.85';
  focusedIndex = 0;
  renderChannels();
});

// open buttons in preview
openBtn.addEventListener('click', () => openCurrent(false));
openNewBtn.addEventListener('click', () => openCurrent(true));

// init
const previewBox = document.getElementById('previewBox');
renderChannels();
