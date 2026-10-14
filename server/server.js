// server/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());

// DIT IS DE "MAP"! Een digitaal lijstje dat jouw winkelwagen linkt aan Stripe.
const stripePriceMap = {
  'freakandel': 'price_1UQBCyJNmwSZDWmLfdaLcrrW',  // Begint met price_...
  'bitterboobs': 'price_1UQBBJJNmwSZDWmLCBnigRHd' // Begint met price_...
};

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const cartItems = req.body.items; // De items die van de website komen

    if (!cartItems || cartItems.length === 0) {
      throw new Error("Winkelwagen is leeg");
    }

    // Zet de website-items om naar officiële Stripe items
    const lineItems = cartItems.map(item => {
      return {
        price: stripePriceMap[item.id],
        quantity: item.quantity
      };
    }).filter(item => item.price); // Negeer items die niet in het lijstje staan

    if (lineItems.length === 0) {
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
