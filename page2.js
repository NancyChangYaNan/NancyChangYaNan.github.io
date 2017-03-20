$(function() {
    /*描绘心仪的颜色*/
    $('.p2_b_color').click(function(){
        $('.p2_fix_operate').hide();
        $('.p2_fix_choose').show();
    });

    /*关闭颜色选择*/
    $('.choose_bnt1').click(function(){
        $('.leaf').attr('class','leaf');
        $('.leaf').attr('src','images/yezi0.png');
    });

    /*底部颜色选择按钮*/
    $('.choose_bnt2').click(function(){
        $('.leaf').attr('class','leaf');
        $('.leaf').attr('src','images/yezi2.png');
    });
    $('.choose_bnt3').click(function(){
        $('.leaf').attr('class','leaf');
        $('.leaf').attr('src','images/yezi3.png');
    });
    $('.choose_bnt4').click(function(){
        $('.leaf').attr('class','leaf');
        $('.leaf').attr('src','images/yezi1.png');
    });
    $('.choose_bnt5').click(function(){
        $('.leaf').attr('class','leaf');
        $('.leaf').attr('src','images/yezi4.png');
    });

    /*确认颜色选择*/
    $('.choose_bnt6').click(function(){
        if($('.leaf').attr('src')== 'images/yezi0.png'){
            alert('请描绘你心仪的颜色');
        }else{
            $('.p2_fix_operate').show();
            $('.p2_fix_choose').hide();
        }
    });


    /*一键美化按钮*/
    $('.p2_b_beautify').click(function(){
        if($('.leaf').attr('src')== 'images/yezi0.png'){
            alert('请先填色后再美化枫叶哦');
        }else if($('.leaf').attr('src')== 'images/yezi1.png'){
            $('.leaf').attr('class','leaf leaf2_2');
            $('.leaf').attr('src','images/yezi1-2.png');
        }else if($('.leaf').attr('src')== 'images/yezi2.png'){
            $('.leaf').attr('class','leaf leaf2_2');
            $('.leaf').attr('src','images/yezi2-2.png');
        }else if($('.leaf').attr('src')== 'images/yezi3.png'){
            $('.leaf').attr('class','leaf leaf3_2');
            $('.leaf').attr('src','images/yezi3-2.png');
        }else if($('.leaf').attr('src')== 'images/yezi4.png'){
            $('.leaf').attr('class','leaf leaf4_2');
            $('.leaf').attr('src','images/yezi4-2.png');
        }
        $('.leaf_base').css('marginTop','2.9rem');
        $('.p2_txt2').text('保存后可获精美奖品');
        $('.p2_txt3').hide();
    });

    /*保存*/
    $('.p2_b_save').click(function(){
        if($('.leaf').attr('src')== 'images/yezi0.png'){
            alert('请先填色后再美化枫叶哦');           /*未选择颜色*/
        }else if($('.leaf').attr('class') == 'leaf') {
            alert('请先填色后再美化枫叶哦');           /*未一键美化*/
        }else{
            window.location.href = 'page3.html';
        }
    });
});
