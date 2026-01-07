import React from 'react';
import {
    Grid,
    Card,
    Typography,
    TextField,
    Button,
    InputAdornment
} from '@mui/material';
import { keyframes } from '@mui/system';

import Slider from "react-slick";
import SearchIcon from "@mui/icons-material/Search";

import banner1 from "../Assets/Banner.png";
import banner2 from "../Assets/Banner2.jpg";
import banner3 from "../Assets/Banne3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Glow Animation
const glow = keyframes`
  0% { opacity: 0.6; text-shadow: 0 0 6px purple; }
  50% { opacity: 1; text-shadow: 0 0 15px purple; }
  100% { opacity: 0.6; text-shadow: 0 0 6px purple; }
`;

const Banner = () => {

    const sliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        fade: true,
        cssEase: "ease-in-out"
    };

    return (
        <Grid
            sx={{
                position: "relative",
                height: { xs: "50vh", sm: "40vh", md: "65vh" },
                overflow: "hidden"
            }}
        >

            {/* ------- BACKGROUND CAROUSEL (blurred) ------- */}
            <Slider {...sliderSettings} style={{ height: "100%" }}>
                {[banner1, banner2, banner3].map((img, index) => (
                    <div key={index}>
                        <Grid
                            sx={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "blur(4px) brightness(0.75)",
                                height: { xs: "50vh", sm: "40vh", md: "65vh" },
                                width: "100%",
                                transform: "scale(1.1)"
                            }}
                        />
                    </div>
                ))}
            </Slider>

            {/* ------- OVERLAY CONTENT ------- */}
            <Grid
                container
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    p: { xs: 2, sm: 3, md: 4 },
                }}
            >

                {/* -------- TOP RIGHT CARD -------- */}
                <Card
                    sx={{
                        padding: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                        width: { xs: 200, sm: 240 },
                        position: 'absolute',
                        top: { xs: 10, sm: 18, md: 80 },
                        right: { xs: "50%", sm: 30, md: 80 },
                        transform: { xs: "translateX(50%)", sm: "none" },
                        borderRadius: 2,
                        backdropFilter: "blur(6px)"
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            animation: `${glow} 2s ease-in-out infinite`,
                            color: '#7b1fa2',
                            fontWeight: 600,
                            textAlign: 'center',
                            fontFamily: `'Poppins', sans-serif`,
                            fontSize: { xs: "13px", sm: "15px" }
                        }}
                    >
                        Explore Your Digital Books
                    </Typography>
                </Card>

                {/* -------- CENTER TEXT -------- */}
                <Grid
                    item
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: { xs: "5%", sm: "8%", md: "10%" },
                        transform: "translateY(-50%)",
                        width: { xs: "90%", sm: "70%", md: "55%" }
                    }}
                >

                    <Typography
                        variant="h3"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontFamily: 'initial',
                            mb: 1,
                            fontSize: { xs: "26px", sm: "34px", md: "46px" },
                            lineHeight: 1.2,
                            textShadow: "0px 0px 8px rgba(0,0,0,0.6)"
                        }}
                    >
                        One Platform{" "}
                        <span style={{ color: '#d28eff' }}>
                            Every Book in India
                        </span>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'white',
                            fontFamily: 'inherit',
                            fontWeight: 'bold',
                            fontSize: { xs: "15px", sm: "19px", md: "22px" },
                            mb: 3,
                            textShadow: "0px 0px 8px rgba(0,0,0,0.6)"
                        }}
                    >
                        Democratizing Education, Learning Beyond Boundaries
                    </Typography>

                    {/* -------- SEARCH BAR WITH ICON -------- */}
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} sm={10} md={7}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                size="small"
                                placeholder="Search for books..."
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": { borderRadius: 2 }
                                    }
                                }}
                                InputProps={{
                                    startAdornment: (   // LEFT SEARCH ICON
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: "#7b1fa2" }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (     // RIGHT BUTTON
                                        <InputAdornment position="end">
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    height: '40px',
                                                    textTransform: 'none',
                                                    borderRadius: 1,
                                                    mr: -2
                                                }}
                                            >
                                                Search
                                            </Button>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
};

export default Banner;
