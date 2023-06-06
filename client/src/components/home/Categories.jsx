import { Button, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';

const StyledButton = styled(Button)`
  margin: 20px;
  width: 100%;
  background: #6495ED;
  color: #fff;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <>
      <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
        <StyledButton variant="contained">Create Blog</StyledButton>
      </Link>

      
      
    </>
  );
}

export default Categories;
