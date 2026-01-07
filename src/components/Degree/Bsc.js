import {
    Card, Grid, Typography, Box, Button, Divider, useTheme,
    useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Header from "../../Homepage/Header";
import Footer from "../../Homepage/Footer1";
import { useNavigate } from "react-router-dom";

// Example books
const kannadaBooks = {
    firstPUC: [
        { title: "Artificial Intelligence", file: "/pdfs/AI.pdf" },
        { title: "Maths Part 1 - 1st PUC", file: "/pdfs/kannada-maths-part1.pdf" },
    ],
    secondPUC: [
        { title: "Maths Part 2 - 2nd PUC", file: "/pdfs/kannada-maths-part2.pdf" },
        { title: "Parisara Adyaya Part 2 - 2nd PUC", file: "/pdfs/parisra-adyaya-part2.pdf" },
    ],
};

const cbseBooks = {
    firstPUC: [
        { title: "English Notes - 1st PUC", file: "/pdfs/English-Revisoin-notes.pdf" },
        { title: "Maths Part 1 - 1st PUC", file: "/pdfs/kannada-maths-part1.pdf" },
    ],
    secondPUC: [
        { title: "Maths Notes - 2nd PUC", file: "/pdfs/Maths-Revision_Notes.pdf" },
    ],
};

const icseBooks = {
    firstPUC: [
        { title: "ICSE English - 1st PUC", file: "/pdfs/icse-eng-1.pdf" },
        { title: "Maths Part 1 - 1st PUC", file: "/pdfs/kannada-maths-part1.pdf" },
    ],
    secondPUC: [
        { title: "ICSE Maths - 2nd PUC", file: "/pdfs/icse-maths-1.pdf" },
    ],
};

const Class1 = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm")); // <= sm
    const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // >= md

    const [openShareIndex, setOpenShareIndex] = useState(null);
    const [selectedBoard, setSelectedBoard] = useState("1st Year");
    const [activeBtn, setActiveBtn] = useState("BSC");

    const openPDF = (filePath) => window.open(filePath, "_blank");

    const downloadPDF = (filePath) => {
        const link = document.createElement("a");
        link.href = filePath;
        link.download = filePath.split("/").pop();
        link.click();
    };

    const handleShareClick = (id) => {
        setOpenShareIndex(openShareIndex === id ? null : id);
    };
    /* -----------------------------
      BUTTON SWITCH (navigation)
   ------------------------------ */
    const handleSelect = (type) => {
        setActiveBtn(type);

        switch (type) {
            case "BCA":
                navigate("/degree/bca");
                break;
            case "BBA":
                navigate("/degree/bba");
                break;
            case "BCOM":
                navigate("/degree/bcom");
                break;
            case "BSC":
                navigate("/degree/bsc");
                break;
            case "BA":
                navigate("/degree/ba");
                break;
            default:
                break;
        }
    };

    const renderPdfSection = (title, books, keyPrefix) => (
        <Grid item xs={12} sx={{ p: { xs: 2, md: 3 } }}>
            <Typography
                variant="h4"
                sx={{ mb: 3, fontSize: { xs: "22px", md: "32px" }, fontWeight: "bold" }}
            >
                {title}
            </Typography>

            {["firstPUC", "secondPUC"].map((year) => (
                <Box key={year} sx={{ mb: 4 }}>
                    <Typography
                        variant="h5"
                        sx={{ mb: 2, fontWeight: "bold", color: "#2f4670" }}
                    >
                        {year === "firstPUC" ? "Study Material" : "Previous Year Papers"}
                    </Typography>

                    <Grid container spacing={2}>
                        {books[year].map((book, idx) => {
                            const uniqueKey = `${keyPrefix}-${year}-${idx}`;
                            return (
                                <Grid item xs={12} md={6} key={uniqueKey}>
                                    <Card
                                        sx={{
                                            borderRadius: "12px",
                                            border: "2px solid #423837",
                                            px: 2,
                                            py: 2,
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            sx={{ fontWeight: 600, fontSize: "18px", cursor: "pointer" }}
                                            onClick={() => openPDF(book.file)}
                                        >
                                            {book.title}
                                        </Typography>

                                        <Box sx={{ display: "flex", gap: 1 }}>
                                            <Button onClick={() => openPDF(book.file)} sx={{ minWidth: 0 }}>
                                                <VisibilityIcon />
                                            </Button>

                                            <Button onClick={() => downloadPDF(book.file)} sx={{ minWidth: 0 }}>
                                                <DownloadIcon />
                                            </Button>

                                            <Box sx={{ position: "relative" }}>
                                                <Button
                                                    onClick={() => handleShareClick(uniqueKey)}
                                                    sx={{ minWidth: 0 }}
                                                >
                                                    <ShareIcon />
                                                </Button>

                                                {openShareIndex === uniqueKey && (
                                                    <Box
                                                        sx={{
                                                            position: "absolute",
                                                            top: "40px",
                                                            right: 0,
                                                            bgcolor: "white",
                                                            borderRadius: "10px",
                                                            boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
                                                            p: 1,
                                                            zIndex: 20,
                                                            width: "150px",
                                                        }}
                                                    >
                                                        <Button
                                                            fullWidth
                                                            sx={{ justifyContent: "flex-start" }}
                                                            onClick={() => {
                                                                window.open(
                                                                    `https://api.whatsapp.com/send?text=${encodeURIComponent(
                                                                        `Check this PDF: ${window.location.origin + book.file}`
                                                                    )}`
                                                                );
                                                                setOpenShareIndex(null);
                                                            }}
                                                        >
                                                            WhatsApp
                                                        </Button>

                                                        <Divider />

                                                        <Button
                                                            fullWidth
                                                            sx={{ justifyContent: "flex-start" }}
                                                            onClick={() => {
                                                                window.open(
                                                                    `https://www.instagram.com/?url=${encodeURIComponent(
                                                                        window.location.origin + book.file
                                                                    )}`
                                                                );
                                                                setOpenShareIndex(null);
                                                            }}
                                                        >
                                                            Instagram
                                                        </Button>
                                                    </Box>
                                                )}
                                            </Box>
                                        </Box>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            ))}
        </Grid>
    );

    const getContent = () => {
        switch (selectedBoard) {
            case "1st Year":
                return renderPdfSection("All BSC Books - 1st Year", cbseBooks, "1st-Year");
            case "2nd Year":
                return renderPdfSection("All BSC Books - 2nd Year", icseBooks, "2nd-Year");
            default:
                return renderPdfSection("All BSC Books - 3rd Year", kannadaBooks, "3rd-Year");
        }
    };

    return (
        <>
            <Header />

            {/* MOBILE DROPDOWN ONLY */}
            <Box
                sx={{
                    display: { xs: "block", md: "none" },
                    p: 2,
                    borderBottom: "1px solid #ccc",
                    bgcolor: "#f7f9fc",
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Select Year
                </Typography>

                <Box
                    component="select"
                    value={selectedBoard}
                    onChange={(e) => setSelectedBoard(e.target.value)}
                    sx={{
                        width: "100%",
                        p: 1.5,
                        borderRadius: "8px",
                        border: "1px solid #2f4670",
                        fontSize: "18px",
                        fontWeight: 600,
                        backgroundColor: "white",
                    }}
                >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                </Box>
            </Box>

            <Grid container>
                {/* DESKTOP SIDEBAR */}
                <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{
                        p: 2,
                        borderRight: { md: "1px solid black" },
                        height: { md: "100vh" },
                        display: { xs: "none", md: "block" },
                        position: { md: "sticky" },
                        top: 0,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 2,
                            fontWeight: "bold",
                            mt: 3,
                            textAlign: "center",
                        }}
                    >
                        Year
                    </Typography>

                    {["1st Year", "2nd Year", "3rd Year"].map((board) => (
                        <Box
                            key={board}
                            sx={{
                                mb: 2,
                                p: 1.5,
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontSize: "18px",
                                fontWeight: 600,
                                bgcolor: selectedBoard === board ? "#2f4670" : "transparent",
                                color: selectedBoard === board ? "white" : "black",
                            }}
                            onClick={() => setSelectedBoard(board)}
                        >
                            {board}
                        </Box>
                    ))}
                </Grid>

                {/* CONTENT */}
                <Grid item xs={12} md={10}>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                            mb: 3, mt: 5,
                            ml: 5,
                            // horizontal scroll on small screens
                            overflowX: { xs: "auto", md: "visible" },
                            px: { xs: 1, md: 0 },
                            py: { xs: 1, md: 0 },
                        }}
                    >
                        {[
                            "BCA",
                            "BBA",
                            "BCOM",
                            "BSC",
                            "BA",
                        ].map((label) => (
                            <Button
                                key={label}
                                variant={activeBtn === label ? "contained" : "outlined"}
                                onClick={() => handleSelect(label)}
                                sx={{
                                    minWidth: 160,
                                    whiteSpace: "nowrap",
                                    borderRadius: "10px",
                                    flexShrink: 0,

                                }}
                            >
                                {isSmDown ? (label === "Verbal Ability" ? "Verbal" : label.split(" ")[0]) : label}
                            </Button>
                        ))}
                    </Box>
                    <Divider sx={{ width: '100%', background: 'black' }} />
                    {getContent()}
                </Grid>
            </Grid>

            <Footer />
        </>
    );
};

export default Class1;
