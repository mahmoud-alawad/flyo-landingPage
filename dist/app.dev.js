"use strict";

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yy = today.getFullYear();
var miu = today.getMinutes();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

if (miu < 10) {
  miu = '0' + miu;
}

today = dd + '/' + mm + '/' + yy;
console.log(today);