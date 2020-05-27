window.onload = function()
{
    var dis1 = document.getElementById("dis1");
    var dis2 = document.getElementById("dis2");
    var dis3 = document.getElementById("dis3");
    var dis4 = document.getElementById("dis4");
   
    var btn = document.getElementById("find");
    var successresult = document.getElementById("successresult");
    var errorresult = document.getElementById("errorresult");
    
    btn.onclick = function dispResult()
    {
        var output = document.getElementById("output");
        var errormsg = document.getElementById("errormsg");
        output.style.display = "block";
        errormsg.style.display = "block";
        errorresult.innerHTML = "";
        successresult.innerHTML = "";
        var D1 = parseInt(dis1.value);
        var D2 = parseInt(dis2.value);
        var D3 = parseInt(dis3.value);
        var D4 = parseInt(dis4.value);
        
        if(D1 > 1000 || D2 >1000 || D3 >1000  || D4 > 1000){
                errorresult.innerHTML = "Invalid input value: distance value should be less than 1000";
                
        }
        else if(isNaN(D1) || isNaN(D2) || isNaN(D3) || isNaN(D4)){

            errorresult.innerHTML = "missing input";

        }
        else{
            console.log("no input errors");
            // number of cities are 5 say A, B, C, D, E
            //dis1 is distance between A and B
            //dis2 - between B and C
            //dis3 - between C and D
            //dis4 - between D and E
            //out1 = out0 +dist0, out2 = out1+dis1, out3= out2+dis2, and so on...
            //first line 
            var out0 = 0;
            var out1 = out0;
            var out2 = out1 + D1;
            var out3 = out2 + D2;
            var out4 = out3 + D3;
            var out5 = out4 + D4;
            var out = [out1,out2,out3,out4,out5];
            for(var i=0;i<=4;i++){
                successresult.innerHTML += out[i] + " ";
            }
                // successresult.innerHTML += out1 + " ";
                // successresult.innerHTML += out2 + " ";
                // successresult.innerHTML += out3 + " ";
                // successresult.innerHTML += out4 + " ";
                // successresult.innerHTML += out5 + " ";
            //second line
            
        }
        
    };
};