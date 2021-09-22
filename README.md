# tinkerbot

## Problem Statement
. Difficulty in manually assigning specific roles to different channels. Specifically assigning girls-power channel to all female, who onboards to our discord server after verification.

## Working
. New Member is asked to type the membership id
. Gender of the user is fetched from the database using the membership id
. If a user is female, the bot dm to the user (DM is done by fetching the discord user id from the message they sent.),  and ask for name.
. If this name matches with the one in database, user is assigned girl power role. (As of now)
. We could add more questions like college, phone no, wit lead for verification purpose.
. If all the data matches, user is assigned the girl power role.
. If a user is male, the bot does nothing.
