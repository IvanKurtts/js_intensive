function task2() {
    let a = +prompt('Введите первое значение');
    
    if (!Number.isFinite(a) || Number.isNaN(a)) {
        alert('Некорректный ввод!');
        console.log('Некорректный ввод!');
        return;
        } else {
            let b = +prompt('Введите второе значение');
            if (!Number.isFinite(b) || Number.isNaN(b)) {
                alert('Некорректный ввод!');
                console.log('Некорректный ввод!');
                return;
            } else {
                alert (`Ответ: ${a+b}, ${a-b}`)
            }
        }
    }