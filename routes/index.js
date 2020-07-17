var express = require('express');
var router = express.Router();
var helmet = require('helmet')
router.use(helmet())
var mysql = require('mysql');

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'oreosec',
	password: 'fuckyou',
	database: 'crud_db'
});
 
//connect ke database
conn.connect((err) =>{
	if(err) throw err;
	console.log('Mysql Connected...');
});

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('index', { title: 'Homepage' });
});

// Admin Pages
router.get('/login', (req, res, next) =>{
	res.render('admin_pages/login', {title : 'Login'})
});

router.get('/admin',(req, res, next) => {
	let sql = "SELECT * FROM article";
	let query = conn.query(sql, (err, results) => {
	  if(err) throw err;
	  res.render('admin_pages/dashboard',{
		 results: results,
		 title: "Dashboard",
		 topnav: "Halaman Utama"
	  });
	});
 });

router.get('/admin/add', (req, res, next) =>{
	res.render('admin_pages/add_article', {title: "Create Article", topnav : "Artikel Baru"})
})

router.post('/admin/save_article',(req, res) => {
	let data = {title: req.body.title, tag: req.body.tag, content: req.body.content};
	let sql = "INSERT INTO article SET ?";
	let query = conn.query(sql, data,(err, results) => {
		if(err) throw err;
		res.redirect('/admin/add');
	});
});


router.get('/admin/modify',(req, res, next) => {
	let sql = "SELECT * FROM article";
	let query = conn.query(sql, (err, results) => {
	  if(err) throw err;
	  res.render('admin_pages/edit_article',{
		 results: results,
		 title: "Edit Article",
		 topnav: "Edit Artikel"
	  });
	});
 });


router.get('/admin/delete',(req, res, next) => {
	let sql = "SELECT * FROM article";
	let query = conn.query(sql, (err, results) => {
	  if(err) throw err;
	  res.render('admin_pages/delete_article',{
		 results: results,
		 title: "Delete Article",
		 topnav: "Buang Artikel"
	  });
	});
 });

// Article Pages
//Kedepannya di ganti article/:param
router.get('/article/1', (req, res, next) => {
	res.render('article_pages/article-1', {title : "Aqidah"});
})

module.exports = router;
