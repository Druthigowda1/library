// src/components/Class1.jsx
import React, { useState } from "react";
import {
    Card,
    Grid,
    Typography,
    Box,
    Button,
    Divider,
    MenuItem,
    Select,
    Toolbar,
    useTheme,
    useMediaQuery,
} from "@mui/material";

import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Header from "../../Homepage/Header";
import Footer from "../../Homepage/Footer1";
import { useNavigate } from "react-router-dom";

const Class1 = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // >= md
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm")); // <= sm

    /* -------------------------------------
       CHAPTERS WITH PDFs
    -------------------------------------- */
    const chapters = [
        {
            title: "Number System",
            books: [
                { title: "Number System Notes", file: "/pdfs/quant/number-system.pdf" },
                { title: "Number Series Practice Questions", file: "/pdfs/quant/Number series.pdf" },
            ],
        },
        {
            title: "Surds",
            books: [
                { title: "Surds Revision Notes", file: "/pdfs/surds.pdf" },
                { title: "Surds Practice Questions", file: "/pdfs/surds-practice.pdf" },
            ],
        },
        {
            title: "Averages",
            books: [
                { title: "Averages Revision Notes", file: "/pdfs/averages.pdf" },
                { title: "Averages Practice Questions", file: "/pdfs/averages-practice.pdf" },
            ],
        },
        {
            title: "Ratio",
            books: [{ title: "Ratio Revision Notes", file: "/pdfs/ratio.pdf" }],
        },
        {
            title: "Variation",
            books: [{ title: "Variation Notes", file: "/pdfs/variation.pdf" }],
        },
        {
            title: "Mixture",
            books: [{ title: "Mixture Notes", file: "/pdfs/mixture.pdf" }],
        },
        {
            title: "Percentage",
            books: [{ title: "Percentage Notes", file: "/pdfs/percentage.pdf" }],
        },
        {
            title: "Profit, Loss and Discount",
            books: [{ title: "Profit & Loss Notes", file: "/pdfs/profit-loss.pdf" }],
        },
    ];

    // Default chapter
    const [selectedChapter, setSelectedChapter] = useState(chapters[0].title);
    const [openShareIndex, setOpenShareIndex] = useState(null);
    const [activeBtn, setActiveBtn] = useState("Quantitative");

    // PDF actions
    const openPDF = (filePath) => window.open(filePath, "_blank");

    const downloadPDF = (filePath) => {
        const link = document.createElement("a");
        link.href = filePath;
        link.download = filePath.split("/").pop();
        link.click();
    };

    const handleShareClick = (id) => {
        setOpenShareIndex((prev) => (prev === id ? null : id));
    };

    /* -----------------------------
       BUTTON SWITCH (navigation)
    ------------------------------ */
    const handleSelect = (type) => {
        setActiveBtn(type);

        switch (type) {
            case "Quantitative":
                navigate("/quantitative-books");
                break;
            case "Data Interpretation":
                navigate("/datainterpretation-books");
                break;
            case "Reasoning":
                navigate("/logical-reasoning-book");
                break;
            case "Verbal Ability":
                navigate("/verbal-ability-english");
                break;
            case "Soft Skills":
                navigate("/soft-skills-books");
                break;
            default:
                break;
        }
    };

    /* -----------------------------
       PDF SECTION RENDER
    ------------------------------ */
    const renderPdfSection = (title, books, keyPrefix) => (
        <Grid item xs={12} sx={{ p: { xs: 2, md: 3 }, mt: { xs: 2, md: 0 } }}>
            <Typography
                variant="h4"
                sx={{
                    mb: 3,
                    fontSize: { xs: "20px", sm: "22px", md: "32px" },
                    fontWeight: "bold",
                }}
            >
                {title}
            </Typography>

            <Grid container spacing={2}>
                {books.map((book, idx) => {
                    const uniqueKey = `${keyPrefix}-${idx}`;

                    return (
                        <Grid
                            item
                            key={uniqueKey}
                            xs={12}
                            sm={6}
                            md={12} // keep one-per-row on md+ to match your earlier design; change to md={6} if you want two columns on desktop
                        >
                            <Card
                                sx={{
                                    borderRadius: "12px",
                                    border: "2px solid #423837",
                                    px: { xs: 2, md: 4 },
                                    py: 2,
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "row" },
                                    alignItems: { xs: "flex-start", sm: "center" },
                                    justifyContent: "space-between",
                                    gap: 1,
                                }}
                            >
                                <Box
                                    onClick={() => openPDF(book.file)}
                                    sx={{
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        width: "100%",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: { xs: "15px", md: "18px" },
                                            wordBreak: "break-word",
                                        }}
                                    >
                                        {book.title}
                                    </Typography>
                                </Box>

                                {/* BUTTONS */}
                                <Box sx={{ display: "flex", gap: 1, mt: { xs: 1, sm: 0, }, overflow: 'auto' }}>
                                    <Button onClick={() => openPDF(book.file)} sx={{ minWidth: 0 }}>
                                        <VisibilityIcon />
                                    </Button>

                                    <Button onClick={() => downloadPDF(book.file)} sx={{ minWidth: 0 }}>
                                        <DownloadIcon />
                                    </Button>

                                    <Box sx={{ position: "relative" }}>
                                        <Button onClick={() => handleShareClick(uniqueKey)} sx={{ minWidth: 0 }}>
                                            <ShareIcon />
                                        </Button>

                                        {openShareIndex === uniqueKey && (
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: "40px",
                                                    right: 0,
                                                    bgcolor: "black",
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

    /* -----------------------------
       GET CONTENT BASED ON SELECTED CHAPTER
    ------------------------------ */
    const getContent = () => {
        const chapter = chapters.find((ch) => ch.title === selectedChapter) || chapters[0];
        return renderPdfSection(`${chapter.title} - Revision Books`, chapter.books, chapter.title.toLowerCase().replace(/\s+/g, "-"));
    };

    return (
        <>
            {/* Header (AppBar inside Header handles its own height) */}
            <Header />

            {/* spacing so content doesn't hide under header */}
            {/* <Toolbar /> */}

            <Grid container sx={{ px: { xs: 1, sm: 2, md: 4 }, pb: 6, }}>
                {/* Mobile Dropdown (visible only on mobile) */}
                <Grid item xs={12} sx={{ display: { xs: "block", md: "none" }, mb: 2, mt: 0 }}>
                    <Box sx={{ px: 1 }}>
                        <Typography sx={{ fontWeight: "bold", mb: 1, mt: 3 }}>Select Chapter</Typography>

                        <Select
                            fullWidth
                            value={selectedChapter}
                            onChange={(e) => setSelectedChapter(e.target.value)}
                            sx={{
                                bgcolor: "white",
                                borderRadius: "8px",
                            }}
                            size={isSmDown ? "small" : "medium"}
                        >
                            {chapters.map((ch, index) => (
                                <MenuItem key={ch.title} value={ch.title}>
                                    {index + 1}. {ch.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                </Grid>

                {/* Desktop Sidebar */}
                <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{
                        display: { xs: "none", md: "block" },
                        pr: 2,
                    }}
                >
                    <Box
                        sx={{
                            // position: "sticky",
                            top: { md: 10 },
                            height: "90vh",
                            overflow: "hidden",
                            pr: 1,
                            borderRight: "2px solid black",
                        }}
                    >
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", mt: 7 }}>
                            Chapters
                        </Typography>

                        {chapters.map((ch, index) => (
                            <Box
                                key={ch.title}
                                sx={{
                                    mb: 1,
                                    p: 1.25,
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    bgcolor: selectedChapter === ch.title ? "#2f4670" : "transparent",
                                    color: selectedChapter === ch.title ? "white" : "black",
                                }}
                                onClick={() => setSelectedChapter(ch.title)}
                            >
                                {index + 1}. {ch.title}
                            </Box>
                        ))}
                    </Box>
                </Grid>

                {/* Main content column */}
                <Grid item xs={12} md={10}>
                    {/* Buttons row (responsive) */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                            mb: 3, mt: 5,
                            // horizontal scroll on small screens
                            overflowX: { xs: "auto", md: "visible" },
                            px: { xs: 1, md: 0 },
                            py: { xs: 1, md: 0 },
                        }}
                    >
                        {[
                            "Quantitative",
                            "Data Interpretation",
                            "Reasoning",
                            "Verbal Ability",
                            "Soft Skills",
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

                    {/* Content (pdf list) */}
                    {getContent()}
                </Grid>
            </Grid>

            <Footer />
        </>
    );
};

export default Class1;
