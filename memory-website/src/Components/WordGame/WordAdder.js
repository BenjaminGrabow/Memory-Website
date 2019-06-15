import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`

ul {
        list-style: none;
}

.off {
        display: none;
}

.on {
        display: flex,
}
`;

class WordAdder extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        input: "",
                        list: [{
                                word: 'contract',
                        },
                        {
                                word: 'workspace',
                        }],
                        startScreen: 'on',
                }
        }

        changeInput = (event) => {
                this.setState({
                        input: event.target.value
                })
        };

        addWord = () => {
                this.setState(prevState => {

                        if (prevState.list === []) {
                                const newWord = {
                                        word: this.state.input,
                                        id: prevState.list[prevState.list.length - 1].id + 1
                                };
                                return {
                                        list: prevState.list.concat(newWord),
                                        input: ''
                                }
                        } else {
                                const newWord = {
                                        word: this.state.input,
                                };
                                return {
                                        list: prevState.list.concat(newWord),
                                        input: ''
                                }
                        }
                })
        };

        deleteWord = (target) => {
                this.setState(prevState => {

                        const result = prevState.list.filter(listItems => listItems.word !== target);

                        return {

                                list: result
                        }
                })
        };

        startGame = () => {
                this.setState({
                        startScreen: 'off'
                })
        }

        render() {
                return (
                        <StyledDiv>
                                <div className={this.state.startScreen === 'on' ? 'on' : 'off'} >
                                <h1>Add here your words</h1>
                                {this.state.list.map((list, index) => {
                                        return <ul key={index}>
                                                <li id={index}>{list.word}</li>
                                                <button id={list.word} onClick={(event) => this.deleteWord(event.target.id , index)}>X</button>
                                        </ul>
                                })}
                                <input value={this.state.input} onChange={this.changeInput} placeholder='Add a new word'></input>
                                <button onClick={this.addWord}>Add new word</button>

                                <button onClick={this.startGame}>Start your Game</button>
                                </div>
                                <div className={this.state.startScreen}
                        </StyledDiv>
                );
        }
}

export default WordAdder;