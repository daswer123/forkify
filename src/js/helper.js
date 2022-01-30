import { TIMEOUTSEC } from "./config.js";

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

export { timeout, getJSON };
