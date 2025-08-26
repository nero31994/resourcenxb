
    const CARDS = [
        { title: "Follow my Page", href: "go:FB", image: "https://media.giphy.com/headers/facebook/FuLFvah0klRm.gif", desc: "Follow my Page for Updates", badge: "Follow" },
        { title: "Donate with ❤️", href: "go:GC", image: "https://i.giphy.com/lnfPlSN43yzFDQCVry.webp", desc: "You Contribution Help me to Continue Building Iptv App", badge: "Donate" },
        
          { title: "Kapamilya Channel", href: "go:1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJm6yEX2gKUoTEn-wvvXwWZaJ3Vp84BRaz3fKDLZbx6fEl98tBiS2TG7-i&s=10", desc: "ENTERTAINMENT", badge: "LIVE" },
          { title: "Kapamilya Channel HD", href: "go:2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFbFbOhLNpCNEkO02nb2f5zzwFveMuxhVVIbjWEoVdIWayrYk8ShRWsGB&s=10", desc: "ENTERTAINMENT", badge: "HD" },
          { title: "PBO", href: "go:3", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Pinoy_Box_Office_logo.svg/1200px-Pinoy_Box_Office_logo.svg.png", desc: "MOVIES", badge: "LIVE" },
          { title: "DZMM", href: "go:4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ZCR-pftoE3lQmBNzKkikguk4TufeKkCWTH7zWW-L_X4EctA8Yiu_e84&s=10", desc: "NEWS", badge: "LIVE" },
          { title: "ANC", href: "go:5", image: "https://yt3.googleusercontent.com/Q68SV_0UYB9yH3O554v4-eoyXLMe_Hp1Wb9Mmj_jW751IU3bFZ6M__poxhp_YQYo1ekL6xjgHRs=s900-c-k-c0x00ffffff-no-rj", desc: "ENTERTAINMENT", badge: "LIVE" },
          { title: "MYX", href: "go:6", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwJwKoRCPaH8TheMr-fNvYiiNw-RfbKla_EDNicZvpFMQKbIXJLc92djM&s=10", desc: "MUSIC", badge: "LIVE" },
          { title: "GMA", href: "go:7", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwBpBZTyPzT3L98F2fzQYKeJ2BDDg4VzpK3ZOJIfSVQZ2GFEVs5iGGCA&s=10", desc: "ENTERTAINMENT", badge: "LIVE" },
          { title: "GTV", href: "go:8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHuaTnA44toWz0_kw54tZGZ21ovkedvV_yCsBdvJTYQ-mvbA8V27XQxuA&s=10", desc: "ENTERTAINMENT", badge: "LIVE" },
          { title: "ALLTV", href: "go:9", image: "https://brandlogo.org/wp-content/uploads/2024/05/All-TV-Logo-300x300.png.webp", desc: "ENTERTAINMENT", badge: "LIVE" },
          { title: "BILYONARYO", href: "go:10", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFsxnroC1zV9BENujdiAbx-UkMpMvVIyy59c3qHzc-rAnwqX6CEsJh8eo&s=10", desc: "NEWS", badge: "LIVE" },
          { title: "TV5", href: "go:11", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-m2TPRW6arfXy_QzgKx8UkzTB_F68TQZds8OCqCEgALsFaj185QVmM5U&s=10", desc: "ENTERTAINMENT", badge: "LIVE" },
          { title: "A2Z", href: "go:12", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8xdzLPA6Bic5-37pV-BONJGnHRFlvygAg9bG79EpBQfD-y6pqBaF5ygk&s=101101144828", desc: "ENTERTAINMENT", badge: "LIVE" },

          { title: "NET25", href: "go:13", image: "https://i.imgur.com/pPPubX5.png", desc: "NEWS", badge: "LIVE" },
{ title: "IBC13", href: "go:14", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7jxE4OCjXPY6FDckgGX3KtPQ34-1v5JT9BZswFw2x4V4aIcCJcy97UtO&s=10", desc: "NEWS", badge: "LIVE" },
{ title: "UNTV", href: "go:15", image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/UNTV-Logo-2016.svg/300px-UNTV-Logo-2016.svg.png", desc: "NEWS", badge: "LIVE" },
{ title: "PTV4", href: "go:16", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeDDZtGQxsk5QNh2XvgtdR0rSIxgaCj__Yg&usqp=CAU", desc: "NEWS", badge: "LIVE" },
{ title: "DZRH", href: "go:17", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6nupZ4edyWnYFYiBEPt_NV8sfwxTk_t1PwxzBWgziJKqOpOBmryf-tR8&s=10", desc: "NEWS", badge: "LIVE" },
{ title: "KNOWLEDGE CH", href: "go:18", image: "https://i.imgur.com/UIqEr2y.png", desc: "EDUCATION", badge: "LIVE" },
{ title: "ALIW TV", href: "go:19", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0_c3bfevpTEahm4D6DwQlT7_KRzGp00BtvpkFXvWSQsWXmJs_C5iNeQ&s=10", desc: "ENTERTAINMENT&NEWS", badge: "LIVE" },
{ title: "CLTV36", href: "go:20", image: "https://upload.wikimedia.org/wikipedia/en/b/ba/CLTV-36_Logo.jpeg", desc: "ENTERTAINMENT&NEWS", badge: "LIVE" },
{ title: "RJTV", href: "go:21", image: "https://upload.wikimedia.org/wikipedia/en/a/a2/DZRJ-DTV_2019_logo.png", desc: "ENTERTAINMENT&MUSIC", badge: "LIVE" },
        
        { title: "RJTV29", href: "go:22", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2N65Hn4QKWrUMtbQdnMXlKqJp7HllAm6DlfLs5Q3VEvNztqgaLvFYKDD&s=10", desc: "ENTERTAINMENT&MUSIC", badge: "LIVE" },
{ title: "GNN", href: "go:23", image: "https://upload.wikimedia.org/wikipedia/commons/2/27/GNN_Logo_2025.png", desc: "ENTERTAINMENT", badge: "LIVE" },
{ title: "ONE PH", href: "go:24", image: "https://www.meainbacolod.com/wp-content/uploads/2019/08/One-PH-logo.png", desc: "ENTERTAINMENT", badge: "LIVE" },
{ title: "ONE NEWS", href: "go:25", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbLZci3RQsYGdQ75VmeV0awxDlIbloB40HA&s", desc: "NEWS", badge: "LIVE" },
{ title: "CINEMO!", href: "go:26", image: "https://static.wikia.nocookie.net/russel/images/f/f2/Cine_Mo%21_3D_Logo_2011.png", desc: "MOVIES", badge: "LIVE" },
{ title: "CINEMA ONE", href: "go:27", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fdSeKh8dSXO5PaFQF8_-NuO9UNfTtShJ06Vf41AjsAJ092qTUyI1kaU&s=10", desc: "MOVIES", badge: "LIVE" },
{ title: "VIVA CINEMA", href: "go:28", image: "https://cms.cignal.tv/Upload/Thumbnails/Viva-Cinema-Sept-Vid-Thumbnail.jpg", desc: "MOVIES", badge: "LIVE" },

        { title: "CINEMAWORLD", href: "go:29", image: "https://res.cloudinary.com/dglljk9gs/image/upload/v1756165714/value_x0dwen.png", desc: "MOVIES", badge: "LIVE" },

        { title: "TAP MOVIES", href: "go:30", image: "https://res.cloudinary.com/dglljk9gs/image/upload/v1756165912/382-s_d4ttgo.webp", desc: "MOVIES", badge: "LIVE" },
{ title: "TAP ACTION", href: "go:31", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8xdzLPA6Bic5-37pV-BONJGnHRFlvygAg9bG79EpBQfD-y6pqBaF5ygk&s=101101144828", desc: "SPORTS", badge: "LIVE" },
{ title: "TAP TV", href: "go:32", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzk4dN4f9D_DjEE_vkxXgfbdo9zbFkFyKNLg&usqp=CAU", desc: "ENTERTAINMENT", badge: "LIVE" },
{ title: "TAP EDGE", href: "go:33", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaK2VKf9RRzh4uobf5cBhQgBlQIckxrzjygso58s-HAcuZpHU4nFOtdk&s=10", desc: "ENTERTAINMENT", badge: "LIVE" },
{ title: "TMC", href: "go:34", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2R6uJ3KMM1KLNXiaLMeSMOBDjLG-xZDTgZ-kwEXpWMxVqCjAuGL0EzaQ&s=10", desc: "MOVIES", badge: "LIVE" },
        
    ];






















    const grid = document.getElementById('grid');

    function render(list){
      const frag = document.createDocumentFragment();
      list.forEach(item => {
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

      grid.innerHTML = '';
      grid.appendChild(frag);
    }

    render(CARDS);

    const q = document.getElementById('q');
    q.addEventListener('input', () => {
      const term = q.value.trim().toLowerCase();
      if(!term) return render(CARDS);
      const filtered = CARDS.filter(c => (c.title+" "+(c.desc||'')).toLowerCase().includes(term));
      render(filtered);
    });
  
