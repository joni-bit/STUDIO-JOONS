// server/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
// DE FIX: Importeer Stripe op de juiste, moderne manier
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

// Sta verzoeken toe vanaf jouw GitHub Pages domein
app.use(cors());
app.use(express.json());

app.post("/api/create-checkout-session", async (req, res) => {
  const mode = "payment";

  // Checkout sessie configuratie volgens Stripe's vereisten
  const sessionParams = {
    ui_mode: "hosted_page",
    billing_address_collection: "auto",
    phone_number_collection: {
      enabled: false
    },
    automatic_tax: {
      enabled: false
    },
    allow_promotion_codes: false,
    submit_type: "auto",
    shipping_address_collection: {
      allowed_countries: ["NL"]
    },
    name_collection: {
      individual: {
        enabled: true
      }
    },
    integration_identifier: "hosted_web_0001",
    origin_context: "web",
    mode: mode,
    success_url: `${process.env.DOMAIN}/shop.html?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.DOMAIN}/shop.html`,
    // Zorg dat de line_items overeenkomen met jouw producten in Stripe
    line_items: [{ price: "price_...", quantity: 1 }], 
  };

  try {
    const session = await stripe.checkout.sessions.create(sessionParams);
    res.json({ url: session.url });
  } catch (error) {
    console.error("Fout bij aanmaken sessie:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => console.log("Server running on port 4242"));
