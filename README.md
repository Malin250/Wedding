# Asifiwe & Didier wedding invitation

A bilingual, responsive invitation for 13 December 2026 in Rubavu — Gisenyi. It is a static website: there is no build step, account, database, or RSVP backend.

## Preview

Open index.html in a browser. Choose English or Ikinyarwanda, then tap the invitation card. The card opens, the song starts, and the page reveals the event details. The full-screen opening and hero use a changing photo slideshow with soft fireflies and shooting stars. In the gallery, hover or focus a photo on desktop; on phones, each photo gently zooms while its name and message appear before the gallery advances. Guests can pause or resume music with the floating music control.

## Share it online

Publish the complete asifiwe-didier-invitation folder with a static website host. The folder is ready for static hosting, and includes a Netlify publish setting. Once hosted, share the public URL; the Share button uses the phone’s share sheet where supported and copies the page address on supported desktop browsers.

After the host gives you a URL, update the og:image and twitter:image metadata in index.html to use the full absolute URL of the hosted assets/og-image.webp file. This lets messaging and social apps find the preview image reliably.

## What is included

- The names, date, schedule, venue names, contact numbers, map links, photographs, and song supplied with the invitation.
- A live countdown and calendar links.
- English and Kinyarwanda copy controls.
- No placeholder RSVP phone number or server-side form.

To update the schedule or venue details, edit index.html. Language-specific labels and countdown/share messages are in script.js. Photos and the song are under assets/.
