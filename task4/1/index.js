let start = Date.now();

function createDebounceFunction(callback, delay) {
    let timeoutId;
    return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback.apply(this, arguments), delay);
        console.log(Date.now()-start);
    };
};

const log100 = () => console.log(`Выполнено за ${Date.now()-start}мс`);
const debounceLog100 = createDebounceFunction(log100, 1000);
debounceLog100();
setTimeout(debounceLog100, 200);
setTimeout(debounceLog100, 500);




