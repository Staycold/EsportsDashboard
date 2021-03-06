//dumping info - COD only - players, matches, series, tournaments, leagues - can pare down as we continue

var codTournaments = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/tournaments?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"
var valorantTournaments = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/valorant/tournaments?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

let display = document.getElementById('pandaScore');

//fetching players names in tournaments
fetch(codTournaments)
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


//fetch timestamps for COD tournament
fetch (codTournaments) 
  .then(function (response) {
    return response.json();
  })
  .then (function (data) {
    console.log(data);
    var matchList = document.createElement("ul");
    var parentList = document.getElementById("match-list");
    matchList.textContent = "Tournament Matches:";
    parentList.appendChild(matchList)
    let matches = data[1]["matches"].length;
    console.log(matches);
    for (let j = 0; j < data[1]["matches"].length; j++) {
      var li = document.createElement("li");
      matchList.appendChild(li);
      li.textContent= data[1].matches[j].begin_at;
      }

  })


  //fetching valorant team names in tournament
  fetch(valorantTournaments)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(data);
      var teamList = document.getElementById("team-list");
      teamList.textContent = "Teams in Tournament:";
      console.log(teamList)
      let lengths = data[0]["teams"].length;
      console.log(lengths);
      for (let j = 0; j < data[0]["teams"].length; j++) {
      var li = document.createElement("li");
      teamList.appendChild(li);
      li.textContent= data[0].teams[j].name;
      }
    });
  
//fetching valorant tournament winner - replace console.log with pushing to html
fetch(valorantTournaments)
      .then(function(response) {
        return response.json();
      })
      .then (function (data) {
        console.log(data);
        console.log(data[26].winner_id);
        for (let j=0; j < data[26]["teams"].length; j++) {
          if (data[26].teams[j].id === data[26].winner_id) {
            console.log(data[26].teams[j].name)
            let displayCW = document.createElement('p');
            displayCW.innerText = (data[26].winner_id);
            display.append(displayCW) 
            }
        }
      })


//fetching data for individual valorant match winners - replace console.log with pushing to html
fetch(valorantTournaments) 
.then(function(response) {
  return response.json();
})
.then (function (data) {
  console.log(data)
  console.log(data[26].matches[1].winner_id);
  for (let j=0; j < data[26]["teams"].length; j++) {
    if (data[26].teams[j].id === data[26].matches[1].winner_id) {
      console.log(data[26].teams[j].name)
      let displayVW = document.createElement('p');
        displayVW.innerText = (data[26].matches[1].winner_id); 
        display.append(displayVW); 
    }
  }
})