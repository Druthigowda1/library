import React, { useState, useRef } from "react";
import {
    Box,
    IconButton,
    Paper,
    Typography,
    Button,
    TextField
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";

const FloatingReviewBox = () => {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    // ------- DRAGGABLE LOGIC --------
    const bubbleRef = useRef(null);
    const [dragging, setDragging] = useState(false);
    const [pos, setPos] = useState({ top: 450, left: 20 }); // default position

    const handleMouseDown = (e) => {
        setDragging(true);
        bubbleRef.current.startX = e.clientX - pos.left;
        bubbleRef.current.startY = e.clientY - pos.top;
    };

    const handleMouseMove = (e) => {
        if (!dragging) return;
        setPos({
            left: e.clientX - bubbleRef.current.startX,
            top: e.clientY - bubbleRef.current.startY,
        });
    };

    const handleMouseUp = () => setDragging(false);

    // -------- SUBMIT ------------
    const handleSubmit = () => {
        if (!rating) {
            alert("Please select a rating");
            return;
        }
        if (!review.trim()) {
            alert("Please write a review");
            return;
        }

        alert("Thank you for Your Review");

        // RESET
        setRating(0);
        setReview("");

        // CLOSE POPUP
        setOpen(false);
    };

    return (
        <>
            {/* FLOATING & DRAGGABLE BUTTON */}
            <IconButton
                ref={bubbleRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onClick={() => setOpen(true)}
                sx={{
                    position: "fixed",
                    top: pos.top,
                    left: pos.left,
                    right: pos.right,
                    bgcolor: "#2f4670",
                    color: "white",
                    width: 65,
                    height: 65,
                    borderRadius: "50%",
                    boxShadow: 6,
                    cursor: "grab",
                    zIndex: 3000,
                    animation: "ripple 4.5s ease-out infinite",
                    "@keyframes ripple": {
                        "0%": {
                            boxShadow: `
            0 0 0 0 rgba(47,70,112,0.45),
            0 0 0 0 rgba(47,70,112,0.30),
            0 0 0 0 rgba(47,70,112,0.20),
            0 0 0 0 rgba(47,70,112,0.10)
        `
                        },

                        "40%": {
                            boxShadow: `
            0 0 0 18px rgba(47,70,112,0.0),
            0 0 0 12px rgba(47,70,112,0.10),
            0 0 0 7px rgba(47,70,112,0.20),
            0 0 0 3px rgba(47,70,112,0.25)
        `
                        },

                        "100%": {
                            boxShadow: `
            0 0 0 0 rgba(47,70,112,0.45),
            0 0 0 0 rgba(47,70,112,0.30),
            0 0 0 0 rgba(47,70,112,0.20),
            0 0 0 0 rgba(47,70,112,0.10)
        `
                        }
                    }


                }}
            >
                <ChatIcon sx={{ fontSize: 32 }} />
            </IconButton>

            {/* POPUP BOX */}
            {open && (
                <Paper
                    sx={{
                        position: "fixed",
                        bottom: 100,
                        right: 20,
                        width: 320,
                        p: 2,
                        borderRadius: 3,
                        boxShadow: 6,
                        zIndex: 3000,
                        mr: -1
                    }}
                >
                    {/* HEADER */}
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6" fontWeight={600}>
                            Give Your Review
                        </Typography>
                        <IconButton size="small" onClick={() => setOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* STARS */}
                    <Typography sx={{ mt: 1, mb: 1 }}>Select Rating:</Typography>

                    <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon
                                key={star}
                                onClick={() => setRating(star)}
                                sx={{
                                    fontSize: 32,
                                    cursor: "pointer",
                                    color: rating >= star ? "#ffb400" : "#777",
                                    transition: "0.2s",
                                }}
                            />
                        ))}
                    </Box>

                    {/* REVIEW TEXT */}
                    <TextField
                        label="Write a review"
                        fullWidth
                        multiline
                        rows={3}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        sx={{ mb: 2 }}
                    />

                    {/* SUBMIT */}
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{
                            bgcolor: "#2f4670",
                            py: 1,
                            "&:hover": { bgcolor: "purple" }
                        }}
                    >
                        Submit Review
                    </Button>
                </Paper>
            )}
        </>
    );
};

export default FloatingReviewBox;
