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
      image: "Assets/Projecten/Stop520/Stop520_1200_800.webp",
      description: "Turning a radio studio into a child's colouring page, for 520 million children growing up with war.",
      tint: "orange"
    },
    highlight: {
      order: 1,
      eyebrow: "Radio Veronica × War Child",
      headline: "A colouring page <span class=\"accent-highlight\">the size of a radio studio</span>.",
      button: "Explore (S)Top 520",
      stage: "framed",
      images: ["Assets/Projecten/Stop520/Stop520_1200_800.webp"]
    },
    year: "2026",
    facts: [
      ["Client", "Radio Veronica × War Child"],
      ["Year", "2026"],
      ["Location", "Utrecht Centraal"],
      ["My role", "Visual concept and design (campaign concept by the Veronica team)"],
      ["Deliverables", "Studio exterior, campaign logo, key visual, colouring pages, social templates, ads, print, car wrap"]
    ],
    hero: { label: "Hero — the studio in the station hall, travellers walking past (photo 07314, Emma Pot / Jeroen Zondag)" },
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
        { src: "Assets/Projecten/Stop520/web/studio-wall.webp", alt: "The coloured-in studio wall at Utrecht Centraal", caption: "The studio wall at Utrecht Centraal. Photo: Emma Pot" }
      ]},
      { type: "hero", item: { src: "Assets/Projecten/Stop520/web/line-work.webp", alt: "Close-up of the coloured-in line work on the studio", caption: "Line work up close. Photo: Emma Pot" } },
      { type: "section", heading: "The system", text: [
        "From that drawing I built the whole campaign identity: the (S)Top 520 logo, the key visual, social templates and posts, ads and print. And real colouring pages to take home."
      ]},
      { type: "canvas", item: { label: "Roll-out canvas — logo, key visual, social posts, ad and print on white (to make)" } },
      { type: "split", items: [
        { src: "Assets/Projecten/Stop520/web/colouring-page-2.webp", alt: "Second (S)Top 520 colouring page", caption: "Colouring page to take home" },
        { src: "Assets/Projecten/Stop520/web/bedboys-car.webp", alt: "M line Bed Boys car wrapped in the (S)Top 520 campaign", caption: "Car wrap — M line Bed Boys" }
      ]},
      { type: "section", heading: "What happened", text: [
        "Kids came to the station with their parents just to get a colouring page. The studio drew crowds of travellers all week, De Telegraaf covered the campaign several times, and both Radio Veronica and War Child were beyond happy with how it looked. [Optional: “The list closed with John Lennon's Imagine at number one.”]"
      ]},
      { type: "split", items: [
        { label: "A table full of coloured-in pages (photo JZ12331)" },
        { label: "DJs live in the studio (photo 03814)" }
      ]},
      { type: "inset", items: [
        { label: "The studio in the whole station hall (photo 03038 or 07345)" },
        { label: "Telegraaf clipping, small" }
      ], caption: "Photos: [Emma Pot / Jeroen Zondag]" }
    ]
  },
  "vriendenweekend": {
    title: "Het Nationale Vriendenweekend",
    status: "live",
    category: "campaign",
    card: {
      title: "Radio Veronica — Het Nationale Vriendenweekend",
      eyebrow: "Campaigns",
      description: "Claiming one weekend for every friend group in the country. Logo approved at first pitch.",
      tint: "blue"
    },
    highlight: {
      order: 2,
      eyebrow: "Radio Veronica",
      headline: "One weekend for <span class=\"accent-highlight\">every friend group</span> in the country.",
      button: "Explore Vriendenweekend",
      stage: "framed",
      images: [],
      label: "The branded house by the water, drone shot (DJI_0041)"
    },
    year: "2026",
    facts: [
      ["Client", "Radio Veronica"],
      ["Year", "2026"],
      ["My role", "Sole designer, visual concept and design (campaign concept by the Veronica team)"],
      ["Deliverables", "Logo, campaign identity, print, display, social, studio screens, web, branded beer and champagne bottles"]
    ],
    hero: { label: "Hero — the logo, large, on the Veronica blue gradient (Vriendenweekend liggend 1920×1080)" },
    hook: "One weekend for every friend group in the country.",
    blocks: [
      { type: "section", heading: "The campaign", text: [
        "Everyone knows the group chat: eight friends, three date polls, six months later still nothing planned. Radio Veronica decided to fix it for the whole country by claiming the first weekend of November as <em>Het Nationale Vriendenweekend</em>. In the first edition, ten friend groups won a weekend at EuroParcs Hindeloopen with Veronica's DJs, a barbecue, a party and live radio from the park."
      ]},
      { type: "section", heading: "The brief", text: [
        "Carte blanche: make the weekend feel like a national tradition from day one."
      ]},
      { type: "section", heading: "The idea", text: [
        "[Describe in 2 sentences what the logo is: e.g. “A holiday house full of friends, under a ribbon banner like an official seal: part holiday-park sign, part national holiday.”] I explored [x] directions, each built on a different side of a weekend away: [e.g. the journey, the house, the group, the party]. The one we chose got the strongest reaction, and the logo was approved at the first pitch with no changes."
      ]},
      { type: "grid", columns: 4, items: [
        { label: "Direction 1" }, { label: "Direction 2" }, { label: "Direction 3" }, { label: "Chosen direction" }
      ], caption: "The explored directions, chosen one marked (to make)" },
      { type: "section", heading: "The roll-out", text: [
        "From one logo to everything the weekend touched: print, display and social campaigns, studio screens, web, and branded beer and champagne bottles for the weekend itself."
      ]},
      { type: "canvas", item: { label: "Format canvas — social, display, studio screen and web on one blue background (to make)" } },
      { type: "split", items: [
        { label: "Bingo board, welcome card and coaster on one table (CSZ26222)" },
        { label: "Pitch & Putt and Escape signs on easels (CSZ13035)" }
      ]},
      { type: "split", items: [
        { label: "Beer bottle" },
        { label: "Champagne bottle" }
      ]},
      { type: "hero", item: { label: "The weekend itself — drone shot of the branded house by the water (DJI_0041)" }, caption: "Photos: [photographer]" }
    ]
  },
  "mediahuis-radio": {
    title: "Brand in daily use",
    status: "live",
    category: "campaign",
    card: {
      title: "Mediahuis Radio — Brand in daily use",
      eyebrow: "Campaigns",
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
    hero: { label: "Hero — a studio with your screen design live on air, or the A0 poster in place" },
    hook: "Not every brief is a billboard.",
    blocks: [
      { type: "section", text: [
        "Most days I'm making three very different radio brands work in a hundred small places: studio screens (static and animated), A0 posters, 9:16 screens, social ads, HTML5 banners, and the prizes listeners win, from mugs to greeting cards to socks. The job is to keep every piece unmistakably Veronica, SLAM! or 100% NL, and still make it feel made for its moment."
      ]},
      { type: "grid", columns: 4, items: [
        { label: "Radio Veronica" }, { label: "Radio Veronica" }, { label: "Radio Veronica" }, { label: "Radio Veronica" },
        { label: "SLAM!" }, { label: "SLAM!" }, { label: "SLAM!" }, { label: "SLAM!" },
        { label: "100% NL" }, { label: "100% NL" }, { label: "100% NL" }, { label: "100% NL" }
      ], caption: "Radio Veronica · SLAM! · 100% NL — 16–20 assets, grouped by brand" },
      { type: "section", heading: "Living a new identity", text: [
        "I started just as Radio Veronica rolled out a new visual identity. I didn't write the guidelines, but I helped bring them to life: updating visuals across every channel, keeping new work in line, and building each new campaign on top of the brand guide. On photoshoots I was second designer on set, checking that every shot fitted the new direction and that we caught the energy of each show."
      ]},
      { type: "section", heading: "Highlights", list: [
        "<strong>SLAM! — Gok van je leven:</strong> my first big campaign at Mediahuis, as the sole designer.",
        "<strong>Radio Veronica — De Beste Muziekquiz Allertijden:</strong> logo and digital campaign for the Top 3000 edition.",
        "<strong>SLAM! — Festivalmaand &amp; ADE:</strong> [one line].",
        "<strong>100% NL — Tijdmachine &amp; Somertijd:</strong> [one line]."
      ]},
      { type: "triptych", ratio: "4 / 5", items: [
        { label: "Social post 1080×1350" }, { label: "Story 1080×1920" }, { label: "Thumb 1920×1080" }
      ], caption: "SLAM! — Gok van je leven: one key visual in three formats" },
      { type: "split", items: [
        { label: "DBMAT logo on blue" }, { label: "Top 3000 edition" }
      ], caption: "Radio Veronica — De Beste Muziekquiz Allertijden" },
      { type: "hero", item: { label: "Tijdmachine logo concepts (4 directions)" } },
      { type: "triptych", ratio: "9 / 16", items: [
        { label: "Studio screen — Jaren 80" }, { label: "Studio screen — Jaren 90" }, { label: "Studio screen — Jaren 00" }
      ], caption: "100% NL — Tijdmachine: same frame, different decade" },
      { type: "section", heading: "Branded content: from idea to pitch", text: [
        "Next to design, I come up with branded content concepts: ways to weave an advertiser's message into the radio, so it feels like content instead of an ad. I pitch them to station directors, marketing directors and account managers. They range from a quick, sharp radio game for the release of <em>Scream 7</em> on SLAM! (“Win or Die”) to large productions like Jumbo × 100% NL's <em>Het Super Kerstdiner</em>: a full Christmas dinner for 100 listeners inside a Jumbo supermarket. [Check: which parts of each concept were yours?]"
      ]},
      { type: "split", ratio: "16 / 10", items: [
        { label: "Concept board — Scream 7 “Win or Die”" }, { label: "Concept board — Jumbo Het Super Kerstdiner" }
      ]},
      { type: "section", heading: "Making the system better", text: [
        "I'm building an AI-assisted workflow that takes a finished key visual and adapts it to every format, so the designer's time goes to the idea, not the resizing. And I'm redesigning how briefs come in, how work gets checked, and when each team joins."
      ]},
      { type: "breakdown", item: { label: "Optional — the AI format workflow as a simple diagram (key visual → all formats)" } }
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
    hero: { label: "Hero — Tate alone, large, on cream (export at 2400 px)", ratio: "16 / 10" },
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
      { type: "breakdown", item: { label: "Fixed vs changing — one poster with labels: wordmark, cream panel, purple wave, Riot logo vs Tate's scene (to make, start from Guidelines 3)" } },
      { type: "section", heading: "Roll-out", text: [
        "Posters, Instagram posts and stories, and printed invitations hand-delivered to neighbouring offices."
      ]},
      { type: "triptych", ratio: "9 / 16", items: [
        { src: "Assets/Projecten/DoMiBo/web/story-glass.webp", alt: "DoMiBo Instagram story: giant glass" },
        { src: "Assets/Projecten/DoMiBo/web/story-terrace.webp", alt: "DoMiBo Instagram story: terrace" },
        { src: "Assets/Projecten/DoMiBo/web/story-streetcart.webp", alt: "DoMiBo Instagram story: street cart" }
      ], caption: "Instagram stories" },
      { type: "inset", items: [
        { src: "Assets/Projecten/DoMiBo/web/invitation.webp", alt: "DoMiBo printed invitation", caption: "Printed invitation [replace with a photo of a real one]" },
        { label: "Poster on a wall" }
      ]}
    ]
  },
  "patches": {
    title: "Patches & Studio Joons",
    status: "live",
    category: "identity",
    card: {
      title: "Patches & Studio Joons",
      eyebrow: "Identity",
      image: "Assets/Projecten/Patches/web/freakandel-jacket.webp",
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
    hero: { src: "Assets/Projecten/Patches/web/jacket-combi.webp", alt: "Studio Joons patches on a navy jacket sleeve", caption: "[Replace with produced client patches on a jacket]" },
    hook: "Small canvas, big character.",
    blocks: [
      { type: "section", heading: "How it started", text: [
        "A colleague from my graduation internship runs a patch company and asked me to design for his clients. Carnaval patches are tiny brand pieces: they need to read from across a packed café, survive being embroidered, and make people laugh."
      ]},
      { type: "section", heading: "How I work", text: [
        "Some clients arrive with a clear idea, some with nothing at all. I always start with a conversation about what they want and the do's and don'ts, then show 3–5 concepts. We talk through what works, and I refine from there. For Familie Kesbeke I designed four patches, two of which went into production: pickles with attitude, in their own Brabant dialect (“Heé Slappe!”, “Kiek nie zo zuur”)."
      ]},
      { type: "breakdown", item: { label: "Kesbeke concept sheet — 4 designs, the 2 produced ones marked (to make)" } },
      { type: "grid", columns: 3, items: [
        { label: "Kesbeke — Heé Slappe!" }, { label: "Kesbeke — Kiek nie zo zuur" }, { label: "Bakkerijt" },
        { label: "SKD Kozijnen" }, { label: "100% NL" }, { label: "Produced patch" }
      ], caption: "Produced client patches, shot from straight above" },
      { type: "section", heading: "Studio Joons", text: [
        "I also wanted to learn everything that happens after the design: production, pricing, selling. So I started my own small label. The first patches are fried snacks with a wink at <em>Ex on the Beach</em> (FREAKandel, BitterB00Bs), sold at carnaval in Brabant and in <a href=\"shop\">the shop</a>."
      ]},
      { type: "split", ratio: "1 / 1", items: [
        { src: "Assets/Projecten/Patches/web/freakandel-design.webp", alt: "FREAKandel patch design", caption: "FREAKandel — design" },
        { src: "Assets/Projecten/Patches/web/freakandel-jacket.webp", alt: "FREAKandel patch on a jacket", caption: "FREAKandel — the real patch" }
      ]},
      { type: "split", ratio: "1 / 1", items: [
        { src: "Assets/Projecten/Patches/web/bitterboobs-design.webp", alt: "BitterB00Bs patch design", caption: "BitterB00Bs — design" },
        { src: "Assets/Projecten/Patches/web/bitterboobs-jacket.webp", alt: "BitterB00Bs patch on a jacket", caption: "BitterB00Bs — the real patch" }
      ]}
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
