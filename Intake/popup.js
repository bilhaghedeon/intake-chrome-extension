document.addEventListener('DOMContentLoaded', function () {
    
    function onclick () {
     chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
       chrome.tabs.sendMessage(tabs[0].id, '', setCount)
     })
    }
    
    document.querySelector('button').addEventListener('click', onclick, false)
    
    function setCount (negativeIntake) {
        
        document.getElementById("img").src = "";
        
        console.log(negativeIntake.count);
        document.getElementById("button").style.display = "none";

        if(negativeIntake.count > 30){
            document.getElementById("img").src = "images/negative.png";
        }else{
         document.getElementById("img").src = "images/positive.png";
        }
       
        document.body.style.backgroundColor = "#60567B";
       
        document.getElementById("links").style.color = "white";
    }
}, false)