/**
 * VANilla javascript BInder (VANBI)
 * @author Vitor Pêgas
 * @description VANBI is a simple framework for data binding on JS Elements
 * @version 1.2
 */

/**
 * @description Posts to URL the provided DATA
 * @param {String} url
 * @param {Object} data
 * @returns
 */
async function post(url = "", data = {}, headers = {}) {
  return fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  })
    .then(status)
    .then(json)
    .catch((e) => console.error(e));
}

function json(response) {
  return response.json();
}

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}
