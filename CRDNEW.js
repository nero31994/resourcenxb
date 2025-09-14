(function(){
      'use strict';
      if (!window.CARDS || !Array.isArray(window.CARDS)) window.CARDS = [];

      function make(title, desc, image, badge, href){
        return { title: title||'', desc: desc||'', image: image||'', badge: badge||'', href: href||'#' };
      }

      // Your channels — EXACT (no demo placeholders)
      var userChannels = [
        { title: "Donate with ❤️", href: "go:GC", image: "https://i.giphy.com/lnfPlSN43yzFDQCVry.webp", desc: "buy me coffee ☕", badge: "Donate" },
        { title: "EPG", href: "go:EPG", image: "https://res.cloudinary.com/dglljk9gs/image/upload/v1756176528/file_0000000095e861fa8e42c68a790bb0c3_jqgqjv.png", desc: "Electronic Program Guide", badge: "EPG" },
        { title: "MOVIES", href: "go:N", image: "https://variety.com/wp-content/uploads/2019/02/netflix_newlogoanimation.gif", desc: "WATCH MOVIES ON THE GO!", badge: "⭐Featured" },
        { title: "PLUTO TV", href: "go:pluto", image: "https://i.giphy.com/T4uWkBi5pq4IYAAywy.webp", desc: "PLUTO TV", badge: "Featured" },
        { title: "WWE", href: "go:WWE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkblpVWpsze998MySnArHfPtF3mIFP8KlrFQb4AToZL_b3JZWDbIVjvmby&s=10", desc: "Sports", badge: "Request" },
        { title: "NBA CANADA", href: "go:NBA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDXK3g0Lm_5T-ynBFKCMSmgvCyPk4QWTstpRWYyYFzIYWFbkl-UvOk90&s=10", desc: "Sports", badge: "Request" },
        { title: "UFC", href: "go:Ufc", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmSt2Eu4zAEF8_bVvWJS_vAkWFHidMo6g0sPrJ04M9TUdZDObIa7KjG8sY&s=10", desc: "Sports", badge: "Request" },
        { title: "BOXING TV", href: "https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/boxing-tv/8d205a30-d00f-457d-978b-265b290eb7e0/0.m3u8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHItDqM7FpT734IALnidYjSlviJv4lBht72n0R8ek4Ws2Sm1FAcCjlFtM&s=10", desc: "Sports", badge: "Request" },
        { title: "CCTN47", href: "go:Cctn", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzO-ZEyvzwrYl9snjS5XzkcC_sCYmU-A1znAuM5eS5Jx1qwU9i-pvowo&s=10", desc: "Religion", badge: "Request" }
      ];

      // Replace any existing array with only userChannels
      window.CARDS.length = 0;
      Array.prototype.push.apply(window.CARDS, userChannels);

      // Optional helpers (set/add/loadFrom)
      Object.defineProperty(window.CARDS, 'set', { value: function(arr){
        if (Array.isArray(arr)){ window.CARDS.length = 0; Array.prototype.push.apply(window.CARDS, arr); }
      }, writable:false });

      Object.defineProperty(window.CARDS, 'add', { value: function(card){ window.CARDS.push(card); }, writable:false });

      Object.defineProperty(window.CARDS, 'loadFrom', { value: async function(url){
        try{
          var res = await fetch(url, {cache: 'no-store'});
          if (!res.ok) throw new Error('Network response was not ok: ' + res.status);
          var data = await res.json();
          if (Array.isArray(data)) window.CARDS.set(data);
          else console.warn('Loaded data is not an array', data);
        }catch(err){
          console.error('Failed to load cards from', url, err);
        }
      }, writable:false });

      // Notify page that cards are available
      setTimeout(function(){ try{ window.dispatchEvent(new CustomEvent('cards-ready')); }catch(e){} }, 0);
    })();
  </script>

  <!-- Main script (original rendering, infinite scroll, search, theme, clock, notif) -->
  <script>
    (function(){
      const grid = document.getElementById('grid');
      const sentinel = document.getElementById('infinite-sentinel');
      const q = document.getElementById('q');
      const themeToggle = document.getElementById('themeToggle');
      const themeIcon = document.getElementById('themeIcon');
      const themeLabel = document.getElementById('themeLabel');
      const searchToggle = document.getElementById('searchToggle');
      const searchControls = document.getElementById('searchControls');

      let perPage = 20, currentIndex = 0, activeList = [];

      // Toggle search bar
      searchToggle.addEventListener('click', () => {
        searchControls.classList.toggle('show');
        if (searchControls.classList.contains('show')) q.focus();
      });

      function whenCardsReady(cb){
        if (window.CARDS && Array.isArray(window.CARDS)) return cb();
        const t = setInterval(()=> {
          if (window.CARDS && Array.isArray(window.CARDS)) { clearInterval(t); cb(); }
        }, 100);
      }

      function renderChunk(list) {
        if (!list.length) return;
        const frag = document.createDocumentFragment();
        const chunk = list.slice(currentIndex, currentIndex + perPage);
        chunk.forEach(e => {
          const card = document.createElement('a');
          card.className = 'card';
          card.href = e.href || '#';
          card.target = '_blank';
          card.rel = 'noopener noreferrer';
          card.setAttribute('aria-label', e.title || 'channel');

          const media = document.createElement('div'); media.className='media';
          const img = document.createElement('img');
          img.loading='lazy'; img.alt = e.title || '';
          img.src = e.image || 'https://i.ibb.co/vxYGP3h8/Photoroom-20240720-094102.png';
          media.appendChild(img);

          if (e.badge) {
            const badge = document.createElement('span'); badge.className='badge'; badge.textContent = e.badge;
            media.appendChild(badge);
          }

          const meta = document.createElement('div'); meta.className='meta';
          const title = document.createElement('p'); title.className='title'; title.textContent = e.title || '';
          const desc = document.createElement('p'); desc.className='desc'; desc.textContent = e.desc || '';
          meta.appendChild(title); meta.appendChild(desc);

          card.appendChild(media); card.appendChild(meta);
          frag.appendChild(card);
        });
        grid.appendChild(frag);
        currentIndex += chunk.length;
      }

      const observer = new IntersectionObserver(entries => {
        if (entries.some(en => en.isIntersecting)) {
          if (!activeList.length && window.CARDS) activeList = window.CARDS.slice();
          if (currentIndex < activeList.length) renderChunk(activeList);
        }
      }, { rootMargin: '300px' });
      observer.observe(sentinel);

      q.addEventListener('input', () => {
        const val = q.value.trim().toLowerCase();
        grid.innerHTML = '';
        currentIndex = 0;
        activeList = (window.CARDS || []).filter(t => ((t.title||'')+' '+(t.desc||'')).toLowerCase().includes(val));
        if (!val) activeList = window.CARDS ? window.CARDS.slice() : [];
        if (!activeList.length) {
          grid.innerHTML = '<p style="text-align:center;padding:20px;color:var(--muted);">❌ No results found</p>';
        } else {
          renderChunk(activeList);
        }
      });

      function applyTheme(theme) {
        const isLight = theme === 'light';
        document.documentElement.classList.toggle('light-theme', isLight);
        themeIcon.textContent = isLight ? '🌞' : '🌙';
        themeLabel.textContent = isLight ? 'Light' : 'Dark';
      }
      themeToggle.addEventListener('click', () => {
        const isLight = document.documentElement.classList.contains('light-theme');
        applyTheme(isLight ? 'dark' : 'light');
        localStorage.setItem('nxb-theme', isLight ? 'dark' : 'light');
      });

      whenCardsReady(() => { activeList = window.CARDS ? window.CARDS.slice() : []; renderChunk(activeList); });
      (function initTheme(){ applyTheme(localStorage.getItem('nxb-theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light':'dark')); })();

      // CLOCK
      (function startClock() {
        function update() {
          const now = new Date();
          const timeStr = now.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:true});
          document.getElementById("clockTime").textContent = timeStr;
          let tz = "Local";
          try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Local"; }
          catch(e) { tz = (/((.*))/.exec(now.toString()) || [])[1] || "Local"; }
          document.getElementById("clockTz").textContent = tz;
        }
        update(); setInterval(update, 1000);
      })();
    })();
