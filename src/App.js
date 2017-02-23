import React from 'react';
import logo from './logo.svg';
import './App.css';

import RichEditor from './RichEditor/index'

import { uuid } from './utils/index'

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(uuid());
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>基于 Draft.js 打造的编辑器</h2>
        </div>
        <div>
          <RichEditor />
        </div>
      </div>
    );
  }
}

export default App;
