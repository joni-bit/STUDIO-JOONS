/*
  HTML5 BANNERS — the content of the banner block on the Motion & Play page.

  One entry per campaign, top to bottom = the order on the page.
  title:    campaign name, shown under the page sketch
  caption:  optional extra line (e.g. "Radio Veronica, 2025")
  tint:     colour of the empty slots while a banner has no file yet: "blue" | "orange" | "cyan" | "dark"
  set:      the 2–3 formats shown in the page sketch. They start together and share one replay button.
            Where a banner goes is decided by its shape:
              wide (e.g. 728x90, 970x250)          → top of the page
              tall (e.g. 300x600, 160x600, 320x480) → side column
              anything else (e.g. 300x250)          → in the article
            Want it somewhere else? Add place: "top" | "inline" | "side".
  more:     optional — the other formats of the same campaign, behind an "All formats" button.

  Each banner: { size: "300x250", src: "Assets/Banners/<campaign>/300x250/index.html" }
  Leave src out to show an empty slot of the right size.
*/
const bannerSets = [
  {
    title: "Radio Veronica — Top 1000 van de 90s",
    caption: "HTML5 banners, animated in After Effects and exported with Bodymovin",
    tint: "blue",
    set: [
      { size: "970x250", src: "Assets/Banners/veronica-top1000-90s/970x250/index.html" },
      { size: "300x250", src: "Assets/Banners/veronica-top1000-90s/300x250/index.html" }
    ],
    more: [
      { size: "728x90",  src: "Assets/Banners/veronica-top1000-90s/728x90/index.html" },
      { size: "336x280", src: "Assets/Banners/veronica-top1000-90s/336x280/index.html" }
    ]
  },
  {
    title: "100% NL",
    caption: "HTML5 banners",
    tint: "orange",
    set: [
      { size: "728x90", src: "Assets/Banners/100nl/728x90/index.html" },
      { size: "468x60", src: "Assets/Banners/100nl/468x60/index.html", place: "inline" },
      { size: "300x50", src: "Assets/Banners/100nl/300x50/index.html", place: "side" }
    ]
  },
  {
    title: "SLAM!",
    caption: "HTML5 banners",
    tint: "dark",
    set: [
      { size: "728x90", src: "Assets/Banners/slam/728x90/index.html" },
      { size: "468x60", src: "Assets/Banners/slam/468x60/index.html", place: "inline" },
      { size: "300x50", src: "Assets/Banners/slam/300x50/index.html", place: "side" }
    ]
  }
];
