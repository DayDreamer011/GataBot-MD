let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
    try {  
        let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
        let [_, code] = link.match(linkRegex) || []
        if (!code) throw '${mg}🙌 *Geben Sie den Link einer Gruppe ein. Bitte haltet euch an die Regel das die Gruppe Mindestens 15 Mitglieder Braucht!*\n\n*Beispiel*\n*#unete ${nn}*\n\n*#join ${nnn}*'
        if ( isOwner ) {
            conn.groupAcceptInvite(code)
            conn.reply(m.chat, `Der Bot ist der Gruppe beigetreten ${code}`, m)
        } else {
            conn.reply(m.chat, `Ihre Anfrage, der Gruppe beizutreten ${code} wurde an den Bot-Eigentümer gesendet. Bitte warten Sie auf die Bestätigung.`, m)
            let owner = '441236268011@s.whatsapp.net' // durch die Nummer des Bot-Eigentümers ersetzen
            conn.sendMessage(owner, `Der Benutzer mit der Nummer wa.me/${m.sender.split('@')[0]} aufgefordert, der Gruppe beizutreten ${code}. ¿Möchten Sie die Anfrage annehmen??`, MessageType.text)
        }
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Während Ihrer Anfrage ist ein Fehler aufgetreten', m)
    }
}

handler.help = ['join <link>']
handler.tags = ['group']
handler.command = /^join$/i
handler.owner = true
handler.mods = false
handler.admin = false
handler.botAdmin = true

module.exports = handler
