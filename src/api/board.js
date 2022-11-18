import { apiInstance } from "./index.js";

const api = apiInstance();

function getPostListByBoardId(boardId, success, fail) {
    api.get(`/board/${boardId}/post`).then(success).catch(fail);
  }
  
  function postPost(post, success, fail) {
    api.post(`/board/${post.postId}/post`, JSON.stringify(post)).then(success).catch(fail);
  }
  
  function getPost(boardId, postId, success, fail) {
    api.get(`/board/${boardId}/post/${postId}`).then(success).catch(fail);
  }
  
  function putPost(post, success, fail) {
    api.put(`/board/${post.postId}/post`, JSON.stringify(post)).then(success).catch(fail);
  }
  
  function deletePost(boardId, postId, success, fail) {
    api.delete(`/board/${boardId}/post/${postId}`).then(success).catch(fail);
  }
  
  export { getPostListByBoardId, postPost, getPost, putPost, deletePost };