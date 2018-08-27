const mapCallODM = (o, f) => Object.keys(o).reduce((p, c) => odm(o, f, p, c), {});

const odm = (obj, mapFunc, prev, cur) => {
  let inner = obj[cur];
  if (typeof inner === 'object') {
    prev[cur] = mapCallODM(inner, mapFunc);
  } else {
    prev[cur] = mapFunc(inner);
  }
  return prev;
}

module.exports = {
  objectDeepMap: (obj, mapFunc) => {
    return mapCallODM(obj, mapFunc);
  },
  mapSingleParamFunc: (regexStr, func) => {
    return (compareStr) => {
      if (typeof compareStr === 'string') {
        return func(regexStr, compareStr);
      } else {
        throw new TypeError('Parameter is not a string!  Cannot search');
      }
    };
  },
  mapDualParamFunc: (regexStr, func, defaultValue) => {
    return (compareStr, option=defaultValue) => {
      if (typeof compareStr === 'string') {
        return func(regexStr, compareStr, option);
      } else {
        throw new TypeError('Parameter is not a string!  Cannot search');
      }
    }
  },
  mapDualParamFuncNoDefault: (regexStr, func) => {
    return (compareStr, option) => {
      if (!option) {
        throw new Error('Replacement string must be defined');
      }
      if (typeof compareStr === 'string') {
        return func(regexStr, compareStr, option);
      } else {
        throw new TypeError('Parameter is not a string!  Cannot search');
      }
    }
  }
}
