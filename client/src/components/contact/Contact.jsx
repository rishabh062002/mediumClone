import React from 'react';
import { Box, styled, Typography, Link, TextField, Button, TextareaAutosize } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
  background-image: url(http://mrtaba.ir/image/bg2.jpg);
  width: 50%;
  height: 80vh;
  margin-left: 50px;
  margin-top: 35px;
  background-position: left 0px top -100px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  display: flex;
  padding-top: 60px;
  flex-direction: column;
  align-items: center;
  width: 50%;

  & > h3 {
    margin-top: 30px;
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: bold;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const InputWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const ContactLinks = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const StyledLink = styled(Link)`
  margin: 0 10px;
`;

const Contact = () => {
  const handleSendEmail = () => {
    // Code to handle sending email
  };

  return (
    <Box display="flex">
      <Banner />
      <Wrapper>
        <Typography variant="h3">Get in Touch</Typography>

        <Typography variant="h5" mt={4}>
          Contact Form
        </Typography>
        <Box width="100%" maxWidth="400px" p={2}>
          <InputWrapper>
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField label="Email" variant="outlined" fullWidth />
          </InputWrapper>
          <TextareaAutosize
            rows={10}
            cols={20}
            placeholder="Your comments..."
            style={{
              resize: 'none',
              borderRadius: '4px',
              padding: '8px',
              marginBottom: '20px',
              height: '75px',
              width: '96%',
            }}
          />
          <Button variant="contained" color="primary" onClick={handleSendEmail} fullWidth>
            Send Email
          </Button>
        </Box>

        <ContactLinks>
          <StyledLink href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
            <Instagram />
          </StyledLink>
          <StyledLink href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
            <Email />
          </StyledLink>
        </ContactLinks>
      </Wrapper>
    </Box>
  );
};

export default Contact;
