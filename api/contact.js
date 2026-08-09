import nodemailer from 'nodemailer';

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, website = '' } = request.body ?? {};

  // Hidden honeypot: bots commonly fill this, people never see it.
  if (typeof website === 'string' && website.length > 0) {
    return response.status(200).json({ ok: true });
  }

  const cleanName = typeof name === 'string' ? name.trim().slice(0, 100) : '';
  const cleanEmail = typeof email === 'string' ? email.trim().slice(0, 254) : '';
  const cleanMessage = typeof message === 'string' ? message.trim().slice(0, 5000) : '';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (cleanName.length < 2 || !emailPattern.test(cleanEmail) || cleanMessage.length < 10) {
    return response.status(400).json({ error: 'Please provide a valid name, email, and message.' });
  }

  const { SMTP_HOST, SMTP_PORT = '587', SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('SMTP environment variables are not configured.');
    return response.status(503).json({ error: 'Email service is temporarily unavailable.' });
  }

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const safeName = escapeHtml(cleanName);
  const safeEmail = escapeHtml(cleanEmail);
  const safeMessage = escapeHtml(cleanMessage).replaceAll('\n', '<br />');

  try {
    await transporter.sendMail({
      from: `Intellivis Website <${SMTP_FROM || SMTP_USER}>`,
      to: 'vichu110602@gmail.com',
      replyTo: cleanEmail,
      subject: `New Intellivis enquiry from ${cleanName.replace(/[\r\n]/g, ' ')}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
      html: `<h2>New Intellivis website enquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong></p><p>${safeMessage}</p>`,
    });
    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('SMTP delivery failed:', error instanceof Error ? error.message : 'Unknown error');
    return response.status(502).json({ error: 'Message delivery failed. Please try again.' });
  }
}
