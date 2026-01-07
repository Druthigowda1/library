import React, { useState } from 'react';
import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import banner from '../Assets/Banner.png'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';


const StudentStation = 'http://localhost:8080/api/user'; // backend URL

const Loginpage = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });
    const [apiError, setApiError] = useState('');

    // Validate username and password
    const handleValidation = () => {
        let valid = true;
        let tempErrors = { username: '', password: '' };

        if (!username) {
            tempErrors.username = 'Username is required';
            valid = false;
        }

        if (!password) {
            tempErrors.password = 'Password is required';
            valid = false;
        } else if (password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters';
            valid = false;
        }

        setErrors(tempErrors);
        return valid;
    };

    // Login API call
    const handleLogin = async () => {
        if (handleValidation()) {
            try {
                const response = await axios.post(`${StudentStation}/login`, {
                    username,
                    password,
                });

                console.log('Login success:', response.data);
                alert('Login successful!');
                navigate('/dashboard'); // navigate after login
            } catch (error) {
                console.error('Login error:', error.response?.data || error.message);
                setApiError(
                    error.response?.data?.message || 'Login failed. Please check your credentials.'
                );
            }
        }
    };

    const handleSignUp = () => {
        navigate('/sign-up');
    };

    return (
        <Grid
            container
            sx={{
                height: '100vh',
                backgroundSize: 'cover',
                backgroundImage: `url(${banner})`,
                p: 5,
            }}
        >
            <Grid item>
                <Button variant="contained" onClick={() => navigate('/')}>
                    <ArrowBackIos /> Back
                </Button>
            </Grid>

            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
                <Card sx={{ height: 350, width: 350, p: 4, boxShadow: 6 }}>
                    <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
                        Login
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            error={!!errors.username}
                            helperText={errors.username}
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!errors.password}
                            helperText={errors.password}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />


                        {apiError && (
                            <Typography color="error" variant="body2" sx={{ textAlign: 'center' }}>
                                {apiError}
                            </Typography>
                        )}

                        <Button variant="contained" onClick={handleLogin} fullWidth>
                            Login
                        </Button>

                        <Typography variant="body2" sx={{ textAlign: 'center' }}>
                            Don't have an account?{' '}
                            <Button onClick={handleSignUp} sx={{ textTransform: 'none' }}>
                                Sign Up
                            </Button>
                        </Typography>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Loginpage;
