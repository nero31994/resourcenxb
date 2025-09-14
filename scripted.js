const CHANNELS = [
  {
    name: "PBA Rush HD",
    url: "https://example.com/pba",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/PBARush.png"
  },
  {
    name: "GMA 7",
    url: "https://example.com/gma",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/64/GMA_Network_Logo_2018.svg"
  },
  {
    name: "Kapamilya Channel",
    url: "https://example.com/kapamilya",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Kapamilya_Channel_logo.svg"
  }
];

const list = document.getElementById("channels");
const search = document.getElementById("search");
const favToggle = document.getElementById("favToggle");
let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
let showFavs = false;

function renderChannels() {
  list.innerHTML = "";
  let filtered = CHANNELS.filter(ch =>
    ch.name.toLowerCase().includes(search.value.toLowerCase())
  );

  if (showFavs) {
    filtered = filtered.filter(ch => favorites.includes(ch.name));
  }

  filtered.forEach(ch => {
    const item = document.createElement("a");
    item.href = ch.url;
    item.className = "channel";
    item.innerHTML = `
      <img src="${ch.logo}" alt="${ch.name}">
      <span>${ch.name}</span>
    `;
    item.addEventListener("contextmenu", e => {
      e.preventDefault();
      toggleFavorite(ch.name);
    });
    list.appendChild(item);
  });
}

function toggleFavorite(name) {
  if (favorites.includes(name)) {
    favorites = favorites.filter(f => f !== name);
  } else {
    favorites.push(name);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderChannels();
}

search.addEventListener("input", renderChannels);
favToggle.addEventListener("click", () => {
  showFavs = !showFavs;
  renderChannels();
});

renderChannels();
