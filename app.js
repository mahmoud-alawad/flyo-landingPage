let today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
let yy = today.getFullYear();
let miu = today.getMinutes();


if (dd < 10  ) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
if ( miu < 10) {
    miu = '0' + miu;

}
today = dd + '/' + mm + '/' + yy;
console.log(today);