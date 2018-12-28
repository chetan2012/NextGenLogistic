import React,  { Component }  from 'react';

class App extends Component {

  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}


/*const App = () => (
  <div>
     <div id="content">

     </div>
  </div>
)*/


export default App;