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