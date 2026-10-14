// server/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// DIT IS DE "MAP"! Nu super-resistent gemaakt tegen typefouten, hoofdletters en spaties
const stripePriceMap = {
  'freakandel': 'price_1UQBCyJNmwSZDWmLfdaLcrrW',
  'freakandelembleem': 'price_1UQBCyJNmwSZDWmLfdaLcrrW',
  'bitterboobs': 'price_1UQBBJJNmwSZDWmLCBnigRHd',
  'bitterb00bs': 'price_1UQBBJJNmwSZDWmLCBnigRHd',
  'bitterb00bsembleem': 'price_1UQBBJJNmwSZDWmLCBnigRHd'
};

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const cartItems = req.body.items; // De items die van de website komen

    if (!cartItems || cartItems.length === 0) {
      throw new Error("Winkelwagen is leeg");
    }

    const lineItems = [];

    // Filter de inkomende namen zodat we altijd een perfecte match vinden
    cartItems.forEach(item => {
      // Haal spaties en leestekens weg en maak er kleine letters van
      const safeId = String(item.id).toLowerCase().replace(/[^a-z0-9]/g, '');
      const stripePriceId = stripePriceMap[safeId];
      
      if (stripePriceId) {
        lineItems.push({
          price: stripePriceId,
          quantity: item.quantity
        });
      }
    });

    if (lineItems.length === 0) {
      console.error("Onbekende IDs ontvangen van website:", cartItems);
      throw new Error("Geen geldige producten gevonden in winkelwagen.");
    }

    // Maak de kassa aan met iDEAL, Adresvelden, etc.
    const sessionParams = {
      ui_mode: "hosted_page",
      billing_address_collection: "auto",
      shipping_address_collection: { allowed_countries: ["NL", "BE"] },
      mode: "payment",
      success_url: `${process.env.DOMAIN}/shop.html?success=true`,
      cancel_url: `${process.env.DOMAIN}/shop.html`,
      line_items: lineItems,
    };

    const session = await stripe.checkout.sessions.create(sessionParams);
    
    // Stuur de kassa-link veilig terug naar de website
    res.json({ url: session.url });
    
  } catch (error) {
    console.error("Fout:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => console.log("Server running on port 4242"));
