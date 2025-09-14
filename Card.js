
    const CARDS = [
       { title: "Donate with ❤️", href: "go:GC", image: "https://i.giphy.com/lnfPlSN43yzFDQCVry.webp", desc: "buy me coffee ☕", badge: "Donate" },
        { title: "EPG", href: "go:EPG", image: "https://res.cloudinary.com/dglljk9gs/image/upload/v1756176528/file_0000000095e861fa8e42c68a790bb0c3_jqgqjv.png", desc: "Electronic Program Guide", badge: "EPG" },
        { title: "MOVIES", href: "go:N", image: "https://variety.com/wp-content/uploads/2019/02/netflix_newlogoanimation.gif", desc: "WATCH MOVIES ON THE GO!", badge: "⭐Featured" },
        { title: "PLUTO TV", href: "go:pluto", image: "https://i.giphy.com/T4uWkBi5pq4IYAAywy.webp", desc: "PLUTO TV", badge: "Featured" },
       { title: "WWE", href: "go:WWE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkblpVWpsze998MySnArHfPtF3mIFP8KlrFQb4AToZL_b3JZWDbIVjvmby&s=10", desc: "Sports", badge: "Request" },
         { title: "NBA CANADA", href: "go:NBA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDXK3g0Lm_5T-ynBFKCMSmgvCyPk4QWTstpRWYyYFzIYWFbkl-UvOk90&s=10", desc: "Sports", badge: "Request" },
       { title: "UFC", href: "go:Ufc", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmSt2Eu4zAEF8_bVvWJS_vAkWFHidMo6g0sPrJ04M9TUdZDObIa7KjG8sY&s=10", desc: "Sports", badge: "Request" },
       { title: "BOXING TV", href: "https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/boxing-tv/8d205a30-d00f-457d-978b-265b290eb7e0/0.m3u8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHItDqM7FpT734IALnidYjSlviJv4lBht72n0R8ek4Ws2Sm1FAcCjlFtM&s=10", desc: "Sports", badge: "Request" },
       { title: "CCTN47", href: "go:Cctn", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzO-ZEyvzwrYl9snjS5XzkcC_sCYmU-A1znAuM5eS5Jx1qwU9i-pvowo&s=10", desc: "Religion", badge: "Request" },
        
        
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

        { title: "Celestial Movies Pinoy", href: "go:35", image: "https://cms.cignal.tv/Upload/Images/Celestial-Logo-2022.jpg", desc: "Movies", badge: "LIVE" },
  { title: "Celestial Classic Movies", href: "go:36", image: "https://i.imgur.com/4JCkzjl.png", desc: "Movies", badge: "LIVE" },
  { title: "Cinemax", href: "go:37", image: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/337_144.png", desc: "Movies", badge: "LIVE" },
  { title: "HBO", href: "go:38", image: "https://images.now-tv.com/shares/channelPreview/img/en_hk/color/ch115_170_122", desc: "Movies", badge: "LIVE" },
 
        { title: "THRILL", href: "go:39", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqSD-piQhEC59pxe_ewMVobopwB4ZOBJ2aGCb7dkSZcc4wKwIODMRLGwE&s=10", desc: "Movies", badge: "LIVE" },
  { title: "Lotus Macao", href: "go:40", image: "https://cms.cignal.tv/Upload/Thumbnails/mo-macau-lotus-tv-3757.png", desc: "General", badge: "LIVE" },
  { title: "Solarflix", href: "go:41", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qLiaXzwJkAAnyxP-6Yjio0jPChi20GmgQEimfO3A7Zs1kK308omRMGU&s=10", desc: "Entertainment", badge: "LIVE" },

        { title: "Jeepney TV", href: "go:42", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZypywsavXRdvMBdJvfGBvCbDuGci4V3Z-d-AbgvoKpPpoam8IXsXHSwg&s=10", desc: "Entertainment", badge: "LIVE" },
  { title: "AXN", href: "go:43", image: "http://linear-poster.astro.com.my/prod/logo/AXN_v1.png", desc: "Entertainment", badge: "LIVE" },
  { title: "Lifetime", href: "go:44", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkHjHQ9jM4Ex7MRvkiYJ11WFwFOj5ZWOVFnxrqKjI_JJf1gxVKAExBd8t&s=10", desc: "Lifestyle", badge: "LIVE" },
  { title: "NBA TV Philippines", href: "go:45", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dEDe6zxDuRTP0ChAg4i9mCP7SLJ7-oxios44mFloJiTHdojIyIkDmWPM&s=10", desc: "Sports", badge: "LIVE" },
  { title: "RPTV", href: "go:46", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_TBHQSr5YfDzCpJi1yf6NW0gsJiOGKJd_Txnf_SSiHeWuLqZ4PV5-N4N&s=10", desc: "General", badge: "LIVE" },
  { title: "One Sports", href: "go:47", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKU8tfN6O_dzh_K8gja0csXzkbGkopyrEwELJ7NZdwnu3Nvz6rLCEBWdA&s=10", desc: "Sports", badge: "LIVE" },
  { title: "Motor Vision+", href: "go:48", image: "https://motorvision.tv/wp-content/uploads/2023/09/MV_Plus_Logo_1920x1080.png", desc: "Automotive", badge: "LIVE" },
  { title: "Tap Sports", href: "go:49", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bPBiChD_zcHLbuPJ5-M7DKWyv1QtRwrYthBu0vriymN2xg5ph2PMh3s&s=10", desc: "Sports", badge: "LIVE" },
  { title: "Pinoy Xtreme Channel", href: "go:50", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHTWm5Mk6D1TNqvGAPfKmLFf8D8CxD9a4MjJIWpRvcqIAe3xCAa0hhoCQO&s=10", desc: "Entertainment", badge: "LIVE" },
  { title: "SolarSports", href: "go:51", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgg1ph84MscDBIHW8bucjLrXfbTugF1-PuX4PkAjppWvTaB2IqgGPIEDY&s=10", desc: "Sports", badge: "LIVE" },
  { title: "Premier Football", href: "go:52", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJRkuQdelZ5K-Ov2b1l7ykf6tFURr3FDONKzb8x1AMfHh-FRjAF-JLzAfA&s=101", desc: "Sports", badge: "LIVE" },
  { title: "SPOTV", href: "go:53", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0N7qQQ_UgSMfe3YcqCBJDEEob1KQ-l3CgCXn9JtnU9uKox6PfLmE0S_Ua&s=10", desc: "Sports", badge: "LIVE" },
  { title: "SPOTV2", href: "go:54", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_txnuwgl-qFdABKZ0uE8F17sgi3baP9A-mXfedpbFkrF1I-CLggOGbji&s=10", desc: "Sports", badge: "LIVE" },
  { title: "Premiere Sports", href: "go:55", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZVMedu7og3A8sfpujlPoWF5L5tzXywHnvwDjH1iqUSv-aBxFOCYBoz3J&s=10", desc: "Sports", badge: "LIVE" },
  { title: "Premier Sports 2", href: "go:56", image: "https://cms.cignal.tv/Upload/Thumbnails/Premier-Sports-2.png", desc: "Sports", badge: "LIVE" },
  { title: "History", href: "go:57", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RW3MbBcb1GPDaTVhw4R1TW8LoGZVJ62TtBnEdwjjBxmKcSBc5V1GHDRq&s=10", desc: "Documentary", badge: "LIVE" },
  { title: "Discovery Asia", href: "go:58", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-uM7_2NzNo8BPzKxJM-7tgqB-G3G9toQNEvHNKmVWlOQe5wiup2rTN998&s=10", desc: "Documentary", badge: "LIVE" },
    

  { title: "Discovery Channel", href: "go:59", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNJv2VZi-1i_dxUnUkpltCWppw3uzcFHlyqj6ilGPg3km0V8aJWKpD8AF&s=10", desc: "Documentary", badge: "LIVE" },
  { title: "Asian Food Network", href: "go:60", image: "https://i.imgur.com/O5jBcL2.png", desc: "Food & Lifestyle", badge: "LIVE" },
  { title: "CGTN Documentary", href: "go:61", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqRa22DX-Z511WGTBApMsKpws9zrSvwrGz8WUK-xCfiomkCyW-QvlbIww&s=10", desc: "Documentary", badge: "LIVE" },
  { title: "Channel News Asia", href: "go:62", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkBHXkxWaDlB4R99YbPB1cs7rzde-n56D0rYylEPADBTI6yrFIVkWLg8&s=10", desc: "News", badge: "LIVE" },
  { title: "HGTV", href: "go:63", image: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/198_144.png", desc: "Home & Lifestyle", badge: "LIVE" },
  { title: "Arirang", href: "go:64", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfoBlLBzgomV5OuwpPEe7oKFzRkh3ekQBnq7v5uqoBKHnGHnjj7CJckOID&s=10", desc: "Korean Culture", badge: "LIVE" },
  { title: "NHK BS", href: "go:65", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/NHKBS23Horizontal.svg/1200px-NHKBS23Horizontal.svg.png", desc: "Japanese TV", badge: "LIVE" },
  { title: "Animal Planet", href: "go:66", image: "https://standfirst-designweek-production.imgix.net/uploads/2018/10/25115647/AnimalPlanet_Vertical_OneLineLarge_RGB-002.jpg?fit=crop&crop=faces&q=80&auto=compress,format&w=395&h=439&dpr=2.625", desc: "Wildlife & Nature", badge: "LIVE" },
  { title: "Crime & Investigation", href: "go:67", image: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/369_144.png", desc: "True Crime", badge: "LIVE" },
  { title: "Al Jazeera", href: "go:68", image: "https://1000logos.net/wp-content/uploads/2023/01/Al-Jazeera-Logo.png", desc: "News", badge: "LIVE" },
  { title: "KBS World", href: "go:69", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHE02Rex7i6u2GKcGPXD7loNKbrauHEjYZFgKJQAAx8e7oa-9mZMld-1Y&s=10", desc: "Korean TV", badge: "LIVE" },
  { title: "KIX", href: "go:70", image: "https://i.imgur.com/B8Fmzer.png", desc: "Action Entertainment", badge: "LIVE" },
  { title: "Fashion TV", href: "go:71", image: "https://i.imgur.com/Zd5zm7C.png", desc: "Fashion & Lifestyle", badge: "LIVE" },
  { title: "KBS Korea", href: "go:72", image: "https://img.cdn.nimg.jp/s/comch/channel-icon/original/ch2613780/7062563.jpg/512x512l_FFFFFFFF?key=cbb987ff9d3219b35c16f7868fbfc3a69b26d82d494d30a83a14721fb60a2e4e", desc: "Korean TV", badge: "LIVE" },
  { title: "Xingkong", href: "go:73", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WjROJmS_uBADcDr3yu40CYQnb39t1uMNjpdsfSc6yjqr0NzBwI6kuOk&s=10", desc: "Chinese TV", badge: "LIVE" },
  { title: "BS Premium", href: "go:74", image: "https://png.pngtree.com/png-vector/20230829/ourmid/pngtree-gold-color-bs-letter-logo-on-dark-gray-geometric-shape-concept-vector-png-image_9954543.png", desc: "Premium Variety", badge: "LIVE" },
  { title: "TLC", href: "go:75", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOhEXAL-K7Cmr-VW_HpQ-w_nf4tO8dyDgKe6RpzUhYJtAjdU_ZJQ94USk&s=10", desc: "Lifestyle & Reality", badge: "LIVE" },
  { title: "Warner TV", href: "go:76", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD3gP0azs18dsVW5RvS-SJA5JSMMQFjRzMWejQFWHaQM78GhJBmhyV3Rbf&s=10", desc: "Entertainment", badge: "LIVE" },
  { title: "CNN International", href: "go:77", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_3z2lIEooxvquBMpK9f25uIi-4PcFLfWjIQErGRDlunsVZ5g5EqrOqYQ&s=10", desc: "News", badge: "LIVE" },
  { title: "ABC Australia", href: "go:78", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpndU71IXRj6R25xyRiCsUGOLCneO98zK72SkBKRBByb00C9Hib7ADXk&s=10", desc: "Australian TV", badge: "LIVE" },

  { title: "CCTV4", href: "go:79", image: "https://i.imgur.com/HBisPOA.png", desc: "International", badge: "LIVE" },
  { title: "Metro Channel", href: "go:80", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NbWNx2V_dVUJgkrXJnM0De7DLUYk8g2a_DrJ5EEdYToqSRh5Rt6_uSQ&s=10", desc: "Lifestyle", badge: "LIVE" },
  { title: "USA Today", href: "go:81", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hd9_0ynFouF0dqDGgAfIiCXiNqjhupWgRCzPx-XgZEnLIMOsIOKivbwq&s=10", desc: "News", badge: "LIVE" },
  { title: "DW News", href: "go:82", image: "https://brandlogos.net/wp-content/uploads/2021/12/deutsche_welle-brandlogo.net_.png", desc: "News", badge: "LIVE" },
  { title: "Fox News", href: "go:83", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg", desc: "News", badge: "LIVE" },
  { title: "Euro News", href: "go:84", image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Euronews._2016_alternative_logo.png", desc: "News", badge: "LIVE" },
  { title: "TV5 Monde", href: "go:85", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBt_wggu2DRyiDP2Z-GmHbC_m57NEDQSWCPUHZN2Sx08jJlu3xzq7fVA&s=10", desc: "International", badge: "LIVE" },
  { title: "France24", href: "go:86", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhE1NBxfdUqtRZxOFrDD3SJ94veZkerrUDsr2CDTZ26LgyDUgj08hXSLcP&s=10", desc: "News", badge: "LIVE" },
  { title: "Cartoonito", href: "go:87", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3zosm05NzLtSt_HutnQVcXIDO2ujOvpqpF6TvnAWYYN6wKgMAgjTvaJd&s=10", desc: "Kids", badge: "LIVE" },
  { title: "Living Asia Channel", href: "go:88", image: "https://i.imgur.com/Wsj7iPd.png", desc: "Travel", badge: "LIVE" },
  { title: "Nick Jr", href: "go:89", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTYRq8jQ_FC8z9mAOHoj29BA3RrVnIpHoIuyybG05xL6uHCs10HstkHmY&s=10.png", desc: "Kids", badge: "LIVE" },
  { title: "Cartoon Network", href: "go:90", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyR3aQpZI1vXrL8a-RpyLstqGCi_HM9PuwJqSV4RJ8xgmQy82gC1QZP2G&s=10", desc: "Kids", badge: "LIVE" },
  { title: "CGTN", href: "go:91", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/CGTN.png", desc: "News", badge: "LIVE" },
  { title: "NHK World Japan", href: "go:92", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/NHK_World.svg", desc: "International", badge: "LIVE" },
  { title: "Spotlight TV", href: "go:93", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5cusz_Q--HWEY0r4py4Fcx2QIvM83eHu45xHOqOIUmgifz08EkgThsRc&s=10", desc: "Entertainment", badge: "LIVE" },
  { title: "SMNI Channel", href: "go:94", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6qJkC6cOrUniuToD_CgHA_IvUncsIqMzVXTeKZ4jM6iB2bQ5zcUSaqq0&s=10", desc: "Religious", badge: "LIVE" },
  { title: "Global Trekker", href: "go:95", image: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/482_144.png", desc: "Documentary", badge: "LIVE" },
  { title: "Light TV", href: "go:96", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQRvteqeoL_4Uc7WpnxI5ZFtgT-35eEnrkhIFtUOsTEKuR5PcWLTv_Kk&s=10", desc: "Religious", badge: "LIVE" },
  { title: "Oras Ng Himala", href: "go:97", image: "https://jioswm.org/assets/ministries/onh-730979c3f694e6ba49c8fc43562e04e72f002697bf08e5c8854f3b71aac56676.png", desc: "Religious", badge: "LIVE" },
  { title: "INC TV", href: "go:98", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/INCTV_Logo_With_Shadow.webp", desc: "Religious", badge: "LIVE" },
  { title: "3ABN", href: "go:99", image: "https://3abn.org/img/logos/3abn-logo-md.jpg", desc: "Religious", badge: "LIVE" },
  { title: "EWTN", href: "go:100", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8NjV5sqkKOgSpV7-Nj5Dd0KHMVhrtW6ukg&s", desc: "Religious", badge: "LIVE" },


  { title: "TV5 HD", href: "go:C1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-m2TPRW6arfXy_QzgKx8UkzTB_F68TQZds8OCqCEgALsFaj185QVmM5U&s=10", desc: "GENERAL ENTERTAINMENT", badge: "HD" },
  { title: "RPTV", href: "go:C2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_TBHQSr5YfDzCpJi1yf6NW0gsJiOGKJd_Txnf_SSiHeWuLqZ4PV5-N4N&s=10", desc: "NEWS & PUBLIC AFFAIRS", badge: "HD" },
  { title: "TRUE FM", href: "go:C3", image: "https://radyoph.com/wp-content/uploads/2024/08/truefm1059-1.png", desc: "RADIO / MUSIC", badge: "HD" },
  { title: "A2Z", href: "go:C4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8xdzLPA6Bic5-37pV-BONJGnHRFlvygAg9bG79EpBQfD-y6pqBaF5ygk&s=101101144828", desc: "GENERAL ENTERTAINMENT", badge: "HD" },
  { title: "PTV4", href: "go:C5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeDDZtGQxsk5QNh2XvgtdR0rSIxgaCj__Yg&usqp=CAU", desc: "GOVERNMENT CHANNEL", badge: "HD" },
  { title: "IBC13", href: "go:C6", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbBUNeIgLtz9sUmWHB-9_aMNgN44kf3MD6A&s", desc: "GENERAL ENTERTAINMENT", badge: "HD" },
  { title: "BUKO", href: "go:C7", image: "https://cms.cignal.tv/Upload/Images/BuKo-Channel.jpg", desc: "COMEDY & VARIETY", badge: "HD" },
  { title: "SARI SARI", href: "go:C8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVn9432V_QmH68q8KCXYC0l-adFPvmW2MYKVG0bHZDbJcHQdnjIQmKik&s=10", desc: "FILIPINO ENTERTAINMENT", badge: "HD" },
  { title: "TVN PINOY", href: "go:C9", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4lOwohvhGLEpV-FcOQH1VUDx34AcxF48wuaRa0bBvlkCMvdy0MmWO9o&s=10", desc: "FILIPINO MOVIES & SHOWS", badge: "HD" },
  { title: "NBA TV PH", href: "go:C10", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dEDe6zxDuRTP0ChAg4i9mCP7SLJ7-oxios44mFloJiTHdojIyIkDmWPM&s=10", desc: "SPORTS - BASKETBALL", badge: "HD" },

  { title: "PREMIER SPORTS", href: "go:C11", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZVMedu7og3A8sfpujlPoWF5L5tzXywHnvwDjH1iqUSv-aBxFOCYBoz3J&s=10", desc: "SPORTS", badge: "HD" },
  { title: "ONE SPORTS", href: "go:C12", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKU8tfN6O_dzh_K8gja0csXzkbGkopyrEwELJ7NZdwnu3Nvz6rLCEBWdA&s=10", desc: "SPORTS", badge: "HD" },
  { title: "PBA RUSH", href: "go:C13", image: "https://cms.cignal.tv/Upload/Images/PBA%20Rush.jpg", desc: "SPORTS - BASKETBALL", badge: "HD" },
  { title: "UAAP VARSITY", href: "go:C14", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-prHHZ7wtG6dkUyXG-GqHx7Rgsrzu9oC_berThXJdc8dWMqrBnvzFA8z&s=10", desc: "SPORTS - COLLEGE", badge: "HD" },
  { title: "ONE SPORTS+", href: "go:C15", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGkJB9y3psp20FWIyIJZWj5Ja4rMmMcGymBIEHZkUyceanZ4hb1cOTKE&s=10", desc: "SPORTS", badge: "HD" },
  { title: "TAP SPORTS", href: "go:C16", image: "https://cms.cignal.tv/Upload/Images/Tap-Sports.jpg", desc: "SPORTS", badge: "HD" },
  { title: "MPTV", href: "go:C17", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6x53eGfoM6PWMgV7-LuHJfczb6BFnqqkZnHyF3bWl1eBGsPAbAHr-a0XP&s=10", desc: "MOVIES & ENTERTAINMENT", badge: "HD" },
  { title: "ROCK ENTERTAINMENT", href: "go:C18", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5GdZ4683vmNrvJ-9olh0TQfAhzxFEG4mW7dvr7LMJOKdNTcXDYHHwjG1&s=10", desc: "GENERAL ENTERTAINMENT", badge: "HD" },
  { title: "HITS NOW", href: "go:C19", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2K8jOD-PqC-XrzDA8QcuYAbcd3ezNoyT2vA&s", desc: "MUSIC & LIFESTYLE", badge: "HD" },
  { title: "TAP TV", href: "go:C20", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2filpi8f-iercLRCjTRzC3pd_WmkuOxlVew&s", desc: "LIFESTYLE & ENTERTAINMENT", badge: "HD" },

  { title: "GLOBAL TREKKER", href: "go:C21", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRme29zMVh_xTpLstIcr9eM6Q-zF-6TzBw-7CG-65dDyMkkgZ9IPR0pRlE&s=10", desc: "TRAVEL & DOCUMENTARY", badge: "HD" },
  { title: "WARNER TV", href: "go:C22", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANf9LVRv5raAlZp9Zjn0Yym6aApkzPgPzeEBRVdvV1LzO9PWOzhW2tYg&s=10", desc: "MOVIES & SERIES", badge: "HD" },
  { title: "HGTV", href: "go:C23", image: "https://cms.cignal.tv/Upload/Images/HGTV%20Feb%202022%20Highlight%20Banner.png", desc: "HOME & LIVING", badge: "HD" },
  { title: "FOOD NETWORK", href: "go:C24", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsN6ibDz_juZOD0ymBlhkspbx-Tdy48tYKw&s", desc: "FOOD & COOKING", badge: "HD" },
  { title: "FASHION TV", href: "go:C25", image: "https://cms.cignal.tv/Upload/Thumbnails/Fashion-TV.jpg", desc: "FASHION & LIFESTYLE", badge: "HD" },
  { title: "AXN", href: "go:C26", image: "https://cms.cignal.tv/Upload/Images/AXN-New-Logo-(Black).jpg", desc: "ACTION & ENTERTAINMENT", badge: "HD" },

 
  { title: "LIFETIME", href: "go:C27", image: "https://cms.cignal.tv/Upload/Thumbnails/Lifetime-Logo.jpg", desc: "Entertainment channel featuring drama series, reality shows, and movies for women.", badge: "LIVE" },
  { title: "HITS", href: "go:C28", image: "https://cms.cignal.tv/Upload/Images/Hits.png", desc: "Classic TV series and shows from the 80s, 90s, and 2000s.", badge: "LIVE" },
  { title: "HBO", href: "go:C29", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvISKHrdrEqrN9N0hOCXDPzZkAH1ZSFqjxQ&usqp=CAU", desc: "Premium channel for blockbuster movies, original series, and specials.", badge: "LIVE" },
  { title: "HITS MOVIES", href: "go:C30", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-Zqu18ygY9w9VHA5ZFWrgZ8JhunhGkP1YQ&usqp=CAU", desc: "Movies channel showing Hollywood classics and popular titles.", badge: "LIVE" },
  { title: "TAP MOVIES", href: "go:C31", image: "https://cms.cignal.tv/Upload/Thumbnails/Tap-Movies-Nov-2021-Highlights-Vid-Thumbnails.jpg", desc: "Hollywood movies and box-office hits all day.", badge: "LIVE" },
  { title: "ROCK ACTION", href: "go:C32", image: "https://cms.cignal.tv/Upload/Images/ROCK%20Action%20Banner_1920x350.jpg", desc: "Action-packed movies and adrenaline-pumping films.", badge: "LIVE" },
  { title: "TAP ACTION FLIX", href: "go:C33", image: "https://cms.cignal.tv/Upload/Thumbnails/Tap-Action-Flix-Highlight-Thumbnail-Feb-2022.jpg", desc: "24/7 action movies with martial arts, adventure, and thrillers.", badge: "LIVE" },
  { title: "HBO FAMILY", href: "go:C34", image: "https://cms.cignal.tv/Upload/Thumbnails/HBO-Family.jpg", desc: "Family-friendly movies, kids programming, and animation.", badge: "LIVE" },
  { title: "CINEMAX", href: "go:C35", image: "https://cms.cignal.tv/Upload/Thumbnails/Cinemax.jpg", desc: "Hollywood blockbusters and exclusive movie premieres.", badge: "LIVE" },
  { title: "HBO SIGNATURE", href: "go:C36", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AS896jAkYgSpnPPo0yuFilF_wCmOI87oocYUNtwt3BnE2m7MH1LLs5gw&s=10", desc: "Award-winning dramas and HBO original series.", badge: "LIVE" },
  { title: "HBO HITS", href: "go:C37", image: "https://cms.cignal.tv/Upload/Images/hbo%20hits-1.jpg", desc: "The latest box office hits and fan-favorite movies.", badge: "LIVE" },
  { title: "CNN", href: "go:C38", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPVGT4Nxt8oHD6plZbKEAwjUb6jKBE3MgVJikRS7MWlwGNE11wJn01M8&s=10", desc: "Global news channel covering breaking news and world events.", badge: "LIVE" },
  { title: "ONE PH", href: "go:C39", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VxNycS9dQUXNwvutRBRMZk2ky0wCQSXuLA&usqp=CAU", desc: "Philippine news, current affairs, and talk shows.", badge: "LIVE" },
  { title: "ONE NEWS", href: "go:C40", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/OneNewsPH_logo.svg/250px-OneNewsPH_logo.svg.png", desc: "Comprehensive coverage of local and international news.", badge: "LIVE" },
  { title: "BILYONARYO", href: "go:C41", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQk3DcVs-Uqt9um6jH-4fEvr5ap09qIQbNg&usqp=CAU", desc: "Business news, finance insights, and economic updates.", badge: "LIVE" },
  { title: "BLOOMBERG", href: "go:C42", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUQ-u0Ycba77ibqMvGH6Mg_MsmctBruZMy0NmZdx6yI3bo1hNuD5Phrb6&s=10", desc: "Global finance, markets, and economic trends.", badge: "LIVE" },
  { title: "CNA", href: "go:C43", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4wsRdn5jQwNf9rVjWe1-Yq56-FsGHd5ksQ&s", desc: "Asian news channel with deep analysis and documentaries.", badge: "LIVE" },
  { title: "AL JAZEERA", href: "go:C44", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc77DmLCCwgkh7bbVSzvEpDGEgUUbwjEUjwGmMo1eP1U38zm37s1Os_AI&s=10", desc: "International news and current affairs from around the globe.", badge: "LIVE" },
  { title: "MOONBUG KIDS", href: "go:C45", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_g9VD3cmFYpUNHG9xQBFVIvI82iF7lIwbIpvXX2ms8TeLoWbmadMJYy7k&s=10", desc: "Safe and fun educational shows for young kids.", badge: "LIVE" },
  { title: "DREAMWORKS TAG", href: "go:C46", image: "https://cms.cignal.tv/Upload/Images/Dream-Works.jpg", desc: "Animated series and movies from DreamWorks studios.", badge: "LIVE" },
  { title: "ANIMAX", href: "go:C47", image: "https://cms.cignal.tv/Upload/Images/Animax.jpg", desc: "Popular anime series and Japanese animation.", badge: "LIVE" },
  { title: "DREAMWORKS", href: "go:C48", image: "https://cms.cignal.tv/Upload/Images/Dream-Works.jpg", desc: "Family-friendly animations and kids' adventure series.", badge: "LIVE" },
  { title: "NICKELODEON", href: "go:C49", image: "https://cms.cignal.tv/Upload/Images/NickLogo_Orange_Outline.png", desc: "Cartoons, kids shows, and family-friendly fun.", badge: "LIVE" },
  { title: "HISTORY", href: "go:C50", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUss2AvFPiHJubicG6rkeLK_Az_sYk1rq8x3mIngDYGpIAlgWSKDj9ukE&s=10", desc: "Documentaries and historical series exploring past events.", badge: "LIVE" },
  { title: "KNOWLEDGE CHANNEL", href: "go:C51", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-Hm7fLC_Bhy3PEkH6fXOSm5GFR7oq1xL83Cz3JxFS0-nWfokILWnSIw&s=10", desc: "Educational shows and learning resources for students.", badge: "LIVE" },
  { title: "DEPED TV", href: "go:C52", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLjji9I56HBfCfGvQ9-L38YMFURI77ynPcX2rfHDExIN_2jTYG4bcu2Q&s=10", desc: "Official educational channel from the Philippine Department of Education.", badge: "LIVE" }
       
];
 





const grid = document.getElementById('grid');  
let perPage = 10;
let currentIndex = 0;
let activeList = CARDS;

// Render cards in chunks
function renderChunk(list, save = true) {
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

    if (item.badge) {
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

  // ✅ Save to localStorage after rendering
  if (save) {
    localStorage.setItem('cachedGrid', grid.innerHTML);
  }
}

// Loader for infinite scroll
function loadMore() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    if (currentIndex < activeList.length) {
      renderChunk(activeList);
    }
  }
}

// ✅ Load from cache first (if exists)
const cachedGrid = localStorage.getItem('cachedGrid');
if (cachedGrid) {
  grid.innerHTML = cachedGrid;
  currentIndex = perPage; // assume first chunk already loaded
} else {
  renderChunk(activeList);
}

// Infinite scroll
window.addEventListener('scroll', loadMore);

// Search (does not save results in cache)
const q = document.getElementById('q');
q.addEventListener('input', () => {
  const term = q.value.trim().toLowerCase();
  grid.innerHTML = '';
  currentIndex = 0;

  activeList = term
    ? CARDS.filter(c => (c.title + " " + (c.desc || '')).toLowerCase().includes(term))
    : CARDS;

  if (activeList.length === 0) {
    const msg = document.createElement('p');
    msg.textContent = "❌ No results found";
    msg.style.textAlign = "center";
    msg.style.padding = "20px";
    msg.style.color = "#b0b6c2";
    msg.style.fontSize = "16px";
    grid.appendChild(msg);
  } else {
    renderChunk(activeList, false); // don't overwrite cachedGrid during search
  }
});
