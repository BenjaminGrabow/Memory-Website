import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import GameWrapper from '../PictureGame/GameWrapper';
import WordGameWrapper from '../WordGame/WordGameWrapper';
import styled from 'styled-components';

const StyledHeader = styled.header`

 nav {
        background: black;
        width: 100%;
 }

a {
        text-decoration: none;
        width: 100%;
        color: white;
        padding: 1.5rem;
        
}
`;

class Header extends React.Component {
        constructor(props) {
                super(props);
                this.state = {}
        }
        render() {
                return (
                        <StyledHeader>
                                <nav>
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/picture_game">Picture Game</NavLink>
                                        <NavLink to="/word_game">Word Game</NavLink>
                                        <NavLink to="#">Team</NavLink>
                                </nav>
                                <Route path="/picture_game" component={GameWrapper} />
                                <Route path="/word_game" component={WordGameWrapper} />
                        </StyledHeader>
                );
        }
}

export default withRouter(Header);