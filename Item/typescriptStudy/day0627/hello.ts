// console.log("hello Ts");

// var str: string = "hello";

// console.log(str);

/**********
 * boolean
 * number
 * string
 * array
 * tuple   元组
 * enum    枚举
 * any     任意
 * null 和 undefined
 * void
 * never
 * *************/

// var doLoading: boolean = false;
// doLoading = true;

// var a: number = 123;
// a = 12.3;
//没有整型和浮点型之分
// console.log(a, "a的值");
// 定义数组的两种方式
// let arr1: number[] = [1, 2, 3, 4];
// let arr2: Array<string> = ["99", "98", "97"];

// let arr3: Array<any> = ["99", 98, true];
// let arr4: any[] = [1, "2", 3, false];

//元组 tuple 数组的一种,已经指定好其中的数据类型
// var tup: [number, string, boolean] = [1, "2", false];

//枚举enum
// enum Color {
//   red,
//   blue,
//   organ,
// }
// console.log(Color.red);
// enum Color {
//   red,
//   blue = 123,
//   organ,
// }
// console.log(Color.organ, "organ");
// var domDiv: any = document.getElementById("container");
// domDiv.style.color = "rgba(0, 136, 136, 0.5)";
// console.log(domDiv?.style.color, "domDiv");
//一个元素可以设置多个类型,也可以设置为any
// var str2: string | number | null | undefined;
// console.log(str2, "str2");
// str2 = null;
// console.log(str2, "str2");
// str2 = 2;
// console.log(str2, "str2");
// str2 = "字符串";
// console.log(str2, "str2");
// void 表示没有任何类型,常用做函数的返回值

// function run(): number {
//   return 0;
// }
// let num: any = run();
// console.log(num);
