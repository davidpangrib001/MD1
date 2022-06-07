let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Sayonara , , ! (≧ω≦)ゞ', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc']
handler.tags = ['lain']
handler.command = /^(out|leavegc)$/i

handler.rowner = true

module.exports = handler