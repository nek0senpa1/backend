# backend
back end for safe space group app

# Endpoints to register, login, and get info

| Endpoint | Description |
| --- | --- |
| '/' | Displays a short welcome message just to make sure things work |
| '/register | register a new user with { username: xxx, password: xxx, phone: xxxxxxxxxx } ID auto assigned |
| '/login' | login with { username: xxx, password: xxx } and you'll get a welcome message and token |
| '/test' | displays a list of registered users IF login and auth token are present |

# Once logged in and you've pushed to jwt to headers

| Endpoint | Description |
| --- | --- |
| '/addmessage' | allows the adding of messages with { message: xxxx xxx xxxx xxxxxx } format |
| '/messages' | Displays all current messages attatched to the user id, with message id |
| '/deletemessages/:id' | Deletes the message with the ID number sent |

# Generic Login info:

| Login | Password |
| --- | --- |
| user | pass |
| Harry10 | Potter |

# Heroku does... things
It appears as though HerokuApp does some strange things with servers sometimes.  New users
will disappear every 4-6 hours it seems.  But anything seeded will stay permanently.  So if
there is data you want to be there no matter what (for a pre-existing user) let me know.

# Twilio Facts
The text message portion does NOT work with the server UNLESS you've verified with
the trial account ID, which I'll have to do.