import { apiInstance } from "./index.js";

const api = apiInstance();

function getStateList(success, fail) {
    api.get(`/state`).then(success).catch(fail);
}

function getCityList(stateId, success, fail) {
    api.get(`/state/${stateId}/city`).then(success).catch(fail);
}

export { getStateList, getCityList };