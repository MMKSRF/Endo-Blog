const express = require('express');
const PORT = process.env.PORT || 3000;


const app = express();

// Use built-in middleware for parsing JSON and URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a simple route that renders an EJS template
app.get('/', (req, res) => {
    res.render('newpost', { title: 'Home Page', message: 'Welcome to Express with EJS!' });
});

app.post("/post",(req,res)=>{
    console.log(req.body)
    const subject = req.body.subject; // Get the subject from the request body
    const content = req.body.content
    res.render('main', { subject ,content}); // Pass the subject to the EJS template

})
    
app.get("/newpost",(req,res)=>{
    res.render('newpost')
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});