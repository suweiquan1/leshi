/**
 * Created by ��ΰȫ on 2017/3/27.
 */

//������banner
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
//������banner

//����main
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
//����main