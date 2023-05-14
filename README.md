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

### creating a user with GitHub OAuth

Using GitHub will return an access token object that will be stored locally in the user's browser as well as in our MongoDB servers. Future access to the user will be granted through verifying the token in the user's cookies. User can generate a new token if their token expires or is lost by re-authenticating through GitHub.

```
// example access token object
{
  access_token: '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',
  token_type: 'bearer',
  scope: ''
}
```

### Find user based on username

Send a fetch get request to the server with the parameters containing the required information. Returned data will be and object.

```
fetch('/login/<username>')
.then(res => res.json())

// example response object
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
