import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Grid,
    Button,
    Typography,
    IconButton,
    Drawer,
    Box,
    Divider,
    Popover,
    MenuItem,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ExpandMore from "@mui/icons-material/ExpandMore";

import { useNavigate } from 'react-router-dom';
import { keyframes } from "@mui/system";

const Header = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    // Popover for desktop
    const [anchorEl, setAnchorEl] = useState(null);
    const [popoverContent, setPopoverContent] = useState([]);
    const [currentPopover, setCurrentPopover] = useState(null);

    const goTo = (path) => {
        navigate(path);
        setOpen(false);
        handlePopoverClose();
    };

    // MENU DATA
    const menuItems = [
        { label: "Home", path: "/" },

        {
            label: "Education", subMenu: [
                { label: "School - STATE, CBSE, ICSE ", path: "/school-books" },
                { label: 'PUC - Science, Commerce, Arts', path: '/puc-books' },
                { label: "Under Graduate", path: "/courses" },
                { label: "Post Graduate", path: "/tutorials" },
            ]
        },

        {
            label: "Research", subMenu: [
                { label: "Journals", path: "/journals" },
                { label: "Papers", path: "/papers" },
            ]
        },

        {
            label: "Exams", subMenu: [
                { label: "Qualifying Exams - NEET, CET, JEE, PGCET", path: "/neet-books" },
                { label: "Banking Exams - IBPS, RBI, SBI", path: "/banking-exams" },
                { label: "Government Exam - State, Central", path: "/governmnt-exam" },
            ]
        },

        { label: "Authors", path: "/about" },
        { label: "Blog", path: "/blog" },
        { label: "New Arrival", path: "/new-arrival" },
    ];

    const popoverStyle = {
        width: "350px",
        padding: "4px 0",
        borderRadius: "8px",
    };

    const blink = keyframes`
        0% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.2; transform: scale(1.4); }
        100% { opacity: 1; transform: scale(1); }
    `;

    const handlePopoverOpen = (event, subMenu, label) => {
        setAnchorEl(event.currentTarget);
        setPopoverContent(subMenu || []);
        setCurrentPopover(label);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setPopoverContent([]);
        setCurrentPopover(null);
    };

    const openPopover = Boolean(anchorEl);

    return (
        <>
            {/* ---------- TOP DESKTOP HEADER ---------- */}
            <AppBar position="static" color="primary" sx={{ paddingY: 0.5, background: '#2f4670' }}>
                <Toolbar sx={{ minHeight: "55px", px: { xs: 1, md: 2 } }}>
                    <Grid container alignItems="center">

                        {/* LOGO */}
                        <Grid item xs={6} md={3}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    textAlign: "left",
                                    fontSize: { xs: "18px", md: "20px" }
                                }}
                                onClick={() => goTo("/")}
                            >
                                📚 StudentStation
                            </Typography>
                        </Grid>

                        {/* DESKTOP MENU */}
                        <Grid
                            item
                            md={6}
                            sx={{
                                display: { xs: "none", md: "flex" },
                                justifyContent: "center",
                                gap: 4,
                            }}
                        >
                            {menuItems.map((item) => (
                                <Box key={item.label}>
                                    <Button
                                        color="inherit"
                                        onClick={(e) => {
                                            if (item.subMenu) {
                                                handlePopoverOpen(e, item.subMenu, item.label);
                                            } else {
                                                goTo(item.path);
                                            }
                                        }}
                                        sx={{
                                            fontSize: "19px",
                                            textTransform: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 0.5
                                        }}
                                    >

                                        {/* NEW ARRIVAL BLINK */}
                                        {item.label === "New Arrival" ? (
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                                New
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        color: "gold",
                                                        fontSize: "18px",
                                                        fontWeight: "bold",
                                                        animation: `${blink} 3s infinite ease-in-out`,
                                                    }}
                                                >
                                                    Arrivals ⭐
                                                </Box>
                                            </Box>
                                        ) : item.label}

                                        {item.subMenu &&
                                            (currentPopover === item.label
                                                ? <ArrowDropUpIcon fontSize="small" />
                                                : <ArrowDropDownIcon fontSize="small" />
                                            )}
                                    </Button>
                                </Box>
                            ))}

                            {/* DESKTOP POPOVER DROPDOWN */}
                            <Popover
                                open={openPopover}
                                anchorEl={anchorEl}
                                onClose={handlePopoverClose}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                PaperProps={{ sx: popoverStyle }}
                            >
                                {popoverContent.map((subItem) => (
                                    <MenuItem key={subItem.label} onClick={() => goTo(subItem.path)}>
                                        {subItem.label}
                                    </MenuItem>
                                ))}
                            </Popover>
                        </Grid>

                        {/* RIGHT BUTTONS (DESKTOP) */}
                        <Grid
                            item
                            md={3}
                            sx={{
                                display: { xs: "none", md: "flex" },
                                justifyContent: "flex-end",
                                gap: 1,
                            }}
                        >
                            <Button variant="contained" color="secondary" onClick={() => goTo("/library")}>
                                WishList
                            </Button>
                            <Button variant="outlined" color="inherit" onClick={() => goTo("/login")}>
                                Login
                            </Button>
                        </Grid>

                        {/* MOBILE MENU BUTTON */}
                        <Grid
                            item
                            xs={6}
                            sx={{ display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}
                        >
                            <IconButton color="inherit" onClick={() => setOpen(true)}>
                                <MenuIcon sx={{ fontSize: 30 }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            {/* ---------- LEFT SIDEBAR NAVBAR (MOBILE) ---------- */}
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 270, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
                        Navigation
                    </Typography>

                    {menuItems.map((item) => (
                        <Box key={item.label}>

                            {/* NO SUBMENU → DIRECT BUTTON */}
                            {!item.subMenu ? (
                                <Button
                                    fullWidth
                                    onClick={() => goTo(item.path)}
                                    sx={{
                                        justifyContent: "flex-start",
                                        textTransform: "none",
                                        fontSize: "17px",
                                        color: 'black',
                                        py: 1,
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ) : (

                                /* SUBMENU → ACCORDION */
                                <Accordion disableGutters elevation={0} sx={{ boxShadow: "none" }}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography sx={{ fontSize: "17px", fontWeight: 500 }}>
                                            {item.label}
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails sx={{ pl: 2 }}>
                                        {item.subMenu.map((sub) => (
                                            <Button
                                                key={sub.label}
                                                fullWidth
                                                onClick={() => goTo(sub.path)}
                                                sx={{
                                                    justifyContent: "flex-start",
                                                    textTransform: "none",
                                                    fontSize: "16px",
                                                    color: "#444",
                                                    py: 0.7,
                                                }}
                                            >
                                                • {sub.label}
                                            </Button>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            )}
                        </Box>
                    ))}

                    <Divider sx={{ my: 2 }} />

                    <Button variant="contained" fullWidth onClick={() => goTo("/library")}>
                        WishList
                    </Button>

                    <Button variant="outlined" fullWidth sx={{ mt: 1 }} onClick={() => goTo("/login")}>
                        Login
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;

