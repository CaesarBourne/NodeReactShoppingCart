const express  = require("express");
const app = express();

const mongoose = require("mongoose");
const config = require("./lib/config")
const shopRoutes =require("./routes/shop");
const path = require("path");

mongoose.connect(config.dbatlas,  { useNewUrlParser: true } )
.then(()=>{
  
    console.log("connection to db is succesful");
})
.catch((err)=>{
    console.log(`This is the error:  ${err}`);
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/api/items", shopRoutes);

//serve static assets in production
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));

    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
};

const port = process.env.port || 3300;
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})
// module.exports = app;