const pool = require("./db");
const queries = require('./queries');

const getIgrice  = (req,res) => {
   pool.query(queries.getIgrice ,(error,results)=>{
    if(error) res.status(400).send("error");
    res.status(200).json(results.rows);
   })
}

const getIgriceById = (req,res) => {
    var testString = req.params.id;
let isnum = /^\d+$/.test(testString);
            
if(!isnum){
  res.status(405).send("Id mora sadrzavati samo brojeve");
} 
else {
    const id = parseInt(req.params.id);
    pool.query(queries.getIgriceById, [id], (error,results) => {
         if(error) res.status(400).send("error");
        res.status(200).json(results.rows);
    })
 }
}

const getIgriceByPublisher = (req,res) => {
    const publisher = req.params.publisher;
    pool.query(queries.getIgriceByPublisher, [publisher], (error,results) => {
         if(error) res.status(400).send("error");
        res.status(200).json(results.rows);
    })
}

const getIgriceByName = (req,res) => {
    const name = req.params.name;
    pool.query(queries.getIgriceByName, [name], (error,results) => {
        if(error) res.status(400).send("error");
        res.status(200).json(results.rows);
    })
}

const getIgriceByReview = (req,res) => {
    const review = req.params.review;
    pool.query(queries.getIgriceByReview, [review], (error,results) => {
        if(error) res.status(400).send("error");
        res.status(200).json(results.rows);
    })
}

const addIgrica =(req,res) => {
 const {id,name, žanr, publisher, voice_chat, review, pg_raiting, price, singleplayer_multiplayer_or_both, time_to_complete, } = req.body;

pool.query(queries.checkId,[id],(error,results)=>{
    if(results.rows.length){
        res.status(400).send("taj id vec postoji")
    }
})

 pool.query(queries.addIgrica,[id,name, žanr, publisher, voice_chat, review, pg_raiting, price, singleplayer_multiplayer_or_both, time_to_complete], (error, results)=>{
     if(error) res.status(400).send("error");
    res.status(201).send("igrica uspjesno dodana");
 })
}

const deleteIgrica = (req,res) =>{
var testString = req.params.id;
let isnum = /^\d+$/.test(testString);
            
if(!isnum){
  res.status(405).send("Id mora sadrzavati samo brojeve");
} 
else {
    const id = parseInt(req.params.id);
    pool.query(queries.getIgriceById,[id],(error,results)=> {
        if(!results.rows.length){
            res.status(404).send("nepostoji igrica s tim id")
        }

        pool.query(queries.deleteIgrica, [id], (error,results)=>{
          if(error) res.status(400).send("error");
         res.status(200).send("igrica uspjesno obrisana");
        })
    });
    }
}

const upadteIgrica = (req,res)=>{
    var testString = req.params.id;
let isnum = /^\d+$/.test(testString);
            
if(!isnum){
  res.status(405).send("Id mora sadrzavati samo brojeve");
} 
else {
    const id = parseInt(req.params.id);
    const {name} = req.body;
    pool.query(queries.getIgriceById, [id],(error,results)=> {
        if(!results.rows.length){
            res.status(404).send("nepostoji igrica s tim id")
        }

        pool.query(queries.updateIgrica, [name, id], (error,results)=>{
             if(error) res.status(400).send("error");
            res.status(200).send("Ime igrice uspjesno azurirano");
           })
    });
 }
}


module.exports = {
    getIgrice, getIgriceById,
    getIgriceByPublisher, getIgriceByName,
    getIgriceByReview, addIgrica, deleteIgrica,
    upadteIgrica
};