



var tournaments = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/tournaments?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"



fetch(tournaments)
.then(function (response) {
  return response.json();
})
.then(function (data) {
 
  var mostRecent =  document.getElementById("recent-tournament");
  mostRecent.innerHTML = data[1].teams[2].name;

  var teamList = document.getElementById("team-list");
  teamList.textContent = "Teams";
  data.forEach(item=>teamNames(data));




  function teamNames (streams) {
    var names = []
console.log(streams)
    for( var i = 0; i < streams.length; i++){
      var teams = streams[i].teams
      
      
      for( let team of teams){
        // console.log("the ",team)
        names.push(team.name)
      }
      
    }
    // console.log(names)
    return names ;



  }


    // for( i = 0; i < data.length; i++){
    //   var teams = data.teams[i]
    // console.log("these are the teams, " + teams)
    // var li = document.createElement("li");
    // li.textContent = data[1].teams[i].name;
    // teamList.appendChild(li);
    // console.log(item)
//   }}
})
