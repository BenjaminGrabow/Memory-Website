import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import GameWrapper from '../PictureGame/GameWrapper';
import WordGameWrapper from '../WordGame/WordGameWrapper';
import styled from 'styled-components';

const StyledHeader = styled.header`

background-color: black;

 nav {
        background: black;
        height: 3rem;
        width: 100%;
 }

a {
        text-decoration: none;
        width: 100%;
        color: white;
        padding: 1.5rem;
        
}
`;

const Header = () => {
        return (
                <StyledHeader>
                        <nav>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/picture_game">Picture Game</NavLink>
                                <NavLink to="/word_game">Word Game</NavLink>
                                <NavLink to="#">Team</NavLink>

                                
  <Route path="/picture_game" component={GameWrapper} />
  <Route path="/word_game" component={WordGameWrapper} />
                        </nav>
                </StyledHeader>
          );
}
 
export default Header;