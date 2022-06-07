let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
Hi, %name
%readmore`.trim(),
  header: '❏ %category',
  body: '»» %cmd %islimit %isPremium',
  footer: ``,
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'main','downloader','lain','group','anon','gem','maker']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'MENU UTAMA',
  'downloader': 'MENU DOWNLOADER',
  'lain': 'MENU LAINNYA',
  'group': 'MENU GROUP',
  'gem': 'MENU RPG & GAME',
  'maker': 'MENU MAKER',
  'tools': 'MENU TOOLS',
  'anon': 'MENU Anonymous-Chat',
  }
  if (teks == 'main') tags = {
    'main': 'MENU UTAMA'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'MENU DOWNLOADER'
  }
  if (teks == 'lain') tags = {
    'lain': 'MENU LAINNYA'
}
  if (teks == 'group') tags = {
    'group': 'MENU GROUP'
}
   if (teks == 'anon') tags = {
    'anon': 'MENU ANONYMOUS'
}
  if (teks == 'gem') tags = {
    'gem': 'MENU RPG & GAME'
}
  if (teks == 'maker') tags = {
    'maker': 'MENU MAKER'
}
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let tag = `@${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let premium = global.db.data.users[m.sender].premiumTime
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let lmafo = `Ⓟ = Premium
Ⓛ = Limit`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      let menuu = `❏  *I N F O*
▸ *${ucapan()}*
▸ *Tag:* ${tag}
▸ *Limit:* ${limit}
▸ *Status: ${global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? 'Owner 🥶' : 'Users'}*
▸ *Premium:* ${premium ? '✅' : '❌'}
▸ *Date:* ${week} ${weton} ${date}
▸ *Time:* ${wib}
▸ *Runtime:* ${uptime} ( ${muptime} )`
      const sections = [
      {
        title: 'List Menu ' + namabot,
        rows: [
          { title: 'Semua Perintah', rowId: `${_p}? all` },
          { title: 'Menu Download', rowId: `${_p}? downloader` },
          { title: 'Menu Anonymous', rowId: `${_p}? anon` },
          { title: 'Menu Group', rowId: `${_p}? group` },
        ]
      }
    ]
    const listMessage = {
      text: menuu,
      footer: wm,
      mentions: await conn.parseMention(menuu),
      title: '',
      buttonText: "Klik Disini",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(menuu), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }

    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    conn.send2TemplateButtonFakeImg(m.chat, await (await fetch('https://telegra.ph/file/eebdf5596deee0a21cc96.jpg')).buffer(), text.trim(),`${ucapan()}\n${lmafo}\n${wm}`, `Owner`, `.owner`, `Thanks`, `.tqto`, m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m(enu)?|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat DiniHari🌃"
  if (time >= 4) {
    res = "Selamat Pagi🌄"
  }
  if (time > 10) {
    res = "Selamat Siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore🌇"
  }
  if (time >= 18) {
    res = "Selamat Malam🌌"
  }
  return res
}

function gambar() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  if (time >= 5) {
    res = fs.readFileSync('./media/pagi.jpg')
  }
  if (time > 9) {
    res = fs.readFileSync('./media/siang.jpg')
  }
  if (time >= 15) {
    res = fs.readFileSync('./media/sore.jpg')
  }
  if (time >= 19) {
    res = fs.readFileSync('./media/malam.jpg')
  }
  return res
}