const getIgrice = "SELECT * FROM Igrice";
const getIgriceById = "SELECT * FROM  Igrice where id = $1";
const getIgriceByPublisher = "SELECT * FROM  Igrice where publisher = $1";
const getIgriceByName = "SELECT * FROM  Igrice where name = $1";
const getIgriceByReview = "SELECT * FROM  Igrice where review = $1";
const checkId = "Select i FROM Igrice WHERE i.id = $1";
const addIgrica = "INSERT into popis_igirca(id,name, žanr, publisher, voice_chat, review, pg_raiting, price, singleplayer_multiplayer_or_both, time_to_complete) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
const deleteIgrica = "DELETE FROM popis_igrica WHERE id = $1";
const updateIgrica = "UPDATE popis_igrica SET name = $1 WHERE is = $2";

module.exports ={
    getIgrice, getIgriceById,
    getIgriceByPublisher,getIgriceByName,
    getIgriceByReview, addIgrica, checkId,
    deleteIgrica, updateIgrica
}