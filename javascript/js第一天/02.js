//流程控制语句

//条件语句
// arr = [2,3,4,5,6,7,8,12,23,45]
// for (var i = 1; i <= 2; i++) {
//     if (arr[i] == 3) {
//     }
// }
// console.log(i);

// var num = 54;
// if (num % 2 == 0){
//     alert('偶数')
// }else{
//     document.write('奇数')
// }

//定义一个年份
//判断是否是闰年
// var year = prompt();
// if (year % 4 == 0 || year % 400 == 0 && yaer % 100 != 0) {
//     console.log('这是闰年');
// } else {
//     console.log('这不是闰年');
// }

// var i = prompt('请输入数字')
// if (i % 3 == 0) {
//     console.log('能')
// } else {
//     console.log('不能')
// }

// var weight = prompt('您的体重(kg)');
// var height = prompt('您的身高(m)');
// var BMI = weight / (height * height);
// if (BMI<18.5){
//     alert('多吃点吧');
// }else if(BMI<=25){
//     alert('标准体重');
// }else if(BMI<=28){
//     alert('你太胖了');
// }else{
//     alert('肥胖+++');
// }

// var age = prompt('请输入年龄');
// if (age <= 2.5 && age>=0) {
//     alert('幼儿');
// } else if (age > 2.5 && age < 6) {
//     alert('童年')
// } else if (age >= 6 && age < 18) {
//     alert('少年')
// } else if (age >= 18 && age < 40) {
//     alert('青年')
// }else if (age >= 40 && age < 48) {
//     alert('壮年')
// }else if (age >= 48 && age < 66) {
//     alert('中年')
// } else {
//     alert('老年')
// }

// var a = prompt('a')*1;
// var b = prompt('b')*1;
// var c =prompt('c')*1;
// if(a>b && a>c){
//     console.log(a)
// }else if(b>c){
//     console.log(b)
// }else{
//     console.log(c)
// }

var a = prompt('a') * 1;
var b = prompt('b') * 1;
var c = prompt('c') * 1;
if (a < b && a < c) {
    console.log(a)
} else if (b < c) {
    console.log(b)
} else {
    console.log(c)
}