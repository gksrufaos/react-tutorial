import React from 'react';
import PhoneForm from './components/PhoneForm';
import './App.css';

class App extends React.Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default App;
