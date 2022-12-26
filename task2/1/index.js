// let obj = {name: "Ivan", sizes: {height: 186, weight: 80}, null: null, function: ()=>{return 1}};
  
function makeObjectDeepCopy(obj) {
    if (obj === null) return null;
    let clone = Object.assign({}, obj);
  
    Object.keys(clone).forEach(function(key) {
        if (typeof obj[key] === "object") {
            clone[key] = makeObjectDeepCopy(obj[key])
        } else {
            clone[key] = obj[key];
        }
    });
    
    if (Array.isArray(obj) && obj.length) {
        clone.length = obj.length;
        return Array.from(clone);
    } else if (Array.isArray(obj)) {
        return Array.from(obj);
    } else {
        return clone;
    }
  };

  console.log(makeObjectDeepCopy(obj));
  console.log(obj);
  console.log(makeObjectDeepCopy(obj) === obj)