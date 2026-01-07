import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import React from 'react';
import Header from '../Homepage/Header';
import { useNavigate } from 'react-router-dom';
import comp from '../Assets/Blog/Competative exam.png'
import Footer from '../Homepage/Footer';

const Blog = () => {
    const navigate = useNavigate();

    const blogData = [
        {
            id: 1,
            title: "How to Prepare for Competitive Exams",
            description: "Effective strategies and planning guides for cracking top exams like NEET, CET, JEE and more.",
            image: comp,
            path: "/blog/competitive-exams"
        },
        {
            id: 2,
            title: "Top 10 Reference Books for PUC Science",
            description: "A curated list of the best books recommended by toppers and teachers for PUC students.",
            image: comp,
            path: "/blog/puc-books"
        },
        {
            id: 3,
            title: "Why Digital Libraries Are the Future",
            description: "Understand how online learning resources are transforming education for students.",
            image: comp,
            path: "/blog/digital-library"
        },
        {
            id: 1,
            title: "How to Prepare for Competitive Exams",
            description: "Effective strategies and planning guides for cracking top exams like NEET, CET, JEE and more.",
            image: comp,
            path: "/blog/competitive-exams"
        },
        {
            id: 2,
            title: "Top 10 Reference Books for PUC Science",
            description: "A curated list of the best books recommended by toppers and teachers for PUC students.",
            image: comp,
            path: "/blog/puc-books"
        },
        {
            id: 3,
            title: "Why Digital Libraries Are the Future",
            description: "Understand how online learning resources are transforming education for students.",
            image: comp,
            path: "/blog/digital-library"
        },
    ];

    return (
        <Grid container>
            <Header />

            {/* Page Title */}
            <Grid container sx={{ p: 5, justifyContent: 'center' }}>
                <Typography variant='h2' sx={{ fontSize: '40px', fontWeight: 600 }}>
                    Articles
                </Typography>
            </Grid>

            {/* Blog Cards */}
            <Grid container spacing={3} sx={{ px: 4, pb: 4 }}>
                {blogData.map((blog) => (
                    <Grid item key={blog.id} xs={12} sm={6} md={4}>
                        <Card sx={{ borderRadius: 3, overflow: 'hidden', height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={blog.image}
                                alt={blog.title}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight={600}>
                                    {blog.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                    {blog.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ px: 2, pb: 2 }}>
                                <Button
                                    variant="contained"
                                    sx={{ borderRadius: 2 }}
                                    onClick={() => navigate(blog.path)}
                                >
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Footer />
        </Grid>
    );
};

export default Blog;
