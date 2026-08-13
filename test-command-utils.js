const assert = require('assert')
const { getCommandPrefix } = require('./lib/command-utils')

global.prefa = ['!', '.', '#', '&']

assert.strictEqual(getCommandPrefix('!menu', global.prefa), '!')
assert.strictEqual(getCommandPrefix('.ping', global.prefa), '.')
assert.strictEqual(getCommandPrefix('menu', global.prefa), '')
assert.strictEqual(getCommandPrefix('!menu', ['!', '/']), '!')
assert.strictEqual(getCommandPrefix('menu', []), '')

console.log('command-utils tests passed')
