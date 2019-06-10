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
                        input: "",
                        list: [{
                                word: 'contract'
                        },
                        {
                                word: 'workspace'
                        }]
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
                                {this.state.list.map(list => {
                                        return <ul>
                                                <li>{list.word}</li>
                                        </ul>
                                })}
                                <input value={this.state.input} onChange={this.changeInput} placeholder='Add a new word'></input>
                        </StyledDiv>
                );
        }
}

export default WordGame;