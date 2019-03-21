# backend
back end for safe space group app

# Endpoints to register, login, and get info

| Endpoint | Description |
| --- | --- |
| '/' | Displays a short welcome message just to make sure things work |
| '/register | register a new user with { username: xxx, password: xxx, phone: xxxxxxxxxx } ID auto assigned. Phone number in 10-digit format. (no 1's at the front) |
| '/login' | login with { username: xxx, password: xxx } and you'll get a welcome message and token |
| '/test' | displays a list of registered users IF login and auth token are present |

# Once logged in and you've pushed the jwt to headers as 'Authorization'

| Endpoint | Description |
| --- | --- |
| '/addmessage' | allows the adding of messages with { message: xxxx xxx xxxx xxxxxx } format |
| '/addmessage' | ALTERNATE - ADD a timer { message: xxxx xxx xxxx xxxxxx, timer: [milliseconds] } send a number, or don't, if you want default of 30 seconds, don't send a timer, if you want a specific delay on the message send in milliseconds  |
| '/messages' | Displays all current messages attatched to the user id, with message id |
| '/deletemessages/:id' | Deletes the message with the ID number sent |

# Generic Login info:

| Login | Password |
| --- | --- |
| user | pass |
| Harry10 | Potter |

#Final Test
Final test passed 3/21/2019.
-All endpoints are working.

# Heroku does... things
It appears as though HerokuApp does some strange things with servers sometimes.  New users
will disappear every 4-6 hours it seems.  But anything seeded will stay permanently.  So if
there is data you want to be there no matter what (for a pre-existing user) let me know.

# Twilio Facts
The text message portion does NOT work with the server UNLESS you've verified with
the trial Twilio account ID, which I'll have to do. So just let me know.