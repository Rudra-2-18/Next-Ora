# The Next Ora

Production-ready website + inquiry backend for **The Next Ora**.

## Business Profile
- Brand Name: The Next Ora
- Tagline: Smart Digital Growth for Local Businesses
- Business Type: Digital Solutions Firm
- Phone / WhatsApp: +91 9313495498
- Email: patelrudra9313@gmail.com
- Service Areas: Ahmedabad & Surat (India)

## Tech Stack
- Frontend: HTML5, CSS3, Vanilla JavaScript, Fetch API, JSON
- Backend: PHP MVC-style structure
- Database: MySQL

## Project Structure
```text
the-next-ora/
+-- index.html
+-- services.html
+-- packages.html
+-- about.html
+-- contact.html
+-- assets/
¦   +-- css/style.css
¦   +-- js/main.js
¦   +-- js/services.js
¦   +-- js/packages.js
¦   +-- js/form.js
¦   +-- images/
+-- data/
¦   +-- services.json
¦   +-- packages.json
+-- backend/
¦   +-- config/database.php
¦   +-- controllers/InquiryController.php
¦   +-- models/Inquiry.php
¦   +-- routes/web.php
¦   +-- public/submit-inquiry.php
+-- database/inquiries.sql
+-- README.md
```

## Setup (Local)
1. Place `the-next-ora` inside your web root (`htdocs`, `www`, etc.).
2. Import SQL from `database/inquiries.sql` into MySQL.
3. Configure DB credentials via environment variables:
   - `DB_HOST`
   - `DB_PORT`
   - `DB_DATABASE`
   - `DB_USERNAME`
   - `DB_PASSWORD`
4. If env vars are unavailable, edit fallback values in `backend/config/database.php`.
5. Open `http://localhost/the-next-ora/`.

## Inquiry Form Flow
- `contact.html` submits via AJAX (`fetch`) to `backend/public/submit-inquiry.php`.
- `InquiryController` sanitizes and validates all fields.
- `Inquiry` model checks duplicate spam submissions (10-minute window).
- Valid submissions are stored in MySQL table `inquiries`.
- Backend returns JSON success/error messages.

## Deploy on Shared Hosting
1. Upload `the-next-ora` to `public_html` or domain root.
2. Create a MySQL database from hosting panel.
3. Import `database/inquiries.sql`.
4. Configure DB credentials in env vars or `backend/config/database.php`.
5. Ensure PHP 8.0+ and PDO MySQL extension are enabled.
6. Test contact form and confirm rows are saved in `inquiries`.

## Update Contact Details Everywhere
Update all occurrences in:
- `index.html`
- `services.html`
- `packages.html`
- `about.html`
- `contact.html`
- `assets/js/services.js`
- `assets/js/packages.js`

Replace:
- Phone / WhatsApp: `+919313495498`
- Email: `patelrudra9313@gmail.com`
- WhatsApp URL base: `https://wa.me/919313495498`

## Notes
- SEO basics are implemented per page (title + description + semantic headings).
- UI is mobile-first, responsive, and follows the specified premium visual system.
- Clean URLs can be enabled with hosting rewrite rules if required.
