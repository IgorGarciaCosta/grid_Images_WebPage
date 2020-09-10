const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { request } = require('http')

const app = express()
const port = 3000 //port provided by heroku or 3000 if dont exists


//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
    //Setup handleBars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
    //Setup static directory to serve
app.use(express.static(publicDirectoryPath))


//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


// app.com/help
const helpPageRoute = path.join(__dirname, '../public/help')
app.use(express.static(helpPageRoute))

//app.com/about
const aboutPageRoute = path.join(__dirname, '../public/about')
app.use(express.static(aboutPageRoute))


//render index page
//req:request object
//res: reponse object
app.get('', (req, res) => {
    //render one of handlebars templates
    res.render('index', {
        title: 'Testing Page',
        name: 'Igor Garcia'
    })

})

app.get('/aliens', (req, res) => {
    res.render('aliens', {
        title: 'Aliens images',
        name: 'Igor Garcia'
    })

})

app.get('/cats', (req, res) => {
    res.render('cats', {
        title: 'Cats images',
        name: 'Igor Garcia'
    })

})


app.get('*', (req, res) => {
    res.render('404', {
        title: 404,
        errorMessage: 'Page not found.',
        name: 'Igor Garcia'
    })
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})