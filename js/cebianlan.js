/**
 * Created by ��ΰȫ on 2017/3/26.
 */

//�����
$(function(){
    $(".cebianlan a").hover(
        function(){
            $(this).addClass("xuanfu");
            $(this).parent("div").siblings(".txt").show();
            return false;
        },
        function(){
            $(this).removeClass("xuanfu");
            $(this).parent("div").siblings(".txt").hide(400);
            return false;
        }
    );
});

//�����