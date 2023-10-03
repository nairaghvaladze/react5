import React, { Component } from 'react';

class MyComponents extends Component {
  constructor() {
    super();
    this.state = {
      name: '', // Initialize the input text variable with an empty string.
    };
  }

  handleInputChange = (event) => {
    this.setState({ name: event.target.value }); 
  }

  showAlert = () => {
    alert(` ${this.state.name}`); 
  }

  render() {
    return (
      <div className="d-flex  justify-content-center mt-4 ">
      
        <input 
          type="text"
          placeholder="Enter text"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        
       
        <button onClick={this.showAlert} className='btn-success'> Click Me</button>
       
       

      </div>
    );
  }
}

export default MyComponents;
