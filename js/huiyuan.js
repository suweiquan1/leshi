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
});
//������banner

//����main
$(function(){
    $(".main .main1 ul li").hover(
        function(){
            $(this).children("a").css("color","red");
        },
        function(){
            $(this).children("a").css("color","#999999");
        }
    );
    $(".main .main3 .bottom ul li").hover(
        function(){
            $(this).addClass("xuanfu");
        },
        function(){
            $(this).removeClass("xuanfu");
        }
    );
});
//����main