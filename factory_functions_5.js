/*
P:
Update your createInvoice function to make it possible to add payment(s) to invoices. Use the code below as a guideline:

E:

D:
  Input =
  Output =

A:
   -
   -
   -
   -
   -
   -
*/
function createInvoice(invoice) {
  let services = invoice || {};
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total() {
      return this.phone + this.internet;
    },
    payments: [],
    addPayment(payment) {
      this.payments.push(payment);
    },
    addPayments(payments) {
      console.log(payments);
      payments.forEach((p) => {
        this.payments.push(p);
      }, this);
    },
    amountDue() {
      return this.total() - this.paymentsTotal()
    },
    paymentsTotal() {
      let total = 0;
      let i;

      for (i = 0; i < this.payments.length; i += 1) {
        total += this.payments[i].total();
      }
      return total;
    }
  };
}
function createPayment(payment) {
  let services = payment || {}
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total() {
      return this.amount || (this.phone + this.internet);
    },
  };
}
let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});
console.log(invoice);
let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});
// console.log(payment1.total());
// console.log(payment2.total());
// console.log(payment3.total());

invoice.addPayment(payment1);
// console.log(invoice.payments);
invoice.addPayments([payment2, payment3]);
console.log(invoice.paymentsTotal());        // this should return 0