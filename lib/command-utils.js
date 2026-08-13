function getCommandPrefix(body, prefixes = global.prefa || ['!']) {
  if (typeof body !== 'string' || body.length === 0) return ''

  const prefixList = Array.isArray(prefixes) ? prefixes : [prefixes]
  for (const prefix of prefixList) {
    if (typeof prefix === 'string' && prefix.length > 0 && body.startsWith(prefix)) {
      return prefix
    }
  }

  return ''
}

module.exports = { getCommandPrefix }
