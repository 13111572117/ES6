const scanf=require('scanf');
// scanf('%d');

// ******运算语句******
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// console.log('请输入你的姓名');
// let name=scanf('%S');
// let c=a+b;
// let d=a*b;
// let f=a/b;
// let g=a%b;
// console.log('name:'+name);
// console.log('拼接a+b='+a+b);        //+a+b 数值的拼接
// console.log('c=a+b='+(a+b));      //+(a+b) 数值字符串相加
// console.log('d=a*b='+d);
// console.log('f=a/b='+f);
// console.log('g=a%b='+g);

// console.log('请输入两个数，计算两个数的和：请按回车继续');
// scanf('%d');
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// console.log('a+b='+(a+b));

// ******if...else 语句******
// console.log('输入俩个数，判断俩个数，并输入最大值');
// console.log('输入a');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// if(a>b){
//     console .log('最大值是a:'+a);
// }else if (a<b){
//     console.log('最大值是b:'+b);
// }else{
//     console.log('a=b='+a);
// }
// ******数组******
// let arr=[1,2,3,4,5,6,7,8,9,0];
// console.log('数组arr：长度为' +arr.length+'\n分别是：'+arr);

// ******while 循环语句******
// console.log('欢迎进入个人信息系统');
// let adq = [];
// while(1){
//     console.log('1--请输入你的姓名');
//     console.log('2--显示个人信息');
//     console.log('3--删除最后一项信息');
//     console.log('4--退出系统');
//     let con=scanf('%d');
//     if(con===1){
//         console.log('请输入你的姓名');
//         let x =scanf('%s');
//         console.log('请输入你的性别');
//         let a =scanf('%s');
//         console.log('请输入你的年龄');
//         let b =scanf('%s');
//         adq.push(x,a,b);
//         console.log('添加成功');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===2){
//         console.log('显示个人信息');
//         for(let i=0;i<adq.length;i++){
//             let q = adq[i];
//             console.log(q);
//         }
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===3){
//         console.log('删除最后一项信息');
//         let x =scanf('%d');
//         adq.pop();
//         console.log('删除成功');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===4){
//         console.log('程序退出');
//         break;
//     }
// }

// ******for循环******
// console.log('循环遍历数组');
// let arr = [1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     let a = arr[i];
//     console.log(a);
// }

// ******坐标******
// let a=1;
// a=2;
// console.log(a);
// // 对象：存储多个数值,键值对存储多个值，每个值有自己名字
// let xinlong={
//     a:1,  //横坐标
//     b:2,  //纵坐标
// }
// console.log(xinlong.a);
// console.log('坐标：('+xinlong.a+','+xinlong.b+')');

// ******坐标管理系统******
// console.log('欢迎进入坐标管理系统');
// let arr = [];
// while(1){
//     console.log('1--添加坐标信息');
//     console.log('2--显示坐标信息');
//     console.log('3--删除坐标信息');
//     console.log('4--退出系统');
//     let con=scanf('%d');
//     if(con===1){
//         console.log('添加一个坐标');
//         console.log('请输入横坐标：');
//         let x=scanf('%d');
//         console.log('请输入纵坐标：');
//         let y=scanf('%d');
//         let zuobiao={
//             'x':x,
//             'y':y
//         };
//         arr.push(zuobiao);
//         console.log('添加坐标成功');
//         console.log('点击回车返回');
//         scanf('%d');
//     }
//     if(con === 2){
//         console.log('显示坐标信息');
//         for(let i=0;i<arr.length;i++){
//             let sky=arr[i];
//             // console.log(sky);
//             console.log(`第${i+1}个坐标为:(${sky.x},${sky.y})`);
//         }
//         console.log('点击回车返回');
//         scanf('%d');
//     } 
//     if(con === 3){
//         console.log('删除坐标信息');
//         arr.pop();
//         console.log('删除成功');
//         scanf('%d');
//     }
//     if(con === 4){
//         console.log('退出系统');
//         break;
//     }
// }

// ******坐标管理系统******
console.log('学生成绩管理系统');
let arr = [];
while(1){
    console.log('1---添加学生信息及成绩');
    console.log('2---显示学生信息及成绩');
    console.log('3---删除学生信息及成绩');
    console.log('4---退出系统');
    let con = scanf('%d');
    if(con === 1){
        console.log('添加个人信息');
        console.log('输入姓名:');
        let name = scanf ('%s');
        console.log('输入语文成绩:');
        let yuwen = scanf ('%d');
        console.log('输入数学成绩:');
        let shuxue = scanf ('%d');
        let xinxi={
            'name':name,
            'yuwen':yuwen,
            'shuxue':shuxue
        };
        arr.push(xinxi);
        console.log('添加成功');
        console.log('点击返回');
        scanf('%d');
    }
    if(con === 2){
        console.log('显示个人信息');
        for(let i=0;i<arr.length;i++){
            let a = arr[i];
            console.log(`姓名为：${a.name},语文成绩：${a.yuwen},数学成绩：${a.shuxue}`);
        }
        console.log('点击返回');
        scanf('%d');
    }
    if(con === 3){
        console.log('删除学生成绩');
        arr.pop();
        console.log('点击返回');
        scanf('%d');
    }
    if(con === 4){
        console.log('退出系统');
        break;
    }
}