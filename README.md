# 𝘾𝙃𝙀𝙀𝙈𝙎 𝘽𝙊𝙏-𝙄𝙈𝙋𝙍𝙊𝙑𝙀𝘿 𝙈𝘿8 — 𝙇𝙀𝙇𝙊𝙋

![LELOP Bot Preview](https://raw.githubusercontent.com/Clintonlelop/CheemsBot-IMPROVED-MD8/main/XeonMedia/theme/cheemspic.jpg)

A maintained 2026 deployment build of CheemsBot MD8, customized for **LELOP** and intended for WhatsApp bot deployment.

> **Nigeria-focused support/business contact:** WhatsApp **+234 816 020 8114**

## 👑 Bot Owner

- **Name:** 𝙇𝙀𝙇𝙊𝙋
- **WhatsApp:** [+234 816 020 8114](https://wa.me/2348160208114)
- **Country:** Nigeria

## ✨ Included in this build

- Baileys 6.7.23 compatibility for the existing MD8 codebase
- Fixed startup/store compatibility issues encountered during deployment
- Group command handling improvements
- Anti-link warning system with repeated-violation removal
- Admin checks and group moderation commands
- Fun-command handling/fallbacks
- `pushcontact` messaging with staggered sending delays
- Menu preview image support using the bundled Cheems preview image
- LELOP owner/premium configuration
- WhatsApp Channel link support: https://whatsapp.com/channel/0029VbDlXCo3mFY8hg6bS51V
- Node.js 20+ deployment target

## 🚀 Pterodactyl deployment

### Requirements

- Node.js **20 or newer**
- npm
- FFmpeg
- libwebp
- A WhatsApp account for pairing

### Install from this repository

```bash
git clone https://github.com/Clintonlelop/CheemsBot-IMPROVED-MD8.git
cd CheemsBot-IMPROVED-MD8
npm start
```

The first `npm start` extracts the bundled source and installs dependencies. Later starts reuse the installed copy.

When the QR code appears, scan it from **WhatsApp → Linked devices → Link a device**.

### Pterodactyl startup command

```bash
npm start
```

**Important:** you do not need to run `npm install` on every restart. The deployment wrapper installs dependencies on the first start only.

## 🖥️ VPS / Ubuntu

```bash
sudo apt update
sudo apt install -y git ffmpeg libwebp-dev unzip
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
git clone https://github.com/Clintonlelop/CheemsBot-IMPROVED-MD8.git
cd CheemsBot-IMPROVED-MD8
npm start
```

## 📱 WhatsApp Channel

Bot channel: https://whatsapp.com/channel/0029VbDlXCo3mFY8hg6bS51V

## 🤝 Nigeria Support / Business

For Nigeria-based support and business enquiries, contact **LELOP** directly on WhatsApp:

**+234 816 020 8114**

The repository's bundled source is the complete deployment build. The source archive contains the bot code, media, database files, configuration and deployment files.

## ⚠️ Security

- Do not publish your WhatsApp `session` credentials.
- Keep API keys and secrets in environment variables.
- Do not commit personal authentication/session files to a public repository.

## Credits

This is a customized maintenance/deployment build based on the Cheems Bot MD8 codebase. Upstream authors and project history remain credited in the bundled source.
