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
| '/messages' | Displays all current messages attatched to the user id |