class Stack {
 constructor() {
   this.stack = [];
 }

 push(item) {
   this.stack.push(item);
 }
 
 pop() {
   this.stack.pop();
 }
}

let data = new Stack();
data.push('a');
console.log(data.stack);
data.push('b');
console.log(data.stack);
data.push('c');
console.log(data.stack);
data.push('d');
console.log(data.stack);
data.push('e');
console.log(data.stack);
data.pop();
console.log(data.stack);
data.pop();
console.log(data.stack);
