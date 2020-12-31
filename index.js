var ep = require("express");
var ap = ep();
ap.use(ep.static(__dirname + '/profile.html'));
ap.get('/', function(req,res){
    res.sendFile(__dirname + '/profile.html');
});

var po = process.env.PORT || 3000;
ap.listen(po,function(){
    console.log("Site Running on http://localhost:" + po);
});
