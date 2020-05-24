interface User {
    name: string,
    age: number,
    sayHello: () => void
}

let u:User = {
    name: "123",
    age: 123,
    sayHello () {
        console.log(this.age);
    }
}

// 类型别名
type Condition = (n:number) => boolean

function sum(number: number[], callBack: Condition) {
    let s = 0;
    number.forEach(n => {
        if(callBack(n)){
            s += n;
        }
    })
    return s;
}

const res = sum([1,4,34,21, 34], (n) => n%2 !== 0);
console.log(res);

// 接口的方式
interface Condition1 {
    (n: number): boolean
}

// 接口的继承
interface A {
    T1: string
}

interface B extends A {
    T2: number
}

interface C extends A, B {
    T3: string
}

let d: B = {
    T1: "123",
    T2: 123
}

let c: C = {
    T1: '123',
    T2: 1,
    T3: '123'
}

// 使用类型别名可以实现与以上接口的相似的继承效果，需要通过```&```,（交叉类型）

type Q = {
    T1: number
}

type Q1 = {
    T2: string
}

type Q3 = {
    T3: number
} & Q & Q1

let q: Q3 = {
    T1: 1,
    T2: '122',
    T3: 234
}

// readonly修饰符

interface Person {
    readonly id:number,
    name: string,
    age:number
}

let p: Person = {
    id: 123,
    name: 'Tom',
    age: 22,
}
p.id = "123"


interface Duck {
    sound: "嘎嘎嘎"
    swin():void
}

let per = {
    name: '违章出鞥',
    sound: "嘎嘎嘎" as "嘎嘎嘎",
    age: 123,
    swin() {
        console.log(123);
    }
}

let duck: Duck = per;
