import { apiInstance } from "./index.js";

const api = apiInstance();

function getTheme(themeId, success, fail) {
    api.get(`/theme/${themeId}`).then(success).catch(fail);
}

function getThemeList(success, fail) {
    api.get(`/theme`).then(success).catch(fail);
}

export { getTheme, getThemeList };