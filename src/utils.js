export const getUserData = () => JSON.parse(localStorage.getItem("userData"));

export const REQUEST_VERBS = ["GET", "POST", "PUT", "PATCH", "DELETE"];

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

export const REPEAT_AFTER = {
//   "1 minute": 1,
//   "5 Minutes": 5,
//   "10 Minutes": 10,
  "15 Minutes": 15,
  "1 Hour": 60,
  "3 Hours": 180,
  "12 Hours": 720,
  "1 Day": 1440,
};

export const CHIP_COLOR = {
  GET: "info",
  POST: "success",
  DELETE: "error",
  PUT: "default",
  PATCH: "default",
};
