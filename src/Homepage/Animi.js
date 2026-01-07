import * as React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function House3D() {
    return (
        <Card
            elevation={4}
            sx={{
                maxWidth: 420,
                margin: "40px auto",
                textAlign: "center"
            }}
        >
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    3D House – 360° View
                </Typography>

                {/* 3D Perspective Container */}
                <Box
                    sx={{
                        perspective: "1000px",
                        width: "100%",
                        height: "260px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    {/* Rotating House */}
                    <Box
                        sx={{
                            width: "260px",
                            height: "180px",
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "12px",
                            transformStyle: "preserve-3d",
                            animation: "rotate360 10s linear infinite",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.35)",

                            /* Inline keyframes */
                            "@keyframes rotate360": {
                                from: {
                                    transform: "rotateY(0deg)"
                                },
                                to: {
                                    transform: "rotateY(360deg)"
                                }
                            }
                        }}
                    />
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    Real house image with pure CSS 3D rotation (no external libraries)
                </Typography>
            </CardContent>
        </Card>
    );
}
