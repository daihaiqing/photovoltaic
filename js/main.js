requirejs.config({
    /*baseUrl:"js",*/
    paths: {
        jquery: "jquery-1.8.3.min",
        cookie:"jquery.cookie"
    },
    shim:{
        'cookie':{
            deps:['jquery']
        }
    }
});
require(['jquery','cookie'], function ($) {
    $(function () {

        var left1=$("body").width() - $(".menu").width();
        var left2=(left1 - $("#thirdMenu").width())/2;
        $(".mainContent").css({
            marginLeft: left2,
            property2: 'value2'
        });
        /*二级菜单*/
         
        var ind=$.cookie('aaa');
        if(isNaN(ind)){ind=0}else{ind=ind}/*cookie判断刷新前index*/
       /**/
        var inde=parseInt(ind);
        /*if (ind == null) {inde=0;}else{inde=parseInt(ind)};*/
	        //alert(inde+9);
    	$(".menuSec>li").not(".menuSec>li:eq("+inde+")").children("ul").slideUp("400");
        $(".menuSec>li:eq("+inde+")").children("ul").slideDown("400"); 
        $(".menuSec>li").not(".menuSec>li:eq("+inde+")").removeClass("level1click");
        $(".menuSec>li:eq("+inde+")").addClass("level1click");        

        $(".menuSec>li").die().live('click',function () {
            $(".menuSec>li").not(this).children("ul").slideUp("400");
            $(this).children("ul").slideDown("400"); 
            $(".menuSec>li").not(this).removeClass("level1click");
            $(this).addClass("level1click");
            $.cookie('aaa',$(this).index());

        });
        /*一级菜单*/
        var aa = new Array("overView.html", "analysis.html", "dataCom.html", "Intelligent.html", "fault.html", "qualityFile.html", "intimeData.html", "backManage.html");
        var num=0;
        var first=$.cookie('bbb');/*cookie判断刷新前index*/
        if(isNaN(first)){first=1}else{first=first}
        var firstNum=parseInt(first)-1;

        $(".unselected").not(".unselected:eq("+firstNum+")").removeClass("firstMenu");
        $(".unselected:eq("+firstNum+")").addClass("firstMenu");
        $("#menuFrame").attr("src", aa[firstNum]);/*每次都靠后一个*/

        $(".unselected").die().live('click',function () {

            num = $(this).index();
            $("#menuFrame").attr("src", aa[num - 1]);
            $(".unselected").not(this).removeClass("firstMenu");
            $(this).addClass("firstMenu");
            $.cookie('bbb',$(this).index());
        });

        /*警告框*/
        $("#firstPage").click(function() {
            /* Act on the event */
             $("#warning").slideDown(2400);
        });

        $("#close-warning").click(function(){
            $("#warning").slideUp(2400);
        })
        $("#warning li").hover(
            function(){
                $(this).css("background-color","rgb(161,189,288)")
            },function(){
                $(this).css("background-color","white")
            }
        )
    })

})

