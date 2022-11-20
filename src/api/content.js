import { apiInstance } from "./index.js";

const api = apiInstance();

function getContentTypeList(success, fail) {
    api.get(`/content/type`).then(success).catch(fail);
}

function getContentListByCriteria(ContentSearchCriteria, success, fail) {
    api.post(`/content`, {params : ContentSearchCriteria}).then(success).catch(fail);
}

export { getContentTypeList, getContentListByCriteria };