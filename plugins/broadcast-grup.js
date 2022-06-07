const fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
	const q = {"key": {"participants":"0@s.whatsapp.net","remoteJid": "status@broadcast","fromMe": false,"id": ""},"message": {"contactMessage": {"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}},"participant": "0@s.whatsapp.net"}
    let groups = Object.keys(await conn.groupFetchAllParticipating())
    m.reply(`_mengirim pesan siaran ke ${groups.length} grup_\nestimasi selesai ${groups.length * 1.5} detik`)
    for (let id of groups) {
        let bg = 'https://telegra.ph/file/5ace1bc56f072d311ac44.jpg'
        await conn.delay(1500)
        await conn.sendButtonDoc(id, text, wm, 'Menu', '.menu', q, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: 'https://pilarv2.github.io',
    mediaType: 2,
    description: wm, 
    title: 'BY PILAR',
    body: wm,
    thumbnail: await(await fetch(bg)).buffer(),
    sourceUrl: 'https://pilarv2.github.io'
     }}
  })
    }
    m.reply('*Selesai*')
}
handler.help = ['bcgc <text>']
handler.tags = ['lain']
handler.command = /^(broadcastgc|bcgc)$/i

handler.owner = true

module.exports = handler