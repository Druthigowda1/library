import React from "react";
import { Grid, Typography, Card, CardContent, Box } from "@mui/material";

const AboutLibrary = () => {
    return (
        <Box sx={{ p: 5, background: "#f4f6f9", }}>
            <Grid container spacing={4} alignItems="center">

                {/* LEFT SECTION IMAGE */}
                <Grid item xs={12} md={6}>
                    <img
                        src="https://img.freepik.com/free-vector/flat-design-illustration-library-day_23-2149331985.jpg"
                        alt="Digital Library"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "15px",
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
                        }}
                    />
                </Grid>

                {/* RIGHT TEXT SECTION */}
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", color: "#0a2342", mb: 2 }}
                    >
                        About Our Digital Library
                    </Typography>

                    <Typography sx={{ color: "#333", fontSize: "18px", mb: 3 }}>
                        Our Digital Library provides access to thousands of academic
                        resources, including textbooks, competitive exam guides, e-books,
                        journals, reference materials, and more. Students can explore
                        subject-specific content and stay ahead in their learning journey.
                    </Typography>

                    {/* FEATURE CARDS */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Card
                                sx={{
                                    background: "white",
                                    borderRadius: "15px",
                                    boxShadow: "0px 3px 12px rgba(0,0,0,0.15)"
                                }}
                            >
                                <CardContent>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                                        10,000+ Books
                                    </Typography>
                                    <Typography sx={{ fontSize: "15px" }}>
                                        Access a wide variety of educational resources.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Card
                                sx={{
                                    background: "white",
                                    borderRadius: "15px",
                                    boxShadow: "0px 3px 12px rgba(0,0,0,0.15)"
                                }}
                            >
                                <CardContent>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                                        24/7 Access
                                    </Typography>
                                    <Typography sx={{ fontSize: "15px" }}>
                                        Learn anytime, anywhere from any device.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Card
                                sx={{
                                    background: "white",
                                    borderRadius: "15px",
                                    boxShadow: "0px 3px 12px rgba(0,0,0,0.15)"
                                }}
                            >
                                <CardContent>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                                        Study Materials
                                    </Typography>
                                    <Typography sx={{ fontSize: "15px" }}>
                                        Notes, question papers & competitive exam prep.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Card
                                sx={{
                                    background: "white",
                                    borderRadius: "15px",
                                    boxShadow: "0px 3px 12px rgba(0,0,0,0.15)"
                                }}
                            >
                                <CardContent>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                                        Interactive Learning
                                    </Typography>
                                    <Typography sx={{ fontSize: "15px" }}>
                                        Smart content and easy navigation.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutLibrary;
