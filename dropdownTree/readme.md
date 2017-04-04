# dropdownTree  
#### 导语
>  基于[zTree](http://www.treejs.cn/v3/main.php#_zTreeInfo)自己封装了一个带选择框的树形下拉框组件。


----------
## 一、简介：
### 一）、基础组件
本组件基于其他组件封装，必须引入其他组件才可用：  
1. jQuery  
    - zTree中已带有
2. zTree：
    - [Demo演示](http://www.treejs.cn/v3/demo.php#_101)  
    - [api文档](http://www.treejs.cn/v3/api.php)
    - [下载](https://github.com/zTree/zTree_v3)  
    
### 二）、效果展示  
![树形下拉框](http://i.imgur.com/IrzfQkG.png)  

## 二、使用  
### 1、引用文件  
- zTree及jQuery引用： 
    - `<link rel="stylesheet" href="./zTree_v3-master/css/metroStyle/metroStyle.css">`
    - `<script src="./zTree_v3-master/js/jquery-1.4.4.min.js"></script>`
	- `<script src="./zTree_v3-master/js/jquery.ztree.core.js"></script>`
	- `<script src="./zTree_v3-master/js/jquery.ztree.excheck.js"></script>`
	- `<script src="./zTree_v3-master/js/jquery.ztree.exhide.min.js"></script>`
    
- 本组件引用：
    - `<link rel="stylesheet" href="./dropdownTree.css">`
    - `<script src="./dropdownTree.js"></script>`

### 2、使用  
    
    <div>
        <input id="demo" type="text"/>
		<script>
			$("#demo").dropdownTree({
				checkType:"checkbox",
				data:[
					{id:1, pId:0, name:"北京"},
					{id:2, pId:0, name:"天津"},
					{id:3, pId:0, name:"上海"},
					{id:7, pId:0, name:"重庆"},
					{id:4, pId:0, name:"河北省", open:true},
					{id:41, pId:4, name:"石家庄"},
					{id:42, pId:4, name:"保定"},
					{id:43, pId:4, name:"邯郸"},
					{id:44, pId:4, name:"承德"},
					{id:5, pId:0, name:"广东省", open:true},
					{id:51, pId:5, name:"广东"},
					{id:52, pId:5, name:"深圳"},
					{id:53, pId:5, name:"东莞"},
					{id:6, pId:0, name:"福建省", open:true},
					{id:61, pId:6, name:"福州"},
					{id:62, pId:6, name:"厦门"},
					{id:63, pId:6, name:"泉州"},
					{id:64, pId:6, name:"漳州"},
					{id:641, pId:64, name:"漳浦"}
				 ]
			});
		</script>
    </div>

**备注：参考index.html**

## 三、文档  
配置项如下：  

    {
		width:"auto",
		menuHeight:"300px",
		height:"auto",
		placeholder:'请选择',
	    filedSearch:{
			show:true,
			showChildren:true,
			placeholder:'',
			noResult:'找不到结果',
		},
		valueShow:{
			type:"string",
			stringShow:{
				max:3,
				text:"#/% 被选中"
			},
		},
	    checkType:"none",
		checkSet:{
			"none":{
				parentCheck:false,
			},
			"radio":{
				parentCheck:false,
				radioType:"all",
			},
			"checkbox":{
				parentCheck:true,
				parentValue:false,
				relateChildren:true,
				showCheckAll:true,
				checkAllHtml:"全选",
				maxCheck:false,
			}
		},
	    zTree:{
	    	view: {
				dblClickExpand: false
			},
			data: {
				simpleData: {
					enable: true,
					idKey : "id",
				    pIdKey : "pId",
				}
			},
			callback:{},
	    },
		data:[]
	}

### 1. width:  
> 1. 描述：整个下拉框树的宽度
2. 可选值：
    - "auto"：和原输入框一致；
    - "default"：默认250px；
    - String：自定义，只支持px
3. 默认值:**"auto"**

### 2. menuHeight:  
> 1. 描述：下拉框树的高度
2. 可选值：
    - String：自定义，只支持px
3. 默认值:**"300px"**

### 3. height:    
> 1. 描述：输入框的宽度
2. 可选值：
    - "auto"：和原输入框一致；
    - "default"：默认25px；
    - String：自定义，只支持px
3. 默认值:**"auto"**

### 4. placeholder:  
> 1. 描述：输入框提示文字
2. 可选值：
    - String：自定义文字
3. 默认值:**"请选择"**

### 5. filedSearch:    
> 1. 描述：查询框
2. 子配置项：
    - show：**true** | false。是否显示查询框
    - showChildren：**true** | false。查找到结点时如果该结点有子结点，是否显示子结点
    - placeholder：**""** | String。查询框提示文字
    - noResult：**'找不到结果'** | String。“找不到结果”文本
3. 默认值:

        {
            show:true, 
            showChildren:true, 
            placeholder:"",
            noResult:'找不到结果'
        }

### 6.valueShow:
>1. 描述：值显示样式
>2. 子配置项：
    - type："string" | "hidden" | "ellipsis"。string表示用以下文本取代值；hidden表示超出部分隐藏；ellipsis表示超出部分用“…”取代。
    - stringShow:
        - max：**3** | false | number。超过n个值被选中后用下面的text取代值显示；false表示不管选择多少个都被取代。默认前三个值正常显示。
        - text：**"#/% 被选中"** | string。取代文本。%表示总数量，#表示目前选中数量。
>3. 默认值：

    {
		type:"string",
		stringShow:{
			max:3,
			text:"#/% 被选中"
		}
	}
		

### 7. checkType:    
> 1. 描述：结点前是否加入选择框
2. 可选值：
    - "none"：无
    - "radio"：单选框
    - "checkbox"：多选框
3. 默认值:**"none"**

### 8. checkSet:    
> 1. 描述：选择框的配置项
2. 子配置项：
    - "none"：
        - parentCheck：true | **false**。父结点是否可选
    - "radio"：
        - parentCheck：true | **false**。父结点是否可选
        - radioType：**"all"** | "level"。单选范围（all:整棵树；level：自己组别）
    - "checkbox"：
        - parentCheck：**true** | false。父结点是否可选
        - parentValue：true | **false**。是否取父节点的值
        - relateChildren：**true** | false。选中状态是否关联子结点
        - showCheckAll：**true** | false。显示“全选”
        - checkAllHtml:**"全选"** | String。“全选”文本，支持html
        - maxCheck：**false** | number。最多选择个数。false表示不限制。
3. 默认值:

		{
			"none":{
				parentCheck:false,
			},
			"radio":{
				parentCheck:false,
				radioType:"all",
			},
			"checkbox":{
				parentCheck:true,
				relateChildren:true,
				showCheckAll:true,
				checkAllHtml:"全选",
                maxCheck:false,
			}
		}

### 9. zTree:    
> 1. 描述：zTree的配置项
2. 配置：参考[官网zTree配置](http://www.treejs.cn/v3/api.php)
3. 默认值:
	    zTree:{
	    	view: {
				dblClickExpand: false
			},
			data: {
				simpleData: {
					enable: true,
					idKey : "id",
				    pIdKey : "pId",
				}
			},
			callback:{}
	    },

### 10. data:
> 1. 描述：zTree的数据
2. 配置：参考 [官网zTree标准JSON数据](http://www.treejs.cn/v3/demo.php#_101) 或者 [官网zTree简单JSON数据](http://www.treejs.cn/v3/demo.php#_102)
3. 默认值:**[]**