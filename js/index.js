const { base, reg } = require('./regexes');
const utils = require('./utils');

module.exports = {
  // Only match the entire string versus the regex
  match: utils.objectDeepMap(base, regStrFromStore => {
    return utils.mapSingleParamFunc(
      regStrFromStore, (regexStr, compareStr) => {
        return new RegExp(`^${regexStr}$`).test(compareStr);
      }
    );
  }),
  // get named match groups of the regex in the string
  extract: { /* NAMED CAPTURE GROUPS NOT SUPPORTED */ },
  // as 'extract' but for all occurrences in string
  extractAll: { /* NAMED CAPTURE GROUPS NOT SUPPORTED */ },
  // get index of first occurrence of regex
  find: utils.objectDeepMap(base, regStrFromStore => {
    return utils.mapSingleParamFunc(
      regStrFromStore, (regexStr, compareStr) => {
        return compareStr.search(new RegExp(regexStr));
      }
    );
  }),
  // as 'find' but for a given number of occurrences (default 1)
  findMulti: utils.objectDeepMap(base, regStrFromStore => {
    let defaultCount = 1;
    return utils.mapDualParamFunc(
      regStrFromStore,
      (regexStr, compareStr, count) => {
        let result = [];
        let re = new RegExp(regexStr, 'g');
        while(((match = re.exec(compareStr)) !== null) && (result.length < count)) {
          result.push([match.index, match[0]]);
        }
        return result;
      },
      defaultCount
    )
  }),
  // as 'find' but for all occurrences
  findAll: utils.objectDeepMap(base, regStrFromStore => {
    return utils.mapSingleParamFunc(
      regStrFromStore, (regexStr, compareStr) => {
        let result = [];
        let re = new RegExp(regexStr, 'g');
        while((match = re.exec(compareStr)) !== null) {
          result.push([match.index, match[0]]);
        }
        return result;
      }
    );
  }),
  // replace first occurrence of regex in string with a given replacement string
  replace: utils.objectDeepMap(base, regStrFromStore => {
    return utils.mapDualParamFuncNoDefault(
      regStrFromStore, (regexStr, compareStr, replaceStr) => {
        return compareStr.replace(new RegExp(regexStr), replaceStr);
      }
    )
  }),
  // as 'replace' but for all occurrences
  replaceAll: utils.objectDeepMap(base, regStrFromStore => {
    return utils.mapDualParamFuncNoDefault(
      regStrFromStore, (regexStr, compareStr, replaceStr) => {
        return compareStr.replace(new RegExp(regexStr, 'g'), replaceStr);
      }
    )
  }),
  // given a map of {namedGroup: replaceString}, replace first occurrence of each namedGroup with replaceString
  replaceComplex: { /* NAMED CAPTURE GROUPS NOT SUPPORTED */ },
}
