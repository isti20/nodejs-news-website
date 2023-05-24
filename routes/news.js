const express = require('express')
const newsRoute = express()
const path = require('path')
const axios = require('axios')

// Template engine setup
newsRoute.set('view engine', 'ejs')
newsRoute.set('views', path.join(__dirname, '..', 'views'))

// Route
newsRoute.get('/', async(req, res) => {
    // res.status(200).render('news.ejs')
    try {
        var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1235311a10564850bd45dd4a2400da4c';
        
        const getNews = await axios.get(url);
        // console.log(getNews);
        res.render('news.ejs', { articles: getNews.data.articles})
      } catch (error) {
        if(error.response) {
            console.log(error)
        }
      }
})

newsRoute.get('/news/:category', async(req, res) => {
  var category = req.params.category;
  try {
      var url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1235311a10564850bd45dd4a2400da4c`;
      
      const getNews = await axios.get(url);
      // console.log(getNews);
      res.render('category.ejs', { articles: getNews.data.articles})
    } catch (error) {
      if(error.response) {
          console.log(error)
      }
    }
})

module.exports = newsRoute;