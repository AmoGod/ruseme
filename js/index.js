;$(function(){
    //背景动画
    //配置
    var config = {
      vx: 4,//点x轴速度,正为右，负为左
      vy:  4,//点y轴速度
      height: 2,//点高宽，其实为正方形，所以不宜太大
      width: 2,
      count: 100,//点个数
      color: "121, 162, 185",//点颜色
      stroke: "130,255,255",//线条颜色
      dist: 6000,//点吸附距离
      e_dist: 20000,//鼠标吸附加速距离
      max_conn: 10//点到点最大连接数
   }
    CanvasParticle(config);

    //页面滚动插件
    $('.content').onepage_scroll({

      sectionContainer: '.page'

    });
    //点击切换播放和关闭音乐
    $('#audioControl').click(function(){
      var oA = document.getElementById('audio');
      if(oA.paused){
        oA.play();
        $(this).addClass('run');
      }else{
        oA.pause();
        $(this).removeClass('run');
      }
    });
    //个人简历切换
    $('.resume').hover(function(){
      $(this).find('h3').html("Resume").end().find('p').html('个人简历');
    },function(){
      $(this).find('h3').html("AmoGod").end().find('p').html('前端工程师');
    });
    //贪吃蛇动画
    (function(){
      var timer;
      var off = true;
      for(var i = 0;i < 15;i++){
        var snake = '<i class="snake-line"></i>';
        $(".snake-hide").append(snake);
      }
      timer = setInterval(function(){
          if(off === true){
            $(".snake-head").addClass("snake-headOver").removeClass("snake-head");;
            off = false;
          }else if(off === false){
            $(".snake-headOver").addClass("snake-head").removeClass("snake-headOver");;
            off = true;
          }
      },200);
    })();
    //导航音乐播放
    (function(){
        $("#nav").find("li").each(function(i){
          var one = document.getElementsByClassName('one')[0];
          var two = document.getElementsByClassName('two')[0];
          var three = document.getElementsByClassName('three')[0];
          var four = document.getElementsByClassName('four')[0];
          $(this).mouseover(function(){
            if(i === 0){
              one.play();
            }else if (i === 1) {
              two.play();
            }else if (i === 2) {
              three.play();
            }else if (i === 3) {
              four.play();
            }
          })
        });
    })();
    //导航条动画
    $("#nav").find("li").hover(function(){
      $(this).find("i").stop().animate({top:"0px"})
      .end().find("a").css({color:"#fff"});
    },function(){
      $(this).find("i").stop().animate({top:"75px"})
      .end().find("a").css({color:"#000"});
    });

    //onePiece
    (function(){
      var n = 0;
      setInterval(function(){
        n++;
        if(n === 7){
          n=0;
        }
        $(".onePiece").find(".img").eq(n).css({"z-index":"999"}).siblings().css({"z-index":"1"});
      },2000);
    })();

    //仿MAC系统
    (function(){
      var oMac = document.getElementById("mac");
      var aImg = document.getElementsByClassName("item-mac");
      document.onmousemove = function(ev){
        var ev = ev || event;
        for(var i = 0;i<aImg.length;i++){
          var a = ev.clientX-(aImg[i].offsetWidth/2+aImg[i].offsetLeft);
          var b = ev.clientY-(aImg[i].offsetHeight/2+oMac.offsetTop+aImg[i].offsetTop);
          var c = Math.sqrt(a*a+b*b);
          var rate = 1-c/300;//比率
          if(rate < 0.6){
            rate = 0.6;
          }
          aImg[i].style.width = 200*rate + 'px';
        }
      }
    })();

    //大事记经历
    (function(){
      var yearList = [{
        "year":"2016/9",
        "tit":"搓衣板/去拿钱",
        "cont":[
          {"text":"负责所有搓衣板和无币支付官网的编码和上线"},
          {"text":"负责所有搓衣板和无币支付官网的编码和上线"},
          {"text":"负责所有搓衣板和无币支付官网的编码和上线"}
        ]
      },
      {
        "year":"2017/9",
        "tit":"搓衣板/去拿钱",
        "cont":[
          {"text":"负责所有搓衣板和无币支付官网的编码和上线"},
          {"text":"负责所有搓衣板和无币支付官网的编码和上线"},
          {"text":"负责所有搓衣板和无币支付官网的编码和上线"}
        ]
      }
    ];

      var html = '';//空的html用来保存代码
      for(var i = 0;i<yearList.length;i++){
        html = '<div class="year">'+
          '<h3>'+yearList[i].year+'</h3>'+
          '<div class="month-list">'+
            '<dl class="tit">'+
              '<dt>'+yearList[i].tit+'</dt>';
              for(var j = 0;j<yearList[i].cont.length;j++){
                html += '<dd>'+yearList[i].cont[j].text+'</dd>';
              }
            html += '</dl>'+
          '</div>'+
        '</div>';

        $("#live").append(html);
      }
    })();

});
