/**
 * Код для определения остатка оплаты для студента буткемпа
 */

// принимаем ли мы платежи
const canPayment = true;

// имя студента
const studentName = 'your name';

// 
const price = 120000;

// 
const firstPayment = 50000;

// 
const discount = 22;

// формула расчета остатка платежа
const totalPrice = price - (price / 100) * discount;

// 
const remainingPayment = totalPrice - firstPayment;

if(canPayment) {
  //
  if (remainingPayment === 0) {
    console.log(`Ты оплатил учебу полностью.`);

    //
  } else {
    const message = `
  ${studentName}, ты оплатил ${firstPayment} руб. 
  К оплате осталось еще ${remainingPayment} руб.
  Твоя скидка: ${discount}%
  `;

    //
    console.log(message);
  }
} else {
  console.log(`Мы сейчас не можем принять платеж`);
}
