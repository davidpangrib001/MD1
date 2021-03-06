let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://melcanz.com': 'wEDTUsWj',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

global.wm = 'Zeusbotz@pilardev'
global.wait = '_*ð¬ðððð§ð  ðð¢ ð©ð«ð¨ð¬ðð¬ ...*_'
global.eror = '_*Ð¼Î±Î±Æ ÑÑÑÎ½ÑÑ ÑÎ¹âÎ±Ðº ÑÑÎ±Ð²Î¹â..*_'

//========Url Template Buttons=========//
global.dtu = 'My Website'
global.urlnya = "https://PilarV2.github.io"

//============= callButtons =============//
global.dtc = 'á´á´ÊÊ á´á´¡É´á´Ê'
global.phn = '+62 896 2555 6161'

//============= Games ================//
global.benar = '_*Benarâ*_'
global.salah = '_*Salahâ*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 200 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'ð§¬',
      limit: 'ð',
      healt: 'â¤ï¸',
      exp: 'âï¸',
      money: 'ðµ',
      potion: 'ð¥¤',
      diamond: 'ð',
      common: 'ð¦',
      uncommon: 'ð',
      mythic: 'ð³ï¸',
      legendary: 'ðï¸',
      pet: 'ð',
      sampah: 'ð',
      armor: 'ð¥¼',
      fishingrod: 'ð£',
      pickaxe: 'âï¸',
      sword: 'âï¸',
      kayu: 'ðªµ',
      batu: 'ðª¨',
      iron: 'âï¸',
      string: 'ð¸ï¸',
      kuda: 'ð',
      kucing: 'ð' ,
      anjing: 'ð',
      makananpet: 'ð',
      gold: 'ð',
      emerald: 'ð'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})