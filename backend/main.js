const cors = require('cors')
const express = require('express')
const families = require('./resources/families.json')
const app = express();

app.use(cors())
app.use(express.json())


app.get('/families', (req,res) => {
  const { skip, take } = req.query;
  const skipNum = parseInt(skip, 10);
  const takeNum = parseInt(take, 10);
  
  const paginatedFamilies = families.slice(skipNum, skipNum + takeNum);
  return res.json(paginatedFamilies);
})


app.listen(8080, () => {
  console.log('listening on port 8080')
  console.log("ROUTE /families&skip={}&take={} Initialized!")
})