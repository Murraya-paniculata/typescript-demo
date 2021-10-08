
function sum(a: string, b: string): string;
function sum(a: number, b: number): number;
function sum (a: string | number, b: string | number): string | number {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    } else if ( typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
    throw new Error("a和b必须是相同的类型")
}

let s = sum(11, 3);

console.log(s);