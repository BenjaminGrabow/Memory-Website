import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
width: 100%;

a {
        width: 100%;
        text-decoration: none;
        margin: 1rem;
}

`;

const Header = () => {
        return (
                <StyledHeader>
                        <nav>
                                <Link to="/">Home</Link>
                                <Link to="/picture_game">Picture Game</Link>
                                <Link to="#">Games</Link>
                                <Link to="#">Team</Link>
                        </nav>
                </StyledHeader>
          );
}
 
export default Header;