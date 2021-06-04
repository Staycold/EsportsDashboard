// fetch(tournaments)
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
//     console.log(data);
//     var teamList = document.getElementById("team-list");
//     teamList.textContent = "Teams in Tournament";
//     console.log(teamList)
//     let lengths = data[1]["teams"].length;
//     console.log(lengths);
//     for (let j = 0; j < data[1]["teams"].length; j++) {
//     var li = document.createElement("li");
//     teamList.appendChild(li);
//     li.textContent= data[1].teams[j].name;
//     }
//   });

// fetch (tournaments) 
//   .then(function (response) {
//     return response.json();
//   })
//   .then (function (data) {
//     console.log(data);
//     var matchList = document.createElement("ul");
//     var parentList = document.getElementById("match-list");
//     matchList.textContent = "Tournament Matches";
//     parentList.appendChild(matchList)
//     let matches = data[1]["matches"].length;
//     console.log(matches);
//     for (let j = 0; j < data[1]["matches"].length; j++) {
//       var li = document.createElement("li");
//       matchList.appendChild(li);
//       li.textContent= data[1].matches[j].begin_at;
//       }

// //   })





// var pandaScoreUrl = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/";
// let display = document.getElementById('pandaScore');
// let listGames = document.getElementById('gameItems');


// function GetPandaSquareData(){
//   fetch(pandaScoreUrl)
//     .then(function (response) {
//       return response.json();
      
//     })
//   .then(function (data) {
//       console.log(data);
//       var teamList = document.getElementById("team-list");
//       teamList.textContent = "Teams in Tournament";
//       console.log(teamList)
//       // let lengths = data[1]["teams"].length;
//       console.log(lengths);
//       for (let j = 0; j < data[1]["teams"].length; j++) {
//         var li = document.createElement("li");
//         teamList.appendChild(li);
//         li.textContent= data[1].teams[j].name;
//       }
//     });
  
  
//   //fetch timestamps for COD tournament
//   fetch (pandaScoreUrl) 
//     .then(function (response) {
//       return response.json();
//     })
//     .then (function (data) {
//       console.log(data);
//       var matchList = document.createElement("ul");
//       var parentList = document.getElementById("match-list");
//       matchList.textContent = "Tournament Matches";
//       parentList.appendChild(matchList)
//       // let matches = data[1]["matches"].length;
//       console.log(matches);
//       for (let j = 0; j < data[1]["matches"].length; j++) {
//         var li = document.createElement("li");
//         matchList.appendChild(li);
//         li.textContent= data[1].matches[j].begin_at;
//       }
//     })
// }



// document.addEventListener("DOMContentLoaded", function(){
//   pandaScoreUrl + "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/tournaments?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"
//   GetInfo();
//   // console.log(url5)
// });

// listGames.addEventListener('click', (e) => {
//   if(e.target.value === "COD"){
//       console.log(e.target.value);
//       pandaScoreUrl = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/tournaments?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo";
//       GetInfo();
      


//   }
//   else if(e.target.value === "Valorant"){
//       pandaScoreUrl = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/valorant/tournaments?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo";
//       GetInfo();

//       fetch(pandaScoreUrl)
// .then(function (response) {
//   return response.json();
//   console.log(pandaScoreUrl)
// })
// .then(function (data) {
//     console.log(data);
//     var teamList = document.getElementById("team-list");
//     teamList.textContent = "Teams in Tournament";
//     console.log(teamList)
//     // let lengths = data[1]["teams"].length;
//     console.log(lengths);
//     for (let j = 0; j < data[1]["teams"].length; j++) {
//     var li = document.createElement("li");
//     teamList.appendChild(li);
//     li.textContent= data[1].teams[j].name;
//     }
//   });


// //fetch timestamps for COD tournament
// fetch (pandaScoreUrl) 
//   .then(function (response) {
//     return response.json();
//   })
//   .then (function (data) {
//     console.log(data);
//     var matchList = document.createElement("ul");
//     var parentList = document.getElementById("match-list");
//     matchList.textContent = "Tournament Matches";
//     parentList.appendChild(matchList)
//     // let matches = data[1]["matches"].length;
//     console.log(matches);
//     for (let j = 0; j < data[1]["matches"].length; j++) {
//       var li = document.createElement("li");
//       matchList.appendChild(li);
//       li.textContent= data[1].matches[j].begin_at;
//       }
//   })
//   }
// })