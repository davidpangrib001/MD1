let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let handler = m => m
handler.all = async function (m) {
	let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		global.axios = require('axios')
		global.request = require('request')
		global.users = global.db.data.users[m.sender]
		global.chats = global.db.data.chats[m.chat]
		global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		global.fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./src/logo.jpg'), thumbnail: require('fs').readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
   const jam = moment.tz('Asia/Jakarta').format('HH')
 var ucapanWaktu = 'Selamat Pagi 🌄'
				if (jam >= '03' && jam <= '10') {
				ucapanWaktu = 'Selamat Pagi 🌄'
				} else if (jam >= '10' && jam <= '13') {
				ucapanWaktu = 'Selamat Siang ☀️'
				} else if (jam >= '13' && jam <= '18') {
				ucapanWaktu = 'Selamat Sore 🌅'
				} else if (jam >= '18' && jam <= '23') {
				ucapanWaktu = 'Selamat Malam 🌙'
				} else {
				ucapanWaktu = 'Selamat Malam 🌙'
				}
  global.fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": ``,
                  "h": `By PilarSlebew`,
                  'duration': '99999', 
                  'gifPlayback': 'true', 
                  'caption': `${ucapanWaktu}`
   }                  
   }                
   }                  
	}
}

module.exports = handler