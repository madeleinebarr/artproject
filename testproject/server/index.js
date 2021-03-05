const express = require("express");
const app = express();

const cors = require("cors");
const pool = require("./db"); 

app.use(cors());
app.use(express.json()); 

// ROUTES

// get all pieces

app.get("/pieces", async (req, res) => {
    try {
        const allPieces = await pool.query("SELECT * FROM pieces");
        res.json(allPieces.rows);
    } catch (err) {
        console.log(err.message);
    }
})

// get one specific piece by its ID
// we can use this to populate data about a piece when the user clicks on it

app.get("/pieces/objectID/:objectID", async(req, res) => {
    try {
        console.log(req.params);
        const { objectID } = req.params;
        const piece = await pool.query("SELECT * FROM pieces WHERE objectID = $1", [objectID]);

        res.json(piece.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

// get all pieces from a certain artist

app.get("/pieces/artistDisplayName/:artistDisplayName", async(req, res) => {
    try {
        console.log(req.params);
        const { artistDisplayName } = req.params;
        const artistPieces = await pool.query("SELECT * FROM pieces WHERE artist_display_name = $1", [artistDisplayName]);

        res.json(artistPieces.rows);
    } catch (err) {
        console.log(err.message);
    }
})

// get all pieces from a geographic region, this one works

app.get("/pieces/region/:artistNationality/:culture/:country", async(req, res) => {
    try {
        console.log(req.params);
        const { artistNationality, culture, country } = req.params;
        const regionPieces = await pool.query("SELECT * FROM pieces WHERE artist_nationality = $1 OR culture = $2 OR country = $3;", [artistNationality, culture, country]);

        res.json(regionPieces.rows);
    } catch (err) {
        console.log(err.message);
    }
})

// get all pieces in a range of dates

app.get("/pieces/daterange/:rangeStart/:rangeEnd", async(req, res) => {
    try {
        console.log(req.params);
        const { rangeStart, rangeEnd } = req.params;
        const dateRangePieces = await pool.query("SELECT * FROM pieces WHERE object_end_date BETWEEN $1 AND $2;", [rangeStart, rangeEnd]);

        res.json(dateRangePieces.rows);
    } catch (err) {
        console.log(err.message);
    }
})

// get all pieces with one tag

app.get("/pieces/tags/:term", async(req, res) => {
    try {
        console.log(req.params);
        const { term } = req.params;
        const tagPieces = await pool.query("SELECT * FROM pieces WHERE tags::text LIKE ('%' || $1 || '%');", [term]);

        res.json(tagPieces.rows);
    } catch (err) {
        console.log(err.message);
    }
})

// get all pieces with multiple tags

app.get("/pieces/tags/:term1/:term2", async(req, res) => {
    try {
        console.log(req.params);
        const { term1, term2 } = req.params;
        const tagPieces = await pool.query("SELECT * FROM pieces WHERE tags::text LIKE ('%' || $1 || '%') AND tags::text LIKE ('%' || $2 || '%');", [term1, term2]);

        res.json(tagPieces.rows);
    } catch (err) {
        console.log(err.message);
    }
})

// get all pieces with female artists

app.get("/pieces/female", async(req, res) => {
    try {
        // console.log(req.params);
        // const { term1, term2 } = req.params;
        const femalePieces = await pool.query("SELECT * FROM pieces INNER JOIN artists ON pieces.artist_display_name = artists.display_name WHERE gender = 'Female';");

        res.json(femalePieces.rows);
    } catch (err) {
        console.log(err.message);
    }
})


// get one specific artist by their name
// we can use this to populate data about an artist when the user clicks on it

app.get("/artists/:displayname", async(req, res) => {
    try {
        console.log(req.params);
        const { displayname } = req.params;
        const artist = await pool.query("SELECT * FROM artists WHERE display_name = $1", [displayname]);

        res.json(artist.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})


// get all artists
// not sure if we need this one

app.get("/artists", async (req, res) => {
    try {
        const allArtists = await pool.query("SELECT * FROM artists");
        res.json(allArtists.rows);
    } catch (err) {
        console.log(err.message);
    }
})




app.listen(5000, () => {
    console.log("your new index.js file has started on port 5000, hooray!");
})