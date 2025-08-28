
const CARDS = [ 
  // your channel list here ...
  {
  title: "Peacock Live",
  href: "https://peacocktv-ono.amagi.tv/.../manifest.mpd",
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/NBCUniversal_Peacock_Logo.png",
  desc: "Watch Peacock TV live streaming.",
  badge: "LIVE",
  drm: {
    license_type: "clearkey",
    license_key: "{\"keys\":[{\"kty\":\"oct\",\"k\":\"iuYGMWcijiUN0TLSFxcxAg\",\"kid\":\"ACKMk/Q1ghO1IiCJi5Yjhg\"}]}"
  },
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

  
  { title: "Bar Rescue", href: "https://jmp2.uk/plu-60a3d889a5b3690008dc7fe8.m3u8", image: "https://images.pluto.tv/channels/60a3d889a5b3690008dc7fe8/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Black Ink Crew", href: "https://jmp2.uk/plu-5d51e2bceca5b4b2c0e06c50.m3u8", image: "https://images.pluto.tv/channels/5d51e2bceca5b4b2c0e06c50/colorLogoPNG_1731835399139.png", desc: "Reality", badge: "LIVE" },
  { title: "Bravo Vault", href: "https://jmp2.uk/plu-6549310a53fc97000838fcc9.m3u8", image: "https://images.pluto.tv/channels/6549310a53fc97000838fcc9/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Car Chase", href: "https://jmp2.uk/plu-65244c403fd33c0008ffff31.m3u8", image: "https://images.pluto.tv/channels/65244c403fd33c0008ffff31/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Cheaters", href: "https://jmp2.uk/plu-627d355aa95efd00077afcc7.m3u8", image: "https://images.pluto.tv/channels/627d355aa95efd00077afcc7/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "COPS", href: "https://jmp2.uk/plu-5e1f7e089f23700009d66303.m3u8", image: "https://images.pluto.tv/channels/5e1f7e089f23700009d66303/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Dating Disasters", href: "https://jmp2.uk/plu-651f239d9c7aeb0008286823.m3u8", image: "https://images.pluto.tv/channels/651f239d9c7aeb0008286823/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Dog the Bounty Hunter", href: "https://jmp2.uk/plu-5bee1a7359ee03633e780238.m3u8", image: "https://images.pluto.tv/channels/5bee1a7359ee03633e780238/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Ghost Hunters", href: "https://jmp2.uk/plu-64e561a4354251000823a0e0.m3u8", image: "https://images.pluto.tv/channels/64e561a4354251000823a0e0/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Jersey Shore", href: "https://jmp2.uk/plu-609bfa51fbecc1000733152e.m3u8", image: "https://images.pluto.tv/channels/609bfa51fbecc1000733152e/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Love & Hip Hop", href: "https://jmp2.uk/plu-5d51ddf0369acdb278dfb05e.m3u8", image: "https://images.pluto.tv/channels/5d51ddf0369acdb278dfb05e/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Medical Incredible", href: "https://jmp2.uk/plu-6565436c9d5ac4000822f552.m3u8", image: "https://images.pluto.tv/channels/6565436c9d5ac4000822f552/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Million Dollar Listing Vault", href: "https://jmp2.uk/plu-6549322e53fc97000838febc.m3u8", image: "https://images.pluto.tv/channels/6549322e53fc97000838febc/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },

  
  { title: "MTV Dating", href: "https://jmp2.uk/plu-5ca6899a37b88b269472ea4b.m3u8", image: "https://images.pluto.tv/channels/5ca6899a37b88b269472ea4b/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Perform by Lifetime", href: "https://jmp2.uk/plu-656538bb635c3c0008695660.m3u8", image: "https://images.pluto.tv/channels/656538bb635c3c0008695660/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Pickers & Pawn", href: "https://jmp2.uk/plu-6565413e4261ca0008215320.m3u8", image: "https://images.pluto.tv/channels/6565413e4261ca0008215320/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Pluto TV Backcountry", href: "https://jmp2.uk/plu-5cabdf1437b88b26947346b2.m3u8", image: "https://images.pluto.tv/channels/5cabdf1437b88b26947346b2/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Pluto TV Cars", href: "https://jmp2.uk/plu-5812b3a4249444e05d09cc46.m3u8", image: "https://images.pluto.tv/channels/5812b3a4249444e05d09cc46/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Pluto TV Lives", href: "https://jmp2.uk/plu-5d8beeb39b5d5d5f8c672530.m3u8", image: "https://images.pluto.tv/channels/5d8beeb39b5d5d5f8c672530/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Pluto TV Paranormal", href: "https://jmp2.uk/plu-5adf96e3e738977e2c31cb04.m3u8", image: "https://images.pluto.tv/channels/5adf96e3e738977e2c31cb04/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Pluto TV Reality", href: "https://jmp2.uk/plu-5d8bf0b06d2d855ee15115e3.m3u8", image: "https://images.pluto.tv/channels/5d8bf0b06d2d855ee15115e3/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Queens of Reality", href: "https://jmp2.uk/plu-66abefe5d2d50d00082c7d12.m3u8", image: "https://images.pluto.tv/channels/66abefe5d2d50d00082c7d12/colorLogoPNG_1732662878552.png", desc: "Reality", badge: "LIVE" },
  { title: "Real Housewives Vault", href: "https://jmp2.uk/plu-6549316d2c1d330008631496.m3u8", image: "https://images.pluto.tv/channels/6549316d2c1d330008631496/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Rescue 911", href: "https://jmp2.uk/plu-5f21e831e9fe730007706acb.m3u8", image: "https://images.pluto.tv/channels/5f21e831e9fe730007706acb/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Spike Outdoors", href: "https://jmp2.uk/plu-5c393cad2de254456f7ef8c2.m3u8", image: "https://images.pluto.tv/channels/5c393cad2de254456f7ef8c2/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Spike Pluto TV", href: "https://jmp2.uk/plu-5812bcc8237a6ff45d16c407.m3u8", image: "https://images.pluto.tv/channels/5812bcc8237a6ff45d16c407/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Teen Mom", href: "https://jmp2.uk/plu-6127e12ed140e900077e7b6f.m3u8", image: "https://images.pluto.tv/channels/6127e12ed140e900077e7b6f/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Top Gear", href: "https://jmp2.uk/plu-636adc255bcf470007d6e0e2.m3u8", image: "https://images.pluto.tv/channels/636adc255bcf470007d6e0e2/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Tough Jobs", href: "https://jmp2.uk/plu-65c69bf23ef47d0008583967.m3u8", image: "https://images.pluto.tv/channels/65c69bf23ef47d0008583967/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "UnXplained Zone", href: "https://jmp2.uk/plu-656538f8954b020008d389db.m3u8", image: "https://images.pluto.tv/channels/656538f8954b020008d389db/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "VH1 Hip Hop Family", href: "https://jmp2.uk/plu-5d71561df6f2e6d0b6493bf5.m3u8", image: "https://images.pluto.tv/channels/5d71561df6f2e6d0b6493bf5/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "VH1 I Love Reality", href: "https://jmp2.uk/plu-5d7154fa8326b6ce4ec31f2e.m3u8", image: "https://images.pluto.tv/channels/5d7154fa8326b6ce4ec31f2e/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Warner Bros. TV Say Yes to the Dress", href: "https://jmp2.uk/plu-6532e8342cf13100083b404c.m3u8", image: "https://images.pluto.tv/channels/6532e8342cf13100083b404c/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "Xtreme Outdoor Presented by HISTORY", href: "https://jmp2.uk/plu-6000a6f4c3f8550008fc9b91.m3u8", image: "https://images.pluto.tv/channels/6000a6f4c3f8550008fc9b91/colorLogoPNG.png", desc: "Reality", badge: "LIVE" },
  { title: "ABC News Live", href: "https://jmp2.uk/plu-6508be683a0d700008c534e4.m3u8", image: "https://images.pluto.tv/channels/6508be683a0d700008c534e4/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "America's Voice News", href: "https://jmp2.uk/plu-5e1f7da4bc7d740009831259.m3u8", image: "https://images.pluto.tv/channels/5e1f7da4bc7d740009831259/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "BBC News", href: "https://jmp2.uk/plu-65d92a8c8b24c80008e285c0.m3u8", image: "https://images.pluto.tv/channels/65d92a8c8b24c80008e285c0/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "Blaze Live", href: "https://jmp2.uk/plu-5e46fba0c43b0d00096e5ac1.m3u8", image: "https://images.pluto.tv/channels/5e46fba0c43b0d00096e5ac1/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "Bloomberg TV", href: "https://jmp2.uk/plu-54ff7ba69222cb1c2624c584.m3u8", image: "https://images.pluto.tv/channels/54ff7ba69222cb1c2624c584/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "CBS News 24/7", href: "https://jmp2.uk/plu-5a6b92f6e22a617379789618.m3u8", image: "https://images.pluto.tv/channels/5a6b92f6e22a617379789618/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "CBS News Chicago", href: "https://jmp2.uk/plu-62cdc75b1a1cbd0007ed45dc.m3u8", image: "https://images.pluto.tv/channels/62cdc75b1a1cbd0007ed45dc/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "CBS News Los Angeles", href: "https://jmp2.uk/plu-5dc9b875e280c80009a8a44a.m3u8", image: "https://images.pluto.tv/channels/5dc9b875e280c80009a8a44a/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "CBS News New York", href: "https://jmp2.uk/plu-5dc9b8223687ff000936ed79.m3u8", image: "https://images.pluto.tv/channels/5dc9b8223687ff000936ed79/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "CNN HEADLINES", href: "https://jmp2.uk/plu-5421f71da6af422839419cb3.m3u8", image: "https://images.pluto.tv/channels/5421f71da6af422839419cb3/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "FOX Weather", href: "https://jmp2.uk/plu-640a68880e884c0009979cc2.m3u8", image: "https://images.pluto.tv/channels/640a68880e884c0009979cc2/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "LiveNOW from FOX", href: "https://jmp2.uk/plu-63d025db4e83e700086eaa96.m3u8", image: "https://images.pluto.tv/channels/63d025db4e83e700086eaa96/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "NBC News NOW", href: "https://jmp2.uk/plu-5df97894467dfa00091c873c.m3u8", image: "https://images.pluto.tv/channels/5df97894467dfa00091c873c/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "Newsmax2", href: "https://jmp2.uk/plu-55b179af994403942f3061d6.m3u8", image: "https://images.pluto.tv/channels/55b179af994403942f3061d6/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "OAN Plus", href: "https://jmp2.uk/plu-5e7cf6c7b156d500078c5f44.m3u8", image: "https://images.pluto.tv/channels/5e7cf6c7b156d500078c5f44/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "Salem News Channel", href: "https://jmp2.uk/plu-66a7f0a78561260008c177f2.m3u8", image: "https://images.pluto.tv/channels/66a7f0a78561260008c177f2/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "Scripps News", href: "https://jmp2.uk/plu-5459795fc9f133a519bc0bef.m3u8", image: "https://images.pluto.tv/channels/5459795fc9f133a519bc0bef/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "Sky News", href: "https://jmp2.uk/plu-55b285cd2665de274553d66f.m3u8", image: "https://images.pluto.tv/channels/55b285cd2665de274553d66f/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "The First", href: "https://jmp2.uk/plu-5d486acc34ceb37d3c458a64.m3u8", image: "https://images.pluto.tv/channels/5d486acc34ceb37d3c458a64/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "TODAY All Day", href: "https://jmp2.uk/plu-5d695f7db53adf96b78e7ce3.m3u8", image: "https://images.pluto.tv/channels/5d695f7db53adf96b78e7ce3/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "WeatherNation Los Angeles", href: "https://jmp2.uk/plu-61e9af6bfbbcc6000700119b.m3u8", image: "https://images.pluto.tv/channels/61e9af6bfbbcc6000700119b/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "Classica", href: "https://jmp2.uk/plu-5f779951372da90007fd45e8.m3u8", image: "https://images.pluto.tv/channels/5f779951372da90007fd45e8/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "CMT Equal Play", href: "https://jmp2.uk/plu-5f68f53eb1e5800007390bf8.m3u8", image: "https://images.pluto.tv/channels/5f68f53eb1e5800007390bf8/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "MTV Biggest Pop", href: "https://jmp2.uk/plu-5d14fd1a252d35decbc4080c.m3u8", image: "https://images.pluto.tv/channels/5d14fd1a252d35decbc4080c/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "MTV Flow Latino", href: "https://jmp2.uk/plu-5d3609cd6a6c78d7672f2a81.m3u8", image: "https://images.pluto.tv/channels/5d3609cd6a6c78d7672f2a81/colorLogoPNG_1731834717093.png", desc: "Music Videos", badge: "LIVE" },
  { title: "MTV Spankin' New", href: "https://jmp2.uk/plu-5d14fdb8ca91eedee1633117.m3u8", image: "https://images.pluto.tv/channels/5d14fdb8ca91eedee1633117/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "Vevo '70s", href: "https://jmp2.uk/plu-5f32f26bcd8aea00071240e5.m3u8", image: "https://images.pluto.tv/channels/5f32f26bcd8aea00071240e5/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },



  
  { title: "Vevo '80s", href: "https://jmp2.uk/plu-5fd7b8bf927e090007685853.m3u8", image: "https://images.pluto.tv/channels/5fd7b8bf927e090007685853/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "Vevo '90s", href: "https://jmp2.uk/plu-5fd7bb1f86d94a000796e2c2.m3u8", image: "https://images.pluto.tv/channels/5fd7bb1f86d94a000796e2c2/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "Vevo 2K", href: "https://jmp2.uk/plu-5fd7bca3e0a4ee0007a38e8c.m3u8", image: "https://images.pluto.tv/channels/5fd7bca3e0a4ee0007a38e8c/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "Vevo Country", href: "https://jmp2.uk/plu-5da0d75e84830900098a1ea0.m3u8", image: "https://images.pluto.tv/channels/5da0d75e84830900098a1ea0/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "Vevo Holiday", href: "https://jmp2.uk/plu-5dcf059646c0cf000a293edd.m3u8", image: "https://images.pluto.tv/channels/5dcf059646c0cf000a293edd/colorLogoPNG.png", desc: "Season", badge: "LIVE" },
  { title: "Vevo Pop", href: "https://jmp2.uk/plu-5d93b635b43dd1a399b39eee.m3u8", image: "https://images.pluto.tv/channels/5d93b635b43dd1a399b39eee/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "Vevo R&B", href: "https://jmp2.uk/plu-5da0d83f66c9700009b96d0e.m3u8", image: "https://images.pluto.tv/channels/5da0d83f66c9700009b96d0e/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "Vevo Retro Rock", href: "https://jmp2.uk/plu-61d4b38226b8a50007fe03a6.m3u8", image: "https://images.pluto.tv/channels/61d4b38226b8a50007fe03a6/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "Vevo True School Hip-Hop", href: "https://jmp2.uk/plu-61d4c2817a823d00070ba53e.m3u8", image: "https://images.pluto.tv/channels/61d4c2817a823d00070ba53e/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "XITE Classic Country", href: "https://jmp2.uk/plu-623b92a2ccefed0007b1db48.m3u8", image: "https://images.pluto.tv/channels/623b92a2ccefed0007b1db48/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "XITE Gospel", href: "https://jmp2.uk/plu-623b93628e6ded0007337d4d.m3u8", image: "https://images.pluto.tv/channels/623b93628e6ded0007337d4d/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "XITE Rock x Metal", href: "https://jmp2.uk/plu-623a1b5188ecdc0007c9ef5a.m3u8", image: "https://images.pluto.tv/channels/623a1b5188ecdc0007c9ef5a/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "Yo! MTV", href: "https://jmp2.uk/plu-5d14fc31252d35decbc4080b.m3u8", image: "https://images.pluto.tv/channels/5d14fc31252d35decbc4080b/colorLogoPNG.png", desc: "Music Videos", badge: "LIVE" },
  { title: "00s Replay", href: "https://jmp2.uk/plu-62ba60f059624e000781c436.m3u8", image: "https://images.pluto.tv/channels/62ba60f059624e000781c436/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "70s Cinema", href: "https://jmp2.uk/plu-5f4d878d3d19b30007d2e782.m3u8", image: "https://images.pluto.tv/channels/5f4d878d3d19b30007d2e782/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "80s Rewind", href: "https://jmp2.uk/plu-5ca525b650be2571e3943c63.m3u8", image: "https://images.pluto.tv/channels/5ca525b650be2571e3943c63/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "90s Throwback", href: "https://jmp2.uk/plu-5f4d86f519358a00072b978e.m3u8", image: "https://images.pluto.tv/channels/5f4d86f519358a00072b978e/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Black Cinema", href: "https://jmp2.uk/plu-58af4c093a41ca9d4ecabe96.m3u8", image: "https://images.pluto.tv/channels/58af4c093a41ca9d4ecabe96/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Black Visionaries", href: "https://jmp2.uk/plu-663946c1b18d700008d9c168.m3u8", image: "https://images.pluto.tv/channels/663946c1b18d700008d9c168/colorLogoPNG_1731835813865.png", desc: "Movies", badge: "LIVE" },
  { title: "Classic Movies Channel", href: "https://jmp2.uk/plu-561c5b0dada51f8004c4d855.m3u8", image: "https://images.pluto.tv/channels/561c5b0dada51f8004c4d855/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Flicks of Fury", href: "https://jmp2.uk/plu-58e55b14ad8e9c364d55f717.m3u8", image: "https://images.pluto.tv/channels/58e55b14ad8e9c364d55f717/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "MovieSphere by Lionsgate", href: "https://jmp2.uk/plu-645e7828e1979c00087b75b4.m3u8", image: "https://images.pluto.tv/channels/645e7828e1979c00087b75b4/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Paramount Movie Channel", href: "https://jmp2.uk/plu-5cb0cae7a461406ffe3f5213.m3u8", image: "https://images.pluto.tv/channels/5cb0cae7a461406ffe3f5213/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV 007", href: "https://jmp2.uk/plu-5d4db961034718b2f52f9e52.m3u8", image: "https://images.pluto.tv/channels/5d4db961034718b2f52f9e52/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Action", href: "https://jmp2.uk/plu-561d7d484dc7c8770484914a.m3u8", image: "https://images.pluto.tv/channels/561d7d484dc7c8770484914a/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Comedy", href: "https://jmp2.uk/plu-5a4d3a00ad95e4718ae8d8db.m3u8", image: "https://images.pluto.tv/channels/5a4d3a00ad95e4718ae8d8db/colorLogoPNG_1731836724642.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Crime Movies", href: "https://jmp2.uk/plu-5f4d8594eb979c0007706de7.m3u8", image: "https://images.pluto.tv/channels/5f4d8594eb979c0007706de7/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Cult Films", href: "https://jmp2.uk/plu-5c665db3e6c01b72c4977bc2.m3u8", image: "https://images.pluto.tv/channels/5c665db3e6c01b72c4977bc2/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Drama", href: "https://jmp2.uk/plu-5b4e92e4694c027be6ecece1.m3u8", image: "https://images.pluto.tv/channels/5b4e92e4694c027be6ecece1/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Fantastic", href: "https://jmp2.uk/plu-5b64a245a202b3337f09e51d.m3u8", image: "https://images.pluto.tv/channels/5b64a245a202b3337f09e51d/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Horror", href: "https://jmp2.uk/plu-569546031a619b8f07ce6e25.m3u8", image: "https://images.pluto.tv/channels/569546031a619b8f07ce6e25/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Icons", href: "https://jmp2.uk/plu-64b585f84ea480000838e446.m3u8", image: "https://images.pluto.tv/channels/64b585f84ea480000838e446/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Reaction", href: "https://jmp2.uk/plu-617b37b361e0fd0008cfd8c5.m3u8", image: "https://images.pluto.tv/channels/617b37b361e0fd0008cfd8c5/colorLogoPNG_1731837948814.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Romance", href: "https://jmp2.uk/plu-5a66795ef91fef2c7031c599.m3u8", image: "https://images.pluto.tv/channels/5a66795ef91fef2c7031c599/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Spotlight", href: "https://jmp2.uk/plu-5ba3fb9c4b078e0f37ad34e8.m3u8", image: "https://images.pluto.tv/channels/5ba3fb9c4b078e0f37ad34e8/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Staff Picks", href: "https://jmp2.uk/plu-5f4d863b98b41000076cd061.m3u8", image: "https://images.pluto.tv/channels/5f4d863b98b41000076cd061/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Terror", href: "https://jmp2.uk/plu-5c6dc88fcd232425a6e0f06e.m3u8", image: "https://images.pluto.tv/channels/5c6dc88fcd232425a6e0f06e/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Thrillers", href: "https://jmp2.uk/plu-5b4e69e08291147bd04a9fd7.m3u8", image: "https://images.pluto.tv/channels/5b4e69e08291147bd04a9fd7/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Trending Now", href: "https://jmp2.uk/plu-673247127d5da5000817b4d6.m3u8", image: "https://images.pluto.tv/channels/673247127d5da5000817b4d6/colorLogoPNG_1732662634386.png", desc: "Movies", badge: "LIVE" },
  { title: "Pluto TV Westerns", href: "https://jmp2.uk/plu-5b4e94282d4ec87bdcbb87cd.m3u8", image: "https://images.pluto.tv/channels/5b4e94282d4ec87bdcbb87cd/colorLogoPNG.png", desc: "Movies", badge: "LIVE" },
  { title: "CBS News Baltimore", href: "https://jmp2.uk/plu-60f75919718aed0007250d7a.m3u8", image: "https://images.pluto.tv/channels/60f75919718aed0007250d7a/colorLogoPNG-1643042747442.png", desc: "Local News", badge: "LIVE" },
  { title: "CBS News Bay Area", href: "https://jmp2.uk/plu-5eb1afb21486df0007abc57c.m3u8", image: "https://images.pluto.tv/channels/5eb1afb21486df0007abc57c/colorLogoPNG.png", desc: "Local News", badge: "LIVE" },
  { title: "CBS News Boston", href: "https://jmp2.uk/plu-5eb1af2ad345340008fccd1e.m3u8", image: "https://images.pluto.tv/channels/5eb1af2ad345340008fccd1e/colorLogoPNG.png", desc: "Local News", badge: "LIVE" },
  { title: "CBS News Chicago", href: "https://jmp2.uk/plu-62cdc75b1a1cbd0007ed45dc.m3u8", image: "https://images.pluto.tv/channels/62cdc75b1a1cbd0007ed45dc/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "CBS News Colorado", href: "https://jmp2.uk/plu-5eb1b12146cba40007aa7e5d.m3u8", image: "https://images.pluto.tv/channels/5eb1b12146cba40007aa7e5d/colorLogoPNG-1643041708234.png", desc: "Local News", badge: "LIVE" },
  { title: "CBS News Detroit", href: "https://jmp2.uk/plu-634f2610d5023700078f7dee.m3u8", image: "https://images.pluto.tv/channels/634f2610d5023700078f7dee/colorLogoPNG.png", desc: "Local News", badge: "LIVE" },
  { title: "CBS News Los Angeles", href: "https://jmp2.uk/plu-5dc9b875e280c80009a8a44a.m3u8", image: "https://images.pluto.tv/channels/5dc9b875e280c80009a8a44a/colorLogoPNG.png", desc: "News + Opinion", badge: "LIVE" },
  { title: "CBS News Miami", href: "https://jmp2.uk/plu-60fb299b79498900070b29e0.m3u8", image: "https://images.pluto.tv/channels/60fb299b79498900070b29e0/colorLogoPNG.png", desc: "Local News", badge: "LIVE" },
  { title: "CBS News Minnesota", href: "https://jmp2.uk/plu-5eb1b0bf2240d8000732a09c.m3u8", image: "https://images.pluto.tv/channels/5eb1b0bf2240d8000732a09c/colorLogoPNG.png", desc: "Local News", badge: "LIVE"},
  
  { title: "CBS News New York",  href: "https://jmp2.uk/plu-5dc9b8223687ff000936ed79.m3u8",image: "https://images.pluto.tv/channels/5dc9b8223687ff000936ed79/colorLogoPNG.png",  desc: "Local News" },
  {title: "CBS News Philadelphia", href: "https://jmp2.uk/plu-5eb1b05ea168cc000767ba67.m3u8",image: "https://images.pluto.tv/channels/5eb1b05ea168cc000767ba67/colorLogoPNG.png",  desc: "Local News" },
  {  title: "CBS News Pittsburgh", href: "https://jmp2.uk/plu-5eb1b17aa5277e00083f6521.m3u8", image: "https://images.pluto.tv/channels/5eb1b17aa5277e00083f6521/colorLogoPNG.png",desc: "Local News" }

]





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

