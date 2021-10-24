// favorites model
// Copyright 2021 Max Sprauer
//
// The methods in this model all use async/await to behave in a synchronous manner.
//TODO There is a lot of low-hanging fruit here: cache connections, cache results, etc.

const { makeDb } = require('mysql-async-simple');

const mysql = require('mysql');
const conn = mysql.createConnection({
    // Obviously I would not usually hardcode a password, much less a whole config
    // debug: ['ComQueryPacket', 'RowDataPacket'],
    host: 'localhost',
    user: 'gist',
    password: 'gist',     
    database: 'gist'
});

module.exports = {  
    // Returns an array of favorite gist IDs
    getFavorites: async function ()
    {
        var gistIds = [];
        const db = makeDb();

        try {
            await db.connect(conn);

            //TODO Limit or paginate here?
            gistIds = await db.query(conn, 'SELECT gist_id from favorite order by gist_id');
        } catch (err) {
            console.error(err);
            throw error;
        } finally {
            await db.close(conn);
            return gistIds;
        }
    },

    addFavorite: async function (gistId)
    {
        const db = makeDb();

        try {
            await db.connect(conn);

            //TODO Do we care about returning something to indicate duplicate insert?
            await db.query(conn, 'REPLACE INTO favorite VALUES (null, ?)', [gistId]);
        } catch (err) {
            console.error(err);
            throw error;
        } finally {
            await db.close(conn);
            return gistId;
        }
    },

    deleteFavorite: async function (gistId)
    {
        const db = makeDb();

        try {
            await db.connect(conn);

            //TODO Do we care if this ID doesn't exist?
            gistIds = await db.query(conn, 'DELETE FROM favorite WHERE gist_id = ?', [gistId]);
        } catch (err) {
            console.error(err);
            throw error;
        } finally {
            await db.close(conn);
            return gistId;
        }
    }
}