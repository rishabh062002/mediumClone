import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
  width: 100%;
  background: url(https://png.pngtree.com/background/20211215/original/pngtree-beautiful-seed-green-leaf-rice-white-fresh-banner-picture-image_1493149.jpg) center/cover;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #9c462a;
  font-family: Cooper Black;
  line-height: 1;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  color: #9c462a;
  font-family: Matura MT Script Capitals;
`;

const Banner = () => {
  return (
    <Image>
      <Heading>blog.us</Heading>
      <SubHeading>Read, Write and Learn</SubHeading>
    </Image>
  );
};

export default Banner;
