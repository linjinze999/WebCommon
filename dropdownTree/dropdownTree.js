(function($){
	var DropdownTree = function(obj,options){
		this.obj = obj;
		this.options = $.extend(true,{}, $.fn.dropdownTree.defaults, options);
		//记录插入的html各标签id
		var _name = obj.attr('name') || options.name || (Math.random()+"").split(".")[1];
		this.dropdownTreeName = "ddt_dropdownTree_"+_name;
		this.menuContentName = "ddt_menuContent_"+_name;
		this.treeDemoName = "ddt_treeDemo_"+_name;
		this.filedSearchName = "ddt_filedSearch_"+_name;
		this.menuParentName = "ddt_menuParent_"+_name;
		this.replaceChoiceName = "ddt_replaceChoice_"+_name;
		this.replaceInputName = "ddt_replaceInput_"+_name;
		this.checkAllName = "ddt_checkAll_"+_name;
		this.placeholderName = "ddt_placeholder_"+_name;
		this.tipName = "ddt_tip_"+_name;
		this.objValue="";
	};
	
	DropdownTree.prototype = {
		constructor:DropdownTree,
		/*----------初始化----------*/
		init:function(){
			//插入html
			this.addTreeHtml();
			//添加回调，选中后赋值
			var that = this;
			var _obj = this.obj;
			var _options = this.options;
			var _setting = _options.zTree;
			var _getValue = this.getValue;
			var _old2 = function(){};
			
            if(_options.checkType=="none"){//none 选择框
				//父节点是否可选
				if(!_options.checkSet["none"].parentCheck){
					var _old = function(){return true;};
					if(_setting.callback.beforeClick != null){
						_old = _setting.callback.beforeClick;
					}
					_setting.callback["beforeClick"] = function(treeId, treeNode){
						var check = (treeNode && !treeNode.isParent);
						return _old(treeId, treeNode) && check;
					}
				}
				//选中后赋值
				if(_setting.callback.onClick != null){
					_old2 = _setting.callback.onClick;
				}
				_setting.callback["onClick"] = function(e, treeId, treeNode){
					_old2(e, treeId, treeNode);
					_getValue(that,0);
				}
			}else if(_options.checkType=="radio"){//radio 选择框
				_setting.check = {enable:true,chkStyle: "radio",radioType: _options.checkSet["radio"].radioType};
				//父节点是否可选
				if(!_options.checkSet["radio"].parentCheck){
					var _znodes = _options.data;
					var _pIdKey = _setting.data.simpleData.pIdKey;
					var _idKey = _setting.data.simpleData.idKey;
					for(var i=0;i<_znodes.length;i++){
						for(var j=0;j<_znodes.length;j++){
							if(_znodes[i][_idKey]==_znodes[j][_pIdKey]){
								_options.data[i]["nocheck"] = true;
								break;
							}
						}
					}
				}
				//选中后赋值
				if(_setting.callback.onCheck != null){
					_old2 = _setting.callback.onCheck;
				}
				_setting.callback["onCheck"] = function(e, treeId, treeNode){
					_old2(e, treeId, treeNode);
					_getValue(that,1);
				}
			}else if(_options.checkType=="checkbox"){//checkbox 选择框
				_setting.check = {enable:true,chkStyle: "checkbox",};
				//父节点是否关联子结点
				if(!_options.checkSet["checkbox"].relateChildren){
					_setting.check.chkboxType = {"Y":"", "N":""};
				}
				//父节点是否可选
				if(!_options.checkSet["checkbox"].parentCheck){
					var _znodes = _options.data;
					var _pIdKey = _setting.data.simpleData.pIdKey;
					var _idKey = _setting.data.simpleData.idKey;
					for(var i=0;i<_znodes.length;i++){
						for(var j=0;j<_znodes.length;j++){
							if(_znodes[i][_idKey]==_znodes[j][_pIdKey]){
								_options.data[i]["nocheck"] = true;
								break;
							}
						}
					}
				}
				//限制最大选择数量
				if(!!_options.checkSet["checkbox"].maxCheck){
					var _old = function(){return true;};
					if(_setting.callback.beforeClick != null){
						_old = _setting.callback.beforeClick;
					}
					var _maxCheck = this.maxCheck;
					_setting.callback["beforeCheck"] = function(treeId, treeNode){
						return _old(treeId, treeNode) && _maxCheck(that,treeId, treeNode);
					}
				}
				//选中后赋值
				if(_setting.callback.onCheck != null){
					_old2 = _setting.callback.onCheck;
				}
				_setting.callback["onCheck"] = function(e, treeId, treeNode){
					_old2(e, treeId, treeNode);
					_getValue(that,2);
				}
			}
			//初始化树
			$.fn.zTree.init($("#"+this.treeDemoName), _setting, _options.data);
		},
		/*----------插入html----------*/
		addTreeHtml:function(){
			var _obj = this.obj;
			var _options = this.options;
			_obj.attr("dropdownTree",this.dropdownTreeName);
			_obj.bind("change",this.setValue);
			//width
			var _width = "";
			if(_options.width=="auto"){
				_width = _obj.css("width");
			}else if(_options.width=="default"){
				_width = "250px";
			}else{
				_width = _options.width;
			}
			//height
			var _inputHeight = "";
			if(_options.height=="auto"){
				_inputHeight = _obj.css("height");
			}else if(_options.height=="default"){
				_inputHeight = "25px";
			}else{
				_inputHeight = _options.height;
			}
			//设置原输入框样式
			_obj.css({"visibility":"hidden","width":_width,"height":_inputHeight});
			//filedSearch
			var _filedSearch = "";
			if(_options.filedSearch.show){
				_filedSearch = '<input type="text" id="' + this.filedSearchName + '" value="" placeholder="'+_options.filedSearch.placeholder+'" class="ddt-search" style="width:' + (_width.split("p")[0]-34) + 'px"/>';
			}
			//checkbox checkAll
			var _checkAll = "";
			if(_options.checkType=="checkbox"){
				if(_options.checkSet["checkbox"].showCheckAll){
					_checkAll='<p class="ddt-checkall"><input type="checkbox" id="'+this.checkAllName+'"/>'+_options.checkSet["checkbox"].checkAllHtml+'</p>';
				}
			}
			//text-overflow
			var _textOverflow;
			if(_options.valueShow.type=="hidden"){
				_textOverflow = "text-overflow:clip;";
			}else{
				_textOverflow = "text-overflow:ellipsis;";
			}
			//dropdownTreeHtml(height、css)
			var _dropdownTreeHtml = '<div id="'+this.menuParentName+'" class="ddt-parent"><div id="'+this.replaceChoiceName+'" class="ddt-choice" style="width:'+_width+';height:'+_inputHeight+';line-height:'+_inputHeight+';">'+
			        '<div id="'+this.replaceInputName+'" class="ddt-show-value" style="'+_textOverflow+'width:'+(_width.split("p")[0]-26)+'px;">'+_options.placeholder+'</div><span></span></div>'+
					'<div id="' + this.menuContentName + '" class="menuContent ddt-drop" >' + _filedSearch + _checkAll +
			        '<ul id="' + this.treeDemoName + '" class="ztree ddt-tree" style="width:' + (_width.split("p")[0]-20) + 'px; height: ' + _options.menuHeight + ';"></ul>'+
					'<div class="ddt-tip" id="'+this.tipName+'"></div></div></div>';
			$(_dropdownTreeHtml).appendTo(_obj.parent());
			var _offset = _obj.position();
			$("#"+this.menuParentName).css({left:_offset.left + "px", top:_offset.top + "px"});
			//显示下拉框事件绑定
			$("#"+this.replaceChoiceName).bind("click",this.showMenu);
			//查询事件绑定
			if(_options.filedSearch.show){
				$("#"+this.filedSearchName).bind("input",this.search);
			}
			//“全选”事件绑定
			if(_options.checkType=="checkbox" && _options.checkSet["checkbox"].showCheckAll){
				$("#"+this.checkAllName).bind("click",this.checkAll);
			}
		},
		/*----------得到选中值----------*/
		getValue:function(that,type){
			var _idKey = that.options.zTree.data.simpleData.idKey;
			var _zTree = $.fn.zTree.getZTreeObj(that.treeDemoName);
			//得到初始选中值
			var nodes;
			if(type==0){
				nodes = _zTree.getSelectedNodes();
			}else{
				nodes = _zTree.getCheckedNodes(true);
			}
			var ids="",vs = "";
			nodes.sort(function compare(a,b){return a[_idKey]-b[_idKey];});
			//父节点是否可选
			var _parentValue = true;
			if(that.options.checkType == "checkbox" && !that.options.checkSet.checkbox.parentValue){
				_parentValue = false;
			}
			//得到最终选中值
			for (var i=0; i<nodes.length; i++) {
				if(nodes[i].isParent){
					if(!_parentValue ){
						continue;
					}
				}
				vs += nodes[i].name + ",";
				ids += nodes[i][_idKey] + ",";
			}
			if (vs.length > 0 ){
				ids = ids.substring(0, ids.length-1);
				vs = vs.substring(0, vs.length-1);
			} 
			//原始输入框赋值
			that.objValue = ids;
			that.obj.attr("value", ids).trigger("blur");
			//覆盖显示框赋值
			if(!vs){
				//无值，填充placeholder
				$("#"+that.replaceInputName).css("color","#888");
				vs = that.options.placeholder;
			}else{
				$("#"+that.replaceInputName).css("color","#000");
				//多选时 “#/% 被选中” 文本展示
				if(type==2 && that.options.valueShow.type=="string"){
					if(!that.options.valueShow.stringShow.max || vs.split(",").length > that.options.valueShow.stringShow.max){
						var _allNodes = _zTree.transformToArray(_zTree.getNodes());
						var _alllength = _allNodes.length;
						//父节点是否可选
						if(!_parentValue){
							for (var i=0; i<_allNodes.length; i++){
								if(_allNodes[i].isParent){
									_alllength--;
								}
							}
						}
						vs = that.options.valueShow.stringShow.text.replace("%",_alllength).replace("#",vs.split(",").length);
					}
				}
			}
			$("#"+that.replaceInputName).text(vs);
		},
		/*----------手动设置值----------*/
		setValue:function(){
			var values = $(this).val();
			var that = $(this).data("dropdownTree");
			var _idKey = that.options.zTree.data.simpleData.idKey;
			//新旧值不一样时触发
			if(that.objValue != values){
				//得到新值
				var ids={};
				var _ids = values.split(",");
				for(var i in _ids){
					ids[_ids[i]]=true;
				}
				//得到展示的结点
				var zTree = $.fn.zTree.getZTreeObj(that.treeDemoName);
				var allNodes = zTree.transformToArray(zTree.getNodes());
				var showNodes=[];
				for(var idx in allNodes){
					if(ids[allNodes[idx][_idKey]]){
						showNodes.push(allNodes[idx]);
					}
				}
				if(that.options.checkType=="none"){//none 选择框
					if(showNodes.length>0){
					    zTree.selectNode(showNodes[0]);	
						$("#"+that.replaceInputName).css("color","#000");
						$("#"+that.replaceInputName).text(showNodes[0].name);
					}else{
						$("#"+that.replaceInputName).css("color","#888");
						$("#"+that.replaceInputName).text(that.options.placeholder);
					}
				}else{//radio checkbox 选择框
					//最大选择数量限制
					var _maxNum = that.options.checkSet["checkbox"].maxCheck;
					if(that.options.checkType=="checkbox" && !!_maxNum && (showNodes.length>_maxNum)){
						$("#"+that.tipName).html("最多选择"+_maxNum+"个");
						return;
					}
					//正常显示
					zTree.checkAllNodes(false);
					var v=[];
					for(var i in showNodes){
						v.push(showNodes[i].name);
						zTree.checkNode(showNodes[i], true, false);
					}
					if(v.length>0){
						$("#"+that.replaceInputName).css("color","#000");
						//多选时 “#/% 被选中” 文本展示
						if(that.options.checkType=="checkbox" && that.options.valueShow.type=="string"){
							if(!that.options.valueShow.stringShow.max || v.length > that.options.valueShow.stringShow.max){
								var _alllength = allNodes.length;
								if(!that.options.checkSet.checkbox.parentValue){
									for (var i=0; i<allNodes.length; i++){
										if(allNodes[i].isParent){
											_alllength--;
										}
									}
								}
								$("#"+that.replaceInputName).text(that.options.valueShow.stringShow.text.replace("%",_alllength).replace("#",v.length));
								return;
							}
						}
						$("#"+that.replaceInputName).text(v.join(","));
					}else{
						$("#"+that.replaceInputName).css("color","#888");
						$("#"+that.replaceInputName).text(that.options.placeholder);
					}
					
				}
				that.objValue = values;
			}
		},
		/*----------查询----------*/
		search:function(){
			var that;
			$("[dropdownTree="+$(this).attr("id").replace("filedSearch","dropdownTree")+"]").each(function(){
				that = $(this).data("dropdownTree");
			});
			var _idKey = that.options.zTree.data.simpleData.idKey;
			//显示所有节点
			var zTree = $.fn.zTree.getZTreeObj(that.treeDemoName),
			    allNodes = zTree.transformToArray(zTree.getNodes());
			zTree.showNodes(allNodes);
			//隐藏不符合条件的结点
			var value = $(this).val().trim(),
			    _showChildren = that.options.filedSearch.showChildren,
			    _exit = {},
			    _hideNode=[];
			var nodeList = zTree.getNodesByParamFuzzy("name", value);
			for(var idx in nodeList){
				_exit[nodeList[idx][_idKey]]=true;
				//子结点会让父路径结点全部显示
				if(nodeList[idx].getParentNode()){
					var _temp = nodeList[idx].getPath();
					for(var i in _temp){
						if(!_exit[_temp[i][_idKey]]){
							_exit[_temp[i][_idKey]] = true;
						}
					}
				}
				//父节点会让子结点全部显示
				if(_showChildren){
					if(nodeList[idx].isParent){
						var _temp = zTree.transformToArray(nodeList[idx]);
						for(var i in _temp){
							if(!_exit[_temp[i][_idKey]]){
								_exit[_temp[i][_idKey]] = true;
							}
						}
					}
				}
			}
			for(var idx in allNodes){
				if(!_exit[allNodes[idx][_idKey]]){
					_hideNode.push(allNodes[idx]);
				}
			}
			zTree.hideNodes(_hideNode);
			//“找不到结果”提示文字
			var _tip = "";
			if(nodeList.length==0){
				_tip = that.options.filedSearch.noResult;
			}
			$("#"+that.tipName).html(_tip);
		},
		/*----------checkbox全选----------*/
		checkAll:function(){
			var that;
			$("[dropdownTree="+$(this).attr("id").replace("checkAll","dropdownTree")+"]").each(function(){
				that = $(this).data("dropdownTree");
			});
			var _oldValue = that.objValue;
			var treeObj = $.fn.zTree.getZTreeObj($(this).attr("id").replace("checkAll","treeDemo"));
			treeObj.checkAllNodes(this.checked);
			that.getValue(that,2);
			var _maxNum = that.options.checkSet["checkbox"].maxCheck;
			if(!!_maxNum && this.checked && (that.objValue.split(",").length>_maxNum)){
				that.obj.val(_oldValue).trigger("change");
				$("#"+that.tipName).html("最多选择"+_maxNum+"个");
				this.checked = false;
			}
		},
		/*----------checkbox最大选中数量----------*/
		maxCheck:function(that, treeId, treeNode){
			if(!treeNode.checked){
				if(that.objValue.split(",").length >= that.options.checkSet["checkbox"].maxCheck){
					var _tip = "最多选择"+that.options.checkSet["checkbox"].maxCheck+"个";
					$("#"+that.tipName).html(_tip);
					return false;
				}
			}
			$("#"+that.tipName).html("");
			return true;
		},
		/*----------点击顶替的输入框打开menu----------*/
		showMenu:function(){
			var that;
			$("[dropdownTree="+$(this).attr("id").replace("replaceChoice","dropdownTree")+"]").each(function(){
				that = $(this).data("dropdownTree");
			});
			$("#"+that.menuContentName).slideDown("fast");
			$("#"+that.replaceChoiceName+" span").addClass("open");
			$("html").bind("mousedown", that.onBodyDown);
		},
		/*----------隐藏menu----------*/
		hideMenu:function(){
			$("#"+this.menuContentName).fadeOut("fast");
			$("#"+this.replaceChoiceName+" span").removeClass("open");
			$("html").unbind("mousedown", this.onBodyDown);
		},
		/*----------失去焦点后隐藏menu----------*/
		onBodyDown:function (event) {
			$("[dropdownTree]").each(function(){
				var that = $(this).data("dropdownTree");
				if (!(event.target.id == that.obj.attr("id") || event.target.id == that.menuContentName || $(event.target).parents("#"+that.menuContentName).length>0)) {
					that.hideMenu();
				}
			});
			
		},
	};
	
	
	$.fn.dropdownTree = function(options){
		var args = arguments;
	    return this.each(function(){
	        var $this = $(this),
	            data = $this.data("dropdownTree");
	        if (!data){
				$this.data('dropdownTree', (data = new DropdownTree($(this), options)));
			} 
			data.init();
	    });
	};
	//默认配置
	$.fn.dropdownTree.defaults = {
		width:"auto",					//整个下拉框树的宽度（auto:和原输入框一致；default：250px；自定义：“ px”）
		menuHeight:"300px",				//下拉框树的长度
		height:"auto",					//输入框的长度（auto:和原输入框一致；default：26px；自定义：“ px”）
		placeholder:'请选择',			//输入框提示文字
	    filedSearch:{					//【查询】
			show:true,					//是否显示
			showChildren:true,			//查找到结点时如果该结点有子结点，是否显示子结点
			placeholder:'',				//查询框提示文字
			noResult:'找不到结果',      //“找不到结果”文本
		},
		valueShow:{						//【值显示样式】
			type:"string",				//hidden ellipsis string
			stringShow:{				//string且checkbox时触发
				max:3,					//false number
				text:"#/% 被选中"		//文本
			},
		},
	    checkType:"none",				//结点前是否加入选择框（"none"：无；"radio"：单选框；"checkbox"：多选框）
		checkSet:{						//【选择框配置】
			"none":{
				parentCheck:false,		//父结点是否可选
			},
			"radio":{
				parentCheck:false,
				radioType:"all",		//单选范围（all:整棵树；level：自己组别）
			},
			"checkbox":{
				parentCheck:true,
				parentValue:false,		//是否取父节点的值
				relateChildren:true,	//选中状态是否关联子结点
				showCheckAll:true,		//显示“全选”
				checkAllHtml:"全选",	//“全选”文本，支持html
				maxCheck:false,			//最大选择数量
			}
		},
	    zTree:{							//ztree配置项，参考:http://www.treejs.cn/v3/api.php
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
		data:[]							//结点数据
	};
	
})(jQuery);