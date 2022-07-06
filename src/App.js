// import React, { Component } from 'react';
// import Table from './Journal/Table';
// import Form from './Form/Form';

// class App extends Component {
//     state = {
//         characters: []
//     };

//     removeCharacter = index => {
//         const { characters } = this.state;

//         this.setState({
//             characters: characters.filter((character, i) => { 
//                 return i !== index;
//             })
//         });
//     }

//     handleSubmit = character => {
//         this.setState({characters: [...this.state.characters, character]});
//     }

//     render() {
//         const { characters } = this.state;

//         return (
//             <div className="container">
//                 <h1>Personal Journal</h1>
//                 <p>Begin Writing your journal</p>
//                 <Table
//                     characterData={characters}
//                     removeCharacter={this.removeCharacter}
//                 />
//                 <h3>Journal</h3>
//                 <Form handleSubmit={this.handleSubmit} />
//             </div>
//         );
//     }
// }

// export default App;

// // import logo from './logo.svg';
// // import './App.css';

// // function App() {

// //   return (
// //     <div className="App">
// //       <h1>Hello React</h1>
// //     </div>
// //   );
// // }

// // export default App;



import logo from './logo.svg';
import './App.css';
import Entries from './Entries';
import Form from './Form';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  // stores all of our journals that we fetched from the server
  const [journals, setJournals] = useState([]);

  // load/fetch data

  // runs when the component loads
  useEffect(() => {
    // this functions makes api request for all journals
    async function loadData() {
      axios.get('http://localhost:3001/get-all-journals').then((res) => {
        console.log(res.data.document);
        setJournals(res.data.document);

      }).catch((err) => {
        console.log(err);
      })
    }


    // run function 
    loadData();
  }, [])
  // ok

  // handling submits / adding submits for entries
  // when adding entries
  const handleSubmit = (entry) => {
    // async function postData('http://localhost:3001/add-journal' = '', data =  {}){
    //   const response = await fetch('http://localhost:3001/get-all-journals', {
    //     body: 'post',
    //   })
    // }
    // ) {
    //   axios.get('http://localhost:3001/get-all-journals').then((res) => {
    //     console.log(res.data.document);
    //     setJournals(res.data.document);

    //   }).catch((err) => {
    //     console.log(err);
    //   })
    // }  
    
    const article = { 
        title: 'Axios POST Request Example', 
        body: 'incomingData'};
      
      axios.post(`https://localhost:3001/add-journal`, article)
    // axios.post(`http://localhost:3001/add-journal/${id}`).then((res) => {
    //   console.log(res.data.document);
      // filter through an array -> remove a specific index then delete
      setJournals([...journals, entry])
    
      // catching errors
    // }).catch((err) => {
    //   console.log(err);
    // })
    // spread syntax -> take the already updated array, add it to the delete function
    
  }
  // removing entries
  const removeEntry = id => {
    axios.delete(`http://localhost:3001/delete-journal/${id}`).then((res) => {
      // grabbing from an object
      console.log(res.data.document);
      // filter through an array -> remove a specific index then delete
      setJournals(journals.filter(journal => journal._id !== id))

      // catching errors
    }).catch((err) => {
      console.log(err);
    })



  }


  return (
    <div className="App">
      <h1>Journal App</h1>
      {/* adding the list of journals and the remove feature */}
      <Entries entryData={journals} removeEntry={removeEntry} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;