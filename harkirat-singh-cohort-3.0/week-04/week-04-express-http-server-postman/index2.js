const express = require('express')
const app = express()

const users = [{
  name: "john",
  kidneys: [{
    healthy: false
  }]
}];

app.get('/', function(req, res){
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberofHealthyKidneys = 0;
  for(let i=0; i<johnKidneys.length; i++){
    if(johnKidneys[i].healthy){
      numberofHealthyKidneys = numberofHealthyKidneys + 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberofHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberofHealthyKidneys,
    numberOfUnhealthyKidneys
  })
})

app.post('/', function(req, res){
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg: "Done!"
  })
})

app.listen(3000);