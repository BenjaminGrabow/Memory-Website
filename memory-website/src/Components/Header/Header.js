import React from 'react';
import { NavLink, Route, withRouter, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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

.navSlider-exit > .page {
        z-index: 1;
}

.navSlider-enter > .page {
        z-index: 10;
}

.navSlider-enter > .page {
        transform: translate3d(100%, 0, 0);
}

.navSlider-enter > .page {
        transform: translate3d(-100%, 0, 0);
}

.navSlider-exit > .page {
        transform: translate3d(-100%, 0, 0);
}

.navSlider-exit > .page {
        transform: translate3d(100%, 0, 0);
}

.navSlider-enter.navSlider-enter-active > .page {
        transform: translate3d(0, 0, 0);
        transition: all 800ms ease-in-out;
}

`;

class Header extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        prevDepth: this.getPathDepth(this.props.location)
                }
        }

        componentWillReceiveProps() {
                this.setState({
                        prevDepth: this.getPathDepth(this.props.location)
                })
        }

        getPathDepth(location) {
                let pathArr = location.pathname.split("/");
                pathArr = pathArr.filter(n => n !== "");
                return pathArr.length;
        }

        render() {
                const { location } = this.props;

                const currentKey = location.pathname.split("/")[1] || "/";

                const timeout = { enter: 800, exit: 400 };
                return (
                        <StyledHeader>
                                <nav>
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/picture_game">Picture Game</NavLink>
                                        <NavLink to="/word_game">Word Game</NavLink>
                                        <NavLink to="#">Team</NavLink>
                                </nav>
                                <TransitionGroup component="div" className="animation">
                                        <CSSTransition
                                                key={currentKey}
                                                timeout={timeout}
                                                classNames="navSlider"
                                                mountOnEnter={false}
                                                unmountOnExit={true} >
                                                <div
                                                        className={this.getPathDepth(location) - this.state.prevDepth >= 0 ? "left" : "right"}>
                                                        <Switch location={location}>
                                                                <Route path="/picture_game" component={GameWrapper} />
                                                                <Route path="/word_game" component={WordGameWrapper} />
                                                        </Switch>
                                                </div>
                                        </CSSTransition>
                                </TransitionGroup>
                        </StyledHeader>
                );
        }
}

export default withRouter(Header);