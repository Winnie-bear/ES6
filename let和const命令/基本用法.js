function f() {
  console.log('aaa');
}

let [x = f()] = [undefined];
console.log(x);