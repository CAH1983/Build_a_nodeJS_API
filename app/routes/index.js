// index.js is our Master route files
const noteRoutes = require('./notes_routes');

module.exports = function(app, db) {
    noteRoutes(app,db);
}


