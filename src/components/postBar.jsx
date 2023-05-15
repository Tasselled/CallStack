import React from "react";
import TagDropDownButton from "./TagDropDownButton";
import TagLinks from "./tagLinks";
import { useSelector, useDispatch } from "react-redux";
import { setAllPosts } from '../store/userReducer';

function PostBar () {
  const dispatch = useDispatch();
  const currentUser = useSelector(state=>state.userReducer.currentUser)

  function mockPost  (newPostTitle, newPostBody, username, postTag) {
      dispatch(setAllPosts(
        <div>
            <div>
              <img src='' alt='user-photo' />
            </div>

            <button
              className='mainPost'
              onClick={() => {
                dispatch(
                  setCurrentPost(
                    <div>
                      <h1>{newPostTitle}</h1>
                      <p>{newPostBody}</p>
                      <div>{postTag}</div>
                      <div>5</div>
                      <div>2</div>
                    </div>
                  )
                );
                navigate(
                  `../${username}/posts`
                );
              }}>
              <h1>{newPostTitle}</h1>
              <p>{newPostBody}</p>
              <div>{postTag}</div>
              <div>4</div>
              <div>2</div>
            </button>

            <div>
              <button>Tags</button>
              <button>Like</button>
              <button>Comment</button>
              <button>Date</button>
            </div>
          </div>
      ))
  }

  function makePost (newPostTitle, newPostBody, username, postTag) {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'Apllication.JSON',
      },
      body: JSON.stringify({
        newPostTitle: newPostTitle,
        newPostBody: newPostBody,
        postTag: postTag
      })
    }).then(mockData=> {
      dispatch(setAllPosts(
        <div>
            <div>
              <img src='' alt='user-photo' />
            </div>

            <button
              className='mainPost'
              onClick={() => {
                dispatch(
                  setCurrentPost(
                    <div>
                      <h1>{newPostTitle}</h1>
                      <p>{newPostBody}</p>
                      <div>{postTag}</div>
                      <div>{numLikes}</div>
                      <div>{numComments}</div>
                    </div>
                  )
                );
                navigate(
                  `../${username}/posts`
                );
              }}>
              <h1>{newPostTitle}</h1>
              <p>{newPostBody}</p>
              <div>{postTag}</div>
              <div>{numLikes}</div>
              <div>{numComments}</div>
            </button>

            <div>
              <button>Tags</button>
              <button>Like</button>
              <button>Comment</button>
              <button>Date</button>
            </div>
          </div>
      ))
    })
  }
  return (
    <div>
      <div>
        <img src="" alt="user-profile-photo" />
      </div>
      
      <div>
        <input type="text" placeholder="Enter a title" id="newPostTitle"/>
        <input type="text" placeholder="Enter your post" id="newPostBody"/>

        <div className="dropdown tagDiv">
          <TagDropDownButton tagLink='Tag'/>
          <TagLinks />
        </div>
        
        <button type="submit"
        onClick={() => {
          mockPost(document.querySelector('#newPostTitle').value, document.querySelector('#newPostBody').value, currentUser, 15)
        }}>
          Post
        </button>
      </div>
        
    </div>
  )
    
   
}

export default PostBar;