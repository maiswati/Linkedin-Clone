const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
app.use(express.static("public"));

app.get("/ln/:username",(req,res)=>{
    let {username} = req.params;
    const linkedData = require("./Data.json");
    let data = linkedData[username];
    res.render("home.ejs",{username,data});
})
app.get("/ln/:username/skillsAll.ejs",(req,res)=>{
    let {username} = req.params;
    const linkedData = require("./Data.json");
    let data = linkedData[username];
    res.render("skillsAll.ejs",{username,data});
})
app.get('/', (req, res) => {
    res.render('home', { data: { myImage: '/path/to/your/image.jpg' } });
});

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})




