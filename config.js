//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2348086541281";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0Q3cVJocDFmNlZ3MUZEU1gxVXB6ckdLNEZpTE1qWXljWG10MG16QlprZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUpIU2ZvamhKN2NpMjFQMUozNSs0MVNRUHhmazA1QlRDejNzNlJMMGhFWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSW1lTTFMQTdDT3JSdk5hN2QvN3ZWTTNPL1prUnFuc3R3ZnF0ZzR4VkdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5ckdDK2FlUkxUWVVrcU04UGJmdUVyYUUwN242ekhjMHdPVWtDbTUycmw4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitCWXZoMU1PcXp0UXNwTU13Mm5qK3hDVFROanlXSHJPNVFvTUM2dXhWbTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFhdWNINHNIMkxra1ZKRENJQkNnZ1VJSkxCNE5XUkZBcHpRVHJGdU4yUTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkVIZHhUazdqODNoQk8zbnMyYXdQbFNObWxZSlQ4dVRDZ0xYbXpNajFIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXlYRURFL3JPc1dNVEh0V2VzZmF5RkRtelc2aTE5c1p2dWU1NzNUbWUyUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd0L05CZXkwV0dBMnFuVGJrQlpXYll3YjU5bmRBUDY1MGxuZUFCdnRRc3JhK0VTNEZHdlNKRCs5NEtuQnhOOUY5MkVKMWZkRHdDTFR6Mkh5dU1NTGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiJGQjJ4NWRkYzg3SHUxbXkxTy9kQkkvMCs4dHVtMWRtMEp3VTJlT2JwbXJBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc1ODAxMjQzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBODk0QUU3QThDRThENUYxRTVGM0E4RThERjEzRjU2MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNDAzMjA4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoMjdFUGZtYVJQaXltSl9PdEZEMUVnIiwicGhvbmVJZCI6IjQ2MDQyNDY5LWEwNjgtNDkxYS05N2VlLTE3OGUxNzc0NGY5YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUmx0dGd5WXB3T0ZJL20rNjI5SzYvOE8ya0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDRydXVjaEV6WVZhSnBGR09kNEd5TVlXK1g4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkU5NzdZWDdWIiwibWUiOnsiaWQiOiIyNTQ3NTgwMTI0Mzg6OTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2YlPCdkKvwnZCJ4bSP0LXwnZeF4Zev8J2RjuG1kPCdkY/DvPCdlKTPiyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnpqeFBBQ0VQbVNwN1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoienBVMytSUjgxL3ZzWXpNU3dQNVRvTnF4UzlYTHNtdEIvQkhZSDQwOUxqaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidXdFckVqTklqb09uTkFmR2pWSnREY0JvT3BmT2ZtSVRmU0p0Ykd0VUt4MEFmdHh5QjVudDNONmlQZTUzVmFPN05RdTlLMENnc212MFhHR21RMGRWREE9PSIsImRldmljZVNpZ25hdHVyZSI6IjZIYTlaK0x4TmdOVjYvQ0pWY0ZMSmdYSXdxcHlSU3FqbHZValI4b21IWU9EUmQrdmZWTFkySDBZT0hWS25kT3VHdXZybHVNcTNrZUZDUmIxN0pYcGlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU4MDEyNDM4OjkzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmM2Vk4va1VmTmY3N0dNekVzRCtVNkRhc1V2Vnk3SnJRZndSMkIrTlBTNDUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI0MDMyMDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ1ZsIn0=|
  ""
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
