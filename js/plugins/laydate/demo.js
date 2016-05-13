/**
 
 layDate demo

 **/

;!function(){

var win = $(window), demo = {
    win: win,
    hosts: 'http://' + location.host + '/',
    stop: function(e){
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
    }
};

demo.post = function(){
    var downs = $('#downs');
    
    //记录下载数
    $('#laydateDowns').on('click',function(){
        $.get('http://fly.layui.com/api/handle?id=4');
    });
    
    //获取下载数
    if(downs[0]){
        $.get('http://fly.layui.com/api/handle?id=4&type=find', function(res){
            downs.html(res.number);
        }, 'jsonp');
    }
    
    //获取关注次数
    $.get('http://fly.layui.com/api/handle?id=5', function(res){
        $('#sees').html(res.number);
    }, 'jsonp');
    
};

//窗口scroll
demo.scroll = function(){
    var conf = {
        log: [0, $('.laynav')],
        gotop: $('#laygotop'),
        htbo: $('html, body'),
        fnDemo: $('#fnDemo')
    };
    demo.win.on('scroll', function(){
        var stop = demo.win.scrollTop();
        if(stop >= 300){
            if(!conf.log[0]){
                conf.log[0] = 1;
                conf.log[1].addClass('fixnav');
                conf.gotop.show();
                laydate.reset()
            }
        } else {
            if(conf.log[0]){
                conf.log[0] = 0;
                conf.log[1].removeClass('fixnav');
                conf.gotop.hide();
                laydate.reset()
            }
        }
        stop = null;
    });
    
    //返回顶部
    conf.gotop.on('click',function(){
        conf.htbo.animate({scrollTop : 0},$(this).offset().top/7);
    });
    
    //功能演示滚动
    $('#demoss').on('click',function(e){
        e.preventDefault();
        conf.htbo.animate({scrollTop : conf.fnDemo.offset().top - 50}, 300);
    });
};

//动态时间
demo.runtime = function(){
    var nowtime = $('#nowtime');
    //时间
    if(nowtime[0]){
        var set = setInterval(function(){
            nowtime.html(laydate.now(0, 'YYYY年MM月DD日 hh:mm:ss'));
        }, 1000);
    }
};

demo.run = (function(){
    var log = {
        tabskin: $('#tabskin'),
        nowtime: $('#nowtime')
    }, thiskin = 'thiskin';
    demo.post();
    demo.scroll();
    demo.runtime();
    
    laydate.skin('danlan');

    //皮肤切换
   log.tabskin.find('a').on('click', function(e){
        var othis = $(this), skin = othis.attr('skin');
        if(skin !== 'more'){
            laydate.skin(skin);
            othis.addClass(thiskin).siblings('a').removeClass(thiskin);
        }
    });
    $('#skinmore').on('click', function(e){
        demo.stop(e);
        log.tabskin.addClass('tabskins');
    });
    $('#reskin').on('click', function(){
        log.tabskin.removeClass('tabskins');
    });
    
    //皮肤下载统计
    if(window.pageType === 'skins'){
        $('.skinlib>li').each(function(){
            var othis = $(this), downid = othis.attr('downid');
            $.get('http://sentsin.com/item/filedown.asp?action=hits&id='+downid, function(datas){
                var downloads = datas.match(/\d+/)[0];
                othis.find('.skinsees').html(downloads);
            });
            othis.find('.skindowns').on('click', function(){
                $.get('http://sentsin.com/item/filedown.asp?id='+downid);
            });
            othis.find('.skindemo').on('click', function(){
                var skin = $(this).attr('skin');
                laydate.skin(skin);
            });
        });
        laydate({
            elem: '#skinlib .skindemo'
        })
    };
    
    
    //贡献皮肤
    $('#addSkin').on('click', function(){
        $.layer({
            type: 1,
            title: false,
            border: [0],
            offset:['150px', ''],
            area: ['600px', '320px'],
            shadeClose: true,
            bgcolor:'#009956',
            page: {
                html: '<div style="color:#fff; padding:20px;">\
                <p>layDate具备完善的皮肤机制，您可以按照下述规范给我们贡献皮肤：</p>\
                <pre class="skinpre" style="color:#333">\
打开skins里面的任意文件夹，拷贝一份出来，修改文件夹名称，即为您的皮肤名，如：newskin。然后运行laydate.skin("newskin"); 以便对您的新皮肤进行样式调试。css按照里面的规范写就行了，更推荐您用Chrome DevTools去调试。 \
                </pre>\
                <p>皮肤制作完毕后，把您的皮肤包发送给：xu@sentsin.com</p>\
                <p>=邮件规范=</p>\
                <p>邮件标题：贡献layDate皮肤</p>\
                <p>名称：</p>\
                <p>作者：</p>\
                <p>个人网址：</p>\
                <p>皮肤压缩包附件</p></div>'
            }, success: function(){
                layer.shift('top');
                $('.skinpre').laycode({title:''});
            }
        })
    });

    //修饰代码
    $('.codes').each(function(i){
        var othis = $(this);
        othis.laycode({
            title: othis.attr('title') || '对应代码说明',
            height: othis.attr('heg') || 'auto',
            skin: othis.attr('skin') || 0
        });
    });
    
    $('#xieyi').on('click', function(){
        alert('尚在整理中');
    });
   
    //触发例子
    new Function($('.run').text())();
}());

}();