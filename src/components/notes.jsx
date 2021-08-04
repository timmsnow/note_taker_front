import React, { Component } from "react";
import axios from 'axios';

class Home extends Component {
  state = {
    errors: [],
    notes: [],
  };

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios.get("notes").then((response) => {
      console.log(response.data);
      const notes = response.data;
        this.setState({ notes });
    });
  };

  render() { 
    return ( 
    <div>
    <h1>Notes!</h1>
    <ul>
        { this.state.notes.map(note => <li key={note.id}>{note.title}
       {note.todos}</li>)}
      </ul>
    </div>
     );
  }
}
 

export default Home;
