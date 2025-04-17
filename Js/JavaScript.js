// let x = prompt(`1 - Son Kiriting: `);
// let y = prompt(`2 - Son Kiriting: `);

// if (x > y) {
//     alert(`1 - son katta`);
// } else if (x < y) {
//     alert(`2 - son katta`);
// } else {
//     alert(`Bu sonlar teng`);
// }

// // Foydalanuvchidan qiymatlarni olish
// x = float(input("x ning qiymatini kiriting: "));
// y = float(input("y ning qiymatini kiriting: "));
// z = float(input("z ning qiymatini kiriting: "));

// // Maksimal va minimal qiymatlarni topish
// maximum = max(x, y, z);
// minimum = min(x, y, z);

// // Natijalarni chiqarish
// print("Maksimal qiymat:", maximum);
// print("Minimal qiymat:", minimum);

// let x = +prompt(`1 - Son Kiriting: `);
// let y = +prompt(`2 - Son Kiriting: `);
// let z = +prompt(`3 - Son Kiriting: `);

// if (isNaN(x) || isNaN(y) || isNaN(z)) {
//     alert("Iltimos, to'g'ri raqam kiriting!");
// } else {
//     if (x === y && y === z) {
//         alert(`Sonlar teng`);
//     } else if (x > y && x > z) {
//         alert(`1 - son eng katta`);
//     } else if (y > x && y > z) {
//         alert(`2 - son eng katta`);
//     } else if (z > x && z > y) {
//         alert(`3 - son eng katta`);
//     } else if (x < y && x < z) {
//         alert(`1 - son eng kichik`);
//     } else if (y < x && y < z) {
//         alert(`2 - son eng kichik`);
//     } else if (z < x && z < y) {
//         alert(`3 - son eng kichik`);
//     } else {
//         alert(`Sonlar teng`);
//     }
// }

// let a = +prompt("1-sonni kirit");
// let b = +prompt("2-sonni kirit");
// let c = +prompt("3-sonni kirit");

// // a < b < c
// if (a < b && b < c) {
//     alert(`${a} ${b} dan kichik ${b} ${c} dan kichik`);
// }

// // a > b > c
// else if (a > b && b > c) {
//     alert(`${a} ${b} dan katta ${b} ${c} dan katta`);
// }

// // a < b > c
// else if (a < b && b > c) {
//     alert(`${a} ${b} dan kichik ${b} ${c} dan katta`);
// }

// // a > b < c
// else if (a > b && b < c) {
//     alert(`${a} ${b} dan katta ${b} ${c} dan kichik`);
// }

// // a < b = c
// else if (a < b && b == c) {
//     alert(`${a} ${b} dan kichik ${b} ${c} ga teng`);
// }

// // a > b = c
// else if (a > b && b == c) {
//     alert(`${a} ${b} dan katta ${b} ${c} ga teng`);
// } else {
//     alert("Xatolik! Siz son kiritishingiz kerak");
// }

// let a = +prompt("1-sonni kirit");
// let b = +prompt("2-sonni kirit");
// let c = +prompt("3-sonni kirit");

// // a < b < c
// if (a < b && b < c) {
//     alert(`${a} < ${b} < ${c}`);
// }

// // a > b > c
// else if (a > b && b > c) {
//     alert(`${a} > ${b} > ${c}`);
// }

// // a < b > c
// else if (a < b && b > c) {
//     alert(`${a} < ${b} > ${c}`);
// }

// // a > b < c
// else if (a > b && b < c) {
//     alert(`${a} > ${b} < ${c}`);
// } else {
//     alert("Xatolik! Siz son kiritishingiz alertga");
// }

// 3 - masala

// let x = prompt("x: ");
// let y = prompt("y: ");
// let z = prompt("z: ");

// if (x + y + z > x * y * z) {
//     alert("x+y+z");
// } else if (x + y + z < x * y * z) {
//     alert("x*y*z");
// }

// if ((x + y + z) ** 2 / 2 > x * y * z) {
//     alert("x+y+z");
// } else if ((x + y + z) ** 2 / 2 < x * y * z) {
//     alert("x*y*z");
// }

// 5 - masala

// // a, b, c haqiqiy sonlar kiritilsin
// let a = +prompt("a sonini kiriting:");
// let b = +prompt("b sonini kiriting:");
// let c = +prompt("c sonini kiriting:");

// // Tengsizlikni tekshirish: a >= b >= c
// if (a >= b && b >= c) {
//     // Agar tengsizlikni qanoatlantirsa, qiymatlarni 2 marta orttirish
//     a *= 2;
//     b *= 2;
//     c *= 2;
// } else {
//     // Agar tengsizlikni qanoatlantirmasa, har bir sonning absolyut qiymatini olish
//     a = a;
//     b = b;
//     c = c;
// }

// // Natijani chiqarish
// alert(`Natija: a = ${a}, b = ${b}, c = ${c}`);

// 6 - masala;

// let x = +prompt(`x Sonlarni Kiriting: `);
// let y = +prompt(`y Sonlarni Kiriting: `);
// if (x > y) {
//     alert("z=x-y");
// } else {
//     alert("y-x+1");
// }

// 7 - masala

// Foydalanuvchidan ikkita haqiqiy sonni olish
// let a = prompt("Birinchi sonni kiriting:");
// let b = prompt("Ikkinchi sonni kiriting:");

// // Shartni tekshirish
// if (a > b) {
//     alert("Birinchi son: " + a);
// } else {
//     alert('Birinchi son: ' + a + ' Ikkinchi son: ' + b)
// }

// alert(`a = ${a}, b = ${b}`)

// 🔁 2-Masala: 1 dan N gacha bo‘lgan toq sonlar
// Shart:
// Foydalanuvchi N sonini kiritadi. Dastur 1 dan N gacha bo‘lgan toq sonlarni chiqaradi.

// Masalan:
// Kirish: 10
// Chiqish: 1 3 5 7 9

// Izoh: Faqat while va if ishlatilsin. continue ishlatilmasin.

// let N = +prompt("N sonini kiriting:");

// let i = 1;
// while (i <= N) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
//     i++;
// }

// ⏳ 3-Masala: Son necha xonali?
// Shart:
// Foydalanuvchi musbat butun son kiritadi. while tsikli orqali ushbu son nechta xonali ekanligini aniqlang.

// Masalan:
// Kirish: 872
// Chiqish: Bu son 3 xonali

// let son = prompt("Musbat butun son kiriting:");

// let xonalarSoni = 0;

// while (son > 0) {
//     son = Math.floor(son / 10);
//     xonalarSoni++;
// }

// alert(`Bu son ${xonalarSoni} xonali.`);

// 🔄 4-Masala: Faktorial hisoblash
// Shart:
// Foydalanuvchi n sonini kiritadi. Dastur n! ya’ni faktorialni hisoblaydi (n * (n-1) * ... * 1).

// Masalan:
// Kirish: 5
// Chiqish: 5! = 120

// Izoh: Faqat while va if/else orqali.

// let n = prompt("Musbat butun sonni kiriting:");

// let faktorial = 1;
// let i = 1;

// if (n < 0) {
//     alert("Iltimos, musbat butun son kiriting.");
// } else {
//     while (i <= n) {
//         faktorial *= i;
//         i++;
//     }
//     alert(`${n}! = ${faktorial}`);
// }

// 10 ta baho kiritilishini so'raymiz
// for (let i = 1; i <= 10; i++) {
//     let baho = +prompt(`Baho ${i}:`);

//     if (baho === 5) {
//         alert("A'lo");
//     } else if (baho === 4) {
//         alert("Yaxshi");
//     } else if (baho === 3) {
//         alert("Qoniqarli");
//     } else if (baho === 2) {
//         prompt(
//             `qanaqa 2 blat gapimga tushunmayopsanmi 3 da 5 gacha belgila dedimku  `
//         );
//     } else if (baho === 1) {
//         prompt(`kallanga qo'tir chomosh qanaqa 1 blat 3 da 5 gacha belgila  `);
//     } else {
//         alert("Noto'g'ri baho");
//     }
// }

// let n = +prompt("Son kiriting: ");
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         alert(i);
//     }
// }

// let n = +prompt("Son kiriting: ");
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         n += i;
//     }
//     console.log(n);
// }

// let n = +prompt('Son kiriting: ') // Misol uchun n = berilgan son
// let yigindi = 0

// for (let i = 1; i <= n; i++) {
// 	if (n % i === 0) {
// 		// Misol uchun n % i == 0 bo'lsa yigindi += i
// 		yigindi += i
// 	}
// }

// alert(`Sonning (${n}) bulinuvchilari yig'indisi: ${yigindi}`);

// if (yigindi == n) {
//     console.log(`${n} - mukammal son.`);
// } else {
//     console.log(`${n} - mukammal emas.`);
// }

// let N = prompt("Son: ");
// let sum = 0;

// for (let i = 1; i < N; i++) {
//     if (N % i == 0) {
//         sum += i;
//     }

//     if (n == a) {
//         alert(sum);
//     }
// }

// let N = +prompt("Son kirit: ");
// let sum = 0;

// for (let i = 1; i < N; i++) {
//     if (N % i === 0) {
//         sum += i;
//     }
// }
// console.log(`${N} ning bo‘luvchilari yig‘indisi: ${sum}`);

// if (sum === N) {
//     console.log(`${N} - mukammal son.`);
// } else {
//     console.log(`${N} - mukammal emas.`);
// }

// let N = +prompt('Son kirit: ');

// console.log(`1 dan ${N} gacha bo‘lgan, 3 ga bo‘linadigan, lekin 5 ga bo‘linmaydigan sonlar:`);

// for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//         console.log(i);
//     }
// }

// let n = +prompt("Son kiriting: "); // Misol uchun n = 29
// let tub = true;

// if (n <= 1) {
//     tub = false;
// } else {
//     for (let i = 2; i <= n / 2; i++) {
//         if (n % i === 0) {
//             tub = false;
//             break;
//         }
//     }
// }
// if (tub) {
//     console.log(`${n} tub sondir.`);
// } else {
//     console.log(`${n} tub son emas.`);
// }

// let number = +prompt("son: ");
// let isPrime = true;

// if (number <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i <= number / 2; i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     console.log("tub");
// } else {
//     console.log("tub emas");
// }

// let a = [1, 2, 3, 4, 5];
// let b = 0;
// for (let i = 0; i < a.length; i++) {
//     b += a[i];
// }
// let c = b / a.length;
// let d = [];
// for (g of a) {
//     if (c < g) {
//         d.push(g);
//     }
// }
// console.log(d);

// function juftToqAjratish(massiv) {
//     const juftSonlar = [];
//     const toqSonlar = [];

//     massiv.forEach((son) => {
//         if (son % 2 === 0) {
//             juftSonlar.push(son);
//         } else {
//             toqSonlar.push(son);
//         }
//     });

//     return [juftSonlar, toqSonlar];
// }

// // Misol uchun massiv
// const massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const [juft, toq] = juftToqAjratish(massiv);

// console.log("Juft sonlar:", juft);
// console.log("Toq sonlar:", toq);

// function elementlarOrasidagiFarq(massiv) {
//     const farqlar = [];

//     for (let i = 0; i < massiv.length - 1; i++) {
//         const farq = massiv[i + 1] - massiv[i];
//         farqlar.push(farq);
//     }

//     return farqlar;
// }

// // Misol uchun massiv
// const massiv = [5, 10, 7, 4];

// const farqlar = elementlarOrasidagiFarq(massiv);

// alert(farqlar); // [5, -3, -3]

// let sonlar = [6, 12, 3, 5, 7, 18, 90, 1];

// console.log(sonlar);

// sonlar.sort((a, b) => a - b);

// console.log(sonlar);

// objects;

// const students = {
//     surName: "Davlatov",
//     name: "John",
//     lastName: "",
// };

// console.log(students);
// 6-masala

// let n = prompt("son kiriting: ");

// let arr = [20, 30, 40, 50 ];
// let c = [];
// {
//     if (arr > i) arr.push(c);
//     arr.sort();
// }
// console.log(c);

// ================

// let n = +prompt("Son kiriting:");

// let arr = [20, 10, 50, 40, 80];
// let i = [];

// arr.sort(arr);
// arr.push(i);

// console.log(i);

// ====================

// const arr = [20, 10, 50, 40, 80];

// arr.sort((a, b) => a - b);

// let i = [...arr];

// console.log(i);

// ===================

// let a = [89,77,55,10,7,6]
// let c = 50
// let b = []
// for(let i of a){
//     if(c>i){
//         b.push(i)
//     }
// }
// b.sort()

// console.log(b)

// ===================

// 7-masala

// let arr = ["a", 12, 23, "b"];

// let c = [];
// for (let i of arr) {
//     if (typeof i == string) {
//         c.push(i);
//     }
// }

// console.log(c);

// 8-masala

// const a = [12, 12, 3, 5, 5, 8];
// let s = [];
// for (let i of a) {
//     if (a.includes())
//       s.push(i);
// }
// console.log(s);

// ================

// const a = [12, 12, 3, 5, 5, 8, 11, 11];
// let s = [];

// for (let i of a) {
//     if (a.indexOf(i) === a.lastIndexOf(i)) {
//         s.push(i);
//     }
// }

// console.log(s);

// 9-masala

// let c = +prompt("son kiriting iltimos: ");

// const a = [2, 5, 6, 8, 9, 15];
// let d = 0;
// let j = 0;

// for (let i of a) {
//     if (i > n) {
//         d++;
//         j += i;
//     }
// }
// if (d > 0) {
//     console.log("O‘rtacha:", j / d);
// } else {
//     console.log("Bunday son yo‘q.");
// }
// console.log("Sonlar soni:", d);

// =================

// 10-masala

// const a = [12, 15, 8, 20, 3, 25]
// let d = 0
// let j = 0

// let n = 10

// for (let i of a) {
// 	if (i > n) {
// 		d++
// 		j += i
// 	}
// }

// if (d > 0) {
// 	console.log('O‘rtacha:', j / d)
// } else {
// 	console.log('Bunday son yo‘q.')
// }
// console.log('Sonlar soni:', d)

// function juftSonlarniKvadratQilibAjrat(massiv) {
// 	return massiv
// 		.filter(son => son % 2 === 0) // juft sonlarni ajratish
// 		.map(son => son ** 2) // kvadrat qilish
// 		.filter(son => son < 100) // 100 dan kichiklarni ajratish
// }

// // Misol uchun massiv
// const massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const natija = juftSonlarniKvadratQilibAjrat(massiv)

// console.log(natija) // [4, 16, 36, 64]

// //Berilgan sondan kichik bo‘lgan elementlarni tartib bilan yangi massivga joylashtiring.

// // for, if, push, sort
// function kichikElementlarniJoylashtir(massiv, son) {
//   const yangiMassiv = [];

//   for (let i = 0; i < massiv.length; i++) {
//     if (massiv[i] < son) {
//       yangiMassiv.push(massiv[i]);
//     }
//   }

//   yangiMassiv.sort((a, b) => a - b);

//   return yangiMassiv;
// }

// // Misol uchun massiv
// const massiv = [5, 2, 8, 1, 9, 4, 7, 6, 3];

// const son = 5;

// const natija = kichikElementlarniJoylashtir(massiv, son);

// console.log(natija); // [1, 2, 3, 4]

// function stringVaRaqamlarniAjratish(massiv) {
//   const stringlar = massiv.filter(element => typeof element === 'string');
//   const raqamlar = massiv.filter(element => typeof element === 'number');

//   stringlar.sort((a, b) => a.length - b.length);

//   return { stringlar, raqamlar };
// }

// // Misol uchun massiv
// const massiv = ['hello', 1, 'world', 2, 'abc', 3, 'def', 4];

// const natija = stringVaRaqamlarniAjratish(massiv);

// console.log(natija);
// // {
// //   stringlar: ['abc', 'def', 'hello', 'world'],
// //   raqamlar: [1, 2, 3, 4]
// // }

// // 11-masala

// const olma = {
// 	rangi: "qizil",
// 	tam: "shirin",
// 	nav: "eshak olma",
// 	shakl: "oval",
// 	pishgan: true,
// 	qurt: 0
// }

// const spacesip = {
// 	homePlanet: 'Earth',
// 	color: 'silver',
// 	crew: {
// 		capitan: 'Otabek',
// 		members: [
// 			{
// 				name: "O'lmas",
// 				age: 29,
// 				quality: 'medic',
// 			},

// 			{
// 				name: 'Abdukarim',
// 				age: 18,
// 				quality: 'injener',
// 			},

// 			{
// 				name: "Boboxo'ja",
// 				age: 16,
// 				quality: 'mexanik',
// 			},

// 			{
// 				name: 'kamol',
// 				age: 18,
// 				quality: 'inspektor',
// 			},
// 		],
// 	},
// 	mission: 'Explore the solar system',
// 	secretMission: 'Destroy Mars',
// 	takeoff() {
// 		console.log("Bip bop blast...")
// 		console.log("Taking of from the ground!")
// 	},
// 	fly() {
// 		console.log("The ship is flying!")
// 	},
// 	land() {
// 		console.log("Prrrshshshshhhh...")
// 		console.log("landing...")
// 	},
// 	shoot(){
// 		console.log("Pew pew pew")
// 	},
// };

// const ekipaj = spaceship.crew.members;

// for(let i = 0; i<ekipaj.length)

// const salaries = {
// 	"O'lmas": 10000,
// 	"Boboxo'ja": 9000,
// 	Abdukarim: 10000,
// 	Kamol: 5000,
// 	Firdavs: 5000,
// 	aziz: 12000,
// 	javohir: 22000,
// }

// let summa = 0
// let sanash = 0
// for (let i in salaries) {
// 	summa += salaries[i]
// 	sanash++
// }

// const urtacha = summa / sanash

// console.log(urtacha)

// Math.floor()
// Math.random()
// Math.round()
// Math.max()
// Math.min()
// Math.abs()
// Math.

// const talabalar = [
// 	"O'lmas",
// 	"Boboxo'ja",
// 	'Abdukarim',
// 	'Kamol',
// 	'Firdavs',
// 	'aziz',
// 	'javohir',
// 	'Abdulaziz',
// 	'Muhammadali',
// 	'Marjona',
// 	'Tahmina',
// 	'Shahlo',
// 	'Amirshox',
// 	'Javohir',
// 	'Kamron',
// 	'Mirsaid',
// 	'Muhammadmirzo',
// ]

// const randomTalaba = talabalar[Math.min(Math.random() * talabalar.length)]

// console.log('Random talabani tanladim: ', randomTalaba)

// const person = {
// 	name: 'Alice',
// 	greet: function () {
// 		console.log("Hello, I'm " + this.name)
// 	},
// }

// person.greet() // Outputs: Hello, I'm Alice

// console.dir(document);

// const body = document.children[0].children[1];
// body.className = 'tana';
// console.dir(body.className);
// const myTitle = document.body.children[0].children[0].children[0];

// myTitle.style.color = 'gold';
// myTitle.style.fontSize = '50px';

// const talabalar = [
// 	"O'lmas",
// 	"Boboxo'ja",
// 	'Abdukarim',
// 	'Kamol',
// 	'Firdavs',
// 	'aziz',
// 	'javohir',
// 	'Abdulaziz',
// 	'Muhammadali',
// 	'Marjona',
// 	'Tahmina',
// 	'Shahlo',
// 	'Amirshox',
// 	'Javohir',
// 	'Kamron',
// 	'Mirsaid',
// 	'Muhammadmirzo',
// ];

// const randomTalaba = talabalar[Math.floor(Math.random() * talabalar.length)];

// myTitle.textContent = 'Xush kelibsiz ' + randomTalaba;

// console.dir(myTitle);

// const paragraf = document.body.children[1].children[0].children[0].children[1];

// paragraf.style.color = 'green';
// paragraf.style.fontSize = '20px';

// const sarlavha = document.body.children[1].children[0].children[0].children[0];

// sarlavha.style.fontSize = '25px';
// sarlavha.style.color = 'blue';




