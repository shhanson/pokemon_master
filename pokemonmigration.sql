DROP TABLE IF EXISTS pokemon;
CREATE TABLE pokemon(
id serial,
pokedex_id integer,
name varchar(50),
type varchar(10),
evolves_from varchar(50),
image_url text
);

