import React from 'react';
import styled from "styled-components";
import { Route } from 'react-router-dom';

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

        addWord = () => {
                
                this.setState( prevState => {
                        const newWord = {word: this.state.input};
                        return {
                                list: prevState.list.concat(newWord),
                                input: ''
                        }
                })
        }

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
                                <button onClick={this.addWord}>Add new word</button>
                        </StyledDiv>
                );
        }
}

export default WordGame;