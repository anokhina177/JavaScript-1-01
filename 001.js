let c = prompt('Введите температуру в градусах Цельсия');

if (isNaN(c))
    alert('Введенное значение не является числом');
else {
    let f = (9 / 5) * c + 32;
    alert('Температура по Фаренгейту равна ' + f + '°');
}


let f = prompt('Введите температуру в градусах по Фаренгейту');

if (isNaN(f))
    alert('Введенное значение не является числом');
else {
    let k = (f - 32) * 5 / 9 + 273.15;
    alert('Температура по Кельвину равна ' + k + '°');
}