# 𝘾𝙃𝙀𝙀𝙈𝙎 𝘽𝙊𝙏-𝙄𝙈𝙋𝙍𝙊𝙑𝙀𝘿 𝙈𝘿8 — 𝙇𝙀𝙇𝙊𝙋

![LELOP Bot Preview](https://raw.githubusercontent.com/Clintonlelop/CheemsBot-IMPROVED-MD8/main/XeonMedia/theme/cheemspic.jpg)

A maintained 2026 deployment build of CheemsBot MD8, customized for **LELOP** and intended for WhatsApp bot deployment in Nigeria.

## 👑 Owner / Business

- **Name:** 𝙇𝙀𝙇𝙊𝙋
- **WhatsApp:** [+234 816 020 8114](https://wa.me/2348160208114)
- **Country:** Nigeria

## ✨ Build highlights

- Baileys 6.7.23 compatibility for the existing MD8 codebase
- Fixed startup/store compatibility issues encountered during deployment
- Group command handling and moderation
- Anti-link warning system with repeated-violation removal
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

### From GitHub

```bash
git clone https://github.com/Clintonlelop/CheemsBot-IMPROVED-MD8.git
cd CheemsBot-IMPROVED-MD8
npm install --legacy-peer-deps
npm start
```

Use **`npm start`** as the Pterodactyl startup command. Dependencies only need to be installed after a fresh deployment or dependency change; you do not need to reinstall them on every restart.

When the QR code appears, scan it from **WhatsApp → Linked devices → Link a device**.

### Pterodactyl startup command

```bash
npm start
```

## 🖥️ VPS / Ubuntu

```bash
sudo apt update
sudo apt install -y git ffmpeg libwebp-dev unzip
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
git clone https://github.com/Clintonlelop/CheemsBot-IMPROVED-MD8.git
cd CheemsBot-IMPROVED-MD8
npm install --legacy-peer-deps
npm start
```

## 📱 WhatsApp Channel

[**Join the LELOP WhatsApp Channel**](https://whatsapp.com/channel/0029VbDlXCo3mFY8hg6bS51V)

## 🤝 Nigeria Support / Business

For Nigeria-based support and business enquiries, contact **𝙇𝙀𝙇𝙊𝙋** directly on WhatsApp:

**+234 816 020 8114**

### 🇳🇬 Support Channel

Use the official LELOP WhatsApp Channel above for updates, support information and Nigeria-focused business announcements.

## ⚠️ Security

- Do not publish your WhatsApp session credentials.
- Keep API keys and secrets in environment variables.
- Do not commit personal authentication/session files to a public repository.

## Credits

This is a customized maintenance/deployment build based on the Cheems Bot MD8 codebase. Upstream authors and project history remain credited in the bundled source.
