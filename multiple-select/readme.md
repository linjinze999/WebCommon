# 多选下拉框组件

#### 导语：
> &emsp;&emsp;找了一个带复选框的多选下拉框[multipleSelect](http://wenzhixin.net.cn/p/multiple-select/docs/#documentation)，觉得不错，自己稍微修改了一下，汉化给大家用用。

## 一、简介

### 1、官方地址：
引用地址：[http://wenzhixin.net.cn/p/multiple-select/docs/#documentation](http://wenzhixin.net.cn/p/multiple-select/docs/#documentation)
### 2、我的修改：
在原来的组件上修改了css文件，美化了一下外观，不影响正常功能。
### 3、效果展示：
![multiple-select组件截图](http://i.imgur.com/LDYPyyc.png)
### 4、浏览器支持：
- IE 7+
- Chrome 8+
- Firefox 10+
- Safari 3+
- Opera 10.6+

## 二、使用方法

### 1、引用文件：
- **css文件：**
    - `<link href="./multiple-select.css" rel="stylesheet"/>;`
- **js文件：**
    - `<script src="http://code.jquery.com/jquery-2.2.0.js"></script>`  
    - `<script src="./multiple-select.js"></script>`  
    **备注：jQuery >= 1.7.0版本，且在multiple-select.js之前引用。css和js文件请从本git上下载。**

### 2、Html如下：
    <select multiple="multiple">
        <optgroup label="组别1">
            <option value="1_1">选项1_1</option>
            <option value="1_2">选项1_2</option>
    		<option value="1_3">选项1_3</option>
    		<option value="1_4">选项1_4</option>
    		<option value="1_5">选项1_5</option>
        </optgroup>
    	<optgroup label="组别2">
            <option value="2_1">选项2_1</option>
            <option value="2_2">选项2_2</option>
    		<option value="2_3">选项2_3</option>
    		<option value="2_4">选项2_4</option>
    		<option value="2_5">选项2_5</option>
        </optgroup>
    </select>

### 3、js如下：
    $('select').multipleSelect({ 
	    placeholder: '请选择',
	    selectAllDelimiter: ['', ''],
	    multiple: true,
	    multipleWidth: 144,
	    filter: true,
	    width: 460,
	    delimiter: ', ',
	    selectAllText: "<span style='font-weight:bold;'>全选</span>",
	    allSelected: '全部选中',
	    countSelected: '#/% 被选中',
	    noMatchesFound: '无匹配项',
	    
	    styler: function () {
	    	return 'color: #333;';
	    }
    
    });

## 三、文档

### （一）、配置项：
#### 1. isOpen:
>1). 类型: boolean  
2). 描述: 默认打开下拉框。
3). 默认值： **false**

#### 2. placeholder:
>1). 类型: string  
2). 描述: 搜索框的提示文字。
3). 默认值：**''**

#### 3. selectAll:
>1). 类型: boolean  
2). 描述: 多选的时候是否显示“全选”。
3). 默认值： **true**

#### 4. selectAllText:
>1). 类型: string  
2). 描述: “全选”选项的文本。 
3). 默认值：**"Select all"**

#### 5. selectAllDelimiter:
>1). 类型: Array  
2). 描述: “全选”文本两旁的字符，即“全选”变为“[全选]”。  
3). 默认值：**['[',']']**

#### 6.allSelected:
>1). 类型: false 或 string  
2). 描述: 全部选中后显示的文本文字。 
3). 默认值：**'All selected'**

#### 7.minimumCountSelected:
>1). 类型: int  
2). 描述: 超过 x 的选项被选中后，选框内的文本会被替换成计数形式，计数文本请参考countSelected。
3). 默认值：**3**

#### 8.countSelected:
>1). 类型: false 或 string  
2). 描述: 计数文本，‘#’ 表示实际选中数量, ‘%’ 表示选项总数量。  
3). 默认值：**'# of % selected'**

#### 9.ellipsis:
>1). 类型: boolean  
2). 描述: 如果minimumCountSelected有值，超出部分用 “…” 替代（覆盖countSelected）。 
3). 默认值： **false**

#### 10.multiple:
>1). 类型: boolean  
2). 描述: 是否开启多选模式。  
3). 默认值：**false**

#### 11.multipleWidth:
>1).类型: integer  
2).描述: 多选时每个选项的宽度，设置此值可以形成多列效果。  
3). 默认值修改：**80**

#### 12.single:
>1).类型: boolean  
2).描述: 是否开启单选模式。 
3).默认值: **false**.

#### 13.position:
>1).类型: string（"bottom" 或 "top"）
2).描述: 展开下拉框时从哪个方向展开（向下或向上）。 
3).默认值: **"bottom"**.

#### 14.filter:
>1).类型: boolean  
2).描述: 是否显示搜索框。  
3). 默认值：**false**

#### 15.width:
>1).类型: integer/string  
2).描述: 下拉框宽度，支持百分比设置。  
3). 默认值：**undefined**

#### 16.maxHeight:
>1).类型: integer  
2).描述: 下拉框的最大高度。
3). 默认值：**250**.

#### 17.keepOpen:
>1).类型: boolean  
2).描述: 保持下拉框展开状态（只有点击输入框才会切换展开形态，点击页面其他地方无法收起下拉框）。 
3). 默认值：**false**.

#### 18.styler:
>1).类型: function  
2).描述: 用于设置选项的样式，返回style的字符串，例如 "background: red"。该函数有一个参数: value。如：  

    styler: function(value) {  
        if (value == '1') {  
            return 'background-color: #ffee00; color: #ff0000;';  
        }  
        if (value == '6') {  
            return 'background-color: #000; color: #fff;';  
        }  
    }   

3). 默认值： `function(value) {}`

#### 19.noMatchesFound:
>1).类型: String  
2).描述: 搜索时若无匹配项，则显示此字符串（官方文档没给出此配置项）。  
3). 默认值修改：**'No matches found'**

  

***

### （二）、事件
#### 1.onOpen:  
>下拉框打开时的事件。

#### 2.onClose:
>下拉框关闭时的事件。

#### 3.onCheckAll:
>全部选中后的事件。

#### 4.onUncheckAll:
>全部不选的事件。

#### 5.onFocus:
>获得焦点时的事件。

#### 6.onBlur:
>失去焦点的事件。

#### 7.onOptgroupClick:
1. 组别（optgroup）被点击后的事件。
2. 参数：

        onOptgroupClick: function(view) {
             /*
            view.label: 组别的名称
            view.checked: 组别是否被选中
            view.children: 子元素数组(DOM elements)
            */
        }


#### 8.onClick:
1. 一个选项被点击后的事件。
2. 参数：

        `onClick: function(view) {
             /*
            view.label: 选项的文本
            view.checked: 选项是否被选中
            */
        }`
  

***

### （三）、方法
#### 1.getSelects:
>- 获取所有被选中的值。参数：string。默认获取value，如果加上text参数，则获取文本。
- 举例： 
  - `$('select').multipleSelect('getSelects');`
  - `$('select').multipleSelect('getSelects','text')`

#### 2.setSelects:
>- 设置某些值被选中。参数：array。
- 举例：
    -  `$('select').multipleSelect('setSelects', [1, 3]);`

#### 3.enable:
>- 允许修改选择。
- 举例：
    - `$('select').multipleSelect('enable');`

#### 4.disable:
>- 不允许修改选择。
- 举例：
    -  `$('select').multipleSelect('disable');`

#### 5.checkAll:
>- 选中所有选项。
-  举例：
    -   `$('select').multipleSelect('checkAll');`

#### 6.uncheckAll:
>- 全部取消选择。 
- 举例：
    -  `$('select').multipleSelect('uncheckAll');`

#### 7.focus:
>- 使下拉框获得焦点。  
- 举例：
    -  `$('select').multipleSelect('focus');`

#### 8.blur:
>- 使下拉框失去焦点。  
- 举例：
    -  `$('select').multipleSelect('blur');`

#### 9.refresh:
>- 重新加载下拉框，当你修改了DOM树的时候可使用本方法重新加载。  
- 举例：
    -  `$('select').multipleSelect('refresh');`
