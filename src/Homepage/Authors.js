import { Grid, Typography, Box, IconButton } from '@mui/material';
import React, { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import book1 from '../Assets/content/Ferdinand P. Beer.png';
import book2 from '../Assets/content/thomas.png';
import book3 from '../Assets/content/adel.png';
import book4 from '../Assets/content/philip.png';
import book5 from '../Assets/content/benzamen.png';
import book6 from '../Assets/content/henry gray.png';

const bookData = [
    { img: book1, title: "Ferdinand P. Beer", title1: "(Mechanics of Material)" },
    { img: book2, title: "Thomas H", title1: "(Introduction to Algorithms)" },
    { img: book3, title: "Adel S. Sedra", title1: "(Micro-electronic Circuits)" },
    { img: book4, title: "Philip Kotler", title1: "(Marketing Management)" },
    { img: book5, title: "Benjamin Graham", title1: "(The Intelligent Investor)" },
    { img: book6, title: "Henry Gray", title1: "(Gray's Anatomy)" },
];

const Authors = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth / 2;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Grid
            container
            sx={{
                background: '#fff',
                py: 8,
                px: { xs: 1, sm: 3, md: 6, lg: 8 },
                mt: 2,
                mb: 2,
            }}
            spacing={4}
        >
            {/* Left section */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2f4670', mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
                        Top Authors & Their Books
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6, textAlign: { xs: 'center', md: 'left' } }}>
                        Explore some of the most influential authors in engineering, technology, and management.
                        Learn from their books, which are widely used in universities and professional courses around the world.
                    </Typography>
                </Box>
            </Grid>

            {/* Cards Section */}
            <Grid item xs={12} md={8} sx={{ position: 'relative' }}>

                {/* Left Arrow */}
                <IconButton
                    onClick={() => scroll('left')}
                    sx={{
                        position: 'absolute',
                        top: { xs: '40%', sm: '50%' },
                        left: 25,
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        background: 'purple',
                        color: 'white',
                        display: { xs: 'flex', sm: 'flex' },
                        width: 36,
                        height: 36,
                        '&:hover': { background: '#f0f0f0' }
                    }}
                >
                    <ArrowBackIosIcon fontSize="small" />
                </IconButton>

                <IconButton
                    onClick={() => scroll('right')}
                    sx={{
                        position: 'absolute',
                        top: { xs: '40%', sm: '50%' },
                        right: -5,
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        background: 'purple',
                        color: 'white',
                        display: { xs: 'flex', sm: 'flex' },
                        width: 36,
                        height: 36,
                        '&:hover': { background: '#f0f0f0' }
                    }}
                >
                    <ArrowForwardIosIcon fontSize="small" />
                </IconButton>

                {/* Scrollable Cards */}
                <Box
                    ref={scrollRef}
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: 2,
                        p: 1,
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': { display: 'none' },
                    }}
                >
                    {bookData.map((book, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: {
                                    xs: '0 0 50%',   // Mobile view
                                    sm: '0 0 20%',   // Tablet
                                    md: '0 0 30%',   // Laptop
                                    lg: '0 0 20%',   // Large Screens
                                },
                                background: "#fff",
                                borderRadius: 2,
                                border: '2px solid #404a42',
                                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                p: 1.5,
                                textAlign: "center",
                                cursor: "pointer",
                                transition: "transform 0.3s",
                                "&:hover": { transform: "scale(1.05)" }
                            }}
                        >
                            <Box
                                component="img"
                                src={book.img}
                                alt={book.title}
                                sx={{
                                    height: 160,
                                    width: 'auto',
                                    maxWidth: '100%',
                                    objectFit: "contain",
                                    borderRadius: 2,
                                    mb: 1.5,
                                }}
                            />
                            <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", color: "#2f4670" }}>
                                {book.title}
                            </Typography>
                            <Typography sx={{ fontSize: "0.85rem", color: "#555" }}>
                                Book: {book.title1}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
};

export default Authors;
