// factory_functions.js
/*
P:
Now let's build a factory function to create payments. The function can take an object argument in one of 3 forms:

    Payment for one service, such as: {internet: 1000} or {phone: 1000}
    Payment for both payments, such as: {internet: 2000, phone: 1000}.
    Payment with just an amount property, such as: {amount: 2000}.

and should return an object that has paid services, and a total method that returns the payment total. If the amount property is not present, this should return the sum of phone and internet services; if the amount property is present, just return the value of that property.

Your code should work with the following:

D:
  Input = object
  Output = invoice object

A:
   -
   -
   -
   -
   -
   -
   should return an object that has paid services, and a total method that returns the payment total. If the amount property is not present, this should return the sum of phone and internet services; if the amount property is present, just return the value of that property
*/


function createPayment(services = {}) {
    return {
      phone: this.phone || 0,
      internet: this.internet || 0,
      amount: services.amount,
      total() {
        return this.amount || (this.phone + this.internet);
      },
    };
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));
console.log(paymentTotal(payments));

payments.push(createPayment({
  phone: 2000,
}));
console.log(paymentTotal(payments));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));
console.log(paymentTotal(payments));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000