import React, { Component } from 'react';
import axios from 'axios';
import Output from './Components/Output';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      paras: 4,
      text: ''
    }
  }

  componentWillMount(){
    this.getSampleText();
  }
  getSampleText(){
    axios.get('http://skateipsum.com/get/'+this.state.paras)
      .then((response) => {
        this.setState({text: response.data.text}, function(){
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
