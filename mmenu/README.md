# mmenu——常用配置项 #
----------
#### 导语：
>　　[mmenu](http://mmenu.frebsite.nl/)是一个优美的响应式导航插件，不过由于没有中文网站，一些人使用起来可能不太方便，这里列出它的一些常用配置项，以便大家使用。

## 一、使用方法 
### 1、下载
[下载mmenu](http://mmenu.frebsite.nl/download.html) 到本地，解压并复制 ./dist 目录下的所有文件和 ./demo/css/demo.css 文件到项目中。
### 2、引用文件
在网页head标签中引用如下3个文件：  

    <link href="./css/demo.css" />
    <link href="./css/jquery.mmenu.all.css" />
    <script src="./js/jquery.mmenu.all.min.js"></script>


**备注：不引用 demo.css 的话会导致展示效果出错。**

### 3、代码
1）、html代码如下：

    <body>
		<div id="page">
			<div class="header">
				<a href="#menu"><span></span></a>
				Demo
			</div>
			<div class="content">
				<p><strong>This is a demo.</strong><br />
					Click the menu icon to open the menu.</p>
			</div>
			<nav id="menu">
				<ul>
					<li><a href="#">Home</a></li>
					<li><span>About us</span>
						<ul>
							<li><a href="#about/history">History</a></li>
							<li><span>The team</span>
								<ul>
									<li><a href="#about/team/management">Management</a></li>
									<li><a href="#about/team/sales">Sales</a></li>
									<li><a href="#about/team/development">Development</a></li>
								</ul>
							</li>
							<li><a href="#about/address">Our address</a></li>
						</ul>
					</li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</div>
    </body>

**备注：可参考./demo/default.html文件代码**
2）、js代码如下：

    $(function() {
		$('nav#menu').mmenu();
	});

### 4、展示效果
1）手机：
关闭形态↓
![](http://i.imgur.com/zbueDL4.png)
展开形态↓
![](http://i.imgur.com/Rb4AelR.png)  
2）电脑：
展开形态↓
![](http://i.imgur.com/bzQyfgu.png)

## 二、常用配置项
mmenu使用如下代码配置参数： 

    $(function() {
		$('nav#menu').mmenu({
            options_name1 : options_value1,
            options_name2 : options_value2
            …… : ……
        },{
            configuration_name1 : configuration_value1,
            configuration_name2 : configuration_value2
            …… : ……
        });
	});  
**备注：括号内有两个json形式的参数，第一个为选项，第二个为配置，前者较常使用。**

### 一）、options
带 * 配置项较不常用。
#### 1、slidingSubmenus
>1. 简介：子菜单滑入
>2. 描述：子菜单从旁边滑入覆盖父菜单，若想竖着展开子菜单，则将值设为false。
>3. 值类型：boolen
>4. 默认值：true
>5. 演示地址：http://mmenu.frebsite.nl/documentation/options/  

#### 2、*autoHeight
>1. 简介：自适应高度
>2. 描述：当你希望目录总长度跟菜单长度（下方没有菜单的地方不计算）一样，而不是跟屏幕一样长时，可通过设置此值来实现。
>3. 值类型：boolen或Json 
>4. 子配置项：
    - height：" default | auto | highest"。描述：高度类型。
>5. 默认值：false
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/auto-height.html 

#### 3、*backButton
>1. 简介：响应浏览器回退按钮
>2. 描述：按下浏览器的回退按钮，响应相应操作。
>3. 值类型：boolen或Json 
>4. 子配置项：
    - close：true | false。描述：点击浏览器的回退按钮时，是否关闭目录。
>5. 默认值：`{close:false}`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/back-button.html  

#### 4、columns
>1. 简介：目录多列
>2. 描述：使用多列来展示目录，进入子菜单时会额外添加一列来展示子菜单。
>3. 值类型：boolean或json 
>4. 子配置项：
    - add：true | false。描述：是否启用多列。
    - visible：{min:1, max:3}。描述：列的数量范围。
>5. 默认值：`{ add:false, visible:{ min:1, max:3} }`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/columns.html 

#### 5、counters
>1. 简介：子菜单计数
>2. 描述：是否显示子菜单数量。
>3. 值类型：boolean或json 
>4. 子配置项：
    - add：true | false。描述：是否启用计数。
    - addTo："panels" | 有效的jquery选择器。描述：计数显示的位置。
    - update： true | false。描述：是否在子菜单中自动计算条目的个数。
>5. 默认值：`{ add:false, addTo:"panels", update:false }`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/counters.html 

#### 6、*dividers
>1. 简介：分割器
>2. 描述：根据菜单名首字对菜单归类。
>3. 值类型：boolen或Json 
>4. 子配置项：
    - add：true | false。描述：是否启用分割器。
    - addTo："panels" | 有效的jquery选择器。描述：分割器显示的位置。
    - collapse： true | false。描述：是否折叠后面类名为classNames.dividers.collapsed的菜单。
    - fixed：true | false。描述：是否在顶部固定显示当前屏幕最上方菜单类别的首字。
>5. 默认值：`{ add:false, addTo:"panels", collapse:false, fixed:false }`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/dividers.html 

#### 7、*drag
>1. 简介：拖曳
>2. 描述：启用手势滑动开关目录（可能是手机）。
>3. 值类型：boolen或Json 
>4. 子配置项：
    - page：true | json。
        - maxStartPos：100 | Number。描述：启动拖曳的最大x值。
        - open：true | false。描述：拖曳页面时是否打开目录。
        - node：null | jQuery 。描述：允许拖曳打开的节点。
        - threshold：50 | Number>=50。描述：实际打开目录前的最少像素点数量。
    - panels：true | json。
        - close：true | false。描述：滑出时是否关闭目录。
>5. 默认值：`{ page:{maxStartPos:100, open:false, node:null, threshold:50}, panels:{close:false} }`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/drag.html 

 

### 二）、configuration
#### 1、*drag
>1. 简介：拖曳
>2. 描述：启用手势滑动开关目录（可能是手机）。
>3. 值类型：Json 
>4. 子配置项：
    - page：json
        - height：json
            - perc：0.8 | Number（0~1）。描述：目录高度百分比。
            - min：140 | Number。描述：目录最小高度。
            - max：880 | Number。描述：目录最大高度。
        - width：json
            - perc：0.8 | Number（0~1）。描述：目录宽度百分比。
            - min：140 | Number。描述：目录最小宽度。
            - max：440 | Number。描述：目录最大宽度。
>5. 默认值：`{ page:{height:{perc:0.8,min:140,max:880}, width:{perc:0.8,min:140,max:440}}}`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/drag.html 