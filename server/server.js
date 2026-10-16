// server/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// De Stripe prijzen direct koppelen aan de woorden
const getPriceId = (productName) => {
  const name = String(productName).toLowerCase();
  
  if (name.includes('freakandel')) {
    return 'price_1UQBBJJNmwSZDWmLCBnigRHd'; 
  }
  if (name.includes('bitterboobs') || name.includes('bitterb00bs')) {
    return 'price_1UQBCyJNmwSZDWmLfdaLcrrW';
  }
  return null;
};

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    console.log("Inkomende bestelling:", req.body); // Laat ons de order zien in de logs!

    const cartItems = req.body.items;

    if (!cartItems || cartItems.length === 0) {
      throw new Error("Winkelwagen is leeg");
    }

    const lineItems = [];

    // Koppel de producten
    cartItems.forEach(item => {
      const stripePriceId = getPriceId(item.id);
      
      if (stripePriceId) {
        lineItems.push({
          price: stripePriceId,
          quantity: parseInt(item.quantity) || 1
        });
      }
    });

    if (lineItems.length === 0) {
      throw new Error(`Geen geldige producten gevonden. Ontvangen ID's: ${cartItems.map(i => i.id).join(', ')}`);
    }

    // Kassa opstarten
const sessionParams = {
  ui_mode: "hosted_page",
  billing_address_collection: "auto",
  shipping_address_collection: { allowed_countries: ["NL", "BE"] },
  
  // HIER VOEG JE DE VERZENDKOSTEN TOE:
  shipping_options: [
    {
      shipping_rate: 'shr_1URCVLJNmwSZDWmLXoDqMeDQ', 
    }
  ],

  mode: "payment",
  success_url: `${process.env.DOMAIN}/shop.html?success=true`,
  cancel_url: `${process.env.DOMAIN}/shop.html`,
  line_items: lineItems,
};

    const session = await stripe.checkout.sessions.create(sessionParams);
    res.json({ url: session.url });
    
  } catch (error) {
    console.error("Fout:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => console.log("Server running on port 4242"));
