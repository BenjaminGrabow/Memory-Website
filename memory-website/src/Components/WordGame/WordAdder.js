import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`

ul {
        list-style: none;
}
`;

class WordAdder extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        input: "",
                        list: [{
                                word: 'contract',
                                id: 1
                        },
                        {
                                word: 'workspace',
                                id: 2
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
                        const newWord = {
                                word: this.state.input,
                                id: prevState.list[prevState.list.length - 1].id + 1
                        };
                        return {
                                list: prevState.list.concat(newWord),
                                input: ''
                        }
                })
                console.log(this.state.list)
        }

        render() {
                return (
                        <StyledDiv>
                                <h1>Add here your words</h1>
                                {this.state.list.map((list) => {
                                        return <ul>
                                                <li id={this.state.list.id}>{list.word}</li>
                                        </ul>
                                })}
                                <input value={this.state.input} onChange={this.changeInput} placeholder='Add a new word'></input>
                                <button onClick={this.addWord}>Add new word</button>
                                <button onClick={this.deleteWord}>Delete marked words</button>
                        </StyledDiv>
                );
        }
}

export default WordAdder;