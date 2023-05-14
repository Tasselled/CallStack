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

### Creating a user with GitHub OAuth

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
<br/>

## Required states

States are required for responsive and dynamic applications. Most user interactions will require a state, as well as anything dynamically rendered should be dependant on states. All states that are required to persist through reload should be stored in database.

### Login sign up states

**errorMessage**<br/>
**loggedIn**

Login states allow us to render error messages when attempting to login or sign up. Also allows us to give access to confidential information available for members only. Can be set using cookies.

### User states

**currentUser**<br/>
**userFirstName**<br/>
**userLastName**<br/>
**userProfilePic**<br/>
**userData**<br/>
**likedPosts**<br/>
**userPosts**<br/>
**userLikes**<br/>
**userFriends**<br/>
**userBlocks**<br/>
**userComments**

User states will be stored in database and loaded into state when logged in or signed up. User states will allow us to render user information through multiple pages and allow logging out and logging to switch seamlessly between users. Can be set using cookies.

### Main Page States

**allPosts**<br/>
**selectedFilters**<br/>
**sortPreference**<br/>
**searchKeyWords**<br/>
**searchResultPosts**

Main page states allow us to search and filter posts. Posts can be sorted by different preferences (date, user, title, tags).

### Post states

**currentPost**<br/>
**postTitle**<br/>
**postBody**<br/>
**postLikesNum**<br/>
**postDislikeNum**<br/>
**postCommentsNum**<br/>
**postTags**<br/>
**postDate**

Post states will dynamically render post information (such as number of likes, comments, tags, and created date). These states could be nested inside main page states for the main pages. A currentPost state will be used for individual post pages.

### Comment states

**commentBody**<br/>
**commentLikesNum**<br/>
**commentDislikesNum**<br/>
**commentDate**<br/>
**commentUser**

Comment states renders comment data. This can be nested in post states as all comments will be in a post.
<br/><br/>

## State structure

- errorMessage // **html p element**
- loggedIn // **boolean**

- currentUser // **string**
- userFirstName // **string**
- userLastName // **string**
- userProfilePic // **string**
- userData // **array of strings**
  - userEmail // **string**
  - userPreferences // **string**
- likedPosts // **array of strings**
  - postID // **string**
- userPosts // **array of strings**
  - postID // **string**
- userLikes // **array of strings**
  - postID // **string**
- userFriends // **array of strings**
  - userFriendsID // **string**
- userBlocks // **array of strings**
  - userEnemiesID// **string**
- userComments // **array of strings**
  - commentID // **string**

- allPosts // **array of objects**
  - singlePost // **object**
    - postID // **string**
    - postTitle // **string**
    - postLikesNum // **number**
    - postDislikeNum // **number**
    - postCommentsNum // **number**
    - postTags // **string**
    - postDate // **string**
- selectedFilters // **array of strings**
- sortPreference // **array of strings**
- searchKeyWords // **array of strings**
- searchResultPosts // **array of strings**

- currentPost // **object**
  - postTitle // **string**
  - postBody // **string**
  - postLikesNum // **number**
  - postDislikeNum // **number**
  - postCommentsNum // **number**
  - postTags // **string**
  - postDate // **string**
  - allComments // **array of objects**
    - singleComment // **object**
      - commentBody // **string**
      - commentLikesNum // **number**
      - commentDislikesNum // **number**
      - commentDate // **string**
      - commentUser // **string**
