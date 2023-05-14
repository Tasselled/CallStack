# CallStack
Creating a community for developers

## Connecting to the Server
Connect to the server to create, read, update, and delete user, post and comment data

### Creating a new user
Send a fetch post request to the server with the body containing the required information. No information returned.

```
fetch('/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'Application/JSON',
  },
  body: JSON.stringify({
    name: '<name>',
    username: '<username>',
    password: '<password>',
  }),
});
```

### Find all users based on name
Send a fetch get request to the server with the parameters containing the required information. Returned data will contain an array of all people with that name .

```
fetch('/login/<name>')
.then(res => res.json())
```