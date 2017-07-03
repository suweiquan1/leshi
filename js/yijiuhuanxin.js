/**
 * Created by 苏伟全 on 2017/3/27.
 */

//横幅广告banner
$(function(){
    $(".banner .box").kxbdSuperMarquee({
        distance:1200,
        time:3,
        direction: 'left',
        navId:'.boxnav',
        btnGo:{left:'.zuo',right:'.you'}
    });
    $(".banner").hover(
        function(){
            $(".zuo,.you").show();
        },
        function(){
            $(".zuo,.you").hide();
        }
    );
    $(".banner1_bottom div a").hover(
        function(){
            $(this).css("background-color","darkred");
        },
        function(){
            $(this).css("background-color","#ef1e00");
        }
    )
});
//横幅广告banner

//主体main
$(function(){
    $(".main_top_inner .main2 .wupin").hover(
        function(){
            $(this).addClass("texiao");
        },
        function(){
            $(this).removeClass("texiao");
        }
    )
});
//主体main