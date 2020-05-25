class User {
    name: string
    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
    set age (val: number) {
        if(val<0){
            this.age = 0
        } else {
            this.age = val
        }
    }
    get age () {
        return this.age
    }
}

const u = new User("aa", 2);

console.log(u)
