let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	const sections = [
   {
	title: `┊• List Options`,
	rows: [
	    {title: "🗿 | Jangan pencet", rowld: `${usedPrefix + command} Aku sange sama loli`},
	]
    },
]

const listMessage = {
  text: ' ',
  footer: botdate,
  title: `*––––––『 OPTIONS 』––––––*`,
  buttonText: "Click Here!",
  sections
}

  conn.sendButton(m.chat, `*––––––『 OPTIONS 』––––––*
🗂️ *Type:* ${type} 
📊 *Status:* Succes ✅
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`,wm, null, [[`${isEnable ? '✖️ Disable' : '✔️ Enable'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['🎀 Menu', '.menu']],m)
}
handler.help = ['tess']
handler.tags = ['group', 'owner']
handler.command = /^(tess)$/i

export default handler
