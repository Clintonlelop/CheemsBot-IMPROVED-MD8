CHEEMSBOT MD8 — FRESH INSTALL
==============================

This archive is a COMPLETE SOURCE BUILD. It intentionally does NOT contain a
WhatsApp session, so the bot will ask for a fresh QR login.

PTERODACTYL / VPS
------------------
1. Stop the old server.
2. Remove the old bot files from the server (or use a fresh server directory).
3. Upload and extract this entire archive.
4. Do NOT create a session folder manually.
5. Run:

   npm install

6. Start:

   npm start

7. A QR code should appear in the console. Scan it from WhatsApp > Linked
   Devices > Link a device.

IMPORTANT
---------
- Node.js 20+ is recommended.
- Git should be installed if you use commands that depend on simple-git.
- Do NOT upload an old session into this build. Fresh pairing is intentional.
- The OpenAI key is read from OPENAI_API_KEY instead of being embedded in the
  source. Leave it empty if you don't use those commands.
- The OMDb key is read from OMDB_API_KEY instead of being embedded in the
  source. Leave it empty if you don't use the movie-search command.
- Your owner number is configured in settings.js and database/owner.json.
- The bot's persistent anti-link strike file starts empty.

WHAT IS INCLUDED
----------------
- Full lib/ directory
- Full scrape/ directory
- Full XeonMedia/ and HostMedia/ assets
- database files required by startup/commands
- patched XeonCheems8.js
- patched index.js
- patched settings.js
- all original command assets
- anti-link warning persistence
- private-message/LID handling improvements
- fun command API fallback improvements
- broadcast delay implementation
- updated official channel URL

ANTI-LINK BEHAVIOR
------------------
For enabled anti-link groups, normal members get 3 strikes:
1st link -> delete + warning 1/3
2nd link -> delete + warning 2/3
3rd link -> delete + remove member

Admin/owner messages are exempt from the anti-link enforcement.
Strike counts are stored in database/antilinkwarnings.json and survive restarts.
