<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="kaisa.aspx.cs" Inherits="凯撒密码.kaisa" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>凯撒密码</title>
    <style>
        form
        {
            text-align :center;
        }
    </style>
    <script type="text/javascript" src="JavaScript.js" ></script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        请输入密钥<input id="m" type="text" /><br />
        <input id="XinXi" type="text" />
        <button type="button" id="Jia" onclick="encrypted()" >加密</button>
        <p id="Mi">密文</p><br />
        <input id="know" type="text" />
        <button type="button" id="Jie" onclick="deciphering()" >解密</button>
        <p id="Ming">明文</p>
    </div>
    </form>
</body>
</html>
