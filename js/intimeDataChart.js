requirejs.config({
    /*baseUrl:"js",*/
    paths: {
        jquery: "jquery-1.8.3.min",
    }
});
require(['jquery'], function ($) {
  /*获取左侧菜单栏*/
    $(function(){
      var str=$.ajax({
      url: 'menu.txt',
      type: 'GET',
      dataType: 'html',
      async:false
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    }).responseText;
    $('.left').append(str);

        var left1=$("body").width() - $(".left").width();
        var left2=(left1 - $(".right").width())/3;
        $(".right").css({
            marginLeft: left2,
            property2: 'value2'
        });

        /*测点节点菜单*/
        $('.left li').die().live('click',function(e){
          e.stopPropagation();/*组织li事件的冒泡触发*/
          var classnam=$(this).children('p').attr('class');
          switch(classnam){
            case 'mymenu1':
             $(this).children('ul').slideDown("400");
             $(this).children('p').css({
             	border: '2px solid rgb(1,57,96)',
             	borderLeft: '8px solid rgb(1,57,96)'
             });;
             $(".mymenu1").parent("li").not(this).children('ul').slideUp(400);
             $(".mymenu1").parent("li").not(this).children('p').css({
             	border: '0',
             	borderBottom: '1px solid rgb(168,167,167)'
             });
             break;
            case 'mymenu2':
            $(this).children('ul').slideDown(400);
            $(this).children('p').children('img').attr('src', './images/down.png');
            $(".mymenu2").parent("li").not(this).children('ul').slideUp(400);
            $(".mymenu2").parent("li").not(this).children('p').children('img').attr('src', './images/top.png');
            break;
            case 'mymenu3':
            $(this).children('ul').slideDown(400);
            $(this).children('p').addClass('gradully');
            $(this).children('p').children('input').addClass('gradully');
            $(".mymenu3").parent("li").not(this).children('ul').slideUp(400);
            $(".mymenu3").parent("li").not(this).children('p').removeClass('gradully');
            $(".mymenu3").parent("li").not(this).children('p').children('input').removeClass('gradully')
            break;
            case 'mymenu4':$(this).children('ul').slideDown(400);$(".mymenu4").parent("li").not(this).children('ul').slideUp(400);break;
            case 'mymenu5':$(this).children('ul').slideDown(400);$(".mymenu5").parent("li").not(this).children('ul').slideUp(400);break;
            case 'mymenu6':$(this).children('ul').slideDown(400);$(".mymenu6").parent("li").not(this).children('ul').slideUp(400);break;
            default:break;
          }
          
          return true;
        })
        var num=0; var  addMenu; var  classname;
        /*alert($(".mymenu2").length);*/
        $('li').die().live('contextmenu', function(e){ /*live或on可绑定动态生成的节点,die()解除click重复绑定*/
              addMenu=$(this);
              classname=$(addMenu).children('p').attr('class');/*获取本级class*/
            // if (num%2 == 0) {  
                var left = e.pageX, 
                 top = e.pageY;
                 if ( e && e.preventDefault ){ 
                       e.preventDefault(); 
                   } else {
                      window.event.returnValue = false;
                  };
                  $(".choose").css({
                    display: 'block',
                    position: 'absolute',
                    left:left,
                    top:top,
                    zIndex:99999
                 }); 
           // }else{
           //      $(".choose").css({
           //          display: 'none',
           //          position: 'absolute',
           //          left:left,
           //          top:top,
           //          zIndex:99999
           //       });
           //   }
           //   num++;
           /*alert(left +"+"+ top);*/
           return false;
        });
         /*左键choose消失*/
        $("*").live("click",function(){
          //alert("123")
                $(".choose").css({
                    display: 'none',
                    position: 'absolute',
                    zIndex:0
                 });
        })
        $("*",parent.document).live("click",function(){   
          //alert("123")
                $(".choose").css({
                    display: 'none',
                    position: 'absolute',
                    zIndex:0
                 });
        })
        $("*",parent.parent.document).live("click",function(){
          //alert("123")
           $(".choose").css({
              display: 'none',
              position: 'absolute',
              zIndex:0
           });
        })
        /*添加测点*/
        $('#addtest').die().live('click',function(){
          var html ='<form class="add-equipment">'+
          '<div class="equipment-header">&nbsp;添加测点<img src="images/add-test-close.png" style="vertical-align: middle;margin-left:90px;" class="add-test-close"></div>'+
          '<table>'+
          '<tr>'+
          '<td><p style="width:48px;border:0;">设备:</p></td>'+
          '<td>'+
          '<select style="height:30px;width:130px;" class="get-equp">'+
          '<option>1254 </option>'+
          '<option>8575 </option>'+
          '<option>75757 </option>'+
          '<option>757575 </option>'+
          '<option>1754 </option>'+
          '</select>'+
          '</td>'+
          '</tr>'+
          '<tr>'+
          '<td style="vertical-align: top;"><p style="width:48px;margin-top:5px;">没分:</p></td>'+
          '<td>'+
          '<select size="4" style="width:130px;height:100px;pardding:0;border:0" class="get-test">'+
          '<option>1254 </option>'+
          '<option>8575 </option>'+
          '<option>75757 </option>'+
          '<option>757575 </option>'+
          '<option>1754 </option>'+
          '</select>'+
          '</td>'+
          '</tr>'+
          '<tr>'+
          '<td colspan="2"><input type="button" id="submit-add-test" value="提交" /></td>'+
          '</tr>'+
          '</table>'+
          '</form></div>';
          $('body').append(html); 
          var left = ($('body').width() - $('.add-equipment').width())  /2,
          top = ($('body').height() - $('.add-equipment').height())  /2;
          $('.add-equipment').css({left:left,top:top,zIndex:999,position:"absolute"});
          $(".add-test-close").die().live('click',function(event) {
            /* Act on the event */
            $(".add-equipment").css({
              display: 'none',
              property2: 'value2'
            });
          });
          $(".choose").css({
            display: 'none',
            position: 'absolute',
          });
        });
        /*添加测点*/
        $("#submit-add-test").die().live('click',function(){
          var chilMenu=$(addMenu).children('ul').length;
          var split=$(".get-equp option:selected").text().split(" ");
          var value;
          if(split.length>2){
          	value=split[split.length-2];
          }else{
          	value=split[0];
          }
          switch(classname){
            case 'mymenu1':
              if (chilMenu==0) {
                $(addMenu).append('<ul></ul>')
                $("<li><p class='mytest2'><input type='text' style='background-color:white;border:1px solid grey;'value='"+value+"'/></p></li>").appendTo($(addMenu).children('ul'));
                $("<li><p class='mytest2'><input type='text' style='background-color:white;border:1px solid grey;'value='"+$(".get-test option:selected").text()+"'/></p></li>").appendTo($(addMenu).children('ul'));
              }else{
                $("<li><p class='mytest2'><input type='text' style='background-color:white;border:1px solid grey;'value='"+value+"'/></p></li>").appendTo($(addMenu).children('ul'));
                $("<li><p class='mytest2'><input type='text' style='background-color:white;border:1px solid grey;'value='"+$(".get-test option:selected").text()+"'/></p></li>").appendTo($(addMenu).children('ul'));
              };
              break;
            case 'mymenu2':
              if (chilMenu==0) {
                $(addMenu).append('<ul></ul>')
                $("<li><p class='mytest3'><input type='text' style='background-color:white;border:1px solid grey;'value='"+value+"'/></p></li>").appendTo($(addMenu).children('ul'));
                $("<li><p class='mytest3'><input type='text' style='background-color:white;border:1px solid grey;'value='"+$(".get-test option:selected").text()+"'/></p></li>").appendTo($(addMenu).children('ul'));
              }else{
                $("<li><p class='mytest3'><input type='text' style='background-color:white;border:1px solid grey;'value='"+value+"'/></p></li>").appendTo($(addMenu).children('ul'));
                $("<li><p class='mytest3'><input type='text' style='background-color:white;border:1px solid grey;'value='"+$(".get-test option:selected").text()+"'/></p></li>").appendTo($(addMenu).children('ul'));
              };
              break;
            case 'mymenu3':
              if (chilMenu==0) {
                $(addMenu).append('<ul></ul>')
                $("<li><p class='mytest4'><input type='text' style='background-color:white;border:1px solid grey;'value='"+value+"'/></p></li>").appendTo($(addMenu).children('ul'));
                $("<li><p class='mytest4'><input type='text' style='background-color:white;border:1px solid grey;'value='"+$(".get-test option:selected").text()+"'/></p></li>").appendTo($(addMenu).children('ul'));
              }else{
                $("<li><p class='mytest4'><input type='text' style='background-color:white;border:1px solid grey;'value='"+value+"'/></p></li>").appendTo($(addMenu).children('ul'));
                $("<li><p class='mytest4'><input type='text' style='background-color:white;border:1px solid grey;'value='"+$(".get-test option:selected").text()+"'/></p></li>").appendTo($(addMenu).children('ul'));
              };
              break;
            case 'mymenu4':
              if (chilMenu==0) {
                $(addMenu).append('<ul></ul>')
                $("<li><p class='mytest5'><input type='text' style='background-color:white;border:1px solid grey;'value='"+value+"'/></p></li>").appendTo($(addMenu).children('ul'));
                $("<li><p class='mytest5'><input type='text' style='background-color:white;border:1px solid grey;'value='"+$(".get-test option:selected").text()+"'/></p></li>").appendTo($(addMenu).children('ul'));
                }else{
                $("<li><p class='mytest5'><input type='text' style='background-color:white;border:1px solid grey;'value='"+value+"'/></p></li>").appendTo($(addMenu).children('ul'));
                $("<li><p class='mytest5'><input type='text' style='background-color:white;border:1px solid grey;'value='"+$(".get-test option:selected").text()+"'/></p></li>").appendTo($(addMenu).children('ul'));
              };
              break;
            default:
              if (chilMenu==0) {
                $(addMenu).append('<ul></ul>')
                $("<li><p class='mytest6'><input type='text' style='background-color:white;border:1px solid grey;'value='"+value+"'/></p></li>").appendTo($(addMenu).children('ul'));
                $("<li><p class='mytest6'><input type='text' style='background-color:white;border:1px solid grey;'value='"+$(".get-test option:selected").text()+"'/></p></li>").appendTo($(addMenu).children('ul'));
              }else{
                $("<li><p class='mytest6'><input type='text' style='background-color:white;border:1px solid grey;'value='"+value+"'/></p></li>").appendTo($(addMenu).children('ul'));
                $("<li><p class='mytest6'><input type='text' style='background-color:white;border:1px solid grey;'value='"+$(".get-test option:selected").text()+"'/></p></li>").appendTo($(addMenu).children('ul'));
              };
              break;
          }
          //$("<p>"+$(".get-equp option:selected").val()+"</p>").appendTo('.mytable');
         // alert($(".get-equp option:selected").length)
         // for(var i=0;i<$(".get-equp option").length;i++){
         // 	if($(this).attr("selected")=="selected"){
         // 		var a=$(this).index();
         // 		alert(a);
         // 	}
         // }
          
          $("#myTable").append("<tr><td>"+value+"</td><td>"+$(".get-test option:selected").text()+"</td><td></td><td></td></tr>");
          $("select option").attr("selected",false);
          $(".add-equipment").css({
            display: 'none'
          });

          $(function(){
            var i;var colour=240;
   			for(i=0;i<=$("tbody tr").length ; i++){
       			var n=i%4;
       			switch (n){
           			case 0:$("tbody>tr:eq("+i+")").css({backgroundColor:"rgb(228,237,241)"});break;
           			case 1:$("tbody>tr:eq("+i+")").css({backgroundColor:"rgb(210,213,230)"});break;
           			case 2:$("tbody>tr:eq("+i+")").css({backgroundColor:"rgb(190,206,215)"});break;
           			case 3:$("tbody>tr:eq("+i+")").css({backgroundColor:"rgb(173,190,198)"});break;
       			}
    		}
    		var numb=$(".right").height();/*获取right高度*/
    		/*alert(numb)*/
	        var num=numb/40;
    		$("#myTable").tablePaging({ pageSize: num, sorting: true, sortSelector: ".js-Order", sortType: "number" });
  
 		})


          $("input").css({
              border: 0,
              backgroundColor: 'rgb(153,153,153)',
              cursor:'pointer'
          }).attr({
              readonly:"readonly",
              onfocus:"this.blur();"
          });
        })

        /*添加节点*/
        $("#addnode").die().live('click',function() {
            /* Act on the event */
           // alert($(addMenu).children('ul').length);
           var chilMenu=$(addMenu).children('ul').length;
           switch(classname){
            case 'mymenu1':
              if (chilMenu==0) {
                $(addMenu).append('<ul></ul>')
                $("<li><p class='mymenu2'><img src='images/top.png'><input type='text' style='background-color:white;border:1px solid grey;' onfocus='this.focus();'/></p></li>").appendTo($(addMenu).children('ul'));
              }else{
                $("<li><p class='mymenu2'><img src='images/top.png'><input type='text' style='background-color:white;border:1px solid grey;' onfocus='this.focus();'/></p></li>").appendTo($(addMenu).children('ul'));
              };
              break;
            case 'mymenu2':
              if (chilMenu==0) {
                $(addMenu).append('<ul></ul>')
                $("<li><p class='mymenu3'><input type='text' style='background-color:white;border:1px solid grey;' onfocus='this.focus();'/></p></li>").appendTo($(addMenu).children('ul'));
              }else{
                $("<li><p class='mymenu3'><input type='text' style='background-color:white;border:1px solid grey;' onfocus='this.focus();'/></p></li>").appendTo($(addMenu).children('ul'));
              };
              break;
            case 'mymenu3':
               if (chilMenu==0) {
                $(addMenu).append('<ul></ul>')
                $("<li><p class='mymenu4'><input type='text' style='background-color:white;border:1px solid grey;' onfocus='this.focus();'/></p></li>").appendTo($(addMenu).children('ul'));
              }else{
                $("<li><p class='mymenu4'><input type='text' style='background-color:white;border:1px solid grey;' onfocus='this.focus();'/></p></li>").appendTo($(addMenu).children('ul'));
              };
              break;
            case 'mymenu4':
              if (chilMenu==0) {
                $(addMenu).append('<ul></ul>')
                $("<li><p class='mymenu5'><input type='text' style='background-color:white;border:1px solid grey;' onfocus='this.focus();'/></p></li>").appendTo($(addMenu).children('ul'));
              }else{
                $("<li><p class='mymenu5'><input type='text' style='background-color:white;border:1px solid grey;' onfocus='this.focus();'/></p></li>").appendTo($(addMenu).children('ul'));
              };
              break;
            default:
              if (chilMenu==0) {
                $(addMenu).append('<ul></ul>')
                $("<li><p class='mymenu6'><input type='text' style='background-color:white;border:1px solid grey;' onfocus='this.focus();'/></p></li>").appendTo($(addMenu).children('ul'));
              }else{
                $("<li><p class='mymenu6'><input type='text' style='background-color:white;border:1px solid grey;' onfocus='this.focus();'/></p></li>").appendTo($(addMenu).children('ul'));
              };
              break;
           }
           $(".choose").css({
              display: 'none',
              position: 'absolute',
           });
        });


        /*删除*/
        $("#del").click(function() {
            /* Act on the event */
            $(addMenu).css("display","none");
            $(".choose").css({
                    display: 'none',
                    position: 'absolute',
             });
        });


        /*编辑*/
        $("#edi").die().live('click',function() {
            /* Act on the event */
            $(addMenu).find("p>input").attr({
                readonly: false,
                onfocus: 'this.focus();'
            }).css({
                border: 1,
                backgroundColor: 'white',
                cursor:'auto'
            });
            //alert($(addMenu).html());
            $(".choose").css({
                    display: 'none',
                    onfocus: 'absolute',
             });
        });
        $("body").keypress(function(event) {
            /* Act on the event */
            if(event.keyCode == 13){
                $("input").css({
                    border: 0,
                    backgroundColor: 'rgb(153,153,153)',
                    cursor:'pointer'
                }).attr({
                    readonly:"readonly",
                    onfocus:"this.blur();"
                });
            }
        });
        // $("table").click(function(event) {
        //    //Act on the event 
        //   alert($(".left").html())
        //   $.ajax({

        //     url: 'demo.html',
        //     type: 'POST',
        //     dataType: 'html',
        //     data: $(".left").html(),
        //   })
        //   .done(function() {
        //     console.log("success");
        //   })
        //   .fail(function() {
        //     console.log("error");
        //   })
        //   .always(function() {
        //     console.log("complete");
        //   });
        // });
        
        /*关闭前发送左侧菜单html*/
        $(window).bind('beforeunload',function(){ 
          // alert("yi")
          $.ajax({
            url: '/path/to/file',
            type: 'POST',
            dataType: 'html',
            data: $(".left").html(),
          })
          .done(function() {
            console.log("success");
          })
          .fail(function() {
            console.log("error");
          })
          .always(function() {
            console.log("complete");
          });
           // $("div").ajaxSend(function(){
           //     stuff to do before an AJAX request is sent 
           //    alert("请求发送成功")
           //  });
        }); 
  })

})
