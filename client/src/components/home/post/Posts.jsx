// import React, { useEffect, useState } from 'react';
// import { Grid, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { API } from '../../../service/api';
// import Post from './Post';

// const Posts = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await API.getAllPosts();
//       if (response.isSuccess) {
//         setPosts(response.data);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       {posts?.length ? (
//         <Grid container spacing={2}>
//           {posts.map((post) => (
//             <Grid item lg={3} sm={4} xs={12} key={post._id}>
//               <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${post._id}`}>
//                 <Post post={post} />
//               </Link>
//             </Grid>
//           ))}
//         </Grid>
//       ) : (
//         <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>
//           No data is available for the searched post title.
//         </Box>
//       )}
//     </>
//   );
// };

// export default Posts;

import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { API } from '../../../service/api';
import Post from './Post';

const Posts = ({ filterFn }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getAllPosts();
      if (response.isSuccess) {
        setPosts(response.data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (filterFn) {
      const filtered = posts.filter(filterFn);
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [posts, filterFn]);

  return (
    <>
      {filteredPosts.length ? (
        <Grid container spacing={2}>
          {filteredPosts.map((post) => (
            <Grid item lg={4} sm={4} xs={12} key={post._id}>
              <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${post._id}`}>
                <Post post={post} />
              </Link>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>
          No data is available for the searched post title.
        </Box>
      )}
    </>
  );
};

export default Posts;




