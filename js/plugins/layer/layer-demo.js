$(function(){
    //初体验
    $("#chutiyan1").on("click",function(){
        layer.alert('内容');
    });
    //第三方扩展皮肤
    $("#chutiyan2").on("click",function(){
        layer.alert('内容', {
             icon: 1,
             skin: 'layer-ext-moon' //该皮肤由layer.seaning.com友情扩展。关于皮肤的扩展规则，去这里查阅
        })
    });
    // 询问框
    $("#chutiyan3").on("click",function(){
        layer.confirm('您是如何看待前端开发？', {
            btn: ['重要','奇葩'] //按钮
        }, function(){
            layer.msg('的确很重要', {icon: 1});
        }, function(){
            layer.msg('奇葩么么哒', {shift: 6});
        });
    });
        //提示层
    $("#chutiyan4").on("click",function(){
        layer.msg('玩命提示中');
    });
    //墨绿深蓝风
    $("#chutiyan5").on("click",function(){
        layer.alert('墨绿风格，点击确认看深蓝', {
            skin: 'layui-layer-molv' //样式类名
            ,closeBtn: 0
        }, function(){
            layer.alert('偶吧深蓝style', {
                skin: 'layui-layer-lan'
                ,closeBtn: 0
                ,shift: 4 //动画类型
            });
        });
    });
     //捕获页
    $("#chutiyan6").on("click",function(){
        layer.open({
            type: 1,
            shade: false,
            title: false, //不显示标题
            content: $('.layer_notice'), //捕获的元素
            cancel: function(index){
                layer.close(index);
                this.content.show();
                layer.msg('捕获就是从页面已经存在的元素上，包裹layer的结构',{time: 5000});
            }
        });
    });
    //页面层
    $("#chutiyan7").on("click",function(){
        layer.open({
            type: 1,
            skin: 'layui-layer-rim', //加上边框
            area: ['420px', '240px'], //宽高
            content: 'html内容'
        });
    });
    //自定页
    $("#chutiyan8").on("click",function(){
        layer.open({
            type: 1,
            skin: 'layui-layer-demo', //样式类名
            closeBtn: false, //不显示关闭按钮
            shift: 2,
            shadeClose: true, //开启遮罩关闭
            content: '内容'
        });
    });
    //tips层
    $("#chutiyan9").on("click",function(){
        layer.tips('Hi，我是tips', '#chutiyan9');
    });
    //iframe层
     $("#chutiyan10").on("click",function(){
       layer.open({
            type: 2,
            title: 'layer mobile页',
            shadeClose: true,
            shade: 0.8,
            area: ['380px', '90%'],
            content: 'http://layer.layui.com/mobile/' //iframe的url
        }); 
    });
     //iframe窗
     $("#chutiyan10").on("click",function(){
       layer.open({
            type: 2,
            title: false,
            closeBtn: false,
            shade: [0],
            area: ['340px', '215px'],
            offset: 'rb', //右下角弹出
            time: 2000, //2秒后自动关闭
            shift: 2,
            content: ['test/guodu.html', 'no'], //iframe的url，no代表不显示滚动条
            end: function(){ //此处用于演示
                layer.open({
                    type: 2,
                    title: '很多时候，我们想最大化看，比如像这个页面。',
                    shadeClose: true,
                    shade: false,
                    maxmin: true, //开启最大化最小化按钮
                    area: ['1150px', '650px'],
                    content: 'http://fly.layui.com/'
                });
            }
        });
    });
     //iframe窗
      $("#chutiyan11").on("click",function(){
       layer.open({
            type: 2,
            title: false,
            closeBtn: false,
            shade: [0],
            area: ['340px', '215px'],
            offset: 'rb', //右下角弹出
            time: 2000, //2秒后自动关闭
            shift: 2,
            content: ['test/guodu.html', 'no'], //iframe的url，no代表不显示滚动条
            end: function(){ //此处用于演示
                layer.open({
                    type: 2,
                    title: '很多时候，我们想最大化看，比如像这个页面。',
                    shadeClose: true,
                    shade: false,
                    maxmin: true, //开启最大化最小化按钮
                    area: ['1150px', '650px'],
                    content: 'http://fly.layui.com/'
                });
            }
        });
    });
      //加载层
    $("#chutiyan12").on("click",function(){
        var index = layer.load(0, {shade: false}); //0代表加载的风格，支持0-2
    });
    //loading层
    $("#chutiyan13").on("click",function(){
        var index = layer.load(1, {
            shade: [0.1,'#fff'] //0.1透明度的白色背景
        });
    });
    //小tips
    $("#chutiyan14").on("click",function(){
       layer.tips('我是另外一个tips，只不过我长得跟之前那位稍有些不一样。', '#chutiyan14', {
            tips: [4, '#3595CC'], //1 代表tips层-上 2 代表 tips层-右 默认 3 代表 tips层-下 4 代表 tips层-左 还可配置颜色
            time: 4000
        });
    });
    //prompt层
    $("#chutiyan15").on("click",function(){
       layer.prompt({
            title: '输入任何口令，并确认',
            formType: 1 //prompt风格，支持0-2
        }, function(pass){
            layer.prompt({title: '随便写点啥，并确认', formType: 2}, function(text){
                layer.msg('演示完毕！您的口令：'+ pass +' 您最后写下了：'+ text);
            });
        });
    });
    //tab层
    $("#chutiyan16").on("click",function(){
       layer.tab({
            area: ['600px', '300px'],
            tab: [{
                title: 'TAB1', 
                content: '内容1'
            }, {
                title: 'TAB2', 
                content: '内容2'
            }, {
                title: 'TAB3', 
                content: '内容3'
            }]
        });
    });
});
//layer 作者书写不需要jquery库的原生引用方法
;!function(){
//加载扩展模块
layer.config({
    extend: 'extend/layer.ext.js'
});
//页面一打开就执行，放入ready是为了layer所需配件（css、扩展模块）加载完毕
layer.ready(function(){ 
    //官网欢迎页
    layer.open({
        type: 2,
        //skin: 'layui-layer-lan',
        title: 'layer弹层组件',
        fix: false,
        shadeClose: true,
        maxmin: true,
        area: ['1000px', '500px'],
        content: 'http://layer.layui.com/?form=local',
        end: function(){
            layer.tips('试试相册模块？', '#photosDemo', {tips: 1})
        }
    });
    //layer.msg('欢迎使用layer');
    //使用相册
    layer.photos({
        photos: '#photosDemo'
    });
});
}();