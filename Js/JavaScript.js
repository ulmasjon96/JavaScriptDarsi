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
let a = prompt("Birinchi sonni kiriting:");
let b = prompt("Ikkinchi sonni kiriting:");

// Shartni tekshirish
if (a > b) {
    alert("Birinchi son: " + a);
} else {
    alert('Birinchi son: ' + a + ' Ikkinchi son: ' + b)
}


// alert(`a = ${a}, b = ${b}`)