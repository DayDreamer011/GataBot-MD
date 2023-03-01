const lenguaje = () => { return 'en' } //ENGLISH

//MESSAGE NOTICES
const smsAvisoRG = () => { return `╰⊱✅⊱ *ERGEBNIS* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *WARNUNG* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMATION* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *MISSBRAUCHTE AKTION* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *REPORT* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *ERFOLG* ⊱💚⊱╮\n\n` }


//PARAMETERS IN COMMANDS
const smsRowner = () => { return `\`\`\`¡¡DIESEN BEFEHL KANN NUR ICH ALS BOT-ERSTELLER VERWENDEN!!\`\`\`` }//BOT NUMBER
const smsOwner = () => { return `\`\`\`¡¡DIESEN BEFEHL KANN NUR MEIN ERSTELLER VERWENDEN!!\`\`\`` }//OWNER
const smsMods = () => { return `\`\`\`¡¡DIESEN BEFEHL KÖNNEN NUR MODERATOREN UND MEIN SCHÖPFER VERWENDEN!!\`\`\`` }//MODERATORS
const smsPremium = () => { return `\`\`\`¡¡DIESER BEFEHL IST NUR FÜR PREMIUM-BENUTZER UND MEINEN CREATOR VERFÜGBAR!! UM PREMIUM ZU ERHALTEN, KAUFEN SIE EINEN PASS MIT #pass premium\`\`\`` }//PREMIUM USERS
const smsGroup = () => { return `\`\`\`¡¡DIESER BEFEHL KANN NUR IN GRUPPEN VERWENDET WERDEN!!\`\`\`` }//FOR GROUPS
const smsPrivate = () => { return `\`\`\`¡¡DIESER BEFEHL KANN NUR FÜR PRIVAT CHAT VERWENDET WERDEN!!\`\`\`` }//TO THE PRIVATE
const smsAdmin = () => { return `\`\`\`¡¡DIESER BEFEHL IST NUR FÜR Admins!!\`\`\`` }//ADMINS
const smsBotAdmin = () => { return `\`\`\`¡¡ICH MUSS ADMIN SEIN, DAMIT SIE DIESEN BEFEHL VERWENDEN KÖNNEN!!\`\`\`` }//BOT WITH ADMIN
const smsUnreg = () => { return `\`\`\`¡¡SIE MÜSSEN REGISTRIERT SEIN, UM DIESEN BEFEHL ZU VERWENDEN, SCHREIBEN #verify TO REGISTER!!\`\`\`` }//VERIFY
const smsRestrict = () => { return `\`\`\`¡¡DIESER BEFEHL WIRD DURCH MEINEN ERSTELLER EINGESCHRÄNKT!!\`\`\`` }//RESTRICT COMMAND


//LIST MENU
const smsTime = () => { return `Aktuelle Uhrzeit`}
const smsUptime = () => { return `Läuft seit`}
const smsVersion = () => { return `Version of ${global.packname}`}
const smsTotalUsers = () => { return `Benutzer insgesamt`}
const smsMode = () => { return `Es ist im Modus`}
const smsModePublic = () => { return `ÖFFENTLICH`}
const smsModePrivate = () => { return `PRIVATE`}
const smsBanChats = () => { return `Banned Chats`}
const smsBanUsers = () => { return `Banned Users`}
const smsPareja = () => { return `Pärchen`}
const smsResultPareja = () => { return `Single`}
const smsSaludo = () => { return `👋 HALLO! WILLKOMMEN 👋`}
const smsDia = () => { return `🌇 Guten Morgen ⛅`}
const smsTarde = () => { return `🏙️ Guten Mittag 🌤️`}
const smsTarde2 = () => { return `🌆 Guten Abend 🌥️`}
const smsNoche = () => { return `🌃 Gute Nacht 💫`}
const smsListaMenu = () => { return `⊹ MENU LIST ⊹`}
const smsLista1 = () => { return `🌟 KyraBot INFORMATION 🌟`}
const smsLista2 = () => { return `💖 Ersteller 💖`}
const smsLista3 = () => { return `🎁 Spenden : SUPPORT 🎁`}
const smsLista4 = () => { return `🚀 SPEED 🚀`}
const smsLista5 = () => { return `💡 MENU INFORMATION 💡`}
const smsLista6 = () => { return `🌀 GANZES MENU 🌀`}
const smsLista7 = () => { return `🐈 INSTALL GATABOT 🐈`}
const smsLista8 = () => { return `🍄 BE SUB BOT 🍄`}
const smsLista9 = () => { return `📄 ALLGEMEINE GESCHÄFTSBEDINGUNGEN UND DATENSCHUTZ 📄`}
const smsLista10 = () => { return `🌟 ADVENTURE AND TOP 🌟`}
const smsLista11 = () => { return `🏆 WELTSPITZE 🏆`}
const smsLista12 = () => { return `🏅 PREMIUM USERS 🏅`}
const smsLista13 = () => { return `🎟️ WERDEN SIE EIN PREMIUM-BENUTZER 🎟️`}
const smsLista14 = () => { return `🛣️ MISSIONEN 🛣️`}
const smsLista15 = () => { return `⚗️ RPG MENU ⚗️`}
const smsLista16 = () => { return `🏪 SHOP 🏪`}
const smsLista17 = () => { return `🎒 INVENTAR 🎒`}
const smsLista18 = () => { return `🌟 MULTIMEDIA 🌟`}
const smsLista19 = () => { return `📲 DOWNLOAD MENU 📲`}
const smsLista20 = () => { return `🔍 SEARCH MENU 🔍`}
const smsLista21 = () => { return `🛰️ CONVERTER MENU 🛰️`}
const smsLista22 = () => { return `🧰 AUDIO MODIFIER MENU 🧰`}
const smsLista22_1 = () => { return `🔩 TOOLS MENU 🔩`}
const smsLista23 = () => { return `🌟 FUN 🌟`}
const smsLista24 = () => { return `🎡 GAMES 🎡`}
const smsLista25 = () => { return `🔊 AUDIO MENU 🔊`}
const smsLista26 = () => { return `🎈 STICKERS UND FILTERS MENU 🎈`}
const smsLista27 = () => { return `✨ EFFECTS UND LOGOS MENU ✨`}
const smsLista28 = () => { return `🌅 LOGOS MENU 2 🌅`}
const smsLista29 = () => { return `⛩️ RANDOM MEMES UND ANIME ⛩️`}
const smsLista30 = () => { return `🔞 BEFEHLE FÜR ERWACHSENE +18 🔞`}
const smsLista31 = () => { return `🌟 EINSTELLUNGEN 🌟`}
const smsLista32 = () => { return `🔰 MENÜ FÜR GRUPPEN 🔰`}
const smsLista33 = () => { return `📑 ARTEN VON LISTEN 📑`}
const smsLista34 = () => { return `⚙️KONFIGURATIONSZENTRUM ⚙️`}
const smsLista35 = () => { return `💎 OWNER MENU 💎`}

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ WILLKOMMEN!!*\n┊💖 @user\n┊📄 *LESEN SIE DIE GRUPPENBESCHREIBUNG*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *ER HAT DIE GRUPPE VERLASSEN, KOMM BALD ZURÜCK* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user SIE SIND JETZT ADMIN IN DIESER GRUPPE!!*'}
const smsSdemote = () => { return '*@user NICHT MEHR ADMIN IN DIESER GRUPPE!!*'}
const smsSdesc = () => { return '*DIE NEUE BESCHREIBUNG DER GRUPPE IST:*\n\n@desc'}
const smsSsubject = () => { return '*DER NEUE NAME DER GRUPPE IST:*\n\n@subject'}
const smsSicon = () => { return '*DAS FOTO DIESER GRUPPE WURDE GEÄNDERT!!*'}
const smsSrevoke = () => { return '*JETZT IST DIES DER NEUE LINK DIESER GRUPPE!!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 CONNECTION ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ SUCCESSFUL CONNECTION WITH WHATSAPP  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsClearTmp = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ AUTO CLEAN TMP ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ FILES IN THE TMP FOLDER WERE SUCCESSFULLY DELETED 😼✨\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsCargando = () => { return `😸 LOADING...\n`}
const smsCodigoQR = () => { return `\n✅ SCAN THE QR CODE EXPIRES IN 45 SECONDS ✅`}
const smsConexionOFF = () => { return `\n⚠️ NO CONNECTION, DELETE THE FOLDER ${global.authFile} AND SCAN THE QR CODE ⚠️`}

//_allantilink.js
const smsTextoYT = () => { return '😻 Super GataBot-MD - WhatsApp '}
const smsApagar = () => { return '❌ DEACTIVATE'}
const smsEncender = () => { return '✅ ACTIVATE'}
const smsEnlaceTik = () => { return `*IN DIESER GRUPPE WURDE EIN VERBOTENER TIKTOK-LINK ERKANNT*\n\n*Ich fahre fort, Sie zu löschen*`}
const smsEnlaceYt = () => { return `*IN DIESER GRUPPE WURDE EIN VERBOTENER YOUTUBE-LINK ERKANNT*\n\n*Ich fahre fort, Sie zu löschen*`}
const smsEnlaceTel = () => { return `*IN DIESER GRUPPE WURDE EIN VERBOTENER TELEGRAM-LINK ERKANNT*\n\n*Ich fahre fort, Sie zu löschen*`}
const smsEnlaceFb = () => { return `*IN DIESER GRUPPE WURDE EIN VERBOTENER FACEBOOK-LINK ERKANNT*\n\n*Ich fahre fort, Sie zu löschen*`}
const smsEnlaceIg = () => { return `*IN DIESER GRUPPE WURDE EIN VERBOTENER INSTAGRAM-LINK ERKANNT*\n\n*Ich fahre fort, Sie zu löschen*`}
const smsEnlaceTw = () => { return `*IN DIESER GRUPPE WURDE EIN VERBOTENER TWITTER-LINK ERKANNT*\n\n*Ich fahre fort, Sie zu löschen*`}
const smsAllAdmin = () => { return `*ICH MUSS ADMIN SEIN, UM EINDRINGLINGE ENTFERNEN ZU KÖNNEN*`}
const smsSoloOwner = () => { return `*MEIN ERSTELLER MUSS DIE FUNKTION AKTIVIEREN*\n*#on restrict*`}

//handler.js
const smsCont1 = () => { return `*🔴 BEFEHL FEHLGESCHLAGEN 🔴*`}
const smsCont2 = () => { return `*⚠️ PLUGIN:*`}
const smsCont3 = () => { return `*⚠️ USER:*`}
const smsCont4 = () => { return `*⚠️ BEFEHL:*`}
const smsCont5 = () => { return `*⚠️ ERROR:*`}
const smsCont6 = () => { return `*❗ MELDEN SIE DIESE NACHRICHT MIT DEM BEFEHL #reporte UM ES ZU LÖSEN*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*HAT KEINE DIAMANTEN!! 💎 SIE KÖNNEN MIT DEM BEFEHL ZUM LADEN GEHEN*`}
const smsCont8 = () => { return ` *DIAMANT 💎 USED*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*BENÖTIGEN SIE DIE LEVEL ➡️*`}
const smsCont10 = () => { return `*UM DIESEN BEFEHL ZU VERWENDEN. IHR AKTUELLES LEVEL IST ➡️*`}
const smsCont11 = () => { return `*AKTUALISIEREN MIT BEFEHL*`}
const smsCont12 = () => { return `EINE TOLLE GRUPPE!! 😼`}
const smsCont13 = () => { return `JEMAND IST BEITRETEN!! 🥳`}
const smsCont14 = () => { return `Jemand ist gegangen!! 🧐`}
const smsCont15 = () => { return `*Hallo*`}
const smsCont16 = () => { return `*DIE VIDEOANRUFE* 📲`}
const smsCont17 = () => { return `*DIE ANRUFE* 📞`}
const smsCont18 = () => { return `*SIE SIND NICHT AUTORISIERT, ALSO WERDE ICH SIE BLOCKIEREN*\n\n*WENN SIE VERSEHENTLICH ANRUFEN, KONTAKTIEREN SIE DEN ERSTELLER DIESES BOT*`}
const smsCont19 = () => { return `ANTI LÖSCHEN`}
const smsCont20 = () => { return `*┃✤ Name:*`}
const smsCont21 = () => { return `*┃✤ Senden der gelöschten Nachricht...*`}

//_anti-internacional.js
const smsInt1 = () => { return `*DIESE NUMMER*`}
const smsInt2 = () => { return `*IN DIESER GRUPPE NICHT ERLAUBT!!*`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*Da Sie Administrator dieser Gruppe sind, werden Sie nicht entfernt*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*IN DIESER GRUPPE WURDE EIN VERBOTENER WHATSAPP-LINK ERKANNT*\n\n*Ich fahre fort, Sie zu löschen*`}


//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}IN DIESER GRUPPE WURDE EIN VERBOTENER LINK MIT HTTPS ENTDECKT\n\nIch fahre fort, Sie zu löschen`}

//_antispam.js
const smsNoSpam = () => { return `🤨 KEIN SPAM, SIE KÖNNEN MICH NICHT MEHR VERWENDEN ${global.packname} FOR ${60000 / 1000 - 59} MINUTEN`}

//_antispam_.js
const smsNoSpam2 = () => { return `WURDE NACHHER ENTBANNED ${60000 / 1000 - 59} MINUTE. BITTE KEIN SPAM!!`}

//Texto
const smsConMenu = () => { return `☘️ MENU`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`EIN UNERWARTETER FEHLER IST AUFGETRETEN.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`Es ist eine Unannehmlichkeit aufgetreten. VERSUCHEN SIE ES ERNEUT.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ETWAS GING FEHLER, MELDEN SIE DIESEN BEFEHL MIT:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `NEIN!!! 🤬 SAG DIESES WORT`}
const smsToxic2 = () => { return `ES IST VERBOTEN TOXIC ZU SEIN`}
const smsToxic3 = () => { return `*WARNUNG*\n⚠️`}
const smsToxic4 = () => { return `😭 ES TUT MIR LEID`}
const smsToxic5 = () => { return `☢️ DEAKTIVIEREN ANTITOXIC`}
const smsToxic6 = () => { return `ICH HABE DICH MEHRMAL GEWARNT!!`}
const smsToxic7 = () => { return `SIE HABEN ALLE 4 WARNUNGEN, JETZT WERDEN SIE ELIMINIERT 🙄`}

//Tienda
const eExp = () => { return '⚡ Erfahrung' } 
const eDiamante = () => { return '💎 Diamant' } 
const eDiamantePlus = () => { return '💎+ Diamant+' }
const eToken = () => { return '🪙 Token' } 
const eEsmeralda = () => { return '💚 Smaragd' } 
const eJoya = () => { return '♦️ Juwel' }
const eMagia = () => { return '🌀 Magie' } 
const eOro = () => { return '👑 Gold' } 
const eGataCoins = () => { return '🐱 KyraCoins' }
const eGataTickers = () => { return '🎫 Kyra Ticker' } 
const eEnergia = () => { return '✨ Energie' }

const ePocion = () => { return '🥤 Energie' }
const eAgua = () => { return '💧 Wasser' }
const eBasura = () => { return '🗑 Müll' }
const eMadera = () => { return '🪵 Holz' }
const eRoca = () => { return '🪨 Felsen' }
const ePiedra = () => { return '🥌 Stein' }
const eCuerda = () => { return '🕸️ Schnur' }
const eHierro = () => { return '⛓️ Eisen' }
const eCarbon = () => { return '⚱️ Kohle' }
const eBotella = () => { return '🍶 Flasche' }
const eLata = () => { return '🥫 Can' }
const eCarton = () => { return '🪧 Pappe' } 

const eEletric = () => { return '💡 Elektrizität' }
const eBarraOro = () => { return '〽️ Gold bar' }
const eOroComun = () => { return '🧭 Gewöhnliches Gold' }
const eZorroG = () => { return '🦊🌫️ Großer Fuchs' }
const eBasuraG = () => { return '🗑🌫️ Super Müll' }
const eLoboG = () => { return '🐺🌫️ Super Wolf' }
const eMaderaG = () => { return '🛷🌫️ Super Holz' }
const eEspada = () => { return '⚔️ Schwert' }
const eCarnada = () => { return '🪱 Köder' }
const eBillete = () => { return '💵 Banknoten' }
const ePinata = () => { return '🪅 Piñata' }
const eGancho = () => { return '🪝 Haken' }
const eCanaPescar = () => { return '🎣 Angelrute' } 

const eCComun = () => { return '📦 Gewönliche Kiste' }
const ePComun = () => { return '🥡 Ungewöhnliche Kiste' }
const eCMistica = () => { return '🗳️ Mythische Kiste' }
const eCMascota = () => { return '📫 Haustierbox' }
const eCJardineria = () => { return '💐 Gartenbox' }
const eClegendaria = () => { return '🎁 Legendäre Kiste' } 

const eUva = () => { return '🍇 Traube' }
const eManzana = () => { return '🍎 Apfel' }
const eNaranja = () => { return '🍊 Orange' }
const eMango = () => { return '🥭 Mango' }
const ePlatano = () => { return '🍌 Banane' } 

const eSUva = () => { return '🌾🍇 Traubenkerne' }
const eSManzana = () => { return '🌾🍎 Apfelsamen' }
const eSNaranja = () => { return '🌾🍊 Orangensamen' }
const eSMango = () => { return '🌾🥭 Mangosamen' }
const eSPlatano = () => { return '🌾🍌 Bananensamen' } 

const eCentauro = () => { return '🐐 Zentaur' }
const eAve = () => { return '🦅 Vogel' }
const eGato = () => { return '🐈 Katze' }
const eDragon = () => { return '🐉 Drachen' }
const eZorro = () => { return '🦊 Fuchs' }
const eCaballo = () => { return '🐎 Pferd' }
const eFenix = () => { return '🕊️ Phönix' }
const eLobo = () => { return '🐺 Wolf' }
const ePerro = () => { return '🐶 Hund' } 

const eAMascots = () => { return '🍖 Zentaurisches Essen' }
const eCCentauro = () => { return '🐐🥩 Zentaurisches Essen' }
const eCAve = () => { return '🦅🥩 Vogelfutter' }
const eCMagica = () => { return '🌀🥩 Magisches Essen' }
const eCDragon = () => { return '🐉🥩 Drachenfutter' }
const eACaballo = () => { return '🐎🥩 Pferdefutter' }
const eCFenix = () => { return '🕊️🥩 Phönix-Essen' } 


//config-on y off.js
const smsWel1 = () => { return `🎉 WILLKOMMEN`}
const smsWel2 = () => { return `Willkommensnachricht für neue Mitglieder in Gruppen`}
const smsDete1 = () => { return `🔔 ERKENNEN`}
const smsDete2 = () => { return `Mitteilungen über Maßnahmen innerhalb der Gruppe`}
const smsANivel1 = () => { return `🆙 AUTO LEVEL`}
const smsANivel2 = () => { return `Erhöhe alle automatisch; (Wendet Belohnungen für das Aufsteigen an)`}
const smsRestri1 = () => { return `⛔ EINSCHRÄNKEN`}
const smsRestri2 = () => { return `Aktivieren Sie die Funktion zum Hinzufügen oder Entfernen von Personen in Gruppen`}
const smsLlamar1 = () => { return `🚫ANTI-ANRUFE`}
const smsLlamar2 = () => { return `Blockieren Sie Personen, die Anrufe tätigen`}
const smsAntiSp1 = () => { return `🚯 ANTI SPAM`}
const smsAntiSp2 = () => { return `Verbieten Sie die Verwendung von Befehlen, wenn jemand eine Art von Spam ausführt`}
const smsModP1 = () => { return `🌐 ÖFFENTLICHER MODUS`}
const smsModP2 = () => { return `Aktivieren Sie die Funktion, damit jeder KyraBot verwenden kann`}
const smsModAd1 = () => { return `🛂 ADMIN MODE`}
const smsModAd2 = () => { return `Nur Administratoren können KyraBot in Gruppen verwenden`}
const smsLect1 = () => { return `✅ AUTOMATISCHES LESEN`}
const smsLect2 = () => { return `Lassen Sie Nachrichten oder Chats als gelesen`}
const smsTempo1 = () => { return `🐈 VORÜBERGEHENDER BOT`}
const smsTempo2 = () => { return `Funktion, die den vorübergehenden Aufenthalt in Gruppen ermöglicht`}
const smsStik1 = () => { return `🎠 STICKERS`}
const smsStik2 = () => { return `Aktivieren Sie das automatische Senden von Stickern an alle`}
const smsStickA1 = () => { return `🪄 AUTOMATIC STICKERS`}
const smsStickA2 = () => { return `Videos, Gifs, images, jpg or jpeg links; Sie werden automatisch in Aufkleber umgewandelt`}
const smsReacc1 = () => { return `🤡 REACTION `}
const smsReacc2 = () => { return `Aktivieren Sie das automatische Senden von Reaktionen auf Nachrichten`}
const smsAudi1 = () => { return `🔊 AUDIOS`}
const smsAudi2 = () => { return `Aktivieren Sie das automatische Senden von Audios an alle`}
const smsModHor1 = () => { return `🔞 HORNY MODE`}
const smsModHor2 = () => { return `Inhalte für Erwachsene in Chats anzeigen`}
const smsAntitoc1 = () => { return `☢️ ANTI TOXIC`}
const smsAntitoc2 = () => { return `Senden Sie Warnungen an Personen, die beleidigen`}
const smsModOb1 = () => { return `👀 OBSERVE MODE`}
const smsModOb2 = () => { return `Make Images, Gifs, and Videos Einsehbar für alle`}
const smsAntiEli1 = () => { return `🗑️ ANTI DELETE`}
const smsAntiEli2 = () => { return `Alle gelöschten Nachrichten werden an den Chat oder die Gruppe weitergeleitet`}
const smsAntiInt1 = () => { return `🌏 ANTI INTERNATIONAL`}
const smsAntiInt2 = () => { return `Beseitigen Sie internationale Nummern, die als gefälscht gelten`}
const smsAntiE1 = () => { return `🔗 ANTI LINKS`}
const smsAntiE2 = () => { return `Löschen Sie Personen, die Links aus WhatsApp-Gruppen senden`}
const smsAntiEE1 = () => { return `🔗 ANTI LINKS 2`}
const smsAntiEE2 = () => { return `Entfernen Sie Personen, die Links mit https senden`}
const smsAntiTT1 = () => { return `🔗 ANTI TIK TOK`}
const smsAntiTT2 = () => { return `Entfernen Sie Personen, die Links von TikTok senden`}
const smsAntiYT1 = () => { return `🔗 ANTI YOUTUBE`}
const smsAntiYT2 = () => { return `Entfernen Sie Personen, die Links von YouTube senden`}
const smsAntiTEL1 = () => { return `🔗 ANTI TELEGRAM`}
const smsAntiTEL2 = () => { return `Entfernen Sie Personen, die Links von Telegram senden`}
const smsAntiFB1 = () => { return `🔗 ANTI FACEBOOK`}
const smsAntiFB2 = () => { return `Entfernen Sie Personen, die Facebook-Links senden`}
const smsAntiIG1 = () => { return `🔗 ANTI INSTAGRAM`}
const smsAntiIG2 = () => { return `Entfernen Sie Personen, die Instagram-Links senden`}
const smsAntiTW1 = () => { return `🔗 ANTI TWITTER `}
const smsAntiTW2 = () => { return `Entfernen Sie Personen, die Twitter-Links senden`}
const smsSOLOP1 = () => { return `⚜️ ONLY PRIVATE`}
const smsSOLOP2 = () => { return `Erlauben Sie die Verwendung nur in privaten Chats`}
const smsSOLOG1 = () => { return `⚜️ ONLY GROUPS`}
const smsSOLOG2 = () => { return `Erlauben Sie es nur, in Gruppenchats verwendet zu werden`}
const smsConfi1 = () => { return `EINSTELLUNGEN`}
const smsConfi2 = () => { return `*¡Hallo!*`}
const smsConfi3 = () => { return `┃ *Wählen Sie eine Option aus der Liste aus*`}
const smsConfi4 = () => { return `┃ *Um mit der Konfiguration zu beginnen*`}
const smsConfi5 = () => { return `┃● *Konfigurationshinweise:*`}
const smsConfi6 = () => { return `┃ ✅ ⇢ *Funktion aktiviert*`}
const smsConfi7 = () => { return `┃ ❌ ⇢ *Funktion deaktiviert*`}
const smsConfi8 = () => { return `┃ ⚠️ ⇢ *Dieser Chat ist keine Gruppe*`}
const smsConfi9 = () => { return `┃ *Empfehlung: Um die Konfiguration zu sehen*\n┃ *Verwenden Sie dieses Gruppenmenü vollständig*\n┃`}
const smsConfi10 = () => { return `*~ KONFIGURATIONSZENTRUM*`}
const smsParaAdmins = () => { return `FÜR ADMINISTRATOREN UND ERSTELLER : GRUPPEN`}
const smsParaAdYOw = () => { return `FÜR ADMINISTRATOREN UND ERSTELLER : CHATS`}
const smsParaOw = () => { return `FÜR ERSTELLER : CHATS`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `BEFEHL`} 
const smsMens2 = () => { return `MOMENTAN`} 
const smsMens3 = () => { return `IN DIESEM`} 
const smsMens4 = () => { return `BOT`} 
const smsMens5 = () => { return `CHAT`} 

//Error2
const smsMensError1 = () => { return `❕ REPORT BEFEHL ❕`} 
const smsMensError2 = () => { return `Der folgende Befehl schlägt fehl`} 

//_antiviewonce.js
const smsAntiView = () => { return `*NICHTS KANN VERSTECKT WERDEN* 😎`} 

//_autolevelup.js
const smsAutoLv1 = () => { return `🎖️ NEUES LEVEL 🎖️`} 
const smsAutoLv2 = () => { return `VORHERIGE LEVEL:`} 
const smsAutoLv3 = () => { return `AKTUELLES LEVEL:`} 
const smsAutoLv4 = () => { return `RANGE:`} 
const smsAutoLv5 = () => { return `DATUM:`} 
const smsAutoLv6 = () => { return `Sie haben ein neues Level erreicht!!!`} 
const smsAutoLv7 = () => { return `🥳 BELOHNUNG FÜR IHR NEUES LEVEL`} 

//_autosticker.js
const smsAutoStik = () => { return `${lenguajeGB['smsAvisoFG']()}*DAS VIDEO SOLLTE NICHT LÄNGER ALS 7 SEKUNDEN DAUERN.*`} 

//_expired.js
const smsBottem1 = () => { return `*VERLÄSST DIE GRUPPE!!! 🤝 WENN SIE WOLLEN, DASS ES ZURÜCKKOMMT, VERWENDEN SIE DEN BEFEHL _#bottemporal_ ZURÜCK ZUR GRUPPE!!*`} 
const smsBottem2 = () => { return `*💕 BENÜTZE DEINE HELFERIN*\n*_${global.ig}_*\n`} 
const smsBottem3 = () => { return `BIS BALD 💖`} 

//_premium.js
const smsPremI = () => { return `*¡IHRE PREMIUM-ZEIT IST VORBEI!* 🎟️\n*UM EINEN NEUEN PREMIUM-PASS ZU ERHALTEN, VERWENDEN SIE DEN BEFEHL:*\n*#pass prem*`} 

//afk-_afk.js
const smsAfkM1 = () => { return `${lenguajeGB['smsAvisoEG']()}*Du hast aufgehört, untätig zu sein, AFK*`} 
const smsAfkM2 = () => { return `*DER GRUND FÜR DIE INAKTIVITÄT WAR:*`} 
const smsAfkM3 = () => { return `*INACTIVE TIME:*`} 
const smsAfkM4 = () => { return `${lenguajeGB['smsAvisoAG']()}*MARKIERE DIESEN BENUTZER NICHT!!DIESER BENUTZER IST INAKTIV*`} 
const smsAfkM5 = () => { return `*GRUND FÜR AFK-INAKTIVITÄT:*`} 
const smsAfkM6 = () => { return `*GRUND DER INAKTIVITÄT AFK: HAT KEINEN GRUND FÜR DIE INAKTIVITÄT ANGEGEBEN*`} 

//afk-afk.js
const smsAfkM1A = () => { return `${lenguajeGB['smsAvisoAG']()}*NICHT MAKIEREN*`} 
const smsAfkM1B = () => { return `*WIRD INAKTIV SEIN AFK*\n\n*GIB DEN GRUND AN*`} 

//anonymous_chat.js
const smsChatAn1 = () => { return `${lenguajeGB['smsAvisoFG']()}*DU BIST NICHT IM ANONYMEN CHAT*`} 
const smsChatAn2 = () => { return `*WENN SIE EINEN ANONYMEN CHAT STARTEN MÖCHTEN, VERWENDEN SIE DEN BEFEHL #start ODER VERWENDEN SIE DEN BUTTON UNTEN*\n`} 
const smsChatAn3 = () => { return `⚡ ANONYMEN CHAT STARTEN`} 
const smsChatAn4 = () => { return `${lenguajeGB['smsAvisoRG']()}🪐 *DU HAST DEN ANONYMEN CHAT VERLASSEN*`} 
const smsChatAn5 = () => { return `${lenguajeGB['smsAvisoAG']()}*DER ANDERE BENUTZER HAT DEN ANONYMEN CHAT VERLASSEN*`}  
const smsChatAn6 = () => { return `*WENN SIE ZU EINEM ANDEREN ANONYMEN CHAT GEHEN MÖCHTEN, VERWENDEN SIE DEN BEFEHL #start ODER VERWENDEN SIE DEN BUTTON UNTEN*\n`} 
const smsChatAn7 = () => { return `${lenguajeGB['smsAvisoAG']()}*SIE SIND NOCH IN EINEM ANONYMEN CHAT ODER WARTEN DARAUF, DASS JEMAND DEM CHAT BEITRITT*`} 
const smsChatAn8 = () => { return `*WENN SIE DEN ANONYMEN CHAT VERLASSEN MÖCHTEN, VERWENDEN SIE DEN BEFEHL #leave ODER SIE KÖNNEN DEN BUTTON UNTEN VERWENDEN*\n`} 
const smsChatAn9 = () => { return `🍁 VERLASSEN SIE DEN ANONYMEN CHAT`} 
const smsChatAn10 = () => { return `${lenguajeGB['smsAvisoEG']()}✨ *SIE KÖNNEN JETZT CHATTEN*`} 
const smsChatAn11 = () => { return `*JEMAND TRITT DEM ANONYMEN CHAT BEI!!*`} 
const smsChatAn12 = () => { return `❇️ EIN ANDERER BENUTZER`} 
const smsChatAn13 = () => { return `${lenguajeGB['smsAvisoRG']()}🐈 *WARTEN SIE AUF JEMAND, DER DEM ANONYMEN CHAT BEITRITT, HABEN SIE BITTE GEDULD*`} 

//Botones de Menú 
const smsBotonM1 = () => { return `⚡ STARTMENÜ ⚡`} 
const smsBotonM2 = () => { return `💫 VOLLES MENÜ 💫`} 
const smsBotonM3 = () => { return `🎒 INVENTAR 🎒`} 
const smsBotonM4 = () => { return `USERS`}
const smsBotonM5 = () => { return `RANGE`}
const smsBotonM6 = () => { return `LEVEL`}
const smsBotonM7 = () => { return `PREMIUM`}
const smsTex1 = () => { return '*MENÜ SUCHEN*'}
const smsTex2 = () => { return '*AUDIO MODIFIER*'}
const smsTex3 = () => { return '*MENU +18*'}
const smsTex4 = () => { return '*DYNAMIC CONTENT*'}
const smsTex5 = () => { return '*SEARCH AND DOWNLOAD*'}
const smsTex6 = () => { return '*MENU +18 PREMIUM*'}
const smsTex7 = () => { return '⠇ *Images +18 Qualität und Vielfalt*\n⠇ *Videos +18 nur für dich*\n⠇ *Stickers +18 available*'}
const smsTex8 = () => { return '*CONVERTER MENU*'}
const smsTex9 = () => { return '*DOWNLOADS MENU*'}
const smsTex10 = () => { return '*GAMES MENU*'}
const smsTex11 = () => { return '*MENÜ FÜR GRUPPEN*'}
const smsTex12 = () => { return '*TOOLS MENU*'}
const smsTex13 = () => { return '*INFORMATION MENU*'}
const smsTex14 = () => { return '*EFFECTS AND LOGOS MENU*'}
const smsTex15 = () => { return '*LOGOS MENU 2*'}
const smsTex16 = () => { return 'AUDIO MENU'}
const smsTex17 = () => { return '*ES IST NICHT NOTWENDIG, PRÄFIX IN AUDIOS ZU VERWENDEN*'}
const smsTex18 = () => { return 'SOUND LIST'}
const smsTex19 = () => { return '*SIE KÖNNEN DEN AUDIO AUSWÄHLEN!!*'}
const smsTex20 = () => { return '*OWNER MENU*'}
const smsTex21 = () => { return '*RPG MENU*'}
const smsTex22 = () => { return '*STICKERS UND FILTERS MENU*'}
const smsTex23 = () => { return '*RANDOM MEMES UND ANIME MENU*'}

//ad
const smsMalused = () => { return '⚡ *USE THE COMMAND LIKE THIS:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *SIE MÜSSEN DEN BEFEHL WIE IN DIESEM BEISPIEL VERWENDEN:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *SIE MÜSSEN DEN BEFEHL VERWENDEN ODER AUF DIE NACHRICHT VON JEMANDEM WIE IN DIESEM BEISPIEL ANTWORTEN:*\n`}

//gc-config_time.js
const smsGrupoTime1 = () => { return '🔓 *_OFFENE GRUPPE IN EINER STUNDE_*'}
const smsGrupoTime2 = () => { return '🔒 *_SCHLIESSEN SIE DIE GRUPPE IN EINER STUNDE_*'}
const smsGrupoTime3 = () => { return '*GRUPPE'}
const smsGrupoTime4 = () => { return 'GESCHLOSSEN'}
const smsGrupoTime5 = () => { return 'OFFEN'}
const smsGrupoTime6 = () => { return '*WÄHREND'}
const smsGrupoTime7 = () => { return '🔒 *DIE GRUPPE IST GESCHLOSSEN, NUR ADMINISTRATOREN KÖNNEN NACHRICHTEN SENDEN*'}
const smsGrupoTime8 = () => { return '🔓 *DIE GRUPPE IST OFFEN, JEDER KANN NACHRICHTEN SENDEN*'}
const smsGrupoTime9 = () => { return '🔓 OFFENE GRUPPE WÄHREND '}
const smsGrupoTime10 = () => { return '🔒 GRUPPE WÄHREND SCHLIESSEN '}
const smsGrupoTime11 = () => { return ' STUNDE'}
const smsGrupoTime12 = () => { return 'ERLAUBEN SIE, DASS DIE GRUPPE VORBEI GEWESEN HAT '}
const smsGrupoTime13 = () => { return 'LASSEN SIE DIE GRUPPE IN DER NÄHE '}

//grupo-add.js
const smsAddB1 = () => { return `${lenguajeGB['smsAvisoFG']()}*NUMMER KANN NICHT HINZUGEFÜGT WERDEN, BITTE ÜBERPRÜFEN SIE, DASS SIE KORREKT IST, MÖGLICHERWEISE IST SIE KÜRZLICH HERAUSGEKOMMEN ODER IHR DATENSCHUTZ IST EINGESTELLT.*`}
const smsAddB2 = () => { return `${lenguajeGB['smsAvisoFG']()}*DIE NUMMER KANN NICHT HINZUFÜGEN, NICHT ÜBERPRÜFEN, DASS SIE KORREKT IST, ODER SIE MANUELL HINZUFÜGEN.*`}

//grupo-admins.js
const smsAddB3 = () => { return `*BENACHRICHTIGUNG FÜR ADMINISTRATOREN*`}
const smsAddB4 = () => { return `*ADMIN-PRÄSENZ*`}
const smsAddB5 = () => { return `*NACHRICHT:*`}
const smsAddB6 = () => { return `Ich bitte die Admins bitte.`}

//grupo-advertencia.js
const smsAdveu1 = () => { return `${lenguajeGB['smsAvisoAG']()}*KANN NUR VERWENDET WERDEN, WENN DIE FUNKTION AKTIVIERT IST:*\n`}
const smsAdveu2 = () => { return 'Reason'}
const smsAdveu3 = () => { return `${lenguajeGB['smsAvisoMG']()}*DENKEN SIE DARAN, DEN GRUND FÜR DIE WARNUNG ZU SCHREIBEN*\n`}
const smsAdveu4 = () => { return '*IN DIESER GRUPPE EINE WARNUNG ERHALTEN!!*'}
const smsAdveu5 = () => { return 'WARNUNG'}
const smsAdveu6 = () => { return '🎒 INVENTAR'}
const smsAdveu7 = () => { return '*ICH HABE DICH MEHRMAL GEWARNT!!*'}
const smsAdveu8 = () => { return '*JETZT WERDEN SIE GELÖSCHT* 🙄'}
const smsAdveu9 = () => { return '😇 DANKE'}
const smsAdveu10 = () => { return '*IN DIESER GRUPPE WURDE EINE WARNUNG ENTFERNT!!*'}
const smsAdveu11 = () => { return 'davor:'}
const smsAdveu12 = () => { return 'Jetzt:'}

//grupo-demote.js || grupo-promote.js 
const smsDemott = () => { return `*DIE NUMMER IST UNGÜLTIG, VERSUCHEN SIE ERNEUT, AUF DIE NACHRICHT VON JEMANDEM ZU ANTWORTEN ODER WIE DIESES BEISPIEL ZU VERWENDEN:*\n`}
const smsDemott2 = () => { return '*HAT JETZT MACHT IN DER GRUPPE!!*'}
const smsDemott3 = () => { return '*HAT KEINE MACHT MEHR IN DER GRUPPE!!*'}

//grupo-info.js
const smsGI1 = () => { return '*GRUPPENINFORMATIONEN*'}
const smsGI2 = () => { return '*GRUPPEN-ID*'}
const smsGI3 = () => { return '*GRUPPENNAME*'}
const smsGI4 = () => { return '*GRUPPENBESCHREIBUNG*'}
const smsGI5 = () => { return '*KEINE BESCHREIBUNG*'}
const smsGI6 = () => { return '*ANZAHL DER NUTZER*'}
const smsGI7 = () => { return '*Users*'}
const smsGI8 = () => { return '*SCHÖPFER DER GRUPPE*'}
const smsGI9 = () => { return '*GRUPPENADMINISTRATOR*'}
const smsGI10 = () => { return '⚙️ GRUPPENEINSTELLUNGEN'}


//grupo-kick.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*MARKIEREN SIE DIE PERSON ODER ANTWORTEN SIE AUF DIE NACHRICHT DER PERSON, DIE SIE LÖSCHEN MÖCHTEN*\n\n*EXAMPLE: `}
const smskick2 = () => { return `ENTFERNT 😼🫵`}
const smskick3 = () => { return `ICH KANN DEN GRUPPENERSTELLER NICHT LÖSCHEN 😆🫵`}
const smskick4 = () => { return `NICHT IN DIESER GRUPPE 👻`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ EINRUFEN DER GRUPPE ⚡`}

//grupo-setbye.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*DER ABSCHIED DER GRUPPE IST KONFIGURIERT*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_SCHREIBEN SIE DIE ABSCHIED NACHRICHT_*\n*_OPTIONAL KÖNNEN SIE VERWENDEN, WAS MIT „@“ IST, UM WEITERE INFORMATIONEN HINZUZUFÜGEN:_*\n\n*⚡ @user (Erwähnung für den Benutzer)*\n\n*DENKEN SIE DARAN, DASS DAS „@“ OPTIONAL IST*`}

//grupo-setwelcome.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*GRUPPENWILLKOMMEN WURDE EINGERICHTET*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_SCHREIBEN SIE DIE WILLKOMMENS-NACHRICHT_*\n*_OPTIONAL KÖNNEN SIE VERWENDEN, WAS MIT „@“ IST, UM WEITERE INFORMATIONEN HINZUZUFÜGENOPTIONAL KÖNNEN SIE VERWENDEN, WAS MIT „@“ IST, UM WEITERE INFORMATIONEN HINZUZUFÜGEN:_*\n\n*⚡ @user (Erwähnung für den Benutzer)*\n*⚡ @subject (Gruppenname)*\n*⚡ @desc (Gruppenbeschreibung)*\n\n*DENKEN SIE DARAN, DASS „@“ OPTIONAL SIND*`}

//grupo-setdesc.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*GRUPPENBESCHREIBUNG WURDE KONFIGURIERT*`}

//grupo-setname.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*DER GRUPPENNAME WURDE EINGESTELLT*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 SCHREIBEN SIE DEN NEUEN GRUPPENNAMEN*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*DER NAME DER GRUPPE DARF NICHT MEHR ALS 25 ZEICHEN HABEN*`}

//grupo-restaurarEnlace.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*DER GRUPPENLINK WURDE ZURÜCKGESTELLT*`}

//Button 
const smsSig = () => { return `➡️ NÄCHSTE ➡️`}
const smsSigPrem = () => { return `❤️‍🔥 NÄCHSTE ❤️‍🔥`}
const smsCont18Porn = () => { return `🔞 *INHALT* 🔞`} //texto
const smsCont18Porn2 = () => { return `🔞 *INHALT* 🔞`} //texto
const smsCont18PornP = () => { return `🌟 *INHALT ❤️‍🔥 PREMIUM* 🌟`} //texto
const smsCont18PornP2 = () => { return `INHALT ❤️‍🔥 PREMIUM`} //texto  

//jadibot-serbot.js
const smsIniJadi = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*\n\n*ღ Version of ${global.packname} » _${global.vs}_*\n*ღ JadiBot Version » _${global.vsJB}_*\n\n🟢 *_FUNCTION BE SUB BOT_* 🟢\n\n*➡️ With another cell phone or PC, scan this QR to become a Sub Bot*\n\n*1️⃣ Go to the three dots in the upper right corner*\n*2️⃣ Go to Paired Devices option*\n*3️⃣ Scan this QR code to login*\n\n📢 *¡This QR code expires in 45 seconds!*`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*DIESER BEFEHL WURDE VON MEINEM BESITZER DEAKTIVIERT*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *UM EIN SUB-BOT ZU WERDEN, GEHEN SIE ZUR HAUPTNUMMER*\n*ღ Geben Sie den folgenden Link ein:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *DIE VERBINDUNG WURDE AUF UNERWARTETE WEISE GESCHLOSSEN, WIR WERDEN VERSUCHEN, DIE VERBINDUNG WIEDER ZU VERBINDEN...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *DIE VERBINDUNG WURDE GESCHLOSSEN, SIE MÜSSEN DIE VERBINDUNG MANUELL VERWENDEN #jadibot COMMAND AND RESCAN THE NEW QR CODE*`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *SUCCESSFUL CONNECTION!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *SUCCESSFUL CONNECTION!!! YOU CAN CONNECT USING:*`}
const smsJBCargando = () => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *IS CONNECTED!! PLEASE WAIT MESSAGES ARE LOADING...*\n\n♻️ *AVAILABLE OPTIONS:*\n*» #stop _(Stop Sub Bot Feature)_*\n*» #deletesesion _(Delete all traces of Sub Bot)_*\n*» #jadibot _(Get new QR code to be Sub Bot)_*`}
const smsJBInfo1 = () => { return `💖 *USEFUL LINK*`}
const smsJBInfo2 = () => { return `💖 *The function is stable, if it presents any inconvenience Contact the mail: centergatabot@gmail.com*\n💝 *You can make a voluntary donation by PayPal: ${global.paypal}*\n\n*Thank you very much for the support ${global.packname}*`}

//jadibot-deleteSesion.js
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*USE THIS COMMAND TO THE MAIN BOT*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*I WILL MISS YOU ${global.packname} BYE!! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*YOU HAVE LOGGED OUT AND DELETED ALL TRACES*`}
const smsJBErr = () => { return `*YOU HAVE LOGGED OUT AS A SUB BOT* ♻️`}

//comandos+18-adult.js
const smsContAdult = () => { return `${lenguajeGB['smsAvisoAG']()}*DIE BEFEHLE 🔞 SIE SIND DEAKTIVIERT, WENN DU MEIN SCHÖPFER BIST, VERWENDE #on modohorny*`}

//comandos+18-menu.js
const smsList1 = () => { return `Hast nicht genug`}
const smsList2 = () => { return `\nKlicken Sie hier, um zu kaufen `}
const smsList3 = () => { return `Verfügbare Inhalte 😸`}
const smsList4 = () => { return `Inhalt nicht verfügbar 😿\nKlicken Sie hier, um zu kaufen `}
const smsList5 = () => { return `*Swähle eine Option*\n*aus der Liste, um die zu sehen*\n*Inhalt* 😋`}
const smsList6 = () => { return `👀 SEE LIST 👀`}


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsNoSpam, smsNoSpam2, smsConMenu, smsMalError, smsMalError2, smsMalError3, smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eGataCoins, eGataTickers, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eClegendaria, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4, smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2, smsAntiView, smsAutoLv1, smsAutoLv2, smsAutoLv3, smsAutoLv4, smsAutoLv5, smsAutoLv6, smsAutoLv7, smsAntiSp1, smsAntiSp2, smsAutoStik, smsBottem1, smsBottem2, smsBottem3, smsPremI,
smsAfkM1, smsAfkM2, smsAfkM3, smsAfkM4, smsAfkM5, smsAfkM6, smsAfkM1A, smsAfkM1B, smsChatAn1, smsChatAn2, smsChatAn3, smsChatAn4, smsChatAn5, smsChatAn6, smsChatAn7, smsChatAn8, smsChatAn9, smsChatAn10, smsChatAn11, smsChatAn12, smsChatAn13, smsBotonM1, smsBotonM2, smsBotonM3, smsBotonM4, smsBotonM5, smsBotonM6, smsBotonM7, smsTex1, smsTex2, smsTex3, smsTex4, smsTex5, smsTex6, smsTex7, smsTex8, smsTex9, smsTex10, smsTex11, smsTex12, smsTex13, smsTex14, smsTex15, smsTex16, smsTex17, smsTex18, smsTex19, smsTex20, smsTex21, smsTex22, smsTex23, smsMalused, smsGrupoTime1, smsGrupoTime2, smsGrupoTime3, smsGrupoTime4, smsGrupoTime5, smsGrupoTime6, smsGrupoTime7, smsGrupoTime8, smsGrupoTime9, smsGrupoTime10, smsGrupoTime11, smsGrupoTime12, smsGrupoTime13, smsAddB1, smsAddB2, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsAdveu1, smsMalused2, smsAdveu2, smsAdveu3, smsAdveu4, smsAdveu5, smsAdveu6, smsAdveu7, smsAdveu8, smsAdveu9, smsMalused3, smsAdveu10, smsAdveu11, smsAdveu12, smsDemott, smsDemott2, smsDemott3,
smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsGI10, smsLista22_1, smsCodigoQR, smsConexionOFF, smskick1, smskick2, smskick3, smskick4, smstagaa,
smsSetB, smsSetB2, smsSetW, smsSetW2, smsDest, smsNam1, smsNam2, smsNam3, smsRestGp, smsSig, smsSigPrem, smsCont18Porn, smsCont18Porn2, smsCont18PornP, smsCont18PornP2,
smsIniJadi, smsSoloOwnerJB, smsJBPrincipal, smsJBConexion, smsJBConexionClose, smsJBConexionTrue, smsJBConexionTrue2, smsJBCargando, smsJBInfo1, smsJBInfo2, smsJBDel, smsJBAdios, 
smsJBCerrarS, smsJBErr, smsContAdult, smsList1, smsList2, smsList3, smsList4, smsList5, smsList6 };
