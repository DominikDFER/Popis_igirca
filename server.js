const express = require('express');
const  igriceRoutes1 = require('./routes1')
const  igriceRoutes2 = require('./routes2')
const  igriceRoutes3 = require('./routes3')
const  igriceRoutes4 = require('./routes4')
const app = express();
const port = 3000;

app.use(express.json());

app.get("/",(res,req) =>{
 
});

app.use("/api/v1/igrice",igriceRoutes1);
app.use("/api/v2/igrice",igriceRoutes2);
app.use("/api/v3/igrice",igriceRoutes3);
app.use("/api/v4/igrice",igriceRoutes4);

app.listen(port ,() => console.log(`app listening on port ${port}`));