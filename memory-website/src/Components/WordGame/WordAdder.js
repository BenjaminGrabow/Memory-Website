import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`

background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

button {
background-color: red;
border-radius: 50%;
width: 15%;
height: 5rem;
box-shadow: 1rem .5rem .5rem black;
}

ul {
list-style: none;
background: #c31432;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
display: flex;
color: white;
width: 50%;
margin: 1rem auto;
justify-content: space-around;
border-radius: 3rem;
align-items: center;
box-shadow: 1rem .5rem .5rem black;
transition: all 2s ease-in;

&:hover{
        transform: rotate(20deg);
}
}


input {
        width: 40%;
    border-radius: 3rem; 
    margin-top: .5rem;
    box-shadow: 1rem .5rem .5rem black;
    font-size: 1.5rem; 
}

.input-button {
        margin: 1rem auto; 
        width: 50%;
}

.off {
        display: none;
}

.on {
        display: flex;
        flex-direction: column;
}

.result {
  color: red;
  font-size: 5rem;
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

                if (JSON.stringify(this.state.gameList) === JSON.stringify(this.state.list)
                ) {
                        this.setState({
                                resultMessage: 'You have won !!!'
                        })
                }

                if (JSON.stringify(this.state.gameList) === JSON.stringify(this.state.list)
                        === false) {
                        this.setState({
                                resultMessage: 'Your forgot something.'
                        })
                }
        };

        playAgain = () => {
                this.setState({
                        showResult: "off",
                        startScreen: 'on'
                })
        }

        render() {
                return (
                        <StyledDiv>
                                <div className={this.state.showResult === 'off' ? 'off' : 'on'}>
                                        <h1 className="result">{this.state.resultMessage}</h1>
                                        <button onClick={this.playAgain}>Play Again</button>

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
                                        <div className="input-button">
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
                                        <div className="input-button">
                                        <input
                                                name='inputGame'
                                                value={this.state.inputGame}
                                                onChange={this.changeInput}
                                                placeholder='Add a new word'></input>
                                        <button onClick={this.addWordGame}>
                                                Add word
                                                </button>
                                        <button
                                                onClick={this.showResult} >
                                                Finish
                                                </button>
                                                </div>
                                </div>
                        </StyledDiv>
                );
        }
}

export default WordAdder;