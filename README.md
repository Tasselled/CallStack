# CallStack
Creating a community for developers

## Creating a new user
Send a fetch post request to the server with the body containing the desired information. No information returned.

```
fetch('api/', {
  method: 'POST',
  headers: {
    'Content-Type': 'Application/JSON',
  },
  body: JSON.stringify({
    name: '<name>',
    userId: '<username>',
    password: '<password>',
  }),
});
```