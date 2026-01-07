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
    Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useNavigate } from 'react-router-dom';
import { keyframes } from "@mui/system";
import logo from '../Assets/logo.png';

const Header = () => {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorSubEl, setAnchorSubEl] = useState(null);
    const [popoverContent, setPopoverContent] = useState([]);
    const [subChildMenu, setSubChildMenu] = useState([]);
    const [currentPopover, setCurrentPopover] = useState(null);

    // Mobile Drawer
    const [openDrawer, setOpenDrawer] = useState(false);

    // MOBILE EXPAND STATES
    const [mobileExpand, setMobileExpand] = useState({});

    const goTo = (path) => {
        navigate(path);
        handleAllClose();
    };

    const handleAllClose = () => {
        setAnchorEl(null);
        setAnchorSubEl(null);
        setPopoverContent([]);
        setSubChildMenu([]);
        setCurrentPopover(null);
        setOpenDrawer(false);
    };

    // Desktop Popover (Top Level)
    const handlePopoverOpen = (event, subMenu, label) => {
        setAnchorEl(event.currentTarget);
        setPopoverContent(subMenu || []);
        setCurrentPopover(label);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setPopoverContent([]);
        setCurrentPopover(null);
        setAnchorSubEl(null);
        setSubChildMenu([]);
    };

    // MENU STRUCTURE
    const menuItems = [
        { label: "Home", path: "/" },
        {
            label: "Education",
            subMenu: [
                { label: "School- STATE, CBSE, ICSE", path: "/school-books" },
                {
                    label: "PUC",
                    subMenu: [
                        { label: "Science", path: "/puc/science" },
                        { label: "Commerce", path: "/puc/commerce" },
                        { label: "Arts", path: "/puc/arts" },
                    ],
                },
                {
                    label: "Under Graduate",
                    subMenu: [
                        { label: "B.Sc", path: "/degree/bsc" },
                        { label: "B.Com", path: "/degree/bcom" },
                        { label: "BBA", path: "/degree/bba" },
                        { label: "BCA", path: "/degree/bca" },
                        { label: "BA", path: "/degree/ba" },
                    ],
                },
                {
                    label: "Post Graduate",
                    subMenu: [
                        { label: "MSC", path: "/masters/msc" },
                        { label: "MCOM", path: "/masters/mcom" },
                        { label: "MBA", path: "/masters/mba" },
                        { label: "MCA", path: "/masters/mca" },
                        { label: "MA", path: "/masters/ma" },
                    ],
                },
                {
                    label: "B.E",
                    subMenu: [
                        { label: "CSE", path: "/be/cse" },
                        { label: "ECE", path: "/masters/mcom" },
                        { label: "EEE", path: "/masters/mba" },
                        { label: "ME", path: "/masters/mca" },
                        { label: "CE", path: "/masters/ma" },
                    ],
                },
            ],
        },
        {
            label: "Research",
            subMenu: [
                { label: "Journals", path: "/journal/paper" },
                { label: "Research", path: "/reserach/paper" },
            ]
        },
        {
            label: "Exams",
            subMenu: [
                {
                    label: "Qualifying Exams",
                    subMenu: [
                        { label: "NEET", path: "/exam-neet" },
                        { label: "CET", path: "/exam-cet" },
                        { label: "JEE", path: "/exam-jee" },
                        { label: "PGCET", path: "/exam-pgcet" },
                    ],
                },
                {
                    label: "Banking Exams",
                    subMenu: [
                        { label: "IBPS", path: "/ibps-books" },
                        { label: "SBI", path: "/sbi-books" },
                    ],
                },
                {
                    label: "Government Exams",
                    subMenu: [
                        { label: "State", path: "/exam-state" },
                        { label: "Central", path: "/exam-central" },
                    ],
                },
            ]
        },
        { label: "Authors", path: "/authors" },

        {
            label: "Campus",
            subMenu: [
                { label: "> Qunatatative Aptitude", path: "/quantitative-books" },
                { label: "> Data Interpretation", path: "/datainterpretation-books" },
                { label: "> Logical Reasoning ", path: "/logical-reasoning-book" },
                { label: "> Verbal Ability  ", path: "/verbal-ability-english" },
                { label: "> Soft Skills   ", path: "/soft-skills-books" },
            ]
        },

        { label: "Blog", path: "/blog" },
    ];

    const popoverStyle = {
        width: "350px",
        padding: "4px 0",
        borderRadius: "8px",
    };

    // const blink = keyframes`
    //     0% { opacity: 1; transform: scale(1); }
    //     50% { opacity: 0.2; transform: scale(1.4); }
    //     100% { opacity: 1; transform: scale(1); }
    // `;

    // MOBILE EXPAND HANDLER
    const toggleMobileExpand = (label) => {
        setMobileExpand(prev => ({
            ...prev,
            [label]: !prev[label]
        }));
    };

    return (
        <>
            {/* HEADER */}
            <Grid sx={{ mb: 10 }}>
                <AppBar position='fixed' sx={{ background: '#2f4670', paddingY: 0.5 }}>
                    <Toolbar sx={{ minHeight: "55px", px: { xs: 1, md: 2 } }}>
                        <Grid container alignItems="center">

                            {/* Logo */}
                            <Grid item xs={6} md={3}>
                                <img src={logo} style={{ height: '70px', width: '80px' }} alt="logo" />
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
                                            onClick={(e) =>
                                                item.subMenu
                                                    ? handlePopoverOpen(e, item.subMenu, item.label)
                                                    : goTo(item.path)
                                            }
                                            sx={{ fontSize: "19px", textTransform: "none" }}
                                        >
                                            {item.label}

                                            {item.subMenu &&
                                                (currentPopover === item.label ? (
                                                    <ArrowDropUpIcon />
                                                ) : (
                                                    <ArrowDropDownIcon />
                                                ))}
                                        </Button>
                                    </Box>
                                ))}

                                {/* Desktop Level 1 Popover */}
                                <Popover
                                    open={Boolean(anchorEl)}
                                    anchorEl={anchorEl}
                                    onClose={handlePopoverClose}
                                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                                    PaperProps={{ sx: popoverStyle }}
                                >
                                    {popoverContent.map((subItem, index) => (
                                        <Box key={subItem.label}>
                                            <MenuItem
                                                onClick={(e) =>
                                                    subItem.subMenu
                                                        ? (setAnchorSubEl(e.currentTarget), setSubChildMenu(subItem.subMenu))
                                                        : goTo(subItem.path)
                                                }
                                                sx={{ justifyContent: "space-between" }}
                                            >
                                                {subItem.label}
                                                {subItem.subMenu && <ArrowDropDownIcon />}
                                            </MenuItem>
                                            {index < popoverContent.length - 1 && <Divider />}
                                        </Box>
                                    ))}
                                </Popover>

                                {/* Desktop Level 2 Popover */}
                                <Popover
                                    open={Boolean(anchorSubEl)}
                                    anchorEl={anchorSubEl}
                                    onClose={() => {
                                        setAnchorSubEl(null);
                                        setSubChildMenu([]);
                                    }}
                                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                                    PaperProps={{ sx: popoverStyle }}
                                >
                                    {subChildMenu.map((child, index) => (
                                        <Box key={child.label}>
                                            <MenuItem onClick={() => goTo(child.path)}>
                                                {child.label}
                                            </MenuItem>
                                            {index < subChildMenu.length - 1 && <Divider />}
                                        </Box>
                                    ))}
                                </Popover>
                            </Grid>

                            {/* Desktop Right Buttons */}
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
                                sx={{
                                    display: { xs: "flex", md: "none" },
                                    justifyContent: "flex-end",
                                }}
                            >
                                <IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
                                    <MenuIcon sx={{ fontSize: 30 }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>

            {/* MOBILE DRAWER */}
            <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box sx={{ width: 260, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
                        Menu
                    </Typography>

                    {menuItems.map((item) => (
                        <Box key={item.label}>
                            <Button
                                fullWidth
                                onClick={() =>
                                    item.subMenu
                                        ? toggleMobileExpand(item.label)
                                        : goTo(item.path)
                                }
                                sx={{ justifyContent: "space-between", color: 'black' }}
                            >
                                {item.label}
                                {item.subMenu && (
                                    mobileExpand[item.label] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                                )}
                            </Button>

                            {/* MOBILE SUBMENU EXPAND */}
                            <Collapse in={mobileExpand[item.label]} timeout="auto" unmountOnExit>
                                {item.subMenu?.map((subItem) => (
                                    <Box key={subItem.label} sx={{ pl: 3 }}>
                                        <Button
                                            fullWidth
                                            onClick={() =>
                                                subItem.subMenu
                                                    ? toggleMobileExpand(subItem.label)
                                                    : goTo(subItem.path)
                                            }
                                            sx={{ justifyContent: "space-between", color: "#333" }}
                                        >
                                            {subItem.label}
                                            {subItem.subMenu && (
                                                mobileExpand[subItem.label] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                                            )}
                                        </Button>

                                        {/* Level 2 mobile submenu */}
                                        <Collapse in={mobileExpand[subItem.label]} timeout="auto" unmountOnExit>
                                            {subItem.subMenu?.map((child) => (
                                                <MenuItem
                                                    key={child.label}
                                                    onClick={() => goTo(child.path)}
                                                    sx={{ pl: 5 }}
                                                >
                                                    {child.label}
                                                </MenuItem>
                                            ))}
                                        </Collapse>
                                    </Box>
                                ))}
                            </Collapse>

                            <Divider />
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
