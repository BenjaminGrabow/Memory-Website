import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`

ul {
        list-style: none;
}
`;

class WordGame extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        input: ""
                }
        }

        changeInput = (event) => {
                this.setState({
                        input: event.target.value
                })
        };

        render() {
                return (
                        <StyledDiv>
                                <h1>Add here your words</h1>
                                <ul>
                                        <li>contract</li>
                                </ul>
                                <input value={this.state.input} onChange={this.changeInput} placeholder='Add a new word'></input>
                        </StyledDiv>
                );
        }
}

export default WordGame;