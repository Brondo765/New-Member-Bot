# New-member-bot:
Discord bot which adds a new member to a specified role within the server.

## Requirements:
- Discord server and Admin permissions
- `Node.js` on valid machine with (Windows/Linux/MacOS) installed

## Warning:
This bot requires a machine connected to the internet in order to fulfill its
duties.

It will NOT appear online immeditately when added to a server!

# Step 1:
## Add Bot to Server:

Click this link to add New-member-bot to your server:
https://discordapp.com/api/oauth2/authorize?client_id=695025002512384000&permissions=268511248&scope=bot

***Note: The person adding the bot needs “Manage Server” permissions to do so.***

## Installation:
In a command/terminal prompt (from an empty folder where you want your installation) run the following:

`git clone` https://github.com/Brondo765/New-member-bot/

Once finished:

- Locate the `config-example.json` file
- Rename `config-example.json` to `config.json`

# Step 2:
## Enable Developer Mode:
Setting up the configuration file is an important step for the bot 
to run online with your specific server/channels/roles.

To enable developer mode for your Discord account on the Discord app:

Go to *Settings -> Appearance -> Advanced -> Tick the Developer Mode option.*

This allows you to copy your Server ID, Role IDs, and Channel IDs for the servers you manage.

Copy these to a notepad or within the config.json file that match the value names.

*Copy your Server ID: right-click on the server bubble -> select Copy ID.*

*Copy your Channel ID: right-click on the channel -> select copy ID.*

*Copy your Role ID: right-click the server -> Server Settings -> Roles -> right-click on the role -> select Copy ID.*

## Get your Token:
In order to get the bot online, you need to create your own application under your
Discord account and retrieve your token and specific server settings.

Head over to https://discordapp.com/developers.
- Login with your Discord credentials
- Go to *Applications* tab if it is not open already
- *New Application* and name your bot something similar to mine
- Now head to *Bot -> Token -> Click to Reveal Token*
- Copy and paste this token into the config.json file marked "yourClientToken"

# Step 3:
## Start-up:
To start the bot: 
- Open the command prompt/terminal to the location your folder is located
- Type `node bot.js` and a console message should appear stating the bot is online and connected
