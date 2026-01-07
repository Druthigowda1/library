import { Card, Grid, Typography, Box, Button, Divider } from "@mui/material";
import React, { useState } from "react";

import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";

// STATE – KANNADA MEDIUM (Images removed)
const kannadaBooks = [
    { title: "English Revision", file: "/pdfs/English-Revisoin-notes" },
    { title: "Nali-Kali Part 2", file: "/pdfs/nali-kali-part2.pdf" },
    { title: "Maths Part 1", file: "/pdfs/kannada-maths-part1.pdf" },
    { title: "Maths Part 2", file: "/pdfs/kannada-maths-part2.pdf" },
    { title: "Parisara Adyaya Part 1", file: "/pdfs/parisra-adyaya-part1.pdf" },
    { title: "Parisara Adyaya Part 2", file: "/pdfs/parisra-adyaya-part2.pdf" },
];

// CBSE (Dummy)
const cbseBooks = [
    { title: "Short Time Revision Notes - English", file: "/pdfs/English-Revisoin-notes.pdf" },
    { title: "Quick Formula Revision Notes - Maths", file: "/pdfs/Maths-Revision_Notes.pdf" },
    { title: 'Fast Revison Notes - Hindi', file: '/pdfs/Hindi_A__Revision_Note.pdf' }
];

// ICSE (Dummy)
const icseBooks = [
    { title: "ICSE English - Class 1", file: "/pdfs/icse-eng-1.pdf" },
    { title: "ICSE Maths - Class 1", file: "/pdfs/icse-maths-1.pdf" },
];

const Class1 = () => {
    const [openShareIndex, setOpenShareIndex] = useState(null);
    const [selectedBoard, setSelectedBoard] = useState("STATE");

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
         PDF SECTION RENDER
    ------------------------------ */
    const renderPdfSection = (title, books, keyPrefix) => (
        <Grid item xs={12} sx={{ p: { xs: 2, md: 3 } }}>
            <Typography
                variant="h4"
                sx={{
                    mb: 3,
                    fontSize: { xs: "22px", md: "32px" },
                    fontWeight: "bold",
                }}
            >
                {title}
            </Typography>

            <Grid container spacing={2}>
                {books.map((book, idx) => {
                    const uniqueKey = `${keyPrefix}-${idx}`;

                    return (
                        <Grid item xs={12} md={6} key={uniqueKey}>
                            <Card
                                sx={{
                                    borderRadius: "12px",
                                    border: "1px solid #423837",
                                    px: 10,
                                    py: 2,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }} onClick={() => openPDF(book.file)}
                            >
                                {/* TITLE */}
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => openPDF(book.file)}
                                >
                                    {book.title}
                                </Typography>

                                {/* BUTTONS IN ONE LINE */}
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
        </Grid>
    );

    const getContent = () => {
        switch (selectedBoard) {
            case "CBSE":
                return renderPdfSection("All 10th Revison Books", cbseBooks, "cbse");
            case "ICSE":
                return renderPdfSection("All 10th Revison Books", icseBooks, "icse");
            default:
                return renderPdfSection("All 10th Revison Books", kannadaBooks, "kan");
        }
    };

    return (
        <Grid container>
            {/* Sidebar */}
            <Grid
                item
                xs={3}
                sm={3}
                md={2}
                sx={{
                    p: 2,
                    borderRight: "2px solid #2f4670",
                    height: "80vh",
                    position: "sticky",
                    top: 0,
                }}
            >
                <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
                    Boards
                </Typography>

                {["CBSE", "STATE", "ICSE"].map((board) => (
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

            {/* Content */}
            <Grid item xs={9} sm={9} md={10}>
                {getContent()}
            </Grid>
        </Grid>
    );
};

export default Class1;
