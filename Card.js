
    const CARDS = [
        { title: "Follow my Page", href: "go:FB", image: "https://media.giphy.com/headers/facebook/FuLFvah0klRm.gif", desc: "Follow my Page for Updates", badge: "Follow" },
        { title: "Donate with ❤️", href: "go:GC", image: "https://i.giphy.com/lnfPlSN43yzFDQCVry.webp", desc: "You Contribution Help me to Continue Building Iptv App", badge: "Donate" },
        { title: "EPG", href: "go:EPG", image: "https://res.cloudinary.com/dglljk9gs/image/upload/v1756176528/file_0000000095e861fa8e42c68a790bb0c3_jqgqjv.png", desc: "Electronic Program Guide", badge: "EPG" },
    
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
{ title: "TAP ACTION", href: "go:31", image: "https://cms.cignal.tv/Upload/Thumbnails/Tap-Action-Flix-Highlight-Thumbnail-Feb-2022.jpg", desc: "SPORTS", badge: "LIVE" },
{ title: "TAP TV", href: "go:32", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzk4dN4f9D_DjEE_vkxXgfbdo9zbFkFyKNLg&usqp=CAU", desc: "ENTERTAINMENT", badge: "LIVE" },
{ title: "TAP EDGE", href: "go:33", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaK2VKf9RRzh4uobf5cBhQgBlQIckxrzjygso58s-HAcuZpHU4nFOtdk&s=10", desc: "ENTERTAINMENT", badge: "LIVE" },
{ title: "TMC", href: "go:34", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2R6uJ3KMM1KLNXiaLMeSMOBDjLG-xZDTgZ-kwEXpWMxVqCjAuGL0EzaQ&s=10", desc: "MOVIES", badge: "LIVE" },


        
  { title: "Celestial Movies Pinoy", href: "http://161.49.17.2:6610/001/2/ch00000090990000001077/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/e5IZsv3.png", desc: "Movies", badge: "LIVE" },
  { title: "Celestial Classic Movies", href: "http://161.49.17.2:6610/001/2/ch00000090990000001244/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/4JCkzjl.png", desc: "Movies", badge: "LIVE" },
  { title: "Cinemax", href: "http://161.49.17.2:6610/001/2/ch00000090990000001108/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/337_144.png", desc: "Movies", badge: "LIVE" },
  { title: "HBO", href: "http://161.49.17.2:6610/001/2/ch00000090990000001065/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://images.now-tv.com/shares/channelPreview/img/en_hk/color/ch115_170_122", desc: "Movies", badge: "LIVE" },
  { title: "THRILL", href: "http://161.49.17.2:6610/001/2/ch00000090990000001253/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://static.wikia.nocookie.net/logos/images/9/9c/Thrill_logo_2014.png/revision/latest/scale-to-width-down/306?cb=20220502112950&path-prefix=vi", desc: "Movies", badge: "LIVE" },
  { title: "Lotus Macao", href: "http://161.49.17.2:6610/001/2/ch00000090990000001196/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://cms.cignal.tv/Upload/Thumbnails/mo-macau-lotus-tv-3757.png", desc: "General", badge: "LIVE" },
  { title: "Solarflix", href: "http://161.49.17.2:6610/001/2/ch00000090990000001243/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/OgBDJ75.png", desc: "Entertainment", badge: "LIVE" },
  { title: "Jeepney TV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001250/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://static.wikia.nocookie.net/russel/images/0/0b/Jeepney_TV_3D_Logo_2015.png/revision/latest?cb=20230326142526", desc: "Entertainment", badge: "LIVE" },
  { title: "AXN", href: "http://161.49.17.2:6610/001/2/ch00000090990000001182/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "http://linear-poster.astro.com.my/prod/logo/AXN_v1.png", desc: "Entertainment", badge: "LIVE" },
  { title: "Lifetime", href: "http://161.49.17.2:6610/001/2/ch00000090990000001075/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_Lifetime_2020.svg/2560px-Logo_Lifetime_2020.svg.png", desc: "Lifestyle", badge: "LIVE" },
  { title: "NBA TV Philippines", href: "http://161.49.17.2:6610/001/2/ch00000090990000001064/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/NBA_TV.svg/1200px-NBA_TV.svg.png", desc: "Sports", badge: "LIVE" },
  { title: "RPTV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001094/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://static.wikia.nocookie.net/russel/images/f/fb/RPTV_Alternative_Logo_2024.png/revision/latest?cb=20240305140432", desc: "General", badge: "LIVE" },
  { title: "One Sports", href: "http://161.49.17.2:6610/001/2/ch00000090990000001083/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/One_Sports_logo.svg/2560px-One_Sports_logo.svg.png", desc: "Sports", badge: "LIVE" },
  { title: "Motor Vision+", href: "http://161.49.17.2:6610/001/2/ch00000090990000001245/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://motorvision.tv/wp-content/uploads/2023/09/MV_Plus_Logo_1920x1080.png", desc: "Automotive", badge: "LIVE" },
  { title: "Tap Sports", href: "http://161.49.17.2:6610/001/2/ch00000090990000001151/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/ZsWDiRF.png", desc: "Sports", badge: "LIVE" },
  { title: "Pinoy Xtreme Channel", href: "http://161.49.17.2:6610/001/2/ch00000090990000001098/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/GlSP8PX.png", desc: "Entertainment", badge: "LIVE" },
  { title: "SolarSports", href: "http://161.49.17.2:6610/001/2/ch00000090990000001081/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://static.wikia.nocookie.net/russel/images/0/0b/Jeepney_TV_3D_Logo_2015.png/revision/latest?cb=20230326142526", desc: "Sports", badge: "LIVE" },
  { title: "Premier Football", href: "http://161.49.17.2:6610/001/2/ch00000090990000001127/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://static.wikia.nocookie.net/russel/images/4/44/Premier_Football_Logo_November_2020.png/revision/latest/scale-to-width-down/250?cb=20220402065521", desc: "Sports", badge: "LIVE" },
  { title: "SPOTV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001133/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://linear-poster.astro.com.my/prod/logo/SPOTV.png", desc: "Sports", badge: "LIVE" },
  { title: "SPOTV2", href: "http://161.49.17.2:6610/001/2/ch00000090990000001200/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://iili.io/MkG2hg.png", desc: "Sports", badge: "LIVE" },
  { title: "Premiere Sports", href: "http://161.49.17.2:6610/001/2/ch00000090990000001135/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/PremierSports-ph.png", desc: "Sports", badge: "LIVE" },
  { title: "Premier Sports 2", href: "http://161.49.17.2:6610/001/2/ch00000090990000001204/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://static.wikia.nocookie.net/logopedia/images/5/59/PremierSports2_logo.png/revision/latest/scale-to-width-down/250?cb=20220528091432", desc: "Sports", badge: "LIVE" },
  { title: "History", href: "http://161.49.17.2:6610/001/2/ch00000090990000001074/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://cantseeus.com/wp-content/uploads/2023/10/History_28201529.png", desc: "Documentary", badge: "LIVE" },
  { title: "Discovery Asia", href: "http://161.49.17.2:6610/001/2/ch00000090990000001334/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Discovery-asia.png/220px-Discovery-asia.png", desc: "Documentary", badge: "LIVE" }

   [     
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
  
