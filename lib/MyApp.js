const SECRET_VALUE = Symbol();

export default class {
  constructor(secret) {
    this.hoge = 'hoge';
    this.foo = 'foo';

    // SECRET_VALUEプロパティも初期化
    this[SECRET_VALUE] = secret;
  }

  // SECRET_VALUEプロパティを利用したメソッド
  checkValue(secret) {
    return this[SECRET_VALUE] === secret;
  }
}