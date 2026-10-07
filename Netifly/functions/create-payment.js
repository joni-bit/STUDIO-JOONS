const { createMollieClient } = require('@mollie/api-client');

// Initialize Mollie with the private key from your environment variables
const mollieClient = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY });

// Authoritative product catalog: Prices here override anything sent from the browser
const AUTHORITATIVE_CATALOG = {
  freakandel: {
    name: 'FREAKandel embleem',
    price: 6.95,
  },
  bitterboobs: {
    name: 'BitterB00Bs embleem',
    price: 6.95,
  },
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { items, customerEmail } = JSON.parse(event.body || '{}');

    if (!items || !Array.isArray(items) || items.length === 0) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Cart is empty or invalid.' }),
      };
    }

    if (!customerEmail || !customerEmail.includes('@')) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'A valid customer email is required.' }),
      };
    }

    let calculatedTotal = 0;
    const validatedItems = [];

    // Recalculate price authoritatively
    for (const clientItem of items) {
      const catalogItem = AUTHORITATIVE_CATALOG[clientItem.id];
      if (!catalogItem) {
        return {
          statusCode: 400,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ error: `Unknown item: ${clientItem.id}` }),
        };
      }

      const qty = Math.max(1, parseInt(clientItem.quantity, 10) || 1);
      calculatedTotal += catalogItem.price * qty;
      validatedItems.push({
        id: clientItem.id,
        name: catalogItem.name,
        unitPrice: catalogItem.price,
        quantity: qty,
      });
    }

    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const siteUrl = process.env.SITE_URL || 'http://localhost:8888';

    const payment = await mollieClient.payments.create({
      amount: {
        currency: 'EUR',
        value: calculatedTotal.toFixed(2), // Mollie format requires 2 decimal string
      },
      description: `Studio Joons Drop - ${validatedItems.map((i) => `${i.quantity}x${i.name}`).join(', ')}`,
      redirectUrl: `${siteUrl}/order-status.html?order_id=${orderId}`,
      webhookUrl: `${siteUrl}/.netlify/functions/mollie-webhook`,
      metadata: {
        orderId,
        customerEmail,
        items: validatedItems,
      },
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        checkoutUrl: payment.getCheckoutUrl(),
        orderId,
      }),
    };
  } catch (error) {
    console.error('Mollie Creation Error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message || 'Payment initialization failed.' }),
    };
  }
};