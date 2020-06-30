var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Homepage' });
});

// Admin Pages
router.get('/admin', (req, res, next) =>{
  res.render('admin_pages/dashboard', {title: "Dashboard"})
})

router.get('/article/add', (req, res, next) =>{
  res.render('admin_pages/add_article', {title: "Create Article"})
})

module.exports = router;
