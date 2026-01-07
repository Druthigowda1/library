import { Card, Grid, Typography, Box, Button, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Header from "../../Homepage/Header";
import Footer from "../../Homepage/Footer1";

const Class1 = () => {
    const navigate = useNavigate();

    const chapters = [
        {
            title: "Study Material",
            books: [{ title: "IBPS Clerk Prelims Memory Based Paper - 2025", file: "/pdfs/bank/IBPS-Clerk-Prelims.pdf" }]
        },
        {
            title: "Resionaning",
            books: [
                { title: "Surds Revision Notes", file: "/pdfs/surds.pdf" },
                { title: "Surds Practice Questions", file: "/pdfs/surds-practice.pdf" }
            ]
        },
        {
            title: "Quntative - IBPS",
            books: [
                { title: "Quadratic Equation Memory Based Questions", file: "/pdfs/quant/all-questions.pdf" },
                { title: "Number Series Practice Questions", file: "/pdfs/quant/Number series.pdf" }
            ]
        },
        {
            title: "English",
            books: [
                { title: "Averages Revision Notes", file: "/pdfs/averages.pdf" },
                { title: "Averages Practice Questions", file: "/pdfs/averages-practice.pdf" }
            ]
        },
        {
            title: "Computer Awareness",
            books: [{ title: "Ratio Revision Notes", file: "/pdfs/ratio.pdf" }]
        }
    ];

    const [selectedChapter, setSelectedChapter] = useState(chapters[0].title);
    const [setOpenShareIndex] = useState(null);
    const [activeBtn] = useState("IBPS");

    const openPDF = (filePath) => window.open(filePath, "_blank");

    const downloadPDF = (filePath) => {
        const link = document.createElement("a");
        link.href = filePath;
        link.download = filePath.split("/").pop();
        link.click();
    };

    const renderPdfSection = (chapter) => (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
                {chapter.title} – Syllabus & Practice
            </Typography>

            {chapter.books.map((book, idx) => (
                <Card
                    key={idx}
                    sx={{
                        mb: 2,
                        p: 2,
                        borderRadius: "12px",
                        border: "2px solid #423837",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Typography
                        sx={{ fontWeight: 600, cursor: "pointer" }}
                        onClick={() => openPDF(book.file)}
                    >
                        {book.title}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1 }}>
                        <Button onClick={() => openPDF(book.file)}><VisibilityIcon /></Button>
                        <Button onClick={() => downloadPDF(book.file)}><DownloadIcon /></Button>
                        <Button onClick={() => setOpenShareIndex(idx)}><ShareIcon /></Button>
                    </Box>
                </Card>
            ))}
        </Box>
    );

    const chapterData = chapters.find((c) => c.title === selectedChapter);

    return (
        <>
            <Header />

            {/* MAIN PAGE LAYOUT */}
            <Grid container sx={{ minHeight: "100vh" }}>

                {/* MOBILE DROPDOWN */}
                <Box sx={{ display: { xs: "block", md: "none" }, p: 2 }}>
                    <Select
                        fullWidth
                        value={selectedChapter}
                        onChange={(e) => setSelectedChapter(e.target.value)}
                    >
                        {chapters.map((ch, i) => (
                            <MenuItem key={ch.title} value={ch.title}>
                                {i + 1}. {ch.title}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>

                {/* SIDEBAR */}
                <Grid
                    item
                    md={3}
                    sx={{
                        display: { xs: "none", md: "block" },
                        p: 2,
                        // borderRight: "2px solid #ddd",
                        position: "sticky",
                        top: 80,
                        height: "calc(100vh - 80px)"
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 2, mt: { xs: 2, md: 10 }, fontWeight: "bold" }}>
                        Select Chapters
                    </Typography>

                    {chapters.map((ch, i) => (
                        <Box
                            key={ch.title}
                            sx={{
                                borderBottom: "2px solid black",
                                p: 2.5,
                                cursor: "pointer",
                                bgcolor: selectedChapter === ch.title ? "#2f4670" : "purple",
                                color: selectedChapter === ch.title ? "white" : "white"
                            }}
                            onClick={() => setSelectedChapter(ch.title)}
                        >
                            {i + 1}. {ch.title}
                        </Box>
                    ))}
                </Grid>

                {/* CONTENT */}
                <Grid item xs={12} md={9}>
                    <Box sx={{ p: 4, display: "flex", justifyContent: "center", gap: 2, mt: { xs: -7, md: 5 } }}>
                        <Button
                            variant={activeBtn === "SBI" ? "contained" : "outlined"}
                            onClick={() => navigate("/sbi-books")}
                        >
                            SBI
                        </Button>

                        <Button
                            variant={activeBtn === "IBPS" ? "contained" : "outlined"}
                            onClick={() => navigate("/ibps-books")}
                        >
                            IBPS
                        </Button>
                    </Box>

                    {renderPdfSection(chapterData)}
                </Grid>
            </Grid>

            {/* FOOTER – OUTSIDE GRID (NO OVERLAP) */}
            <Footer />
        </>
    );
};

export default Class1;
