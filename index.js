app.get('/translate/yoda.json',(req,res) => { 
    console.log(req.query.text)

    res.json({
        'success':{
            'total':1
        },
        "contents":{
            'translated':'testing data',
            'text':req.query.text || 'text missing',
            'translation':'yoda'
        }
})
});


app.listen(3000, () => {
    console.log('server started');
});