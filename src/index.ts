enum Gender {
    male = "男",
    female = "女"
}

let gender: Gender;

gender = Gender.female;

// 枚举能够参与代码的编译,其实是生成一个对象
function printGenders() {
    const vals = Object.keys(Gender);
    vals.forEach(v => console.log(v))
}

printGenders();

enum Lever {
    lever1,
    lever2
}

let lever: Lever = Lever.lever1;


console.log(Object.keys(Lever), lever);