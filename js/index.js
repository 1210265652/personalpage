$(function () {
    $(".welist:last-child").click(function(){
        if(a==0){
            $(".welcome").animate({"left":"-40%"});
            $(".green").css({opacity:1,zIndex:30}).animate({left:"60%"});
            a=1;
        }else {
            $(".welcome").animate({"left":"0%"});
            $(".green").animate({left:"100%"}).css("opacity","0");
            a=0;
        }
    })
    $(".leftbox").click(function () {
        $(".welcome").animate({"left":"0%"});
        $(".green").animate({left:"100%"}).css("opacity","0");
        a=0;
    })

    $(".showcon").hide();
    $(".showcon").eq(0).show();
    $(".nav>.menu").click(function(){
        $(this).find("a").css({"color":"#fff","opacity":1}).parent().siblings().find('a').css({"color":'#999',"opacity":0.3});
        var index=$(this).index();
        $(".showcon").eq(0).hide();
        $(".menucon").eq(index).fadeIn("slow","linear").siblings().hide();
        $(".menucon").eq(index).find(".content").eq(0).show().siblings().hide();
        var btnindex=0;
        $(".menucon").eq(index).find(".squery").parent().parent().find(".num").html(btnindex+1);
        $(".menucon").eq(index).find(".squery").eq(btnindex).css("background-color","#85c224").siblings().css("background-color","#555");
        $(".menucon").eq(index).find(".squery").each(function(){
            $(this).click(function () {
                 btnindex=$(this).index();
                $(".menucon").eq(index).find(".squery").eq(btnindex).css("background-color","#85c224").siblings().css("background-color","#555");
                $(".menucon").eq(index).find(".content").eq(btnindex).fadeIn().siblings().hide();
                $(".menucon").eq(index).find(".squery").parent().parent().find(".num").html(btnindex+1);
            })
        })
    });

    /*最近文章*/
    $(".header").click(function(){
       $(this).siblings().eq(1).find("a").css({"color":"#999","opacity":0.3});
        $(".menucon").hide();
        $(".showcon").eq(0).show();
    });
    $(".showcon").eq(0).find(".content").eq(0).show().siblings().hide();
    $(".showcon").eq(0).find(".squery").each(function(){
        $(this).click(function(){
            var index=$(this).index();
            $(".squery").eq(index).css("background-color","#85c224").siblings().css("background-color","#555");
            $(".showcon").eq(0).find(".content").eq(index).fadeIn().siblings().hide();
            $(this).parent().parent().find(".num").html(index+1);
        })
    })


    /*关于我*/
    /*var zhezhao=document.querySelector("#zhe");*/
    $("#zhe").hide();
    var a=0;
    $(".list:eq("+($('.list').length-1)+")").click(function () {
          if(a==0){
              $(".back").animate({"left":"-40%"});
              $(".green").css("opacity","1").animate({left:"60%"});
              $("#zhe").show();
              a=1;
          }else {
              $(".back").animate({"left":"0%"});
              $(".green").animate({left:"100%"}).css("opacity","0");
              $("#zhe").hide();
              a=0;
          }
    })
    $(".leftbox").click(function () {
        $(".back").animate({"left":"0%"});
        $(".green").animate({left:"100%"}).css("opacity","0");
        $("#zhe").hide();
        a=0;
    })
    $("#zhe").click(function () {
        $(".back").animate({"left":"0%"});
        $(".green").animate({left:"100%"}).css("opacity","0");
        $("#zhe").hide();
        a=0;
    })




    /*简介信息框显示隐藏*/
    $(".confloat").hide();
    $(".conList").click(function(e){
        e.preventDefault();
        $(this).find(".confloat").show(1000)
    })
    $(".closeImg").click(function(e){
        e.stopPropagation();
        $(this).parent().hide(1000)
    })





    /*我的作品*/

    $('.probox').bind('mousewheel', function(e) {
        e.preventDefault();
        var scrollTop = this.scrollTop;
        this.scrollTop = (scrollTop + ((e.deltaY * e.deltaFactor) * -1));
        console.log(e.deltaY, e.deltaFactor, e.originalEvent.deltaMode, e.originalEvent.wheelDelta);
        if(e.deltaY>0){   //向左
            $(".proarrL").css("opacity",1).siblings().css("opacity",0.3)
        }
        if(e.deltaY<0){   //向右
            $(".proarrR").css("opacity",1).siblings().css("opacity",0.3)
        }
        var nowLeft=parseInt($(this).css("left"));

        var lefts=nowLeft+e.originalEvent.wheelDelta;
        console.log(lefts)
        if(lefts>0 || lefts<-3040){ //410+20 1680->2160(430)
            return;
        }
        $(this).css({
            "left":lefts+"px"
        })
    })


})