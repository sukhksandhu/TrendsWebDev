window.onload = pageReady;
function pageReady(){
    // taking elements to insert by ids 
    
    var employeename = document.getElementById("employeename");
    var employeebio = document.getElementById("employeebio");
    var employeerole =  document.getElementById("rolebox");

    var employeename2 = document.getElementById("employeename2");
    var employeebio2 = document.getElementById("employeebio2");
    var employeerole2 =  document.getElementById("rolebox2");

    var employeename3 = document.getElementById("employeename3");
    var employeebio3 = document.getElementById("employeebio3");
    var employeerole3 =  document.getElementById("rolebox3");

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
            employeename2.innerHTML = myobjectJSON[2].employeefname + " " + myobjectJSON[2].employeelname;
            employeename3.innerHTML = myobjectJSON[3].employeefname + " " + myobjectJSON[3].employeelname;
            //employee bio
            employeebio.innerHTML = myobjectJSON[1].employeebio;
            //employeebio2.innerHTML = myobjectJSON[2].employeebio;
            employeebio3.innerHTML = myobjectJSON[3].employeebio;
            console.log(myobjectJSON[2].employeebio);
            //roles
            console.log(myobjectJSON[1].roles);
            console.log(myobjectJSON[3].roles[1].rolename);
            console.log(myobjectJSON[3].roles[0].rolename);
                

            var rolesobj = myobjectJSON[1].roles;
            var rolesobj2 = myobjectJSON[2].roles;
            
            console.log(rolesobj[0].rolename);
            
            // console.log(myobjectJSON[0].rolecolor);
            employeerole.innerHTML = rolesobj[0].rolename;
            employeerole2.innerHTML = rolesobj2[1].rolename;
            employeerole3.innerHTML = myobjectJSON[3].roles[1].rolename + " " + myobjectJSON[3].roles[0].rolename ;
            employeerole.style.backgroundColor = rolesobj[0].rolecolor;
            employeerole2.style.backgroundColor = rolesobj2[1].rolecolor;
            employeerole3.style.backgroundColor = myobjectJSON[3].roles[1].rolecolor;
            employeerole3.style.backgroundColor = myobjectJSON[3].roles[0].rolecolor;
            
            
            });
        }

       init();
  
    
}

