function med() {
    var x = document.getElementsByClassName("hey");
     var i;
     for (i = 0; i < x.length; i++) {
       if (x[i].style.fontWeight== "normal"){
        x[i].style.fontWeight= "bold";
        
       }
        else {x[i].style.fontWeight= "normal";}
       
       console.log(x[i].style.fontWeight);
      }
     }

     function non() {
      var x = document.getElementsByClassName("hey");
       var i;
       for (i = 0; i < x.length; i++) {
         if (x[i].style.fontStyle== "normal"){
          x[i].style.fontStyle= "italic";
          
         }
          else {x[i].style.fontStyle= "normal";}
         
         console.log(x[i].style.fontStyle);
        }
       }

       function yes() {
        var x = document.getElementsByClassName("hey");
         var i;
         for (i = 0; i < x.length; i++) {
           if (x[i].style.textDecoration == ""){
            x[i].style.textDecoration = "underline";
            
           }
            else {x[i].style.textDecoration= "";}
           
           console.log(x[i].style.textDecoration);
          }
         }
          function safe() {
          var x = document.getElementsByClassName("hey");
           var i;
           for (i = 0; i < x.length; i++) {
             if (x[i].style.color == "red"){
              x[i].style.color = "violet";
              
             }
              else {x[i].style.color = "red";}
             
             console.log(x[i].style.color);
            }
           }
        function myFunction() {
          var x = document.getElementById("Fonts").value;
          var y=document.getElementsByClassName("hey");
          for (i = 0; i < x.length; i++) {
             y[i].style.fontSize = x;
         }
        }
          function myFunction1() {
          var x = document.getElementById("Fonts1").value;
          var y=document.getElementsByClassName("hey");
          for (i = 0; i < x.length; i++) {
             y[i].style.fontFamily = x;
         }
        }
        

       
    
