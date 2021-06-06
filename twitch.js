let clientId  = "fti2cm1zr0bb6tuoqhmv9xjqa76e4s";
let client_secret = "aj2ra5encuwosbtj8xa3yxxoq7dl3y";
let token = "2nqlf1wjlmxxpcwluk90a1yd6a3xqv";
// let url = 'https://api.twitch.tv/helix/search/channels?query=callofduty&live_only=true';
let url;

let baseurl = "https://api.twitch.tv/helix/search/channels?query=";

let listOfGames = document.getElementById('gameItems');
let displayInfo = document.getElementById('placeInfo');

// let currentGame = 'COD';

let getGames = "";

let initalMoveChosen = false;

// localStorage.clear();

//let auth="https://id.twitch.tv/oauth2/token?client_id=fti2cm1zr0bb6tuoqhmv9xjqa76e4s&client_secret=aj2ra5encuwosbtj8xa3yxxoq7dl3y&grant_type=client_credentials"

//listOfTeamMembetrs = ["DallasEmpire","FloridaMutineers","LondonRoyalRavens","LosAngelesGuerrillas","New York Subliners","TorontoUltra"]

// listOfChannels = ['Call of Duty: Warzone','Call of Duty: Black Ops Cold War','Call Of Duty: Modern Warfare','Call of Duty: Black Ops III'];

var codTournaments = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/tournaments/running?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"
var valorantTournaments = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/valorant/tournaments/running?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

// console.log("cod tourn data " + codTournaments);
// console.log("valor tourn data " + valorantTournaments)


console.log("this");
console.log(valorantTournaments);
let pandaScoreURl = "";

var parentList = document.getElementById("match-list");
var teamList = document.getElementById("team-list")

// localStorage.clear();

let url1 = "";
let twitchURL = "https://api.twitch.tv/helix/streams?user_id="


let volarantID = "516575"
let codID = "512710";

let chosenGame = "callofduty";

let originalOpen = false;

let titleOfTournoments = document.getElementById('currentTournos'); 

let positionChosen = 0;

let currentData;




function displayData(allData){
    while(displayInfo.hasChildNodes()){
        displayInfo.removeChild((displayInfo.childNodes[0]));
    }
    
    for(let i=0;i<5;i++){
        let nameDisplayed = document.createElement('p');
        nameDisplayed.innerText =  allData["data"][i]["display_name"];
        let title = document.createElement('p');
        title.textContent =  allData["data"][i]["title"];
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

// localStorage.clear();

function PlaceImage(){

    if(chosenGame === "callofduty"){
        document.getElementById('gameImg').src = "assets/callofduty.jpg";
    }

    else if(chosenGame === "valorant"){
        console.log("in hereeeeeeee");
        document.getElementById('gameImg').src = "assets/Valorant2.png";
    }
}


function GetPandaData(){
    console.log("pandascroeurl");
    console.log(pandaScoreURl);
    fetch(pandaScoreURl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("data in getpandadata");
            console.log(data);
            currentData =  data;
            console.log(currentData);
        });
}




document.addEventListener("DOMContentLoaded", function(){

    if(localStorage.getItem('games') === null){
        originalOpen = true;
    }
    else{
        getGames = localStorage.getItem('games');
        console.log("getallitems " + getGames);
    }
    
    if(getGames === "COD"){

        url = baseurl + "callofduty&live_only=true";
        pandaScoreURl = codTournaments
        url1 = twitchURL + codID;
        chosenGame = "callofduty"
    }
    else if(getGames === "Volarant"){
        url = baseurl +  "valorant&live_only=true";
        pandaScoreURl = valorantTournaments;
        url1 = twitchURL + volarantID;
        chosenGame = "valorant"
    }

    if(!originalOpen){
        console.log("move madeee");
        GetPandaData();
        GetInfo();
        console.log("Currentdate");
        console.log(currentData);
        setTimeout(SendInfo, 800)
        
    }
    

   
});

function SendInfo(){
    DisplayTeams(currentData);
    DisplayDates(currentData);
    console.log("helppppp mee");
    DetermineStatus();
    PlaceImage()

}

function TypesOfTournoments(){
    fetch(pandaScoreURl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log("length" + data.length);
            let options = document.getElementById("currentTournos");
            while (options.childNodes.length > 2) {
                console.log("lastchild " + options.lastChild);
                options.removeChild(options.lastChild);
            }
            for(let i=0;i<data.length;i++){
                let newOptions = document.createElement("option");
                newOptions.text = data[i]["slug"];
                options.append(newOptions);
                
            }
        });
}

titleOfTournoments.addEventListener('click', (e) => {
    console.log( "thissss " + e.target.value);
    fetch(pandaScoreURl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log("length" + data.length);
                for(let i=0;i<data.length;i++){
                    console.log(e.target.value);
                    console.log(data[i]["slug"]);
                    if(e.target.value == data[i]["slug"]){
                        console.log("sdbjliudj");
                        break;
                    }
                    positionChosen+=1;
                    console.log("positionchosen " + positionChosen);
                }
                if(e.target.value !== "select"){
                    localStorage.setItem('positionChoses',positionChosen);
                    DisplayTeams(data);
                    DisplayDates(data)
                }
                positionChosen = 0;
        })
})


listOfGames.addEventListener('click', (e) => {
    // if(e.target.value } === )
    console.log( "val" + e.target.value);
    if(e.target.value === "COD"){
        
        getGames = e.target.value;
        localStorage.setItem('games',getGames);
        url = baseurl + "callofduty&live_only=true";
        pandaScoreURl = codTournaments;
        chosenGame = "callofduty"
        url1 = twitchURL + codID;
    }
    else if(e.target.value === "Volarant"){
        getGames = e.target.value;
        localStorage.setItem('games',getGames);
        url = baseurl +  "valorant&live_only=true"
        pandaScoreURl = valorantTournaments;
        chosenGame = "valorant";
        url1 = twitchURL + volarantID;
       
    }
    if(e.target.value !== "Select"){
        TypesOfTournoments();
        GetInfo();
        DetermineStatus();
        PlaceImage()
    }
    
    
    
})


function DisplayTeams(data){
    positionChosen = localStorage.getItem('positionChoses');
    let numpositionChosen = parseInt(positionChosen);
    console.log(data);
    teamList.textContent = "Teams in Tournament";
    console.log(teamList);
    console.log("ahmasddddd");
    console.log(data);
    console.log("positionchosen " + positionChosen);
    let lengths = data[numpositionChosen]["teams"].length;
    console.log(lengths);
    for (let j = 0; j < lengths; j++) {
        var li = document.createElement("p");
        li.textContent= data[numpositionChosen].teams[j].name;
        teamList.appendChild(li);
    }
      
}


function DisplayDates(data){
        positionChosen = localStorage.getItem('positionChoses');
        let numpositionChosen = parseInt(positionChosen);
        console.log(data);
        console.log(data[0].matches);
        console.log(data[0].matches[0].begin_at);
        // var matchList = document.createElement("p"); //change append lines to whatever we're using to append to the main file
        // parentList.appendChild(matchList);
            parentList.textContent = "Tournaments:";
        for (let j = 0; j < data[numpositionChosen]["matches"].length; j++) {
            var li = document.createElement("li");
            li.textContent= data[numpositionChosen].matches[j].begin_at;
            parentList.appendChild(li);
            console.log("thihfodfsldfshilfdsdifslsdids");
            
        }
  
}


/// moredfknlsdfkldsfikjlmfdddfsjofdhuisdzuiseanooaidpiaSOsalk;APOlsdkjldsjndskjl



function DetermineStatus(){
    console.log("weeeeeeewrgfgg");
    console.log("url1 " + url1);
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
            console.log("we are hereeeeeeee");
            console.log(data);

            let displayUser = document.getElementById('fourthColumn');
            displayUser.removeChild(displayUser.childNodes[0]);
            console.log(data["data"].length)
            if (data["data"].length > 0) {
                let displayOn = document.createElement('p')
                // document.getElementById("onlineOffline").href="https://www.twitch.tv/";
                displayOn.innerText = 'Online'; 
                displayUser.append(displayOn);  
            }
            else {
                let displayOff = document.createElement('p')
                displayOff.innerText = 'Offline';
                displayUser.append(displayOff); 
                
                
            }
            document.getElementById("twiLink").href = "https://www.twitch.tv/" + chosenGame;  
            
            
        })
    
       
        
           
    
        
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





