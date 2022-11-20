import { apiInstance } from "./index.js";

const api = apiInstance();

function getReplyListByUserId(userId, success, fail) {
    api.get(`/reply/user/${userId}`).then(success).catch(fail);
  }
  
  function postReply(reply, success, fail) {
    api.post(`/reply`, JSON.stringify(reply)).then(success).catch(fail);
  }
  
  function putReply(reply, success, fail) {
    api.put(`/reply`, JSON.stringify(reply)).then(success).catch(fail);
  }
  
  function deleteReply(replyId, success, fail) {
    api.delete(`/reply/${replyId}`).then(success).catch(fail);
  }
  
  export { getReplyListByUserId, postReply, putReply, deleteReply };