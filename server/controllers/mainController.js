const {User} = require('../models/models');
const {Post} = require('../models/models');
const {Comment} = require('../models/models');

const mainController = {};

// ---------- POSTS ----------

// Getting all posts
mainController.getAllPosts = async (req, res, next) => {
  try {
    console.log('IN THE getAllPosts CONTROLLER:')
    const postsArray = await Post.find({}).sort({date:-1}).limit(12);
    res.locals.postsArray = postsArray;
    // console.log('res.locals.postsArray: ', res.locals.postsArray)
    return next();
  } catch(err) {
    return next({
      log: `getAllPosts: ${err}`,
      status: 400,
      message: { err: 'error occurred in mainController.getAllPosts controller' },
    });
  };
}

// Creating a post
mainController.createPost = (req, res, next) => {
    const {postTitle, postBody, postTag } = req.body;
    const userId = req.cookies.ssid;
    Post.create({ userId, postTitle, postBody, postTag })
    .then((post) => {
      res.locals.post = post.id;
      return next();
    })
    .catch((err) => {
      return next({
        log: `createPost: ${err}`,
        status: 400,
        message: { err: 'error occurred in createPost controller' },
      });
    });
}

// ---------- COMMENTS ----------

// Get Post Comments (for individual post page):
mainController.getPostComments = async (req, res, next) => {
  try{
    const {postId} = req.body;
  
    const comments = await Comment.find({postId: postId}).sort({date:-1});
  
    res.locals.comments = comments;
    console.log('res.locals.comments: ', res.locals.comments);
    return next();
  } catch {
    return next({
      log: `getPostComments: ${err}`,
      status: 400,
      message: { err: 'error occurred in mainController.getPostComments controller' },
    });
  }
}

// Creating Post Comments
mainController.createPostComments = (req, res, next) => {
    const {postId, commentBody, numLikes} = req.body;

    Comment.create({ postId, commentBody, numLikes})
    .then((comment) => {
      res.locals.comment = comment.id;
      return next();
    })
    .catch((err) => {
      return next({
        log: `createPostComments: ${err}`,
        status: 400,
        message: { err: 'error occurred in createPostComments controller' },
      });
    });
}


// Seaching Posts
mainController.searchPosts = async (req, res, next) => {
  try {
    let {searchString} = req.body;
    searchString = searchString.toLowerCase();
    searchString = searchString.split(' ');
    console.log('searchString: ', searchString);

    console.log('IN THE searchPosts CONTROLLER:')
    let postsArray = await Post.find({}).sort({date:-1});
    // console.log('postsArray: ', postsArray[1].postTitle.toLowerCase());

    // Filter posts that match searchString:
    
    postsArray = postsArray.filter((post) => {
      const values = Object.values(post);
      
      return values.some(value => searchString.includes(value));
      // if(post.postTitle.toLowerCase().includes(searchString.toLowerCase())) { return true }
      // else {return false};
    });

    console.log('postsArray Filtered: ', postsArray);

   // {"postTitle": {$regex : ".*This*"}
    
    res.locals.postsArray = postsArray;
    // console.log('res.locals.postsArray: ', res.locals.postsArray)
    return next();
  } catch(err) {
    return next({
      log: `searchPosts: ${err}`,
      status: 400,
      message: { err: 'error occurred in mainController.searchPosts controller' },
    });
  };
  
}


// mainController.searchPosts = async (req, res, next) => {
//   const searchTerm = req.query.term; 

//   try {
//     const posts = await Post.find({
//       $text: { $search: searchTerm }
//     });
//   res.json(posts);

//   } 
//   catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// };



// Updating a post
// updatePost(req, res, next) {
//     const { postId, postTitle, postBody, newPostTitle, newPostBody } = req.body;

//     Post.findOneAndUpdate(
//       { postTitle: postTitle },
//       { postTitle: newPostTitle },
//       { new: true }
//     )
//     .then((data) => {
//       res.locals.dataUpdated = data;
//       return next();
//     })
//     .catch((err) => {
//       return next({
//         log: 'updatePost: error',
//         status: 400,
//         message: { err: 'error occurred in updatePost controller' },
//       });
//     });
// }


// Deleting a post

// mainController.deletePost = (req, res, next) => {
//     const { postId } = req.params;

//     Post.findOneAndDelete({ postId: postId })
//     .then((data) => {
//       res.locals.dataDeleted = data;
//       return next();
//     })
//     .catch((err) => {
//       return next({
//         log: 'deletePost: error',
//         status: 400,
//         message: { err: 'error occurred in deletePost controller' },
//       });
//     });
// }



module.exports = mainController;