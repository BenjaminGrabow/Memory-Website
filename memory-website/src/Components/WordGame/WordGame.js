import React from 'react';

class WordGame extends React.Component {
        constructor(props) {
                super(props);
                this.state = { 
                        input: ""
                 }
        }

        changeInput = (event) => {
console.log(event)
        }

        render() { 
                return ( 
                        <div>
                                <input value={this.state.input} onChange={this.changeInput} placeholder='Add a new word'></input>
                        </div>
                 );
        }
}
 
export default WordGame;