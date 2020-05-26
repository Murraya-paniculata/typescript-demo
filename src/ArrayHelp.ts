export class ArrayHelper<T>{

    constructor(private arr:T[]) {

    }

    take(callback: callback<T>) {
        const newArr: T[] = [];
        this.arr.forEach((n, i) => {
            if (callback(n, i)) {
                newArr.push(n);
            }
        });
        return newArr
    }

    private getRandom(min: number, max: number): number {
        const dec = max - min;
        return Math.floor(Math.random() * dec + max);
    }

    shuffle(callback: callback<T>) {
        for (let i = 0; i < this.arr.length; i++) {
            const targetIndex = this.getRandom(0, this.arr.length);
            const tem = this.arr[i];
            this.arr[i] = this.arr[targetIndex];
            this.arr[targetIndex] = tem;
        }
    }
}