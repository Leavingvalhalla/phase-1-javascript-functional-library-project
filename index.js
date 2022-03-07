function myEach(collection, callback) {
  let newArray = standardizeInput(collection);
  for (let i = 0; i < newArray.length; i++) {
    callback(newArray[i]);
  }
  return collection;
}
function myMap(collection, callback) {
  let newArray = standardizeInput(collection);
  let returnArray = [];
  for (let i = 0; i < newArray.length; i++) {
    returnArray.push(callback(newArray[i]));
  }
  return returnArray;
}

function standardizeInput(collection) {
  return collection instanceof Array
    ? collection.slice()
    : Object.values(collection);
}

function myReduce(collection, callback, acc) {
  let newCollection = standardizeInput(collection);
  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }
  for (let i = 0; i < newCollection.length; i++) {
    acc = callback(acc, newCollection[i]);
  }
  return acc;
}

function myFind(collection, predicate) {
  let newArray = standardizeInput(collection);
  for (let i = 0; i < newArray.length; i++) {
    if (predicate(newArray[i])) {
      return newArray[i];
    }
  }
}

function myFilter(collection, predicate) {
  let newArray = standardizeInput(collection);
  let returnArray = [];
  if (!Array.isArray(collection)) {
    newArray = [...Object.values(collection)];
  } else {
    newArray = [...collection];
  }
  for (let i = 0; i < newArray.length; i++) {
    if (predicate(newArray[i])) {
      returnArray.push(newArray[i]);
    }
  }
  return returnArray;
}

function mySize(collection) {
  let newArray = standardizeInput(collection);
  return newArray.length;
}

function myFirst(array, n = 1) {
  if (n === 1) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n = 1) {
  if (n === 1) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}

function myKeys(object) {
  const newArray = [];
  for (const item in object) {
    console.log(item);
    newArray.push(item);
  }
  return newArray;
}

function myValues(object) {
  const newArray = [];
  for (const item in object) {
    newArray.push(object[item]);
  }
  return newArray;
}
