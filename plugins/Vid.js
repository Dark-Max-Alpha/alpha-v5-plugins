const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('Trex');
const YTV_DESC = "❤❤"
const YT_NEED = "Need Song Yt Link!."
const NO_RESULT = "🌀can't Find Anything... Use Yt Link only ..."
const tk = Config.WORKTYPE == 'public' ? false : true

    Trex.addrex({ pattern: 'video ?(.*)', fromMe: false, deleteCommand: false, desc: "hin",  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,Config.VD,MessageType.text);
        await axios
          .get(`https://anonyapi.herokuapp.com/api/yutub/video?url=${linkk}&apikey=hiruwa`)
          .then(async (response) => {
            const {
              result,
            } = response.data.result
            const videoBuffer = await axios.get(result, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,Config.VU,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false,quoted: message.data  })
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
