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

// Example usage:
const user = new User(1, 'johndoe', 'john@example.com');
console.log(user.toJSON());
