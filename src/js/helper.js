import { API_KEY, TIMEOUTSEC } from "./config.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const getJSON = async (url) => {
  const res = await Promise.race([fetch(url), timeout(TIMEOUTSEC)]);
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
  ]);
  if (!res.ok) throw new Error(res.statusText);

  return await res.json();
};

export { timeout, getJSON, sendJSON };
