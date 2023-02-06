// Require neccessary NPM Package 
const express = require('express')

//Require Mongoose Model for Article 
 const Article = require('./../models/article');

 // Instatiate a Router (mini app that only handles rputes)
 const router = express.Router();

 /**
  * Action:     Index
  * Method:     GET
  * URI:        /api/articles
  * Description: Get all articles
  */

 router.get('/api/articles', (req, res) => {
    Article.find()
    // Return all Articles as an Array
    .then((articles) => {
     res.status(200).json({articles: articles})
    })
    // Catch any errors that might occur
    .catch((error) => {
        res.status(500).json({ error: error})
    })
 })

 /**
  * Action:     Show
  * Method:     GET
  * URI:        /api/articles/:id(number will be here)
  * Description: Get articles by id
  */

  /**
  * Action:     Destroy
  * Method:     DELETE
  * URI:        /api/articles/:id(number will be here)
  * Description: Delete articles by id
  */

    /**
  * Action:     Update
  * Method:     PUT/PATCH
  * URI:        /api/articles/:id(number will be here)
  * Description: Update articles by id
  */

/**
  * Action:     Create
  * Method:     POST
  * URI:        /api/articles/:id(number will be here)
  * Description: Create a new article
  */

router.post('/api/articles', (req, res) => {
    Article.create(req.body.article)
    // On a successful create action, respond with 201
    // HTTP Status and the content of the new Article
    .then((newArticle) => {
        res.status(201).json({ article: newArticle})
    })
    //Catch any error
    .catch((error) => {
        res.status(500).json({ error: error})
    
    })
})

 // Export the Router so we can user it in the server.js file
 module.exports = router;