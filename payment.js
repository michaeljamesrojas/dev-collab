const { BankAccount } = require('./index');

class Payment {
  constructor(fromAccount, toAccount, amount) {
    this.fromAccount = fromAccount;
    this.toAccount = toAccount;
    this.amount = amount;
    this.timestamp = new Date();
    this.status = 'pending';
  }

  process() {
    if (this.fromAccount.balance >= this.amount) {
      this.fromAccount.withdraw(this.amount);
      this.toAccount.deposit(this.amount);
      this.status = 'completed';
      return true;
    } else {
      this.status = 'failed';
      return false;
    }
  }

  getPaymentInfo() {
    return {
      fromAccount: this.fromAccount.accountNumber,
      toAccount: this.toAccount.accountNumber,
      amount: this.amount,
      timestamp: this.timestamp,
      status: this.status
    };
  }
}

module.exports = Payment;
