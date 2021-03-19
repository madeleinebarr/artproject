CREATE DATABASE testmetdb;

CREATE TABLE artists(
    artist_id BIGSERIAL NOT NULL PRIMARY KEY,
    display_name VARCHAR(200) UNIQUE,
    nationality VARCHAR(200),
    display_bio VARCHAR(400),
    birth_year VARCHAR(200),
    death_year VARCHAR(200),
    gender VARCHAR(200),
    artist_wikidata_url VARCHAR(400)
);

INSERT INTO artists(
    display_name,
    nationality,
    display_bio,
    birth_year,
    death_year,
    gender,
    artist_wikidata_url
) VALUES (
    'Madeleine Barr',
    'American',
    'Learning to program',
    '1993',
    '2100',
    'Female',
    'https://twitter.com/badeleinem'
);

/* on conflict, do nothing so we can submit a duplicate artist without throwing an error*/

INSERT INTO artists(
    display_name,
    nationality,
    display_bio,
    birth_year,
    death_year,
    gender,
    artist_wikidata_url
) VALUES (
    'Madeleine Barr',
    'French',
    'Learning to make a difference',
    '1993',
    '3000',
    'Female',
    'https://twitter.com/badeleinem'
)
ON CONFLICT(display_name) DO NOTHING;


CREATE TABLE pieces(
    objectid INT NOT NULL PRIMARY KEY,
    title VARCHAR(200),
    artist_display_name VARCHAR(200) REFERENCES artists(display_name),
    artist_nationality VARCHAR(200),
    primary_image VARCHAR(300),
    primary_image_small VARCHAR(300),
    additional_images TEXT [],
    objectname VARCHAR(100),
    medium VARCHAR(400),
    culture VARCHAR(200),
    city VARCHAR(200),
    country VARCHAR(200),
    object_date VARCHAR(200),
    object_end_date INT,
    department VARCHAR(200),
    gallery_number VARCHAR(200),
    accession_year VARCHAR(200),
    object_url VARCHAR(400),
    tags JSON,
    object_wikidata_url VARCHAR(400)
);

ALTER TABLE pieces ALTER COLUMN title SET DATA TYPE VARCHAR(1000);

/*let's change artist name and check if it still has the foreign key reference*/
/*it kept the foreign key reference*/
ALTER TABLE pieces ALTER COLUMN artist_display_name SET DATA TYPE VARCHAR(1000);

/*let's see if we can change two columns at once*/
/*we cant, you can only alter one column at a time*/
ALTER TABLE pieces ALTER COLUMN artist_nationality SET DATA TYPE VARCHAR(1000);
ALTER TABLE pieces ALTER COLUMN culture SET DATA TYPE VARCHAR(1000);
ALTER TABLE pieces ALTER COLUMN country SET DATA TYPE VARCHAR(1000);
ALTER TABLE pieces ALTER COLUMN object_date SET DATA TYPE VARCHAR(1000);
ALTER TABLE pieces ALTER COLUMN department SET DATA TYPE VARCHAR(1000);
ALTER TABLE pieces ALTER COLUMN gallery_number SET DATA TYPE VARCHAR(1000);
ALTER TABLE pieces ALTER COLUMN accession_year SET DATA TYPE VARCHAR(1000);


  INSERT INTO pieces (
    objectid,
    title,
    artist_display_name,
    artist_nationality,
    primary_image,
    primary_image_small,
    additional_images,
    objectname,
    medium,
    culture,
    city,
    country,
    object_date,
    object_end_date,
    department,
    gallery_number,
    accession_year,
    object_url,
    tags,
    object_wikidata_url
) VALUES (
    1,
    'Art Piece',
    '',
    'American',
    'https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg',
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg',
    ARRAY ['https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-004.jpg', 'https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg', 'https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-002.jpg', 'https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-001.jpg'],
    'Painting',
    'oil on canvas',
    'Lebanese',
    'New York City',
    'USA',
    'July 21, 1993',
    1985,
    'Computer Science',
    '131',
    '2021',
    'https://www.metmuseum.org/art/collection/search/45734',
    '[
    {
      "term": "Architecture",
      "AAT_URL": "http://vocab.getty.edu/page/aat/300263552",
      "Wikidata_URL": "https://www.wikidata.org/wiki/Q12271"
    },
    {
      "term": "Temples",
      "AAT_URL": "http://vocab.getty.edu/page/aat/300007595",
      "Wikidata_URL": "https://www.wikidata.org/wiki/Q44539"
    },
    {
      "term": "Hieroglyphs",
      "AAT_URL": "http://vocab.getty.edu/page/aat/300028721",
      "Wikidata_URL": "https://www.wikidata.org/wiki/Q193762"
    }
  ]',

    'https://www.wikidata.org/wiki/Q432253'
);

/* describe table*/
\d tablename;

/* to restart artist sequence*/
ALTER SEQUENCE artists_artist_id_seq RESTART WITH 1;

/*delete multiple ids*/
DELETE FROM artists WHERE artist_id IN (2, 3, 4, 5);

/* delete every row from the table (where clause is optional)*/
DELETE FROM pieces;

/* delete every row from the artists table except one*/
DELETE FROM artists WHERE artist_id NOT IN (6);

/* join tables*/

SELECT * FROM pieces
JOIN artists ON pieces.artist_display_name = artists.display_name;

/* export pieces table to .csv for viewing*/

\copy (SELECT * FROM pieces) TO 'Documents/engineering/artproject/testproject/server/viewPiecesTable.csv' DELIMITER ',' CSV HEADER;

/* export artists table to .csv for viewing*/
\copy (SELECT * FROM artists) TO 'Documents/engineering/artproject/testproject/server/viewArtistsTable.csv' DELIMITER ',' CSV HEADER;



/*FUNCTIONALITY FOR PRODUCT*/

/* see how many artists we have*/
/* this is wrong because there are repeated records for artist = null*/
/*this shows us how many rows are in the table*/
SELECT COUNT(*) FROM artists;

SELECT COUNT(*) FROM pieces;

/*see distinct artist display names instead*/
SELECT DISTINCT display_name FROM artists ORDER BY display_name;

/* see what artists are in the pieces table*/

SELECT DISTINCT artist_display_name FROM pieces ORDER BY artist_display_name;

/* see how many pieces don't have a known artist*/
SELECT * FROM pieces WHERE artist_display_name IN ('');

/* see how many pieces have a known artist*/
SELECT * FROM pieces WHERE artist_display_name NOT IN ('');

/*how many pieces have an unknown artistnationality*/
SELECT * FROM pieces WHERE artist_nationality IN ('');

/* 360/738 */


/*how many pieces have a known artistnationality*/

SELECT * FROM pieces WHERE artist_nationality NOT IN ('');

/*378/738*/

/*how many pieces have an unknown culture*/

SELECT * FROM pieces WHERE culture IN ('');

/*380/738*/


/*how many pieces have a known culture*/

SELECT * FROM pieces WHERE culture NOT IN ('');

/*358/738*/




/*SEE WHICH ARTISTS HAVE THE MOST PAINTINGS IN DESCENDING ORDER*/

SELECT artist_display_name, COUNT(*) FROM pieces GROUP BY artist_display_name ORDER BY COUNT(*) DESC;

/* known female artists */
SELECT * FROM artists WHERE gender IN ('Female');


/*known male artists*/
SELECT * FROM artists WHERE gender NOT IN ('Female') AND display_name NOT IN ('');

/* artist nationalities*/

SELECT nationality, COUNT(*) FROM artists GROUP BY nationality ORDER BY COUNT(*) DESC;

/*any patterns in birth or death year?*/

SELECT birth_year, COUNT(*) FROM artists GROUP BY birth_year ORDER BY COUNT(*) DESC;


SELECT death_year, COUNT(*) FROM artists GROUP BY death_year ORDER BY COUNT(*) DESC;

/* is anybody still alive?*/

SELECT * FROM artists WHERE death_year IN ('');


/*finding the age of the artists*/


/* working on adding age_at_death column*/
SELECT death_year::DECIMAL - birth_year::DECIMAL AS age_at_death FROM artists;

/*which nationality has the most pieces in the table?*/

SELECT artist_nationality, COUNT(*) FROM pieces GROUP BY artist_nationality ORDER BY COUNT(*) DESC;

/*what kind of objects do we have in this table?*/

SELECT objectname, COUNT(*) FROM pieces GROUP BY objectname ORDER BY COUNT(*) DESC;

/*what mediums do we have in this table?*/

SELECT medium, COUNT(*) FROM pieces GROUP BY medium ORDER BY COUNT(*) DESC;

/*what cultures do we have in this table?*/

SELECT culture, COUNT(*) FROM pieces GROUP BY culture ORDER BY COUNT(*) DESC;

/*what is the top city in this table*/

SELECT city, COUNT(*) FROM pieces GROUP BY city ORDER BY COUNT(*) DESC;

/*what is the top country in this table?*/

SELECT country, COUNT(*) FROM pieces GROUP BY country ORDER BY COUNT(*) DESC;

/* what is the top object_date?*/

SELECT object_date, COUNT(*) FROM pieces GROUP BY object_date ORDER BY COUNT(*) DESC;


/*what about object end date?*/
SELECT object_end_date, COUNT(*) FROM pieces GROUP BY object_end_date ORDER BY COUNT(*) DESC;

/*what's the most popular department?*/

SELECT department, COUNT(*) FROM pieces GROUP BY department ORDER BY COUNT(*) DESC;

/*gallery number?*/

SELECT gallery_number, COUNT(*) FROM pieces GROUP BY gallery_number ORDER BY COUNT(*) DESC;

/*accession year?*/

SELECT accession_year, COUNT(*) FROM pieces GROUP BY accession_year ORDER BY COUNT(*) DESC;

/*pattern matching to see if something includes the tag flowers, etc.?*/

/* a bunch of queries that didn't work based on a combo of my own guesses and stackoverflow suggestions*/






  


/*how many works are there with female artists?*/

SELECT * FROM pieces INNER JOIN artists ON pieces.artist_display_name = artists.display_name WHERE gender = 'Female';


/*commands for HTTP routes*/

/*get all pieces*/

SELECT * FROM pieces;

/*get all pieces from a certain artist*/

SELECT * FROM pieces WHERE artist_display_name = 'John Frederick Kensett';

/*get all pieces from a certain region*/

SELECT * FROM pieces WHERE artist_nationality = 'German' OR culture = 'German' OR country = 'Germany';

/*get all pieces from a time period*/

SELECT * FROM pieces WHERE object_end_date BETWEEN 1500 AND 1506;

SELECT * FROM pieces WHERE object_end_date BETWEEN -2000 AND 0;

SELECT * FROM pieces WHERE object_end_date BETWEEN 1900 AND 2000 ORDER BY object_end_date;

SELECT * FROM pieces WHERE object_end_date > 0;

/*order everything to put it on a timeline*/

SELECT * FROM pieces ORDER BY object_end_date;

/*THIS WORKS FOR THE TAGS*/
  SELECT * FROM pieces WHERE tags::text LIKE '%"Lakes"%';

  SELECT * FROM pieces WHERE tags::text LIKE '%"Moon"%';

  SELECT * FROM pieces WHERE tags::text LIKE '%"Medusa"%';

  SELECT * FROM pieces WHERE tags::text LIKE '%"Samson"%';

  /*you actually don't even need quotes*/

SELECT * FROM pieces WHERE tags::text LIKE '%Moon%';

SELECT * FROM pieces WHERE tags::text LIKE '%Medusa%';

SELECT * FROM pieces WHERE tags::text LIKE '%Madonna and Child%';


/*selecting with multiple tags*/

SELECT * FROM pieces WHERE tags::text LIKE '%Moon%' AND tags::text LIKE '%Landscapes%';

SELECT * FROM pieces WHERE tags::text LIKE '%Venus%' AND tags::text LIKE '%Cupid%';

/*testing if our frontend works*/

/*time pieces*/

SELECT * FROM pieces WHERE object_end_date BETWEEN 1700 AND 1800;

/*place pieces */

SELECT * FROM pieces WHERE artist_nationality = 'German' OR culture = 'German' OR country = 'Germany';

SELECT * FROM pieces WHERE artist_nationality = 'Egyptian' OR culture = 'Egyptian' OR country = 'Egypt';

SELECT * FROM pieces WHERE (object_end_date BETWEEN 1300 AND 1400) AND (artist_nationality = 'Egyptian' OR culture = 'Egyptian' OR country = 'Egypt');

SELECT * FROM pieces WHERE (object_end_date BETWEEN -5000 AND 0) AND (artist_nationality = 'Egyptian' OR culture = 'Egyptian' OR country = 'Egypt');

SELECT * FROM pieces WHERE (object_end_date BETWEEN 1800 AND 1900) AND (artist_nationality = 'German' OR culture = 'German' OR country = 'Germany');


SELECT * FROM pieces WHERE (object_end_date BETWEEN 1800 AND 1900) AND (tags::text LIKE '%Moon%');

SELECT * FROM pieces WHERE (artist_nationality = 'German' OR culture = 'German' OR country = 'Germany') AND (tags::text LIKE '%Moon%');

/*place and time and theme*/

SELECT * FROM pieces WHERE (object_end_date BETWEEN 1800 AND 1900) AND (artist_nationality = 'German' OR culture = 'German' OR country = 'Germany') AND (tags::text LIKE '%Moon%');


SELECT object_end_date, COUNT(*) FROM pieces GROUP BY object_end_date ORDER BY object_end_date;

SELECT object_end_date, COUNT(*) FROM pieces GROUP BY object_end_date ORDER BY COUNT(*) DESC;