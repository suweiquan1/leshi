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
});
//横幅广告banner

//主体main
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
//主体main