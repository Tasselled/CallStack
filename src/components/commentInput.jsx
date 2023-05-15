import React from 'react';
import '../stylesheets/postPageStyles.scss'
import { setNewComment, setErrorMessage} from '../store/userReducer';
import { useDispatch, useSelector } from 'react-redux'; 

function CommentInput() {
    let dispatch = useDispatch();
    //onClick of comment button, send a post request of the comment to the database
        //then update state of currentComments 
    function postComment(comment){
        fetch('/comment', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON',
            },
            body: JSON.stringify({
              commentBody: comment,
            }),
          })
          .then((res) => {
            if (res.body) {
              dispatch(setErrorMessage([]))
              dispatch(setNewComment(comment));
            } else {
              dispatch(setErrorMessage([<p></p>]))
            }
          })
          
    }

    return (
        <div class="commentBox">
            <input class="input" placeholder="Write your comment here"></input>    
            <button class="commentButton" type="submit" onClick={(() => {postComment(document.querySelector('.input').value)} )}>Comment</button> 
        </div>
       )
}

export default CommentInput;