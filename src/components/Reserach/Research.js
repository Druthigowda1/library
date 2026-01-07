import React, { useState, useRef } from "react";
import {
    Card,
    Grid,
    Typography,
    Box,
    Button,
    useTheme,
    useMediaQuery,
    Drawer,
    IconButton,
} from "@mui/material";

import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";

import Header from "../../Homepage/Header";
import Footer from "../../Homepage/Footer1";
import { useNavigate } from "react-router-dom";

/* -------------------- DATA -------------------- */
const booksData = {
    firstPUC: [
        { title: "Computing Edge Article", file: "/pdfs/reserach/computing_edge_article.pdf" },
        { title: "2020 Pressurizer Modeland PLCs for Investigation of Cybersecurity of PWR Plants ANS meeting", file: "/pdfs/reserach/2020PressurizerModelandPLCsforInvestigationofCybersecurityofPWRPlantsANSmeeting.pdf" },
        { title: "AN OVERVIEW OF CLOUD COMPUTING FOR THE ADVANCEMENT OF THE E-LEARNING PROCESS", file: "/pdfs/reserach/AN OVERVIEW OF CLOUD COMPUTING FOR THE ADVANCEMENT OF THE E-LEARNING PROCESS.pdf" },
    ],
    secondPUC: [
        { title: "Advanced Calculus in Engineering Applications", file: "/pdfs/kannada-maths-part1.pdf" },
        { title: "Linear Algebra Techniques in Machine Learning", file: "/pdfs/kannada-maths-part1.pdf" },
        { title: "Probability and Statistics for Data Science", file: "/pdfs/kannada-maths-part1.pdf" },
        { title: "Differential Equations in Physics", file: "/pdfs/kannada-maths-part1.pdf" },
        { title: "Graph Theory and Network Analysis", file: "/pdfs/kannada-maths-part1.pdf" },
        { title: "Optimization Techniques in Engineering", file: "/pdfs/kannada-maths-part1.pdf" },
        { title: "Numerical Methods for Scientific Computing", file: "/pdfs/kannada-maths-part1.pdf" },
        { title: "Discrete Mathematics in Computer Science", file: "/pdfs/kannada-maths-part1.pdf" },
        { title: "Mathematical Modelling in Biology", file: "/pdfs/kannada-maths-part1.pdf" },
        { title: "Applied Linear Programming", file: "/pdfs/kannada-maths-part1.pdf" },
    ],
};

const headings = [
    { first: "Cloud Computing IEEE PAPER", second: "Big Data IEEE PAPER" },
    { first: "Deep Learning IEEE PAPER", second: "Cyber Security IEEE PAPER" },
    { first: "Artificial Intelligence IEEE PAPER", second: "Machine Learning IEEE PAPER" },
    { first: "Internet of Things (IoT) IEEE PAPER", second: "Data Analytics IEEE PAPER" },

    { first: "Blockchain Technology IEEE PAPER", second: "Cloud Analytics IEEE PAPER" },
];

const streams = ["CSE", "Mechanical", "ECE", "Civil", "EEE"];

const FIXED_HEADER_HEIGHT = 140;

/* -------------------- COMPONENT -------------------- */
const Class1 = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

    const [activeBtn, setActiveBtn] = useState("Research");
    const [activeStream, setActiveStream] = useState("CSE");
    const [mobileStreamOpen, setMobileStreamOpen] = useState(false);

    const scrollRef = useRef(null);

    const openPDF = (file) => window.open(file, "_blank");

    const downloadPDF = (file) => {
        const link = document.createElement("a");
        link.href = file;
        link.download = file.split("/").pop();
        link.click();
    };

    const handleSelect = (type) => {
        setActiveBtn(type);
        navigate(type === "Research" ? "/reserach/paper" : "/journal/paper");
    };

    const scrollLeft = () =>
        scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });

    const scrollRight = () =>
        scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });

    /* -------------------- PDF RENDER -------------------- */
    const renderSections = () =>
        ["firstPUC", "secondPUC"].map((year) => (
            <Box key={year} sx={{ mb: 5 }}>
                {headings.map((heading, hIndex) => {
                    const start = hIndex * 6;
                    const pdfs = booksData[year].slice(start, start + 6);

                    if (!pdfs.length) return null;

                    return (
                        <Box key={hIndex} sx={{ mb: 4 }}>
                            <Typography
                                variant="h6"
                                sx={{ mb: 2, fontWeight: "bold", color: "#2f4670" }}
                            >
                                {year === "firstPUC"
                                    ? heading.first
                                    : heading.second}
                            </Typography>

                            <Grid container spacing={2}>
                                {pdfs.map((book, idx) => (
                                    <Grid item xs={12} md={6} key={idx}>
                                        <Card
                                            sx={{
                                                borderRadius: "12px",
                                                border: "2px solid #423837",
                                                p: 2,
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography
                                                sx={{ fontWeight: 600, cursor: "pointer" }}
                                                onClick={() => openPDF(book.file)}
                                            >
                                                {book.title}
                                            </Typography>

                                            <Box sx={{ display: "flex", gap: 1 }}>
                                                <IconButton onClick={() => openPDF(book.file)}>
                                                    <VisibilityIcon />
                                                </IconButton>
                                                <IconButton onClick={() => downloadPDF(book.file)}>
                                                    <DownloadIcon />
                                                </IconButton>
                                                <IconButton>
                                                    <ShareIcon />
                                                </IconButton>
                                            </Box>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    );
                })}
            </Box>
        ));

    return (
        <>
            {/* -------------------- FIXED HEADER -------------------- */}
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 1200,
                    bgcolor: "#fff",
                }}
            >
                <Header />

                <Box sx={{ borderBottom: "2px solid #423837", py: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                        {isSmDown && (
                            <IconButton onClick={scrollLeft}>
                                <ChevronLeftIcon />
                            </IconButton>
                        )}

                        <Box
                            ref={scrollRef}
                            sx={{
                                display: "flex",
                                gap: 2,
                                overflowX: "auto",
                                "&::-webkit-scrollbar": { display: "none" },
                            }}
                        >
                            {["Research", "Journal"].map((label) => (
                                <Button
                                    key={label}
                                    variant={activeBtn === label ? "contained" : "outlined"}
                                    onClick={() => handleSelect(label)}
                                    sx={{ minWidth: 160 }}
                                >
                                    {label}
                                </Button>
                            ))}
                        </Box>

                        {isSmDown && (
                            <IconButton onClick={scrollRight}>
                                <ChevronRightIcon />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            </Box>

            {/* -------------------- MAIN LAYOUT -------------------- */}
            <Grid container sx={{ mt: `${FIXED_HEADER_HEIGHT}px` }}>
                {/* DESKTOP STREAMS */}
                <Grid
                    item
                    md={2}
                    sx={{
                        display: { xs: "none", md: "block" },
                        position: "sticky",
                        top: FIXED_HEADER_HEIGHT,
                        height: `calc(100vh - ${FIXED_HEADER_HEIGHT}px)`,
                        borderRight: "2px solid black",
                        p: 2,
                        bgcolor: "#f7f9fc",
                        mt: 3,
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                        Streams
                    </Typography>

                    {streams.map((stream) => (
                        <Box
                            key={stream}
                            sx={{
                                mb: 1,
                                p: 1.5,
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: 600,
                                bgcolor: activeStream === stream ? "#2f4670" : "transparent",
                                color: activeStream === stream ? "#fff" : "#000",
                            }}
                            onClick={() => setActiveStream(stream)}
                        >
                            {stream}
                        </Box>
                    ))}
                </Grid>

                <Grid item xs={12} md={10}>
                    <Box sx={{ p: { xs: 2, md: 4 }, mt: 3 }}>

                        <Box sx={{ display: { xs: "flex", md: "none" }, mb: 2 }}>
                            <Button
                                variant="outlined"
                                startIcon={<MenuIcon />}
                                onClick={() => setMobileStreamOpen(true)}
                            >
                                Streams
                            </Button>
                        </Box>
                        {renderSections()}
                    </Box>
                </Grid>
            </Grid>
            <Drawer
                anchor="left"
                open={mobileStreamOpen}
                onClose={() => setMobileStreamOpen(false)}
                sx={{ display: { xs: "block", md: "none" } }}
            >
                <Box sx={{ width: 250, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                        Streams
                    </Typography>

                    {streams.map((stream) => (
                        <Box
                            key={stream}
                            sx={{
                                mb: 1,
                                p: 1.5,
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: 600,
                                bgcolor: activeStream === stream ? "#2f4670" : "transparent",
                                color: activeStream === stream ? "#fff" : "#000",
                            }}
                            onClick={() => {
                                setActiveStream(stream);
                                setMobileStreamOpen(false);
                            }}
                        >
                            {stream}
                        </Box>
                    ))}
                </Box>
            </Drawer>
            <Footer />
        </>
    );
};

export default Class1;
