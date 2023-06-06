// import { Grid } from '@mui/material';
// import Banner from '../banner/Banner';
// import Categories from './Categories';
// import Posts from './post/Posts';

// const Home = () => {
//     return (
//         <>
//              <Banner />
//              <Grid container justifyContent="center" alignItems="center">
//                  <Grid item lg={3} xs={12} sm={2}>
//                      <Categories />
//                  </Grid>
//                  <Grid container item xs={12} sm={10} lg={10} justifyContent="center">
//                      <Posts />
//                  </Grid>
//              </Grid>
//          </>
//     );
// };

// export default Home;

// import { Grid, TextField } from '@mui/material';
// import { useState } from 'react';
// import Banner from '../banner/Banner';
// import Categories from './Categories';
// import Posts from './post/Posts';

// const Home = () => {
//     const [searchQuery, setSearchQuery] = useState('');

//     const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     const filterPosts = (post) => {
        
//         return post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.username.toLowerCase().includes(searchQuery.toLowerCase());
//     };

//     return (
//         <>
//             <Banner />
//             <Grid container justifyContent="center" alignItems="center">
//                 <Grid item lg={3} xs={12} sm={2}>
//                     <Categories />
//                 </Grid>
//                 <Grid container item xs={12} sm={10} lg={10} justifyContent="center">
//                     <TextField
//                         label="Search"
//                         variant="outlined"
//                         value={searchQuery}
//                         onChange={handleSearchChange}
//                         fullWidth
//                         margin="normal"
//                     />
//                     <Posts filterFn={filterPosts} />
//                 </Grid>
//             </Grid>
//         </>
//     );
// };

// export default Home;

import { Grid, TextField } from '@mui/material';
import { useState } from 'react';
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filterPosts = (post) => {
        // Filter posts by title or username based on search query
        return (
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.username.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    return (
        <>
            <Banner />
            <Grid container justifyContent="center" alignItems="center">
                <Grid item lg={3} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10} justifyContent="center">
                    <TextField
                        label="Search by title or username"
                        variant="outlined"
                        placeholder="Search by title or username"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        fullWidth
                        margin="normal"
                    />
                    <Posts filterFn={filterPosts} />
                </Grid>
            </Grid>
        </>
    );
};

export default Home;

