import { API_KEY, TIMEOUTSEC } from "./config.js";

const timeout = function (s) {
  // Если в течении n секунд ничего не произойдет, этот промис выдаст Reject с ошибкой
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const getJSON = async (url) => {
  const res = await Promise.race([fetch(url), timeout(TIMEOUTSEC)]); // Если в течении n секунд данные не успеют загрузится, то промис выдаст reject
  if (!res.ok) throw new Error(res.statusText);

  return await res.json();
};

const sendJSON = async (url, data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await Promise.race([
    fetch(`${url}?key=${API_KEY}`, options),
    timeout(TIMEOUTSEC),
  ]); // Если в течении n секунд данные не успеют загрузится, то промис выдаст reject
  if (!res.ok) throw new Error(res.statusText);

  return await res.json();
};

export { timeout, getJSON, sendJSON };
