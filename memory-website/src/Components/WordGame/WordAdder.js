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
        display: flex;
        flex-direction: column;
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
                        inputGame: '',
                        gameList: [],
                        showResult: 'off',
                        resultMessage: '',
                }
        }

        changeInput = (event) => {
                this.setState({
                        [event.target.name]: event.target.value
                })
        };

        addWord = () => {
                this.setState(prevState => {
                        const newWord = {
                                word: this.state.input,
                        };
                        return {
                                list: prevState.list.concat(newWord),
                                input: ''
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
        };

        addWordGame = () => {
                this.setState(prevState => {
                        const newWord = {
                                word: this.state.inputGame,
                        };
                        return {
                                gameList: prevState.gameList.concat(newWord),
                                inputGame: ''
                        }
                })
        };

        deleteWordGame = (target) => {
                this.setState(prevState => {

                        const result = prevState.gameList.filter(listItems => listItems.word !== target);

                        return {

                                gameList: result
                        }
                })
        };

        showResult = () => {
                this.setState({
                        startScreen: "",
                        showResult: 'on'
                })
                console.log()
        }

        render() {
                return (
                        <StyledDiv>
                                <div className={this.state.showResult === 'off' ? 'off' : 'on'}>
                                        <h1>{this.state.resultMessage}</h1>

                                </div>
                                <div className={this.state.startScreen === 'off' ? 'off' : 'on'} >
                                        <h1>Add here your words</h1>
                                        {this.state.list.map((list, index) => {
                                                return <ul key={index}>
                                                        <li id={index}>{list.word}</li>
                                                        <button id={list.word}
                                                                onClick={(event) => this.deleteWord(event.target.id, index)}>
                                                                X
                                                                 </button>
                                                </ul>
                                        })}
                                        <input name='input'
                                                value={this.state.input}
                                                onChange={this.changeInput}
                                                placeholder='Add a new word'></input>
                                        <button onClick={this.addWord}>
                                                Add new word
                                                </button>
                                        <button onClick={this.startGame}>
                                                Start your Game
                                                </button>
                                </div>
                                <div
                                        className={this.state.startScreen === 'on' ? 'off' : 'on'}>
                                        <h1>Start writing your words from your memory</h1>
                                        {this.state.gameList.map((list, index) => {
                                                return <ul key={index}>
                                                        <li id={index}>
                                                                {list.word}
                                                        </li>
                                                        <button
                                                                id={list.word}
                                                                onClick={(event) => this.deleteWordGame(event.target.id, index)}>
                                                                X
                                                                  </button>
                                                </ul>
                                        })}
                                        <input
                                                name='inputGame'
                                                value={this.state.inputGame}
                                                onChange={this.changeInput}
                                                placeholder='Add a new word'></input>
                                        <button onClick={this.addWordGame}>
                                                Add new word
                                                </button>
                                        <button
                                                onClick={this.showResult} >
                                                Finish
                                                </button>
                                </div>
                        </StyledDiv>
                );
        }
}

export default WordAdder;