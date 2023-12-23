//Задание 1

var myAge = +prompt('Ввeдите ваш возраст');

if(myAge  > 0 && myAge <=18){
    alert('Вы еще молоды, Вам нужно учиться');
}else if(myAge > 18 && myAge <=50){
   alert ('Вам нужно работать'); 
}else if(myAge > 50 && myAge <=59){
    alert ('Вам скоро на пенсию');
}else if(myAge > 59 && myAge <=100){
    alert ('Вы пенсионер');
}else{
    alert('Что-то пошло не так');
}


//Задание 2

var mark = +prompt('Введите время');

if(mark < 6 ) {
    alert(mark + ':00' + ' часа ночи');
}else if(mark < 10 ) {
    alert(mark + ':00' + ' часов утра');
}else if(mark < 17 ) {
    alert(mark + ':00' + ' часа дня');
}else if(mark < 23 ) {
    alert(mark + ':00' + ' часов вечера');
}else {
    alert('Что-то пошло не так');
}

//Задание 3

var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третье число');

if(a < b && a > c || a > b && a < c) {
    alert('Среднее число является ' + a);
}else if(b < a && b > c || b > a && b < c) {
    alert('Среднее число является ' + b);
}else if(c < a && c > b || c > a && c < b) {
    alert('Среднее число является ' + c);
}else {
    alert('Что-то пошло не так');
}
