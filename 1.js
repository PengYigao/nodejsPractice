/*

//异步
var fs=require('fs');

fs.open('1.txt','r',function(err,fd){
    console.log(err);
    console.log(fd);
})*/


/*

/ /同步
var fs=require('fs');

var fd=fs.openSync('1.txt','r')

console.log(fd);*/

//read()  读取方法；
/*var fs=require('fs');
fs.open('1.txt','r',function(err,fd){
    if(err){
        console.log('文件打开失败');
    }else{
        var bf=new Buffer(10);

        console.log(bf)
        fs.read(fd,bf,0,4,null,function(err,len,newBf){
            console.log(len);
        })
    }
})*/

//字符串修改
/*

//
var fs=require('fs');
fs.open('1.txt','r+',function(err,fd){
    if(err){
        console.log('文件打开失败');
    }else{
        fs.write(fd,'5201314',5,'utf-8');
    }
})*/
/*//writeFile()
var fs=require('fs');
var bf=new Buffer('PengYigao');
fs.writeFile('1.txt',bf,function(){
    console.log(arguments);
})*/

/*var fs=require('fs');
var str=' I love you';
fs.appendFile('1.txt',str,function(){
    console.log(arguments);
})*/

/*var fs=require('fs');
fs.mkdir('1');*/
