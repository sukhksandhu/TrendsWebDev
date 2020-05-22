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
        var atotal = (parseInt(a3pt.value) * 3) + (parseInt(a2pt.value) * 2) + parseInt((a1pt.value) * 1);
        var btotal = (parseInt(b3pt.value) * 3) + (parseInt(b2pt.value) * 2) + (parseInt(b1pt.value) * 1);
        
        
        if(atotal > btotal){
            console.log("Winner is A");
            result.innerHTML = "A";
            
        }
        else if(atotal < btotal){
            console.log("Winner is B");
            result.innerHTML = "B";
            
        }
        
       else if(atotal == btotal){
            console.log("It is Tie");
            result.innerHTML = "Match is Tie";
        }
        else {
            result.innerHTML = "Results are not entered yet";
        }
        
    };
};