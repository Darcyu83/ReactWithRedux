import { FETCH_COMMENTS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from './types';

export const fetchComments = () => {
    return(dispatch)=> {
        dispatch(fetchCommentRequest())
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(comments =>  dispatch(fetchCommentSuccess(comments)))
        .catch(error => dispatch(fetchCommentFailure(error)))
    }
}

const fetchCommentRequest = () => {
    return {
        type : FETCH_COMMENTS_REQUEST
    }
}


const fetchCommentSuccess = (comments) => {
   console.log(comments)
    return {
        type : FETCH_COMMENTS_SUCCESS,
        payload : comments
    }
}

const fetchCommentFailure = (error) => {
    return {
        type : FETCH_COMMENTS_FAILURE,
        payload : error
    }

}