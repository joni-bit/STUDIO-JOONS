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
  more:     optional — the other formats of the same campaign, behind an "All formats" button.

  Each banner: { size: "300x250", src: "Assets/Banners/<campaign>/300x250/index.html" }
  Leave src out to show an empty slot of the right size.
*/
const bannerSets = [
  {
    title: "Campaign one",
    caption: "Empty slots for now: the real banners go here",
    tint: "blue",
    set: [
      { size: "728x90" },
      { size: "300x250" },
      { size: "300x600" }
    ],
    more: [
      { size: "320x50" },
      { size: "320x480" },
      { size: "160x600" }
    ]
  },
  {
    title: "Campaign two",
    tint: "orange",
    set: [
      { size: "970x250" },
      { size: "300x250" },
      { size: "160x600" }
    ]
  }
];
