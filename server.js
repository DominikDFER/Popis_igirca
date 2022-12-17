const express = require('express');
const  igriceRoutes = require('./routes')
const app = express();
const port = 3000;

app.use(express.json());

app.get("/",(res,req) =>{
 
});

app.use("/api/igrice",igriceRoutes);

app.listen(port ,() => console.log(`app listening on port ${port}`));