// Start js code for password

var allinform = [
    {
        username : "Tokhirbek",
        password : "1234"
    },
    {
        username : "Teacher",
        password : "4321"
    }
]

function myfunction(){
    var username= document.getElementById("username").value
    var password= document.getElementById("password").value
    
    for(let i = 0; i < allinform.length; i++){
        if(username == allinform[i].username  && password == allinform[i].password){
            window.open('Main.html');
        }else if(username == "Teacher"){
            window.open("teacher.html");
        }
        else{
            alert("You entered wrong password or username!  Please check again.. " )
        }
    }
}

// Start code for confetti.js after start entering student page 

const start = () =>{
    setTimeout(function () {
      confetti.start();  
    }, 0);
};
const stop = () => {
    setTimeout(function () {
        confetti.stop();
    }, 300);
}
start();
stop(); 