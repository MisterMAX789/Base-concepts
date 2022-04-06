"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let x;
  let x2;
  let d = b**2-4*a*c;
 
  if (d > 0){
    x = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a);
    arr.push (x,x2);
  return arr; 
} else if (d === 0){
  x = -b/2*a;
  arr.push (x);
  return arr;
} else if (d < 0)
return arr;
}