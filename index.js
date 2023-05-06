const express =require ("express");
  morgan = require("morgan");
const app = express();

let topBooks = [
    {
      title: 'Harry Potter and the Sorcerer\'s Stone',
      author: 'J.K. Rowling'
    },
    {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkien'
    },
    {
      title: 'Twilight',
      author: 'Stephanie Meyer'
    }
  ];

app.get("/movies", (req, res) => res.json(topBooks));
app.get("/", (req, res) => res.json("Welcome to my world"));
app.use(express.static("public"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log ("My app listen on port 8080")
})