## Values to Replace

The following values are placeholders and must be updated before going live.

**Files containing placeholders:**
- [server/server.js](server/server.js)
- [server/.env](server/.env)

| Field | Current Value | What to Set |
|-------|--------------|-------------|
| mode | payment | Set to "payment" for one-time charges or "subscription" for recurring billing. |
|| success_url | https://joni-bit.github.io/STUDIO-JOONS/shop.html?success=true&session_id={CHECKOUT_SESSION_ID} | Your actual post-payment success page URL. Keep the {CHECKOUT_SESSION_ID} template. |
|| cancel_url | https://joni-bit.github.io/STUDIO-JOONS/shop.html | Your actual cancel/return page URL. |
| line_items[].price | price_... | Your actual Stripe Price ID from the Dashboard (https://dashboard.stripe.com/prices) or API. |

## Configured Parameters

These parameters were configured in Checkout Studio and are already set correctly.

**Files containing these parameters:**
- [server/server.js](server/server.js)

| Parameter | Value |
|-----------|-------|
| ui_mode | hosted_page |
| billing_address_collection | auto |
| phone_number_collection.enabled | false |
| automatic_tax.enabled | false |
| allow_promotion_codes | false |
| submit_type | auto |
| shipping_address_collection.allowed_countries | ["NL"] |
| name_collection.individual.enabled | true |
| integration_identifier | hosted_web_0001 |
| origin_context | web |

## Setup and Next Steps

1. **Initialize the Server:** Navigate to the `server/` directory in your terminal and run `npm init -y`, then `npm install express cors dotenv stripe`.
2. **Environment Variables:** Update the keys in `server/.env` with your actual test or live keys from the Stripe Dashboard.
3. **Dynamic Line Items:** Currently, `server.js` hardcodes a single `price_...` in `line_items`. You will need to parse `req.body` to accept the array of cart items passed from `shop.html` and construct the `line_items` array dynamically.
4. **Hosting:** Deploy your `server` directory to a Node.js hosting provider (such as Render, Heroku, or adapt it to Netlify Functions). Once deployed, update the `backendUrl` in `shop.html` to point to your new live server URL.
5. **Testing:** Run the server locally using `node server.js` to verify checkout redirects via localhost before deploying. Use test credit cards from the Stripe documentation to verify payments.
6. **Webhooks:** Once deployed, set up a Stripe webhook endpoint to securely listen for `checkout.session.completed` events for order fulfillment and email confirmations.
7. **Resources:** See https://support.stripe.com and https://docs.stripe.com/mcp for further setup documentation.
