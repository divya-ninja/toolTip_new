import React, {Component} from 'react';
import './App.css';
import Tip from './Tip';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {    // setting the tip's initial state to false
      showTip: false
    }

    // binding the functions
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  // function for showing the tip on hover
  handleOnMouseEnter(){
    this.setState({
      showTip: true
    });
  }

  // function for not showing tip when we don't hover on the container
  handleOnMouseLeave(){
    this.setState({
      showTip: false
    });
  }

  render(){
    return (
      <div className="App">
        <button className="tool-tip-btn" onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}> ToolTip <br></br> (Hover over me!)</button>

        {/* rendering the Tip component if showtip is set to be true and passing the position of Tip component as props */}
        {this.state.showTip && <Tip left="50%" top="0.3%"/>} 
      </div>
    );
  }
}

export default App;
