// 普通写法
// function take(arr: any[], n:number):any[] {
//     if (n >= arr.length) {
//         return arr;
//     }
//     const newArr:any[] = [];
//     for (let index = 0; index < n; index++) {
//         newArr.push(arr[index])
//     }
//     return newArr;
// }

// const newArr = take([523,24,2,43], 2);
// console.log(newArr);

function take<T>(arr: T[], n: number): T[] {
    if (n >= arr.length) {
        return arr;
    }
    const newArr: T[] = [];
    for (let index = 0; index < n; index++) {
        newArr.push(arr[index])
    }
    return newArr;
}

const newArr = take<number>([523, 24, 2, 43], 2);

newArr.map(i => i += 1);

type callback<T> = (n: T, i: number) => boolean;

function filter<T>(arr: T[], callback: callback<T>): T[] {
    const newArr: T[] = [];
    arr.forEach((n, i) => {
        if (callback(n, i)) {
            newArr.push(n);
        }
    });
    return newArr
}

const ff = [2, 3, 4, 562, 5223];

console.log(filter(ff, n => n % 2 !== 0));