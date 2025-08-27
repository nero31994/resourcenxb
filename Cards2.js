
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
  { title: "FanDuel TV Extra", href: "https://jmp2.uk/plu-650b68bc2ce8e40008ac9c14.m3u8", image: "https://images.pluto.tv/channels/650b68bc2ce8e40008ac9c14/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },

  
  { title: "Formula 1 Channel", href: "https://jmp2.uk/plu-65c69ee3d77d450008c80438.m3u8", image: "https://images.pluto.tv/channels/65c69ee3d77d450008c80438/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "FOX Sports", href: "https://jmp2.uk/plu-5a74b8e1e22a61737979c6bf.m3u8", image: "https://images.pluto.tv/channels/5a74b8e1e22a61737979c6bf/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "GLORY Kickboxing", href: "https://jmp2.uk/plu-5417a212ff9fba68282fbf5e.m3u8", image: "https://images.pluto.tv/channels/5417a212ff9fba68282fbf5e/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "Golazo Network", href: "https://jmp2.uk/plu-63a0e33a45264d000850ed7e.m3u8", image: "https://images.pluto.tv/channels/63a0e33a45264d000850ed7e/colorLogoPNG_1731835813404.png", desc: "Sports", badge: "LIVE" },
  { title: "GolfPass", href: "https://jmp2.uk/plu-65493029ab052400089e9d2f.m3u8", image: "https://images.pluto.tv/channels/65493029ab052400089e9d2f/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "MLB", href: "https://jmp2.uk/plu-5e66968a70f34c0007d050be.m3u8", image: "https://images.pluto.tv/channels/5e66968a70f34c0007d050be/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "Monster Jam", href: "https://jmp2.uk/plu-65c69b683ba51e00084534a3.m3u8", image: "https://images.pluto.tv/channels/65c69b683ba51e00084534a3/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "MotorTrend FAST TV", href: "https://jmp2.uk/plu-6400f731d200410008f9b339.m3u8", image: "https://images.pluto.tv/channels/6400f731d200410008f9b339/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "NBC Sports", href: "https://jmp2.uk/plu-6549306c83595c000815a696.m3u8", image: "https://images.pluto.tv/channels/6549306c83595c000815a696/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "NFL Channel", href: "https://jmp2.uk/plu-5ced7d5df64be98e07ed47b6.m3u8", image: "https://images.pluto.tv/channels/5ced7d5df64be98e07ed47b6/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "ONE Championship TV", href: "https://jmp2.uk/plu-668c5d3bfd9eb2000882bb50.m3u8", image: "https://images.pluto.tv/channels/668c5d3bfd9eb2000882bb50/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "PBR RidePass", href: "https://jmp2.uk/plu-60d39387706fe50007fda8e8.m3u8", image: "https://images.pluto.tv/channels/60d39387706fe50007fda8e8/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "PFL MMA", href: "https://jmp2.uk/plu-6334a574605f140007e233c4.m3u8", image: "https://images.pluto.tv/channels/6334a574605f140007e233c4/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "PGA TOUR", href: "https://jmp2.uk/plu-5de94dacb394a300099fa22a.m3u8", image: "https://images.pluto.tv/channels/5de94dacb394a300099fa22a/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "PokerGo", href: "https://jmp2.uk/plu-5fc54366b04b2300072e31af.m3u8", image: "https://images.pluto.tv/channels/5fc54366b04b2300072e31af/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "POWERNATION", href: "https://jmp2.uk/plu-63b48016d9dd51000828fa37.m3u8", image: "https://images.pluto.tv/channels/63b48016d9dd51000828fa37/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "Speed Sport 1", href: "https://jmp2.uk/plu-6675b8ccca74680008563c24.m3u8", image: "https://images.pluto.tv/channels/6675b8ccca74680008563c24/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "TNA Wrestling", href: "https://jmp2.uk/plu-59b722526996084038c01e1b.m3u8", image: "https://images.pluto.tv/channels/59b722526996084038c01e1b/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "Top Rank Classics", href: "https://jmp2.uk/plu-64d160f53c785e0008df525e.m3u8", image: "https://images.pluto.tv/channels/64d160f53c785e0008df525e/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "Triton Poker", href: "https://jmp2.uk/plu-661827ffe8fba800086b217d.m3u8", image: "https://images.pluto.tv/channels/661827ffe8fba800086b217d/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "UEFA Champions League", href: "https://jmp2.uk/plu-65ea8b928145cb0008509426.m3u8", image: "https://images.pluto.tv/channels/65ea8b928145cb0008509426/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },
  { title: "World Poker Tour", href: "https://jmp2.uk/plu-5616f9c0ada51f8004c4b091.m3u8", image: "https://images.pluto.tv/channels/5616f9c0ada51f8004c4b091/colorLogoPNG-1664295222280.png", desc: "Sports", badge: "LIVE" },
  { title: "WOW 鈥� Women of Wrestling", href: "https://jmp2.uk/plu-66b66b9e14a2bb000872f606.m3u8", image: "https://images.pluto.tv/channels/66b66b9e14a2bb000872f606/colorLogoPNG.png", desc: "Sports", badge: "LIVE" },

  { title: "Cine navideño", href: "https://jmp2.uk/plu-60fb3162df090700075da907.m3u8", image: "https://images.pluto.tv/channels/60fb3162df090700075da907/colorLogoPNG_1730488400806.png", desc: "Season", badge: "LIVE" },
  { title: "Crackling Fireplace", href: "https://jmp2.uk/plu-5bf48085851dd5632e2f7b4d.m3u8", image: "https://images.pluto.tv/channels/5bf48085851dd5632e2f7b4d/colorLogoPNG_1730483404196.png", desc: "Season", badge: "LIVE" },
  { title: "Festive Fireplace", href: "https://jmp2.uk/plu-614501c653ceee000772b0ca.m3u8", image: "https://images.pluto.tv/channels/614501c653ceee000772b0ca/colorLogoPNG.png", desc: "Season", badge: "LIVE" },
  { title: "Hallmark en español", href: "https://jmp2.uk/plu-65453ee6056b97000880302a.m3u8", image: "https://images.pluto.tv/channels/65453ee6056b97000880302a/colorLogoPNG.png", desc: "Season", badge: "LIVE" },
  { title: "Hallmark Movies & More Holiday Favorites", href: "https://jmp2.uk/plu-63335d36a1cd8c000765466c.m3u8", image: "https://images.pluto.tv/channels/63335d36a1cd8c000765466c/colorLogoPNG_1730489068460.png", desc: "Season", badge: "LIVE" },
  { title: "Holiday Movie Favorites By Lifetime", href: "https://jmp2.uk/plu-63335c59e4d7eb000785e71a.m3u8", image: "https://images.pluto.tv/channels/63335c59e4d7eb000785e71a/colorLogoPNG_1730489218858.png", desc: "Season", badge: "LIVE" },

  
  { title: "Home for the Holidays", href: "https://jmp2.uk/plu-5f7f8698ec435a000785810b.m3u8", image: "https://images.pluto.tv/channels/5f7f8698ec435a000785810b/colorLogoPNG_1730487700713.png", desc: "Season", badge: "LIVE" },
  { title: "Places & Spaces", href: "https://jmp2.uk/plu-66e0b30415d2c60008e2b99e.m3u8", image: "https://images.pluto.tv/channels/66e0b30415d2c60008e2b99e/colorLogoPNG.png", desc: "Season", badge: "LIVE" },
  { title: "Pluto TV Christmas", href: "https://jmp2.uk/plu-5bb1b9f0adfc955391f8b7a2.m3u8", image: "https://images.pluto.tv/channels/5bb1b9f0adfc955391f8b7a2/colorLogoPNG.png", desc: "Season", badge: "LIVE" },
  { title: "Stingray Holidayscapes", href: "https://jmp2.uk/plu-66ff1d5a565d3a000892bdcd.m3u8", image: "https://images.pluto.tv/channels/66ff1d5a565d3a000892bdcd/colorLogoPNG_1730483238509.png", desc: "Season", badge: "LIVE" },
  { title: "Vevo Holiday", href: "https://jmp2.uk/plu-5dcf059646c0cf000a293edd.m3u8", image: "https://images.pluto.tv/channels/5dcf059646c0cf000a293edd/colorLogoPNG.png", desc: "Season", badge: "LIVE" },
  { title: "Pluto TV Sci-Fi", href: "https://jmp2.uk/plu-5b4fc274694c027be6ed3eea.m3u8", image: "https://images.pluto.tv/channels/5b4fc274694c027be6ed3eea/colorLogoPNG.png", desc: "Sci-Fi", badge: "LIVE" },
  { title: "Alien Nation by DUST", href: "https://jmp2.uk/plu-66621ed08ea5560008fde7c9.m3u8", image: "https://images.pluto.tv/channels/66621ed08ea5560008fde7c9/colorLogoPNG.png", desc: "Sci", badge: "LIVE" },
  { title: "Doctor Who Classic", href: "https://jmp2.uk/plu-5ce4475cd43850831ca91ce7.m3u8", image: "https://images.pluto.tv/channels/5ce4475cd43850831ca91ce7/colorLogoPNG.png", desc: "Sci", badge: "LIVE" },
  { title: "Godzilla", href: "https://jmp2.uk/plu-6452c8cee1979c0008608e27.m3u8", image: "https://images.pluto.tv/channels/6452c8cee1979c0008608e27/colorLogoPNG.png", desc: "Sci", badge: "LIVE" },
  { title: "OuterSphere", href: "https://jmp2.uk/plu-66c638726838ee00085ac20d.m3u8", image: "https://images.pluto.tv/channels/66c638726838ee00085ac20d/colorLogoPNG.png", desc: "Sci", badge: "LIVE" },
  { title: "Star Trek", href: "https://jmp2.uk/plu-5efbd39f8c4ce900075d7698.m3u8", image: "https://images.pluto.tv/channels/5efbd39f8c4ce900075d7698/colorLogoPNG.png", desc: "Sci", badge: "LIVE" },
  { title: "Star Trek Deep Space Nine", href: "https://jmp2.uk/plu-65c69bbfd77d450008c7ffee.m3u8", image: "https://images.pluto.tv/channels/65c69bbfd77d450008c7ffee/colorLogoPNG.png", desc: "Sci", badge: "LIVE" },
  { title: "Star Trek Voyager", href: "https://jmp2.uk/plu-634dacf51d90320007fcd5fa.m3u8", image: "https://images.pluto.tv/channels/634dacf51d90320007fcd5fa/colorLogoPNG.png", desc: "Sci", badge: "LIVE" },
  { title: "Stargate", href: "https://jmp2.uk/plu-620bfa7df72827000703ddb1.m3u8", image: "https://images.pluto.tv/channels/620bfa7df72827000703ddb1/colorLogoPNG.png", desc: "Sci", badge: "LIVE" },
  { title: "The Twilight Zone", href: "https://jmp2.uk/plu-67352ed93a61d4000881f9fa.m3u8", image: "https://images.pluto.tv/channels/67352ed93a61d4000881f9fa/colorLogoPNG_1732662672508.png", desc: "Sci", badge: "LIVE" },
  { title: "TokuSHOUTsu", href: "https://jmp2.uk/plu-5c3f8f12a93c2d61b9990a4e.m3u8", image: "https://images.pluto.tv/channels/5c3f8f12a93c2d61b9990a4e/colorLogoPNG.png", desc: "Sci", badge: "LIVE" },
  { title: "Universal Monsters", href: "https://jmp2.uk/plu-65a9b20f0c7ff50008d3a3b6.m3u8", image: "https://images.pluto.tv/channels/65a9b20f0c7ff50008d3a3b6/colorLogoPNG.png", desc: "Sci", badge: "LIVE" },
  { title: "Acapulco Shore", href: "https://jmp2.uk/plu-64dab1f835425100080e1e7b.m3u8", image: "https://images.pluto.tv/channels/64dab1f835425100080e1e7b/colorLogoPNG_1731838338924.png", desc: "Reality", badge: "LIVE" },
  { title: "All Reality by WE tv", href: "https://jmp2.uk/plu-5e82530945600e0007ca076c.m3u8", image: "https://images.pluto.tv/channels/5e82530945600e0007ca076c/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Bad Girls Club", href: "https://jmp2.uk/plu-654932fa4d6d8f00084c4723.m3u8", image: "https://images.pluto.tv/channels/654932fa4d6d8f00084c4723/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },

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
