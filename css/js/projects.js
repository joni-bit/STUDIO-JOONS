/*
  PROJECTS — the one place to manage your portfolio.

  status:   "live"     = big card on the Work page (Selected Work)
            "archive"  = small line in the Archive list at the bottom of the Work page
            "unlisted" = page works if you link to it (e.g. from About), but isn't listed
            "draft"    = hidden. Preview privately with:
                      project.html?id=PROJECT-ID&preview=1
  category: "campaign" | "identity" | "motion"  (filter tabs on the Work page)
  card:     what the card on the Work page shows
            (tint: "blue" | "cyan" | "orange")
  highlight (optional): shows the project on the homepage.
            order:  position on the homepage (1 = first)
            stage:  "peek"   = one image in the middle, a second peeking left and right
                    "framed" = one image in a frame
            Remove the highlight block to take a project off the homepage.
  facts:    the fact strip under the title: [["Client", "..."], ["Year", "..."], ...]
  hero:     { src: "path" } or { label: "what goes here" } for a placeholder
  hook:     the big line under the hero
  blocks:   the case, top to bottom. Text: { type: "section", heading, text: [...] }
            Images (layout blocks from the visual plan):
              hero / breakdown / canvas  one wide image      { item: {...} }
              split     2 side by side                       { items: [a, b] }
              triptych  3 in a row                           { items: [a, b, c], ratio: "4 / 5" or "9 / 16" }
              grid      3 or 4 columns of squares            { items: [...], columns: 3 }
              inset     1 large + 1 small                    { items: [large, small] }
              loops     videos, 2 per row                    { items: [...] }
            Each image: { src, alt, caption }. No src yet? Use { label: "what goes here" }
            and a grey placeholder shows instead.
  Text in [square brackets] is shown highlighted: a fact still to fill in.
  The order of projects here is the order on the Work page.
*/
const projectsData = {
  "stop520": {
    title: "(S)Top 520",
    status: "live",
    category: "campaign",
    card: {
      title: "Radio Veronica × War Child — (S)Top 520",
      eyebrow: "Campaigns",
      image: "Assets/Projecten/Stop520/web/card.webp",
      description: "Turning a radio studio into a child's colouring page, for 520 million children growing up with war.",
      tint: "orange"
    },
    highlight: {
      order: 1,
      eyebrow: "Radio Veronica × War Child",
      headline: "A colouring page <span class=\"accent-highlight\">the size of a radio studio</span>.",
      button: "Explore (S)Top 520",
      stage: "framed",
      images: ["Assets/Projecten/Stop520/web/card.webp"]
    },
    year: "2026",
    facts: [
      ["Client", "Radio Veronica × War Child"],
      ["Year", "2026"],
      ["Location", "Utrecht Centraal"],
      ["My role", "Visual concept and design (campaign concept by the Veronica team)"],
      ["Deliverables", "Studio exterior, campaign logo, key visual, colouring pages, social templates, ads, print, car wrap"]
    ],
    hero: { src: "Assets/Projecten/Stop520/web/studio-station-hero.webp", alt: "The (S)Top 520 studio at Utrecht Centraal, travellers walking past", caption: "Photo: Emma Pot" },
    hook: "A colouring page the size of a radio studio.",
    blocks: [
      { type: "section", heading: "The campaign", text: [
        "520 million children worldwide grow up with the effects of war. For a week in March, Radio Veronica and War Child asked listeners for 520 songs that give hope. Inspired by John Lennon and Yoko Ono's Bed-In, the DJs broadcast live for five days from a giant bed in the middle of Utrecht Centraal: a symbol of every child's right to a safe place to sleep."
      ]},
      { type: "section", heading: "The brief", text: [
        "Design the outside of the studio. The only reference was what other brands had built on the same spot, and one hard constraint: no full wrap, because the DJs needed to see out."
      ]},
      { type: "section", heading: "The idea", text: [
        "Where does a child feel safe? In their own bedroom. So I drew the studio as a colouring page: a kid's bedroom where they make their own radio. The open black-and-white line work kept the windows clear for the DJs, and it turned the studio into something everyone recognises from childhood: innocent, hopeful and unfinished, waiting to be filled in."
      ]},
      { type: "split", items: [
        { src: "Assets/Projecten/Stop520/web/colouring-pages.webp", alt: "The two (S)Top 520 colouring pages", caption: "The drawing — colouring pages" },
        { src: "Assets/Projecten/Stop520/web/studio-wall.webp", alt: "The coloured-in studio wall", caption: "The studio wall. Photo: Emma Pot" }
      ]},
      { type: "hero", item: { src: "Assets/Projecten/Stop520/web/line-work.webp", alt: "Close-up of the coloured-in line work", caption: "Line work up close. Photo: Emma Pot" } },
      { type: "section", heading: "The system", text: [
        "From that drawing I built the whole campaign identity: the (S)Top 520 logo, the key visual, social templates and posts, ads and print. And real colouring pages to take home."
      ]},
      { type: "canvas", item: { src: "Assets/Projecten/Stop520/web/rollout-canvas.webp", alt: "(S)Top 520 roll-out: key visual, studio, social, car wrap and coloured pages", caption: "Key visual, studio, social and the Bed Boys car wrap" } },
      { type: "section", heading: "What happened", text: [
        "Kids came to the station with their parents just to get a colouring page. The studio drew crowds of travellers all week, De Telegraaf covered the campaign several times, and both Radio Veronica and War Child were beyond happy with how it looked. [Optional: “The list closed with John Lennon's Imagine at number one.”]"
      ]},
      { type: "split", items: [
        { src: "Assets/Projecten/Stop520/web/table-of-pages.webp", alt: "Coloured-in pages from kids", caption: "Coloured-in pages. Photo: Jeroen Zondag" },
        { src: "Assets/Projecten/Stop520/web/wall-of-pages.webp", alt: "A wall full of coloured-in pages in the studio", caption: "The studio wall filling up. Photo: Lars Goosselink" }
      ]},
      { type: "hero", item: { src: "Assets/Projecten/Stop520/web/djs-live.webp", alt: "The DJs live in the studio, with the Instagram story next to it", caption: "Live on air, and on Instagram. Photo: Emma Pot" } },
      { type: "inset", items: [
        { src: "Assets/Projecten/Stop520/web/station-hall-wide.webp", alt: "The studio in the station hall", caption: "The studio in Utrecht Centraal. Photo: Emma Pot" },
        { label: "Telegraaf clipping, small" }
      ]}
    ]
  },
  "vriendenweekend": {
    title: "Het Nationale Vriendenweekend",
    status: "live",
    category: "campaign",
    card: {
      title: "Radio Veronica — Het Nationale Vriendenweekend",
      eyebrow: "Campaigns",
      image: "Assets/Projecten/Vriendenweekend/web/card.webp",
      description: "Claiming one weekend for every friend group in the country. Logo approved at first pitch.",
      tint: "blue"
    },
    highlight: {
      order: 2,
      eyebrow: "Radio Veronica",
      headline: "One weekend for <span class=\"accent-highlight\">every friend group</span> in the country.",
      button: "Explore Vriendenweekend",
      stage: "framed",
      images: ["Assets/Projecten/Vriendenweekend/web/card.webp"]
    },
    year: "2026",
    facts: [
      ["Client", "Radio Veronica"],
      ["Year", "2026"],
      ["My role", "Sole designer, visual concept and design (campaign concept by the Veronica team)"],
      ["Deliverables", "Logo, campaign identity, print, display, social, studio screens, web, branded beer and champagne bottles"]
    ],
    hero: { src: "Assets/Projecten/Vriendenweekend/web/logo-hero.webp", alt: "Het Nationale Vriendenweekend logo on Veronica blue" },
    hook: "One weekend for every friend group in the country.",
    blocks: [
      { type: "section", heading: "The campaign", text: [
        "Everyone knows the group chat: eight friends, three date polls, six months later still nothing planned. Radio Veronica decided to fix it for the whole country by claiming the first weekend of November as <em>Het Nationale Vriendenweekend</em>. In the first edition, ten friend groups won a weekend at EuroParcs Hindeloopen with Veronica's DJs, a barbecue, a party and live radio from the park."
      ]},
      { type: "section", heading: "The brief", text: [
        "Carte blanche: make the weekend feel like a national tradition from day one."
      ]},
      { type: "section", heading: "The idea", text: [
        "Three holiday houses huddled together under a golden ribbon, like an official seal: part holiday-park sign, part national holiday. I explored four directions, each built on a different side of a weekend away: the house, the roof over everyone, the packed weekend bag and the group itself. The one we chose got the strongest reaction, and the logo was approved at the first pitch with no changes."
      ]},
      { type: "grid", columns: 4, items: [
        { src: "Assets/Projecten/Vriendenweekend/web/direction-1.webp", alt: "Chosen direction: houses under a golden ribbon" },
        { src: "Assets/Projecten/Vriendenweekend/web/direction-2.webp", alt: "Direction: one roof over everyone" },
        { src: "Assets/Projecten/Vriendenweekend/web/direction-3.webp", alt: "Direction: the weekend bag" },
        { src: "Assets/Projecten/Vriendenweekend/web/direction-4.webp", alt: "Direction: the friend group" }
      ], caption: "Four directions — the chosen one first" },
      { type: "section", heading: "The roll-out", text: [
        "From one logo to everything the weekend touched: print, display and social campaigns, studio screens, web, and branded beer and champagne bottles for the weekend itself."
      ]},
      { type: "canvas", item: { src: "Assets/Projecten/Vriendenweekend/web/rollout-canvas.webp", alt: "The weekend in photos: studio, house, bingo, bottles and friends", caption: "The weekend itself. Photos: Jeroen Zondag" } },
      { type: "split", items: [
        { src: "Assets/Projecten/Vriendenweekend/web/bingo-table.webp", alt: "Bingo board, welcome card, coaster and cava on the table", caption: "Bingo board, welcome card and coaster" },
        { src: "Assets/Projecten/Vriendenweekend/web/signs-easels.webp", alt: "Pitch & Putt and Escape signs on easels", caption: "Activity signs" }
      ]},
      { type: "split", items: [
        { src: "Assets/Projecten/Vriendenweekend/web/beer-bottle.webp", alt: "Vriendenweekend beer bottle", caption: "Beer" },
        { src: "Assets/Projecten/Vriendenweekend/web/cava-bottle.webp", alt: "Vriendenweekend cava bottle", caption: "Cava" }
      ]},
      { type: "hero", item: { src: "Assets/Projecten/Vriendenweekend/web/friends-bingo.webp", alt: "A friend group with their completed bingo board", caption: "A full bingo card. Photo: Jeroen Zondag" } },
      { type: "hero", item: { src: "Assets/Projecten/Vriendenweekend/web/drone-house.webp", alt: "Drone shot of everyone in front of the branded house by the water", caption: "Everyone at the Veronica house. Photo: Jeroen Zondag" } }
    ]
  },
  "mediahuis-radio": {
    title: "Brand in daily use",
    status: "live",
    category: "campaign",
    card: {
      title: "Mediahuis Radio — Brand in daily use",
      eyebrow: "Campaigns",
      image: "Assets/Projecten/MediahuisRadio/web/mhr-illustration.webp",
      description: "Keeping Radio Veronica, SLAM! and 100% NL recognisable everywhere, and dreaming up the branded content around them.",
      tint: "cyan"
    },
    year: "2025",
    facts: [
      ["Brands", "Radio Veronica, SLAM!, 100% NL"],
      ["Since", "November 2025"],
      ["Role", "Junior Creative Designer & creative concepter, in-house"],
      ["Output", "Studio screens, print up to A0, 9:16 digital, social ads, HTML5 banners, merch and prizes"]
    ],
    hero: { src: "Assets/Projecten/MediahuisRadio/web/mhr-illustration.webp", alt: "Mediahuis Radio illustration: listeners of SLAM!, 100% NL, Sublime and Radio Veronica", caption: "Mediahuis Radio — illustrated by me" },
    hook: "Not every brief is a billboard.",
    blocks: [
      { type: "section", text: [
        "Most days I'm making three very different radio brands work in a hundred small places: studio screens (static and animated), A0 posters, 9:16 screens, social ads, HTML5 banners, and the prizes listeners win, from mugs to greeting cards to socks. The job is to keep every piece unmistakably Veronica, SLAM! or 100% NL, and still make it feel made for its moment."
      ]},
      { type: "grid", columns: 4, items: [
        { src: "Assets/Projecten/MediahuisRadio/web/veronica-muziekquiz.webp", alt: "Radio Veronica De Beste Muziekquiz Allertijden" },
        { src: "Assets/Projecten/MediahuisRadio/web/veronica-cafe.webp", alt: "Het Radio Veronica Café social post" },
        { src: "Assets/Projecten/MediahuisRadio/web/veronica-efteling.webp", alt: "Radio Veronica x Efteling Love at First Ride" },
        { src: "Assets/Projecten/MediahuisRadio/web/veronica-fluisteraar.webp", alt: "Radio Veronica De Fluisteraar" }
      ], caption: "Radio Veronica" },
      { type: "grid", columns: 4, items: [
        { src: "Assets/Projecten/MediahuisRadio/web/slam-summer500.webp", alt: "SLAM! Summer 500" },
        { src: "Assets/Projecten/MediahuisRadio/web/slam-alaafondshow.webp", alt: "SLAM! Alaafondshow" },
        { src: "Assets/Projecten/MediahuisRadio/web/slam-gok-winners.webp", alt: "SLAM! Gok van je leven winners" },
        { src: "Assets/Projecten/MediahuisRadio/web/slam-festivalmaand.webp", alt: "SLAM! Festivalmaand" }
      ], caption: "SLAM!" },
      { type: "grid", columns: 4, items: [
        { src: "Assets/Projecten/MediahuisRadio/web/100nl-top1000.webp", alt: "100% NL Top 1000" },
        { src: "Assets/Projecten/MediahuisRadio/web/100nl-sinterklaas.webp", alt: "100% NL Sinterklaas" },
        { src: "Assets/Projecten/MediahuisRadio/web/100nl-somertijd.webp", alt: "100% NL Somertijd BBQ cards" },
        { src: "Assets/Projecten/MediahuisRadio/web/100nl-tijdmachine.webp", alt: "100% NL Tijdmachine" }
      ], caption: "100% NL" },
      { type: "section", heading: "Living a new identity", text: [
        "I started just as Radio Veronica rolled out a new visual identity. I didn't write the guidelines, but I helped bring them to life: updating visuals across every channel, keeping new work in line, and building each new campaign on top of the brand guide. On photoshoots I was second designer on set, checking that every shot fitted the new direction and that we caught the energy of each show."
      ]},
      { type: "section", heading: "Highlights", list: [
        "<strong>Radio Veronica — Het Radio Veronica Café:</strong> [one line — confirm which parts of the Café identity you designed].",
        "<strong>100% NL — Tijdmachine:</strong> [one line].",
        "<strong>SLAM! — Festivalmaand:</strong> [one line].",
        "<strong>SLAM! — Summer 500:</strong> [one line].",
        "<strong>SLAM! — Gok van je leven:</strong> my first big campaign at Mediahuis, as the sole designer.",
        "<strong>Radio Veronica — De Beste Muziekquiz Allertijden:</strong> logo and digital campaign for the Top 3000 edition."
      ]},
      { type: "split", items: [
        { src: "Assets/Projecten/MediahuisRadio/web/cafe-key-visual.webp", alt: "Het Radio Veronica Café key visual" },
        { src: "Assets/Projecten/MediahuisRadio/web/cafe-coaster.webp", alt: "Het Radio Veronica Café coaster in the bar", caption: "In the bar. Photo: Bram Rietveld" }
      ], caption: "Radio Veronica — Het Radio Veronica Café" },
      { type: "hero", item: { src: "Assets/Projecten/MediahuisRadio/web/cafe-studio.webp", alt: "DJ live in the Café studio, in front of the shield", caption: "Live from the Café. Photo: Bram Rietveld" } },
      { type: "hero", item: { src: "Assets/Projecten/MediahuisRadio/web/tijdmachine-concepts.webp", alt: "Four logo concepts for 100% NL Tijdmachine", caption: "Four logo concepts" } },
      { type: "hero", item: { src: "Assets/Projecten/MediahuisRadio/web/tijdmachine-chosen.webp", alt: "The chosen Tijdmachine logo on orange", caption: "The chosen logo" } },
      { type: "triptych", ratio: "9 / 16", items: [
        { src: "Assets/Projecten/MediahuisRadio/web/tijdmachine-80.webp", alt: "Tijdmachine studio screen Jaren 80" },
        { src: "Assets/Projecten/MediahuisRadio/web/tijdmachine-90.webp", alt: "Tijdmachine studio screen Jaren 90" },
        { src: "Assets/Projecten/MediahuisRadio/web/tijdmachine-00.webp", alt: "Tijdmachine studio screen Jaren 00" }
      ], caption: "100% NL — Tijdmachine: same frame, different decade" },
      { type: "grid", columns: 4, items: [
        { src: "Assets/Projecten/MediahuisRadio/web/festivalmaand-wip1.webp", alt: "Festivalmaand work in progress 1" },
        { src: "Assets/Projecten/MediahuisRadio/web/festivalmaand-wip3.webp", alt: "Festivalmaand work in progress 3" },
        { src: "Assets/Projecten/MediahuisRadio/web/festivalmaand-wip5.webp", alt: "Festivalmaand work in progress 5" },
        { src: "Assets/Projecten/MediahuisRadio/web/festivalmaand-wip8.webp", alt: "Festivalmaand work in progress 8" }
      ], caption: "SLAM! — Festivalmaand: the road to the logo" },
      { type: "split", items: [
        { src: "Assets/Projecten/MediahuisRadio/web/festivalmaand-wristband.webp", alt: "Festivalmaand wristband direction", caption: "The wristband direction" },
        { src: "Assets/Projecten/MediahuisRadio/web/festivalmaand-story.webp", alt: "Final Festivalmaand 9:16 screen", caption: "Final — 9:16" }
      ]},
      { type: "triptych", ratio: "16 / 9", items: [
        { src: "Assets/Projecten/MediahuisRadio/web/summer500-v1.webp", alt: "Summer 500 version 1" },
        { src: "Assets/Projecten/MediahuisRadio/web/summer500-v3.webp", alt: "Summer 500 version 3" },
        { src: "Assets/Projecten/MediahuisRadio/web/summer500-v4.webp", alt: "Summer 500 version 4" }
      ], caption: "SLAM! — Summer 500: earlier versions" },
      { type: "hero", item: { src: "Assets/Projecten/MediahuisRadio/web/summer500-final.webp", alt: "Final Summer 500 visual", caption: "Final version" } },
      { type: "split", items: [
        { src: "Assets/Projecten/MediahuisRadio/web/gok-post.webp", alt: "Gok van je leven social post", caption: "Social post" },
        { src: "Assets/Projecten/MediahuisRadio/web/gok-story.webp", alt: "Gok van je leven story: win a trip to Las Vegas", caption: "Story" }
      ], caption: "SLAM! — Gok van je leven" },
      { type: "hero", item: { src: "Assets/Projecten/MediahuisRadio/web/gok-cheque.webp", alt: "The winners with the Gok van je leven cheque", caption: "The winners, with the cheque I designed" } },
      { type: "split", ratio: "16 / 9", items: [
        { src: "Assets/Projecten/MediahuisRadio/web/muziekquiz-logo.webp", alt: "De Beste Muziekquiz Allertijden logo", caption: "The logo" },
        { src: "Assets/Projecten/MediahuisRadio/web/muziekquiz-top3000.webp", alt: "De Beste Muziekquiz Allertijden Top 3000 edition", caption: "Top 3000 edition" }
      ], caption: "Radio Veronica — De Beste Muziekquiz Allertijden" },
      { type: "section", heading: "Branded content: from idea to pitch", text: [
        "Next to design, I come up with branded content concepts: ways to weave an advertiser's message into the radio, so it feels like content instead of an ad. I pitch them to station directors, marketing directors and account managers. They range from radio games to large productions like Jumbo × 100% NL's <em>Het Super Kerstdiner</em>: a full Christmas dinner for 100 listeners inside a Jumbo supermarket.",
        "One of my favourites is <em>The Best Best Man</em> for SLAM! × OFM. In the morning show, Anoûl & Marijn go looking for the most loyal best man in the country. Every day they call a groom and his best man, and both have to pick up with “Ja, ik wil”. Three best men make it to the final, where they anonymously hold up a sign for every dare: would you shave your head for your groom? Get a tattoo? Drink beer from a shoe? Whoever goes furthest wins a bachelor party and an OFM wedding suit for the groom. The twist: none of the dares ever have to happen. It was only ever about how far you'd go."
      ]},
      { type: "split", items: [
        { src: "Assets/Projecten/MediahuisRadio/web/best-best-man.webp", alt: "SLAM! concept board The Best Best Man", caption: "SLAM! × OFM — The Best Best Man (concept)" },
        { src: "Assets/Projecten/MediahuisRadio/web/jumbo-kerstdiner.webp", alt: "Jumbo x 100% NL Het Super Kerstdiner concept board", caption: "Jumbo × 100% NL — Het Super Kerstdiner" }
      ]}
    ]
  },
  "domibo": {
    title: "DoMiBo",
    status: "live",
    category: "identity",
    card: {
      title: "Riot Restobar — DoMiBo",
      eyebrow: "Identity",
      image: "Assets/Projecten/DoMiBo/DoMiBo_1200x800.webp",
      description: "Turning a potato into a pin-up. My first solo identity, for a monthly after-work event.",
      tint: "blue"
    },
    highlight: {
      order: 3,
      eyebrow: "Riot Restobar",
      headline: "Turning a potato into a pin-up. <span class=\"accent-highlight\">Thursday is the new Friday!</span>",
      button: "Explore DoMiBo",
      stage: "peek",
      stageClass: "domibo-stage",
      images: ["Assets/Projecten/DoMiBo/web/story-streetcart.webp", "Assets/Projecten/DoMiBo/web/story-terrace.webp"]
    },
    year: "2024",
    facts: [
      ["Client", "Riot Restobar (Conscious Hotels)"],
      ["Year", "2024"],
      ["My role", "Sole designer and illustrator, my first solo project"],
      ["Deliverables", "Identity, character illustration, posters, social, printed invitations"]
    ],
    hero: { src: "Assets/Projecten/DoMiBo/web/tate-hero.webp", alt: "Tate the Potato, a retro pin-up, lounging on a giant beer glass" },
    hook: "Thursday is the new Friday.",
    blocks: [
      { type: "section", heading: "The brief", text: [
        "Riot wanted its monthly after-work drinks to become a fixed date for the offices around it. The look had to stand out on the street and on Instagram, and refresh every month without starting over."
      ]},
      { type: "section", heading: "The idea", text: [
        "Riot's story started with potatoes, so I made one the star: Tate the Potato, a retro pin-up with more confidence than most of us. Drawn in the style of vintage martini-girl illustration, she gives the event a face you recognise from across the room."
      ]},
      { type: "triptych", items: [
        { src: "Assets/Projecten/DoMiBo/web/poster-streetcart.webp", alt: "DoMiBo poster: Tate on a Dutch street cart" },
        { src: "Assets/Projecten/DoMiBo/web/poster-beachchair.webp", alt: "DoMiBo poster: Tate in a beach chair" },
        { src: "Assets/Projecten/DoMiBo/web/poster-gulpener.webp", alt: "DoMiBo poster: Tate in a Gulpener glass" }
      ], caption: "Three editions: street cart, beach chair, sponsor" },
      { type: "section", heading: "The system", text: [
        "Every edition shares one frame: the brushed DoMiBo wordmark, a cream panel, the purple wave with date and address, and Riot's logo. Only Tate's scene changes, from a Dutch street cart to a beach chair, often with Riot's signature drink or the sponsors (Jägermeister, Gulpener) drawn in. Fast to produce, instantly recognisable."
      ]},
      { type: "breakdown", item: { src: "Assets/Projecten/DoMiBo/web/breakdown.webp", alt: "Riot elements: paintstroke, frame and wave, next to a finished DoMiBo poster", caption: "The fixed parts: paintstroke wordmark, Riot frame and Riot wave. Only Tate's scene changes." } },
      { type: "section", heading: "Roll-out", text: [
        "Posters, Instagram posts and stories, and printed invitations hand-delivered to neighbouring offices."
      ]},
      { type: "triptych", ratio: "9 / 16", items: [
        { src: "Assets/Projecten/DoMiBo/web/story-glass.webp", alt: "DoMiBo Instagram story: giant glass" },
        { src: "Assets/Projecten/DoMiBo/web/story-terrace.webp", alt: "DoMiBo Instagram story: terrace" },
        { src: "Assets/Projecten/DoMiBo/web/story-streetcart.webp", alt: "DoMiBo Instagram story: street cart" }
      ], caption: "Instagram stories" },
      { type: "hero", ratio: "2 / 1", item: { src: "Assets/Projecten/DoMiBo/web/invitation.webp", alt: "DoMiBo printed invitation", caption: "Printed invitation for the neighbouring offices" } }
    ]
  },
  "patches": {
    title: "Patches & Studio Joons",
    status: "live",
    category: "identity",
    card: {
      title: "Patches & Studio Joons",
      eyebrow: "Identity",
      image: "Assets/Projecten/Patches/web/macro.webp",
      description: "Designing carnaval patches for Familie Kesbeke and others, and selling my own.",
      tint: "orange"
    },
    year: "2025",
    facts: [
      ["Clients", "Familie Kesbeke, Bakkerijt, SKD Kozijnen, 100% NL"],
      ["Since", "2025"],
      ["Role", "Freelance designer, plus my own label"],
      ["Deliverables", "Embroidered carnaval patches"]
    ],
    hero: { src: "Assets/Projecten/Patches/web/macro.webp", alt: "Two Snacks on the Beach patches on navy jackets, stitching up close" },
    hook: "Small canvas, big character.",
    blocks: [
      { type: "section", heading: "How it started", text: [
        "A colleague from my graduation internship runs a patch company and asked me to design for his clients. Carnaval patches are tiny brand pieces: they need to read from across a packed café, survive being embroidered, and make people laugh."
      ]},
      { type: "section", heading: "How I work", text: [
        "Some clients arrive with a clear idea, some with nothing at all. I always start with a conversation about what they want and the do's and don'ts, then show 3–5 concepts. We talk through what works, and I refine from there. For Familie Kesbeke I designed four patches, two of which went into production: pickles with attitude, in their own Brabant dialect (“Heé Slappe!”, “Kiek nie zo zuur”)."
      ]},
      { type: "breakdown", item: { src: "Assets/Projecten/Patches/web/kesbeke-concepts.webp", alt: "Four Familie Kesbeke patch designs; the two produced ones glow blue", caption: "Familie Kesbeke — four designs, the two produced ones marked in blue" } },
      { type: "triptych", ratio: "1 / 1", items: [
        { src: "Assets/Projecten/Patches/web/kesbeke-hee-slappe.webp", alt: "Kesbeke patch: Heé Slappe!" },
        { src: "Assets/Projecten/Patches/web/kesbeke-kiek.webp", alt: "Kesbeke patch: Kiek nie zo zuur" },
        { src: "Assets/Projecten/Patches/web/kesbeke-kekt.webp", alt: "Kesbeke patch: Kèkt nie zo zuur" }
      ], caption: "Heé Slappe! · Kiek nie zo zuur · Kèkt nie zo zuur" },
      { type: "triptych", ratio: "1 / 1", items: [
        { src: "Assets/Projecten/Patches/web/bakkerijt.webp", alt: "Bakkerijt patch: Iedere sneej un smaoksènsaosie" },
        { src: "Assets/Projecten/Patches/web/skd.webp", alt: "SKD Kozijnen patch: Hier gaot 't dak d'r pas écht af!" },
        { src: "Assets/Projecten/Patches/web/100nl.webp", alt: "100% NL patch: Maakt je dag!" }
      ], caption: "Bakkerijt · SKD Kozijnen · 100% NL" },
      { type: "section", heading: "Studio Joons", text: [
        "I also wanted to learn everything that happens after the design: production, pricing, selling. So I started my own small label. The first patches are fried snacks with a wink at <em>Ex on the Beach</em> (FREAKandel, BitterB00Bs), sold at carnaval in Brabant and in <a href=\"shop\">the shop</a>."
      ]},
      { type: "split", items: [
        { src: "Assets/Projecten/Patches/web/freakandel-design.webp", alt: "FREAKandel patch design", caption: "FREAKandel — design" },
        { src: "Assets/Projecten/Patches/web/freakandel-jacket.webp", alt: "FREAKandel patch on a jacket", caption: "FREAKandel — the real patch" }
      ]},
      { type: "split", items: [
        { src: "Assets/Projecten/Patches/web/bitterboobs-design.webp", alt: "BitterB00Bs patch design", caption: "BitterB00Bs — design" },
        { src: "Assets/Projecten/Patches/web/bitterboobs-jacket.webp", alt: "BitterB00Bs patch on a jacket", caption: "BitterB00Bs — the real patch" }
      ]},
      { type: "split", items: [
        { src: "Assets/Projecten/Patches/web/jackets-pair.webp", alt: "Both Studio Joons patches on navy carnaval jackets" },
        { src: "Assets/Projecten/Patches/web/jacket-carnaval.webp", alt: "BitterB00Bs patch on a carnaval jacket between other patches" }
      ], caption: "Worn at carnaval" }
    ]
  },
  "motion": {
    title: "Motion & Play",
    status: "live",
    category: "motion",
    card: {
      title: "Motion & Play",
      eyebrow: "Motion",
      description: "Logos that move, HTML5 banners, and a hand-drawn Christmas card every year.",
      tint: "cyan"
    },
    year: "2026",
    facts: [],
    hero: { src: "Assets/Projecten/Stop520/web/stop520-logo-animation.mp4", caption: "Radio Veronica × War Child — (S)Top 520 logo animation" },
    hook: "More and more of my work moves. To me, motion is a puzzle: how do you make a brand feel alive in five seconds?",
    blocks: [
      { type: "loops", items: [
        { label: "Radio Veronica — logo animation, studio screen", caption: "Radio Veronica — logo animation, studio screen" },
        { label: "SLAM! — logo animation, studio screen", caption: "SLAM! — logo animation, studio screen" }
      ]},
      { type: "hero", ratio: "32 / 9", item: { label: "SLAM! — triple digital screen", caption: "SLAM! — triple digital screen" } },
      { type: "loops", items: [
        { label: "100% NL — Sinterklaas animation, social", caption: "100% NL — Sinterklaas animation, social", ratio: "9 / 16" },
        { label: "Radio Veronica — 80s animation", caption: "Radio Veronica — 80s animation, [format]", ratio: "9 / 16" }
      ]},
      { type: "canvas", item: { label: "HTML5 banner set — all sizes playing together (screen-record the Veronica Top 1000 van de 90s set)" }, caption: "SLAM! — HTML5 banner set, [x] sizes" },
      { type: "section", heading: "Play (personal work)", text: [
        "Every year I draw and animate my own Christmas card. The one after a December trip to New York starred a row of nutcrackers."
      ]},
      { type: "loops", items: [
        { label: "Christmas card — New York nutcrackers", caption: "Personal — Christmas card [year]: New York nutcrackers, illustrated and animated", ratio: "4 / 5" },
        { label: "Next year's card", ratio: "4 / 5" }
      ]}
    ]
  },
  "dqdb": {
    title: "Drag Queen Disco Bingo",
    status: "archive",
    category: "identity",
    card: {
      title: "Bar Kantoor — Drag Queen Disco Bingo",
      eyebrow: "Identity",
      image: "Assets/Projecten/DQDB/DQDB_1200_800.webp",
      description: "High-contrast, disco-infused identity designed for dynamic rotating performer line-ups.",
      tint: "orange"
    },
    role: "Visual Identity", 
    client: "Conscious Hotels", 
    year: "2024",
    heroImage: "Assets/Projecten/DQDB/DQDB_1200_800_opt.webp", 
    intro: "<span class='accent-text'>Visual identity</span> for a reoccurring <span class='accent-text'>Drag Queen Bingo event</span> at Barkantoor.<br><br><span style='font-size: 1rem; font-weight: normal;'>During my internship at Conscious Hotels, I had the exciting opportunity to work on branding for Drag Queen Disco Bingo (DQDB), a vibrant event introduced to bring energy, inclusivity, and fun to the community.</span>",
    content: [
      {
        type: "two-column",
        left: [
          { type: "text", content: "Initially, the branding for DQDB was based on the style of the event location, Bar Kantoor, which didn't fully capture the unique, high-energy essence of the event. I saw this as an opportunity to redefine the event's look and feel to better align with its spirited and colorful atmosphere." }
        ],
        right: [
          { type: "image", src: "Assets/Projecten/DQDB/DragQueen_Bingo_old.webp" }
        ]
      },
      {
        type: "two-column",
        left: [
          { type: "image", src: "Assets/Projecten/DQDB/DQDB_BK.webp" }
        ],
        right: [
          { type: "text", content: "As the lead designer on this project, I developed a completely new visual direction for DQDB. I focused on creating a cohesive and lively aesthetic that would appeal to a diverse audience and reflect the playful, disco-inspired vibe of the event.<br><br>I designed the logo, posters, and social media assets, ensuring that each element was bold, colorful, and eye-catching.<br><br>In addition, I crafted a comprehensive visual style guide to support consistency in the event's branding. This guide serves as a reference for future interns and designers, helping them to easily understand and continue the branding direction I established." }
        ]
      },
      {
        type: "two-column",
        left: [
          { type: "text", content: "To capture the essence of <span class='accent-text'>Drag Queen Disco Bingo</span>, I researched similar events and their branding strategies. Our audience was primarily young adults and the LGBTQ+ community, eager for a vibrant, unique experience.<br><br>For inspiration, I explored visuals from different LGBTQ+ events from the disco side till the brunch. I selected high-contrast neon elements paired with bold typography to bring the energy and excitement of the disco era to life.<br><br>Since DQDB needed to allow for a rotating lineup of performers, I focused on creating a bold, adaptable look that could represent the energy of the event itself rather than individual personalities.<br><br>To achieve this flexibility, I decided on a high-contrast color scheme. This ensured that each event would maintain a cohesive look without relying on specific faces.<br><br>The high-contrast palette and disco-inspired elements became the basis for my concepts, creating a bold, vibrant brand that could be adapted." }
        ],
        right: [
          { type: "text", content: "<strong>01 Moodboard</strong>" },
          { type: "image", src: "Assets/Projecten/DQDB/Moodboard-DQDB.webp" } 
        ]
      },
      {
        type: "two-column",
        left: [
          { type: "text", content: "<strong>02 Concepts</strong>" },
          { type: "image", src: "Assets/Projecten/DQDB/DQDB_concepts.webp" } 
        ],
        right: [
          { type: "text", content: "To ensure the visual direction aligned perfectly, I presented three design concepts and sought feedback from the team. We collectively decided that <span class='accent-text'>option 2</span> was the best fit for the event.<br><br>This concept balanced boldness and approachability without feeling overly soft or leaning too heavily into a nightlife aesthetic. This choice allowed us to create a vibrant, inclusive look that would appeal to a wide audience while still capturing the lively, disco-inspired energy of the event." }
        ]
      },
      {
        type: "full-width",
        items: [
          { type: "text", content: "<strong>03 Results</strong>" },
          { type: "image", src: "Assets/Projecten/DQDB/Mockup-insta_DQDB.webp" }
        ]
      },
      {
        type: "full-width",
        items: [
          { type: "text", content: "<strong>04 Visual Style Guide</strong>" },
          { 
            type: "carousel", 
            images: [
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_01.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_02.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_03.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_04.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_05.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_06.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_07.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_08.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_09.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_10.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_11.jpg", 
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_12.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_13.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_14.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_15.webp",
              "Assets/Projecten/DQDB/Style guide/Branding_DQDB-Page_16.webp"
            ] 
          }
        ]
      }
    ]
  },
  "andgage": {
    title: "Andgage",
    status: "unlisted",
    category: "product",
    card: {
      eyebrow: "UX / UI Design",
      image: "Assets/Projecten/Andgage/Andgage_1200_800.webp",
      description: "Streamlining interactive event presentation flows through structured user testing and design systems.",
      tint: "cyan"
    },
    role: "UX/UI Design",
    client: "LiveWall",
    year: "2024",
    heroImage: "Assets/Projecten/Andgage/Hero_Andgage.webp", 
    intro: "Optimize the experience of an interactive presentation tool for <span class='accent-text'>new users</span> by redesigning the user flow, creating prototypes, and validating improvements through <span class='accent-text'>UX research</span> and testing.",
    content: [
      {
        type: "full-width",
        items: [
          { type: "image", src: "Assets/Projecten/Andgage/Andgage1.webp" },
          { type: "text", content: "<strong>01 About</strong><br>Andgage is LiveWall's powerful internal tool for creating interaction during events (such as voting, quizzes, and fancams). However, the tool has grown organically over the years, making the interface confusing and its functionalities difficult for new users to navigate." }
        ]
      },
      {
        type: "two-column",
        left: [
          { type: "text", content: "<strong>02 The Approach</strong><br>The project was structured according to the Understand, Create, and Deliver phases wich can be translated to research, concepting and the actual product design. The focus remained consistently on the user's needs: the internal LiveWall employee without prior Andgage experience." }
        ],
        right: [
          { type: "text", content: "To make the target group more tangible and keep their needs top of mind throughout the design process, I created a <span class='accent-text'>persona</span> for this project. I used the persona as a visual summary of the audience, helping me to better address the <span class='accent-text'>real needs of the users</span>.<br><br>The persona was built on the interviews conducted with <span class='accent-text'>the target group</span> and was refined during the project as new insights emerged from testing and additional research." }
        ]
      },
      {
        type: "full-width",
        items: [
          { type: "image", src: "Assets/Projecten/Andgage/UX Persona.webp" },
          { type: "text", content: "<strong>03 UX/UI</strong><br>The sitemap formed an essential foundation for structuring Andgage in a clear and intuitive way. It illustrates the hierarchy of the platform and outlines how the main event pages connect to supporting sections such as templates, flow items, and results. By mapping out the architecture early on, I was able to clarify relationships between content and functionality, and ensure that users can easily navigate without feeling overwhelmed. The sitemap also served as a reference point throughout the design process, helping to align design decisions with a logical structure and keeping the user journey streamlined and efficient." },
          { type: "image", src: "Assets/Projecten/Andgage/Andgage sitemap.webp" }
        ]
      },
      {
        type: "full-width",
        items: [
          { type: "image", src: "Assets/Projecten/Andgage/Andgage flow.webp" },
          { type: "text", content: "These deliverables served as the blueprints for low fidelity wireframes. I used these wireframes to further refine my designs through usability testing." },
          { type: "image", src: "Assets/Projecten/Andgage/Flow 3/Andgag_wireframegrid.webp" }
        ]
      },
      {
        type: "full-width",
        items: [
          { type: "image", src: "Assets/Projecten/Andgage/Andgage styleguide.webp" }
        ]
      },
      {
        type: "two-column-1-2",
        left: [
          { type: "text", content: "<strong>Explainer animation</strong>" }
        ],
        right: [
          { type: "video", src: "Assets/Projecten/Andgage/Andgage_PR-animatie.mp4" }
        ]
      },
      {
        type: "full-width",
        items: [
          { type: "text", content: "<strong>05 Product design </strong>" },
          { type: "marquee", 
            images: [
              "Assets/Projecten/Andgage/Flow 1/Flow1.1.avif",
              "Assets/Projecten/Andgage/Flow 1/Flow1.2.avif",
              "Assets/Projecten/Andgage/Flow 1/Flow1.3.avif",
              "Assets/Projecten/Andgage/Flow 1/Flow1.4.avif",
              "Assets/Projecten/Andgage/Flow 1/Flow1.5.avif",
              "Assets/Projecten/Andgage/Flow 1/Flow1.6.avif"
            ] 
          }
        ]
      },
      {
        type: "full-width",
        items: [
          { type: "text", content: "The user is guided through a simplified, step-by-step wizard to configure the basic parameters of a new event such as the name, date, and core settings. This process is designed to lower the initial barrier by breaking down the setup into logical, manageable phases." },
           { type: "marquee", 
            images: [
              "Assets/Projecten/Andgage/Flow 2/Flow2.2.avif",
              "Assets/Projecten/Andgage/Flow 2/Flow2.3.avif",
              "Assets/Projecten/Andgage/Flow 2/Flow2.4.avif",
              "Assets/Projecten/Andgage/Flow 2/12.avif"
            ] 
          }
        ]
      },
      {
        type: "full-width",
        items: [
          { type: "text", content: "The user selects a new interaction from a visual gallery of Flow Items. After selection, they are directed to the item's dedicated creation screen, where they can easily set up questions, answers, and specific display options for that element. This flow utilizes visual feedback to ensure confidence. In addition Users can also opt to use templates as an quick and easy start." },
           { type: "marquee", 
            images: [
              "Assets/Projecten/Andgage/Flow 3/Flow3.1.avif",
              "Assets/Projecten/Andgage/Flow 3/Flow3.2.avif",
              "Assets/Projecten/Andgage/Flow 3/Flow3.3.avif",
              "Assets/Projecten/Andgage/Flow 3/Flow3.4.avif"
            ] 
          }
        ]
      }
    ]
  },
  "rhythm-and-roots": {
    title: "Rhythm and Roots",
    status: "draft",
    category: "product",
    card: {
      title: "Rhythm &amp; Roots",
      eyebrow: "Visual Interface Design",
      image: "Assets/Projecten/Rythm & Roots/RR_1200_800.webp",
      description: "An immersive desktop editorial celebrating Afrobeats culture and visual storytelling.",
      tint: "blue"
    },
    role: "Visual Interface Design", 
    client: "HvA Minor", 
    year: "2024",
    heroImage: "Assets/Projecten/Rythm & Roots/RR_1200_800.webp", 
    intro: "Create the <span class='accent-text'>visual design</span> and <span class='accent-text'>digital prototype</span> of a desktop website about a subject with renewed value for the user, highlighting your personal vision on this theme.",
    content: [
      {
        type: "full-width",
        items: [
          { type: "text", content: "During my minor Visual Interface Design, I was tasked with creating the visual design and digital prototype of a desktop website centered around a topic with renewed value for the user. I chose to focus on Afrobeats, a genre with deep cultural roots and a growing global influence. Through this design, I wanted to bring my own vision of Afrobeats to life, showcasing its rich heritage and dynamic future in a way that resonates with both new listeners and longtime fans." }
        ]
      },
      {
        type: "two-column",
        left: [
          { type: "text", content: "Listening to the beats and rhythms of Afrobeats music, I immersed myself in its energy and drew <span class='accent-text'>inspiration</span> from the lively nightlife of Lagos, known for its vibrant colors, movement, and high energy.<br><br>I chose bold, dynamic colors to reflect the genre's cultural richness and upbeat spirit, aiming to create a sense of rhythm and warmth that users would feel as soon as they landed on the site." }
        ],
        right: [
          { type: "image", src: "Assets/Projecten/Rythm & Roots/Moodboards_portfolio_rr.webp" }
        ]
      },
      {
        type: "two-column",
        left: [
          { type: "image", src: "Assets/Projecten/Rythm & Roots/Schets.webp" }
        ],
        right: [
          { type: "text", content: "For the <span class='accent-text'>wireframing</span> phase, I took a research based approach, analyzing similar websites and general music sites to understand effective ways of presenting information and engaging users.<br><br>This research helped me develop a clean, intuitive structure for the site, with sections dedicated to the genre's history, artist profiles, and multimedia elements that would allow users to dive deeper into the world of Afrobeats." }
        ]
      },
      {
        type: "two-column",
        left: [
          { type: "text", content: "Finally, in the prototyping stage, I brought the visual design and structure together. I incorporated interactive features, smooth transitions, and dynamic layouts to create a layered experience that builds the user's connection with the genre.<br><br>The <span class='accent-text'>final prototype</span> combines the vibrant color palette with a user-friendly layout, making Rhythm and Roots an engaging, immersive destination for exploring Afrobeats music and culture." }
        ],
        right: [
          { type: "image", src: "Assets/Projecten/Rythm & Roots/Wireframe_RR.webp" }
        ]
      },
      {
        type: "three-column",
        left: [
          { type: "text", content: "<span style='color: var(--muted); font-size: 0.9em;'>01</span> <strong>Landingpage</strong>" },
          { type: "image", src: "Assets/Projecten/Rythm & Roots/Home.webp" }
        ],
        middle: [
          { type: "text", content: "<span style='color: var(--muted); font-size: 0.9em;'>03</span> <strong>Subcategory</strong>" },
          { type: "image", src: "Assets/Projecten/Rythm & Roots/Index.webp" },
          { type: "text", content: "<span style='color: var(--muted); font-size: 0.9em;'>04</span> <strong>Vision</strong>" },
          { type: "image", src: "Assets/Projecten/Rythm & Roots/About.jpg" }
        ],
        right: [
          { type: "text", content: "<span style='color: var(--muted); font-size: 0.9em;'>02</span> <strong>Category</strong>" },
          { type: "image", src: "Assets/Projecten/Rythm & Roots/Icons_main.jpg" },
          { type: "image", src: "Assets/Projecten/Rythm & Roots/Woman.jpg" } 
        ]
      },
      {
        type: "two-column",
        left: [
          { type: "text", content: "<span style='color: var(--muted); font-size: 0.9em;'>05</span> <strong>Detail page</strong>" },
          { type: "image", src: "Assets/Projecten/Rythm & Roots/Tems.webp" }
        ],
        right: [
          { type: "text", content: " " },
          { type: "image", src: "Assets/Projecten/Rythm & Roots/Burna.webp" }
        ]
      },
      {
        type: "full-width",
        items: [
          { type: "text", content: "<strong>Style Guide</strong>" },
          { 
            type: "carousel", 
            images: [
              "Assets/Projecten/Rythm & Roots/styleguide/Styguide logo.png",
              "Assets/Projecten/Rythm & Roots/styleguide/Styguide fotografie.png",
              "Assets/Projecten/Rythm & Roots/styleguide/Styguide grid.png",
              "Assets/Projecten/Rythm & Roots/styleguide/Styguide kleur.png",
              "Assets/Projecten/Rythm & Roots/styleguide/Styguide knop.png",
              "Assets/Projecten/Rythm & Roots/styleguide/Styguide typografie.webp"
            ] 
          }
        ]
      }
    ]
  },
  "lnx": {
    title: "Lil Nas X Campaign",
    status: "draft",
    category: "campaign",
    card: {
      eyebrow: "Campaign Concept",
      image: "Assets/Projecten/LNX/LNX_1200_800.webp",
      description: "Meme-inspired cross-media rollout combining billboard stunts, AR lenses, and viral tweets.",
      tint: "orange"
    },
    role: "Campaign Concept & Design", 
    client: "Mojo Concerts", 
    year: "2024",
    heroImage: "Assets/Projecten/LNX/LNX_1200_800.webp", 
    intro: "A <span class='accent-text'>cross-media campaign</span> concept for Lil Nas X's first Dutch tour.",
    content: [
      {
        type: "two-column",
        left: [
          { type: "text", content: "For a project commissioned by Mojo Concerts, the goal was to promote a new international artist who had never performed in the Netherlands before. The artist would be giving four shows at different locations across the country.<br><br>To support this, a <span class='accent-text'>promotional campaign</span> was developed with the aim of attracting as many fans as possible and fostering real interaction between the artist and the audience.<br><br>As part of the campaign, a poster, a video, and a third medium were created to bring the concept to life." }
        ],
        right: [
          { type: "youtube", src: "6eHQ5aSrE-k" }
        ]
      },
      {
        type: "two-column",
        left: [
          { type: "image", src: "Assets/Projecten/LNX/Lil_Nas_X_poster.webp" }
        ],
        right: [
          { type: "text", content: "The poster also takes the form of a tweet. Mojo announces the Dutch shows, and Lil Nas replies in a <span class='accent-text'>playful</span> way.<br><br>The campaign leans into <span class='accent-text'>humor</span> and meme culture, something his fans know and love him for. Lil Nas is famous for \"trolling\" on Twitter, and that vibe is carried through here as well." }
        ]
      },
      {
        type: "three-column",
        left: [
          { type: "text", content: "As the third expression, I went with a <span class='accent-text'>social media filter</span>. The filter asked users what could be done at the locations where Lil Nas would perform, framed as a tweet from Lil Nas himself.<br><br>This added an <span class='accent-text'>interactive</span> and playful layer to the campaign, encouraging fans to join in and share their own spin." }
        ],
        middle: [
          { type: "image", src: "Assets/Projecten/LNX/snapchat_filter.png" }
        ],
        right: [
          { 
            type: "carousel", 
            images: [
              "Assets/Projecten/LNX/Carousel/85582e64-e681-4550-92db-8518873b5bc6.webp",
              "Assets/Projecten/LNX/Carousel/a53f77b2-f70b-4b41-a5eb-6b27ebd207c6.webp", 
              "Assets/Projecten/LNX/Carousel/d6c998e5-1184-4ea9-837f-4676fc95a23e.webp",
              "Assets/Projecten/LNX/Carousel/IMG_3419.jpeg",
              "Assets/Projecten/LNX/Carousel/280b7529-65e7-4215-a5d8-fdc5bdae014f.webp",
              "Assets/Projecten/LNX/Carousel/IMG_3421.webp"
            ] 
          }
        ]
      },
      {
        type: "full-width",
        items: [
          { type: "text", content: "<strong>Style Guide</strong>" },
          { 
            type: "carousel", 
            images: [
              "Assets/Projecten/LNX/style guide/GodwinJoni_VisualStyleGuideSTcreate_2022_Page_01.png",
              "Assets/Projecten/LNX/style guide/GodwinJoni_VisualStyleGuideSTcreate_2022_Page_02.png",
              "Assets/Projecten/LNX/style guide/GodwinJoni_VisualStyleGuideSTcreate_2022_Page_03.webp",
              "Assets/Projecten/LNX/style guide/GodwinJoni_VisualStyleGuideSTcreate_2022_Page_04.png",
              "Assets/Projecten/LNX/style guide/GodwinJoni_VisualStyleGuideSTcreate_2022_Page_05.png",
              "Assets/Projecten/LNX/style guide/GodwinJoni_VisualStyleGuideSTcreate_2022_Page_06.webp",
              "Assets/Projecten/LNX/style guide/GodwinJoni_VisualStyleGuideSTcreate_2022_Page_07.webp",
              "Assets/Projecten/LNX/style guide/GodwinJoni_VisualStyleGuideSTcreate_2022_Page_08.webp",
              "Assets/Projecten/LNX/style guide/GodwinJoni_VisualStyleGuideSTcreate_2022_Page_09.webp",
              "Assets/Projecten/LNX/style guide/GodwinJoni_VisualStyleGuideSTcreate_2022_Page_10.webp",
              "Assets/Projecten/LNX/style guide/GodwinJoni_VisualStyleGuideSTcreate_2022_Page_11.webp",
              "Assets/Projecten/LNX/style guide/GodwinJoni_VisualStyleGuideSTcreate_2022_Page_12.png"
            ] 
          }
        ]
      }
    ]
  }
};
