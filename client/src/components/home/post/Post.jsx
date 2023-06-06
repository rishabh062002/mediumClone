import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 400px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 200
});

const Text = styled(Typography)`
    color: #878787
    font-size: 12px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 10px; 
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
    margin-bottom: 15px;
`;

const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://content-writing-india.com/blog/wp-content/uploads/2018/03/1080px.jpg';

    const getCategoryText = (category) => {
        switch (category) {
            case 'category1':
                return 'Music';
            case 'category2':
                return 'Movies';
            case 'category3':
                return 'Sports';
            case 'category4':
                return 'Tech';
            case 'category5':
                return 'Fashion';
            default:
                return '';
        }
    };

    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container>
            <Image src={url} alt="post" />
            <Text>{getCategoryText(post.categories)}</Text>
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Text>Author: {post.username}</Text>
            <Details>{addEllipsis(post.description, 180)}</Details>
        </Container>
    )
}

export default Post;