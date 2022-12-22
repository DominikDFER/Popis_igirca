const getIgrice = "SELECT * FROM popis_igrica";
const getIgriceById = "SELECT * FROM  popis_igrica where id = $1";
const getIgriceByPublisher = "SELECT * FROM  popis_igrica where publisher = $1";
const getIgriceByName = "SELECT * FROM  popis_igrica where name = $1";
const getIgriceByReview = "SELECT * FROM  popis_igrica where review = $1";
const checkId = "Select i FROM popis_igrica i WHERE i.id = $1";
const addIgrica = "INSERT into popis_igrica(id,name, žanr, publisher, voice_chat, review, pg_raiting, price, singleplayer_multiplayer_or_both, time_to_complete) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
const deleteIgrica = "DELETE FROM popis_igrica WHERE id = $1";
const updateIgrica = "UPDATE popis_igrica SET name = $1 WHERE id = $2";

module.exports ={
    getIgrice, getIgriceById,
    getIgriceByPublisher,getIgriceByName,
    getIgriceByReview, addIgrica, checkId,
    deleteIgrica, updateIgrica,
}