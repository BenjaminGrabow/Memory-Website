import React from 'react';
import google from './Google.jpg';
import microsoft from './Microsoft.png';
import huawei from './Huawei.jpg';
import siemens from './siemens.jpg';
import bulb from './Home.jpg'
import styled from 'styled-components';
import { Animated } from "react-animated-css";

const StyledDiv = styled.div`
display: flex;

.typing {
        position: relative;
}

@keyframes blink {
        0%{
                opacity: 0;
        }
        100%{
                opacity: 1;
        }
}
.typing::after {
        content: "";
        position: absolute;
        width: .1rem;
        height: 100%;
        border-right: .2rem solid black;
        animation: blink 0.5s infinite ease;
}


button {
        background-color: #28a745;
        color: white;
        border-radius: 2rem;
        box-shadow: 1rem .5rem .5rem black;
}

.left {
        margin: 1rem;
}
.trust {
        color: #dedede;
        font-weight: bold;
        font-size: .8rem;
}
.row {
 img {
         width: 30%;
         height: 4rem;
 }
}

.right {

        img {
                width: 100%;
                height: 30rem;
               
        }
}
`;

class TopContent extends React.Component {
        constructor(props) {
                super(props);
                this.state = {}
        }

        componentDidMount = () => {
                const texts = ['websites', 'illustration', 'hello'];
                let count = 0;
                let index = 0;
                let currentText = "";
                let letter = "";

                (function type() {

                        if (count === texts.length) {
                                count = 0;
                        }

                        currentText = texts[count];
                        letter = currentText.slice(0, ++index);

                        document.querySelector('.typing').textContent = letter;
                        if (letter.length === currentText.length) {
                                count++;
                                index = 0;
                        }
                        setTimeout(type, 400);
                }());
        };

        render() {
                return (
                        <StyledDiv>
                                <div className="left">
                                        <Animated animationIn="bounceInDown"
                                                animationOut="bounce"
                                                animationInDuration={3000}
                                                animationOutDuration={3000}
                                                isVisible={true}>
                                                <h1>The game to train your</h1>
                                                <h1 className="typing">Hi</h1>
                                                <p>Manage yoour entire spend process in one place. Request, pay, and automate <br />
                                                        your AP accounting with Airbase</p>
                                                <button>Get a demo</button>
                                                <p className="trust">Trusted by finance teams at all stages</p>
                                        </Animated>
                                        <Animated animationIn="bounceInLeft"
                                                animationOut="bounce"
                                                animationInDuration={3000}
                                                animationOutDuration={3000}
                                                isVisible={true}>
                                                <div className="row">
                                                        <img src={google} alt="google" />
                                                        <img src={microsoft} alt="microsoft" />
                                                </div>
                                                <div className="row">
                                                        <img src={siemens} alt="siemens" />
                                                        <img src={huawei} alt="huawei" />
                                                </div>
                                        </Animated>
                                </div>
                                <div className="right">
                                        <Animated animationIn="fadeInRightBig"
                                                animationOut="fadeOut"
                                                animationInDuration={1400}
                                                animationOutDuration={1400}
                                                isVisible={true}>
                                                <img src={bulb} alt="bulb" />
                                        </Animated>

                                </div>
                        </StyledDiv>
                );
        }
}

export default TopContent;