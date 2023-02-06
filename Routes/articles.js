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

 router.get('/api/articles/:id', (req, res) => {
    Article.findById(req.params.id)
    // Return all Articles as an Array
    .then((article) => {
     if(article) {
        res.status(200).json({article: article});
     } else {
        // if we couldnt find a document with the matching id
        res.status(404).json({
            error: {
                name: 'DocumentNotFoundError',
                message: 'The provided ID doesnt match any doc'
            }
        })
     }
    })
    // Catch any errors that might occur
    .catch((error) => {
        res.status(500).json({ error: error})
    })
 })

/**
 * Action:          DESTROY
 * Method:          DELETE
 * URI:             /api/articles/5d664b8b68b4f5092aba18e9
 * Description:     Delete An Article by Article ID
 */
router.delete('/api/articles/:id', (req, res) => {
    Article.findById(req.params.id)
      .then((article) => {
        if (article) {
          // Pass the result of Mongoose's `.remove` method to the next `.then`
          return article.remove();
        } else {
          // If we coudn't find a document with the matching ID
          res.status(404).json({
            error: {
              name: 'DocumentNotFoundError',
              message: 'The provided ID doesn\'t match any documents'
            }
          });
        }
      })
      .then(() => {
        // If the deletion succeeded, return 204 and no JSON
        res.status(204).end();
      })
      // Catch any error that might occur
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  });

    /**
  * Action:     Update
  * Method:     PUT/PATCH
  * URI:        /api/articles/:id(number will be here)
  * Description: Update articles by id
  */

    router.delete('/api/articles/:id', (req, res) => {
        Article.findById(req.params.id)
          .then((article) => {
            if (article) {
              // Pass the result of Mongoose's `.update` method to the next `.then` on promise chain
              return article.update(req.body.article);
            } else {
              // If we coudn't find a document with the matching ID
              res.status(404).json({
                error: {
                  name: 'DocumentNotFoundError',
                  message: 'The provided ID doesn\'t match any documents'
                }
              });
            }
          })
          .then(() => {
            // If the update succeeded, return 204 and no JSON
            res.status(204).end();
          })
          // Catch any error that might occur
          .catch((error) => {
            res.status(500).json({ error: error });
          });
      });

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