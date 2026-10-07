const { createMollieClient } = require('@mollie/api-client');

const mollieClient = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY });

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Mollie delivers payload as x-www-form-urlencoded with an 'id' param
    const params = new URLSearchParams(event.body);
    const paymentId = params.get('id');

    if (!paymentId) {
      return { statusCode: 400, body: 'Missing payment ID' };
    }

    // Always fetch payment status directly from Mollie's API
    const payment = await mollieClient.payments.get(paymentId);

    if (payment.isPaid()) {
      const order = payment.metadata;
      console.log(`[PAID] Order ${order.orderId} successfully completed for ${order.customerEmail}`);
      // Fulfillment hook: Send dispatch confirmation email or trigger order log
    } else if (payment.isCanceled() || payment.isExpired() || payment.hasFailed()) {
      console.log(`[INCOMPLETE] Payment ${paymentId} status: ${payment.status}`);
    }

    // Always return HTTP 200 to acknowledge delivery to Mollie
    return {
      statusCode: 200,
      body: 'OK',
    };
  } catch (error) {
    console.error('Webhook Error:', error);
    return { statusCode: 500, body: error.message };
  }
};