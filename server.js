const express = require('express');
const PORT = process.env.PORT || 3000;


const app = express();


const demoPost = {
    "submits": [
      {
        "id": 1,
        "title": "Post Title 1",
        "content": "This is the content of post 1.",
        "comments": []
      },
      {
        "id": 2,
        "title": "Post Title 2",
        "content": "This is the content of post 2.",
        "comments": []
      },
      {
        "id": 3,
        "title": "Post Title 3",
        "content": "This is the content of post 3.",
        "comments": []
      },
      {
        "id": 4,
        "title": "Post Title 4",
        "content": "This is the content of post 4.",
        "comments": []
      },
      {
        "id": 5,
        "title": "Post Title 5",
        "content": "This is the content of post 5.",
        "comments": []
      },
      {
        "id": 6,
        "title": "Post Title 6",
        "content": "This is the content of post 6.",
        "comments": []
      },
      {
        "id": 7,
        "title": "Post Title 7",
        "content": "This is the content of post 7.",
        "comments": []
      },
      {
        "id": 8,
        "title": "Post Title 8",
        "content": "This is the content of post 8.",
        "comments": []
      },
      {
        "id": 9,
        "title": "Post Title 9",
        "content": "This is the content of post 9.",
        "comments": []
      },
      {
        "id": 10,
        "title": "Post Title 10",
        "content": "This is the content of post 10.",
        "comments": []
      },
      {
        "id": 11,
        "title": "Post Title 11",
        "content": "This is the content of post 11.",
        "comments": []
      },
      {
        "id": 12,
        "title": "Post Title 12",
        "content": "This is the content of post 12.",
        "comments": []
      },
      {
        "id": 13,
        "title": "Post Title 13",
        "content": "This is the content of post 13.",
        "comments": []
      },
      {
        "id": 14,
        "title": "Post Title 14",
        "content": "This is the content of post 14.",
        "comments": []
      },
      {
        "id": 15,
        "title": "Post Title 15",
        "content": "This is the content of post 15.",
        "comments": []
      },
      {
        "id": 16,
        "title": "Post Title 16",
        "content": "This is the content of post 16.",
        "comments": []
      },
      {
        "id": 17,
        "title": "Post Title 17",
        "content": "This is the content of post 17.",
        "comments": []
      },
      {
        "id": 18,
        "title": "Post Title 18",
        "content": "This is the content of post 18.",
        "comments": []
      },
      {
        "id": 19,
        "title": "Post Title 19",
        "content": "This is the content of post 19.",
        "comments": []
      },
      {
        "id": 20,
        "title": "Post Title 20",
        "content": "This is the content of post 20.",
        "comments": []
      },
      {
        "id": 21,
        "title": "Post Title 21",
        "content": "This is the content of post 21.",
        "comments": []
      },
      {
        "id": 22,
        "title": "Post Title 22",
        "content": "This is the content of post 22.",
        "comments": []
      },
      {
        "id": 23,
        "title": "Post Title 23",
        "content": "This is the content of post 23.",
        "comments": []
      },
      {
        "id": 24,
        "title": "Post Title 24",
        "content": "This is the content of post 24.",
        "comments": []
   },
      {
        "id": 25,
        "title": "Post Title 25",
        "content": "This is the content of post 25.",
        "comments": []
      },
      {
        "id": 26,
        "title": "Post Title 26",
        "content": "This is the content of post 26.",
        "comments": []
      },
      {
        "id": 27,
        "title": "Post Title 27",
        "content": "This is the content of post 27.",
        "comments": []
      },
      {
        "id": 28,
        "title": "Post Title 28",
        "content": "This is the content of post 28.",
        "comments": []
      },
      {
        "id": 29,
        "title": "Post Title 29",
        "content": "This is the content of post 29.",
        "comments": []
      },
      {
        "id": 30,
        "title": "Post Title 30",
        "content": "This is the content of post 30.",
        "comments": []
      }
    ]
  }

// Use built-in middleware for parsing JSON and URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a simple route that renders an EJS template
app.get('/', (req, res) => {
    // console.log(req.body)
    // console.log(demoPost.submits)
    const submits = demoPost.submits
    res.render('main', { submits: submits }); // Pass the subject to the EJS template
});

app.post("/post",(req,res)=>{
    console.log(req.body)
    const postId = parseInt(req.body.postId); // Get the post ID from the form submission
    const post = demoPost.submits.find(p => p.id === postId); // Find the post with the specific ID

    if (post) {
        // If the post is found, you can render it or send a response
        // console.log('Found post:', post);
        res.render('post', { post: post }); // Render a detail page for the post
    } else {
        // Handle the case where the post is not found
        // console.log("The post doesn't exist || something wrong ")
        res.status(404).send('Post not found');
    }

})
    
app.get("/newpost",(req,res)=>{
    res.render('newpost')
})


app.post("/comment",(req,res)=>{
    const commentId = parseInt(req.body.postId)
    console.log(commentId)
    const comment = req.body.comment
    console.log(comment)
    const post = demoPost.submits.find(p => p.id === commentId);

    if (post) {
        post.comments.push(comment);
        res.render('post', { post });
    } else {
        console.error(`Post with id ${commentId} not found.`);
        res.status(404).send('Post not found'); // Handle the error appropriately
    }
        
    })

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});