drop table if exists Popis_igrica;
drop table if exists Voice_actors;
drop table if exists platforms;
drop table if exists VAGAME_ID;

CREATE TABLE  Popis_igrica (
    id integer,
	name text,
    žanr text,
	publisher text,
	voice_chat text,
	year_of_release numeric,
	review text,
	PG_rating numeric,
	price numeric, /* euros */
	singleplayer_multiplayer_or_both text,
	time_to_complete numeric  /* hours  for stroyline if it has 0 if it doesnt have*/ 
);

CREATE TABLE  Voice_actors (
	id integer,
	name text,
    surname text
);

CREATE TABLE  platforms (
	id integer,
	name text
);

CREATE TABLE  VAGAME_ID(
VG_ID integer,
VA_ID integer	
); 

SELECT * FROM Popis_igrica;
SELECT * FROM Voice_actors;
SELECT * FROM platforms;
SELECT * FROM VAGAME_ID;



INSERT INTO Popis_igrica (id, name, žanr, publisher, voice_chat,  year_of_release, review, PG_rating, price, singleplayer_multiplayer_or_both, time_to_complete ) VALUES
   (1,'Red dead redemption 2', 'Vestern', 'Rockstar games', 'yes',   2018, 'very positive', 0, 60, 'both', 49 ),
   (2,'Star Wars Battlefron 2', 'Shooter', 'Electronic Arts', 'yes',  2015, 'very positive', 16, 40, 'both', 57 ),
   (3,'League of Legends', 'MOBA', 'Riot Games', 'yes',  2009, 'positive', 10, 0, 'both', 0 ),
   (4,'Dead by Daylight', 'Action', 'Behaviour Interactive Inc.', 'no',  2016, 'very positive', 18, 0, 'multiplayer', 0),   
   (5,'Grand Theft Auto 5', 'Action', 'Rockstar Games', 'no',  2015, 'very positive', 18, 24, 'both', 31 ),   
   (6,'Transistor','Action', 'Supergiant Games', 'no', 2014, 'very positive', 12, 17, 'singleplayer', 15 ),   
   (7,'Hades', 'RPG', 'Supergiant Games', 'no', 2020, 'overwhelmingly positive', 0, 21, 'singleplayer', 23 ),   
   (8,'Dota 2', 'MOBA', 'Valve', 'no',  2013, 'mostly positive', 0, 0, 'multiplayer', 0 ),   
   (9,'The Legend of Zelda: Breath of the Wild', 'Action-adventure', 'Nitendo', 'no',  2017, 'very positive', 10, 60, 'singleplayer', 50),   
   (10,'World of Tanks', 'Vehicular combat', 'Wargaming', 'yes',  2010, 'very positive', 7, 0, 'multiplayer', 0);
   



INSERT INTO Voice_actors(id,name,surname) VALUES
(1,'Roger','Clark'),
(2,'Benjamin Byron','Davis'),
(3,'Janina','Gavankar'),
(4,'Matthew','mercer'),
(5,'JB','Blanc'),
(6,'Melissa','Hutchison'),
(7,'Dylan','Kushner'),
(8,'Emelina ',' Mårtensson'),
(9,'Ned','Luke'),
(10,'Shawn','Fonteno'),
(11,'Logan','Cunningham'),
(12,'Ashley','Barrett'),
(13,'Darren','Korb'),
(14,'Logan','Cunningham'),
(15,'Alejandra','Reynoso'),
(16,'Ashly','Burch'),
(17,'Kengo','Takanashi'),
(18,'Patricia','Summersett'),
(19,'Adam','Behr'),
(20,'Caitlyn','Elizabeth');

insert into VAGAME_ID(VG_ID,VA_ID) values
(1,1),
(1,2),
(2,2),
(2,3),
(2,4),
(3,5),
(3,6),
(4,7),
(4,8),
(5,9),
(5,10),
(6,11),
(6,12),
(7,13),
(7,14),
(8,15),
(8,16),
(9,17),
(9,18),
(10,19),
(10,20);

COPY (SELECT distinct 
    popis_igrica.name,
    popis_igrica.žanr,
    popis_igrica.publisher,
    popis_igrica.voice_chat,
    popis_igrica.review,
    popis_igrica.pg_rating,
    popis_igrica.price,
    popis_igrica.singleplayer_multiplayer_or_both,
    popis_igrica.time_to_complete,
    voice_actors.name,
    voice_actors.surname
    from popis_igrica join vagame_id on popis_igrica.id = vagame_id.vg_id join voice_actors on vagame_id.va_id = voice_actors.id) TO 'C:\FER\Popis_igrica.csv'  WITH DELIMITER ',';
		
COPY(
SELECT array_to_json(array_agg(row_to_json(popis)))
FROM (
SELECT name as "name",
	   žanr as "žanr",
	   publisher as "publisher",
	   voice_chat as "voice_chat",
	   review as "review",
	   pg_rating as "pg_rating",
	   price as "price",
	   singleplayer_multiplayer_or_both as "singleplayer_multiplayer_or_both",
	   time_to_complete as "time_to_complete",
	(
		SELECT array_to_json(array_agg(row_to_json(va)))
		FROM (
		SELECT name as "name",
			   surname as "surname"
			from Voice_Actors
			where popis_igrica.id = voice_actors.id
		) as va
	) "Voice_Actors"
	from popis_igrica
) as popis ) TO 'C:\FER\Popis_igrica.json';

 