

function myFunction1() {
    var x = document.getElementById("administrator");
    var y = document.getElementById("user");
  
    if (x.style.display === "none") {

        y.style.display = "none"
        x.style.display = "block";
        
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}


function myFunction2() {
    var x = document.getElementById("cashier");
    var y = document.getElementById("user");

    if (x.style.display === "none") {

        y.style.display = "none"
        x.style.display = "block";
        
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

function backButton(){
    
    var x = document.getElementById("administrator");
    var y = document.getElementById("cashier");
    var z = document.getElementById("user");
  
    if (x.style.display === "block") {

        z.style.display = "block"
        x.style.display = "none";

    // }else if(y.style.display === "block"){    

    //     z.style.display = "block"
    //     y.style.display = "none";
       
 
    } else {
        z.style.display = "block"
        y.style.display = "none";
       
    }
}

