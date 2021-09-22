const Discord = require("discord.js");
const mongoose = require("mongoose");
require("dotenv").config();
const client = new Discord.Client();
var userDetails;
var serverId;
var schemaDetails = new mongoose.Schema({
  mnumber: String,
  fname: String,
  mail: String,
  gender: String,
  tId: String,
});
var User = mongoose.model("User", schemaDetails);

client.once("ready", async () => {
  console.log("Ready!");
  try {
    await mongoose.connect(
      process.env.MONGOURL,
      {}
    );
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});
client.on("message", async (message) => {
  isName = false;
  if (message.author.bot) return;
  if (message.channel.type == "dm") {
    // const args = message.content.split(" ");
    if (message.content) {
      if (userDetails.fname.toLowerCase()==(message.content.toLowerCase())) {
        const guild = client.guilds.cache.get(serverId);

        var dmUser = message.author.id;

        var isMember = guild.members.cache.get(dmUser);

        // if true
        if (isMember) {
          isMember.roles.add("889016777487581254");
          message.reply("Role Assigned");
        } else {
          message.reply("You are not part of TH");
        }
      }
    }
  }

  if (message.channel.type != "dm") {
    //if(message.content.length()>17)
    execute(message);
    return;
  }
});

async function execute(message) {
  const args = message.content.split(" ");

  serverId = message.guild.id;


  await findUser(args[0]);
  client.users.fetch(message.member.user.id).then(async (user) => {
    if (userDetails.gender == "female") {
      user.send("When one woman helps another, amazing things can happen. Professional careers leap forward. That's what Women in Technology is all about. We understand the unique challenges you face. To get started, follow the given steps: ")
      user.send("Enter your Registered Name");

    }
  });
}
async function findUser(tId) {
  userDetails = await User.findOne({ tId: tId });

  return userDetails;
}
client.login(process.env.BOTTOKEN);