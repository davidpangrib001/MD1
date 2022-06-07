let fetch = require('node-fetch')
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .simi halo`
  let api = await fetch(`https://simsimi.info/api/?text=${text}&lc=id`)
  let res = await api.json()
  m.reply(res.success)
}
handler.command = /^(simi)$/i

module.exports = handler