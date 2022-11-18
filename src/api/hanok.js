import { apiInstance } from "./index.js";

const api = apiInstance();

function getHanokList(success, fail) {
    api.get(`/hanok`).then(success).catch(fail);
}

function getHanok(hanokId, success, fail) {
    api.get(`/hanok/${hanokId}`).then(success).catch(fail);
}

export { getHanokList, getHanok };