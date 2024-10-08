
var userPrompt = prompt("What do you want to display for your kid: \n table \n forward counting \n backward counting").toLowerCase();

if (userPrompt === "table") {
    var tableOf = +prompt("Which table would you like to display (e.g. 2, 3, 4....)");
    var startFrom = +prompt("Where from you start the table");
    var endTo = +prompt("Where would you like to end the table:")

    for(var i= startFrom; i <= endTo; i++){
    document.write(`<div class="solution_container">
        ${tableOf}   X   ${i}   =    ${( tableOf * i)} </br>
         </div>`)
    }

}

else if (userPrompt === "forward counting") {
    var startFrom = +prompt("Where would you like to start forward count:");
    var endTo = +prompt("Where would you like to end forward count:")

    for(var i = startFrom; i <= endTo; i += 10){

    for(var j= i; j < i + 10; j++ ){
    document.write(" " +  j + " " );
    }
    document.write("</br> </br>")
    }
    
}

else if (userPrompt === "backward counting") {
    var endTo = +prompt("Where would you like to start backward count:")
     var startFrom = +prompt("Where would you like to end backward count:");

     for(var i = endTo; i >= startFrom; i -= 10){
 
     for(var j = i; j > i - 10; j-- ){

     document.write(" " +  j + " " );

     }
     document.write("</br> </br>");
     }   
 }

 else {
    document.write(`
       <h2> Choose option only, meet again! </h2>
     `);
 }
 


