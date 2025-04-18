const images = [
  "https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/images6/Avengers-Wallpaper-Free-Download.jpg",
  "https://images2.alphacoders.com/463/463481.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxo3C_UV63Clq7kPTF2TX50vCqWvkenfLgA&s",
  "https://wallpapercat.com/w/full/7/1/4/32399-3840x2160-desktop-4k-avengers-wallpaper.jpg",
  "https://images.wallpapersden.com/image/download/avengers-endgame-new-4k-8k-poster_a2lnbmaUmZqaraWkpJRsZWturWplZWU.jpg",
  "https://c4.wallpaperflare.com/wallpaper/19/404/915/avengers-4k-hd-high-definition-wallpaper-preview.jpg",
  "https://wallpapercave.com/wp/wp6621771.jpg",
  "https://www.hdwallpapers.in/download/black_panther_captain_america_iron_man_thor_4k_hd_marvels_avengers-HD.jpg",
  "https://images.wallpapersden.com/image/download/avengers-artwork_am1lZmaUmZqaraWkpJRrbWVlrWhrbGs.jpg",
];

let index = 0;
const background = document.getElementById("background");

function changeBackground() {
  background.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

// initial image
changeBackground();

// change every 4 seconds
setInterval(changeBackground, 4000);
