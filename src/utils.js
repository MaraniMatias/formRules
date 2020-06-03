module.exports.isNullOrUndefined = (value) => {
  return value === null || value === undefined;
};

module.exports.isEmptyArray = (arr) => {
  return Array.isArray(arr) && arr.length === 0;
};
