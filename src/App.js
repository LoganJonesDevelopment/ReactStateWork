import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
     super(props);
   
     this.state = {
        intro: "This is a small app I made to practice using state in React",
        header: "Header pulled from state...",
        content: "Content pulled from state..."
     }
  }
  render() {
     return (
        <div>
           <h1>{this.state.intro}</h1>
           <h3>{this.state.header}</h3>
           <h4>{this.state.content}</h4>
        </div>
     );
  }
}

export default App;
