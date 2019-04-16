module.exports = function(app,db) {
    app.post('/notes', (req, res) => {
        const note = { 
            text: req.body.body, 
            title: req.body.title 
        }
        // we'll create the note here
        db.collection('notes').insert(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'an error has occured'})
            } else {
                res.send(result.ops[0])
            }
        });
    })
}