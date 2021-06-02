let clientId  = "fti2cm1zr0bb6tuoqhmv9xjqa76e4s";
let client_secret = "aj2ra5encuwosbtj8xa3yxxoq7dl3y";
let token = "2nqlf1wjlmxxpcwluk90a1yd6a3xqv";
let url = 'https://api.twitch.tv/helix/search/channels?query=callofduty&live_only=true';


//let auth="https://id.twitch.tv/oauth2/token?client_id=fti2cm1zr0bb6tuoqhmv9xjqa76e4s&client_secret=aj2ra5encuwosbtj8xa3yxxoq7dl3y&grant_type=client_credentials"

//listOfTeamMembetrs = ["DallasEmpire","FloridaMutineers","LondonRoyalRavens","LosAngelesGuerrillas","New York Subliners","TorontoUltra"]

// listOfChannels = ['Call of Duty: Warzone','Call of Duty: Black Ops Cold War','Call Of Duty: Modern Warfare','Call of Duty: Black Ops III'];


function displayData(allData){
    let displayInfo = document.getElementById('firstColumn');
    for(let i=0;i<5;i++){
        let nameDisplayed = document.createElement('p');
        nameDisplayed.innerText = "NAMEDISPLAYED " + allData["data"][i]["display_name"];
        let title = document.createElement('p');;
        title.textContent = "TITLE " + allData["data"][i]["title"];
        displayInfo.append(nameDisplayed);
        displayInfo.append(title);
        
        
        
    }
}




fetch(url,{
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
        displayData(data);
        
    
    })




