 chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
     
 var triggers = ['death','harrasment','homicide','died'];
 var track = 0;
 for( var i = 0; i < triggers.length;i++){
   const re = new RegExp(triggers[i], 'gi')
   const matches = document.documentElement.innerHTML.match(re) 
   if(matches == null){continue;}
   track += matches.length
     if(track > 30){break;}
     console.log(track)
 }
     
   sendResponse({count: track})
 })