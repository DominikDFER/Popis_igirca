--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: platforms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.platforms (
    id integer,
    name text
);


ALTER TABLE public.platforms OWNER TO postgres;

--
-- Name: popis_igrica; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.popis_igrica (
    id integer,
    name text,
    "žanr" text,
    publisher text,
    voice_chat text,
    year_of_release numeric,
    review text,
    pg_rating numeric,
    price numeric,
    singleplayer_multiplayer_or_both text,
    time_to_complete numeric
);


ALTER TABLE public.popis_igrica OWNER TO postgres;

--
-- Name: vagame_id; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vagame_id (
    vg_id integer,
    va_id integer
);


ALTER TABLE public.vagame_id OWNER TO postgres;

--
-- Name: voice_actors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.voice_actors (
    id integer,
    name text,
    surname text
);


ALTER TABLE public.voice_actors OWNER TO postgres;

--
-- Data for Name: platforms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.platforms (id, name) FROM stdin;
\.


--
-- Data for Name: popis_igrica; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.popis_igrica (id, name, "žanr", publisher, voice_chat, year_of_release, review, pg_rating, price, singleplayer_multiplayer_or_both, time_to_complete) FROM stdin;
1	Red dead redemption 2	Vestern	Rockstar games	yes	2018	very positive	0	60	both	49
2	Star Wars Battlefron 2	Shooter	Electronic Arts	yes	2015	very positive	16	40	both	57
3	League of Legends	MOBA	Riot Games	yes	2009	positive	10	0	both	0
4	Dead by Daylight	Action	Behaviour Interactive Inc.	no	2016	very positive	18	0	multiplayer	0
5	Grand Theft Auto 5	Action	Rockstar Games	no	2015	very positive	18	24	both	31
6	Transistor	Action	Supergiant Games	no	2014	very positive	12	17	singleplayer	15
7	Hades	RPG	Supergiant Games	no	2020	overwhelmingly positive	0	21	singleplayer	23
8	Dota 2	MOBA	Valve	no	2013	mostly positive	0	0	multiplayer	0
9	The Legend of Zelda: Breath of the Wild	Action-adventure	Nitendo	no	2017	very positive	10	60	singleplayer	50
10	World of Tanks	Vehicular combat	Wargaming	yes	2010	very positive	7	0	multiplayer	0
\.


--
-- Data for Name: vagame_id; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vagame_id (vg_id, va_id) FROM stdin;
1	1
1	2
2	2
2	3
2	4
3	5
3	6
4	7
4	8
5	9
5	10
6	11
6	12
7	13
7	14
8	15
8	16
9	17
9	18
10	19
10	20
\.


--
-- Data for Name: voice_actors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.voice_actors (id, name, surname) FROM stdin;
1	Roger	Clark
2	Benjamin Byron	Davis
3	Janina	Gavankar
4	Matthew	mercer
5	JB	Blanc
6	Melissa	Hutchison
7	Dylan	Kushner
8	Emelina 	 Mårtensson
9	Ned	Luke
10	Shawn	Fonteno
11	Logan	Cunningham
12	Ashley	Barrett
13	Darren	Korb
14	Logan	Cunningham
15	Alejandra	Reynoso
16	Ashly	Burch
17	Kengo	Takanashi
18	Patricia	Summersett
19	Adam	Behr
20	Caitlyn	Elizabeth
\.


--
-- PostgreSQL database dump complete
--

