// let arr = ['sgsb', 5, 'sdfbb', 87, 'sdf', 'sggdf', 66, 'aa', -8, 10]

Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new Error("Ошибка!");
    }
    
    if (arguments.length > 1) {
      this.arr = thisArg;
    }
  
    let result = [];
  
    for (let i = 0; i < this.length; i++) {
      if (i in arr) {
        if (callback.call(this.arr, this[i], i, arr)) {
          result.push(this[i]);
        }
      }
    }
    return result;
  };
  
//   console.log(arr.myFilter(function(item, index, array) {return typeof item === 'string'}));
//   console.log(arr.filter(function(item, index, array) {return typeof item === 'string'}));
//   console.log(arr.myFilter(function(item, index, array) {return typeof item === 'number'}));
//   console.log(arr.filter(function(item, index, array) {return typeof item === 'number'}));
//   console.log(arr.myFilter(function(item, index, array) {return item%2 === 0}));
//   console.log(arr.filter(function(item, index, array) {return item%2 === 0}));
//   console.log(arr.myFilter(function(item, index, array) {return index === array.length-1}));
//   console.log(arr.filter(function(item, index, array) {return index === array.length-1}));
  
  
  