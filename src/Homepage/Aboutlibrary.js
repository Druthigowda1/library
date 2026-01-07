import React from 'react';
import { Box, Typography } from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderOffIcon from '@mui/icons-material/FolderOff';
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';

const benefits = [
    { icon: <LaptopIcon sx={{ fontSize: { xs: 32, sm: 40, md: 50 }, color: '#4caf50' }} />, title: 'Access on Demand' },
    { icon: <HeadsetIcon sx={{ fontSize: { xs: 32, sm: 40, md: 50 }, color: '#ff9800' }} />, title: '24/7 Availability' },
    { icon: <SettingsIcon sx={{ fontSize: { xs: 32, sm: 40, md: 50 }, color: '#f44336' }} />, title: 'Automated Management' },
    { icon: <FolderOffIcon sx={{ fontSize: { xs: 32, sm: 40, md: 50 }, color: '#4db6ac' }} />, title: 'Elimination of Deterioration' },
    { icon: <StorageIcon sx={{ fontSize: { xs: 32, sm: 40, md: 50 }, color: '#2196f3' }} />, title: 'Space Saving' },
    { icon: <DevicesIcon sx={{ fontSize: { xs: 32, sm: 40, md: 50 }, color: '#9c27b0' }} />, title: 'Easy Access' },
];

const DigitalLibraryBenefits = () => {
    return (
        <Box sx={{ background: '#fff', py: 3, px: { xs: 2, sm: 4, md: 8 }, overflow: 'hidden', mb: { md: -7, xs: -11, sm: -11 } }}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mb: 3,
                    color: '#2f4670',
                    fontSize: { xs: '24px', sm: '28px', md: '34px' }
                }}
            >
                Benefits of a Digital Library
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    width: 'max-content',
                    animation: 'scroll 25s linear infinite',
                    '&:hover': { animationPlayState: 'paused' },   // pause on hover
                    '@keyframes scroll': {
                        '0%': { transform: 'translateX(0)' },
                        '100%': { transform: 'translateX(-50%)' },
                    },
                }}
            >
                {[...benefits, ...benefits].map((benefit, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: { xs: 150, sm: 150, md: 180 },
                            flexShrink: 0,
                            mx: { xs: 1.5, sm: 2.5, md: 3 },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: 75, sm: 85, md: 100 },
                                height: { xs: 75, sm: 85, md: 100 },
                                borderRadius: '50%',
                                border: '5px solid #404a42',
                                background: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 2,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            }}
                        >
                            {benefit.icon}
                        </Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                fontSize: { xs: '14px', sm: '16px', md: '18px' }
                            }}
                        >
                            {benefit.title}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default DigitalLibraryBenefits;
