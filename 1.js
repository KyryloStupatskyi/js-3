var counter = (function() {
  var counter = 0;

  return function(n) {
    if (n !== undefined) counter = n;
    return counter++;
  }
}());

var counting = (
  function() {
    cnt = 0;
  
    return {
      value(num) {
        if (num !== undefined) cnt = num;
        return cnt;
      },
    
      increment() {
        cnt++;
      },
  
      decrement() {
        cnt--;
      }
    }
  }());

let myPrint = (a, b, res) => `${a}^${b}=${res}`;

let myPow = (a, b, callback) => {
  let pow = (x, n) => {
    if (n !== 1) return x *= pow(x, n - 1);
    return x;
  };

  return callback(a, b, pow(a, b));
}; 

console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint)); 

let info = function() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`
}


let yearNow = 2022;

let car = {
  engine: 250,
  model: 'Kalina',
  name: 'Lada',
  year: 1979,
  _used: 'used',

  info,

  set used (value) {
    if (value == 'new' && this.year !== yearNow) this.year = yearNow;
  },

  get used() {
    return this.year == yearNow ? 'new' : 'used';
  }
};

let car2 = {
  engine: 300,
  model: 'SVJ',
  name: 'Lamborgini',
  year: 2019,
  _used: 'used',

  info,

  set used (value) {
    if (value == 'new' && this.year !== yearNow) this.year = yearNow;
  },

  get used() {
    return this.year == yearNow ? 'new' : 'used';
  }
};

let arr = [2, 3, 4, 5, 6];
let myMax = (arr) => Math.max.apply(null, arr);

let myMul = (a, b) => a * b;

let myDouble = myMul.bind(null,  2);

let myTriple = myMul.bind(null, 3);


let list = ["Orranges", "Tomatoes"];

let myUniq = (arr) => {
  let set = new Set();
  
  arr.forEach((value) => {
    set.add(value);
  });

  return set;
}

console.log(myUniq(list));