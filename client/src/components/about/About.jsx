import React from 'react';
import { Box, styled, Typography, Link } from '@mui/material';

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 50%;
  height: 80vh;
  margin-left: 50px;
  margin-top: 35px;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  padding-top: 35px;
  text-align: center;
  width: 50%;
`;

const Text = styled(Typography)`
  color: black;
  font-size: 18px;
  text-align: justify;
  padding: 20px 50px;
  font-family: "Arial", sans-serif;
`;

const Title = styled(Typography)`
  font-family: "Matura MT Script Capitals" ;
  font-size: 32px;
  font-weight: bold;
`;

const SocialLink = styled(Link)`
  margin-left: 5px;
`;

const About = () => {
  return (
    <Box display="flex">
      <Banner />
      <Wrapper>
        <Typography variant="h4">Welcome To Our Blog</Typography>
        <Text variant="h5">
          Welcome to our blog! At <strong>blog.us</strong>, we are dedicated to sharing knowledge, insights, and stories
          with our readers. Our blog serves as a platform where a diverse community of writers, experts, and enthusiasts
          come together to create a valuable collection of information and captivating content.
          <br /><br />
          Our mission is to inspire, educate, and entertain our readers through the power of well-crafted articles, thought-provoking discussions,
          and meaningful conversations. We cover a wide range of topics, including technology, science, lifestyle, travel,
          and more. Our team of experienced writers, industry professionals, and subject matter experts ensures that the
          content we publish is accurate, informative, and engaging. 
          <br /><br />
          We believe in fostering a strong sense of community, encouraging our readers to actively participate through comments, discussions, and social media interactions.
          We invite you to join us on this exciting journey of exploration and discovery. Subscribe to our newsletter and
          follow us on social media to stay updated with the latest articles, trends, and news. Thank you for visiting
          [Website Name], and we hope you find our blog a valuable resource for inspiration, learning, and connecting
          with like-minded individuals. Happy reading!
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
