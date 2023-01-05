class Queue {
  constructor() {
    this.queue = {};
    this.last = 0;
    this.first = 0;
  }

  enqueue(item) {
    this.queue[this.last] = item;
    this.last++;
  }

  dequeue() {
    if (this.size === 0) {
      return;
    }
    delete this.queue[this.first];
    this.first++;
  }
}

let data = new Queue();
data.enqueue('a');
console.log(data.queue);
data.enqueue('b');
console.log(data.queue);
data.enqueue('c');
console.log(data.queue);
data.enqueue('d');
console.log(data.queue);
data.enqueue('e');
console.log(data.queue);
data.dequeue();
console.log(data.queue);
data.dequeue();
console.log(data.queue);
 