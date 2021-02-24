import defaultIsMergeableObject from 'is-mergeable-object';

const isObjectString = (obj: any) =>
  getNativeType(obj) === '[object String]' && typeof obj === 'object' && obj.charAt;
const isObjectNumber = (obj: any) =>
  getNativeType(obj) === '[object Number]' && typeof obj === 'object';
const isObjectBoolean = (obj: any) =>
  getNativeType(obj) === '[object Boolean]' && typeof obj === 'object';
const isMap = (obj: any): boolean => getNativeType(obj) === '[object Map]';
const isSet = (obj: any): boolean => getNativeType(obj) === '[object Set]';
const isObject = (obj: any): boolean => getNativeType(obj) === '[object Object]';
const isFunction = (obj: any): boolean => getNativeType(obj) === '[object Function]';
const isRegExp = (obj: any): boolean => getNativeType(obj) === '[object RegExp]';
const isDate = (obj: any): boolean => getNativeType(obj) === '[object Date]';
const isDataView = (obj: any): boolean => getNativeType(obj) === '[object DataView]';
const isArray = (obj: any): boolean => Array.isArray(obj);
const isEmptyObject = (obj: any) => Object.keys(obj).length === 0;
/**
 * ArrayBuffer  TypeArray  BigArray
 * @param obj {any}
 */
const isBufferOrBlobOTypeArrayOrBigArray = (obj: any): boolean =>
  /^\[object (((Big)?(Int|Uint|Float)\d+)?(Clamped|Shared)?Array(Buffer)?|Blob)\]$/.test(
    getNativeType(obj)
  );

function emptyTarget(val: any) {
  return isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value: any, options: any): any {
  return options.clone !== false && options.isMergeableObject(value)
    ? deepmerge(emptyTarget(value), value, options)
    : value;
}

function defaultArrayMerge(target: any[], source: any, options: any) {
  return target.concat(source).map(function (element: any) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}

function getMergeFunction(key: string, options: any) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target: any) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
        return target.propertyIsEnumerable(symbol);
      })
    : [];
}

function getKeys(target: {}) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target) as []);
}

function propertyIsOnObject(object: any, property: string) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target: any, key: string) {
  return (
    propertyIsOnObject(target, key) && // Properties are safe to merge if they don't exist in the target yet,
    !(
      Object.hasOwnProperty.call(target, key) && // unsafe if they exist up the prototype chain,
      Object.propertyIsEnumerable.call(target, key)
    )
  ); // and also unsafe if they're nonenumerable.
}

function mergeObject(target: any, source: any, options: any) {
  var destination: Record<string, any> = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }

    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}

function deepmerge(target: {}, source: any, options: any) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || defaultIsMergeableObject;
  // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function deepmergeAll(array: any[], options: any) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }

  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};

const getNativeType = (obj: any): string => Object.prototype.toString.call(obj);

type ICatchItem = { original: any; copy: any };
type ICircleLink = { target: any; key: any; catchItem: ICatchItem };
type likeType =
  | ArrayBuffer
  | Blob
  | Int8Array
  | Int16Array
  | Int32Array
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | BigInt64Array
  | BigUint64Array;

const copyObjectString = (strObj: any): String => new String(strObj);
const copyObjectNumber = (numObj: any): Number => new Number(numObj);
const copyObjectBoolean = (boolObj: any): Boolean => new Boolean(boolObj.toString() === 'true');
const copyDate = (date: any): Date => new Date(date);
const copySet = (set: any): Set<any> => new Set(set);
const copyMap = (map: any): Map<any, any> => new Map(map);
const copyReg = (reg: any): RegExp => new RegExp(reg);
const copyFunction = (fn: any): Function => new Function('return ' + fn.toString())();
const copyDataView = (view: any): DataView =>
  new DataView(view.buffer.slice(0), view.byteOffset, view.byteLength);
const copyBufferOrBlobOTypeArrayOrBigArray = (arrLike: likeType & any) => arrLike.slice(0);
const deepCopyArray = (arr: any): any[] => {
  const newArr: any[] = [];
  arr.forEach((item: any, index: number) => {
    newArr.push(deepCopy(item, newArr, index));
  });
  return newArr;
};
const deepCopyObject = (obj: any) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const res: any = {};
  const keys = Object.keys(descriptors);
  keys.forEach((key) => {
    const descriptor = descriptors[key];
    if (!descriptor.writable || !descriptor.configurable || !descriptor.enumerable) {
      Object.defineProperty(
        res,
        key,
        Object.assign({}, descriptor, { value: deepCopy(descriptor.value, res, key) })
      );
    } else {
      res[key] = deepCopy(obj[key], res, key);
    }
  });
  const symbols = Object.getOwnPropertySymbols(obj);
  symbols.forEach((symbol) => {
    res[symbol] = deepCopy(obj[symbol], res, symbol);
  });
  return res;
};

// core
let cacheList: ICatchItem[] = [];
let circleLinks: ICircleLink[] = [];
const deepCopy = <T = any>(obj: T, target?: any, key?: any): T => {
  let catchItem: ICatchItem = {
    original: obj,
    copy: void 0,
  };
  const hit = cacheList.find((c) => c.original === obj);
  if (hit) {
    catchItem = hit;
    circleLinks.push({
      target,
      key,
      catchItem,
    });
    return hit.copy;
  } else {
    cacheList.push(catchItem);
    if (isObjectString(obj)) {
      catchItem.copy = copyObjectString(obj);
    } else if (isObjectNumber(obj)) {
      catchItem.copy = copyObjectNumber(obj);
    } else if (isObjectBoolean(obj)) {
      catchItem.copy = copyObjectBoolean(obj);
    } else if (isSet(obj)) {
      catchItem.copy = copySet(obj);
    } else if (isMap(obj)) {
      catchItem.copy = copyMap(obj);
    } else if (isFunction(obj)) {
      catchItem.copy = copyFunction(obj);
    } else if (isObject(obj)) {
      catchItem.copy = deepCopyObject(obj);
    } else if (isArray(obj)) {
      catchItem.copy = deepCopyArray(obj);
    } else if (isRegExp(obj)) {
      catchItem.copy = copyReg(obj);
    } else if (isDate(obj)) {
      catchItem.copy = copyDate(obj);
    } else if (isDataView(obj)) {
      catchItem.copy = copyDataView(obj);
    } else if (isBufferOrBlobOTypeArrayOrBigArray(obj)) {
      catchItem.copy = copyBufferOrBlobOTypeArrayOrBigArray(obj);
    } else {
      catchItem.copy = obj;
    }
  }
  return catchItem.copy;
};

const deepclone = <T = any>(obj: T): T => {
  const res = deepCopy(obj);
  circleLinks.forEach((item) => {
    item.target[item.key] = item.catchItem.copy;
  });
  cacheList = [];
  circleLinks = [];
  return res;
};

const pick = (obj: any, props: string[]) => {
  if (!isObject(obj)) {
    return emptyTarget(obj);
  }
  const objCopy = deepclone(obj);
  if (!props || props.length === 0) {
    return objCopy;
  }

  const result: Record<string, any> = {};
  props.reduce((_, cur) => {
    if (objCopy[cur]) {
      result[cur] = objCopy[cur];
    }
    return result;
  }, {});
  return result;
};

export {
  isObjectString,
  isObjectNumber,
  isObjectBoolean,
  isMap,
  isSet,
  isObject,
  isFunction,
  isRegExp,
  isDate,
  isDataView,
  isArray,
  isEmptyObject,
  deepmerge,
  deepclone,
  pick,
};
