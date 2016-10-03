$(function(){
  /*
  *获取最内层table的属性
  */
  var iframe1=$('#menuFrame', parent.document);/*获取父级界面中的iframe*/
  alert(iframe1.html());
  var test = $(iframe1).contents().find("#thirdMenu");
  alert(test.html()) 
  //alert($(iframe1).html());
  //$(iframe1).contents().find("someID").html() 
 // alert($(iframe1).children('#thirdMenu').contents().find("myTable").html())
  // var iframe2=$($(iframe1).prop('contentWindow').document).find("#thirdMenu");
  // alert($($(iframe2).prop('contentWindow').document).find(".myTable").html());
  //myiframe.window.document.getElementById("button").value="我变了";
  // var iframe1=$('#menuFrame', parent.document);
  // alert(iframe3)

  /*
  *表格
  */
	$.jqplot.config.enablePlugins = true;var ab;
	var ajaxDataRenderer = function(url, plot, options) {
		var ret = null;
		$.ajax({
			async: false,
			url: url,
			dataType:"json",
			success: function(data) {
				/*alert(data[0][0]);*/
				ab=data[0][0]
				/*alert(ab[0])*/
				ret = data;
			},
			error:function(data) {
				/* Act on the event */
				alert("没有数据")
			},
		});
		return ret;
	};

	  	// The url for our json data
	  	var jsonurl = "example.json";
	  	var plot2 = $.jqplot('chart1', jsonurl,{
	  		title: "12456",
	  		dataRenderer: ajaxDataRenderer,
	  		dataRendererOptions: {
	      	// 传递url参数到dataRenderer中
	      	unusedOptionalUrl: jsonurl
	      },
	      axes:{
	      	xaxis:{
	      		label:'Angle (radians)',
	      		min: ab,
	      		tickRenderer: $.jqplot.CanvasAxisTickRenderer,
	      		renderer:$.jqplot.DateAxisRenderer,/*引入日期*/
	      		tickOptions: {
	      			formatString:'%b %#d, %Y',
	      			/*tickInterval:'1',*/
	      			showLabel: true, /*显示刻度*/
	      			angle:-40,
	      			showGridline: false,/*显示网格*/
	      		},

	      	},
	      	yaxis:{
	      		label:'Cosine',
	      		labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
	      		/*renderer:$.jqplot.DateAxisRenderer,*//*引入日期*/
	      		tickOptions: {
	      			/*formatString:'%b %#d, %Y',*/
	      			showLabel: true, /*显示刻度*/
	      			angle:40,
	      			showGridline: false,/*显示网格*/
	      		},
	      	}
	      },
	      series: [
	      {
	      	/*color: 'red',*/
	      	negativeColor: 'rgba(100,50,50,.6)',
	      	showMarker: true,
	      	showLine: true,
	      	fill: false,
	      	fillAndStroke: true,
	      	markerOptions: {
	      		style: 'filledCircle',
	      		size: 8
	      	},
	      	rendererOptions: {
	      		smooth: true
	      	}
	      },
	      /*[{label: 'Traps Division'},{label: 'Decoy Division'},{label: 'Harmony Division'}], */ 
               /* {label:'访问量'},  
               {label:'访问人数'},  */
               {renderer:$.jqplot.CanvasAxisTickRenderer}  
               ],
               legend: { /**显示分类名*/
               	/*label:'123',*/
               	show: true,  
               	placement: 'insideGrid',  
               	location: 'ne'  
               },
               cursor: {
          		// 是否显示光标，若为true，光标默认为十字
          		style: 'pointer',
          		show:true,
          		/*tooltipLocation:'sw',*/ 
          		tooltipOffset:10,
          		zoom:true/*允许放大*/
          	},
          	highlighter: {
          		/*lineWidthAdjust:2.5,*/
      	 		/*sizeAdjust: 10,
      	 		tooltipLocation: 'n',
      	 		tooltipAxes: 'y',
      	 		tooltipFormatString: '<b><i><span style="color:red;">hello</span></i></b> %.2f',
      	 		useAxesFormatters: true*/
      	 	},
      	 	seriesDefaults: {
      	 		trendline: {
      	 			show: false
      	 		},
      	 		label:"123",/*图例名称*/
      	 	},
      	 	axesDefaults:{
       			/*show: true,*/    //是否自动显示坐标轴。
                /*min: 0,*/      //横(纵)轴最小刻度值
                max: null,      // 横(纵)轴最大刻度值
                /*pad: 1.2,
                */
                tickOptions:{
                	mark:'inside',
                	markSize:10,
                	/*formatString:'%b %#d, %Y'*/
                }
            }
        });
});
/* 每分更新*/
$(function(){
	function mychart(){
		$.jqplot.config.enablePlugins = true;var ab;
		function ajaxDataRenderer(url, plot, options) {
			/*alert("123")*/
			var ret = null;
			$.ajax({
				async: false,
				url: url,
				dataType:"json",
				success: function(data) {
					/*alert(data[0][0]);*/
					ab=data[0][0]
					/*alert(ab[0])*/
					ret = data;
				},
				error:function(data) {
					/* Act on the event */
					alert("shujufashengzuowu")
				},
			});

			/*setInterval("ajaxDataRenderer()",1000);*/return ret;
		};

	  	// The url for our json data
	  	var jsonurl1 = "ages.json";
	  	var plot2 = $.jqplot('chart2', jsonurl1,{
	  		title: "12456",
	  		dataRenderer: ajaxDataRenderer,
	  		dataRendererOptions: {
	      	// 传递url参数到dataRenderer中
	      	unusedOptionalUrl: jsonurl1
	      },
	      axes:{
	      	xaxis:{
	      		label:'Angle (radians)',
	      		min: ab,
	      		tickRenderer: $.jqplot.CanvasAxisTickRenderer,
	      		renderer:$.jqplot.DateAxisRenderer,/*引入日期*/
	      		tickOptions: {
                    //formatString:'%H:%M',
                    /*tickInterval:'1',*/
                    showLabel: true, /*显示刻度*/
                    angle:-40,
                    showGridline: false,/*显示网格*/
                },

            },
            yaxis:{
            	label:'Cosine',
            	labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
            	/*renderer:$.jqplot.DateAxisRenderer,*//*引入日期*/
            	tickOptions: {
            		/*formatString:'%b %#d, %Y',*/
            		showLabel: true, /*显示刻度*/
            		angle:40,
            		showGridline: false,/*显示网格*/
            	},
            }
        },
        series: [
        {
        	/*color: 'rgba(198,88,88,.6)',*/
        	negativeColor: 'rgba(100,50,50,.6)',
        	showMarker: true,
        	showLine: true,
        	fill: false,
        	fillAndStroke: true,
        	markerOptions: {
        		style: 'filledCircle',
        		size: 8
        	},
        	rendererOptions: {
        		smooth: true
        	}
        },
        /*[{label: 'Traps Division'},{label: 'Decoy Division'},{label: 'Harmony Division'}], */ 
               /* {label:'访问量'},  
               {label:'访问人数'},  */
               {renderer:$.jqplot.CanvasAxisTickRenderer}  
               ],
               legend: { /**显示分类名*/
               	/*label:'123',*/
               	show: true,  
               	placement: 'insideGrid',  
               	location: 'ne'  
               },
               cursor: {
          		// 是否显示光标，若为true，光标默认为十字
          		style: 'pointer',
          		show:true,
          		/*tooltipLocation:'sw',*/ 
          		tooltipOffset:10,
          		zoom:true/*允许放大*/
          	},
          	highlighter: {
          		/*lineWidthAdjust:2.5,*/
      	 		/*sizeAdjust: 10,
      	 		tooltipLocation: 'n',
      	 		tooltipAxes: 'y',
      	 		tooltipFormatString: '<b><i><span style="color:red;">hello</span></i></b> %.2f',
      	 		useAxesFormatters: true*/
      	 	},
      	 	seriesDefaults: {
      	 		trendline: {
      	 			show: false
      	 		},
      	 		label:"123",/*图例名称*/
      	 	},
      	 	axesDefaults:{
       			/*show: true,*/    //是否自动显示坐标轴。
                /*min: 0,*/      //横(纵)轴最小刻度值
                max: null,      // 横(纵)轴最大刻度值
                /*pad: 1.2,
                */
                tickOptions:{
                	mark:'inside',
                	markSize:10,
                	/*formatString:'%b %#d, %Y'*/
                }
            }

        });
        //setTimeout(mychart(),6000);
    }
    mychart();
    /*setInterval('ajaxDataRenderer()', 1000); */
});
