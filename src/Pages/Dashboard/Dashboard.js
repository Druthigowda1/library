import React, { useState, useContext } from "react";
import { Grid, Typography, TextField, Button, MenuItem, Card, CardContent, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { ItemsContext } from "../../Pages/context/ItemsContext";

const Dashboard = () => {
    const [formData, setFormData] = useState({
        category: "",
        author: "",
        course: "",
        name: "",
        image: "",
        pdf: ""
    });

    const { items, setItems } = useContext(ItemsContext);
    const [editIndex, setEditIndex] = useState(null);

    // FORM INPUT HANDLER
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // IMAGE UPLOAD
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imgURL = URL.createObjectURL(file);
            setFormData({ ...formData, image: imgURL });
        }
    };

    // PDF UPLOAD
    const handlePdfUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const pdfURL = URL.createObjectURL(file);
            setFormData({ ...formData, pdf: pdfURL });
        }
    };

    // ADD OR UPDATE ITEM
    const handleAddOrUpdate = () => {
        if (!formData.category || !formData.name) {
            alert("Category & Name are required!");
            return;
        }

        if (editIndex !== null) {
            const updatedItems = [...items];
            updatedItems[editIndex] = formData;
            setItems(updatedItems);
            setEditIndex(null);
        } else {
            setItems([...items, formData]);
        }

        resetForm();
    };

    // DELETE ITEM
    const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setItems(items.filter((_, i) => i !== index));
        }
    };

    // EDIT ITEM
    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(items[index]);
    };

    // RESET FORM
    const resetForm = () => {
        setFormData({ category: "", author: "", course: "", name: "", image: "", pdf: "" });
    };

    return (
        <Grid container sx={{ p: 4 }}>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
                Dashboard – Add / Edit Books & Courses
            </Typography>

            {/* ---------- FORM SECTION ---------- */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField select fullWidth label="Category" name="category"
                        value={formData.category} onChange={handleChange}>
                        <MenuItem value="Author">Author</MenuItem>
                        <MenuItem value="Course">Course</MenuItem>
                    </TextField>
                </Grid>

                {formData.category === "Author" && (
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField fullWidth label="Author Name" name="author" value={formData.author} onChange={handleChange} />
                    </Grid>
                )}

                {formData.category === "Course" && (
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField fullWidth label="Course Name" name="course" value={formData.course} onChange={handleChange} />
                    </Grid>
                )}

                <Grid item xs={12} sm={6} md={3}>
                    <TextField fullWidth label="Book / Package Name" name="name" value={formData.name} onChange={handleChange} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Button variant="outlined" component="label" fullWidth>
                        Upload Image
                        <input hidden type="file" accept="image/*" onChange={handleImageUpload} />
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Button variant="outlined" component="label" fullWidth>
                        Upload PDF
                        <input hidden type="file" accept="application/pdf" onChange={handlePdfUpload} />
                    </Button>
                </Grid>

                {/* BUTTONS */}
                <Grid item xs={12} sm={6} md={3}>
                    <Button variant="contained" fullWidth onClick={handleAddOrUpdate}>
                        {editIndex !== null ? "Update Item" : "Add Item"}
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Button variant="outlined" fullWidth onClick={resetForm}>
                        Reset
                    </Button>
                </Grid>
            </Grid>

            {/* ---------- DISPLAY SECTION ---------- */}
            <Grid container spacing={2} sx={{ mt: 4 }}>
                {items.map((item, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <Card sx={{ p: 1, borderRadius: 3 }}>
                            {item.image && (
                                <img src={item.image} alt={item.name}
                                    style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
                            )}
                            <CardContent>
                                <Typography variant="h6" fontWeight={600}>{item.name}</Typography>
                                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                                    {item.category === "Author" ? item.author : item.course}
                                </Typography>

                                {item.pdf && (
                                    <Button variant="outlined" href={item.pdf} target="_blank"
                                        fullWidth startIcon={<PictureAsPdfIcon />} sx={{ mt: 1 }}>
                                        View PDF
                                    </Button>
                                )}

                                <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
                                    <IconButton sx={{ color: "green" }} onClick={() => handleEdit(i)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: "red" }} onClick={() => handleDelete(i)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default Dashboard;
