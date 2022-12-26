// const myIterable = { from: 1, to: 7 };
// const myIterable = { from: 'aaa', to: 4 };

if (typeof myIterable.from === 'number' && 
    typeof myIterable.to === 'number' && myIterable.from<=myIterable.to) {

    myIterable[Symbol.iterator] = function() {
        return {
            current: this.from,
            last: this.to,

            next() {
                if (this.current <= this.last) {
                return { done: false, value: this.current++ };
                } else {
                return { done: true };
                }
            }
        };
    };
} else {throw new Error('Ошибка!')}

for (let item of myIterable) {
console.log(item);
}