
var test="https://api.pandascore.co/codmw/matches?filter[id]=590448&token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo"

var url='https://api.pandascore.co/lol/champions?token=_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo'

fetch(test, {
    mode: "no-cors",
   Authorization: 'Bearer' + '_Sb6lpEcpdk-URomVTPLYWMJg3OTz9gQvy8sWyM3NcEhLMuyFyo'
})
  .then(function (response) {
      console.log(response)
      console.log(response.text())
//line 13 throwing errors - "unexpected end of input"
    return response.json();
  })
//   .then(function (data) {
//     console.log(data);
//   });