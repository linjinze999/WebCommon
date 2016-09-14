#时间函数
####导语：
>提供常用的关于处理时间的函数。  
>1. 模块化通过`var dateUtil = require("dateUtil.js");`并调用`dateUtil.XXXX`使用各函数；  
>2. 单文件引用通过`<script src='dateUtil.js'></script>`直接调用XXXX函数。

##一、时间格式转化  

###1.Date 转 yyyy-MM-dd HH:mm:ss
>1. 函数：`dateToYmdHms( date, spaceCharacter )`
>2. 输入：  
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>    - @param spaceCharacter
>      - 类型：Array[7]
>      - 含义：间隔符
>      - 默认：`["-","-",""," ",":",":",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：yyyy-MM-dd HH:mm:ss  
>4. 举例：  
    - 例子A.
      - 调用：`dateToYmdHms(new Date())`  
      - 输出：2016-09-14 14:25:01
    - 例子B.
      - 调用：`dateToYmdHms(new Date(),["年","月","日"," ","时","分","秒"])`
      - 输出：2016年09月14日 14时25分01秒  

###2.Date 转 yyyy-MM-dd HH:mm
>1. 函数：`dateToYmdHm( date, spaceCharacter )`
>2. 输入：  
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>    - @param spaceCharacter
>      - 类型：Array[6]
>      - 含义：间隔符
>      - 默认：`["-","-",""," ",":",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：yyyy-MM-dd HH:mm 
>4. 举例：  
    - 例子A.
      - 调用：`dateToYmdHm(new Date())`  
      - 输出：2016-09-14 14:25
    - 例子B.
      - 调用：`dateToYmdHm(new Date(),["年","月","日"," ","时","分"])`
      - 输出：2016年09月14日 14时25分  

###3.Date 转 yyyy-MM-dd
>1. 函数：`dateToYmd( date, spaceCharacter )`
>2. 输入：  
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>    - @param spaceCharacter
>      - 类型：Array[3]
>      - 含义：间隔符
>      - 默认：`["-","-",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：yyyy-MM-dd
>4. 举例：  
    - 例子A.
      - 调用：`dateToYmd(new Date())`  
      - 输出：2016-09-14
    - 例子B.
      - 调用：`dateToYmd(new Date(),["年","月","日"])`
      - 输出：2016年09月14日  

###4.Date 转 yyyy-MM
>1. 函数：`dateToYm( date, spaceCharacter )`
>2. 输入：  
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>    - @param spaceCharacter
>      - 类型：Array[2]
>      - 含义：间隔符
>      - 默认：`["-",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：yyyy-MM
>4. 举例：  
    - 例子A.
      - 调用：`dateToYm(new Date())`  
      - 输出：2016-09
    - 例子B.
      - 调用：`dateToYm(new Date(),["年","月"])`
      - 输出：2016年09月  

###5.Date 转 MM-dd
>1. 函数：`dateToMd( date, spaceCharacter )`
>2. 输入：  
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>    - @param spaceCharacter
>      - 类型：Array[2]
>      - 含义：间隔符
>      - 默认：`["-",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：MM-dd
>4. 举例：  
    - 例子A.
      - 调用：`dateToMd(new Date())`  
      - 输出：09-14
    - 例子B.
      - 调用：`dateToMd(new Date(),["月","日"])`
      - 输出：09月14日  

###6.Date 转 HH-mm-ss
>1. 函数：`dateToHms( date, spaceCharacter )`
>2. 输入：  
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>    - @param spaceCharacter
>      - 类型：Array[3]
>      - 含义：间隔符
>      - 默认：`[":",":",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：HH-mm-ss
>4. 举例：  
    - 例子A.
      - 调用：`dateToHms(new Date())`  
      - 输出：14:25:01
    - 例子B.
      - 调用：`dateToHms(new Date(),["时","分","秒"])`
      - 输出：14时25分01秒  

###7.Date 转 HH-mm
>1. 函数：`dateToHm( date, spaceCharacter )`
>2. 输入：  
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>    - @param spaceCharacter
>      - 类型：Array[2]
>      - 含义：间隔符
>      - 默认：`[":",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：HH-mm
>4. 举例：  
    - 例子A.
      - 调用：`dateToHm(new Date())`  
      - 输出：14:25
    - 例子B.
      - 调用：`dateToHm(new Date(),["时","分"])`
      - 输出：14时25分  

###8.Date 转 mm-ss
>1. 函数：`dateToMs( date, spaceCharacter )`
>2. 输入：  
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>    - @param spaceCharacter
>      - 类型：Array[2]
>      - 含义：间隔符
>      - 默认：`[":",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：mm-ss
>4. 举例：  
    - 例子A.
      - 调用：`dateToMs(new Date())`  
      - 输出：25:01
    - 例子B.
      - 调用：`dateToMs(new Date(),["分","秒"])`
      - 输出：25分01秒  


##二、时间戳转时间

###1.时间戳 转 Date
>1. 函数：`timeStampToDate( timeStamp, isTen )`
>2. 输入：  
>    - @param timeStamp
>      - 类型：Number
>      - 含义：时间戳
>      - 默认：当前时间戳  
>    - @param isTen
>      - 类型：Boolean
>      - 含义：是否十位数的时间戳（后台常有10位数时间戳）
>      - 默认：false
>3. 输出：
>  - @return
>      - 类型：Date
>      - 输出：Date()  
>4. 举例：  
    - 例子A.
      - 调用：`timeStampToDate(new Date().getTime())`  
      - 输出：Wed Sep 14 2016 15:43:52 GMT+0800 (中国标准时间)
    - 例子B.
      - 调用：`timeStampToDate(new Date().getTime()/1000, true)`
      - 输出：Wed Sep 14 2016 15:43:52 GMT+0800 (中国标准时间)    

###2.时间戳 转 yyyy-MM-dd HH:mm:ss
>1. 函数：`timeStampToYmdHms( timeStamp, isTen, spaceCharacter )`
>2. 输入：  
>    - @param timeStamp
>      - 类型：Number
>      - 含义：时间戳
>      - 默认：当前时间戳  
>    - @param isTen
>      - 类型：Boolean
>      - 含义：是否十位数的时间戳（后台常有10位数时间戳）
>      - 默认：false
>    - @param spaceCharacter
>      - 类型：Array[7]
>      - 含义：间隔符
>      - 默认：`["-","-",""," ",":",":",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：yyyy-MM-dd HH:mm:ss  
>4. 举例：  
    - 例子A.
      - 调用：`timeStampToYmdHms(new Date().getTime())`  
      - 输出：2016-09-14 14:25:01
    - 例子B.
      - 调用：`timeStampToYmdHms(new Date().getTime()/1000,true)`
      - 输出：2016-09-14 14:25:01  

###3.时间戳 转 yyyy-MM-dd HH:mm
>1. 函数：`timeStampToYmdHm( timeStamp, isTen, spaceCharacter )`
>2. 输入：  
>    - @param timeStamp
>      - 类型：Number
>      - 含义：时间戳
>      - 默认：当前时间戳  
>    - @param isTen
>      - 类型：Boolean
>      - 含义：是否十位数的时间戳（后台常有10位数时间戳）
>      - 默认：false
>    - @param spaceCharacter
>      - 类型：Array[6]
>      - 含义：间隔符
>      - 默认：`["-","-",""," ",":",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：yyyy-MM-dd HH:mm:ss  
>4. 举例：  
    - 例子A.
      - 调用：`timeStampToYmdHm(new Date().getTime())`  
      - 输出：2016-09-14 14:25
    - 例子B.
      - 调用：`timeStampToYmdHm(new Date().getTime()/1000,true)`
      - 输出：2016-09-14 14:25  

###4.时间戳 转 yyyy-MM-dd
>1. 函数：`timeStampToYmd( timeStamp, isTen, spaceCharacter )`
>2. 输入：  
>    - @param timeStamp
>      - 类型：Number
>      - 含义：时间戳
>      - 默认：当前时间戳  
>    - @param isTen
>      - 类型：Boolean
>      - 含义：是否十位数的时间戳（后台常有10位数时间戳）
>      - 默认：false
>    - @param spaceCharacter
>      - 类型：Array[3]
>      - 含义：间隔符
>      - 默认：`["-","-",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：yyyy-MM-dd  
>4. 举例：  
    - 例子A.
      - 调用：`timeStampToYmd(new Date().getTime())`  
      - 输出：2016-09-14
    - 例子B.
      - 调用：`timeStampToYmd(new Date().getTime()/1000,true)`
      - 输出：2016-09-14

###5.时间戳 转 yyyy-MM
>1. 函数：`timeStampToYm( timeStamp, isTen, spaceCharacter )`
>2. 输入：  
>    - @param timeStamp
>      - 类型：Number
>      - 含义：时间戳
>      - 默认：当前时间戳  
>    - @param isTen
>      - 类型：Boolean
>      - 含义：是否十位数的时间戳（后台常有10位数时间戳）
>      - 默认：false
>    - @param spaceCharacter
>      - 类型：Array[2]
>      - 含义：间隔符
>      - 默认：`["-",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：yyyy-MM
>4. 举例：  
    - 例子A.
      - 调用：`timeStampToYm(new Date().getTime())`  
      - 输出：2016-09
    - 例子B.
      - 调用：`timeStampToYm(new Date().getTime()/1000,true)`
      - 输出：2016-09

###6.时间戳 转 MM-dd
>1. 函数：`timeStampToMd( timeStamp, isTen, spaceCharacter )`
>2. 输入：  
>    - @param timeStamp
>      - 类型：Number
>      - 含义：时间戳
>      - 默认：当前时间戳  
>    - @param isTen
>      - 类型：Boolean
>      - 含义：是否十位数的时间戳（后台常有10位数时间戳）
>      - 默认：false
>    - @param spaceCharacter
>      - 类型：Array[2]
>      - 含义：间隔符
>      - 默认：`["-",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：MM-dd  
>4. 举例：  
    - 例子A.
      - 调用：`timeStampToMd(new Date().getTime())`  
      - 输出：09-14
    - 例子B.
      - 调用：`timeStampToMd(new Date().getTime()/1000,true)`
      - 输出：09-14

###7.时间戳 转 HH:mm:ss
>1. 函数：`timeStampToHms( timeStamp, isTen, spaceCharacter )`
>2. 输入：  
>    - @param timeStamp
>      - 类型：Number
>      - 含义：时间戳
>      - 默认：当前时间戳  
>    - @param isTen
>      - 类型：Boolean
>      - 含义：是否十位数的时间戳（后台常有10位数时间戳）
>      - 默认：false
>    - @param spaceCharacter
>      - 类型：Array[3]
>      - 含义：间隔符
>      - 默认：`[":",":",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：HH:mm:ss  
>4. 举例：  
    - 例子A.
      - 调用：`timeStampToHms(new Date().getTime())`  
      - 输出：14:25:01
    - 例子B.
      - 调用：`timeStampToHms(new Date().getTime()/1000,true)`
      - 输出：14:25:01  

###8.时间戳 转 HH:mm
>1. 函数：`timeStampToHm( timeStamp, isTen, spaceCharacter )`
>2. 输入：  
>    - @param timeStamp
>      - 类型：Number
>      - 含义：时间戳
>      - 默认：当前时间戳  
>    - @param isTen
>      - 类型：Boolean
>      - 含义：是否十位数的时间戳（后台常有10位数时间戳）
>      - 默认：false
>    - @param spaceCharacter
>      - 类型：Array[2]
>      - 含义：间隔符
>      - 默认：`[":",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：HH:mm  
>4. 举例：  
    - 例子A.
      - 调用：`timeStampToHm(new Date().getTime())`  
      - 输出：14:25
    - 例子B.
      - 调用：`timeStampToHm(new Date().getTime()/1000,true)`
      - 输出：14:25  

###9.时间戳 转 mm:ss
>1. 函数：`timeStampToMs( timeStamp, isTen, spaceCharacter )`
>2. 输入：  
>    - @param timeStamp
>      - 类型：Number
>      - 含义：时间戳
>      - 默认：当前时间戳  
>    - @param isTen
>      - 类型：Boolean
>      - 含义：是否十位数的时间戳（后台常有10位数时间戳）
>      - 默认：false
>    - @param spaceCharacter
>      - 类型：Array[2]
>      - 含义：间隔符
>      - 默认：`[":",""]`
>3. 输出：
>  - @return
>      - 类型：String
>      - 输出：mm:ss  
>4. 举例：  
    - 例子A.
      - 调用：`timeStampToMs(new Date().getTime())`  
      - 输出：25:01
    - 例子B.
      - 调用：`timeStampToMs(new Date().getTime()/1000,true)`
      - 输出：25:01  


##三、对时间进行处理  

###1.date 加 some 年
>1. 函数：`dateAddSomeYear( some, date )`
>2. 输入：  
>    - @param some
>      - 类型：Number
>      - 含义：年差值
>      - 默认：0
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>3. 输出：
>  - @return
>      - 类型：Date
>      - 输出：Date()  
>4. 举例：  
    - 例子A.
      - 调用：`dateAddSomeYear()`  
      - 输出：Wed Sep 14 2016 16:11:26 GMT+0800 (中国标准时间)
    - 例子B.
      - 调用：`dateAddSomeYear(-4, new Date())`
      - 输出：Fri Sep 14 2012 16:13:05 GMT+0800 (中国标准时间)
    - 例子C.
      - 调用：`dateToYmdHms(dateAddSomeYear(-4, new Date()))`
      - 输出：2012-09-14 16:21:25 

###2.date 加 some 月
>1. 函数：`dateAddSomeMonth( some, date )`
>2. 输入：  
>    - @param some
>      - 类型：Number
>      - 含义：月差值
>      - 默认：0
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>3. 输出：
>  - @return
>      - 类型：Date
>      - 输出：Date()  
>4. 举例：  
    - 例子A.
      - 调用：`dateAddSomeMonth()`  
      - 输出：Wed Sep 14 2016 16:11:26 GMT+0800 (中国标准时间)
    - 例子B.
      - 调用：`dateAddSomeMonth(2, new Date())`
      - 输出：Mon Nov 14 2016 16:19:24 GMT+0800 (中国标准时间)  
    - 例子C.
      - 调用：`dateToYmdHms(dateAddSomeMonth())`
      - 输出：2016-09-14 16:22:26

###3.date 加 some 日
>1. 函数：`dateAddSomeDay( some, date )`
>2. 输入：  
>    - @param some
>      - 类型：Number
>      - 含义：日差值
>      - 默认：0
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>3. 输出：
>  - @return
>      - 类型：Date
>      - 输出：Date()  
>4. 举例：  
    - 例子A.
      - 调用：`dateAddSomeDay()`  
      - 输出：Wed Sep 14 2016 16:11:26 GMT+0800 (中国标准时间)
    - 例子B.
      - 调用：`dateAddSomeDay(30, new Date())`
      - 输出：Fri Oct 14 2016 16:26:18 GMT+0800 (中国标准时间)  
    - 例子C.
      - 调用：`dateToYmdHms(dateAddSomeDay())`
      - 输出：2016-09-14 16:26:18

###4.date 加 some 时
>1. 函数：`dateAddSomeHours( some, date )`
>2. 输入：  
>    - @param some
>      - 类型：Number
>      - 含义：时差值
>      - 默认：0
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>3. 输出：
>  - @return
>      - 类型：Date
>      - 输出：Date()  
>4. 举例：  
    - 例子A.
      - 调用：`dateAddSomeHours()`  
      - 输出：Wed Sep 14 2016 16:35:32 GMT+0800 (中国标准时间)
    - 例子B.
      - 调用：`dateAddSomeHours(1, new Date())`
      - 输出：Wed Sep 14 2016 17:35:32 GMT+0800 (中国标准时间)  
    - 例子C.
      - 调用：`dateToYmdHms(dateAddSomeHours())`
      - 输出：2016-09-14 16:35:32

###5.date 加 some 分
>1. 函数：`dateAddSomeMinutes( some, date )`
>2. 输入：  
>    - @param some
>      - 类型：Number
>      - 含义：分差值
>      - 默认：0
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>3. 输出：
>  - @return
>      - 类型：Date
>      - 输出：Date()  
>4. 举例：  
    - 例子A.
      - 调用：`dateAddSomeMinutes()`  
      - 输出：Wed Sep 14 2016 16:37:24 GMT+0800 (中国标准时间)
    - 例子B.
      - 调用：`dateAddSomeMinutes(10, new Date())`
      - 输出：Wed Sep 14 2016 16:47:24 GMT+0800 (中国标准时间)
    - 例子C.
      - 调用：`dateToYmdHms(dateAddSomeMinutes())`
      - 输出：2016-09-14 16:37:24

###6.date 加 some 秒
>1. 函数：`dateAddSomeSeconds( some, date )`
>2. 输入：  
>    - @param some
>      - 类型：Number
>      - 含义：秒差值
>      - 默认：0
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>3. 输出：
>  - @return
>      - 类型：Date
>      - 输出：Date()  
>4. 举例：  
    - 例子A.
      - 调用：`dateAddSomeSeconds()`  
      - 输出：Wed Sep 14 2016 16:38:57 GMT+0800 (中国标准时间)
    - 例子B.
      - 调用：`dateAddSomeSeconds(10, new Date())`
      - 输出：Wed Sep 14 2016 16:39:07 GMT+0800 (中国标准时间)
    - 例子C.
      - 调用：`dateToYmdHms(dateAddSomeSeconds())`
      - 输出：2016-09-14 16:38:57

###7.date 加 some 毫秒
>1. 函数：`dateAddSomeMilliseconds( some, date )`
>2. 输入：  
>    - @param some
>      - 类型：Number
>      - 含义：毫秒差值
>      - 默认：0
>    - @param date
>      - 类型：Date
>      - 含义：时间
>      - 默认：当前时间  
>3. 输出：
>  - @return
>      - 类型：Date
>      - 输出：Date()  
>4. 举例：  
    - 例子A.
      - 调用：`dateAddSomeMilliseconds()`  
      - 输出：Wed Sep 14 2016 16:40:34 GMT+0800 (中国标准时间)
    - 例子B.
      - 调用：`dateAddSomeMilliseconds(1000, new Date())`
      - 输出：Wed Sep 14 2016 16:40:35 GMT+0800 (中国标准时间)
    - 例子C.
      - 调用：`dateToYmdHms(dateAddSomeMilliseconds())`
      - 输出：2016-09-14 16:40:34
