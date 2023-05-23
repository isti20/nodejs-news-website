const express = require('express')
const newsRoute = express()
const path = require('path')
const axios = require('axios')

// Template engine setup
newsRoute.set('view engine', 'ejs')
newsRoute.set('views', path.join(__dirname, '..', 'views'))

// Route
newsRoute.get('/', async(req, res) => {
    res.status(200).render('news.ejs')
})

module.exports = newsRoute;