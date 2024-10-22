const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a simple route that renders an EJS template
app.get('/', (req, res) => {
    res.render('main', { title: 'Home Page', message: 'Welcome to Express with EJS!' });
});

app.get("/post",(req,res)=>{
    res.render('post')
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});