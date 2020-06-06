window.onload = pageReady;
function pageReady(){
    // taking elements to insert by ids 
    var outbox = document.getElementById("outbox");
    var myimg = document.getElementById("myimg");
    var employeename = document.getElementById("employeename");
    var employeebio = document.getElementById("employeebio");
    var employeerole =  document.getElementById("rolebox");

    function loadJSON(callback) {   

        var xobj = new XMLHttpRequest();
        
            xobj.overrideMimeType("application/json");
          

        xobj.open('GET', 'http://sandbox.bittsdevelopment.com/code1/fetchemployees.php', true); 
        
        
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
              }
        };
        xobj.send(null);  
     }
     function init()
      {
            loadJSON(function(response) {
            // Parse JSON string into object
            var myobjectJSON = JSON.parse(response);
            console.log(myobjectJSON);
                console.log(myobjectJSON[1].employeefname);
                employeename.innerHTML = myobjectJSON[1].employeefname + " " + myobjectJSON[1].employeelname;
                employeebio.innerHTML = myobjectJSON[1].employeebio;
            console.log(myobjectJSON[1].roles);
            var rolesobj = myobjectJSON[1].roles;
            console.log(rolesobj[0].rolename);

            // console.log(myobjectJSON[0].rolecolor);
            employeerole.innerHTML = rolesobj[0].rolename;
            employeerole.style.backgroundColor = rolesobj[0].rolecolor;
            });
        }

       init();
  
    
}

