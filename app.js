//// UYGA VAZIFA

/* 1-masala */

//// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin va ularning yig’indisini     qaytarib bersin.

// function sum(x, y) {
//   return x + y;
// }
// const x = prompt("x sonni kiriting ");
// const y = prompt("y sonni kiriting ");
// console.log(sum(Number(x), Number(y)));

/* 2-masala */

//// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga o’girib beradigan funksiya yasang.

// function toSekunds(minutes) {
//   return minutes * 60;
// }
// const minutes = prompt("minutni kiriting ");
// console.log(toSekunds(minutes));

/* 3-masala */

// //3.Funksiya butun son qabul qiladi. Funksiya ushbu butun sondan keyingi sonni qaytarsin.

// function nextInteger(int) {
//   return Math.floor(int) + 1;
// }
// const int = prompt("butun sonni kiriting");

// console.log(nextInteger(int));

// /* 4-masala */

// //4.Funskiya uchburchakning asosi va balandligini qabul qiladi. Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2

// function uchburchakYuzi(asos, balandlik) {
//   return (asos * balandlik) / 2;
// }
// const asos = prompt("asosini sonini kirirting ");
// const balandlik = prompt(" balandlikini sonini kirirting ");
// console.log(uchburchakYuzi(asos, balandlik));

/* 5-masala */

//// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb oling.

// function ageToDays(age) {
//   return Number(age) * 365;
// }
// const age = prompt("yoshingizni kiriting");
// console.log(
//   ` tabriklaymiz!, Tug'ilgan kuningizga  ${ageToDays(age)} kun bolibdi`
// );

/* 6-masala */

//// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana qismini yozing.
//// kub(3) ➞ 27
//// kub(5) ➞ 125
//// kub(10) ➞ 1000

// function cube(num) {
//   return num ** 3;
// }
// const num = prompt("sonni kiriting");
// console.log(cube(num));

/* 7-masala */
//// .Massivni ichidan birinchi elementini qaytaradigan funksiya yasang.

// function returnNumber(num) {
//   if (Array.isArray(num) && num.length > 0) {
//     return num[0];
//   }
// }
// const num = [5, 10, 15, 20, 25, 30];
// console.log(returnNumber(num));

/* 8-masala */

//// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.

// function power(x, y) {
//   return x * y;
// }
// const x = prompt("x sonni kirirting");
// const y = prompt("y sonni kirirting");

// console.log(power(x, y));

/* 9-masala */

//// .Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan funksiya yasang.
// function hourToSekunds(hour) {
//   return hour * 3600;
// }
// const hour = prompt("soatni kiriting");
// console.log(hourToSekunds(hour) + " sekund");

/* 10-masala */
//// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini qaytaradigan funksiya yasang.  Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1
// function uchinchiTomon(tomon1, tomon2) {
//   return tomon1 + tomon2 - 1;
// }
// const tomon1 = prompt("  1- tomonini uzunligini kiriting ");
// const tomon2 = prompt("  2- tomonini uzunligini kiriting ");
// console.log(uchinchiTomon(Number(tomon1), Number(tomon2)));

/* 11-masala */
// //11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan funksiya yasang.
// function qoldiq(son1, son2) {
//   if (son2 === 0) {
//     return "Nolga bolish mumkin emas";
//   }
//   return son1 % son2;
// }
// const son1 = prompt("sonni kirirting ");
// const son2 = prompt("sonni kirirting ");
// console.log(qoldiq(son1, son2));

/* 12-masala */
//// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab qaytaradigan funksiya yasang. Formula S = bo’yi * eni

// function turtburchakYuzi(boyi, eni) {
//   return boyi * eni;
// }
// const boyi = prompt("boyini kiriting");
// const eni = prompt("enini kiriting");
// console.log(turtburchakYuzi(boyi, eni));

/* 13-masala */
//// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi. ushbu funksiya “Something” stringiga " " bo’sh joy va “a” stringini birlashtirib qaytarsin.

// function stringQoshish(a) {
//   return "Assalomu aleykum ! " + a;
// }
// const a = prompt("iismingizni kiriting");
// console.log(stringQoshish(a));

/* 14-masala */

//// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
//// Namuna:
//// kvadrat(5) ➞ 25
//// kvadrat(9) ➞ 81
//// kvadrat(100) ➞ 10000

// function daraja(num) {
//   return num * num;
// }
// const num = prompt("sonni kiriting");
// console.log(daraja(num));

/* 15-masala */
//// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.

// function noldan(raqam) {
//   return raqam <= 0;
// }
// const raqam = prompt("sonni kiriting");
// console.log(noldan(raqam));

/* 16-masala */
// //16.Funksiya ko’p  burchakli shaklning burchaklar sonini qabul qiladi. Natijada funksiya ushbu shaklning ichki burchaklar yig’indisini qaytarsin. Formula (n - 2) x 180

// function ichkiBurchaklar(n) {
//   return (n - 2) * 180;
// }
// const n = prompt("ko’p  burchakli shaklning burchaklar sonnini kiriting");
// console.log(ichkiBurchaklar(n));

/* 17-masala */
// //17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar sonini va 2-argument sifatida uch ochkolik gollar sonini qabul qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.

// function ochkolar(x, y) {
//   return x * 2 + y * 3;
// }
// const x = prompt("ikki achkolik gollar sonini kiriting");
// const y = prompt("uch achkolik gollar sonini kiriting");
// console.log(ochkolar(x, y));

/* 18-masala */
//// Quyidagi namunalarni kuzatgan holda unga muvofiq funksiya yasang.
// //Namuna:
//// nameString("Mubashir") ➞ "MubashirEdabit"
//// nameString("Matt") ➞ "MattEdabit"
//// nameString("javaScript") ➞ "javaScriptEdabit"

// function nameString(name) {
//   return name + " hayrli kun, ahvollariz yaxshimi ";
// }
// const name = prompt("ismingizni kiriting");
// console.log(nameString(name));

/* 19-masala */
//// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya yasang.

// function ikkitaSon(x, y) {
//   return x + y < 100;
// }
// const x = parseFloat(prompt("x sonini kiriting"));
// const y = parseFloat(prompt("y sonini kiriting"));
// console.log(ikkitaSon(x, y));

/* 20-masala */

// //.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang. Namuna:
////printArray(1) ➞ [1]
//// printArray(3) ➞ [1, 2, 3]
//// printArray(6) ➞ [1, 2, 3, 4, 5, 6]

// function sequence(num) {
//   const result = [];
//   for (let i = 1; i <= num; i++) {
//     result.push(i);
//   }
//   return result;
// }
// const num = prompt("son kiriting");
// console.log(sequence(num));

/* 21-masala */
//// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi argument sifatida tovuqlar sonini, ikkinchi argument sifatida qo’ylarni va uchinchi argument sifatida sigirlarning sonini qabul qiladi.

// function oyoqlar(tovuq, qoy, sigir) {
//   return tovuq * 2 + qoy * 4 + sigir * 4;
// }
// const tovuq = prompt("tovuqlar soni nechta ");
// const sigir = prompt("siigirlar soni nechta ");
// const qoy = prompt("qoylar soni nechta ");
// console.log(oyoqlar(Number(tovuq), Number(qoy), Number(sigir)));

/* 22-masala */
// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!
// Namuna:
// and(true, false) ➞ false
// and(true, true) ➞ true
//and(false, true) ➞ false
//and(false, false) ➞ false

// function and(a, b) {
//   if (a == "true" && b == "true") {
//     return true;
//   } else {
//     return false;
//   }
// }
// const a = prompt("matiqiy operatorni kiriting true||false");
// const b = prompt("matiqiy operatorni kiriting true||false");
// console.log(and(a, b));

/* 23-masala */
//// Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala qiymatning ma’lumot turi bir xil bo’lsin.

// function tengMi(x, y) {
//   return x === y;
// }
// const x = prompt("sonni kiriting");
// const y = prompt("sonni kiriting");
// console.log(tengMi(Number(x), Number(y)));

/* 24-masala */
// //.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta mag’lubiyat = 0 ochko hisoblanadi.

// function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
//   return yutishlar * 3 + duranglar * 1 + maglubiyatlar * 0;
// }
// const yutishlar = prompt("yutishlar soni ?");
// const duranglar = prompt("duranglar soni ?");
// const maglubiyatlar = prompt("maglubiyatlar soni ?");
// console.log(futbolOchko(yutishlar, duranglar, maglubiyatlar));

/* 25-masala */
//// 25.Funskiya soatlar va minutlarni argument sifatida qabul qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib ularning yig’indisini qaytarsin.

// function sekundlar(soat, minut) {
//   return soat * 3600 + minut * 60;
// }
// const soat = prompt("soatni kiriting");
// const minut = prompt("minutni kiriting");
// console.log(sekundlar(soat, minut));
