import React from 'react';
import { Box } from '@mui/material';
import linkedInImg from '../../../assets/img/linkedin.png';
import style from './style';

const ContactUs = () => {
  return (
    <Box id="contact-us" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '700px  ' }}>
      <Box
        onClick={() => {
          window.open('https://www.linkedin.com/in/mohammad-alnabalebe/', '_blank');
        }}
        width={{ xs: '200px', sm: '300px' }}
        height={{ xs: '200px', sm: '300px' }}
        sx={{ ...style.contactUs, backgroundImage: `url("${linkedInImg}")` }}
      ></Box>
    </Box>
  );
};

export default ContactUs;
