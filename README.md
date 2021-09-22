# tinkerbot

## Problem Statement
. Difficulty in manually assigning specific roles to different channels. (Specifically assigning girls-power channel to all female, who onboards to our discord server after verification.)

## Working
. New Member is asked to type the membership id <br />
. Gender of the user is fetched from the database using the membership id <br />
. If a user is female, the bot dm to the user (DM is done by fetching the discord user id from the message they sent.),  and ask for name. <br />
. If this name matches with the one in database, user is assigned girl power role. (As of now) <br />
. We could add more questions like college, phone no, wit lead for verification purpose. <br />
. If all the data matches, user is assigned the girl power role. <br />
. If a user is male, the bot does nothing. <br />
