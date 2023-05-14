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
    firstName: '<first name>',
    lastName: '<last name>',
    username: '<username>',
    password: '<password>',
  }),
});
```

### Find user based on username
Send a fetch get request to the server with the parameters containing the required information. Returned data will be and object.

```
fetch('/login/<username>')
.then(res => res.json())

// response value

{
  _id: <userID>,
firstName: "Sooji",
lastName: "Kim",
profilePic: "someUrl",
username: "sjkim",
password: "1234",
__v: 0
}
```