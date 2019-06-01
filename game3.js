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
                "left": -Math.floor(Math.random() * gamebase.width() * 0.8) - $("#moveobj").width() * 2,
                "top": gamebase.height()
            });
            gamebase.append(newBlockb);

            var newBlockt = $("<div>");
            newBlockt.addClass("block");
            newBlockt.addClass("blockt");
            newBlockt.css({
                "position": "absolute",
                "left": gamebase.width() + newBlockb.position().left + $("#moveobj").width() * 2,
                "top": gamebase.height()
            })
            gamebase.append(newBlockt);

            newBlockb.stop().animate({ top: -newBlockb.height() }, 4000, 'linear', function () { $(this).remove(); });
            newBlockt.stop().animate({ top: -newBlockt.height() }, 4000, 'linear', function () { $(this).remove(); });
        } else {
            var newBlockt = $("<div>");
            newBlockt.addClass("block");
            newBlockt.addClass("blockt");
            newBlockt.css({
                "position": "absolute",
                "left": gamebase.width(),
                "top": -Math.floor(Math.random() * gamebase.height() * 0.8) - $("#moveobj").width() * 2
            })
            gamebase.append(newBlockt);

            var newBlockb = $("<div>");
            newBlockb.addClass("block");
            newBlockb.addClass("blockb");
            newBlockb.css({
                "position": "absolute",
                "left": gamebase.width(),
                "top": newBlockt.height() + newBlockt.position().top + $("#moveobj").height() * 2
            });
            gamebase.append(newBlockb);

            newBlockb.stop().animate({ left: -newBlockb.width() }, 4000, 'linear', function () { $(this).remove(); });
            newBlockt.stop().animate({ left: -newBlockt.width() }, 4000, 'linear', function () { $(this).remove(); });
        }
    }

    $(window).on("orientationchange", function (event) {
        alert("111");
        $(".block").stop(true,false);
        if ($(window).height() >= $(window).width()) {
            $.each($(".blockb"), function () {
                var newleft = $(this).position().top;
                var newtop = -$(this).position().left;
                $(this).css({
                    "top": newtop,
                    "left": newleft
                })
                $(this).animate({ left: -gamebase.height() + $(this).position().left }, 4000, 'linear', function () { $(this).remove(); });
            })
            $.each($(".blockt"), function () {
                var newleft = $(this).position().top;
                var newtop = -$(this).position().left;
                $(this).css({
                    "top": newtop,
                    "left": newleft
                })
                $(this).animate({ left: -gamebase.height() + $(this).position().left }, 4000, 'linear', function () { $(this).remove(); });
            })            
            $("#startbase").css({
                "left":$("#startbase").position().top,
                "top": ""
            })
            $("#startbase").stop().animate({ left: -$("#startbase").height() + $("#startbase").position().left }, 3000, 'linear', function () { $(this).remove(); });
        } else {
            $.each($(".blockb"), function () {
                var newleft = -$(this).position().top;
                var newtop = $(this).position().left;
                $(this).css({
                    "top": newtop,
                    "left": newleft
                })
                $(this).animate({ top: -gamebase.width() + $(this).position().top }, 4000, 'linear', function () { $(this).remove(); });
            })
            $.each($(".blockt"), function () {
                var newleft = -$(this).position().top;
                var newtop = $(this).position().left;
                $(this).css({
                    "top": newtop,
                    "left": newleft
                })
                $(this).animate({ top: -gamebase.width() + $(this).position().top }, 4000, 'linear', function () { $(this).remove(); });
            })
            $("#startbase").css({
                "top": $("#startbase").position().left,
                "left": ""
            })
            $("#startbase").stop().animate({ top: -$("#startbase").width() + $("#startbase").position().top }, 3000, 'linear', function () { $(this).remove(); });
        }
    });

    (function () {
        if ($(window).height() >= $(window).width()) {
            $("#startbase").stop().animate({ top: -$("#startbase").height() }, 3000, 'linear', function () { $(this).remove(); });
        } else {
            $("#startbase").stop().animate({ left: -$("#startbase").width() }, 3000, 'linear', function () { $(this).remove(); });
        }
        
        setInterval(function () { makeblock(); }, 3000);
    })();
});
