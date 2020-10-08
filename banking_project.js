// banking_project.js

const makeAccount = function(id){
  let accountNumber = id;
  let accountBalance = 0;
  let accountTransactions = [];

  return {
    account() {
      return accountNumber;
    },
    balance() {
      return accountBalance;
    },
    transactions() {
      return accountTransactions;
    },
    deposit(amount) {
      accountBalance += amount;
      accountTransactions.push({
        type: 'deposit',
        amount
      })
      return amount;
    },
    withdraw(amount) {
      if (accountBalance < amount) {
        amount = accountBalance;
      } 
      accountBalance -= amount;
      accountTransactions.push({
        type: "withdrawal",
        amount,
      });
      return amount;
    },
  }
}

// let acc1 = makeAccount();
// let acc2 = makeAccount();

// acc1.deposit(3)
// acc1.deposit(4)
// acc1.withdraw(9)
// console.log(acc1.transactions);
// console.log(acc1.balance);
// console.log(acc2.balance);

const makeBank = function() {
  let accountIdCounter = 100;
  let allAccounts = [];

  return {
    openAccount() {
      let account = makeAccount(accountIdCounter++);
      allAccounts.push(account);
      return account;
    },
    transfer(sourceAccount, destAccount, amount) {
      return destAccount.deposit(sourceAccount.withdraw(amount));
    }
  }
}
let bank = makeBank();

let a1 = bank.openAccount();
let a2 = bank.openAccount();

a1.deposit(54);
a2.deposit(43);

bank.transfer(a1, a2, 4)

console.log(a1.balance());
console.log(a2.balance());
console.log(bank.accounts);