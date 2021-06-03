// let clientId  = "fti2cm1zr0bb6tuoqhmv9xjqa76e4s";
// let client_secret = "aj2ra5encuwosbtj8xa3yxxoq7dl3y";
// let token = "2nqlf1wjlmxxpcwluk90a1yd6a3xqv";
// let url ="https://api.twitch.tv/helix/search/channels?query=shroud";
let url1 = "https://api.twitch.tv/helix/streams?user_id=512710"

let auth="https://id.twitch.tv/oauth2/token?client_id=fti2cm1zr0bb6tuoqhmv9xjqa76e4s&client_secret=aj2ra5encuwosbtj8xa3yxxoq7dl3y&grant_type=client_credentials"

fetch(url1,{
    method:"GET",
    headers:{
     'client-id':clientId,
    'Authorization':`Bearer ${token}`
    }
})
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);
        displayOnline(data);
        
    })

    let displayUser = document.getElementById('fourtColumn');

    var displayOnline = function(data) {
        console.log(data["data"].length)
    if (data["data"].length > 0) {
        let displayOn = document.createElement('p');
        displayOn.innerText = 'Online'; 
        displayUser.append(displayOn);  
     }
     else {
        let displayOff = document.createElement('p');
        displayOff.innerText = 'Offline';
        displayUser.append(displayOff); 
     }

    }