window.onload = function()
{
    var a3pt = document.getElementById("3pt");
    var a2pt = document.getElementById("2pt");
    var a1pt = document.getElementById("1pt");

    var b3pt = document.getElementById("3bpt");
    var b2pt = document.getElementById("2bpt");
    var b1pt = document.getElementById("1bpt");

    var btn = document.getElementById("winner");
    var result = document.getElementById("result");
    btn.onclick = function dispResult()
    {
        var out = document.getElementById("output");
        output.style.display = "block";
        var atotal = (a3pt.value * 3) + (a2pt.value * 2) + (a1pt.value * 1);
        var btotal = (b3pt.value * 3) + (b2pt.value * 2) + (b1pt.value * 1);
        if((atotal)>(btotal)){
            console.log("Winner is A");
            result.innerHTML = "A";

        } else if((atotal)<(btotal)){
            console.log("Winner is B");
            result.innerHTML = "B";
        }
        else {
            console.log("No Results yet entered");
            result.innerHTML ="No Results yet entered";
        }
    };
};