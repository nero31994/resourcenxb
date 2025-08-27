
    const CARDS = [
        { title: "Follow my Page", href: "go:FB", image: "https://media.giphy.com/headers/facebook/FuLFvah0klRm.gif", desc: "Follow my Page for Updates", badge: "Follow" },
        { title: "Donate with ❤️", href: "go:GC", image: "https://i.giphy.com/lnfPlSN43yzFDQCVry.webp", desc: "You Contribution Help me to Continue Building Iptv App", badge: "Donate" },
        { title: "EPG", href: "go:EPG", image: "https://res.cloudinary.com/dglljk9gs/image/upload/v1756176528/file_0000000095e861fa8e42c68a790bb0c3_jqgqjv.png", desc: "Electronic Program Guide", badge: "EPG" },
   { title: "UFC", href: "go:Ufc", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTds6GsqzwvU3Zp_zcIcFSaiCgbK2FwYXocXQ&s", desc: "Sports", badge: "Request" },
           { title: "BOXING TV", href: "https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/boxing-tv/8d205a30-d00f-457d-978b-265b290eb7e0/0.m3u8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHItDqM7FpT734IALnidYjSlviJv4lBht72n0R8ek4Ws2Sm1FAcCjlFtM&s=10", desc: "Sports", badge: "Request" },
         
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

        { title: "Celestial Movies Pinoy", href: "http://161.49.17.2:6610/001/2/ch00000090990000001077/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://cms.cignal.tv/Upload/Images/Celestial-Logo-2022.jpg", desc: "Movies", badge: "LIVE" },
  { title: "Celestial Classic Movies", href: "http://161.49.17.2:6610/001/2/ch00000090990000001244/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/4JCkzjl.png", desc: "Movies", badge: "LIVE" },
  { title: "Cinemax", href: "http://161.49.17.2:6610/001/2/ch00000090990000001108/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/337_144.png", desc: "Movies", badge: "LIVE" },
  { title: "HBO", href: "http://161.49.17.2:6610/001/2/ch00000090990000001065/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://images.now-tv.com/shares/channelPreview/img/en_hk/color/ch115_170_122", desc: "Movies", badge: "LIVE" },
 
        { title: "THRILL", href: "http://161.49.17.2:6610/001/2/ch00000090990000001253/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqSD-piQhEC59pxe_ewMVobopwB4ZOBJ2aGCb7dkSZcc4wKwIODMRLGwE&s=10", desc: "Movies", badge: "LIVE" },
  { title: "Lotus Macao", href: "http://161.49.17.2:6610/001/2/ch00000090990000001196/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://cms.cignal.tv/Upload/Thumbnails/mo-macau-lotus-tv-3757.png", desc: "General", badge: "LIVE" },
  { title: "Solarflix", href: "http://161.49.17.2:6610/001/2/ch00000090990000001243/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qLiaXzwJkAAnyxP-6Yjio0jPChi20GmgQEimfO3A7Zs1kK308omRMGU&s=10", desc: "Entertainment", badge: "LIVE" },

        { title: "Jeepney TV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001250/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZypywsavXRdvMBdJvfGBvCbDuGci4V3Z-d-AbgvoKpPpoam8IXsXHSwg&s=10", desc: "Entertainment", badge: "LIVE" },
  { title: "AXN", href: "http://161.49.17.2:6610/001/2/ch00000090990000001182/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "http://linear-poster.astro.com.my/prod/logo/AXN_v1.png", desc: "Entertainment", badge: "LIVE" },
  { title: "Lifetime", href: "http://161.49.17.2:6610/001/2/ch00000090990000001075/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkHjHQ9jM4Ex7MRvkiYJ11WFwFOj5ZWOVFnxrqKjI_JJf1gxVKAExBd8t&s=10", desc: "Lifestyle", badge: "LIVE" },
  { title: "NBA TV Philippines", href: "http://161.49.17.2:6610/001/2/ch00000090990000001064/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dEDe6zxDuRTP0ChAg4i9mCP7SLJ7-oxios44mFloJiTHdojIyIkDmWPM&s=10", desc: "Sports", badge: "LIVE" },
  { title: "RPTV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001094/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_TBHQSr5YfDzCpJi1yf6NW0gsJiOGKJd_Txnf_SSiHeWuLqZ4PV5-N4N&s=10", desc: "General", badge: "LIVE" },
  { title: "One Sports", href: "http://161.49.17.2:6610/001/2/ch00000090990000001083/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKU8tfN6O_dzh_K8gja0csXzkbGkopyrEwELJ7NZdwnu3Nvz6rLCEBWdA&s=10", desc: "Sports", badge: "LIVE" },
  { title: "Motor Vision+", href: "http://161.49.17.2:6610/001/2/ch00000090990000001245/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://motorvision.tv/wp-content/uploads/2023/09/MV_Plus_Logo_1920x1080.png", desc: "Automotive", badge: "LIVE" },
  { title: "Tap Sports", href: "http://161.49.17.2:6610/001/2/ch00000090990000001151/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bPBiChD_zcHLbuPJ5-M7DKWyv1QtRwrYthBu0vriymN2xg5ph2PMh3s&s=10", desc: "Sports", badge: "LIVE" },
  { title: "Pinoy Xtreme Channel", href: "http://161.49.17.2:6610/001/2/ch00000090990000001098/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHTWm5Mk6D1TNqvGAPfKmLFf8D8CxD9a4MjJIWpRvcqIAe3xCAa0hhoCQO&s=10", desc: "Entertainment", badge: "LIVE" },
  { title: "SolarSports", href: "http://161.49.17.2:6610/001/2/ch00000090990000001081/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgg1ph84MscDBIHW8bucjLrXfbTugF1-PuX4PkAjppWvTaB2IqgGPIEDY&s=10", desc: "Sports", badge: "LIVE" },
  { title: "Premier Football", href: "http://161.49.17.2:6610/001/2/ch00000090990000001127/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJRkuQdelZ5K-Ov2b1l7ykf6tFURr3FDONKzb8x1AMfHh-FRjAF-JLzAfA&s=101", desc: "Sports", badge: "LIVE" },
  { title: "SPOTV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001133/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0N7qQQ_UgSMfe3YcqCBJDEEob1KQ-l3CgCXn9JtnU9uKox6PfLmE0S_Ua&s=10", desc: "Sports", badge: "LIVE" },
  { title: "SPOTV2", href: "http://161.49.17.2:6610/001/2/ch00000090990000001200/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_txnuwgl-qFdABKZ0uE8F17sgi3baP9A-mXfedpbFkrF1I-CLggOGbji&s=10", desc: "Sports", badge: "LIVE" },
  { title: "Premiere Sports", href: "http://161.49.17.2:6610/001/2/ch00000090990000001135/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZVMedu7og3A8sfpujlPoWF5L5tzXywHnvwDjH1iqUSv-aBxFOCYBoz3J&s=10", desc: "Sports", badge: "LIVE" },
  { title: "Premier Sports 2", href: "http://161.49.17.2:6610/001/2/ch00000090990000001204/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://cms.cignal.tv/Upload/Thumbnails/Premier-Sports-2.png", desc: "Sports", badge: "LIVE" },
  { title: "History", href: "http://161.49.17.2:6610/001/2/ch00000090990000001074/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RW3MbBcb1GPDaTVhw4R1TW8LoGZVJ62TtBnEdwjjBxmKcSBc5V1GHDRq&s=10", desc: "Documentary", badge: "LIVE" },
  { title: "Discovery Asia", href: "http://161.49.17.2:6610/001/2/ch00000090990000001334/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-uM7_2NzNo8BPzKxJM-7tgqB-G3G9toQNEvHNKmVWlOQe5wiup2rTN998&s=10", desc: "Documentary", badge: "LIVE" },
    

  { title: "Discovery Channel", href: "http://161.49.17.2:6610/001/2/ch00000090990000001194/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNJv2VZi-1i_dxUnUkpltCWppw3uzcFHlyqj6ilGPg3km0V8aJWKpD8AF&s=10", desc: "Documentary", badge: "LIVE" },
  { title: "Asian Food Network", href: "http://161.49.17.2:6610/001/2/ch00000090990000001342/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/O5jBcL2.png", desc: "Food & Lifestyle", badge: "LIVE" },
  { title: "CGTN Documentary", href: "http://161.49.17.2:6610/001/2/ch00000090990000001110/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqRa22DX-Z511WGTBApMsKpws9zrSvwrGz8WUK-xCfiomkCyW-QvlbIww&s=10", desc: "Documentary", badge: "LIVE" },
  { title: "Channel News Asia", href: "http://161.49.17.2:6610/001/2/ch00000090990000001106/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkBHXkxWaDlB4R99YbPB1cs7rzde-n56D0rYylEPADBTI6yrFIVkWLg8&s=10", desc: "News", badge: "LIVE" },
  { title: "HGTV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001162/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/198_144.png", desc: "Home & Lifestyle", badge: "LIVE" },
  { title: "Arirang", href: "http://161.49.17.2:6610/001/2/ch00000090990000001107/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfoBlLBzgomV5OuwpPEe7oKFzRkh3ekQBnq7v5uqoBKHnGHnjj7CJckOID&s=10", desc: "Korean Culture", badge: "LIVE" },
  { title: "NHK BS", href: "http://161.49.17.2:6610/001/2/ch00000090990000001214/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/NHKBS23Horizontal.svg/1200px-NHKBS23Horizontal.svg.png", desc: "Japanese TV", badge: "LIVE" },
  { title: "Animal Planet", href: "http://161.49.17.2:6610/001/2/ch00000090990000001335/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://standfirst-designweek-production.imgix.net/uploads/2018/10/25115647/AnimalPlanet_Vertical_OneLineLarge_RGB-002.jpg?fit=crop&crop=faces&q=80&auto=compress,format&w=395&h=439&dpr=2.625", desc: "Wildlife & Nature", badge: "LIVE" },
  { title: "Crime & Investigation", href: "http://161.49.17.2:6610/001/2/ch00000090990000001144/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/369_144.png", desc: "True Crime", badge: "LIVE" },
  { title: "Al Jazeera", href: "http://161.49.17.2:6610/001/2/ch00000090990000001343/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://1000logos.net/wp-content/uploads/2023/01/Al-Jazeera-Logo.png", desc: "News", badge: "LIVE" },
  { title: "KBS World", href: "http://161.49.17.2:6610/001/2/ch00000090990000001353/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHE02Rex7i6u2GKcGPXD7loNKbrauHEjYZFgKJQAAx8e7oa-9mZMld-1Y&s=10", desc: "Korean TV", badge: "LIVE" },
  { title: "KIX", href: "http://161.49.17.2:6610/001/2/ch00000090990000001263/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/B8Fmzer.png", desc: "Action Entertainment", badge: "LIVE" },
  { title: "Fashion TV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001102/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/Zd5zm7C.png", desc: "Fashion & Lifestyle", badge: "LIVE" },
  { title: "KBS Korea", href: "http://161.49.17.2:6610/001/2/ch00000090990000001246/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://img.cdn.nimg.jp/s/comch/channel-icon/original/ch2613780/7062563.jpg/512x512l_FFFFFFFF?key=cbb987ff9d3219b35c16f7868fbfc3a69b26d82d494d30a83a14721fb60a2e4e", desc: "Korean TV", badge: "LIVE" },
  { title: "Xingkong", href: "http://161.49.17.2:6610/001/2/ch00000090990000001337/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WjROJmS_uBADcDr3yu40CYQnb39t1uMNjpdsfSc6yjqr0NzBwI6kuOk&s=10", desc: "Chinese TV", badge: "LIVE" },
  { title: "BS Premium", href: "http://161.49.17.2:6610/001/2/ch00000090990000001165/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://png.pngtree.com/png-vector/20230829/ourmid/pngtree-gold-color-bs-letter-logo-on-dark-gray-geometric-shape-concept-vector-png-image_9954543.png", desc: "Premium Variety", badge: "LIVE" },
  { title: "TLC", href: "http://161.49.17.2:6610/001/2/ch00000090990000001181/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOhEXAL-K7Cmr-VW_HpQ-w_nf4tO8dyDgKe6RpzUhYJtAjdU_ZJQ94USk&s=10", desc: "Lifestyle & Reality", badge: "LIVE" },
  { title: "Warner TV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001096/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD3gP0azs18dsVW5RvS-SJA5JSMMQFjRzMWejQFWHaQM78GhJBmhyV3Rbf&s=10", desc: "Entertainment", badge: "LIVE" },
  { title: "CNN International", href: "http://161.49.17.2:6610/001/2/ch00000090990000001073/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_3z2lIEooxvquBMpK9f25uIi-4PcFLfWjIQErGRDlunsVZ5g5EqrOqYQ&s=10", desc: "News", badge: "LIVE" },
  { title: "ABC Australia", href: "http://161.49.17.2:6610/001/2/ch00000090990000001111/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpndU71IXRj6R25xyRiCsUGOLCneO98zK72SkBKRBByb00C9Hib7ADXk&s=10", desc: "Australian TV", badge: "LIVE" },

  { title: "CCTV4", href: "http://161.49.17.2:6610/001/2/ch00000090990000001223/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/HBisPOA.png", desc: "International", badge: "LIVE" },
  { title: "Metro Channel", href: "http://161.49.17.2:6610/001/2/ch00000090990000001267/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NbWNx2V_dVUJgkrXJnM0De7DLUYk8g2a_DrJ5EEdYToqSRh5Rt6_uSQ&s=10", desc: "Lifestyle", badge: "LIVE" },
  { title: "USA Today", href: "http://161.49.17.2:6610/001/2/ch00000090990000001199/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hd9_0ynFouF0dqDGgAfIiCXiNqjhupWgRCzPx-XgZEnLIMOsIOKivbwq&s=10", desc: "News", badge: "LIVE" },
  { title: "DW News", href: "http://161.49.17.2:6610/001/2/ch00000090990000001166/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://brandlogos.net/wp-content/uploads/2021/12/deutsche_welle-brandlogo.net_.png", desc: "News", badge: "LIVE" },
  { title: "Fox News", href: "http://161.49.17.2:6610/001/2/ch00000090990000001105/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg", desc: "News", badge: "LIVE" },
  { title: "Euro News", href: "http://161.49.17.2:6610/001/2/ch00000090990000001336/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Euronews._2016_alternative_logo.png", desc: "News", badge: "LIVE" },
  { title: "TV5 Monde", href: "http://161.49.17.2:6610/001/2/ch00000090990000001156/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBt_wggu2DRyiDP2Z-GmHbC_m57NEDQSWCPUHZN2Sx08jJlu3xzq7fVA&s=10", desc: "International", badge: "LIVE" },
  { title: "France24", href: "http://161.49.17.2:6610/001/2/ch00000090990000001157/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhE1NBxfdUqtRZxOFrDD3SJ94veZkerrUDsr2CDTZ26LgyDUgj08hXSLcP&s=10", desc: "News", badge: "LIVE" },
  { title: "Cartoonito", href: "http://161.49.17.2:6610/001/2/ch00000090990000001125/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3zosm05NzLtSt_HutnQVcXIDO2ujOvpqpF6TvnAWYYN6wKgMAgjTvaJd&s=10", desc: "Kids", badge: "LIVE" },
  { title: "Living Asia Channel", href: "http://161.49.17.2:6610/001/2/ch00000090990000001154/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://i.imgur.com/Wsj7iPd.png", desc: "Travel", badge: "LIVE" },
  { title: "Nick Jr", href: "http://161.49.17.2:6610/001/2/ch00000090990000001215/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTYRq8jQ_FC8z9mAOHoj29BA3RrVnIpHoIuyybG05xL6uHCs10HstkHmY&s=10.png", desc: "Kids", badge: "LIVE" },
  { title: "Cartoon Network", href: "http://161.49.17.2:6610/001/2/ch00000090990000001178/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://poster.starhubgo.com/Linear_channels2/316_1920x1080_HTV.png", desc: "Kids", badge: "LIVE" },
  { title: "CGTN", href: "http://161.49.17.2:6610/001/2/ch00000090990000001146/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/CGTN.png", desc: "News", badge: "LIVE" },
  { title: "NHK World Japan", href: "http://161.49.17.2:6610/001/2/ch00000090990000001145/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/NHK_World.svg", desc: "International", badge: "LIVE" },
  { title: "Spotlight TV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001134/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5cusz_Q--HWEY0r4py4Fcx2QIvM83eHu45xHOqOIUmgifz08EkgThsRc&s=10", desc: "Entertainment", badge: "LIVE" },
  { title: "SMNI Channel", href: "http://161.49.17.2:6610/001/2/ch00000090990000001155/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6qJkC6cOrUniuToD_CgHA_IvUncsIqMzVXTeKZ4jM6iB2bQ5zcUSaqq0&s=10", desc: "Religious", badge: "LIVE" },
  { title: "Global Trekker", href: "http://161.49.17.2:6610/001/2/ch00000090990000001203/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/482_144.png", desc: "Documentary", badge: "LIVE" },
  { title: "Light TV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001103/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQRvteqeoL_4Uc7WpnxI5ZFtgT-35eEnrkhIFtUOsTEKuR5PcWLTv_Kk&s=10", desc: "Religious", badge: "LIVE" },
  { title: "Oras Ng Himala", href: "http://161.49.17.2:6610/001/2/ch00000090990000001175/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://jioswm.org/assets/ministries/onh-730979c3f694e6ba49c8fc43562e04e72f002697bf08e5c8854f3b71aac56676.png", desc: "Religious", badge: "LIVE" },
  { title: "INC TV", href: "http://161.49.17.2:6610/001/2/ch00000090990000001092/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/INCTV_Logo_With_Shadow.webp", desc: "Religious", badge: "LIVE" },
  { title: "3ABN", href: "http://161.49.17.2:6610/001/2/ch00000090990000001183/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://3abn.org/img/logos/3abn-logo-md.jpg", desc: "Religious", badge: "LIVE" },
  { title: "EWTN", href: "http://161.49.17.2:6610/001/2/ch00000090990000001104/manifest.mpd?JITPDRMType=Widevine&virtualDomain=001.live_hls.zte.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8NjV5sqkKOgSpV7-Nj5Dd0KHMVhrtW6ukg&s", desc: "Religious", badge: "LIVE" }

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
