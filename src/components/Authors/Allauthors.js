import React, { useState } from "react";
import {
    Grid,
    Typography,
    Card,
    CardContent,
    Checkbox,
    FormControlLabel,
    IconButton,
    Divider,
    Box,
    Dialog,
    AppBar,
    Toolbar,
    Slide
} from "@mui/material";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CloseIcon from "@mui/icons-material/Close";

import Header from "../../Homepage/Header";
import Footer from "../../Homepage/Footer";

// Images
import adel from "../../Assets/content/adel.png";
import verma from "../../Assets/content/h.c. verma.png";
import Aggarwal from "../../Assets/content/Aggarwal.png";
import loney from "../../Assets/content/loney.png";
import Tandon from "../../Assets/content/Tandon.png";
import mechanism from "../../Assets/mechanism.png";
import mechanics1 from "../../Assets/mechanics1.png";
import mechanics2 from "../../Assets/mechanics2.png";
import optics from "../../Assets/optics.png";
import waves from "../../Assets/waves.png";

// PDF icon
import pdfIcon from "../../Assets/Blog/pdf.png";

// Slide animation
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
    const authorsCheckbox = [
        "R.S. Aggarwal",
        "H.C. Verma",
        "S.L. Loney",
        "O.P. Tandon",
        "R.D. Sharma",
        "B.S. Grewal",
        "Arihant",
        "D.C. Pandey",
        "P.K. Nag"
    ];

    const allData = [
        { author: "H.C. Verma", name: "Concepts of Physics Part 1", pages: 472, description: "Fundamental physics concepts", image: verma, pdf: "/pdfs/hc-verma-1.pdf" },
        { author: "H.C. Verma", name: "Concepts of Physics Part 2", pages: 450, description: "Advanced physics concepts", image: verma, pdf: "/pdfs/hc-verma-2.pdf" },

        { author: "R.D. Sharma", name: "Mathematics for Class 11", pages: 980, description: "Comprehensive maths guide", image: adel, pdf: "/pdfs/rd-sharma-11.pdf" },
        { author: "R.D. Sharma", name: "Mathematics for Class 12", pages: 1024, description: "Advanced mathematics concepts", image: adel, pdf: "/pdfs/rd-sharma-12.pdf" },

        { author: "O.P. Tandon", name: "Physical Chemistry", pages: 812, description: "Complete physical chemistry guide", image: Tandon, pdf: "/pdfs/op-tandon-physical.pdf" },
        { author: "O.P. Tandon", name: "Organic Chemistry", pages: 650, description: "Detailed organic chemistry reference", image: Tandon, pdf: "/pdfs/op-tandon-organic.pdf" },
        { author: "O.P. Tandon", name: "Inorganic Chemistry", pages: 590, description: "Inorganic chemistry concepts", image: Tandon, pdf: "/pdfs/op-tandon-inorganic.pdf" },

        { author: "B.S. Grewal", name: "Engineering Mathematics", pages: 900, description: "Most popular engineering maths book", image: adel, pdf: "/pdfs/bs-grewal.pdf" },

        { author: "S.L. Loney", name: "Plane Trigonometry", pages: 450, description: "Classic trigonometry reference", image: loney, pdf: "/pdfs/loney-plane-trigo.pdf" },
        { author: "S.L. Loney", name: "Coordinate Geometry", pages: 520, description: "Best book for coordinate geometry", image: loney, pdf: "/pdfs/loney-coordinate-geometry.pdf" },

        { author: "I.E. Irodov", name: "Problems in General Physics", pages: 380, description: "Challenging physics problem-solving", image: adel, pdf: "/pdfs/irodov.pdf" },

        { author: "K.C. Sinha", name: "Mathematics for Class 11 & 12", pages: 1100, description: "Concept-based mathematics guide", image: adel, pdf: "/pdfs/kc-sinha.pdf" },

        { author: "P.K. Nag", name: "Engineering Thermodynamics", pages: 780, description: "Thermodynamics for engineering students", image: adel, pdf: "/pdfs/pk-nag.pdf" },

        { author: "Arihant", name: "Objective Physics", pages: 650, description: "Objective questions for competitive exams", image: Tandon, pdf: "/pdfs/arihant-physics.pdf" },
        { author: "Arihant", name: "Objective Chemistry", pages: 540, description: "Chemistry MCQs for JEE/NEET", image: Tandon, pdf: "/pdfs/arihant-chemistry.pdf" },
        { author: "Arihant", name: "Objective Mathematics", pages: 700, description: "Mathematics MCQs for competitive exams", image: Tandon, pdf: "/pdfs/arihant-maths.pdf" },

        { author: "D.C. Pandey", name: "Understanding Physics Mechanics Volume 1", pages: 637, description: "The first volume, focusing on foundational mechanics for Class 11 and JEE.", image: mechanics1, pdf: "/pdfs/DC Pandey - Understanding Physics Mechanics Volume 1 - converted.pdf" },
        { author: "D.C. Pandey", name: "Understanding Physics - Mechanics Volume 2", pages: 170, description: "JEE Physics preparation series", image: mechanics2, pdf: "/pdfs/DC Pandey - Understanding Physics - Mechanics Volume 2.pdf" },
        { author: "D.C. Pandey", name: "Understanding Physics - Electricity & Magnetism", pages: 778, description: "A detailed treatment of electrostatics, current electricity, and magnetism.", image: mechanism, pdf: "/pdfs/DC Pandey - Understanding Physics - Electricity & Magnetism.pdf" },
        { author: "D.C. Pandey", name: "Optics and Modern Physics", pages: 599, description: "A detailed treatment of electrostatics, current electricity, and magnetism.", image: optics, pdf: "/pdfs/DC Pandey - Understanding Physics - Optics & Modern Physics.pdf" },
        { author: "D.C. Pandey", name: "Waves and Thermodynamics", pages: 464, description: "A detailed treatment of electrostatics, current electricity, and magnetism.", image: waves, pdf: "/pdfs/DC Pandey - Understanding Physics - Waves & Thermodynamics.pdf" },

        { author: "R.S. Aggarwal", name: "Quantitative Aptitude", pages: 961, description: "Aptitude preparation for exams", image: Aggarwal, pdf: "/pdfs/Quantitative by R.S Aggrawal.pdf" },
        { author: "R.S. Aggarwal", name: "Objective General English", pages: 337, description: "English grammar & comprehension", image: Aggarwal, pdf: "/pdfs/RS AGARWAL ENGLISH.pdf" }
    ];

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;

    // BOOK VIEWER STATES
    const [openBook, setOpenBook] = useState(false);
    const [currentBook, setCurrentBook] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const handleCheckboxChange = (value) => {
        setSelectedFilters((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
        setPage(1);
    };

    const filteredData =
        selectedFilters.length === 0
            ? allData
            : allData.filter((item) => selectedFilters.includes(item.author));

    const startIndex = (page - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(
        startIndex,
        startIndex + itemsPerPage
    );
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // OPEN BOOK
    const handleOpenBook = (item) => {
        setCurrentBook(item);
        setCurrentPage(1);
        setOpenBook(true);
    };

    const handleCloseBook = () => {
        setOpenBook(false);
    };

    return (
        <Grid>
            <Header />

            <Grid container sx={{ mt: 2, px: 3, height: "120vh" }}>
                {/* LEFT FILTER */}
                <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{ borderRight: "1px solid black", pr: 2 }}
                >
                    <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: 8 }}>
                        Filters
                    </Typography>

                    <Typography variant="h6" fontWeight={600}>
                        Authors
                    </Typography>

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
                </Grid>

                {/* RIGHT CONTENT */}
                <Grid item xs={12} md={10} sx={{ pl: 3, mt: 8 }}>
                    <Grid container spacing={3}>
                        {paginatedData.map((item, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card
                                    sx={{
                                        display: "flex",
                                        p: 2,
                                        height: "200px",
                                        border: "2px solid black"
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        onClick={() => handleOpenBook(item)}
                                        style={{
                                            width: "170px",
                                            height: "100%",
                                            cursor: "pointer",
                                            border: "1px solid black"
                                        }}
                                    />

                                    <CardContent sx={{ ml: 2 }}>
                                        <Typography variant="h6" fontWeight={700}>
                                            {item.name}
                                        </Typography>
                                        <Typography>{item.description}</Typography>
                                        <Typography fontWeight={600}>
                                            Author: {item.author}
                                        </Typography>

                                        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                                            <img src={pdfIcon} width={28} />
                                            {item.pages} pages
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* PAGINATION */}
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                        <IconButton disabled={page === 1} onClick={() => setPage(page - 1)}>
                            <NavigateBeforeIcon fontSize="large" />
                        </IconButton>

                        <Typography sx={{ mx: 2 }}>
                            {page} / {totalPages}
                        </Typography>

                        <IconButton
                            disabled={page === totalPages}
                            onClick={() => setPage(page + 1)}
                        >
                            <NavigateNextIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* BOOK VIEWER */}
            <Dialog
                fullScreen
                open={openBook}
                onClose={handleCloseBook}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: "relative", bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={handleCloseBook}>
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }}>
                            {currentBook?.name}
                        </Typography>
                        <Typography>Page {currentPage}</Typography>
                    </Toolbar>
                </AppBar>

                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        bgcolor: "#eee"
                    }}
                >
                    <iframe
                        src={`${currentBook?.pdf}#page=${currentPage}`}
                        width="80%"
                        height="100%"
                        style={{ border: "none", transition: "0.3s" }}
                        title="Book Reader"
                    />

                    <Box sx={{ py: 2 }}>
                        <IconButton
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                        >
                            <NavigateBeforeIcon fontSize="large" />
                        </IconButton>

                        <IconButton onClick={() => setCurrentPage((p) => p + 1)}>
                            <NavigateNextIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </Box>
            </Dialog>

            <Footer />
        </Grid>
    );
};

export default Home;
