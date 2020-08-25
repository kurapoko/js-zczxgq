const AUTHOR = 'YAMADA, Yoshihiro';

export class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // firstNameプロパティ
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  // lastNameプロパティ

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  getName() {
    return this.lastName + this.firstName;
  }
}