let clientId  = "fti2cm1zr0bb6tuoqhmv9xjqa76e4s";
let client_secret = "aj2ra5encuwosbtj8xa3yxxoq7dl3y";
let token = "2nqlf1wjlmxxpcwluk90a1yd6a3xqv";
// let url = 'https://api.twitch.tv/helix/search/channels?query=callofduty&live_only=true';
let url;

let baseurl = "https://api.twitch.tv/helix/search/channels?query=";

let listOfGames = document.getElementById('gameItems');
let displayInfo = document.getElementById('placeInfo');

// let currentGame = 'COD';

let getGames = "COD";

let initalMoveChosen = false;

// localStorage.clear();

//let auth="https://id.twitch.tv/oauth2/token?client_id=fti2cm1zr0bb6tuoqhmv9xjqa76e4s&client_secret=aj2ra5encuwosbtj8xa3yxxoq7dl3y&grant_type=client_credentials"

//listOfTeamMembetrs = ["DallasEmpire","FloridaMutineers","LondonRoyalRavens","LosAngelesGuerrillas","New York Subliners","TorontoUltra"]

// listOfChannels = ['Call of Duty: Warzone','Call of Duty: Black Ops Cold War','Call Of Duty: Modern Warfare','Call of Duty: Black Ops III'];

var codTournaments = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/tournaments/running?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"
var valorantTournaments = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/valorant/tournaments/running?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

let pandaScoreURl = "";

var parentList = document.getElementById("match-list");

// localStorage.clear();

function displayData(allData){
    while(displayInfo.hasChildNodes()){
        displayInfo.removeChild((displayInfo.childNodes[0]));
    }
    
    for(let i=0;i<5;i++){
        let nameDisplayed = document.createElement('p');
        nameDisplayed.innerText = "NAMEDISPLAYED " + allData["data"][i]["display_name"];
        let title = document.createElement('p');
        title.textContent = "TITLE " + allData["data"][i]["title"];
        displayInfo.append(nameDisplayed);
        displayInfo.append(title);
        
        
        
    }
}

function GetInfo(){
    console.log("url " + url);
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
}





document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.getItem('games') === null){
        localStorage.setItem('games',getGames);
    }
    else{
        getGames = localStorage.getItem('games');
        console.log("getallitems " + getGames);
    }
    
    if( getGames === "COD"){

        url = baseurl + "callofduty&live_only=true";
        pandaScoreURl = codTournaments
    }
    else if(getGames === "Volarant"){
        url = baseurl +  "valorant&live_only=true";
        pandaScoreURl = valorantTournaments;
    }
    GetInfo();
    DisplayTeams();
    DisplayDates();
    

   
});





listOfGames.addEventListener('click', (e) => {
    // if(e.target.value } === )
    if(e.target.value === "COD"){
        
        getGames = e.target.value;
        localStorage.setItem('games',getGames);
        url = baseurl + "callofduty&live_only=true";
        pandaScoreURl = codTournaments;
        GetInfo();
        DisplayTeams();
        DisplayDates();

    }
    else if(e.target.value === "Volarant"){
        getGames = e.target.value;
        localStorage.setItem('games',getGames);
        url = baseurl +  "valorant&live_only=true"
        pandaScoreURl = valorantTournaments;
        GetInfo();
        DisplayTeams();
        DisplayDates();
    }
    
    
});


function DisplayTeams(){
    fetch(pandaScoreURl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            parentList.textContent = "Teams in Tournament";
            console.log(parentList);
            let lengths = data[0]["teams"].length;
            console.log(lengths);
            for (let j = 0; j < lengths; j++) {
                var li = document.createElement("p");
                li.textContent= data[1].teams[j].name;
                parentList.appendChild(li);
            }
        });
}


function DisplayDates(){
    fetch (pandaScoreURl) // change valorantTournaments to whatever variable
        .then(function (response) {
            return response.json();
        })
    .then (function (data) {
        console.log(data);
        console.log(data[0].matches);
        console.log(data[0].matches[0].begin_at);
        // var matchList = document.createElement("p"); //change append lines to whatever we're using to append to the main file
        // parentList.appendChild(matchList);
        for (let j = 0; j < data[0]["matches"].length; j++) {
            var li = document.createElement("li");
            li.textContent= data[0].matches[j].begin_at;
            parentList.appendChild(li);
            
        }
  });
}


// //fetch timestamps for COD tournament
// fetch (codTournaments) 
//   .then(function (response) {
//     return response.json();
//   })
//   .then (function (data) {
//     console.log(data);
//     var matchList = document.createElement("ul");
//     matchList.textContent = "Tournament Matches";
//     parentList.appendChild(matchList)
//     let matches = data[1]["matches"].length;
//     console.log(matches);
//     for (let j = 0; j < data[1]["matches"].length; j++) {
//       var li = document.createElement("li");
//       matchList.appendChild(li);
//       li.textContent= data[1].matches[j].begin_at;
//     }
//   })




//   fetch(valorantTournaments)
//   .then(function (response) {
//     return response.json();
//   })
// .then(function (data) {
//     console.log(data);
//     parentList.textContent = "Teams in Tournament 2";
//     console.log(parentList)
//     let lengths = data[0]["teams"].length;
//     console.log(lengths);
//     for (let j = 0; j < data[0]["teams"].length; j++) {
//       var li = document.createElement("p");
//       li.textContent= data[0].teams[j].name;
//       parentList.append(li);

//     }
//   });





