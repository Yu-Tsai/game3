$(document).ready(function () {
    var gamebase = $("#gamebase3");
    var block = {
        width: 0,
        height: 0,
        position: 0
    };
    var blockwidth;
    var blockheight;
    var blockpos;
    var blocknum;
    var maketime;

    function makeblock() {
        if ($(window).height() >= $(window).width()) {
            var newBlockb = $("<div>");
            newBlockb.addClass("block");
            newBlockb.addClass("blockb");
            newBlockb.css({
                "position": "absolute",
                "left": 0,
                "top": gamebase.height(),
                "height": $("#moveobj").width(),
                "width": Math.floor(Math.random() * gamebase.width() * 0.8)
            });
            gamebase.append(newBlockb);

            var newBlockt = $("<div>");
            newBlockt.addClass("block");
            newBlockt.addClass("blockt");
            newBlockt.css({
                "position": "absolute",
                "left": newBlockb.width() + $("#moveobj").width() * 2,
                "top": gamebase.height(),
                "height": $("#moveobj").width(),
                "width": gamebase.width()
            })
            gamebase.append(newBlockt);

            newBlockb.stop().animate({ top: -newBlockb.height() }, 4000, 'linear', function () { /*console.log(this.style.top);*/ $(this).remove(); });
            newBlockt.stop().animate({ top: -newBlockt.height() }, 4000, 'linear', function () { /*console.log(this.style.top);*/ $(this).remove(); });
        } else {
            var newBlockt = $("<div>");
            newBlockt.addClass("block");
            newBlockt.addClass("blockt");
            newBlockt.css({
                "position": "absolute",
                "left": gamebase.width(),
                "top": 0,
                "height": Math.floor(Math.random() * gamebase.height() * 0.8),
                "width": $("#moveobj").width()
            })
            gamebase.append(newBlockt);

            var newBlockb = $("<div>");
            newBlockb.addClass("block");
            newBlockb.addClass("blockb");
            newBlockb.css({
                "position": "absolute",
                "left": gamebase.width(),
                "top": newBlockt.height() + $("#moveobj").height() * 2,
                "height": gamebase.height(),
                "width": $("#moveobj").width()
            });
            gamebase.append(newBlockb);

            newBlockb.stop().animate({ left: -newBlockb.width() }, 4000, 'linear', function () { /*console.log(this.style.top);*/ $(this).remove(); });
            newBlockt.stop().animate({ left: -newBlockt.width() }, 4000, 'linear', function () { /*console.log(this.style.top);*/ $(this).remove(); });
        }
    }

    $(window).on("orientationchange", function (event) {
        $(".block").stop();
        if ($(window).height() >= $(window).width()) {
            $.each($(".blockb"),function(){                
                var neww = $(this).height();
                var newh = $(this).width();
                var newleft = $(this).position().top;
                var newtop = gamebase.width() - $(this).width();
                $(this).css({
                    "top": newtop,
                    "left": newleft,
                    "width": neww,
                    "height": newh
                })                               
            })
        }
    });

    (function () {
        $("#startbase").stop().animate({ top: -$("#startbase").height() }, 3000, 'linear', function () { $(this).remove(); });
        setInterval(function () { makeblock(); }, 3000);
    })();
});