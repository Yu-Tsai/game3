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
    var check = null;
    var domakeblock = null;
    var blockDir = new Array;
    var playerDir = new Array;
    var score = 0;

    function makeblock() {
        if ($(window).height() >= $(window).width()) {
            var newBlockb = $("<div>");
            newBlockb.addClass("block");
            newBlockb.addClass("blockb");
            newBlockb.css({
                "position": "absolute",
                "left": -Math.floor(Math.random() * gamebase.width() * 0.7) - $("#moveobj").width() * 3,
                "top": gamebase.height()
            });
            gamebase.append(newBlockb);

            var newBlockt = $("<div>");
            newBlockt.addClass("block");
            newBlockt.addClass("blockt");
            newBlockt.css({
                "position": "absolute",
                "left": gamebase.width() + newBlockb.position().left + $("#moveobj").width() * 3,
                "top": gamebase.height()
            })
            gamebase.append(newBlockt);

            newBlockb.stop().animate({ top: -newBlockb.height() }, 4000, 'linear', function () { $(this).remove(); score++; });
            newBlockt.stop().animate({ top: -newBlockt.height() }, 4000, 'linear', function () { $(this).remove(); });
        } else {
            var newBlockt = $("<div>");
            newBlockt.addClass("block");
            newBlockt.addClass("blockt");
            newBlockt.css({
                "position": "absolute",
                "left": gamebase.width(),
                "top": -Math.floor(Math.random() * gamebase.height() * 0.7) - $("#moveobj").width() * 3
            })
            gamebase.append(newBlockt);

            var newBlockb = $("<div>");
            newBlockb.addClass("block");
            newBlockb.addClass("blockb");
            newBlockb.css({
                "position": "absolute",
                "left": gamebase.width(),
                "top": newBlockt.height() + newBlockt.position().top + $("#moveobj").height() * 3
            });
            gamebase.append(newBlockb);

            newBlockb.stop().animate({ left: -newBlockb.width() }, 4000, 'linear', function () { $(this).remove(); score++; });
            newBlockt.stop().animate({ left: -newBlockt.width() }, 4000, 'linear', function () { $(this).remove(); });
        }
    }

    function move() {
        if ($(window).height() >= $(window).width()) {
            $("#moveobj").stop().animate({ left: -gamebase.width() - $("#moveobj").height() + $("#moveobj").position().left }, 2500, 'linear', function () { $(this).remove(); });
        } else {
            $("#moveobj").stop().animate({ top: gamebase.height() + $("#moveobj").height() + $("#moveobj").position().top }, 2500, 'linear', function () { $(this).remove(); });
        }
    }

    function overcheck() {
        if ($(window).height() >= $(window).width()) {
            if ($("#moveobj").position().left + $("#moveobj").width() >= gamebase.width()) {
                $("#moveobj").stop();
                move();
            }
            if ($("#moveobj").position().left <= -$("#moveobj").width()) {
                $("#moveobj").remove();
                clearInterval(check);
                clearInterval(domakeblock);
            }
        } else {
            if ($("#moveobj").position().top <= 0) {
                $("#moveobj").stop();
                move();
            }
            if ($("#moveobj").position().top >= gamebase.height()) {
                $("#moveobj").remove();
                clearInterval(check);
                clearInterval(domakeblock);
            }
        }
        $.each($(".block"), function () {
            blockDir[0] = $(this).position().top;
            blockDir[1] = $(this).position().left;
            blockDir[2] = $(this).position().top + $(this).height();
            blockDir[3] = $(this).position().left + $(this).width();

            playerDir[0] = $("#moveobj").position().top;
            playerDir[1] = $("#moveobj").position().left;
            playerDir[2] = $("#moveobj").position().top + $("#moveobj").height();
            playerDir[3] = $("#moveobj").position().left + $("#moveobj").width();


            if (playerDir[3] > blockDir[1] && playerDir[1] < blockDir[1] || playerDir[1] > blockDir[1] && playerDir[3] < blockDir[3] || playerDir[1] < blockDir[3] && playerDir[3] > blockDir[3]) {
                if (playerDir[0] < blockDir[2] && playerDir[2] > blockDir[2] || playerDir[0] < blockDir[0] && playerDir[2] > blockDir[0] || playerDir[0] < blockDir[2] && playerDir[2] > blockDir[0]) {
                    clearInterval(check);
                    clearInterval(domakeblock);
                    $("#moveobj").stop();
                    $(".block").stop();
                }
            }
        });
    }

    $(window).on("orientationchange", function (event) {
        $(".block").stop(true, false);
        $("#moveobj").stop();
        setTimeout(function () { move(); }, 200);
        if ($(window).height() >= $(window).width()) {
            $.each($(".blockb"), function () {
                var newleft = $(this).position().top;
                var newtop = -$(this).position().left;
                $(this).css({
                    "top": newtop,
                    "left": newleft
                })
                $(this).animate({ left: -gamebase.height() + $(this).position().left }, 4000, 'linear', function () { $(this).remove(); score++; });
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
            /*$("#startbase").css({
                "left":$("#startbase").position().top,
                "top": ""
            })
            $("#startbase").stop().animate({ left: -$("#startbase").height() + $("#startbase").position().left }, 3000, 'linear', function () { $(this).remove(); });*/
            var movenew = $("#moveobj").position().top;
            $("#moveobj").css({
                "top": gamebase.width() - $("#moveobj").position().left - $("#moveobj").width(),
                "left": movenew
            })
        } else {
            $.each($(".blockb"), function () {
                var newleft = -$(this).position().top;
                var newtop = $(this).position().left;
                $(this).css({
                    "top": newtop,
                    "left": newleft
                })
                $(this).animate({ top: -gamebase.width() + $(this).position().top }, 4000, 'linear', function () { $(this).remove(); score++; });
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
            /*$("#startbase").css({
                "top": $("#startbase").position().left,
                "left": "10vh"
            })
            $("#startbase").stop().animate({ top: -$("#startbase").width() + $("#startbase").position().top }, 3000, 'linear', function () { $(this).remove(); });*/
            var movenew = $("#moveobj").position().left;
            $("#moveobj").css({
                "left": gamebase.height() - $("#moveobj").position().top - $("#moveobj").height(),
                "top": movenew
            })
        }
    });

    (function () {
        if ($(window).height() >= $(window).width()) {
            $("#moveobj").css({
                "top": "10vh",
                "left": "45vw"
            })
            //$("#startbase").stop().animate({ top: -$("#startbase").height() }, 3000, 'linear', function () { $(this).remove(); move(); });
        } else {
            $("#moveobj").css({
                "top": "45vh",
                "left": "10vw"
            })
            //$("#startbase").stop().animate({ left: -$("#startbase").width() }, 3000, 'linear', function () { $(this).remove(); move(); });
        }        

        setTimeout(function () { move(); }, 3000);
        check = setInterval(function () { overcheck(); }, 0);
        domakeblock = setInterval(function () { makeblock(); }, 3000);
    })();

    $("#gamebase3").on("click", function () {
        if ($(window).height() >= $(window).width()) {
            $("#moveobj").stop().animate({ left: $("#moveobj").position().left + $("#moveobj").width()*2}, 250, 'linear', function () { move(); });
        } else {
            $("#moveobj").stop().animate({ top: $("#moveobj").position().top - $("#moveobj").height()*2}, 250, 'linear', function () { move(); });
        }        
    });
});