function task1() {
    let a = +prompt('Введите первое значение');
    let b = +prompt('Введите второе значение');
    
    if (!Number.isInteger(a) || !Number.isInteger(b) || b>36 || b<2) {
        alert('Некорректный ввод!');
        console.log('Некорректный ввод!');
        return;
        } else {
        alert(a.toString(b));
        }
    }