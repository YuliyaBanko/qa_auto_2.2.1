let userBalance = 500;
let packageCost = 100;
let smsCode = "A001DFX0";
let databaseCode = "A001DFX0";
let locker = [null, null, null, "1432HGF", null];

if (smsCode === databaseCode) {
  if (userBalance >= packageCost) {
    userBalance -= packageCost;
    lockerIndex = locker.indexOf("1432HGF");
    console.log(`Заберите посылку 1432HGF из ячейки №${lockerIndex + 1}. Ваш счет составляет: ${userBalance}ед.`);
  } 
  else {
  console.log("Недостаточно средств на счете для получения посылки."); }
} else {
  console.log("Код из смс не соответствует коду в базе данных.");
}
