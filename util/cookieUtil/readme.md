#Cookie操作
####导语：
>w3school官方提供的cookie操作。  
>1. 模块化通过`var cookieUtil = require("cookieUtil.js");`并调用`cookieUtil.XXXX`使用各函数；  
>2. 单文件引用通过`<script src='cookieUtil.js'></script>`直接调用XXXX函数。

##一、设置Cookie  
>1. 函数：`setCookie(cname, cvalue, exdays)`
>2. 输入：  
>    - @param cname
>      - 类型：String
>      - 含义：关键字
>    - @param cvalue
>      - 含义：值
>    - @param exdays
>      - 类型：Number
>      - 含义：有效期限（天）
>3. 输出：无  
>4. 举例： `setCookie("myName", "LinJinze", 30)`

##二、获取Cookie  
>1. 函数：`getCookie(cname)`
>2. 输入：  
>    - @param cname
>      - 类型：String
>      - 含义：关键字
>3. 输出：
>    - @return
>      - 类型：String
>      - 返回：cvalue
>4. 举例： 
>    - 调用：`getCookie("myName")`
>    - 返回："LinJinze"  

##三、删除Cookie  
>1. 函数：`clearCookie(name)`
>2. 输入：  
>    - @param cname
>      - 类型：String
>      - 含义：关键字
>3. 输出：无  
>4. 举例： `clearCookie("myName")`