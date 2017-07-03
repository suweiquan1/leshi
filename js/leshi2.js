/**
 * Created by 苏伟全 on 2017/3/28.
 */

//主体main
$(function(){
    $(".smallpic .menu li").hover(

        function(){
            $(".smallpic .menu li:first").removeClass("huankuang");
            var a=$(this).children("img").attr("src");
            $(".bigpic img").attr("src",a);
            $(this).addClass("huankuang");
        },
        function(){
            $(this).removeClass("huankuang");
        }
    );

    $(".xuanxiang ul li").click(
        function(){
            $(this).addClass("hongkuang")
                .siblings("li").removeClass("hongkuang");
        }
    );
    $(".right_bottom .box .you .diqu").click(
        function(){
            $(".xuandiqu").toggle();
        }
    );
    $(".xuandiqu .inner .shang a").click(
        function(){
            $(this).addClass("box1")
                .siblings("a").removeClass("box1");
            return false;
        }
    );
    $(".main2 ul li").click(
        function(){
            $(".main2 ul li:first").children("span").removeClass("xuanfu");
            $(this).children("span").addClass("xuanfu").parent("li")
                .siblings("li").children("span").removeClass("xuanfu");

            var b=$(this).index();
            $(".btn").eq(b).stop().show().siblings(".btn").stop().hide()
        }
    );
    $(".fuwu ul li").hover(
        function(){
            $(this).children("a").css("color","#cc0001");
        },
        function(){
            $(this).children("a").css("color","#323232");
        }
    );
    $(".pj_bottom .quanbu a").click(
        function(){
            $(this).addClass("adanji").siblings("a").removeClass("adanji");

            var c=$(this).index();
            $(".pingjia1").eq(c).stop().show().siblings(".pingjia1").stop().hide();
            return false;
        }
    );
});



$(window).scroll(
    function(){
        var a=$(window).scrollTop();
        //console.log(a);

        if(a>=880){
            $(".main2").addClass("gudin");
            $(".main2 ul .jiaru").show();
        }
        if(a<=880){
            $(".main2").removeClass("gudin");
            $(".main2 ul .jiaru").hide();
        }

    }
);
//主体main