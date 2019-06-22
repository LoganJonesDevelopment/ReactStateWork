import React from 'react';


import './App.css';
import './animations.css';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class App extends React.Component {
  constructor(props) {
     super(props);
   
     this.state = {
        intro: "This is a small web app I made to practice using state and other features in React",
        header: "Header pulled from state",
        content: "Content pulled from state",
        items: ['Item 1...', 'Item 2...', 'Item 3...', 'Item 4...']
      }
      this.handleAdd = this.handleAdd.bind(this);
   };
   handleAdd() {
      var newItems = this.state.items.concat([prompt('Create New Item')]);
      this.setState({items: newItems});
   }
   handleRemove(i) {
      var newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({items: newItems});
   }
  render() {
    var items = this.state.items.map(function(item, i) {
       return (
          <div key = {item} onClick = {this.handleRemove.bind(this, i)}>
             {item}
          </div>
       );
    }.bind(this));
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
           <div>
            <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}>
					<br></br>
               <h1>List created with JSX animations</h1>
               <h2>Click Add Item to enter an item, or click the item itself to remove!</h2>
            </ReactCSSTransitionGroup>
         </div> 
         <div>      
            <button onClick = {this.handleAdd}>Add Item</button>
				
            <ReactCSSTransitionGroup transitionName = "example" 
               transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
               {items}
            </ReactCSSTransitionGroup>
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
