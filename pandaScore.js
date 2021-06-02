//dumping info - COD only - players, matches, series, tournaments, leagues - can pare down as we continue

var players = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/players?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

var leagues = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/leagues?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

var matches ="https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/matches?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

var series = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/series?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

var teams = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/teams?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

var tournaments = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/tournaments?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

let scores = [];

fetch(players)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});

fetch(leagues)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});

fetch(matches)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  console.log(data[45].results)
  console.log(data[45].results[0, 1]);
});

fetch(series)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});

// fetch(teams)
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
//   console.log(data);
//   for(var i = 0; i < data.length; i++) {
//     //for (var f = 0, f = )
  
//   console.log(data[i].players);
//   }
// });

fetch(tournaments)
.then(function (response) {
  return response.json();
})
.then(function (data) {
    console.log(data);
    var teamList = document.getElementById("team-list");
    teamList.textContent = "Teams in Tournament";
    console.log(teamList)
    let lengths = data[1]["teams"].length;
    console.log(lengths);
    for (let j = 0; j < data[1]["teams"].length; j++) {
    var li = document.createElement("li");
    teamList.appendChild(li);
    li.textContent= data[1].teams[j].name;
    }
  });

fetch (tournaments) 
  .then(function (response) {
    return response.json();
  })
  .then (function (data) {
    console.log(data);
    var matchList = document.createElement("ul");
    var parentList = document.getElementById("match-list");
    matchList.textContent = "Tournament Matches";
    parentList.appendChild(matchList)
    let matches = data[1]["matches"].length;
    console.log(matches);
    for (let j = 0; j < data[1]["matches"].length; j++) {
      var li = document.createElement("li");
      matchList.appendChild(li);
      li.textContent= data[1].matches[j].begin_at;
      }

  })









