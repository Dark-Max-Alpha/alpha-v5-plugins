const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const YTV_DESC = "Youtube Video Downloader"
const YT_NEED = "*need word!.*"
const DWLOAD_VID = Config.SD
const YTV_UP = Config.SU
const NO_RESULT = "*can't Find Anything... π’*"



const Language = require('../language');
const Lang = Language.getString('system_stats');


Trex.addrex({pattern: 'fsong ?(.*)', fromMe: true,  deleteCommand: true,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

const link = match[1]

     if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text,{quoted: message.data})
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text,{quoted: message.data});
        await axios
          .get(`https://hardianto.xyz/api/yt/playmp3?query=${link}&apikey=hardianto`)
          .then(async (response) => {
            const {
              url,title,thumb,published,views,
            } = response.data
    
            const vide = await axios.get(url, {responseType: 'arraybuffer'})
            var vid = Buffer.from(vide.data)
        
        var logo = await axios.get (thumb, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)
    

    const media = await message.client.prepareMessage(message.jid, vid, MessageType.document, { mimetype:'audio/mpeg' ,filename:title+'.mp3',thumbnail: PIC })

            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'α΄α΄Κα΄ α΄α΄α΄α΄ΙͺΚα΄€ π­\n\n'+'π­ Title : '+title+'\n\nπ­ Views : '+views+'\n\nπ­ Published : '+published+'\n\nπ­ Duration : \n\nπ­ Thumbnail : '+thumb+'\n\nπ­ Download Link : '+url+'\n\n\nπ­π±π° π°π»πΏπ·π° π±π°π­'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'Thanks βοΈ '+'\n\n THANKS FOR GIVING THIS VIDEO π­'}, type: 1},
 ]

const btn = {
    contentText: "π­π±π° π°π»πΏπ·π° π±π°π­\n",
    footerText: 'π­ Title : '+ title +'\n\nπ­ Views : '+views+'\n\nπ­ Published : '+published,
    buttons: buttons,
    headerType: 3,
    documentMessage: media.message.documentMessage
}

            
       await message.client.sendMessage(message.jid,YTV_UP,MessageType.text,{quoted: message.data});
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage,{quoted: message.data})


    
    })
    
    }));
    
    Trex.addrex({pattern: 'fsong ?(.*)', fromMe: false,  deleteCommand: true,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

const link = match[1]

     if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text,{quoted: message.data})
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text,{quoted: message.data});
        await axios
          .get(`https://hardianto.xyz/api/yt/playmp3?query=${link}&apikey=hardianto`)
          .then(async (response) => {
            const {
              url,title,thumb,published,views,
            } = response.data
    
            const vide = await axios.get(url, {responseType: 'arraybuffer'})
            var vid = Buffer.from(vide.data)
        
        var logo = await axios.get (thumb, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)
    

    const media = await message.client.prepareMessage(message.jid, vid, MessageType.document, { mimetype:'audio/mpeg' ,filename:title+'.mp3',thumbnail: PIC })

            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'α΄α΄Κα΄ α΄α΄α΄α΄ΙͺΚα΄€ π­\n\n'+'π­ Title : '+title+'\n\nπ­ Views : '+views+'\n\nπ­ Published : '+published+'\n\nπ­ Duration : \n\nπ­ Thumbnail : '+thumb+'\n\nπ­ Download Link : '+url+'\n\n\nπ­π±π° π°π»πΏπ·π° π±π°π­'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'Thanks βοΈ '+'\n\n THANKS FOR GIVING THIS VIDEO π­'}, type: 1},
 ]

const btn = {
    contentText: "π­π±π° π°π»πΏπ·π° π±π°π­\n",
    footerText: 'π­ Title : '+ title +'\n\nπ­ Views : '+views+'\n\nπ­ Published : '+published,
    buttons: buttons,
    headerType: 3,
    documentMessage: media.message.documentMessage
}

            
       await message.client.sendMessage(message.jid,YTV_UP,MessageType.text,{quoted: message.data});
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage,{quoted: message.data})


    
    })
    
    }));
    

    
            
  
       
