import React from "react";
import {
    Box,
    Grid,
    Typography,
    Stack,
    Divider,
    IconButton,
    Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import ieeeLogo from "../Assets/logo1.png";

/* -------------------- DATA -------------------- */
const aboutLinks = [
    "Extensive Digital Resources",
    "Student-Focused Learning Hub",
    "Strategic Plan",
    "Easy Search & Navigation",
    "24/7 Online Access",
];

const quickLinks = [
    { label: "Top Authors", path: "/authors" },
    { label: "Engineering", path: "/be/cse" },
    { label: "Degree", path: "/degree" },
    { label: "Masters", path: "/masters" },
    { label: "JEE", path: "/jee" },
];

const policyLinks = [
    { label: "About", path: "/about" },
    { label: "Ethics Reporting", path: "/ethics-reporting" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Disclosures", path: "/terms" },
    { label: "Feedback", path: "/feedback" },
];

const socialLinks = [
    { icon: <TwitterIcon />, url: "https://twitter.com" },
    { icon: <FacebookIcon />, url: "https://facebook.com" },
    { icon: <LinkedInIcon />, url: "https://linkedin.com" },
    { icon: <InstagramIcon />, url: "https://instagram.com" },
];

/* -------------------- COMPONENT -------------------- */
const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#fff", color: "#000", mt: 6 }}>
            <Divider sx={{ borderColor: "#2f4670", borderWidth: 1 }} />

            {/* MAIN FOOTER */}
            <Box sx={{ px: { xs: 3, md: 10 }, py: 6 }}>
                <Grid container spacing={6}>
                    {/* ABOUT */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                            ABOUT STUDENTSTATION
                        </Typography>

                        <Stack spacing={1.5}>
                            {aboutLinks.map((text) => (
                                <Typography
                                    key={text}
                                    sx={{ color: "#0066b3", fontSize: 15 }}
                                >
                                    {text}
                                </Typography>
                            ))}
                        </Stack>
                    </Grid>

                    {/* QUICK LINKS */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                            QUICK LINKS
                        </Typography>

                        <Stack spacing={1.5}>
                            {quickLinks.map(({ label, path }) => (
                                <Link
                                    key={label}
                                    component={RouterLink}
                                    to={path}
                                    underline="none"
                                    sx={{
                                        color: "#0066b3",
                                        fontSize: 15,
                                        "&:hover": {
                                            textDecoration: "underline",
                                            color: "purple",
                                        },
                                    }}
                                >
                                    {label}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* SOCIAL */}
                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                            FOLLOW US
                        </Typography>

                        <Stack direction="row" spacing={2}>
                            {socialLinks.map(({ icon, url }, index) => (
                                <IconButton
                                    key={index}
                                    component="a"
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: "#0066b3" }}
                                >
                                    {icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Divider />

            {/* BOTTOM BAR */}
            <Box sx={{ px: { xs: 3, md: 10 }, py: 3 }}>
                <Grid container spacing={3} alignItems="center">
                    {/* LOGO */}
                    <Grid item xs={12} md={2} textAlign={{ xs: "center", md: "left" }}>
                        <Box component="img" src={ieeeLogo} alt="Logo" sx={{ height: 78 }} />
                    </Grid>

                    {/* COPYRIGHT */}
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="body2"
                            sx={{ color: "#555", textAlign: { xs: "center", md: "left" } }}
                        >
                            © {new Date().getFullYear()} SN Infosystems – All rights reserved.
                        </Typography>
                    </Grid>

                    {/* POLICIES */}
                    <Grid item xs={12} md={6}>
                        <Stack
                            direction="row"
                            spacing={4}
                            justifyContent={{ xs: "center", md: "flex-end" }}
                            flexWrap="wrap"
                        >
                            {policyLinks.map(({ label, path }) => (
                                <Link
                                    key={label}
                                    component={RouterLink}
                                    to={path}
                                    underline="none"
                                    sx={{
                                        color: "#0066b3",
                                        fontSize: 14,
                                        "&:hover": { textDecoration: "underline" },
                                    }}
                                >
                                    {label}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Footer;
