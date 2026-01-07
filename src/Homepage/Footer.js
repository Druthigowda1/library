import { Divider, Grid, Stack, Typography, Box, IconButton } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ background: '#2f4670', color: 'white', p: 5, }}>

            {/* TOP FOOTER CONTENT */}
            <Grid container spacing={3}>

                {/* ABOUT */}
                <Grid item xs={12} sm={6} md={3}>
                    <Stack spacing={1.8}>
                        <Typography variant='h5' sx={{ fontWeight: 600 }}> About</Typography>
                        <Typography sx={{ textAlign: 'justify', }}>
                            Our digital library provides easy access to a wide range of e-books, study materials,
                            research papers, and learning resources—all available online anytime. Designed for
                            students, educators, and lifelong learners, it offers a convenient way to explore
                            knowledge from anywhere.
                        </Typography>
                    </Stack>
                </Grid>

                {/* TOP AUTHORS */}
                <Grid item xs={12} sm={6} md={3}>
                    <Stack spacing={1.2}>
                        <Typography variant='h5' sx={{ fontWeight: 600, }}> Top Authors</Typography>
                        <Typography onClick={() => navigate("/author/bs-grewal")}>• B.S. Grewal – Engineering Mathematics</Typography>
                        <Typography onClick={() => navigate("/author/bs-grewal")}>• C.L. Wadhwa – Electrical Engineering</Typography>
                        <Typography onClick={() => navigate("/author/bs-grewal")}>• N.K. Tiwari – Electrical & Electronics</Typography>
                        <Typography onClick={() => navigate("/author/bs-grewal")}>• O.P. Khanna – Industrial Engineering</Typography>
                        <Typography onClick={() => navigate("/author/bs-grewal")}>• B.D. Chaurasia – Anatomy</Typography>
                    </Stack>
                </Grid>

                {/* EXAM BOOKS */}
                <Grid item xs={12} sm={6} md={3}>
                    <Stack spacing={1.2}>
                        <Typography variant='h5' sx={{ fontWeight: 600 }}> Exam Books</Typography>
                        <Typography>• UPSC Civil Services Exam</Typography>
                        <Typography>• SSC CGL, CHSL, JE</Typography>
                        <Typography>• Banking Exams</Typography>
                        <Typography>• JEE Main</Typography>
                        <Typography>• NEET UG & PG</Typography>
                    </Stack>
                </Grid>

                {/* SCHOOL */}
                <Grid item xs={12} sm={6} md={3}>
                    <Stack spacing={1.2}>
                        <Typography variant='h5' sx={{ fontWeight: 600 }}> School (CBSE / State)</Typography>
                        <Typography>• NCERT Textbooks</Typography>
                        <Typography>• Oswaal Books – Guides</Typography>
                        <Typography>• Arihant Publications – Exam Prep</Typography>
                        <Typography>• RD Sharma – Mathematics</Typography>
                        <Typography>• HC Verma – Physics</Typography>
                    </Stack>
                </Grid>
            </Grid>

            {/* DIVIDER */}
            <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.3)' }} />

            {/* BOTTOM FOOTER */}
            <Grid container alignItems="center" justifyContent="center">

                {/* COPYRIGHT */}
                <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
                    <Typography sx={{ opacity: 0.8 }}>
                        © {new Date().getFullYear()} sninfosystems. All Rights Reserved.
                    </Typography>
                </Grid>

                {/* SOCIAL ICONS */}
                <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 1
                        }}
                    >
                        <IconButton sx={{ color: 'white' }}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'white' }}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'white' }}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'white' }}>
                            <YouTubeIcon />
                        </IconButton>
                    </Box>
                </Grid>

            </Grid>

        </Box>
    )
}

export default Footer
