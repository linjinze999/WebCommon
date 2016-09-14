 /*----------------------------------时间格式转化---------------------------------*/
 
/**
 * 函数：时间转yyyy-MM-dd HH:mm:ss
 * 输入：
 *   @param date
 *     a.类型：Date
 *     b.含义：时间
 *     c.默认：当前时间
 *   @param spaceCharacter
 *     a.类型：Array[7]
 *     b.含义：间隔符
 *     c.默认：["-","-",""," ",":",":",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：yyyy-MM-dd HH:mm:ss
 */
 function dateToYmdHms( date, spaceCharacter ) {
	date = date || new Date();
	spaceCharacter = spaceCharacter || ["-","-",""," ",":",":",""];
	
    var year, month, day, hour, minute, seconds;

    year = date.getFullYear();
    month = date.getMonth() + 1 + "";
    day = date.getDate() + "";
    hour = date.getHours() + "";
    minute = date.getMinutes() + "";
    seconds = date.getSeconds() + "";


    if (month.length === 1) {
        month = "0" + month;
    }

    if (day.length === 1) {
        day = "0" + day;
    }

    if (hour.length === 1){
        hour = "0" + hour;
    }

    if (minute.length === 1){
        minute = "0" + minute;
    }

    if (seconds.length === 1){
        seconds = "0" + seconds;
    }
	
    return year + spaceCharacter[0] + month + spaceCharacter[1] + day + spaceCharacter[2] + spaceCharacter[3] + 
	  hour + spaceCharacter[4] + minute + spaceCharacter[5] + seconds + spaceCharacter[6];
}

/**
 * 函数：时间转yyyy-MM-dd HH:mm
 * 输入：
 *   @param date
 *     a.类型：Date
 *     b.含义：时间
 *     c.默认：当前时间
 *   @param spaceCharacter
 *     a.类型：Array[6]
 *     b.含义：间隔符
 *     c.默认：["-","-",""," ",":",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：yyyy-MM-dd HH:mm
 */
 function dateToYmdHm( date, spaceCharacter ) {
	date = date || new Date();
	spaceCharacter = spaceCharacter || ["-","-",""," ",":",""];
	
    var year, month, day, hour, minute;

    year = date.getFullYear();
    month = date.getMonth() + 1 + "";
    day = date.getDate() + "";
    hour = date.getHours() + "";
    minute = date.getMinutes() + "";


    if (month.length === 1) {
        month = "0" + month;
    }

    if (day.length === 1) {
        day = "0" + day;
    }

    if (hour.length === 1){
        hour = "0" + hour;
    }

    if (minute.length === 1){
        minute = "0" + minute;
    }
	
    return year + spaceCharacter[0] + month + spaceCharacter[1] + day + spaceCharacter[2] + 
	  spaceCharacter[3] + hour + spaceCharacter[4] + minute + spaceCharacter[5];
}
 
/**
 * 函数：时间转yyyy-MM-dd
 * 输入：
 *   @param date
 *     a.类型：Date
 *     b.含义：时间
 *     c.默认：当前时间
 *   @param spaceCharacter
 *     a.类型：Array[3]
 *     b.含义：间隔符
 *     c.默认：["-","-",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：yyyy-MM-dd
 */
function dateToYmd( date, spaceCharacter ) {
    date = date || new Date();
	spaceCharacter = spaceCharacter || ["-","-",""];
	var year, month, day;

    year = date.getFullYear();
    month = date.getMonth() + 1 + "";
    day = date.getDate() + "";

    if (month.length === 1) {
        month = "0" + month;
    }

    if (day.length === 1) {
        day = "0" + day;
    }

    return year + spaceCharacter[0] + month + spaceCharacter[1] + day + spaceCharacter[2];
}

/**
 * 函数：时间转yyyy-MM
 * 输入：
 *   @param date
 *     a.类型：Date
 *     b.含义：时间
 *     c.默认：当前时间
 *   @param spaceCharacter
 *     a.类型：Array[2]
 *     b.含义：间隔符
 *     c.默认：["-",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：yyyy-MM
 */
function dateToYm( date, spaceCharacter ) {
    date = date || new Date();
	spaceCharacter = spaceCharacter || ["-",""];
	var year, month;

    year = date.getFullYear();
    month = date.getMonth() + 1 + "";

    if (month.length === 1) {
        month = "0" + month;
    }

    return year + spaceCharacter[0] + month + spaceCharacter[1];
}

/**
 * 函数：时间转MM-dd
 * 输入：
 *   @param date
 *     a.类型：Date
 *     b.含义：时间
 *     c.默认：当前时间
 *   @param spaceCharacter
 *     a.类型：Array[2]
 *     b.含义：间隔符
 *     c.默认：["-",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：MM-dd
 */
function dateToMd( date, spaceCharacter ) {
    date = date || new Date();
	spaceCharacter = spaceCharacter || ["-",""];
	var month, day;

    month = date.getMonth() + 1 + "";
    day = date.getDate() + "";

    if (month.length === 1) {
        month = "0" + month;
    }

    if (day.length === 1) {
        day = "0" + day;
    }

    return month + spaceCharacter[0] + day + spaceCharacter[1];
}

/**
 * 函数：时间转HH:mm:ss
 * 输入：
 *   @param date
 *     a.类型：Date
 *     b.含义：时间
 *     c.默认：当前时间
 *   @param spaceCharacter
 *     a.类型：Array[3]
 *     b.含义：间隔符
 *     c.默认：[":",":",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：HH:mm:ss
 */
function dateToHms( date, spaceCharacter ) {
	date = date || new Date();
	spaceCharacter = spaceCharacter || [":",":",""];
	
    var hours = date.getHours() + "",
	    minutes = date.getMinutes() + "",
		seconds = date.getSeconds() + "";

    if (hours.length === 1) {
        hours = "0" + hours;
    }

    if (minutes.length === 1) {
        minutes = "0" + minutes;
    }
	
	if(seconds.length === 1){
		seconds = "0" + seconds;
	}
	
    return hours + spaceCharacter[0] + minutes + spaceCharacter[1] + seconds + spaceCharacter[2];
}

/**
 * 函数：时间转HH:mm
 * 输入：
 *   @param date
 *     a.类型：Date
 *     b.含义：时间
 *     c.默认：当前时间
 *   @param spaceCharacter
 *     a.类型：Array[2]
 *     b.含义：间隔符
 *     c.默认：[":",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：HH:mm
 */
function dateToHm( date, spaceCharacter ) {
	date = date || new Date();
	spaceCharacter = spaceCharacter || [":",""];
	
    var minutes = date.getMinutes() + "",
        hours = date.getHours() + "";

    if (hours.length === 1) {
        hours = "0" + hours;
    }

    if (minutes.length === 1) {
        minutes = "0" + minutes;
    }
	
    return hours + spaceCharacter[0] + minutes + spaceCharacter[1];
}

/**
 * 函数：时间转mm:ss
 * 输入：
 *   @param date
 *     a.类型：Date
 *     b.含义：时间
 *     c.默认：当前时间
 *   @param spaceCharacter
 *     a.类型：Array[2]
 *     b.含义：间隔符
 *     c.默认：[":",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：mm:ss
 */
function dateToMs( date, spaceCharacter ) {
	date = date || new Date();
	spaceCharacter = spaceCharacter || [":",""];
	
    var minutes = date.getMinutes() + "",
		seconds = date.getSeconds() + "";

    if (minutes.length === 1) {
        minutes = "0" + minutes;
    }
	
	if(seconds.length === 1){
		seconds = "0" + seconds;
	}
	
    return minutes + spaceCharacter[0] + seconds + spaceCharacter[1];
}

 /*----------------------------------时间戳转时间---------------------------------*/

/**
 * 函数：时间戳转时间
 * 输入：
 *   @param timeStamp
 *     a.类型：Number
 *     b.含义：时间戳
 *     c.默认：当前时间戳
 *   @param isTen
 *     a.类型：Boolean
 *     b.含义：是否十位数的时间戳
 *     c.默认：false
 * 输出：
 *   @return
 *     a.类型：Date
 *     b.输出：Date()
 */
function timeStampToDate( timeStamp, isTen ) {
	isTen = isTen || false;
	if( isTen ){
		timeStamp = timeStamp * 1000 || ( new Date() ).getTime();
	}
	else{
		timeStamp = timeStamp || ( new Date() ).getTime();
	}
		
    var date = new Date( timeStamp );

    return date;
}
 
/**
 * 函数：时间戳转yyyy-MM-dd HH:mm:ss
 * 输入：
 *   @param timeStamp
 *     a.类型：Number
 *     b.含义：时间戳
 *     c.默认：当前时间戳
 *   @param isTen
 *     a.类型：Boolean
 *     b.含义：是否十位数的时间戳
 *     c.默认：false
 *   @param spaceCharacter
 *     a.类型：Array[7]
 *     b.含义：间隔符
 *     c.默认：["-","-",""," ",":",":",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：yyyy-MM-dd HH:mm:ss
 */
function timeStampToYmdHms( timeStamp, isTen, spaceCharacter ) {
	
    var date = timeStampToDate( timeStamp, isTen );

    return dateToYmdHms( date, spaceCharacter);
}

/**
 * 函数：时间戳转yyyy-MM-dd HH:mm
 * 输入：
 *   @param timeStamp
 *     a.类型：Number
 *     b.含义：时间戳
 *     c.默认：当前时间戳
 *   @param isTen
 *     a.类型：Boolean
 *     b.含义：是否十位数的时间戳
 *     c.默认：false
 *   @param spaceCharacter
 *     a.类型：Array[6]
 *     b.含义：间隔符
 *     c.默认：["-","-",""," ",":",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：yyyy-MM-dd HH:mm
 */
function timeStampToYmdHm( timeStamp, isTen, spaceCharacter ) {
	
	var date = timeStampToDate( timeStamp, isTen );

    return dateToYmdHm( date, spaceCharacter);
}

/**
 * 函数：时间戳转yyyy-MM-dd
 * 输入：
 *   @param timeStamp
 *     a.类型：Number
 *     b.含义：时间戳
 *     c.默认：当前时间戳
 *   @param isTen
 *     a.类型：Boolean
 *     b.含义：是否十位数的时间戳
 *     c.默认：false
 *   @param spaceCharacter
 *     a.类型：Array[3]
 *     b.含义：间隔符
 *     c.默认：["-","-",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：yyyy-MM-dd
 */
function timeStampToYmd( timeStamp, isTen, spaceCharacter ) {
	
	var date = timeStampToDate( timeStamp, isTen );

    return dateToYmd( date, spaceCharacter);
}

/**
 * 函数：时间戳转yyyy-MM
 * 输入：
 *   @param timeStamp
 *     a.类型：Number
 *     b.含义：时间戳
 *     c.默认：当前时间戳
 *   @param isTen
 *     a.类型：Boolean
 *     b.含义：是否十位数的时间戳
 *     c.默认：false
 *   @param spaceCharacter
 *     a.类型：Array[2]
 *     b.含义：间隔符
 *     c.默认：["-",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：yyyy-MM
 */
function timeStampToYm( timeStamp, isTen, spaceCharacter ) {
	
	var date = timeStampToDate( timeStamp, isTen );

    return dateToYm( date, spaceCharacter);
}

/**
 * 函数：时间戳转MM-dd
 * 输入：
 *   @param timeStamp
 *     a.类型：Number
 *     b.含义：时间戳
 *     c.默认：当前时间戳
 *   @param isTen
 *     a.类型：Boolean
 *     b.含义：是否十位数的时间戳
 *     c.默认：false
 *   @param spaceCharacter
 *     a.类型：Array[2]
 *     b.含义：间隔符
 *     c.默认：["-",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：MM-dd
 */
function timeStampToMd( timeStamp, isTen, spaceCharacter ) {
	
	var date = timeStampToDate( timeStamp, isTen );

    return dateToMd( date, spaceCharacter);
}

/**
 * 函数：时间戳转HH:mm:ss
 * 输入：
 *   @param timeStamp
 *     a.类型：Number
 *     b.含义：时间戳
 *     c.默认：当前时间戳
 *   @param isTen
 *     a.类型：Boolean
 *     b.含义：是否十位数的时间戳
 *     c.默认：false
 *   @param spaceCharacter
 *     a.类型：Array[3]
 *     b.含义：间隔符
 *     c.默认：[":",":",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：HH:mm:ss
 */
function timeStampToHms( timeStamp, isTen, spaceCharacter ) {
	
	var date = timeStampToDate( timeStamp, isTen );

    return dateToHms( date, spaceCharacter);
}

/**
 * 函数：时间戳转HH:mm
 * 输入：
 *   @param timeStamp
 *     a.类型：Number
 *     b.含义：时间戳
 *     c.默认：当前时间戳
 *   @param isTen
 *     a.类型：Boolean
 *     b.含义：是否十位数的时间戳
 *     c.默认：false
 *   @param spaceCharacter
 *     a.类型：Array[2]
 *     b.含义：间隔符
 *     c.默认：[":",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：HH:mm
 */
function timeStampToHm( timeStamp, isTen, spaceCharacter ) {
	
	var date = timeStampToDate( timeStamp, isTen );

    return dateToHm( date, spaceCharacter);
}

/**
 * 函数：时间戳转mm:ss
 * 输入：
 *   @param timeStamp
 *     a.类型：Number
 *     b.含义：时间戳
 *     c.默认：当前时间戳
 *   @param isTen
 *     a.类型：Boolean
 *     b.含义：是否十位数的时间戳
 *     c.默认：false
 *   @param spaceCharacter
 *     a.类型：Array[2]
 *     b.含义：间隔符
 *     c.默认：[":",""]
 * 输出：
 *   @return
 *     a.类型：String
 *     b.输出：mm:ss
 */
function timeStampToMs( timeStamp, isTen, spaceCharacter ) {
	
	var date = timeStampToDate( timeStamp, isTen );

    return dateToMs( date, spaceCharacter);
}

/*----------------------------------对时间进行处理---------------------------------*/
/**
 * 函数：date加some年
 * 输入：
 *   @param some
 *     a.类型：Number
 *     b.含义：年数差值
 *     c.默认：0
 *   @param date
 *     a.类型：Date
 *     b.含义：被处理的时间
 *     c.默认：当前时间
 * 输出：
 *   @return
 *     a.类型：Date
 *     b.输出：Date()
 */
function dateAddSomeYear( some, date ){
	
    date = date || new Date();
	some = some || 0;
    date.setFullYear(date.getFullYear() + some);

    return date;
}

/**
 * 函数：date加some月
 * 输入：
 *   @param some
 *     a.类型：Number
 *     b.含义：月数差值
 *     c.默认：0
 *   @param date
 *     a.类型：Date
 *     b.含义：被处理的时间
 *     c.默认：当前时间
 * 输出：
 *   @return
 *     a.类型：Date
 *     b.输出：Date()
 */
function dateAddSomeMonth( some, date ){
	
    date = date || new Date();
	some = some || 0;
    date.setMonth(date.getMonth() + some);

    return date;
}

/**
 * 函数：date加some天
 * 输入：
 *   @param some
 *     a.类型：Number
 *     b.含义：天数差值
 *     c.默认：0
 *   @param date
 *     a.类型：Date
 *     b.含义：被处理的时间
 *     c.默认：当前时间
 * 输出：
 *   @return
 *     a.类型：Date
 *     b.输出：Date()
 */
function dateAddSomeDay( some, date ){
	
    date = date || new Date();
	some = some || 0;
    date.setDate(date.getDate() + some);

    return date;
}

/**
 * 函数：date加some时
 * 输入：
 *   @param some
 *     a.类型：Number
 *     b.含义：时数差值
 *     c.默认：0
 *   @param date
 *     a.类型：Date
 *     b.含义：被处理的时间
 *     c.默认：当前时间
 * 输出：
 *   @return
 *     a.类型：Date
 *     b.输出：Date()
 */
function dateAddSomeHours( some, date ){
	
    date = date || new Date();
	some = some || 0;
    date.setHours(date.getHours() + some);

    return date;
}

/**
 * 函数：date加some分
 * 输入：
 *   @param some
 *     a.类型：Number
 *     b.含义：分数差值
 *     c.默认：0
 *   @param date
 *     a.类型：Date
 *     b.含义：被处理的时间
 *     c.默认：当前时间
 * 输出：
 *   @return
 *     a.类型：Date
 *     b.输出：Date()
 */
function dateAddSomeMinutes( some, date ){
	
    date = date || new Date();
	some = some || 0;
    date.setMinutes(date.getMinutes() + some);

    return date;
}

/**
 * 函数：date加some秒
 * 输入：
 *   @param some
 *     a.类型：Number
 *     b.含义：秒数差值
 *     c.默认：0
 *   @param date
 *     a.类型：Date
 *     b.含义：被处理的时间
 *     c.默认：当前时间
 * 输出：
 *   @return
 *     a.类型：Date
 *     b.输出：Date()
 */
function dateAddSomeSeconds( some, date ){
	
    date = date || new Date();
	some = some || 0;
    date.setSeconds(date.getSeconds() + some);

    return date;
}

/**
 * 函数：date加some毫秒
 * 输入：
 *   @param some
 *     a.类型：Number
 *     b.含义：毫秒数差值
 *     c.默认：0
 *   @param date
 *     a.类型：Date
 *     b.含义：被处理的时间
 *     c.默认：当前时间
 * 输出：
 *   @return
 *     a.类型：Date
 *     b.输出：Date()
 */
function dateAddSomeMilliseconds( some, date ){
	
    date = date || new Date();
	some = some || 0;
    date.setMilliseconds(date.getMilliseconds() + some);

    return date;
}


/*----------------------------------导出---------------------------------*/
module.exports = {
    dateToYmdHms:dateToYmdHms,
	dateToYmdHm:dateToYmdHm,
	dateToYmd:dateToYmd,
	dateToYm:dateToYm,
	dateToMd:dateToMd,
	dateToHms:Hms,
	dateToHm:dateToHm,
	dateToMs:dateToMs,
	timeStampToYmdHms:timeStampToYmdHms,
	timeStampToYmdHm:timeStampToYmdHm,
	timeStampToYmd:timeStampToYmd,
	timeStampToYm:timeStampToYm,
	timeStampToMd:timeStampToMd,
	timeStampToHms:timeStampToHms,
	timeStampToHm:timeStampToHm,
	timeStampToMs:timeStampToMs,
	dateAddSomeYear:dateAddSomeYear,
	dateAddSomeMonth:dateAddSomeMonth,
	dateAddSomeDay:dateAddSomeDay,
	dateAddSomeHours:dateAddSomeHours,
	dateAddSomeMinutes:dateAddSomeMinutes,
	dateAddSomeSeconds:dateAddSomeSeconds,
	dateAddSomeMilliseconds:dateAddSomeMilliseconds
};
