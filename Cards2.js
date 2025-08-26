<script>
const CARDS = [ 
  // your channel list here ...
    
  { title: "Discovery Channel", href: "http://161.49.17.2:6610/001/2/ch00000090990000001194/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://cantseeus.com/wp-content/uploads/2023/10/discov.png", desc: "Converge", badge: "LIVE" },
  { title: "Asian Food Network", href: "http://161.49.17.2:6610/001/2/ch00000090990000001342/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/O5jBcL2.png", desc: "Converge", badge: "LIVE" },
  { title: "CGTN Documentary", href: "http://161.49.17.2:6610/001/2/ch00000090990000001110/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/CGTN_Documentary_logo.png", desc: "Converge", badge: "LIVE" },
  { title: "Channel News Asia", href: "http://161.49.17.2:6610/001/2/ch00000090990000001106/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/vm9Z0uV.png", desc: "Converge", badge: "LIVE" },
  { title: "HGTV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001162/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/198_144.png", desc: "Converge", badge: "LIVE" },
  { title: "Arirang", href: "http://161.49.17.2:6610/001/2/ch00000090990000001107/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "http://115.146.176.131/images/14a646307c92e88856903295e6fa0d5c.png", desc: "Converge", badge: "LIVE" },
  { title: "NHK BS", href: "http://161.49.17.2:6610/001/2/ch00000090990000001214/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/NHKBS23Horizontal.svg/1200px-NHKBS23Horizontal.svg.png", desc: "Converge", badge: "LIVE" },
  { title: "Animal Planet", href: "http://161.49.17.2:6610/001/2/ch00000090990000001335/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.ibb.co/mBFs4RQ/pinpng-com-animal-planet-png-4851143.png", desc: "Converge", badge: "LIVE" },
  { title: "Crime & Investigation", href: "http://161.49.17.2:6610/001/2/ch00000090990000001144/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/369_144.png", desc: "Converge", badge: "LIVE" },
  { title: "Al Jazeera", href: "http://161.49.17.2:6610/001/2/ch00000090990000001343/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://1000logos.net/wp-content/uploads/2023/01/Al-Jazeera-Logo.png", desc: "Converge", badge: "LIVE" },
  { title: "KBS World", href: "http://161.49.17.2:6610/001/2/ch00000090990000001353/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrxyZu1bPiJ3SdGvhVf3d3Muj5AqQ7ZkGpw&s", desc: "Converge", badge: "LIVE" },
  { title: "KIX", href: "http://161.49.17.2:6610/001/2/ch00000090990000001263/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/B8Fmzer.png", desc: "Converge", badge: "LIVE" },
  { title: "Fashion TV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001102/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/Zd5zm7C.png", desc: "Converge", badge: "LIVE" },
  { title: "KBS Korea", href: "http://161.49.17.2:6610/001/2/ch00000090990000001246/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://img.cdn.nimg.jp/s/comch/channel-icon/original/ch2613780/7062563.jpg/512x512l_FFFFFFFF?key=cbb987ff9d3219b35c16f7868fbfc3a69b26d82d494d30a83a14721fb60a2e4e", desc: "Converge", badge: "LIVE" },
  { title: "Xingkong", href: "http://161.49.17.2:6610/001/2/ch00000090990000001337/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzEmFZaNE5sKGd0-VsgK4zyJms0kvnA_ZIQ&s", desc: "Converge", badge: "LIVE" },
  { title: "BS Premium", href: "http://161.49.17.2:6610/001/2/ch00000090990000001165/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://png.pngtree.com/png-vector/20230829/ourmid/pngtree-gold-color-bs-letter-logo-on-dark-gray-geometric-shape-concept-vector-png-image_9954543.png", desc: "Converge", badge: "LIVE" },
  { title: "TLC", href: "http://161.49.17.2:6610/001/2/ch00000090990000001181/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://logo.iptveditor.com/tlc.png", desc: "Converge", badge: "LIVE" },
  { title: "Warner TV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001096/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/vGEL2Ne.png", desc: "Converge", badge: "LIVE" },
  { title: "CNN International", href: "http://161.49.17.2:6610/001/2/ch00000090990000001073/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "http://115.146.176.131:80/images/2acf9495fde07739914e7a7bb3ffee94.png", desc: "Converge", badge: "LIVE" },
  { title: "ABC Australia", href: "http://161.49.17.2:6610/001/2/ch00000090990000001111/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/kVVax44.png", desc: "Converge", badge: "LIVE" }

    ];


const grid = document.getElementById('grid');
let perPage = 20; // number of cards per load
let currentIndex = 0; // tracks how many cards shown

function renderChunk(list) {
  const frag = document.createDocumentFragment();
  const slice = list.slice(currentIndex, currentIndex + perPage);
  
  slice.forEach(item => {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = item.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', item.title);

    const media = document.createElement('div');
    media.className = 'media';

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.decoding = 'async';
    img.alt = item.title || '';
    img.src = item.image;
    media.appendChild(img);

    if(item.badge){
      const b = document.createElement('span');
      b.className = 'badge';
      b.textContent = item.badge;
      media.appendChild(b);
    }

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
    frag.appendChild(a);
  });

  grid.appendChild(frag);
  currentIndex += perPage;
}

// Initial render
renderChunk(CARDS);

// Infinite scroll
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    if (currentIndex < CARDS.length) {
      renderChunk(CARDS);
    }
  }
});

// Search still works
const q = document.getElementById('q');
q.addEventListener('input', () => {
  const term = q.value.trim().toLowerCase();
  grid.innerHTML = '';
  currentIndex = 0;
  const filtered = term 
    ? CARDS.filter(c => (c.title+" "+(c.desc||'')).toLowerCase().includes(term)) 
    : CARDS;
  renderChunk(filtered);
  // Replace infinite scroll with filtered list
  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
      if (currentIndex < filtered.length) {
        renderChunk(filtered);
      }
    }
  };
});

    
