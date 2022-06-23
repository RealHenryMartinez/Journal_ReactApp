import React, { Component } from 'react';
import Table from './Journal/Table';
import Form from './Form/Form';

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <h1>Personal Journal</h1>
                <p>Begin Writing your journal</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Journal</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {

//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//     </div>
//   );
// }

// export default App;
