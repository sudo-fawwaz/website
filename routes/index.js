var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Homepage' });
});

// Admin Pages
router.get('/login', (req, res, next) =>{
  res.render('admin_pages/login', {title : 'Login'})
});

router.get('/admin', (req, res, next) =>{
  res.render('admin_pages/dashboard', {title: "Dashboard", topnav: "Halaman Utama"})
})

router.get('/admin/add', (req, res, next) =>{
  res.render('admin_pages/add_article', {title: "Create Article", topnav : "Artikel Baru"})
})
router.get('/admin/modify', (req, res, next) =>{
  res.render('admin_pages/edit_article', {title: "Edit Article", topnav : "Edit Artikel"})
})
router.get('/admin/delete', (req, res, next) =>{
  res.render('admin_pages/delete_article', {title: "Delete Article", topnav : "Buang Artikel"})
})

// Article Pages
//Kedepannya di ganti article/:param
router.get('/article/1', (req, res, next) => {
  res.render('article_pages/article-1', {title : "Aqidah"});
})

module.exports = router;
