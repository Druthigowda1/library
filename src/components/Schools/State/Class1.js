import { Card, Grid, Typography, Box, Button, Divider } from '@mui/material';
import React from 'react';
import Header from '../../../Homepage/Header';
import Footer from '../../../Homepage/Footer';
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";   // 👁️ VIEW ICON ADDED

import nalikali from '../../../Assets/State/nalikali.png';
import maths from '../../../Assets/State/maths.png';
import parisara from '../../../Assets/State/parisara.png';

/* -----------------------------
    KANNADA MEDIUM BOOKS
------------------------------ */
const kannadaBooks = [
  { title: "Nali-Kali Part 1", file: "/pdfs/nali-kali-part1.pdf", image: nalikali },
  { title: "Nali-Kali Part 2", file: "/pdfs/nali-kali-part2.pdf", image: nalikali },
  { title: "Maths Part 1", file: "/pdfs/kannada-maths-part1.pdf", image: maths },
  { title: "Maths Part 2", file: "/pdfs/kannada-maths-part2.pdf", image: maths },
  { title: "Parisara Adyaya Part 1", file: "/pdfs/parisra-adyaya-part1.pdf", image: parisara },
  { title: "Parisara Adyaya Part 2", file: "/pdfs/parisra-adyaya-part2.pdf", image: parisara },
];

/* -----------------------------
    ENGLISH MEDIUM BOOKS
------------------------------ */
const englishBooks = [
  { title: "Nali-Kali Part 1", file: "/pdfs/eng-nali-kali-part1.pdf", image: nalikali },
  { title: "Nali-Kali Part 2", file: "/pdfs/eng-nali-kali-part2.pdf", image: nalikali },
  { title: "Maths Part 1", file: "/pdfs/english-maths-part1.pdf", image: maths },
  { title: "Maths Part 2", file: "/pdfs/english-maths-part2.pdf", image: maths },
  { title: "Parisara Adyaya Part 1", file: "/pdfs/eng-parisra-adyaya-part1.pdf", image: parisara },
  { title: "Parisara Adyaya Part 2", file: "/pdfs/eng-parisra-adyaya-part2.pdf", image: parisara },
];

const Class1 = () => {
  const [openShareIndex, setOpenShareIndex] = React.useState(null);

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
      PDF SECTION RENDER FUNCTION
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

      <Grid container spacing={3}>
        {books.map((book, idx) => {
          const uniqueKey = `${keyPrefix}-${idx}`;

          return (
            <Grid item xs={6} sm={4} md={2} key={uniqueKey}>
              <Card
                sx={{
                  borderRadius: "12px",
                  border: "2px solid #423837",
                  height: "90%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "visible",
                }}
              >
                {/* IMAGE */}
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "140px", sm: "160px", md: "200px" },
                    borderRadius: "10px 10px 0 0",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={() => openPDF(book.file)}
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>

                <Divider />

                {/* TITLE */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    p: 2,
                    textAlign: "center",
                    cursor: "pointer",
                    height: "35px",
                    fontWeight: 600,
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                  onClick={() => openPDF(book.file)}
                >
                  {book.title}
                </Typography>

                {/* ACTION BUTTONS */}
                <Box
                  sx={{
                    mt: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    px: 2,
                    py: 0,
                    background: "#2f4670",
                    borderRadius: "0 0 10px 10px",
                  }}
                >

                  {/* VIEW PDF (EYE ICON) */}
                  <Button onClick={() => openPDF(book.file)} sx={{ minWidth: 0 }}>
                    <VisibilityIcon sx={{ color: "white" }} />
                  </Button>

                  {/* DOWNLOAD */}
                  <Button onClick={() => downloadPDF(book.file)} sx={{ minWidth: 0 }}>
                    <DownloadIcon sx={{ color: "white" }} />
                  </Button>
                  {/* SHARE */}
                  <Box sx={{ position: "relative" }}>
                    <Button onClick={() => handleShareClick(uniqueKey)} sx={{ minWidth: 0 }}>
                      <ShareIcon sx={{ color: "white" }} />
                    </Button>

                    {openShareIndex === uniqueKey && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "40px",
                          right: 0,
                          bgcolor: "white",
                          borderRadius: "10px",
                          boxShadow: "0px 3px 10px rgba(0,0,0,0.2)",
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

  return (
    <Grid container>
      <Header />
      {renderPdfSection("Class One – Kannada Medium", kannadaBooks, "kan")}
      {renderPdfSection("Class One – English Medium", englishBooks, "eng")}
      <Footer />
    </Grid>
  );
};

export default Class1;
