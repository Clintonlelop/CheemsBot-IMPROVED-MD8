function createSimpleStore() {
  const contacts = {}
  const chatMap = new Map()
  const messageMap = new Map()

  const normalizeJid = (jid) => (typeof jid === 'string' ? jid : '')

  const rememberChat = (jid) => {
    const id = normalizeJid(jid)
    if (!id) return
    if (!chatMap.has(id)) chatMap.set(id, { id })
  }

  const rememberMessage = (msg) => {
    const jid = normalizeJid(msg?.key?.remoteJid)
    const id = normalizeJid(msg?.key?.id)
    if (!jid || !id) return
    rememberChat(jid)
    messageMap.set(`${jid}:${id}`, msg)
  }

  return {
    contacts,
    chats: {
      all: () => Array.from(chatMap.values())
    },
    bind: (ev) => {
      if (!ev || typeof ev.on !== 'function') return

      ev.on('messages.upsert', ({ messages }) => {
        if (!Array.isArray(messages)) return
        for (const msg of messages) rememberMessage(msg)
      })

      ev.on('chats.upsert', (chats = []) => {
        for (const chat of chats) rememberChat(chat?.id)
      })

      ev.on('chats.update', (chats = []) => {
        for (const chat of chats) rememberChat(chat?.id)
      })

      ev.on('contacts.upsert', (updated = []) => {
        for (const contact of updated) {
          const id = normalizeJid(contact?.id)
          if (!id) continue
          contacts[id] = { ...(contacts[id] || {}), ...contact, id }
        }
      })

      ev.on('contacts.update', (updated = []) => {
        for (const contact of updated) {
          const id = normalizeJid(contact?.id)
          if (!id) continue
          contacts[id] = { ...(contacts[id] || {}), ...contact, id }
        }
      })
    },
    loadMessage: async (jid, id) => {
      const key = `${normalizeJid(jid)}:${normalizeJid(id)}`
      return messageMap.get(key) || null
    }
  }
}

module.exports = { createSimpleStore }
