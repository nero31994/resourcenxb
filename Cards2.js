
const CARDS = [ 
  // your channel list here ...
   
  { title: "Classic Movie Westerns", href: "https://jmp2.uk/plu-61f33318210549000806a530.m3u8", image: "https://images.pluto.tv/channels/61f33318210549000806a530/colorLogoPNG.png", desc: "Westerns", badge: "LIVE" },
  { title: "Gunsmoke", href: "https://jmp2.uk/plu-60f75771dfc72a00071fd0e0.m3u8", image: "https://images.pluto.tv/channels/60f75771dfc72a00071fd0e0/colorLogoPNG.png", desc: "Westerns", badge: "LIVE" },
  { title: "Rawhide", href: "https://jmp2.uk/plu-634f307c7a068e00072c9982.m3u8", image: "https://images.pluto.tv/channels/634f307c7a068e00072c9982/colorLogoPNG_1731835685335.png", desc: "Westerns", badge: "LIVE" },
  { title: "The Lone Ranger", href: "https://jmp2.uk/plu-65a6dafb7bdc8d0008473c85.m3u8", image: "https://images.pluto.tv/channels/65a6dafb7bdc8d0008473c85/colorLogoPNG.png", desc: "Westerns", badge: "LIVE" },
  { title: "The Rifleman", href: "https://jmp2.uk/plu-5e825550e758c700077b0aef.m3u8", image: "https://images.pluto.tv/channels/5e825550e758c700077b0aef/colorLogoPNG.png", desc: "Westerns", badge: "LIVE" },
  { title: "The Wild Wild West", href: "https://jmp2.uk/plu-664e640a0120f40008be4582.m3u8", image: "https://images.pluto.tv/channels/664e640a0120f40008be4582/colorLogoPNG.png", desc: "Westerns", badge: "LIVE" },
  { title: "Wanted: Dead or Alive", href: "https://jmp2.uk/plu-6089788de5c8410007808e26.m3u8", image: "https://images.pluto.tv/channels/6089788de5c8410007808e26/colorLogoPNG.png", desc: "Westerns", badge: "LIVE" },
  { title: "Western TV", href: "https://jmp2.uk/plu-5e8df4bc16e34700077e77d3.m3u8", image: "https://images.pluto.tv/channels/5e8df4bc16e34700077e77d3/colorLogoPNG.png", desc: "Westerns", badge: "LIVE" },
  { title: "Wild West TV", href: "https://jmp2.uk/plu-6661f88f3d173b000845958c.m3u8", image: "https://images.pluto.tv/channels/6661f88f3d173b000845958c/colorLogoPNG.png", desc: "Westerns", badge: "LIVE" },

  { title: "48 Hours", href: "https://jmp2.uk/plu-6176f39e709f160007ec61c3.m3u8", image: "https://images.pluto.tv/channels/6176f39e709f160007ec61c3/colorLogoPNG.png", desc: "True Crime", badge: "LIVE" },
  { title: "American Crimes", href: "https://jmp2.uk/plu-65492fc7056b9700088560b5.m3u8", image: "https://images.pluto.tv/channels/65492fc7056b9700088560b5/colorLogoPNG.png", desc: "True Crime", badge: "LIVE" },
  { title: "Cold Case Files by A&E", href: "https://jmp2.uk/plu-5c37d6712de254456f7ec340.m3u8", image: "https://images.pluto.tv/channels/5c37d6712de254456f7ec340/colorLogoPNG.png", desc: "True Crime", badge: "LIVE" },
  { title: "Court TV", href: "https://jmp2.uk/plu-5dae0b4841a7d0000938ddbd.m3u8", image: "https://images.pluto.tv/channels/5dae0b4841a7d0000938ddbd/colorLogoPNG.png", desc: "True Crime", badge: "LIVE" },
  { title: "Crime 360 by A&E", href: "https://jmp2.uk/plu-6000a5a9e767980007b497ca.m3u8", image: "https://images.pluto.tv/channels/6000a5a9e767980007b497ca/colorLogoPNG.png", desc: "True Crime", badge: "LIVE" },
  { title: "Dateline 24/7", href: "https://jmp2.uk/plu-637413d8531e0c0007442d6d.m3u8", image: "https://images.pluto.tv/channels/637413d8531e0c0007442d6d/colorLogoPNG.png", desc: "True Crime", badge: "LIVE" },
  { title: "Forensic Files", href: "https://jmp2.uk/plu-5bb1af6a268cae539bcedb0a.m3u8", image: "https://images.pluto.tv/channels/5bb1af6a268cae539bcedb0a/colorLogoPNG.png", desc: "True Crime", badge: "LIVE" },
  { title: "More True Crime", href: "https://jmp2.uk/plu-6532e6a9bdf3cf000887ab29.m3u8", image: "https://images.pluto.tv/channels/6532e6a9bdf3cf000887ab29/colorLogoPNG.png", desc: "True Crime", badge: "LIVE" },
  { title: "Oxygen True Crime Archives", href: "https://jmp2.uk/plu-654930a8346f420008d3b0b8.m3u8", image: "https://images.pluto.tv/channels/654930a8346f420008d3b0b8/colorLogoPNG.png", desc: "True Crime", badge: "LIVE" },
  { title: "Pluto TV True Crime", href: "https://jmp2.uk/plu-5812be1c249444e05d09cc50.m3u8", image: "https://images.pluto.tv/channels/5812be1c249444e05d09cc50/colorLogoPNG.png", desc: "True Crime", badge: "LIVE" },
  { title: "The New Detectives", href: "https://jmp2.uk/plu-5aea40b35126c2157123aa64.m3u8", image: "https://images.pluto.tv/channels/5aea40b35126c2157123aa64/colorLogoPNG.png", desc: "True Crime", badge: "LIVE" },
  { title: "Unsolved Mysteries", href: "https://jmp2.uk/plu-5b4e96a0423e067bd6df6901.m3u8", image: "https://images.pluto.tv/channels/5b4e96a0423e067bd6df6901/colorLogoPNG.png", desc: "True Crime", badge: "LIVE" },

  { title: "beIN SPORTS XTRA", href: "https://jmp2.uk/plu-5df975e2b27cf5000921c102.m3u8", image: "https://images.pluto.tv/channels/5df975e2b27cf5000921c102/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "Bellator MMA", href: "https://jmp2.uk/plu-5ebc8688f3697d00072f7cf8.m3u8", image: "https://images.pluto.tv/channels/5ebc8688f3697d00072f7cf8/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "CBS Sports HQ", href: "https://jmp2.uk/plu-5e9f2c05172a0f0007db4786.m3u8", image: "https://images.pluto.tv/channels/5e9f2c05172a0f0007db4786/colorLogoPNG_1731837352945.png", desc: "Sports", badge: "LIVE" },
  { title: "DAZN Ringside", href: "https://jmp2.uk/plu-649b6898f2ec0000081a9460.m3u8", image: "https://images.pluto.tv/channels/649b6898f2ec0000081a9460/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "FanDuel TV Extra", href: "https://jmp2.uk/plu-650b68bc2ce8e40008ac9c14.m3u8", image: "https://images.pluto.tv/channels/650b68bc2ce8e40008ac9c14/colorLogoPNG.png", desc: "Sports", badge: "LIVE" }
]




const grid = document.getElementById('grid');
const loader = document.getElementById('loader');
let perPage = 20;
let currentIndex = 0;

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

// Infinite scroll with spinner
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    if (currentIndex < CARDS.length) {
      loader.style.display = 'block';
      setTimeout(() => {
        renderChunk(CARDS);
        loader.style.display = 'none';
      }, 500);
    }
  }
});
