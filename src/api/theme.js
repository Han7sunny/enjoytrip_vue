import { apiInstance } from "./index.js";

const api = apiInstance();

// function getTheme(themeId, success, fail) {
//   api.get(`/theme/${themeId}`).then(success).catch(fail);
// }

async function getTheme(themeId) {
  return await api.get(`/theme/${themeId}`);
}

function getThemeList(success, fail) {
  api.get(`/theme`).then(success).catch(fail);
}

export { getTheme, getThemeList };
