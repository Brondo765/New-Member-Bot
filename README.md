# New-member-bot
Discord bot which adds a new member to a specified role within the server.

***Note:***

***This bot requires a hosting machine in order to fulfill its
duties.It will NOT appear online until you follow the steps I provide below.***

## Requirements
- Discord server and Admin permissions
- `Node.js` on valid machine with (Windows/Linux/MacOS) installed

## Add to Server

Click this link to add New-member-bot to your server:
https://discordapp.com/api/oauth2/authorize?client_id=695025002512384000&permissions=268511248&scope=bot

***Note: The person adding the bot needs “Manage Server” permissions to do so.***

## Installation
In a command/terminal prompt (from an empty folder where you want your installation) run the following:

`git clone` https://github.com/Brondo765/New-member-bot/

Once finished:

- Locate the `config-example.json` file
- Rename `config-example.json` to `config.json`

## Developer Enable
Setting up the configuration file is an important step for the bot 
to run online with your specific server/channels/roles.

To enable developer mode for your Discord account go to

*Settings -> Appearance -> Advanced -> Tick the Developer Mode option.*

This allows you to copy your Server ID, Role IDs, and Channel IDs for the servers you manage.

## Get your Token
In order to get the bot online, you need to create your own application under your
Discord account and retrieve your token and specific server settings.

Head over to https://discordapp.com/developers.
- Login with your Discord credentials
- Go to *Applications* tab if it is not open already
- *New Application* and name your bot something similar to mine
- Now head to *Bot -> Token -> Click to Reveal Token*
- Copy and paste this token into 

## Start-up
To start the bot:
- Make sure you have ran `Node` from your command/terminal prompt 
- Once in `Node` type `node bot.js` and a console message should appear
