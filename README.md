# New-member-bot:
Discord bot which adds a new member to a specified role within the server.

## Requirements:
- Discord server and Admin permissions
- `Node.js` and `git` on valid machine with (Windows/Linux/MacOS) installed

## NOTICE:
This is a guide on how to make a New-member-bot and will require a machine connected to the internet in order to fulfill its duties 24/7.

It will NOT appear online immeditately when you add your bot to the server! Please follow the steps below exactly as I have laid out.

# Step 1:
## Installation of Code:
Open a command/terminal prompt and make sure your path leads to an empty folder where you want your installation saved.

Run the following:

`git clone` https://github.com/Brondo765/New-member-bot.git

Let the files download to the specified folder and one a new line enter:

npm discord.js

This will install the modules needed for the Discord API to work.

Once finished:
- Locate the `config-example.json` file in your folder
- Change the *rules* section to whatever you want new users to see
- Save as `config.json` and delete the `config-example.json` file.

# Step 2:
## Creating a Bot:
Creating your bot is simple, head over to https://discordapp.com/developers.
- Login with your Discord credentials
- Go to the *Applications* tab if it is not open already
- Click *New Application* and name your application whatever you want
- Once named, you should see several tabs on the left, click on *Bot* and add its username
- Then, click -> *OAuth2 tab -> Under Scopes section checkmark bot -> Scroll down to see Bot Permissions section -> Select Administrator if you don't care about permissions for the bot*

***(Or if you are conservative with permissions checkmark -> Manage Server, Manage Roles, Manage Channels, Send Messages, Manage Messages, and Read Message History)***

## Adding the Bot to your Server:
- Copy the link above *Bot Permissions* and paste this into a new tab on your Browser
- Add the bot to the server in the drop down menu
- Go back to the Discord Devs tab and head to *Bot -> Token -> Click to Reveal Token*
- Copy and paste this token into the config.json file in the location marked "yourClientToken"

# Step 3:
## Enable Developer Mode on your Discord Account:
Setting up the configuration file is an important step for the bot 
to run online with your specific server/channels/roles.

To enable developer mode for your Discord account on the Discord app:

*Settings -> Appearance -> Advanced -> Tick the Developer Mode option.*

This allows you to copy your Server ID, Role IDs, and Channel IDs for the servers you manage.

To copy your specific IDs for the config file:

**Server ID: right-click on the server bubble -> select Copy ID**

**Channel ID: right-click on the channel -> select Copy ID**

**Role ID: right-click the server bubble -> Server Settings -> Roles -> right-click on the role you want new members to join -> select Copy ID**

Add these IDs to the config.json file in place of the holder strings with the same names.

# Step 4:
## Start-up:
Everything should be ready to get your bot started, the logic is already programmed. You just need to turn the bot on and test if it works!

To start the bot: 
- Open the command/terminal prompt to the path for `New-member-bot` folder
- Enter `node bot.js` and a console message should appear stating the bot is online and connected
- Check your Discord server to make sure the bot appears online in the member section
- Then try adding someone to the server, it should automatically assign them the role you wanted with a message sent mentioning the user who joined and listing the rules you changed previously!

I hope this is fairly detailed enough for you to get the simple bot up and running. If you have any questions there are plenty of guides online that can pretty much answer anything related to Discord bots. But first read this README in its entirety, it should provide you with all the necessary information to get up and running in no time!
