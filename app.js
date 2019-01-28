var express = require("express");
var app = express();
app.set("view engine", "ejs");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var camp = [
        {name: "Vicky", image: "https://s3.amazonaws.com/imagescloud/images/medias/reservation/camping/main.jpg"},   
        {name: "kavi", image: "https://www.straight.com/files/v3/styles/gs_large/public/images/18/06/gettyimages-649155058.jpg?itok=Lhx5ciAR"},    
        {name: "muni", image: "https://s3.amazonaws.com/imagescloud/images/medias/camping/camping-tente.jpg"},    
        {name: "steve", image: "https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw"}    
    ];

app.get("/", function(req, res){
    res.render("home");
});
app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {camp: camp});
});
app.post("/campgrounds", function(req, res){
    // get campgrounds from form and add that in to the array
    var name = req.body.name;
    var image = req.body.image;
    var newCampgrounds = {name: name, image: image};
    camp.push(newCampgrounds);
    // redirect to the campgrounds page
    res.redirect("campgrounds");
});
app.get("/campgrounds/new", function(req, res) {
    res.render("form");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");
});