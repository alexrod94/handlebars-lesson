const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  const data = {
    name: "Alex",
    age: 25,
    city: "London",
    hobbies: ["football", "music", "movies"],
    bootcamp: "<span>Web Development</span>",
    active: false,
    adress: true,
  };
  res.render("index.hbs", data);
});

app.get("/about", (req, res) => {
  res.render("about.hbs");
});

app.get("/blog", (req, res) => {
  const data = {
    posts: [
      {
        title: "Post 1",
        body: "This is post 1",
      },
      {
        title: "Post 2",
        body: "This is post 2",
      },
      {
        title: "Post 3",
        body: "This is post 3",
      },
    ],
  };
  res.render("blog.hbs", data);
});

app.listen(3000, () => {
  console.log("Server listening...");
});
