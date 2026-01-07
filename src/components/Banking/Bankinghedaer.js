import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    Typography,
    Menu,
    MenuItem
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const [examAnchor, setExamAnchor] = useState(null);
    const [bankingAnchor, setBankingAnchor] = useState(null);

    const openExams = Boolean(examAnchor);
    const openBanking = Boolean(bankingAnchor);

    return (
        <AppBar position="static" sx={{ background: "#123456" }}>
            <Toolbar sx={{ display: "flex", gap: 4 }}>
                <Typography variant="h6" sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                    StudentStation
                </Typography>

                {/* Exams Button */}
                <Button
                    color="inherit"
                    endIcon={<ArrowDropDownIcon />}
                    onClick={(e) => setExamAnchor(e.currentTarget)}
                >
                    Exams
                </Button>

                {/* Exams Dropdown */}
                <Menu
                    anchorEl={examAnchor}
                    open={openExams}
                    onClose={() => setExamAnchor(null)}
                >
                    {/* Banking Exams */}
                    <MenuItem
                        onClick={(e) => setBankingAnchor(e.currentTarget)}
                        sx={{ justifyContent: "space-between" }}
                    >
                        Banking Exams <ArrowDropDownIcon />
                    </MenuItem>

                    {/* Government Exams */}
                    <MenuItem>Government Exams</MenuItem>
                </Menu>

                {/* Banking Exams → SBI & IBPS */}
                <Menu
                    anchorEl={bankingAnchor}
                    open={openBanking}
                    onClose={() => setBankingAnchor(null)}
                >
                    <MenuItem onClick={() => navigate("/sbi-books")}>SBI</MenuItem>
                    <MenuItem onClick={() => navigate("/ibps-books")}>IBPS</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
