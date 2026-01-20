const express = require('express');
const cors = require('cors');

const app = express();
const blogs = require('./data/blogs.json');

app.use(cors({
    origin: ['http://localhost:3000',"https://nextjs-test-dusky-three.vercel.app"],
    credentials: true,
}));

app.get('/', (req, res) => {
  res.send('Hello, Hero Server!');
});

app.get("/blogs", (req, res) => {
    res.send(blogs);
});

app.get("/blogs/:slug", (req, res) => {
    const slug = req.params.slug;
    const blog = blogs.find(b => b.slug === slug);  
    res.send(blog);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`);
 })