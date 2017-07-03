/**
 * Created by ËÕÎ°È« on 2017/3/24.
 */

//header
$(function(){
    $(".menu>li").hover(
        function(){
            $(this).stop().find(".submenu").slideDown(300);
            $(this).stop().find(".pic").slideDown(300);
        },
        function(){
            $(this).stop().find(".submenu").slideUp(200);
            $(this).stop().find(".pic").slideUp(200);
        }
    );
    $(".chaoji").click(
        function(){
            $(".dianshi").show();
            return false;
        }
    );
    $(".chaoji li").hover(
        function(){
            $(this).css({"background":"red","color":"white"})
                .siblings("li").css({"background":"white","color":"#656565"});
        },
        function(){
            $(this).parent(".dianshi").hide();
        }
    );
    $(".sousuo .input1").click(
        function(){
            $(this).val("")
        }
    );
});
//header
