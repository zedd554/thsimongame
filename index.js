var colors = ["", "red", "green", "blue", "yellow"];

$("body").on("keypress", function() {
    document.getElementById("level-title").innerText = "Level 1";
    var randomBox = Math.floor((Math.random() * 4) + 1);
    var randomColor = colors[randomBox];

    $("." + randomColor).addClass("pressed");
    var g = new Audio("sounds/" + randomColor + ".mp3");
    g.play();

    setTimeout(function() {
        $("." + randomColor).removeClass("pressed");
    }, 50);

  
    });
    $("body").on("click", function() {
        document.getElementById("level-title").innerText = "Level 1";
        var randomBox = Math.floor((Math.random() * 4) + 1);
        var randomColor = colors[randomBox];
    
        $("." + randomColor).addClass("pressed");
        var g = new Audio("sounds/" + randomColor + ".mp3");
        g.play();
    
        setTimeout(function() {
            $("." + randomColor).removeClass("pressed");
        }, 50);
    
      
        });
    