/**
 * VANilla javascript Utils
 * @author Vitor Pêgas
 * @description VANBI is a simple framework for data binding on JS Elements
 * @version 1.2
 */

function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}

function sortObject(obj, prop, order) {
  Object.keys(obj).forEach((k) => {
    obj[k].$key = k;
  });

  const values = Object.values(obj);
  values.sort((a, b) => {
    if (isNumber(a[prop])) {
      return order ? a[prop] - b[prop] : b[prop] - a[prop];
    } else {
      return order
        ? a[prop].localeCompare(b[prop])
        : b[prop].localeCompare(a[prop]);
    }
  });

  const rtn = {};
  values.forEach((e) => {
    rtn[e.$key] = e;
  });

  return rtn;
}
