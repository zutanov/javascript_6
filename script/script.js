//1: Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.

const array = [3134, 4, -143, -245, -214]
const result = array.map((el) => {
    if (el < 0) {
        return el
    }
})
console.log(result)

//2: Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.

const array2 = [3, 51, 30, 54, 60]
const result2 = array2.map( (el) => {if (el % 2 === 0){return el}})
console.log(result2)

//3:  Вам дан массив ['Аукпц', 'Бавсывм, 'Амвымиааа']  . Оставьте в нем только те строки,
// длина которых больше 5-ти символов.

const str = ['Аукпц', 'Бавсывм', 'Амвымиааа']
const result3 = str.map( (el) => {
    if (el.length > 5) {
        return el
    }
})
console.log(result3)

//4: Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.
// Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.

const array3 = [3, 51, -30, -54, 60]
const result4 = array3.map((el) => {
    if ( el > 0) {
        return el;
    }
})
console.log(result4)
const result5 = result4.map((el) => {
    if ( el > 30) {
        return Math.sqrt( el)
    }
})
console.log(result5)

//5:  Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.

const array4 = [55, 44, 55, 44, 15, 49]
console.log(new Set (array4))


//6: Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null]. Создайте функцию, которая очищает
// массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).
const array5 = [NaN, 0, 77, false, -17, '',undefined, 99, null]
const result7 = array5.map( (el) => {
    if (el < 0 || el > 0 ) {
        return el
    }
})
console.log(result7)


//6: Вам дан массив ['Аукпц', 'Бавсывм', 'Амвымиааа']  . Выведите длину каждой строки.
const str2 = ['Аукпц', 'Бавсывм', 'Амвымиааа']
for ( let i = 0; i < str2.length; i++) {
    console.log(str2[i].length)
}
