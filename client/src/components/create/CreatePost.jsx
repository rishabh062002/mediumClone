// import React, { useState, useEffect, useContext } from 'react';
// import { styled, Box, TextareaAutosize, Button, InputBase, FormControl } from '@mui/material';
// import { AddCircle as Add } from '@mui/icons-material';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Select, MenuItem } from '@mui/material';
// import { API } from '../../service/api';
// import { DataContext } from '../../context/DataProvider';

// const Container = styled(Box)(({ theme }) => ({
//   width: '100%',
//   minHeight: '91.2vh',
//   background: 'url(https://d11xrvp9l4ngvc.cloudfront.net/images/blogs/Blog_writing.jpg)',
//   backgroundSize: 'cover',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const ContentContainer = styled(Box)(({ theme }) => ({
//   width: '100%',
//   maxWidth: '800px',
//   background: 'rgba(255, 255, 255, 0.8)',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   padding: '40px',
//   marginTop: '-5px',
//   paddingTop: '0px',
// }));


// const Image = styled('img')({
//   width: '100%',
//   maxHeight: '50vh',
//   paddingTop: '40px',
//   paddingBottom: '40px',
//   objectFit: 'cover',
// });

// const StyledFormControl = styled(FormControl)`
//   margin-top: 10px;
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   margin-bottom: 20px;
// `;

// const InputTextField = styled(InputBase)`
//   flex: 1;
//   margin: 0 10px;
//   font-size: 20px;
//   border: 1px solid black;
//   padding: 5px 10px;
//   border-radius: 4px;
// `;

// const PublishButton = styled(Button)`
//   margin: 0 10px;
//   font-size: 18px;
//   text-transform: uppercase;
//   background-color: #2196f3;
//   color: #fff;

//   &:hover {
//     background-color: #1976d2;
//   }
// `;

// const Textarea = styled(TextareaAutosize)`
//   width: 100%;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   resize: vertical;
//   overflow-y: auto;
//   min-height: 15px; 
//   max-height: 1100px; 
//   height: ${props => props.textareaHeight}px;
// `;



// const initialPost = {
// title: '',
// description: '',
// picture: '',
// username: '',
// categories: '',
// createdDate: new Date(),
// };

// const CreatePost = () => {

// const navigate = useNavigate();
// const location = useLocation();

// const [post, setPost] = useState(initialPost);
// const [file, setFile] = useState('');
// const { account } = useContext(DataContext);
// const [textareaHeight, setTextareaHeight] = useState(100);
// const [selectedCategory, setSelectedCategory] = useState('');


// const url =
// post.picture ||
// 'https://thumbs.dreamstime.com/b/tablet-web-icon-blog-home-page-blogs-social-technology-writing-website-wooden-table-office-tools-150254828.jpg';

// useEffect(() => {
// const getImage = async () => {
// if (file) {
// const data = new FormData();
// data.append('name', file.name);
// data.append('file', file);

//     const response = await API.uploadFile(data);
//     post.picture = response.data;
//   }
// };
// getImage();
// post.categories = selectedCategory || location.search?.split('=')[1] || 'All';

// post.username = account.username;
// }, [file]);

// const savePost = async () => {
// await API.createPost(post);
// navigate('/');
// };

//  const handleChange = (e) => {
//   if (e.target.name === 'description') {
//     setPost({ ...post, [e.target.name]: e.target.value });
//   } else {
//     setPost({ ...post, [e.target.name]: e.target.value });
//   }
// };

// const handleTextareaChange = (e) => {
//   const paragraphs = e.target.value.split('\n');
//   const formattedDescription = paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('');
//   setPost({ ...post, description: formattedDescription });
// };


// return (
// <Container>
// <ContentContainer>
// <Image src={url} alt="post" />

//     <StyledFormControl>
//   <label htmlFor="fileInput">
//     <Add fontSize="large" color="action" />
//   </label>
//   <input
//     type="file"
//     id="fileInput"
//     style={{ display: "none" }}
//     onChange={(e) => setFile(e.target.files[0])}
//   />
//   <InputTextField onChange={(e) => handleChange(e)} name="title" placeholder="Title" />

//   <Select
//     value={selectedCategory}
//     onChange={(e) => setSelectedCategory(e.target.value)}
//     name="category"
//     displayEmpty
//     input={<InputTextField />}
// style={{ display: 'none' }}
//   >
//     <MenuItem value="" disabled>
//       Select Category
//     </MenuItem>
//     <MenuItem value="category1">Music</MenuItem>
//     <MenuItem value="category2">Movies</MenuItem>
//     <MenuItem value="category3">Sports</MenuItem>
// <MenuItem value="category4">Tech</MenuItem>
// <MenuItem value="category">Fashion</MenuItem>
//     {/* Add more categories as needed */}
//   </Select>

//   <Button onClick={() => savePost()} variant="contained" color="primary">
//     Publish
//   </Button>
// </StyledFormControl>


//     <Textarea
//   rowsMin={5}
//   placeholder="Tell your story..."
//   name="description"
//   cols={200}
//   onChange={handleTextareaChange}
//   textareaHeight={textareaHeight}
// />


//   </ContentContainer>
// </Container>
// );
// };

// export default CreatePost;

import React, { useState, useEffect, useContext } from 'react';
import { styled, Box, TextareaAutosize, Button, InputBase, FormControl } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Select, MenuItem } from '@mui/material';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '91.2vh',
  background: 'url(https://d11xrvp9l4ngvc.cloudfront.net/images/blogs/Blog_writing.jpg)',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  background: 'rgba(255, 255, 255, 0.8)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px',
  marginTop: '-5px',
  paddingTop: '0px',
}));

const Image = styled('img')({
  width: '100%',
  maxHeight: '50vh',
  paddingTop: '40px',
  paddingBottom: '40px',
  objectFit: 'cover',
});

const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 10px;
  font-size: 20px;
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 4px;
`;

const PublishButton = styled(Button)`
  margin: 0 10px;
  font-size: 18px;
  text-transform: uppercase;
  background-color: #2196f3;
  color: #fff;

  &:hover {
    background-color: #1976d2;
  }
`;

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  overflow-y: auto;
  min-height: 15px;
  max-height: 1100px;
  height: ${props => props.textareaHeight}px;
`;

const initialPost = {
  title: '',
  description: '',
  picture: '',
  username: '',
  categories: '',
  createdDate: new Date(),
};

const CreatePost = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState('');
  const { account } = useContext(DataContext);
  const [textareaHeight, setTextareaHeight] = useState(100);
  const [selectedCategory, setSelectedCategory] = useState('');

  const url =
    post.picture ||
    'https://thumbs.dreamstime.com/b/tablet-web-icon-blog-home-page-blogs-social-technology-writing-website-wooden-table-office-tools-150254828.jpg';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);

        const response = await API.uploadFile(data);
        setPost(prevPost => ({ ...prevPost, picture: response.data }));
      }
    };
    getImage();

    setPost(prevPost => ({
      ...prevPost,
      categories: selectedCategory || location.search?.split('=')[1] || 'All',
      username: account.username,
    }));
  }, [file, selectedCategory, account.username, location.search]);

  const savePost = async () => {
    if (file) {
      const data = new FormData();
      data.append('name', file.name);
      data.append('file', file);

      const response = await API.uploadFile(data);
      setPost(prevPost => ({ ...prevPost, picture: response.data }));
    }

    await API.createPost(post);
    navigate('/');
  };

  const handleChange = (e) => {
    setPost(prevPost => ({ ...prevPost, [e.target.name]: e.target.value }));
  };

  const handleTextareaChange = (e) => {
    const paragraphs = e.target.value.split('\n');
    const formattedDescription = paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('');
    setPost(prevPost => ({ ...prevPost, description: formattedDescription }));
  };

  return (
    <Container>
      <ContentContainer>
        <Image src={url} alt="post" />

        <StyledFormControl>
          <label htmlFor="fileInput">
            <Add fontSize="large" color="action" />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <InputTextField onChange={handleChange} name="title" placeholder="Title" />

          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            name="category"
            displayEmpty
            input={<InputTextField />}
            style={{ display: 'none' }}
          >
            <MenuItem value="" disabled>
              Select Category
            </MenuItem>
            <MenuItem value="category1">Music</MenuItem>
            <MenuItem value="category2">Movies</MenuItem>
            <MenuItem value="category3">Sports</MenuItem>
            <MenuItem value="category4">Tech</MenuItem>
            <MenuItem value="category">Fashion</MenuItem>
            {/* Add more categories as needed */}
          </Select>

          <PublishButton onClick={savePost} variant="contained" color="primary">
            Publish
          </PublishButton>
        </StyledFormControl>

        <Textarea
          rowsMin={5}
          placeholder="Tell your story..."
          name="description"
          cols={200}
          onChange={handleTextareaChange}
          textareaHeight={textareaHeight}
        />
      </ContentContainer>
    </Container>
  );
};

export default CreatePost;
