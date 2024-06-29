const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+92 308 0781110";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_50_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMzLFxuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNixcbiAgICAgICAgMTEwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICA4MixcbiAgICAgICAgMTE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OCxcbiAgICAgICAgNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY0LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyLFxuICAgICAgICA0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU0LFxuICAgICAgICA3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImcrU1AwSi9iWk5VdXlCQU10b2cyRXVjdDVJL1hoRXcybVg5N1MvNlF6OEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDgwNzgxMTEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzNDY1ODBCNTVBOURBQ0UxQzBENzQxN0UwNTE0RDAxOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk2MzY2MjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSG1XODR4eTZSd1NMM0lXQm1ROGhuUVwiLFxuICBcInBob25lSWRcIjogXCJjODlhZTY5ZS00OTIxLTRlOGEtOGRjNS03MDRiNWQxYjA5NWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgMjQ3LFxuICAgICAgMjEwLFxuICAgICAgMTQyLFxuICAgICAgMTM1LFxuICAgICAgMjQ0LFxuICAgICAgMjA5LFxuICAgICAgNDEsXG4gICAgICAxNzIsXG4gICAgICA0NSxcbiAgICAgIDE3LFxuICAgICAgMTA3LFxuICAgICAgMjA3LFxuICAgICAgMTUwLFxuICAgICAgMjA5LFxuICAgICAgOTQsXG4gICAgICAxMjIsXG4gICAgICA4NSxcbiAgICAgIDUxLFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgNjgsXG4gICAgICAzNSxcbiAgICAgIDc3LFxuICAgICAgMTIsXG4gICAgICAxNzUsXG4gICAgICAyMzAsXG4gICAgICAyNDEsXG4gICAgICAxOTcsXG4gICAgICA0MixcbiAgICAgIDEzNixcbiAgICAgIDAsXG4gICAgICAxNjYsXG4gICAgICA0MixcbiAgICAgIDI0NCxcbiAgICAgIDExMCxcbiAgICAgIDEwNixcbiAgICAgIDE2OSxcbiAgICAgIDExOSxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRHR01MTVg2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwODA3ODExMTA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFJIEpBQU5cIixcbiAgICBcImxpZFwiOiBcIjIyMjY2ODQxODc1MjUzNzozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3UzZOb0RFSVdsL3JNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiemV5SThsaVpuU3lIT2taQzlRMlZJLy9nbWJtZ0JyZDZHc1NJWmpQTGhUZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5UkNDeFo2MXN5bFdSaE5qNVlUaDl3c3gxSjExZ3NjNEtDaC9rOEQyY0dsUDNZcHV5L210ZHNzazZIVjI3NHBzN1ZPUGg4RGxqUnJFb2N6MUhvVE1BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvbnZiSlV1ekVNZ1Q0V1RySFE2bE1iVklTMXI2aldvc0l6Q3ZnRUh5Vng0TzVvN0prU0hRWDllNVJxMGdIVCtiRVM5TGhYN1VnWjRkc3VPbUk0a2VBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwODA3ODExMTA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTYzNjYxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVCU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUJTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOWJOUVdIdUtkN0ZCSzlMd09FRFZ3dnBJTXB6c1dxT3FsS25jVzdOS1o3dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5OTU3NjQ0OTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTYzNjYxOTAwNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
