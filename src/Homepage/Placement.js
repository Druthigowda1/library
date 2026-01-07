import { Card, Grid, Typography, Box, Rating } from '@mui/material';
import React from 'react';

// 🔥 Import your book images
import book1 from '../Assets/content/Campus.png';
import book2 from '../Assets/content/ga.png';
import book3 from '../Assets/content/Reasoning.png';
import book4 from '../Assets/content/Quantitative.png';
import book5 from '../Assets/content/Interview.png';
import book6 from '../Assets/content/Campusscuccess.png';
import book7 from '../Assets/content/Jobready.png';
import book8 from '../Assets/content/Suceesbooster.png';
import book9 from '../Assets/content/Winning.png';
import book10 from '../Assets/content/hrguide.png';

// Book info list (PDFs from public folder)
const bookData = [
    { img: book1, title: "Campus Placement Guide", rating: 4.5, pdf: "/pdfs/CampusRecruitmentBook.pdf" },
    { img: book2, title: "Aptitude Mastery", rating: 4.0, pdf: "/pdfs/Aptitude.pdf" },
    { img: book3, title: "Verbal Reasoning Pro", rating: 4.2, pdf: "/pdfs/Reasoning.pdf" },
    { img: book4, title: "Quantitative Skills", rating: 4.8, pdf: "/pdfs/Quantitative.pdf" },
    { img: book5, title: "Interview Cracker", rating: 4.6, pdf: "/pdfs/Interview.pdf" },
    { img: book6, title: "Campus Success Book", rating: 4.1, pdf: "/pdfs/CampusSuccess.pdf" },
    { img: book7, title: "Job Ready Handbook", rating: 3.9, pdf: "/pdfs/JobReady.pdf" },
    { img: book8, title: "Placement Booster", rating: 4.7, pdf: "/pdfs/Booster.pdf" },
    { img: book9, title: "Winning Aptitude", rating: 4.3, pdf: "/pdfs/Winning.pdf" },
    { img: book10, title: "Resume & HR Guide", rating: 4.4, pdf: "/pdfs/HRGuide.pdf" },
];

const Placement = () => {
    return (
        <Grid
            container
            sx={{
                background: '#fff',
                maxWidth: { md: "1350px", xs: '320px' },
                margin: "0 auto",
                px: { xs: 2, sm: 4, md: 5 },
                py: { xs: 4, md: 6 },
                mt: { xs: -8, md: -6 },
                mb: { xs: 0, md: 1 },
                mr: { xs: 5, md: 9 },
            }}
        >
            <Grid item xs={12}>
                <Card
                    sx={{
                        width: '100%',
                        background: '#ebeef5',
                        boxShadow: "0 4px 20px rgba(0,0,0,0.45)",
                        borderRadius: 3,
                        p: { xs: 2, md: 3 },
                    }}
                >
                    {/* Headline */}
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 600,
                            color: "#2f4670",
                            mb: 3,
                            textAlign: 'center',
                            fontSize: { xs: "1.6rem", md: "2rem" }
                        }}
                    >
                        Top Placement Books
                    </Typography>

                    {/* Scrolling Cards */}
                    <Box
                        sx={{
                            display: "flex",
                            overflowX: "auto",
                            gap: 3,
                            scrollBehavior: "smooth",
                            p: 1,
                            whiteSpace: "nowrap",
                            "&::-webkit-scrollbar": { height: "7px" },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#b0b8c5",
                                borderRadius: "4px"
                            }
                        }}
                    >
                        {bookData.map((book, index) => (
                            <Box
                                key={index}
                                onClick={() => window.open(book.pdf, "_blank")}
                                sx={{
                                    width: { xs: 130, sm: 150 },
                                    background: "#fff",
                                    borderRadius: 2,
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                    p: 1.5,
                                    textAlign: "center",
                                    cursor: "pointer",
                                    transition: "transform 0.3s",
                                    "&:hover": { transform: "scale(1.12)" },
                                }}
                            >
                                {/* Book Image */}
                                <Box
                                    component="img"
                                    src={book.img}
                                    alt={book.title}
                                    sx={{
                                        height: { xs: 140, sm: 160 },
                                        width: { xs: 100, sm: 120 },
                                        objectFit: "cover",
                                        borderRadius: 2,
                                        mb: 2,
                                        margin: "0 auto",
                                        display: "block"
                                    }}
                                />

                                {/* Book Title */}
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "0.9rem",
                                        color: "#2f4670",
                                        minHeight: "40px",
                                        whiteSpace: "normal",
                                        wordBreak: "break-word"
                                    }}
                                >
                                    {book.title}
                                </Typography>

                                {/* Rating */}
                                <Rating
                                    value={book.rating}
                                    precision={0.1}
                                    readOnly
                                    size="small"
                                    sx={{ mt: 1 }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Placement;
