var express = require("express");
var logfmt = require("logfmt");
var app = express();
var bodyParser = require('body-parser')

var ItemsHelper = require("./lib/items_helper");

app.use(logfmt.requestLogger());
app.use(bodyParser.json())
app.use(express.static('dist'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/home');
});

app.get('/myitems', function(req, res) {
    res.render('pages/myitems');
});

app.get('/searchitems', function(req, res) {
    res.render('pages/searchitems');
});

app.post("/api/items", function(req, res) {
  var items = new ItemsHelper.Items();
  items.saveItem(req.body, function(err, saved) {
      res.json({"saved":saved})
  });

});

app.get("/api/items", function(req,res){
  var items = new ItemsHelper.Items();
  items.getItems(function(err, data) {
    res.json(data);
  })
})

app.delete("/api/items/:itemid", function(req,res){
  var items = new ItemsHelper.Items();
  items.deleteItem(req.params.itemid, function(err, data) {
    res.json(data);
  })
});


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
