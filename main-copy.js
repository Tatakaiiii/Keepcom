


var name = '';
var email = '';
var message='';
function sayName(){
    if (name) alert('informations sent succesfully')
    else alert ('please enter your informations')
   
    if (name){
        if (email) alert('informations sent succesfully')
       
        
        }
        if (email) {
            if (message) alert('informations sent succesfully')
            
            
        }
        
    }
    
function getInformations(){
    var input = document.getElementById('mymessage')
    var nme = document.getElementById('name')
    var eml = document.getElementById('mail')
    mail = nme.value
    name = eml.value
    message = input.value
   
}
console.log(name)

