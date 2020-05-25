window.onload = function()
{
    var humid = document.getElementById("humidity");
    var max = document.getElementById("max");
   
    var btn = document.getElementById("check");
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
        var H = parseInt(humid.value);
        var M = parseInt(max.value);
        if(H < 0 || H >100 || M <= 0 || M >= 240){
                errorresult.innerHTML = "Invalid input value";
                if(H < 0 || H >100){
                    errorresult.innerHTML += ": Humidity should be less than equal to 100 or greater than equal to 0";
                }
                else if(M <= 0 || M >= 240) {
                    errorresult.innerHTML += ": Maximum hours should be greater than 0 or less than 240";
                }
        }
        else if(isNaN(H) || isNaN(M)){
            errorresult.innerHTML += "missing input ";
        }
        else{
            //successresult.innerHTML += "continue coding";
            console.log("no input errors");
            var T = 0;
            var A;
            for(T=0;T<=M;T++)
            {
                A = ((-6*(T*T*T*T)) + (H*(T*T*T)) + (2*(T*T) +1));
                console.log(A);
                if(A<=0){
                    successresult.innerHTML += "The balloon first touches the ground at hour :" + T;
                    break;
                }          
            }   
                
            if(A > 0){
            
                successresult.innerHTML += "The balloon does not reach the ground in given time";
            }
                    
            
        }
        
        
        
    };
};