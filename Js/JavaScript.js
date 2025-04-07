// let x = prompt(`1 - Son Kiriting: `)
// let y = prompt(`2 - Son Kiriting: `)

// if (x > y) {
// 	alert(`1 - son katta`)
// } else if (x < y) {
// 	alert(`2 - son katta`)
// } else {
// 	alert(`Bu sonlar teng`)
// }

// // Foydalanuvchidan qiymatlarni olish
// x = float(input("x ning qiymatini kiriting: "))
// y = float(input("y ning qiymatini kiriting: "))
// z = float(input("z ning qiymatini kiriting: "))

// // Maksimal va minimal qiymatlarni topish
// maximum = max(x, y, z)
// minimum = min(x, y, z)

// // Natijalarni chiqarish
// print("Maksimal qiymat:", maximum)
// print("Minimal qiymat:", minimum)

// let x = +prompt(`1 - Son Kiriting: `)
// let y = +prompt(`2 - Son Kiriting: `)
// let z = +prompt(`3 - Son Kiriting: `)

// if (isNaN(x) || isNaN(y) || isNaN(z)) {
// 	alert("Iltimos, to'g'ri raqam kiriting!")
// } else {
// 	if (x === y && y === z) {
// 		alert(`Sonlar teng`)
// 	} else if (x > y && x > z) {
// 		alert(`1 - son eng katta`)
// 	} else if (y > x && y > z) {
// 		alert(`2 - son eng katta`)
// 	} else if (z > x && z > y) {
// 		alert(`3 - son eng katta`)
// 	} else if (x < y && x < z) {
// 		alert(`1 - son eng kichik`)
// 	} else if (y < x && y < z) {
// 		alert(`2 - son eng kichik`)
// 	} else if (z < x && z < y) {
// 		alert(`3 - son eng kichik`)
// 	} else {
// 		alert(`Sonlar teng`)
// 	}
// }

// let a = +prompt('1-sonni kirit')
// let b = +prompt('2-sonni kirit')
// let c = +prompt('3-sonni kirit')

// // a < b < c
// if (a < b && b < c) {
// 	alert(`${a} ${b} dan kichik ${b} ${c} dan kichik`)
// }

// // a > b > c
// else if (a > b && b > c) {
// 	alert(`${a} ${b} dan katta ${b} ${c} dan katta`)
// }

// // a < b > c
// else if (a < b && b > c) {
// 	alert(`${a} ${b} dan kichik ${b} ${c} dan katta`)
// }

// // a > b < c
// else if (a > b && b < c) {
// 	alert(`${a} ${b} dan katta ${b} ${c} dan kichik`)
// }

// // a < b = c
// else if (a < b && b == c) {
// 	alert(`${a} ${b} dan kichik ${b} ${c} ga teng`)
// }

// // a > b = c
// else if (a > b && b == c) {
// 	alert(`${a} ${b} dan katta ${b} ${c} ga teng`)
// } else {
// 	alert('Xatolik! Siz son kiritishingiz kerak')
// }

// let a = +prompt('1-sonni kirit')
// let b = +prompt('2-sonni kirit')
// let c = +prompt('3-sonni kirit')

// // a < b < c
// if (a < b && b < c) {
// 	alert(`${a} < ${b} < ${c}`)
// }

// // a > b > c
// else if (a > b && b > c) {
// 	alert(`${a} > ${b} > ${c}`)
// }

// // a < b > c
// else if (a < b && b > c) {
// 	alert(`${a} < ${b} > ${c}`)
// }

// // a > b < c
// else if (a > b && b < c) {
// 	alert(`${a} > ${b} < ${c}`)
// } else {
// 	alert('Xatolik! Siz son kiritishingiz alertga')
// }

// 3 - masala

// let x = prompt('x: ')
// let y = prompt('y: ')
// let z = prompt('z: ')

// if (x + y + z > x * y * z) {
// 	alert('x+y+z')
// } else if (x + y + z < x * y * z) {
// 	alert('x*y*z')
// }

// if ((x + y + z) ** 2 / 2 > x * y * z) {
// 	alert('x+y+z')
// } else if ((x + y + z) ** 2 / 2 < x * y * z) {
// 	alert('x*y*z')
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

// 6 - masala

// let x = +prompt(`x Sonlarni Kiriting: `)
// let y = +prompt(`y Sonlarni Kiriting: `)
// if(x>y){
//     alert("z=x-y")
// }else{
//     alert("y-x+1")
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
//     son = Math.floor(son / 10)
// 		xonalarSoni++;
// 	}

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
for (let i = 1;) {
	let baho = +prompt(`Baho ${i}:`)

	if (baho === 5) {
		alert("A'lo")
	} else if (baho === 4) {
		alert('Yaxshi')
	} else if (baho === 3) {
		alert('Qoniqarli')
	} else if (baho === 2) {
		prompt(
			`qanaqa 2 blat gapimga tushunmayopsanmi 3 da 5 gacha belgila dedimku  `
		)
	} else if (baho === 1) {
		prompt(`kallanga qo'tir chomosh qanaqa 1 blat 3 da 5 gacha belgila  `)
	} else {
		alert("Noto'g'ri baho")
	}
}
