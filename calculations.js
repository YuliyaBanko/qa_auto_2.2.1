function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x,y) {
x -= y;
return x;
}
// "y" was not defined

function divideBalanceByAccounts(x, y) {
  x /= y;
  console.log("x");
  return x;
}
// после метода return никакой код восприниматься не будет, console.log("x") выносим вперед;
// не очень понятна смысловая нагрузка выведения в консоль переменной х в качестве строки(?)

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));// в функции divideBalanceByAccount было 2 параметра, третий аргумент не несет нагрузку, надо либо менять функцию, либо убирать его из строки выведения
console.log(getRestAfterDivision(7000, 3));
