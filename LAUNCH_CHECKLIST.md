# Intellivis.AI launch checklist

## Before publishing

- Connect the production deployment to `https://intellivis.ai`.
- Configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `SMTP_FROM` in Vercel. For Gmail, use a Google App Password rather than the normal account password.
- Submit a real contact-form message and confirm it arrives at `vichu110602@gmail.com` with Reply-To set to the visitor's email.
- Confirm `intellivisailabs@gmail.com` is monitored and has a professional signature.
- Check every GitHub and social link.
- Run `npm run build` and `npm run lint`.

## After publishing

- Add and verify `intellivis.ai` in Google Search Console.
- Submit `https://intellivis.ai/sitemap.xml` in Search Console.
- Inspect `https://intellivis.ai/` with Search Console URL Inspection and request indexing.
- Validate the JSON-LD using Google Rich Results Test and Schema.org Validator.
- Test the social preview for LinkedIn, Slack, WhatsApp, and X.
- Test the contact form from a phone and desktop browser.
- Confirm `/robots.txt`, `/sitemap.xml`, `/logo.svg`, and `/og-image.png` are publicly accessible.

## Content needed next

- Publish one working AI-agent demo.
- Add the first genuine customer or pilot case study.
- Explain the starting problem, Crawl phase, Walk phase, result, and guardrails.
- Add a privacy policy before collecting sensitive project information.
