const channels = [
  {
    name: "ABC AUSTRALIA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFaShNxlHbyOkEgiygKupowwV1eFEbyvOSvg&usqp=CAU",
    url: "go:ABC",
    category: "International"
  },
  {
    name: "ABN AUSTRALIA",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/ABC_Australia_logo.svg/350px-ABC_Australia_logo.svg.pngision/3abn-international.png?cache=20250322042023",
    url: "go:ABN",
    category: "International"
  },
  {
    name: "A2Z",
    logo: "https://i.imgur.com/3myn4zH.png%20Vision/a2z.png?cache=20250322042023",
    url: "go:A2Z",
    category: "Entertainment"
  },
  {
    name: "AL JAZEERA",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/1200px-Aljazeera_eng.svg.png",
    url: "go:ALLJ",
    category: "News"
  },
  {
    name: "ALLTV",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/ALLTV_Logo_2022.svg/2560px-ALLTV_Logo_2022.svg.png",
    url: "go:ALLTV",
    category: "Entertainment"
  },
  {
    name: "AL SAUDIYA",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d6/Al-Saudia_TV_Logo_2018.pngng?cache=20250322042023",
    url: "go:ALS",
    category: "International"
  },
  {
    name: "ALIW CHANNEL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/ABC_logo.svg/1200px-ABC_logo.svg.png",
    url: "go:ALIW",
    category: "Entertainment"
  },
  {
    name: "ANC",
    logo: "https://static.wikia.nocookie.net/russel/images/4/4c/ANC_Logo_2015.png",
    url: "go:ANC",
    category: "News"
  },
  {
    name: "ANIMAL PLANET",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Animal_Planet.png",
    url: "go:ANIMAL",
    category: "Education"
  },
  {
    name: "ANIMAX",
    logo: "https://i.imgur.com/b5YKiRd.png%20Vision/animax.png?cache=20250322042023",
    url: "go:ANIMAX",
    category: "Anime"
  },
  {
    name: "ARIRANG",
    logo: "https://i.imgur.com/2NYcYrg.png%20Vision/arirang.png?cache=20250322042023",
    url: "go:ARIRANG",
    category: "International"
  },
  {
    name: "AFN",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397151/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/asian-food-network.png?cache=20250322042023",
    url: "go:AFN",
    category: "Education"
  },
  {
    name: "AXN",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397152/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/axn.png?cache=20250322042023",
    url: "go:AXN",
    category: "Entertainment"
  },
  {
    name: "BBC NEWS",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397152/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/bbc-news.png?cache=20250322042023",
    url: "go:BBCN",
    category: "News"
  },
  {
    name: "BILYONARYO",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397154/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/bilyonaryo-news-channel.png?cache=20250322042023",
    url: "go:BILYONARYO",
    category: "News"
  },
  
  {
    name: "BLOOMBERG",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397155/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/bloomberg.png?cache=20250322042023",
    url: "go:BLOOMBERG",
    category: "News"
  }, 
  
  {
    name: "BS NITTELE",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742587910/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Group/Converge%20Vision/bs-nittele.png?cache=20250322042023",
    url: "go:BS NITTELE",
    category: "International"
  },
  {
    name: "BS FUJI",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397157/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/bs-fuji.png?cache=20250322042023",
    url: "go:BS FUJI",
    category: "International"
  },
  {
    name: "BS10 STAR",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397158/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/bs10-star-channel.png?cache=20250322042023",
    url: "go:BS10 STAR",
    category: "International"
  }, 
    {
    name: "CARTOON NET..",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397159/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/cartoon-network.png?cache=20250322042023",
    url: "go:CARTOON NE",
    category: "Anime"
  }, 
    {
    name: "CARTOONITO",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397160/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/cartoonito.png?cache=20250322042023",
    url: "go:CARTOON",
    category: "Anime"
  }, 
    {
    name: "CCTV4",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397161/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/cctv-4.png?cache=20250322042023",
    url: "go:CCTV4",
    category: "News"
  }, 
    {
    name: "CELESTIAL",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397162/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/celestial-classic-movies.png?cache=20250322042023",
    url: "go:CELESTIAL",
    category: "International"
  }, 
    {
    name: "CGTN",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397164/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/cgtn.png?cache=20250322042023",
    url: "go:CGTN",
    category: "News"
  }, 
    {
    name: "CGTN DOC.",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397163/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/cgtn-documentary.png?cache=20250322042023",
    url: "go:CGTND",
    category: "Education"
  }, 
    {
    name: "CINEMA ONE ",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397164/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/cinemaone.png?cache=20250322042023",
    url: "go:CINEMA ONE ",
    category: "Movies"
  }, 
    {
    name: "CINEMAWORLD",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397165/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/cinemaworld.png?cache=20250322042023",
    url: "go:CINEMAWORL",
    category: "Movies"
  }, 
    {
    name: "CINEMAX",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397165/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/cinemax.png?cache=20250322042023",
    url: "go:CINEMAX",
    category: "Movies"
  }, 
    {
    name: "CINEMO",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397165/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/cinemo-.png?cache=20250322042023",
    url: "go:CINEMO",
    category: "Movies"
  }, 
    {
    name: "CLTV36",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397165/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/cltv.png?cache=20250322042023",
    url: "go:CLTV36",
    category: "Education"
  }, 
    {
    name: "CNA",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/cna.png?cache=20250322042023",
    url: "go:CNA",
    category: "News"
  }, 
    {
    name: "CNN",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/cnn-international.png?cache=20250322042023",
    url: "go:CNN",
    category: "News"
  }, 
    {
    name: "CRIME INV.",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/crime-investigation.png?cache=20250322042023",
    url: "go:CRIME INVE",
    category: "International"
  }, 
    {
    name: "CTV",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/ctv.png?cache=20250322042023",
    url: "go:CTV",
    category: "International"
  }, 
    {
    name: "DAAI TV",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/daai-tv.png?cache=20250322042023",
    url: "go:DAAI TV",
    category: "International"
  }, 
    {
    name: "DISCOVERY ASIA",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/discovery-asia.png?cache=20250322042023",
    url: "go:DISCOVERY",
    category: "Education"
  }, 
    {
    name: "DISCOVERY HD",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397165/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/discovery-channel.png?cache=20250322042023",
    url: "go:DISCOVERYH",
    category: "Education"
  }, 
    {
    name: "DW",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/dw.png?cache=20250322042023",
    url: "go:DW",
    category: "International"
  }, 
    {
    name: "DZRH",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/dzrh.png?cache=20250322042023",
    url: "go:DZRH",
    category: "News"
  }, 
    {
    name: "EURO NEWS",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/euronews.png?cache=20250322042023",
    url: "go:EURO",
    category: "News"
  }, 
    {
    name: "EWTN",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/ewtn.png?cache=20250322042023",
    url: "go:EWTN",
    category: "International"
  }, 
    {
    name: "FASHION",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/fashion-tv.png?cache=20250322042023",
    url: "go:FASHION",
    category: "Education"
  }, 
    {
    name: "FILAM",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/filamtv.png?cache=20250322042023",
    url: "go:FILAM",
    category: "International"
  }, 
    {
    name: "FOX NEWS",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision//fox-news-channel.png?cache=20250322042023",
    url: "go:FOX NEWS",
    category: "News"
  }, 
    {
    name: "FRANCE 24",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/france-24.png?cache=20250322042023",
    url: "go:FRANCE 24",
    category: "News"
  }, 
    {
    name: "GLOBAL",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/global-trekker.png?cache=20250322042023",
    url: "go:GLOBAL",
    category: "Education"
  }, 
    {
    name: "GMA",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/gma.png?cache=20250322042023",
    url: "go:GMA",
    category: "Entertainment"
  }, 
    {
    name: "GOLDEN NATION",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/golden-nation-network.png?cache=20250322042023",
    url: "go:GOLDEN NAT",
    category: "Entertainment"
  }, 
    {
    name: "GTV",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/gtv.png?cache=20250322042023",
    url: "go:GTV",
    category: "Entertainment"
  }, 
    {
    name: "HALLYPOP",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/hallypop.png?cache=20250322042023",
    url: "go:HALLYPOP",
    category: "International"
  }, 
    {
    name: "HBO",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/hbo.png?cache=20250322042023",
    url: "go:HBO",
    category: "Movies"
  },
  {
    name: "HGTV",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/hgtv.png?cache=20250322042023",
    url: "go:HGTV",
    category: "International"
  },
  {
    name: "HISTORY",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/history.png?cache=20250322042023",
    url: "go:HISTORY",
    category: "Education"
  },
  {
    name: "IBC",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/ibc.png?cache=20250322042023",
    url: "go:IBC",
    category: "Entertainment"
  },
  {
    name: "INC TV",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/inc-tv.png?cache=20250322042023",
    url: "go:INC TV",
    category: "Education"
  },
  {
    name: "JEEPNY TV",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/jeepney-tv.png?cache=20250322042023",
    url: "go:JEEPNY TV",
    category: "Entertainment"
  },
  {
    name: "KAPAMILYA HD",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/kapamilya-channel.png?cache=20250322042023",
    url: "go:KAPAMILYA",
    category: "Entertainment"
  },
  {
    name: "KAPAMILYA SD",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/kapamilya-channel.png?cache=20250322042023",
    url: "go:KAPAMILY",
    category: "Entertainment"
  },
  {
    name: "KBS KOREA",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/kbs-korea.png?cache=20250322042023",
    url: "go:KBS KOR",
    category: "International"
  },
  {
    name: "KBS WORLD",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/kbs-world.png?cache=20250322042023",
    url: "go:KBS WORLD",
    category: "International"
  },
  {
    name: "KIX",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/kix.png?cache=20250322042023",
    url: "go:KIX",
    category: "International"
  },
  {
    name: "KNOWLEDGE",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/knowledge-channel.png?cache=20250322042023",
    url: "go:KNOWLEDGE",
    category: "Education"
  },
  {
    name: "LIFETIME",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/lifetime.png?cache=20250322042023",
    url: "go:LIFETIME",
    category: "Education"
  },
  {
    name: "LIGHT TV",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/light-tv.png?cache=20250322042023",
    url: "go:LIGHT",
    category: "News"
  },
  {
    name: "LIVING ASIA",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/living-asia.png?cache=20250322042023",
    url: "go:LIVING",
    category: "Education"
  },
  {
    name: "LOTUS MACAU",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/lotus-macau.png?cache=20250322042023",
    url: "go:LOTUS",
    category: "Entertainment"
  },
  {
    name: "METRO CHANNEL",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/metro-channel.png?cache=20250322042023",
    url: "go:METRO",
    category: "Movies"
  },
  {
    name: "MINDANOW",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/mindanow-network.png?cache=20250322042023",
    url: "go:MINDANOW",
    category: "News"
  },
  {
    name: "MOTOR VISION",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/motorvision-.png?cache=20250322042023",
    url: "go:MOTOR",
    category: "Sports"
  },
  {
    name: "MYX",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/myx.png?cache=20250322042023",
    url: "go:MYX",
    category: "Entertainment"
  },
  {
    name: "NBA TV PH",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/nba-tv-philippines.png?cache=20250322042023",
    url: "go:NBA",
    category: "Sports"
  },
  {
    name: "NET25",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/net25.png?cache=20250322042023",
    url: "go:NET25",
    category: "News"
  },
  {
    name: "NHK BS",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/nhk-bs.png?cache=20250322042023",
    url: "go:NHK BS",
    category: "International"
  },
  {
    name: "NHK JAPAN",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/nhk-world-japan.png?cache=20250322042023",
    url: "go:NHK",
    category: "International"
  },
  {
    name: "NICK JR.",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/nick-jr..png?cache=20250322042023",
    url: "go:NICK",
    category: "Anime"
  },
  {
    name: "NICKELODEON",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/nickelodeon.png?cache=20250322042023",
    url: "go:NICKEL",
    category: "Anime"
  },
  {
    name: "ONE NEWS",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/one-news.png?cache=20250322042023",
    url: "go:ONENEWS",
    category: "News"
  },
  {
    name: "ONE PH",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/one-ph.png?cache=20250322042023",
    url: "go:ONEPH",
    category: "Entertainment"
  },
  {
    name: "ONE SPORTS",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/one-sports.png?cache=20250322042023",
    url: "go:ONESP",
    category: "Sports"
  },
  {
    name: "HIMALA",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/oras-ng-himala.png?cache=20250322042023",
    url: "go:ONH",
    category: "Education"
  },
  {
    name: "PBI",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/pinoy-box-office.png?cache=20250322042023",
    url: "go:PBO",
    category: "Movies"
  },
  {
    name: "PHOENIX",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/phoenix-television.png?cache=20250322042023",
    url: "go:PNX",
    category: "Entertainment"
  },
  {
    name: "P.EXTREME",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/pinoy-xtreme-channel.png?cache=20250322042023",
    url: "go:EXTREME",
    category: "Sports"
  },
  {
    name: "P. FOOTBALL",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/premiere-football.png?cache=20250322042023",
    url: "go:FOOTBALL",
    category: "Sports"
  },
  {
    name: "P.SPORTS",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/premiere-sports.png?cache=20250322042023",
    url: "go:P. SPORTS",
    category: "Sports"
  },
  {
    name: "P.SPORTS2",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/premiere-sports-2.png?cache=20250322042023",
    url: "go:P.SPORTS2",
    category: "Sports"
  },
  {
    name: "PTV",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/ptv.png?cache=20250322042023",
    url: "go:PTV",
    category: "News"
  },
  {
    name: "RADIO MARIA",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/radio-maria.png?cache=20250322042023",
    url: "go:MARIA",
    category: "News"
  },
  {
    name: "ROCK INT.",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/rock-entertainment.png?cache=20250322042023",
    url: "go:ROCK",
    category: "Movies"
  },
  {
    name: "RPTV",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/rptv.png?cache=20250322042023",
    url: "go:RPTV",
    category: "Entertainment"
  },
  {
    name: "SMNI",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/smni.png?cache=20250322042023",
    url: "go:SMNI",
    category: "News"
  },
  {
    name: "S.SPORTS",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/solar-sports.png?cache=20250322042023",
    url: "go:SOLAR",
    category: "Sports"
  },
  {
    name: "SOLARFLIX",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/solar-flix.png?cache=20250322042023",
    url: "go:SOLARFLIX",
    category: "Movies"
  },
  {
    name: "S.EDGE",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/sportdigital-edge.png?cache=20250322042023",
    url: "go:EDGE",
    category: "Sports"
  },
  {
    name: "SPOTV",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/spotv.png?cache=20250322042023",
    url: "go:SPOTV",
    category: "Sports"
  },
  {
    name: "SPOTV2",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/spotv2.png?cache=20250322042023",
    url: "go:SPOTV2",
    category: "Sports"
  },
  {
    name: "TAP ACT.FLIX",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/tap-action-flix.png?cache=20250322042023",
    url: "go:TAP ACTION",
    category: "Movies"
  },
  {
    name: "TAP EDGE",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/tap-edge.png?cache=20250322042023",
    url: "go:TAP EDGE",
    category: "Sports"
  },
  {
    name: "TAP MOVIES",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/tap-movies.png?cache=20250322042023",
    url: "go:TAP MOVIES",
    category: "Movies"
  },
  {
    name: "TAP SPORTS",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/tap-sports.png?cache=20250322042023",
    url: "go:TAP SPORTS",
    category: "Sports"
  },
  {
    name: "TAP TV",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/tap-tv.png?cache=20250322042023",
    url: "go:TAP TV",
    category: "Entertainment"
  },
  {
    name: "TBN",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742587971/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Group/Converge%20Vision/tbn-asia.png?cache=20250322042023",
    url: "go:TBN",
    category: "Education"
  },
  {
    name: "TBN INS.",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742587971/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Group/Converge%20Vision/tbn-inspire.png?cache=20250322042023",
    url: "go:TBN INS.",
    category: "Education"
  },
  {
    name: "TELERADYO",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742397169/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Converge%20Vision/teleradyo-serbisyo.png?cache=20250322042023",
    url: "go:TELERADYO",
    category: "News"
  },
  {
    name: "PBA",
    logo: "https://res.cloudinary.com/lomi/image/upload/v1742395066/KayLomiToWagNakawin/JokeLang/KungGagamitinLogoPaCreditNaLangAko/Salamat/IPTV/Cignal%20Play/pba-rush.png?cache=20250322042023",
    url: "go:PBA",
    category: "Sports"
  }
  
];
