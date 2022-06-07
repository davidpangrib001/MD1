let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let moment = require('moment-timezone')
let premium = `
◩ *FREE USER*
└───────
 └❎ Unlimited Limit
 └❎ Premium User 
 └❎ Add Bot to Group 
  
◩ *PREMIUM USER*
└───────
 └✅ Unlimited Limit 
 └✅ Premium User 
 └❎ Add Bot to Group 
   └  ▹  *Rp. 5.000*
     └ Expired 3 hari
 └ Order | hub : owner
`
     const sections = [
      {
        title: 'List Menu ' + namabot,
        rows: [
          { title: 'MENU', rowId: `.menu` },
          { title: 'OWNER', rowId: `.owner` },
          { title: 'DONASI', rowId: `.donasi` },
}
    ]
      }
    ]
    const listMessage = {
      text: premium,
      footer: wm,
      mentions: await conn.parseMention(premium),
      title: '',
      buttonText: "Klik Disini",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})}
handler.help = ['sewabot ( SewaBot & Buy Premium )']
handler.tags = ['main']
handler.command = /^(premium|sewa|\price)$/i

module.exports = handler