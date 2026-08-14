const { modul } = require('../module');
const { fs } = modul;
const path = require('path')
const { color } = require('./color')

async function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

async function nocache(module, cb = () => { }) {
    const resolvedModule = (() => {
        try {
            return require.resolve(module)
        } catch (_) {
            return require.resolve(path.resolve(process.cwd(), module))
        }
    })()
    console.log(color('Module', 'blue'), color(`'${module} is up to date!'`, 'cyan'))
    fs.watchFile(resolvedModule, async () => {
        await uncache(resolvedModule)
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}
