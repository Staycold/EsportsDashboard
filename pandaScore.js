//dumping info - COD only - players, matches, series, tournaments, leagues - can pare down as we continue

var players = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/players?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

var leagues = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/leagues?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

var matches ="https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/matches?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

var series = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/series?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

var teams = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/teams?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

var tournaments = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/codmw/tournaments?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

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
});

fetch(series)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});

fetch(teams)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});

fetch(tournaments)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});
