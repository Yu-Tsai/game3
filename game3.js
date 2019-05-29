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

    /*function random(){
        blockwidth = Math.floor(Math.random() * (gamebase.width() - 2 * $("#moveobj").height())); 
        blockheight = Math.floor(Math.random() * gamebase.height());
    }*/

    var random = {
        blockwidth: Math.floor(Math.random() * (gamebase.width() - 2 * $("#moveobj").height())),
        blockheight: Math.floor(Math.random() * gamebase.height())
    };

    function makeblock() {
        var newBlock = $("<div>");
        newBlock.addClass("block");
        newBlock.css({
            "position": "absolute",
            "left": Math.floor(Math.random() * gamebase.width()),
            "top": gamebase.height(),
            "height": Math.floor(Math.random() * gamebase.height()),
            "width": Math.floor(Math.random() * gamebase.width() * 0.7) + gamebase.width() * 0.1
        })
        gamebase.append(newBlock);
        newBlock.stop().animate({ top: -newBlock.height() }, 5000, 'linear', function () { console.log(this.style.top); $(this).remove(); });
    }

    function blockmove() {
        
    }

    (function () {
        screen.orientation.lock("portrait");
    })();
    
    /*(function () {
        $("#startbase").stop().animate({ top: -$("#startbase").height() }, 5000, 'linear', function () { console.log(this.style.top); $(this).remove(); });
        setInterval(function () { makeblock(); }, 3000);
    })();*/
});
