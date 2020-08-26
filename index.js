// Import stylesheets
import './style.css';

import * as app from './lib/Util';

import MyApp from './lib/MyApp';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// function getTriangle(base = 1, height = 1) {
//   return base * height / 2;
// }

// console.log(getTriangle(5, undefined));

// function multi(a, b = a) {
//   return a * b;
// }

// console.log(multi(10, 5));

// function sum(...nums) {
//   let result = 0;
//   for (let num of nums) {
//     if (typeof nume !== 'number') {
//       throw new Error('指定値が数値ではありません：' + num);
//     }
//     result += num;
//   }
//   return result;
// }

// try {
//   console.log(sum(1, 3, 5, 7, 9));
// } catch(e) {
//   window.alert(e.message);
// }

console.log(Math.max(15, -3, 78, 1));


function getTriangle({ base = 1, height = 1}) {
  return base * height / 2;
}

console.log(getTriangle({ base: 5, height: 4}));

// function show ({name, mid}) {
//   console.log(name);
//   console.log(mid);
// };

// let member = {
//   mid: 'Y0001',
//   name: '山田太郎',
//   adress: 'aiueo@gmail.com'
// };

// show(member);


// function getMaxMin(...nums) {
//   return [Math.max(...nums), Math.min(...nums)];
// }

// let result = getMaxMin(10, 35, -5, 78, 0);
// console.log(result);

// let [max, min] = getMaxMin(10, 35, -5, 78, 0);
// console.log(max);
// console.log(min);


// var Member = function(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   // this.getName = function() {
//   //   return this.lastName + ' ' + this.firstName;
//   // }
// };

// var mem = new Member('できない', 'なんで');
// mem.getName = function() {
//   return this.lastName + ' ' + this.firstName; 
// }
// console.log(mem.getName());

// var mem2 = new Member('第二号', '参上');
// console.log(mem2.getName());


// var data = 'Global data';
// var obj1 = { data: 'obj1 data'};
// var obj2 = { data: 'obj2 data'};

// function hoge() {
//   console.log(this.data);
// }

// hoge.call(obj2);


// function hoge() {
//   var args = Array.prototype.slice.call(arguments);
//   console.log(args.join('/'));
// }

// hoge('Angular', 'React', 'Vue');

// var Member = function(firstName, lastName) {
//   if(!(this instanceof Member)) {
//     return new Member(firstName, lastName);
//   }
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// var m = new Member('貫太郎', '鈴木');
// console.log(m.firstName);

// var Member = function(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// Member.prototype.getName = function() {
//   return this.lastName + ' ' + this.firstName;
// }

// var mem = new Member('権兵衛', '山本');
// console.log(mem.getName());

// var Member = function() {}

// Member.prototype.sex = '男'
// var mem1 = new Member();
// var mem2 = new Member();

// console.log(mem1.sex + '|' + mem2.sex);
// mem2.sex = '女';
// console.log(mem1.sex + '|' + mem2.sex);

// delete mem1.sex
// delete mem2.sex

// console.log(mem1.sex + '|' + mem2.sex);

// オブジェクトリテラルでプロトタイプを定義する

// var Member = function(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// Member.prototype = {
//   getName: function() {
//     return this.lastName + ' ' + this.firstName;
//   },
//   toString: function() {
//     return this.lastName + this.firstName;
//   }
// }

// var hoge = new Member('小泉', '純一郎');
// console.log(hoge.getName());
// console.log(hoge.toString());

// var Area = function() {};

// Area.version = '1.0';

// Area.triangle = function(base, height) {
//   return base * height / 2;
// };

// Area.diamond = function(width, height) {
//   return width * height / 2;
// }

// console.log(Area.version);
// console.log(Area.triangle(10, 2));

// console.log(Area.diamond(19, 2));

// var a = new Area();
// console.log(a.triangle(1,2));


// プロトタイプチェーン
// var Animal = function() {};

// Animal.prototype = {
//   walk: function() {
//     console.log('トコトコ...');
//   }
// };

// var Dog = function() {
//   Animal.call(this);
// };

// Dog.prototype = new Animal();
// Dog.prototype.balk = function() {
//   console.log('ワンワン！');
// }

// var d = new Dog();
// d.walk();
// d.balk();

// ES2015のオブジェクト指向構文

// class Member {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getName() {
//     return this.lastName + this.firstName;
//   }
// }

// let m = new Member('太郎', '麻生');
// console.log(m.getName());


// getとset構文


var m = new app.Member('茂', '吉田');
console.log(m.getName());

// 静的メソッド

class Area {
  static getTriangle(base, height) {
    return base * height / 2;
  }
}

console.log(Area.getTriangle(10, 5));

// 既存クラスの継承

class BusinessMember extends app.Member {

  constructor(firstName, lastName, clazz) {
    super(firstName, lastName);
    this.clazz = clazz;
  }

  getName() {
    return super.getName() + '/役職：' + this.clazz;
  }

  work() {
    return this.getName() + 'は働いています';
  }
}

var bm = new BusinessMember('ゲイツ','ビル', 'CEO');
console.log(bm.getName());
console.log(bm.work());

// オブジェクトリテラルの改善
// let member = {
//   name: '山田哲人',
//   birth: new Date(1990, 6, 22),
//   toString() {
//     return this.name + '/誕生日:' + this.birth.toLocaleDateString() 
//   }
// };

// console.log(member.toString());

// let name = '山田哲人';
// let birth = new Date(1970, 5, 25);
// let member = { name, birth };

// console.log(member);

let i = 0;
let member = {
  name: '山田別人',
  birth: new Date(1970, 5, 25),
  ['memo' + ++i]: '正規会員',
  ['memo' + ++i]: '支部会長',
  ['memo' + ++i]: '関東'
};

let myapp = new MyApp('secret string');

// イテレーター

let data_ary = ['one', 'two', 'three'];
let data_str = 'あいうえお';
let data_map = new Map([['MON', '月曜'], ['TUE', '火曜'], ['WED', '水曜']]);

for (let d of data_ary) {
  console.log(d);
}

for(let d of data_str) {
  console.log(d);
}

for(let [key, value] of data_map) {
  console.log(`${key} : ${value}`);
}
