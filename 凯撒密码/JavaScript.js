function encrypted()
    {
        var key = document.getElementById("m").value;
        var cont = document.getElementById("XinXi").value;
        var strup = cont.toUpperCase(); //把所有字母都转成大写
        var charcodearr = [];
        var rotcodearr = [];
        for (var i = 0; i < strup.length; i++) { //获取strup每个字母的code并push进数组charcodearr里
            var strcode=(strup.charCodeAt(i)-64);
            charcodearr.push(strcode);
        }
        for (var j = 0; j < charcodearr.length; j++) //凯撒加密,加密后的值push进数组rotcodearr里
            rotcodearr.push(charcodearr[j] + key*1);      
        //var x = String.fromCharCode.apply(this, rotcodearr)
        var x = rotcodearr.join("");
        document.getElementById("Mi").innerHTML = x;
}
function deciphering() {
    var key = document.getElementById("m").value;
    var cont = document.getElementById("know").value;
    var numcodearr = [];
    var charcodearr = [];
    var rotcodearr = [];
    var num;
    var final;

    rotcodearr = cont.split("");//将字符串变成数组

    if(rotcodearr[0]-key*1<0)
        for (var j = 0; j < rotcodearr.length; j += 2)
        {
            num = rotcodearr[j] * 10 + rotcodearr[j + 1];
            numcodearr.push(num);
        }
    else
        for (var i = 0; i < rotcodearr.length; i++)
            numcodearr = rotcodearr.slice();//复制数组
    numcodearr = numcodearr.toUpperCase();
    for (var k = 0; k < numcodearr.length; k++)
    {
        final = fromCharCode(numcodearr[k] - key * 1+65);//将数字变成对应的ASCII码值
        charcodearr.push(final);
    }
    //var x = charcodearr.join("");
    document.getElementById("Ming").innerHTML = charcodearr;
}