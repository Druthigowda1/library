import { Grid, Typography, Card, CardContent, Checkbox, FormControlLabel, Divider } from "@mui/material";
import React, { useState } from "react";
import Header from "../../Homepage/Header";
import adel from '../../Assets/content/adel.png'
import Footer from "../../Homepage/Footer1";

const Home = () => {

    // Checkboxes
    const authorsCheckbox = ["R.S Aggarwal", "H.C Verma", "S.L Arora"];
    const coursesCheckbox = ["PUC", "Commerce", "Science", "Arts", "Engineering", "Medical"];
    const subjectsCheckbox = ["Chemistry", "Biology", "Physics", "Mathematics", "Java", "C and C++", "Python"];
    // Data with multiple books per author
    const allData = [
        { category: "Author", author: "R.S Aggarwal", name: "Quantitative Aptitude", description: "Best-selling competitive exam book", image: adel },
        { category: "Author", author: "R.S Aggarwal", name: "Verbal & Non-Verbal Reasoning", description: "Logical reasoning practice", image: adel },
        { category: "Author", author: "R.S Aggarwal", name: "Mathematics for Class 10", description: "School curriculum mathematics", image: adel },

        { category: "Author", author: "H.C Verma", name: "Concepts of Physics Part 1", description: "Physics theory & numericals", image: adel },
        { category: "Author", author: "H.C Verma", name: "Concepts of Physics Part 2", description: "Advanced physics concepts", image: adel },

        { category: "Author", author: "S.L Arora", name: "Physics Class 11", description: "Reference book for CBSE", image: adel },
        { category: "Author", author: "S.L Arora", name: "Physics Class 12", description: "Practice & theory guide", image: adel },

        { category: "Course", course: "PUC", name: "PCMB Complete Package", description: "Physics, Chemistry, Maths & Biology", image: adel },
        { category: "Course", course: "Commerce", name: "Business & Accounts Guide", description: "Complete commerce stream", image: adel },
        { category: "Course", course: "Engineering", name: "First Year Engineering Pack", description: "Technical subjects starter kit", image: adel },
        { category: "Course", course: "Arts", name: "Arts First Year Pack", description: "Humanities starter kit", image: adel }
    ];

    // Selected checkboxes
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleCheckboxChange = (value) => {
        setSelectedFilters(prev =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    const filteredData =
        selectedFilters.length === 0
            ? allData
            : allData.filter(item =>
                selectedFilters.includes(item.author) ||
                selectedFilters.includes(item.course)
            );

    return (
        <Grid>
            <Header />

            <Grid container sx={{ mt: 2, px: 3 }}>
                {/* Sidebar */}
                <Grid item xs={12} md={2} sx={{ borderRight: { md: "1px solid black" }, pr: 2 }}>
                    <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>Filters</Typography>

                    <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>Authors</Typography>
                    {authorsCheckbox.map((author) => (
                        <FormControlLabel
                            key={author}
                            control={
                                <Checkbox
                                    checked={selectedFilters.includes(author)}
                                    onChange={() => handleCheckboxChange(author)}
                                />
                            }
                            label={author}
                        />
                    ))}

                    <Divider sx={{ my: 2, background: 'black', width: '230px' }} />

                    <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>Courses</Typography>
                    {coursesCheckbox.map((course) => (
                        <FormControlLabel
                            sx={{ width: '150px' }}
                            key={course}
                            control={
                                <Checkbox
                                    checked={selectedFilters.includes(course)}
                                    onChange={() => handleCheckboxChange(course)}
                                />
                            }
                            label={course}
                        />
                    ))}
                    <Divider sx={{ my: 2, background: 'black', width: '230px' }} />

                    <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>Courses</Typography>
                    {subjectsCheckbox.map((course) => (
                        <FormControlLabel
                            key={course}
                            sx={{ width: '150px' }}
                            control={
                                <Checkbox

                                    checked={selectedFilters.includes(course)}
                                    onChange={() => handleCheckboxChange(course)}
                                />
                            }
                            label={course}
                        />
                    ))}
                </Grid>

                {/* RIGHT SIDE CONTENT */}
                <Grid item xs={12} md={9} sx={{ pl: 3 }}>
                    <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
                        {selectedFilters.length === 0 ? "All Items" : "Recently Added Books"}
                    </Typography>

                    {/* Cards Section */}
                    <Grid container spacing={3}>
                        {filteredData.map((item, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        p: 2,
                                        borderRadius: 3,
                                        height: "200px",
                                        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                                        transition: "0.3s",
                                        "&:hover": { transform: "translateY(-3px)" }
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: "160px",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "10px"
                                        }}
                                    />

                                    <CardContent sx={{ flex: 1, ml: 2 }}>
                                        <Typography variant="h6" fontWeight={700}>
                                            {item.name}
                                        </Typography>

                                        <Typography sx={{ mt: 1, color: "#555", fontSize: "14px" }}>
                                            {item.description}
                                        </Typography>

                                        <Typography
                                            sx={{ mt: 2, fontWeight: 600, color: "#374785", fontSize: "15px" }}
                                        >
                                            Author: {item.category === "Author" ? item.author : item.course}
                                        </Typography>

                                        <Typography sx={{ mt: 1, fontSize: "13px", color: "gray" }}>
                                            PDF • Pages
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </Grid>
    );
};

export default Home;
