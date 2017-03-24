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
>4. 默认值：**true**
>5. 演示地址：http://mmenu.frebsite.nl/documentation/options/  

#### 2、*autoHeight
>1. 简介：自适应高度
>2. 描述：当你希望菜单总长度跟目录长度（下方没有目录的地方不计算）一样，而不是跟屏幕一样长时，可通过设置此值来实现。
>3. 值类型：boolen或Json 
>4. 子配置项：
    - height：" **default** | auto | highest"。描述：高度类型。
>5. 默认值：**false**
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/auto-height.html 

#### 3、*backButton
>1. 简介：响应浏览器回退按钮
>2. 描述：按下浏览器的回退按钮，响应相应操作。
>3. 值类型：boolen或Json 
>4. 子配置项：
    - close：true | **false**。描述：点击浏览器的回退按钮时，是否关闭菜单。
>5. 默认值：`{close:false}`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/back-button.html  

#### 4、columns
>1. 简介：目录多列
>2. 描述：使用多列来展示目录，进入子菜单时会额外添加一列来展示子菜单。
>3. 值类型：boolean或json 
>4. 子配置项：
    - add：true | **false**。描述：是否启用多列。
    - visible：**{min:1, max:3}**。描述：列的数量范围。
>5. 默认值：`{ add:false, visible:{ min:1, max:3} }`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/columns.html 

#### 5、counters
>1. 简介：子目录计数
>2. 描述：是否显示子目录数量。
>3. 值类型：boolean或json 
>4. 子配置项：
    - add：true | **false**。描述：是否启用计数。
    - addTo：**"panels"** | 有效的jquery选择器。描述：计数显示的位置。
    - update： true | **false**。描述：是否在子菜单中自动计算条目的个数。
>5. 默认值：`{ add:false, addTo:"panels", update:false }`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/counters.html 

#### 6、*dividers
>1. 简介：分割器
>2. 描述：根据菜单名首字对菜单归类（结合目录指引【16、sectionIndexer】使用）。
>3. 值类型：boolen或Json 
>4. 子配置项：
    - add：true | **false**。描述：是否启用分割器。
    - addTo：**"panels"** | 有效的jquery选择器。描述：分割器显示的位置。
    - collapse： true | **false**。描述：是否折叠后面类名为classNames.dividers.collapsed的菜单。
    - fixed：true | **false**。描述：是否在顶部固定显示当前屏幕最上方菜单类别的首字。
>5. 默认值：`{ add:false, addTo:"panels", collapse:false, fixed:false }`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/dividers.html 

#### 7、*drag
>1. 简介：拖曳
>2. 描述：启用手势滑动开关菜单（可能是手机）。
>3. 值类型：boolen或Json 
>4. 子配置项：
    - page：true | json。
        - maxStartPos：**100** | Number。描述：启动拖曳的最大x值。
        - open：true | **false**。描述：拖曳页面时是否打开菜单。
        - node：**null** | jQuery 。描述：允许拖曳打开的节点。
        - threshold：**50** | Number>=50。描述：实际打开菜单前的最少像素点数量。
    - panels：true | json。
        - close：true | **false**。描述：滑出时是否关闭菜单。
>5. 默认值：`{ page:{maxStartPos:100, open:false, node:null, threshold:50}, panels:{close:false} }`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/drag.html 

#### 8、*dropdown
>1. 简介：下拉菜单
>2. 描述：配置下拉菜单的属性。
>3. 值类型：boolen或Json 
>4. 子配置项：
    - drop：true | **false**。描述：是否允许以菜单按钮下拉框的形式打开菜单。
    - event：**"click"** | "hover" | "click hover" | "hover click"。打开或关闭菜单的鼠标事件：悬浮、点击。
    - position：string | json。
        - of：**null** | string。描述：通过一个有效的jQuery选择器按钮来点击。若省略，菜单将自动定位。
        - x：**null** | "left" | "right"。描述：目录应该在按钮的哪个位置（左右）出现。若省略，菜单将自动定位。
        - y：**null** | "top" | "bottom"。描述：目录应该在按钮的哪个位置（上下）出现。若省略，菜单将自动定位。
    - tip：**true** | false。描述：是否为菜单按钮添加一个提示。
>5. 默认值：`{ page:{maxStartPos:100, open:false, node:null, threshold:50}, panels:{close:false} }`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/dropdown.html 

#### 9、iconPanels
>1. 简介：图标面板
>2. 描述：打开子面板时左边是否有一小列空白显示父面板。
>3. 值类型：boolen或Json 
>4. 子配置项：
    - add：true | **false**。描述：打开子面板时左边是否有一小列空白显示父面板。
    - visible：**3** | NUmber。最多显示多少列父面板。
>5. 默认值：`{ add:false, visible:3 }`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/icon-panels.html

#### 10、keyboardNavigation
>1. 简介：键盘控制
>2. 描述：启动键盘控制菜单。
>3. 值类型：boolen或Json 
>4. 子配置项：
    - enable： true | **false**。描述：是否允许通过键盘控制菜单。设为"default"时，打开菜单将自动让第一个菜单获得焦点。
    - enhance：true | **false**。描述：是否增加基本按键控制。
        - 选中项会高亮；
        - 按“Tab”键切换菜单；
        - 按“Enter”键打开子菜单；
        - 按“Backspace”键关闭子菜单；
        - 按“Esc”键关闭菜单。
>5. 默认值：`{ enable:false, enhance:false }`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/keyboard-navigation.html

#### 11、*lazySubmenus
>1. 简介：延缓子菜单
>2. 描述：延缓加载子菜单。
>3. 值类型：boolen或Json 
>4. 子配置项：
    - load： true | **false**。描述：是否延缓加载子菜单。
>5. 默认值：`{ load:false}`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/lazy-submenus.html

#### 12、navbars
>1. 简介：导航栏
>2. 描述：在目录上下方加入内容。
>3. 值类型：boolen或Array 
>4. Array对象子配置项：
    - content： **null** | Array。描述：字符串内容，可以是text或html，也可以是以下关键字。
        - "breadcrumbs"：面包屑
        - "close"：菜单关闭按钮
        - "next"：下一个
        - "prev"：上一个
        - "searchfield"：搜索框
        - "title"：标题
    - height：**1** | Number。描述：长度倍数（将乘40px）。大于1的数会使导航栏最大总数减少。
    - position：**"top"** | "bottom"。描述：控制导航栏出现在上方还是下方。
>5. 默认值：`[{content:null,height:1,position:'top'}]`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/navbars.html

#### 13、pageScroll
>1. 简介：页面滚轮导航
>2. 描述：使一个目录对应页面中一个位置，点击目录后右侧页面滚轮会自动滑至其对应位置。
>3. 值类型：boolen或json 
>4. 子配置项：
    - scroll：true | **false**。描述：点击目录是否让页面滑至其对应的位置。
    - update：true | **false**。描述：页面滑至某一位置是否自动让该位置对应的目录被选中。
>5. 默认值：`{scroll:false,update:false}`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/page-scroll.html

#### 14、*rtl
>1. 简介：从右往左的语言
>2. 描述：使文字全部靠右显示（类似text-align:right）。
>3. 值类型：boolen或json 
>4. 子配置项：
    - use：**"detect"** | boolean。描述：是否启用文字靠右，设为"detect"表示自动检测。
>5. 默认值：`{use:"detect"}`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/rtl.html

#### 15、searchfield
>1. 简介：目录搜索框
>2. 描述：展示搜索框时的配置。
>3. 值类型：boolen或json 
>4. 子配置项：
    - add：true | **false**。描述：是否自动添加搜索框。
    - addTo：**"panels"** | string。描述：搜索框的位置，值为"panels"和一个有效的jquery选择器，也可参考**【12、navbars】**。
    - noResults：**"No results found."** | string。描述：找不到结果时显示的文字。
    - placeholder：**"Search"** | string。描述：搜索框提示文字。
    - resultsPanel：json
        - add：true | **false**。描述：是否添加一个面板显示所有结果，否则将显示目录。
        - dividers：**true** | false。描述：是否为结果添加分割器。
        - title：**"Search results"** | string。搜索结果提示。
    - search：**true** | false。描述：是否开启一边输入一边查询。
    - showSubPanels：**true** | false。描述：对于结果项，是否展示其子菜单。
    - showTextItems：true | **false**。描述：对于没有链接的目录（父目录，只有span）结果是否展示。
>5. 默认值：`{add:false,addTo:"panels",noResults:"No results found.",placeholder:"Search",resultsPanel:{add:false,dividers:true,title:"Search results"},search:true,showSubPanels:true,showTextItems:false}`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/searchfield.html

#### 16、sectionIndexer
>1. 简介：目录首字母指引（适用于英文目录）
>2. 描述：根据目录首字母分类，在目录右侧添加a~z的目录指引，可点击字母到其对应的分类下。
>3. 值类型：boolen或json 
>4. 子配置项：
    - add：true | **false**。描述：是否添加目录指引。
    - addTo：**"panels"** | string。描述：目录指引的位置，值为"panels"和一个有效的jquery选择器。
>5. 默认值：`{add:false,addTo:"panels"}`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/section-indexer.html

#### 17、setSelected
>1. 简介：选中高亮
>2. 描述：使哪些选项被高亮。
>3. 值类型：boolen或json 
>4. 子配置项：
    - current：**true** | false。描述：当前目录高亮，若设为"detect"则会根据url自动判定。
    - hover：true | **false**。描述：鼠标悬浮高亮。
    - parent：true | **false**。描述：父目录高亮。
>5. 默认值：`{current:true,hover:false,parent:false}`
>6. 演示地址：http://mmenu.frebsite.nl/documentation/addons/set-selected.html


### 二）、configuration
#### 1、*drag
>1. 简介：拖曳
>2. 描述：手势滑动开关菜单（可能是手机）的配置。
>3. 值类型：Json 
>4. 子配置项：
    - page：json
        - height：json
            - perc：**0.8** | Number（0~1）。描述：目录高度百分比。
            - min：**140** | Number。描述：目录最小高度。
            - max：**880** | Number。描述：目录最大高度。
        - width：json
            - perc：**0.8** | Number（0~1）。描述：目录宽度百分比。
            - min：**140** | Number。描述：目录最小宽度。
            - max：**440** | Number。描述：目录最大宽度。
>5. 默认值：`{ page:{height:{perc:0.8,min:140,max:880}, width:{perc:0.8,min:140,max:440}}}`
>6. 原文档地址：http://mmenu.frebsite.nl/documentation/addons/drag.html   

#### 2、*dropdown
>1. 简介：下拉菜单
>2. 描述：下拉菜单的样式。
>3. 值类型：Json 
>4. 子配置项：
    - offset：json
        - button：json
            - x：**-10** | Number。描述：菜单基于按钮的水平位移。
            - y：**10** | Number。描述：菜单基于按钮的垂直位移。
        - viewport：json
            - x：**20** | Number。描述：菜单基于视口的水平位移。
            - y：**20** | Number。描述：菜单基于视口的垂直位移。
    - height：json
        - max：**880** | Number。描述：菜单的最大高度。
    - width：json
        - max：**440** | Number。描述：菜单的最大宽度。
>5. 默认值：`{ offset:{button:{x:-10,y:10}, viewport:{x:20,max:20}}, height:{max:880}, width:{max:440}}`
>6. 原文档地址：http://mmenu.frebsite.nl/documentation/addons/dropdown.html

#### 3、navbars
>1. 简介：导航栏
>2. 描述：导航栏样式。
>3. 值类型：json 
>4. 子配置项：
    - breadcrumbSeparator： **"/"** | string。描述：面包屑中两个目录之间的符号。
>5. 默认值：`{ breadcrumbSeparator:'/'}`
>6. 原文档地址：http://mmenu.frebsite.nl/documentation/addons/navbars.html

#### 4、*pageScroll
>1. 简介：页面滚轮
>2. 描述：页面滚轮样式。
>3. 值类型：json 
>4. 子配置项：
    - scrollOffset： **0** | Number。描述：自动滑动超过目录对应位置的高度px总数。
    - updateOffset： **50** | Number。描述：滑动超过目录对应位置多少才使目录被选中。
>5. 默认值：`{ breadcrumbSeparator:'/'}`
>6. 原文档地址：http://mmenu.frebsite.nl/documentation/addons/navbars.html

#### 5、searchfield
>1. 简介：搜索框
>2. 描述：搜索框样式。
>3. 值类型：json 
>4. 子配置项：
    - clear：true | **false**。描述：是否显示清除按钮。
    - form： null | Object。描述：将搜索框置于此form中，否则默认在一个div中。
    - input： null | Object。描述：搜索框属性。
    - submit：true | **false**。描述：是否为搜索框添加一个提交按钮（需要form）。
>5. 默认值：`{ breadcrumbSeparator:'/'}`
>6. 原文档地址：http://mmenu.frebsite.nl/documentation/addons/searchfield.html

#### 6、toggles
>1. 简介：开关
>2. 描述：在目录项后面添加一个开关或勾号√。
>3. 使用：在html的目录标签内加入`<input type="checkbox" class="Toggle" />`（开关）或`<input type="checkbox" class="Check" />`（勾号√）。如：

    <body>
        <nav id="my-menu">
            <ul>
                <li>
                    <a href="#">A toggle</a>
                    <input type="checkbox" class="Toggle" />
                </li>
                <li>
                    <a href="#about">Another toggle</a>
                    <input type="checkbox" class="Toggle" />
                </li>
                <li>
                   <a href="#contact">A checkmark</a>
                   <input type="checkbox" class="Check" />
                </li>
            </ul>
        </nav>
    </body>

>4.class名更换，如Toogle改为button，Check改为mark：

    <script type="text/javascript">
       $(document).ready(function() {
          $("#my-menu").mmenu({
             // options
          }, {
             // configuration
             classNames: {
                toggles: {
                   toggle: "button",
                   check: "mark"
                }
             }
          });
       });
    </script>

>5.原文档地址：http://mmenu.frebsite.nl/documentation/addons/toggles.html

#### 7、screenReader
>1. 简介：屏幕阅读器
>2. 描述：屏幕阅读器提示文字。
>3. 值类型：json 
>4. 子配置项：
    - text：json
        - closeMenu:**"Close menu"** | string。描述：关闭菜单提示文字
        - closeSubmenu:**"Close submenu"** | string。描述：关闭子菜单提示文字
        - openSubmenu:**"Open submenu"** | string。描述：打开子菜单提示文字
        - toggleSubmenu:**"Toggle submenu"** | string。描述：切换子菜单提示文字
>5. 默认值：`{ text:{closeMenu:"Close menu",	closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}}`
>6. 原文档地址：http://mmenu.frebsite.nl/documentation/core/screen-reader.html



### 三）、extensions
>  mmenu基于css实现所有的样式，因此可以通过在extensions中添加相应扩展对象名实现不同的效果。如：

    $("#my-menu").mmenu({
         extensions: ["theme-dark"]
      });
也可通过自己配置来实现一些效果，此时不用array作为值，而是使用json，key为媒介查询（media query），值为要应用的对象数组。如：

    extensions: {
            "all": ["theme-dark"],
            "(min-width: 400px) and (max-width: 799px)": ["iconbar"],
            "(min-width: 800px)": ["widescreen"]
         }
可允许的扩展对象有如下几种：
1. Border style：
>    - 简介：目录间的横线。
>    - 可选值：
        - border-indent（默认）：左边空一点，右边满。
        - border-full：左右全满。
        - border-offset：左右都空一点。
        - border-none：没有目录间的横线。
>    - 演示地址：http://mmenu.frebsite.nl/documentation/extensions/border-style.html  

2. Effects：
>    - 简介：目录出现特效。
>    - 菜单效果可选值：
        - 无：没有特效。
        - fx-menu-fade：整个菜单逐渐显示或消失。
        - fx-menu-slide：整个菜单滑入滑出。
        - fx-menu-zoom：整个菜单从角落上升。
>    - 子面板效果可选值：
        - fx-panels-none：子面板无特效。
        - fx-panels-slide-0：打开子菜单时面板不滑出。
        - fx-panels-slide-100：打开子菜单时面板全部滑出。
        - fx-panels-slide-up：子面板从下面滑入。
        - fx-panels-zoom：打开子菜单时面板从角落滑出。
>    - 目录列表效果可选值：
        - 无：目录列表无特效。
        - fx-listitems-drop：目录列表从上到下逐个显示。
        - fx-listitems-fade：目录列表逐渐出现。
        - fx-listitems-slide：目录列表滑入。
>    - 演示地址：http://mmenu.frebsite.nl/documentation/extensions/effects.html  

3. FullScreen：
>    - 简介：菜单是否占据全屏。
>    - 可选值：
        - 无：宽度占80%，最小140px，最大440px。（如果从上/下打开目录，限制值为140px/880px）
        - fullscreen：占满全屏。
>    - 演示地址：http://mmenu.frebsite.nl/documentation/extensions/fullscreen.html  

4. Iconbar：
>    - 简介：打开子菜单时左侧留一小列空白显示父菜单图标。
>    - 可选值：
        - 无：不留空白。
        - iconbar：留一小列空白。
>    - 演示地址：http://mmenu.frebsite.nl/documentation/extensions/iconbar.html  
 
5. Listview：
>    - 简介：目录列表样式。
>    - 可选值：
        - listview-small：正常目录高度。
        - listview-large：大目录高度。
        - listview-huge：巨大目录高度。
        - listview-justify：垂直调整目录高度。
>    - 其他方法（直接在目录ul/li标签添加class）：
        - divider：分割器样式（li）。
        - inset：子菜单样式（ul）。
        - spacer：在li上方留下更多空白。
>    - 演示地址：http://mmenu.frebsite.nl/documentation/extensions/listview.html  
 
6. Multiline：
>    - 简介：目录名过长时是否多行显示全部名字。
>    - 可选值：
        - 无：“...”取代超出部分。
        - multiline：多行显示全部名字。
>    - 演示地址：http://mmenu.frebsite.nl/documentation/extensions/multiline.html  
 
7. Page dim：
>    - 简介：打开菜单时，主页面的遮罩层。
>    - 可选值：
        - pagedim：以页面自己的背景颜色遮罩。
        - pagedim-white：白色遮罩。
        - pagedim-black：黑色遮罩。
>    - 演示地址：http://mmenu.frebsite.nl/documentation/extensions/page-dim.html  
 
8. Popup：
>    - 简介：以上方悬浮的方式打开菜单。
>    - 可选值：
        - 无：从左边打开菜单。
        - popup：以上方悬浮的方式打开菜单。
>    - 演示地址：http://mmenu.frebsite.nl/documentation/extensions/popup.html  
 
9. Positioning：
>    - 简介：目录位置。
>    - 目录位置：
        - left（默认）：从左边打开菜单。
        - top：从上方打开菜单。
        - right:从右边打开菜单。
        - bottom：从下方打开菜单。
>    - z层位置：
        - back（默认）：菜单和页面平级，平等出现。
        - front：菜单在目录前面，覆盖出现。
        - next：菜单在目录下面，被覆盖出现。
>    - 演示地址：http://mmenu.frebsite.nl/documentation/extensions/positioning.html  
 
10. Shadows：
>    - 简介：阴影效果。
>    - 可选值：
        - shadow-page：页面和菜单之间的阴影效果。
        - shadow-panels：菜单面板和面板间的阴影效果（启动iconPanels时可看到效果）。
>    - 演示地址：http://mmenu.frebsite.nl/documentation/extensions/shadows.html  
 
11. Themes：
>    - 简介：菜单主题颜色。
>    - 可选值：
        - theme-light（默认）：灰白色。
        - theme-dark：灰黑色。
        - theme-black：黑色。
        - theme-white：白色。
>    - 演示地址：http://mmenu.frebsite.nl/documentation/extensions/themes.html  
 
12. Tileview：
>    - 简介：方块菜单（win8菜单风格）。
>    - 介绍：每个目录会默认是宽度为50%的方块，通过添加以下class名调整大小：
        - mm-tileview-xs：12.5%宽度。
        - mm-tileview-s：25%宽度。
        - mm-tileview-l：75%宽度。
        - mm-tileview-xl：100%宽度。
>    - 演示地址：http://mmenu.frebsite.nl/documentation/extensions/tileview.html  
 
13. Widescreen：
>    - 简介：保持菜单打开，不再通过点击按钮打开/关闭菜单。
>    - 可选值：
        - 无：通过点击按钮打开/关闭菜单。
        - widescreen：保持菜单打开。
>    - 演示地址：http://mmenu.frebsite.nl/documentation/extensions/widescreen.html  
 
### 四）、API
调用API，方法如下：
    
    <script type="text/javascript">
       $(document).ready(function() {
          $("#my-menu").mmenu();
    
          //   Get the API
          var api = $("#my-menu").data( "mmenu" );
    
          //   Trigger a method
          api.openPanel( $("#my-panel") );
       });
    </script>

1. closeAllPanels：
>    - 描述：关闭所有目录。
>    - 参数：无  。  
  
2. closePanel：
>    - 描述：关闭特定目录。
>    - 参数：
        - $panel：jquery选择器。要关闭的目录。  

3. getInstance：
>    - 描述：得到菜单实例。
>    - 参数：无。

4. initPanels：
>    - 描述：（重新）初始化菜单
>    - 参数：
        - $panel：jquery选择器。要初始化的菜单。  

5. openPanel：
>    - 描述：打开特定目录。
>    - 参数：
        - $panel：jquery选择器。要打开的目录。  

6. setSelected：
>    - 描述：设置选中。
>    - 参数：
        - $li：jquery选择器。要选中的目录。  
        - selected：boolean。选中状态

调用API hook：
    
    <script type="text/javascript">
       $(document).ready(function() {
          $("#my-menu").mmenu();
    
          //   Get the API
          var api = $("#my-menu").data( "mmenu" );
    
          //   Hook into methods
          api.bind( "openPanel:start", function( $panel ) {
             console.log( "This panel is now opening: #" + $panel.attr( "id" ) );
          });
          api.bind( "openPanel:finish", function( $panel ) {
             console.log( "This panel is now opened: #" + $panel.attr( "id" ) );
          });
       });
    </script>
1. closeAllPanels:before：关闭所有目录前。
2. closeAllPanels:after：关闭所有目录后。
3. closePanel:before：尝试关闭特定目录前。
4. closePanel：关闭特定目录后。
5. closePanel:after：尝试关闭特定目录后。
6. openPanel:before：尝试打开特定目录前。
7. openPanel:start：打开特定目录前。
8. openPanel:finish：打开特定目录后。
9. openPanel:after：尝试打开特定目录后。
10. setSelected:before：选中某目录前。
11. setSelected:after：选中某目录后。