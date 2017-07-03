/**
 * Created by ???? on 2017/3/22.
 */


//banner
$(function(){
    $(".lunbotunav li").click(
        function(){
            var p=$(this).index();
            o=p;
            $(".lunbotu ul").stop().animate({"margin-left":p*-730});
            $(this).addClass("huandian").siblings("li").removeClass("huandian");
        }
    );
    var o=0;
    $(".you").click(
        function(){

            o++;
            if(o==4){
                o=0
            }

            $(".lunbotu ul").stop().animate({"margin-left":o*-730});
            $(".lunbotunav li").eq(o).addClass("huandian").siblings("li").removeClass("huandian");
        }
    );
    $(".zuo").click(
        function(){
            if(o==0){
                o=4
            }
            o--;
            $(".lunbotu ul").stop().animate({"margin-left":o*-730});
            $(".lunbotunav li").eq(o).addClass("huandian").siblings("li").removeClass("huandian");
        }
    );
});
//banner

//main
$(function(){
    $(".main1 .pic .shouji").hover(
        function(){
            $(this).children(".right").stop().animate({"padding-left":"10px"},200);
        },
        function(){
            $(this).children(".right").stop().animate({"padding-left":"15px"},200);
        }
    );
    $(".main3 .cool").hover(
        function(){
            $(this).children("h2").css("color","red");
        },
        function(){
            $(this).children("h2").css("color","#2d2d2d");
        }
    );
    $(".js_zuo ul li").click(
        function(){
            var f=$(this).index();
            $(".js_you .lunbo").stop().animate({"margin-top":f*-500});
            $(this).children("a").addClass("jiakuang")
                .parent("li").siblings("li").children("a").removeClass("jiakuang");
            return false;
        }
    );
});
//main