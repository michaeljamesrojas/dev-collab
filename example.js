const { User, BankAccount } = require('./index');
const Payment = require('./payment');

const user1 = new User(1, 'johndoe', 'john@example.com');
const user2 = new User(2, 'janedoe', 'jane@example.com');

const account1 = new BankAccount('123456789', user1);
const account2 = new BankAccount('987654321', user2);

account1.deposit(1000);

const payment = new Payment(account1, account2, 500);
const success = payment.process();

console.log(payment.getPaymentInfo());
console.log('Payment successful:', success);
console.log('Account 1 balance:', account1.balance);
console.log('Account 2 balance:', account2.balance);
