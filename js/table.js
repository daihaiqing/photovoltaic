$(function(){
	function mytable(){
	    var i;var colour=240;
	   for(i=0;i<=$("tbody tr").length ; i++){
	       /*alert(table.rows.length());*/
	      /* $("tr:eq("+i+")").css({backgroundColor:"rgb(240,240,240)"});*/
	      /* $("tr:eq("+i+")").css({backgroundColor:"rgb("+colour+","+colour+","+colour+")"});*/
	       /*colour-=15;*/
	       /* alert($("tbody tr").length);*/
	       var n=i%4;
	       switch (n){
	           case 0:$("tbody>tr:eq("+i+")").css({backgroundColor:"rgb(228,237,241)"});break;
	           case 1:$("tbody>tr:eq("+i+")").css({backgroundColor:"rgb(210,213,230)"});break;
	           case 2:$("tbody>tr:eq("+i+")").css({backgroundColor:"rgb(190,206,215)"});break;
	           case 3:$("tbody>tr:eq("+i+")").css({backgroundColor:"rgb(173,190,198)"});break;
	       }
	    }
	    var numb=$(".right").height();/*获取right高度*/
	    /*alert(numb)
	*/    var num=numb/40;
	     $("#myTable").tablePaging({ pageSize: num, sorting: true, sortSelector: ".js-Order", sortType: "number" });
	        /*排序*/
	       /* $(".js-OrderByName").click(function () {
	            $("#myTable").tablePaging({ pageSize: 10, sorting: true, sortSelector: ".js-Name", sortType: "string" });
	        });
	        $(".js-OrderByCode").click(function () {
	            $("#myTable").tablePaging({ pageSize: 10, sorting: true, sortSelector: ".js-Code", sortType: "string" });
	        });
	        $(".js-OrderByOrder").click(function () {
	            $("#myTable").tablePaging({ pageSize: 10, sorting: true, sortSelector: ".js-Order", sortType: "number" });
	        });
	        $(".js-OrderByCreated").click(function () {
	            $("#myTable").tablePaging({ pageSize: 10, sorting: true, sortSelector: ".js-Created", sortType: "date" });
	        });*/
	 }
  mytable();
  $(".myTable tbody tr").live("click",function(){
   //alert( $('.mychartstyle', top.window.document).html())
   //alert($(this).attr("class")+".json")
  	$('.mychartstyle', top.window.document).css({/*获取顶级body中的元素*/
  		position: 'absolute',
  		top:0,
  		overflow:"auto",
  		zIndex:999,
  		width:"100%",
  		height:"100%",
  		margin:"auto"
  	});
  })

 })
