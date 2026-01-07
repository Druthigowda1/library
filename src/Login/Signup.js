import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Container,
    Paper,
    Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save to localStorage (demo only)
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        users.push({
            username: form.username,
            email: form.email,
            password: form.password,
        });

        localStorage.setItem("users", JSON.stringify(users));

        alert("Signup successful!");

        // Reset form
        setForm({
            username: "",
            email: "",
            password: "",
        });

        navigate("/");
    };

    return (
        <Container
            maxWidth="xs"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    width: "100%",
                    borderRadius: 3,
                }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                    Create Account
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        {/* Username */}
                        <Grid item xs={12}>
                            <TextField
                                label="Username"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                        </Grid>

                        {/* Email */}
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                fullWidth
                                autoComplete="email"
                            />
                        </Grid>

                        {/* Password */}
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                fullWidth
                                autoComplete="new-password"
                            />
                        </Grid>

                        {/* Submit */}
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                fullWidth
                                sx={{ py: 1.5, fontWeight: "bold" }}
                            >
                                Signup
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                {/* Login Link */}
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    Already have an account?{" "}
                    <Button variant="text" onClick={() => navigate("/login")}>
                        Login
                    </Button>
                </Typography>
            </Paper>
        </Container>
    );
};

export default Signup;
