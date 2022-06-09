import React from 'react';
import styled from 'styled-components';
const LayoutStyled = styled.div`
  width: 100%;
  padding: 0 16px;
  @media (min-width: 640px) {
    width: 900px;
    margin: 0 auto;
  }
`;
const Layout: React.FC = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
