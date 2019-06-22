import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
     super(props);
   
     this.state = {
        intro: "This is a small app I made to practice using state and other features in React",
        header: "Header pulled from state",
        content: "Content pulled from state"
     }
  }
  render() {
     return (
        <div class="mainContent">
           <h1 class = "intro">{this.state.intro}</h1>
           <h2 class = "header">{this.state.header}</h2>
           <h2 class = "content">{this.state.content}</h2>
           
           <div class="props">
           <h2>{this.props.introProp}</h2>
           <h2 class = "headerProp">{this.props.headerProp}</h2>
           <h2 class = "contentProp">{this.props.contentProp}</h2>
           </div>
        </div>
     );
  }
}
App.defaultProps = {
  introProp: "Text set in a default prop component",
  headerProp: "Header from props",
  contentProp:"Content from props"
}
export default App;
