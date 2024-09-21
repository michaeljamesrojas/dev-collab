class User {
  constructor(id, username, email) {
    this.id = id;
    this.username = username;
    this.email = email;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  toJSON() {
    return {
      id: this.id,
      username: this.username,
      email: this.email
    };
  }
}

class BankAccount {
  constructor(accountNumber, user) {
    this.accountNumber = accountNumber;
    this.balance = 0;
    this.user = user;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log('Deposit amount must be positive.');
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log('Insufficient funds or invalid amount.');
    }
  }

  getAccountInfo() {
    return {
      accountNumber: this.accountNumber,
      balance: this.balance,
      user: this.user.toJSON()
    };
  }
}

// Example usage:
const user = new User(1, 'johndoe', 'john@example.com');
const user2 = new User(2, 'janedoe', 'jo@j.com');
const account = new BankAccount('123456789', user);
account.deposit(1000);
account.withdraw(500);
console.log(account.getAccountInfo());

// Add this line at the end of index.js
module.exports = { User, BankAccount };
