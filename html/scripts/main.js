//点击更换图片
/*var myImage = document.querySelector('img')

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/home-1.jpg'){
        myImage.setAttribute('src','images/firefox-icon.png')
    }else{
        myImage.setAttribute('src','images/home-1.jpg');
    }
}*/
//添加个性化的欢迎信息！

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.'); //prompt()函数，需要用户输入数据，而且用户点击确定后将数据存储在变量里。
    localStorage.setItem('name',myName);  //大小写字母！！！
    myHeading.textContent = 'Mozilla is cool,' + myName;
} 

if(!localStorage.getItem('name')) {
        setUserName();
    }else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla is cool,' + storedName; 
    }    
         //将下面的onclick事件处理器绑定到按钮上，这样当我们点击按钮时， setUserName() 函数就会被运行。这样用户就可以随时通过点击按钮来设置新的姓名。 
         myButton.onclick = function(){
            setUserName();
        }   
    


