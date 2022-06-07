let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Three [6289625556161]
│ • Dana  [6289625556161]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6289625556161
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.tags = ['main']
handler.command = /^dona(te|si)$/i

module.exports = handler